/**
 * @schema AddTagsToResourceRequest
 */
export interface AddTagsToResourceRequest {
  /**
   * @schema AddTagsToResourceRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema AddTagsToResourceRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema AddTagsToResourceRequest#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema AddTagsToResourceResult
 */
export interface AddTagsToResourceResult {
}

/**
 * @schema CancelCommandRequest
 */
export interface CancelCommandRequest {
  /**
   * @schema CancelCommandRequest#CommandId
   */
  readonly commandId: string;

  /**
   * @schema CancelCommandRequest#InstanceIds
   */
  readonly instanceIds?: string[];

}

/**
 * @schema CancelCommandResult
 */
export interface CancelCommandResult {
}

/**
 * @schema CancelMaintenanceWindowExecutionRequest
 */
export interface CancelMaintenanceWindowExecutionRequest {
  /**
   * @schema CancelMaintenanceWindowExecutionRequest#WindowExecutionId
   */
  readonly windowExecutionId: string;

}

/**
 * @schema CancelMaintenanceWindowExecutionResult
 */
export interface CancelMaintenanceWindowExecutionResult {
  /**
   * @schema CancelMaintenanceWindowExecutionResult#WindowExecutionId
   */
  readonly windowExecutionId?: string;

}

/**
 * @schema CreateActivationRequest
 */
export interface CreateActivationRequest {
  /**
   * @schema CreateActivationRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateActivationRequest#DefaultInstanceName
   */
  readonly defaultInstanceName?: string;

  /**
   * @schema CreateActivationRequest#IamRole
   */
  readonly iamRole: string;

  /**
   * @schema CreateActivationRequest#RegistrationLimit
   */
  readonly registrationLimit?: number;

  /**
   * @schema CreateActivationRequest#ExpirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema CreateActivationRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateActivationResult
 */
export interface CreateActivationResult {
  /**
   * @schema CreateActivationResult#ActivationId
   */
  readonly activationId?: string;

  /**
   * @schema CreateActivationResult#ActivationCode
   */
  readonly activationCode?: string;

}

/**
 * @schema CreateAssociationRequest
 */
export interface CreateAssociationRequest {
  /**
   * @schema CreateAssociationRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateAssociationRequest#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema CreateAssociationRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema CreateAssociationRequest#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema CreateAssociationRequest#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema CreateAssociationRequest#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema CreateAssociationRequest#OutputLocation
   */
  readonly outputLocation?: InstanceAssociationOutputLocation;

  /**
   * @schema CreateAssociationRequest#AssociationName
   */
  readonly associationName?: string;

  /**
   * @schema CreateAssociationRequest#AutomationTargetParameterName
   */
  readonly automationTargetParameterName?: string;

  /**
   * @schema CreateAssociationRequest#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema CreateAssociationRequest#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema CreateAssociationRequest#ComplianceSeverity
   */
  readonly complianceSeverity?: string;

  /**
   * @schema CreateAssociationRequest#SyncCompliance
   */
  readonly syncCompliance?: string;

  /**
   * @schema CreateAssociationRequest#ApplyOnlyAtCronInterval
   */
  readonly applyOnlyAtCronInterval?: boolean;

}

/**
 * @schema CreateAssociationResult
 */
export interface CreateAssociationResult {
  /**
   * @schema CreateAssociationResult#AssociationDescription
   */
  readonly associationDescription?: AssociationDescription;

}

/**
 * @schema CreateAssociationBatchRequest
 */
export interface CreateAssociationBatchRequest {
  /**
   * @schema CreateAssociationBatchRequest#Entries
   */
  readonly entries: CreateAssociationBatchRequestEntry[];

}

/**
 * @schema CreateAssociationBatchResult
 */
export interface CreateAssociationBatchResult {
  /**
   * @schema CreateAssociationBatchResult#Successful
   */
  readonly successful?: AssociationDescription[];

  /**
   * @schema CreateAssociationBatchResult#Failed
   */
  readonly failed?: FailedCreateAssociation[];

}

/**
 * @schema CreateDocumentRequest
 */
export interface CreateDocumentRequest {
  /**
   * @schema CreateDocumentRequest#Content
   */
  readonly content: string;

  /**
   * @schema CreateDocumentRequest#Requires
   */
  readonly requires?: DocumentRequires[];

  /**
   * @schema CreateDocumentRequest#Attachments
   */
  readonly attachments?: AttachmentsSource[];

  /**
   * @schema CreateDocumentRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateDocumentRequest#VersionName
   */
  readonly versionName?: string;

  /**
   * @schema CreateDocumentRequest#DocumentType
   */
  readonly documentType?: string;

  /**
   * @schema CreateDocumentRequest#DocumentFormat
   */
  readonly documentFormat?: string;

  /**
   * @schema CreateDocumentRequest#TargetType
   */
  readonly targetType?: string;

  /**
   * @schema CreateDocumentRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateDocumentResult
 */
export interface CreateDocumentResult {
  /**
   * @schema CreateDocumentResult#DocumentDescription
   */
  readonly documentDescription?: DocumentDescription;

}

/**
 * @schema CreateMaintenanceWindowRequest
 */
export interface CreateMaintenanceWindowRequest {
  /**
   * @schema CreateMaintenanceWindowRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateMaintenanceWindowRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateMaintenanceWindowRequest#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema CreateMaintenanceWindowRequest#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema CreateMaintenanceWindowRequest#Schedule
   */
  readonly schedule: string;

  /**
   * @schema CreateMaintenanceWindowRequest#ScheduleTimezone
   */
  readonly scheduleTimezone?: string;

  /**
   * @schema CreateMaintenanceWindowRequest#ScheduleOffset
   */
  readonly scheduleOffset?: number;

  /**
   * @schema CreateMaintenanceWindowRequest#Duration
   */
  readonly duration: number;

  /**
   * @schema CreateMaintenanceWindowRequest#Cutoff
   */
  readonly cutoff: number;

  /**
   * @schema CreateMaintenanceWindowRequest#AllowUnassociatedTargets
   */
  readonly allowUnassociatedTargets: boolean;

  /**
   * @schema CreateMaintenanceWindowRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateMaintenanceWindowRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateMaintenanceWindowResult
 */
export interface CreateMaintenanceWindowResult {
  /**
   * @schema CreateMaintenanceWindowResult#WindowId
   */
  readonly windowId?: string;

}

/**
 * @schema CreateOpsItemRequest
 */
export interface CreateOpsItemRequest {
  /**
   * @schema CreateOpsItemRequest#Description
   */
  readonly description: string;

  /**
   * @schema CreateOpsItemRequest#OperationalData
   */
  readonly operationalData?: { [key: string]: OpsItemDataValue };

  /**
   * @schema CreateOpsItemRequest#Notifications
   */
  readonly notifications?: OpsItemNotification[];

  /**
   * @schema CreateOpsItemRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema CreateOpsItemRequest#RelatedOpsItems
   */
  readonly relatedOpsItems?: RelatedOpsItem[];

  /**
   * @schema CreateOpsItemRequest#Source
   */
  readonly source: string;

  /**
   * @schema CreateOpsItemRequest#Title
   */
  readonly title: string;

  /**
   * @schema CreateOpsItemRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateOpsItemRequest#Category
   */
  readonly category?: string;

  /**
   * @schema CreateOpsItemRequest#Severity
   */
  readonly severity?: string;

}

/**
 * @schema CreateOpsItemResponse
 */
export interface CreateOpsItemResponse {
  /**
   * @schema CreateOpsItemResponse#OpsItemId
   */
  readonly opsItemId?: string;

}

/**
 * @schema CreatePatchBaselineRequest
 */
export interface CreatePatchBaselineRequest {
  /**
   * @schema CreatePatchBaselineRequest#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema CreatePatchBaselineRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreatePatchBaselineRequest#GlobalFilters
   */
  readonly globalFilters?: PatchFilterGroup;

  /**
   * @schema CreatePatchBaselineRequest#ApprovalRules
   */
  readonly approvalRules?: PatchRuleGroup;

  /**
   * @schema CreatePatchBaselineRequest#ApprovedPatches
   */
  readonly approvedPatches?: string[];

  /**
   * @schema CreatePatchBaselineRequest#ApprovedPatchesComplianceLevel
   */
  readonly approvedPatchesComplianceLevel?: string;

  /**
   * @schema CreatePatchBaselineRequest#ApprovedPatchesEnableNonSecurity
   */
  readonly approvedPatchesEnableNonSecurity?: boolean;

  /**
   * @schema CreatePatchBaselineRequest#RejectedPatches
   */
  readonly rejectedPatches?: string[];

  /**
   * @schema CreatePatchBaselineRequest#RejectedPatchesAction
   */
  readonly rejectedPatchesAction?: string;

  /**
   * @schema CreatePatchBaselineRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreatePatchBaselineRequest#Sources
   */
  readonly sources?: PatchSource[];

  /**
   * @schema CreatePatchBaselineRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreatePatchBaselineRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreatePatchBaselineResult
 */
export interface CreatePatchBaselineResult {
  /**
   * @schema CreatePatchBaselineResult#BaselineId
   */
  readonly baselineId?: string;

}

/**
 * @schema CreateResourceDataSyncRequest
 */
export interface CreateResourceDataSyncRequest {
  /**
   * @schema CreateResourceDataSyncRequest#SyncName
   */
  readonly syncName: string;

  /**
   * @schema CreateResourceDataSyncRequest#S3Destination
   */
  readonly s3Destination?: ResourceDataSyncS3Destination;

  /**
   * @schema CreateResourceDataSyncRequest#SyncType
   */
  readonly syncType?: string;

  /**
   * @schema CreateResourceDataSyncRequest#SyncSource
   */
  readonly syncSource?: ResourceDataSyncSource;

}

/**
 * @schema CreateResourceDataSyncResult
 */
export interface CreateResourceDataSyncResult {
}

/**
 * @schema DeleteActivationRequest
 */
export interface DeleteActivationRequest {
  /**
   * @schema DeleteActivationRequest#ActivationId
   */
  readonly activationId: string;

}

/**
 * @schema DeleteActivationResult
 */
export interface DeleteActivationResult {
}

/**
 * @schema DeleteAssociationRequest
 */
export interface DeleteAssociationRequest {
  /**
   * @schema DeleteAssociationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DeleteAssociationRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema DeleteAssociationRequest#AssociationId
   */
  readonly associationId?: string;

}

/**
 * @schema DeleteAssociationResult
 */
export interface DeleteAssociationResult {
}

/**
 * @schema DeleteDocumentRequest
 */
export interface DeleteDocumentRequest {
  /**
   * @schema DeleteDocumentRequest#Name
   */
  readonly name: string;

  /**
   * @schema DeleteDocumentRequest#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema DeleteDocumentRequest#VersionName
   */
  readonly versionName?: string;

  /**
   * @schema DeleteDocumentRequest#Force
   */
  readonly force?: boolean;

}

/**
 * @schema DeleteDocumentResult
 */
export interface DeleteDocumentResult {
}

/**
 * @schema DeleteInventoryRequest
 */
export interface DeleteInventoryRequest {
  /**
   * @schema DeleteInventoryRequest#TypeName
   */
  readonly typeName: string;

  /**
   * @schema DeleteInventoryRequest#SchemaDeleteOption
   */
  readonly schemaDeleteOption?: string;

  /**
   * @schema DeleteInventoryRequest#DryRun
   */
  readonly dryRun?: boolean;

  /**
   * @schema DeleteInventoryRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema DeleteInventoryResult
 */
export interface DeleteInventoryResult {
  /**
   * @schema DeleteInventoryResult#DeletionId
   */
  readonly deletionId?: string;

  /**
   * @schema DeleteInventoryResult#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema DeleteInventoryResult#DeletionSummary
   */
  readonly deletionSummary?: InventoryDeletionSummary;

}

/**
 * @schema DeleteMaintenanceWindowRequest
 */
export interface DeleteMaintenanceWindowRequest {
  /**
   * @schema DeleteMaintenanceWindowRequest#WindowId
   */
  readonly windowId: string;

}

/**
 * @schema DeleteMaintenanceWindowResult
 */
export interface DeleteMaintenanceWindowResult {
  /**
   * @schema DeleteMaintenanceWindowResult#WindowId
   */
  readonly windowId?: string;

}

/**
 * @schema DeleteParameterRequest
 */
export interface DeleteParameterRequest {
  /**
   * @schema DeleteParameterRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteParameterResult
 */
export interface DeleteParameterResult {
}

/**
 * @schema DeleteParametersRequest
 */
export interface DeleteParametersRequest {
  /**
   * @schema DeleteParametersRequest#Names
   */
  readonly names: string[];

}

/**
 * @schema DeleteParametersResult
 */
export interface DeleteParametersResult {
  /**
   * @schema DeleteParametersResult#DeletedParameters
   */
  readonly deletedParameters?: string[];

  /**
   * @schema DeleteParametersResult#InvalidParameters
   */
  readonly invalidParameters?: string[];

}

/**
 * @schema DeletePatchBaselineRequest
 */
export interface DeletePatchBaselineRequest {
  /**
   * @schema DeletePatchBaselineRequest#BaselineId
   */
  readonly baselineId: string;

}

/**
 * @schema DeletePatchBaselineResult
 */
export interface DeletePatchBaselineResult {
  /**
   * @schema DeletePatchBaselineResult#BaselineId
   */
  readonly baselineId?: string;

}

/**
 * @schema DeleteResourceDataSyncRequest
 */
export interface DeleteResourceDataSyncRequest {
  /**
   * @schema DeleteResourceDataSyncRequest#SyncName
   */
  readonly syncName: string;

  /**
   * @schema DeleteResourceDataSyncRequest#SyncType
   */
  readonly syncType?: string;

}

/**
 * @schema DeleteResourceDataSyncResult
 */
export interface DeleteResourceDataSyncResult {
}

/**
 * @schema DeregisterManagedInstanceRequest
 */
export interface DeregisterManagedInstanceRequest {
  /**
   * @schema DeregisterManagedInstanceRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema DeregisterManagedInstanceResult
 */
export interface DeregisterManagedInstanceResult {
}

/**
 * @schema DeregisterPatchBaselineForPatchGroupRequest
 */
export interface DeregisterPatchBaselineForPatchGroupRequest {
  /**
   * @schema DeregisterPatchBaselineForPatchGroupRequest#BaselineId
   */
  readonly baselineId: string;

  /**
   * @schema DeregisterPatchBaselineForPatchGroupRequest#PatchGroup
   */
  readonly patchGroup: string;

}

/**
 * @schema DeregisterPatchBaselineForPatchGroupResult
 */
export interface DeregisterPatchBaselineForPatchGroupResult {
  /**
   * @schema DeregisterPatchBaselineForPatchGroupResult#BaselineId
   */
  readonly baselineId?: string;

  /**
   * @schema DeregisterPatchBaselineForPatchGroupResult#PatchGroup
   */
  readonly patchGroup?: string;

}

/**
 * @schema DeregisterTargetFromMaintenanceWindowRequest
 */
export interface DeregisterTargetFromMaintenanceWindowRequest {
  /**
   * @schema DeregisterTargetFromMaintenanceWindowRequest#WindowId
   */
  readonly windowId: string;

  /**
   * @schema DeregisterTargetFromMaintenanceWindowRequest#WindowTargetId
   */
  readonly windowTargetId: string;

  /**
   * @schema DeregisterTargetFromMaintenanceWindowRequest#Safe
   */
  readonly safe?: boolean;

}

/**
 * @schema DeregisterTargetFromMaintenanceWindowResult
 */
export interface DeregisterTargetFromMaintenanceWindowResult {
  /**
   * @schema DeregisterTargetFromMaintenanceWindowResult#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema DeregisterTargetFromMaintenanceWindowResult#WindowTargetId
   */
  readonly windowTargetId?: string;

}

/**
 * @schema DeregisterTaskFromMaintenanceWindowRequest
 */
export interface DeregisterTaskFromMaintenanceWindowRequest {
  /**
   * @schema DeregisterTaskFromMaintenanceWindowRequest#WindowId
   */
  readonly windowId: string;

  /**
   * @schema DeregisterTaskFromMaintenanceWindowRequest#WindowTaskId
   */
  readonly windowTaskId: string;

}

/**
 * @schema DeregisterTaskFromMaintenanceWindowResult
 */
export interface DeregisterTaskFromMaintenanceWindowResult {
  /**
   * @schema DeregisterTaskFromMaintenanceWindowResult#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema DeregisterTaskFromMaintenanceWindowResult#WindowTaskId
   */
  readonly windowTaskId?: string;

}

/**
 * @schema DescribeActivationsRequest
 */
export interface DescribeActivationsRequest {
  /**
   * @schema DescribeActivationsRequest#Filters
   */
  readonly filters?: DescribeActivationsFilter[];

  /**
   * @schema DescribeActivationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeActivationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeActivationsResult
 */
export interface DescribeActivationsResult {
  /**
   * @schema DescribeActivationsResult#ActivationList
   */
  readonly activationList?: Activation[];

  /**
   * @schema DescribeActivationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeAssociationRequest
 */
export interface DescribeAssociationRequest {
  /**
   * @schema DescribeAssociationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeAssociationRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema DescribeAssociationRequest#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema DescribeAssociationRequest#AssociationVersion
   */
  readonly associationVersion?: string;

}

/**
 * @schema DescribeAssociationResult
 */
export interface DescribeAssociationResult {
  /**
   * @schema DescribeAssociationResult#AssociationDescription
   */
  readonly associationDescription?: AssociationDescription;

}

/**
 * @schema DescribeAssociationExecutionTargetsRequest
 */
export interface DescribeAssociationExecutionTargetsRequest {
  /**
   * @schema DescribeAssociationExecutionTargetsRequest#AssociationId
   */
  readonly associationId: string;

  /**
   * @schema DescribeAssociationExecutionTargetsRequest#ExecutionId
   */
  readonly executionId: string;

  /**
   * @schema DescribeAssociationExecutionTargetsRequest#Filters
   */
  readonly filters?: AssociationExecutionTargetsFilter[];

  /**
   * @schema DescribeAssociationExecutionTargetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeAssociationExecutionTargetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeAssociationExecutionTargetsResult
 */
export interface DescribeAssociationExecutionTargetsResult {
  /**
   * @schema DescribeAssociationExecutionTargetsResult#AssociationExecutionTargets
   */
  readonly associationExecutionTargets?: AssociationExecutionTarget[];

  /**
   * @schema DescribeAssociationExecutionTargetsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeAssociationExecutionsRequest
 */
export interface DescribeAssociationExecutionsRequest {
  /**
   * @schema DescribeAssociationExecutionsRequest#AssociationId
   */
  readonly associationId: string;

  /**
   * @schema DescribeAssociationExecutionsRequest#Filters
   */
  readonly filters?: AssociationExecutionFilter[];

  /**
   * @schema DescribeAssociationExecutionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeAssociationExecutionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeAssociationExecutionsResult
 */
export interface DescribeAssociationExecutionsResult {
  /**
   * @schema DescribeAssociationExecutionsResult#AssociationExecutions
   */
  readonly associationExecutions?: AssociationExecution[];

  /**
   * @schema DescribeAssociationExecutionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeAutomationExecutionsRequest
 */
export interface DescribeAutomationExecutionsRequest {
  /**
   * @schema DescribeAutomationExecutionsRequest#Filters
   */
  readonly filters?: AutomationExecutionFilter[];

  /**
   * @schema DescribeAutomationExecutionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeAutomationExecutionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeAutomationExecutionsResult
 */
export interface DescribeAutomationExecutionsResult {
  /**
   * @schema DescribeAutomationExecutionsResult#AutomationExecutionMetadataList
   */
  readonly automationExecutionMetadataList?: AutomationExecutionMetadata[];

  /**
   * @schema DescribeAutomationExecutionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeAutomationStepExecutionsRequest
 */
export interface DescribeAutomationStepExecutionsRequest {
  /**
   * @schema DescribeAutomationStepExecutionsRequest#AutomationExecutionId
   */
  readonly automationExecutionId: string;

  /**
   * @schema DescribeAutomationStepExecutionsRequest#Filters
   */
  readonly filters?: StepExecutionFilter[];

  /**
   * @schema DescribeAutomationStepExecutionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeAutomationStepExecutionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeAutomationStepExecutionsRequest#ReverseOrder
   */
  readonly reverseOrder?: boolean;

}

/**
 * @schema DescribeAutomationStepExecutionsResult
 */
export interface DescribeAutomationStepExecutionsResult {
  /**
   * @schema DescribeAutomationStepExecutionsResult#StepExecutions
   */
  readonly stepExecutions?: StepExecution[];

  /**
   * @schema DescribeAutomationStepExecutionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeAvailablePatchesRequest
 */
export interface DescribeAvailablePatchesRequest {
  /**
   * @schema DescribeAvailablePatchesRequest#Filters
   */
  readonly filters?: PatchOrchestratorFilter[];

  /**
   * @schema DescribeAvailablePatchesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeAvailablePatchesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeAvailablePatchesResult
 */
export interface DescribeAvailablePatchesResult {
  /**
   * @schema DescribeAvailablePatchesResult#Patches
   */
  readonly patches?: Patch[];

  /**
   * @schema DescribeAvailablePatchesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeDocumentRequest
 */
export interface DescribeDocumentRequest {
  /**
   * @schema DescribeDocumentRequest#Name
   */
  readonly name: string;

  /**
   * @schema DescribeDocumentRequest#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema DescribeDocumentRequest#VersionName
   */
  readonly versionName?: string;

}

/**
 * @schema DescribeDocumentResult
 */
export interface DescribeDocumentResult {
  /**
   * @schema DescribeDocumentResult#Document
   */
  readonly document?: DocumentDescription;

}

/**
 * @schema DescribeDocumentPermissionRequest
 */
export interface DescribeDocumentPermissionRequest {
  /**
   * @schema DescribeDocumentPermissionRequest#Name
   */
  readonly name: string;

  /**
   * @schema DescribeDocumentPermissionRequest#PermissionType
   */
  readonly permissionType: string;

}

/**
 * @schema DescribeDocumentPermissionResponse
 */
export interface DescribeDocumentPermissionResponse {
  /**
   * @schema DescribeDocumentPermissionResponse#AccountIds
   */
  readonly accountIds?: string[];

  /**
   * @schema DescribeDocumentPermissionResponse#AccountSharingInfoList
   */
  readonly accountSharingInfoList?: AccountSharingInfo[];

}

/**
 * @schema DescribeEffectiveInstanceAssociationsRequest
 */
export interface DescribeEffectiveInstanceAssociationsRequest {
  /**
   * @schema DescribeEffectiveInstanceAssociationsRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema DescribeEffectiveInstanceAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeEffectiveInstanceAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeEffectiveInstanceAssociationsResult
 */
export interface DescribeEffectiveInstanceAssociationsResult {
  /**
   * @schema DescribeEffectiveInstanceAssociationsResult#Associations
   */
  readonly associations?: InstanceAssociation[];

  /**
   * @schema DescribeEffectiveInstanceAssociationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeEffectivePatchesForPatchBaselineRequest
 */
export interface DescribeEffectivePatchesForPatchBaselineRequest {
  /**
   * @schema DescribeEffectivePatchesForPatchBaselineRequest#BaselineId
   */
  readonly baselineId: string;

  /**
   * @schema DescribeEffectivePatchesForPatchBaselineRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeEffectivePatchesForPatchBaselineRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeEffectivePatchesForPatchBaselineResult
 */
export interface DescribeEffectivePatchesForPatchBaselineResult {
  /**
   * @schema DescribeEffectivePatchesForPatchBaselineResult#EffectivePatches
   */
  readonly effectivePatches?: EffectivePatch[];

  /**
   * @schema DescribeEffectivePatchesForPatchBaselineResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInstanceAssociationsStatusRequest
 */
export interface DescribeInstanceAssociationsStatusRequest {
  /**
   * @schema DescribeInstanceAssociationsStatusRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema DescribeInstanceAssociationsStatusRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeInstanceAssociationsStatusRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInstanceAssociationsStatusResult
 */
export interface DescribeInstanceAssociationsStatusResult {
  /**
   * @schema DescribeInstanceAssociationsStatusResult#InstanceAssociationStatusInfos
   */
  readonly instanceAssociationStatusInfos?: InstanceAssociationStatusInfo[];

  /**
   * @schema DescribeInstanceAssociationsStatusResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInstanceInformationRequest
 */
export interface DescribeInstanceInformationRequest {
  /**
   * @schema DescribeInstanceInformationRequest#InstanceInformationFilterList
   */
  readonly instanceInformationFilterList?: InstanceInformationFilter[];

  /**
   * @schema DescribeInstanceInformationRequest#Filters
   */
  readonly filters?: InstanceInformationStringFilter[];

  /**
   * @schema DescribeInstanceInformationRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeInstanceInformationRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInstanceInformationResult
 */
export interface DescribeInstanceInformationResult {
  /**
   * @schema DescribeInstanceInformationResult#InstanceInformationList
   */
  readonly instanceInformationList?: InstanceInformation[];

  /**
   * @schema DescribeInstanceInformationResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInstancePatchStatesRequest
 */
export interface DescribeInstancePatchStatesRequest {
  /**
   * @schema DescribeInstancePatchStatesRequest#InstanceIds
   */
  readonly instanceIds: string[];

  /**
   * @schema DescribeInstancePatchStatesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeInstancePatchStatesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeInstancePatchStatesResult
 */
export interface DescribeInstancePatchStatesResult {
  /**
   * @schema DescribeInstancePatchStatesResult#InstancePatchStates
   */
  readonly instancePatchStates?: InstancePatchState[];

  /**
   * @schema DescribeInstancePatchStatesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInstancePatchStatesForPatchGroupRequest
 */
export interface DescribeInstancePatchStatesForPatchGroupRequest {
  /**
   * @schema DescribeInstancePatchStatesForPatchGroupRequest#PatchGroup
   */
  readonly patchGroup: string;

  /**
   * @schema DescribeInstancePatchStatesForPatchGroupRequest#Filters
   */
  readonly filters?: InstancePatchStateFilter[];

  /**
   * @schema DescribeInstancePatchStatesForPatchGroupRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeInstancePatchStatesForPatchGroupRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeInstancePatchStatesForPatchGroupResult
 */
export interface DescribeInstancePatchStatesForPatchGroupResult {
  /**
   * @schema DescribeInstancePatchStatesForPatchGroupResult#InstancePatchStates
   */
  readonly instancePatchStates?: InstancePatchState[];

  /**
   * @schema DescribeInstancePatchStatesForPatchGroupResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInstancePatchesRequest
 */
export interface DescribeInstancePatchesRequest {
  /**
   * @schema DescribeInstancePatchesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema DescribeInstancePatchesRequest#Filters
   */
  readonly filters?: PatchOrchestratorFilter[];

  /**
   * @schema DescribeInstancePatchesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeInstancePatchesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeInstancePatchesResult
 */
export interface DescribeInstancePatchesResult {
  /**
   * @schema DescribeInstancePatchesResult#Patches
   */
  readonly patches?: PatchComplianceData[];

  /**
   * @schema DescribeInstancePatchesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeInventoryDeletionsRequest
 */
export interface DescribeInventoryDeletionsRequest {
  /**
   * @schema DescribeInventoryDeletionsRequest#DeletionId
   */
  readonly deletionId?: string;

  /**
   * @schema DescribeInventoryDeletionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeInventoryDeletionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeInventoryDeletionsResult
 */
export interface DescribeInventoryDeletionsResult {
  /**
   * @schema DescribeInventoryDeletionsResult#InventoryDeletions
   */
  readonly inventoryDeletions?: InventoryDeletionStatusItem[];

  /**
   * @schema DescribeInventoryDeletionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMaintenanceWindowExecutionTaskInvocationsRequest
 */
export interface DescribeMaintenanceWindowExecutionTaskInvocationsRequest {
  /**
   * @schema DescribeMaintenanceWindowExecutionTaskInvocationsRequest#WindowExecutionId
   */
  readonly windowExecutionId: string;

  /**
   * @schema DescribeMaintenanceWindowExecutionTaskInvocationsRequest#TaskId
   */
  readonly taskId: string;

  /**
   * @schema DescribeMaintenanceWindowExecutionTaskInvocationsRequest#Filters
   */
  readonly filters?: MaintenanceWindowFilter[];

  /**
   * @schema DescribeMaintenanceWindowExecutionTaskInvocationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeMaintenanceWindowExecutionTaskInvocationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMaintenanceWindowExecutionTaskInvocationsResult
 */
export interface DescribeMaintenanceWindowExecutionTaskInvocationsResult {
  /**
   * @schema DescribeMaintenanceWindowExecutionTaskInvocationsResult#WindowExecutionTaskInvocationIdentities
   */
  readonly windowExecutionTaskInvocationIdentities?: MaintenanceWindowExecutionTaskInvocationIdentity[];

  /**
   * @schema DescribeMaintenanceWindowExecutionTaskInvocationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMaintenanceWindowExecutionTasksRequest
 */
export interface DescribeMaintenanceWindowExecutionTasksRequest {
  /**
   * @schema DescribeMaintenanceWindowExecutionTasksRequest#WindowExecutionId
   */
  readonly windowExecutionId: string;

  /**
   * @schema DescribeMaintenanceWindowExecutionTasksRequest#Filters
   */
  readonly filters?: MaintenanceWindowFilter[];

  /**
   * @schema DescribeMaintenanceWindowExecutionTasksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeMaintenanceWindowExecutionTasksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMaintenanceWindowExecutionTasksResult
 */
export interface DescribeMaintenanceWindowExecutionTasksResult {
  /**
   * @schema DescribeMaintenanceWindowExecutionTasksResult#WindowExecutionTaskIdentities
   */
  readonly windowExecutionTaskIdentities?: MaintenanceWindowExecutionTaskIdentity[];

  /**
   * @schema DescribeMaintenanceWindowExecutionTasksResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMaintenanceWindowExecutionsRequest
 */
export interface DescribeMaintenanceWindowExecutionsRequest {
  /**
   * @schema DescribeMaintenanceWindowExecutionsRequest#WindowId
   */
  readonly windowId: string;

  /**
   * @schema DescribeMaintenanceWindowExecutionsRequest#Filters
   */
  readonly filters?: MaintenanceWindowFilter[];

  /**
   * @schema DescribeMaintenanceWindowExecutionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeMaintenanceWindowExecutionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMaintenanceWindowExecutionsResult
 */
export interface DescribeMaintenanceWindowExecutionsResult {
  /**
   * @schema DescribeMaintenanceWindowExecutionsResult#WindowExecutions
   */
  readonly windowExecutions?: MaintenanceWindowExecution[];

  /**
   * @schema DescribeMaintenanceWindowExecutionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMaintenanceWindowScheduleRequest
 */
export interface DescribeMaintenanceWindowScheduleRequest {
  /**
   * @schema DescribeMaintenanceWindowScheduleRequest#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema DescribeMaintenanceWindowScheduleRequest#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema DescribeMaintenanceWindowScheduleRequest#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema DescribeMaintenanceWindowScheduleRequest#Filters
   */
  readonly filters?: PatchOrchestratorFilter[];

  /**
   * @schema DescribeMaintenanceWindowScheduleRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeMaintenanceWindowScheduleRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMaintenanceWindowScheduleResult
 */
export interface DescribeMaintenanceWindowScheduleResult {
  /**
   * @schema DescribeMaintenanceWindowScheduleResult#ScheduledWindowExecutions
   */
  readonly scheduledWindowExecutions?: ScheduledWindowExecution[];

  /**
   * @schema DescribeMaintenanceWindowScheduleResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMaintenanceWindowTargetsRequest
 */
export interface DescribeMaintenanceWindowTargetsRequest {
  /**
   * @schema DescribeMaintenanceWindowTargetsRequest#WindowId
   */
  readonly windowId: string;

  /**
   * @schema DescribeMaintenanceWindowTargetsRequest#Filters
   */
  readonly filters?: MaintenanceWindowFilter[];

  /**
   * @schema DescribeMaintenanceWindowTargetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeMaintenanceWindowTargetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMaintenanceWindowTargetsResult
 */
export interface DescribeMaintenanceWindowTargetsResult {
  /**
   * @schema DescribeMaintenanceWindowTargetsResult#Targets
   */
  readonly targets?: MaintenanceWindowTarget[];

  /**
   * @schema DescribeMaintenanceWindowTargetsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMaintenanceWindowTasksRequest
 */
export interface DescribeMaintenanceWindowTasksRequest {
  /**
   * @schema DescribeMaintenanceWindowTasksRequest#WindowId
   */
  readonly windowId: string;

  /**
   * @schema DescribeMaintenanceWindowTasksRequest#Filters
   */
  readonly filters?: MaintenanceWindowFilter[];

  /**
   * @schema DescribeMaintenanceWindowTasksRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeMaintenanceWindowTasksRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMaintenanceWindowTasksResult
 */
export interface DescribeMaintenanceWindowTasksResult {
  /**
   * @schema DescribeMaintenanceWindowTasksResult#Tasks
   */
  readonly tasks?: MaintenanceWindowTask[];

  /**
   * @schema DescribeMaintenanceWindowTasksResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMaintenanceWindowsRequest
 */
export interface DescribeMaintenanceWindowsRequest {
  /**
   * @schema DescribeMaintenanceWindowsRequest#Filters
   */
  readonly filters?: MaintenanceWindowFilter[];

  /**
   * @schema DescribeMaintenanceWindowsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeMaintenanceWindowsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMaintenanceWindowsResult
 */
export interface DescribeMaintenanceWindowsResult {
  /**
   * @schema DescribeMaintenanceWindowsResult#WindowIdentities
   */
  readonly windowIdentities?: MaintenanceWindowIdentity[];

  /**
   * @schema DescribeMaintenanceWindowsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMaintenanceWindowsForTargetRequest
 */
export interface DescribeMaintenanceWindowsForTargetRequest {
  /**
   * @schema DescribeMaintenanceWindowsForTargetRequest#Targets
   */
  readonly targets: Target[];

  /**
   * @schema DescribeMaintenanceWindowsForTargetRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema DescribeMaintenanceWindowsForTargetRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeMaintenanceWindowsForTargetRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMaintenanceWindowsForTargetResult
 */
export interface DescribeMaintenanceWindowsForTargetResult {
  /**
   * @schema DescribeMaintenanceWindowsForTargetResult#WindowIdentities
   */
  readonly windowIdentities?: MaintenanceWindowIdentityForTarget[];

  /**
   * @schema DescribeMaintenanceWindowsForTargetResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeOpsItemsRequest
 */
export interface DescribeOpsItemsRequest {
  /**
   * @schema DescribeOpsItemsRequest#OpsItemFilters
   */
  readonly opsItemFilters?: OpsItemFilter[];

  /**
   * @schema DescribeOpsItemsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeOpsItemsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeOpsItemsResponse
 */
export interface DescribeOpsItemsResponse {
  /**
   * @schema DescribeOpsItemsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeOpsItemsResponse#OpsItemSummaries
   */
  readonly opsItemSummaries?: OpsItemSummary[];

}

/**
 * @schema DescribeParametersRequest
 */
export interface DescribeParametersRequest {
  /**
   * @schema DescribeParametersRequest#Filters
   */
  readonly filters?: ParametersFilter[];

  /**
   * @schema DescribeParametersRequest#ParameterFilters
   */
  readonly parameterFilters?: ParameterStringFilter[];

  /**
   * @schema DescribeParametersRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeParametersRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeParametersResult
 */
export interface DescribeParametersResult {
  /**
   * @schema DescribeParametersResult#Parameters
   */
  readonly parameters?: ParameterMetadata[];

  /**
   * @schema DescribeParametersResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribePatchBaselinesRequest
 */
export interface DescribePatchBaselinesRequest {
  /**
   * @schema DescribePatchBaselinesRequest#Filters
   */
  readonly filters?: PatchOrchestratorFilter[];

  /**
   * @schema DescribePatchBaselinesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribePatchBaselinesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribePatchBaselinesResult
 */
export interface DescribePatchBaselinesResult {
  /**
   * @schema DescribePatchBaselinesResult#BaselineIdentities
   */
  readonly baselineIdentities?: PatchBaselineIdentity[];

  /**
   * @schema DescribePatchBaselinesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribePatchGroupStateRequest
 */
export interface DescribePatchGroupStateRequest {
  /**
   * @schema DescribePatchGroupStateRequest#PatchGroup
   */
  readonly patchGroup: string;

}

/**
 * @schema DescribePatchGroupStateResult
 */
export interface DescribePatchGroupStateResult {
  /**
   * @schema DescribePatchGroupStateResult#Instances
   */
  readonly instances?: number;

  /**
   * @schema DescribePatchGroupStateResult#InstancesWithInstalledPatches
   */
  readonly instancesWithInstalledPatches?: number;

  /**
   * @schema DescribePatchGroupStateResult#InstancesWithInstalledOtherPatches
   */
  readonly instancesWithInstalledOtherPatches?: number;

  /**
   * @schema DescribePatchGroupStateResult#InstancesWithInstalledPendingRebootPatches
   */
  readonly instancesWithInstalledPendingRebootPatches?: number;

  /**
   * @schema DescribePatchGroupStateResult#InstancesWithInstalledRejectedPatches
   */
  readonly instancesWithInstalledRejectedPatches?: number;

  /**
   * @schema DescribePatchGroupStateResult#InstancesWithMissingPatches
   */
  readonly instancesWithMissingPatches?: number;

  /**
   * @schema DescribePatchGroupStateResult#InstancesWithFailedPatches
   */
  readonly instancesWithFailedPatches?: number;

  /**
   * @schema DescribePatchGroupStateResult#InstancesWithNotApplicablePatches
   */
  readonly instancesWithNotApplicablePatches?: number;

  /**
   * @schema DescribePatchGroupStateResult#InstancesWithUnreportedNotApplicablePatches
   */
  readonly instancesWithUnreportedNotApplicablePatches?: number;

}

/**
 * @schema DescribePatchGroupsRequest
 */
export interface DescribePatchGroupsRequest {
  /**
   * @schema DescribePatchGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribePatchGroupsRequest#Filters
   */
  readonly filters?: PatchOrchestratorFilter[];

  /**
   * @schema DescribePatchGroupsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribePatchGroupsResult
 */
export interface DescribePatchGroupsResult {
  /**
   * @schema DescribePatchGroupsResult#Mappings
   */
  readonly mappings?: PatchGroupPatchBaselineMapping[];

  /**
   * @schema DescribePatchGroupsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribePatchPropertiesRequest
 */
export interface DescribePatchPropertiesRequest {
  /**
   * @schema DescribePatchPropertiesRequest#OperatingSystem
   */
  readonly operatingSystem: string;

  /**
   * @schema DescribePatchPropertiesRequest#Property
   */
  readonly property: string;

  /**
   * @schema DescribePatchPropertiesRequest#PatchSet
   */
  readonly patchSet?: string;

  /**
   * @schema DescribePatchPropertiesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribePatchPropertiesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribePatchPropertiesResult
 */
export interface DescribePatchPropertiesResult {
  /**
   * @schema DescribePatchPropertiesResult#Properties
   */
  readonly properties?: { [key: string]: string }[];

  /**
   * @schema DescribePatchPropertiesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeSessionsRequest
 */
export interface DescribeSessionsRequest {
  /**
   * @schema DescribeSessionsRequest#State
   */
  readonly state: string;

  /**
   * @schema DescribeSessionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DescribeSessionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeSessionsRequest#Filters
   */
  readonly filters?: SessionFilter[];

}

/**
 * @schema DescribeSessionsResponse
 */
export interface DescribeSessionsResponse {
  /**
   * @schema DescribeSessionsResponse#Sessions
   */
  readonly sessions?: Session[];

  /**
   * @schema DescribeSessionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetAutomationExecutionRequest
 */
export interface GetAutomationExecutionRequest {
  /**
   * @schema GetAutomationExecutionRequest#AutomationExecutionId
   */
  readonly automationExecutionId: string;

}

/**
 * @schema GetAutomationExecutionResult
 */
export interface GetAutomationExecutionResult {
  /**
   * @schema GetAutomationExecutionResult#AutomationExecution
   */
  readonly automationExecution?: AutomationExecution;

}

/**
 * @schema GetCalendarStateRequest
 */
export interface GetCalendarStateRequest {
  /**
   * @schema GetCalendarStateRequest#CalendarNames
   */
  readonly calendarNames: string[];

  /**
   * @schema GetCalendarStateRequest#AtTime
   */
  readonly atTime?: string;

}

/**
 * @schema GetCalendarStateResponse
 */
export interface GetCalendarStateResponse {
  /**
   * @schema GetCalendarStateResponse#State
   */
  readonly state?: string;

  /**
   * @schema GetCalendarStateResponse#AtTime
   */
  readonly atTime?: string;

  /**
   * @schema GetCalendarStateResponse#NextTransitionTime
   */
  readonly nextTransitionTime?: string;

}

/**
 * @schema GetCommandInvocationRequest
 */
export interface GetCommandInvocationRequest {
  /**
   * @schema GetCommandInvocationRequest#CommandId
   */
  readonly commandId: string;

  /**
   * @schema GetCommandInvocationRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema GetCommandInvocationRequest#PluginName
   */
  readonly pluginName?: string;

}

/**
 * @schema GetCommandInvocationResult
 */
export interface GetCommandInvocationResult {
  /**
   * @schema GetCommandInvocationResult#CommandId
   */
  readonly commandId?: string;

  /**
   * @schema GetCommandInvocationResult#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema GetCommandInvocationResult#Comment
   */
  readonly comment?: string;

  /**
   * @schema GetCommandInvocationResult#DocumentName
   */
  readonly documentName?: string;

  /**
   * @schema GetCommandInvocationResult#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema GetCommandInvocationResult#PluginName
   */
  readonly pluginName?: string;

  /**
   * @schema GetCommandInvocationResult#ResponseCode
   */
  readonly responseCode?: number;

  /**
   * @schema GetCommandInvocationResult#ExecutionStartDateTime
   */
  readonly executionStartDateTime?: string;

  /**
   * @schema GetCommandInvocationResult#ExecutionElapsedTime
   */
  readonly executionElapsedTime?: string;

  /**
   * @schema GetCommandInvocationResult#ExecutionEndDateTime
   */
  readonly executionEndDateTime?: string;

  /**
   * @schema GetCommandInvocationResult#Status
   */
  readonly status?: string;

  /**
   * @schema GetCommandInvocationResult#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema GetCommandInvocationResult#StandardOutputContent
   */
  readonly standardOutputContent?: string;

  /**
   * @schema GetCommandInvocationResult#StandardOutputUrl
   */
  readonly standardOutputUrl?: string;

  /**
   * @schema GetCommandInvocationResult#StandardErrorContent
   */
  readonly standardErrorContent?: string;

  /**
   * @schema GetCommandInvocationResult#StandardErrorUrl
   */
  readonly standardErrorUrl?: string;

  /**
   * @schema GetCommandInvocationResult#CloudWatchOutputConfig
   */
  readonly cloudWatchOutputConfig?: CloudWatchOutputConfig;

}

/**
 * @schema GetConnectionStatusRequest
 */
export interface GetConnectionStatusRequest {
  /**
   * @schema GetConnectionStatusRequest#Target
   */
  readonly target: string;

}

/**
 * @schema GetConnectionStatusResponse
 */
export interface GetConnectionStatusResponse {
  /**
   * @schema GetConnectionStatusResponse#Target
   */
  readonly target?: string;

  /**
   * @schema GetConnectionStatusResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema GetDefaultPatchBaselineRequest
 */
export interface GetDefaultPatchBaselineRequest {
  /**
   * @schema GetDefaultPatchBaselineRequest#OperatingSystem
   */
  readonly operatingSystem?: string;

}

/**
 * @schema GetDefaultPatchBaselineResult
 */
export interface GetDefaultPatchBaselineResult {
  /**
   * @schema GetDefaultPatchBaselineResult#BaselineId
   */
  readonly baselineId?: string;

  /**
   * @schema GetDefaultPatchBaselineResult#OperatingSystem
   */
  readonly operatingSystem?: string;

}

/**
 * @schema GetDeployablePatchSnapshotForInstanceRequest
 */
export interface GetDeployablePatchSnapshotForInstanceRequest {
  /**
   * @schema GetDeployablePatchSnapshotForInstanceRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema GetDeployablePatchSnapshotForInstanceRequest#SnapshotId
   */
  readonly snapshotId: string;

}

/**
 * @schema GetDeployablePatchSnapshotForInstanceResult
 */
export interface GetDeployablePatchSnapshotForInstanceResult {
  /**
   * @schema GetDeployablePatchSnapshotForInstanceResult#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema GetDeployablePatchSnapshotForInstanceResult#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema GetDeployablePatchSnapshotForInstanceResult#SnapshotDownloadUrl
   */
  readonly snapshotDownloadUrl?: string;

  /**
   * @schema GetDeployablePatchSnapshotForInstanceResult#Product
   */
  readonly product?: string;

}

/**
 * @schema GetDocumentRequest
 */
export interface GetDocumentRequest {
  /**
   * @schema GetDocumentRequest#Name
   */
  readonly name: string;

  /**
   * @schema GetDocumentRequest#VersionName
   */
  readonly versionName?: string;

  /**
   * @schema GetDocumentRequest#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema GetDocumentRequest#DocumentFormat
   */
  readonly documentFormat?: string;

}

/**
 * @schema GetDocumentResult
 */
export interface GetDocumentResult {
  /**
   * @schema GetDocumentResult#Name
   */
  readonly name?: string;

  /**
   * @schema GetDocumentResult#VersionName
   */
  readonly versionName?: string;

  /**
   * @schema GetDocumentResult#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema GetDocumentResult#Status
   */
  readonly status?: string;

  /**
   * @schema GetDocumentResult#StatusInformation
   */
  readonly statusInformation?: string;

  /**
   * @schema GetDocumentResult#Content
   */
  readonly content?: string;

  /**
   * @schema GetDocumentResult#DocumentType
   */
  readonly documentType?: string;

  /**
   * @schema GetDocumentResult#DocumentFormat
   */
  readonly documentFormat?: string;

  /**
   * @schema GetDocumentResult#Requires
   */
  readonly requires?: DocumentRequires[];

  /**
   * @schema GetDocumentResult#AttachmentsContent
   */
  readonly attachmentsContent?: AttachmentContent[];

}

/**
 * @schema GetInventoryRequest
 */
export interface GetInventoryRequest {
  /**
   * @schema GetInventoryRequest#Filters
   */
  readonly filters?: InventoryFilter[];

  /**
   * @schema GetInventoryRequest#Aggregators
   */
  readonly aggregators?: InventoryAggregator[];

  /**
   * @schema GetInventoryRequest#ResultAttributes
   */
  readonly resultAttributes?: ResultAttribute[];

  /**
   * @schema GetInventoryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetInventoryRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetInventoryResult
 */
export interface GetInventoryResult {
  /**
   * @schema GetInventoryResult#Entities
   */
  readonly entities?: InventoryResultEntity[];

  /**
   * @schema GetInventoryResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetInventorySchemaRequest
 */
export interface GetInventorySchemaRequest {
  /**
   * @schema GetInventorySchemaRequest#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema GetInventorySchemaRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetInventorySchemaRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetInventorySchemaRequest#Aggregator
   */
  readonly aggregator?: boolean;

  /**
   * @schema GetInventorySchemaRequest#SubType
   */
  readonly subType?: boolean;

}

/**
 * @schema GetInventorySchemaResult
 */
export interface GetInventorySchemaResult {
  /**
   * @schema GetInventorySchemaResult#Schemas
   */
  readonly schemas?: InventoryItemSchema[];

  /**
   * @schema GetInventorySchemaResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetMaintenanceWindowRequest
 */
export interface GetMaintenanceWindowRequest {
  /**
   * @schema GetMaintenanceWindowRequest#WindowId
   */
  readonly windowId: string;

}

/**
 * @schema GetMaintenanceWindowResult
 */
export interface GetMaintenanceWindowResult {
  /**
   * @schema GetMaintenanceWindowResult#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema GetMaintenanceWindowResult#Name
   */
  readonly name?: string;

  /**
   * @schema GetMaintenanceWindowResult#Description
   */
  readonly description?: string;

  /**
   * @schema GetMaintenanceWindowResult#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema GetMaintenanceWindowResult#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema GetMaintenanceWindowResult#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema GetMaintenanceWindowResult#ScheduleTimezone
   */
  readonly scheduleTimezone?: string;

  /**
   * @schema GetMaintenanceWindowResult#ScheduleOffset
   */
  readonly scheduleOffset?: number;

  /**
   * @schema GetMaintenanceWindowResult#NextExecutionTime
   */
  readonly nextExecutionTime?: string;

  /**
   * @schema GetMaintenanceWindowResult#Duration
   */
  readonly duration?: number;

  /**
   * @schema GetMaintenanceWindowResult#Cutoff
   */
  readonly cutoff?: number;

  /**
   * @schema GetMaintenanceWindowResult#AllowUnassociatedTargets
   */
  readonly allowUnassociatedTargets?: boolean;

  /**
   * @schema GetMaintenanceWindowResult#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema GetMaintenanceWindowResult#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema GetMaintenanceWindowResult#ModifiedDate
   */
  readonly modifiedDate?: string;

}

/**
 * @schema GetMaintenanceWindowExecutionRequest
 */
export interface GetMaintenanceWindowExecutionRequest {
  /**
   * @schema GetMaintenanceWindowExecutionRequest#WindowExecutionId
   */
  readonly windowExecutionId: string;

}

/**
 * @schema GetMaintenanceWindowExecutionResult
 */
export interface GetMaintenanceWindowExecutionResult {
  /**
   * @schema GetMaintenanceWindowExecutionResult#WindowExecutionId
   */
  readonly windowExecutionId?: string;

  /**
   * @schema GetMaintenanceWindowExecutionResult#TaskIds
   */
  readonly taskIds?: string[];

  /**
   * @schema GetMaintenanceWindowExecutionResult#Status
   */
  readonly status?: string;

  /**
   * @schema GetMaintenanceWindowExecutionResult#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema GetMaintenanceWindowExecutionResult#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema GetMaintenanceWindowExecutionResult#EndTime
   */
  readonly endTime?: string;

}

/**
 * @schema GetMaintenanceWindowExecutionTaskRequest
 */
export interface GetMaintenanceWindowExecutionTaskRequest {
  /**
   * @schema GetMaintenanceWindowExecutionTaskRequest#WindowExecutionId
   */
  readonly windowExecutionId: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskRequest#TaskId
   */
  readonly taskId: string;

}

/**
 * @schema GetMaintenanceWindowExecutionTaskResult
 */
export interface GetMaintenanceWindowExecutionTaskResult {
  /**
   * @schema GetMaintenanceWindowExecutionTaskResult#WindowExecutionId
   */
  readonly windowExecutionId?: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskResult#TaskExecutionId
   */
  readonly taskExecutionId?: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskResult#TaskArn
   */
  readonly taskArn?: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskResult#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskResult#Type
   */
  readonly type?: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskResult#TaskParameters
   */
  readonly taskParameters?: { [key: string]: MaintenanceWindowTaskParameterValueExpression }[];

  /**
   * @schema GetMaintenanceWindowExecutionTaskResult#Priority
   */
  readonly priority?: number;

  /**
   * @schema GetMaintenanceWindowExecutionTaskResult#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskResult#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskResult#Status
   */
  readonly status?: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskResult#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskResult#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskResult#EndTime
   */
  readonly endTime?: string;

}

/**
 * @schema GetMaintenanceWindowExecutionTaskInvocationRequest
 */
export interface GetMaintenanceWindowExecutionTaskInvocationRequest {
  /**
   * @schema GetMaintenanceWindowExecutionTaskInvocationRequest#WindowExecutionId
   */
  readonly windowExecutionId: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskInvocationRequest#TaskId
   */
  readonly taskId: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskInvocationRequest#InvocationId
   */
  readonly invocationId: string;

}

/**
 * @schema GetMaintenanceWindowExecutionTaskInvocationResult
 */
export interface GetMaintenanceWindowExecutionTaskInvocationResult {
  /**
   * @schema GetMaintenanceWindowExecutionTaskInvocationResult#WindowExecutionId
   */
  readonly windowExecutionId?: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskInvocationResult#TaskExecutionId
   */
  readonly taskExecutionId?: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskInvocationResult#InvocationId
   */
  readonly invocationId?: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskInvocationResult#ExecutionId
   */
  readonly executionId?: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskInvocationResult#TaskType
   */
  readonly taskType?: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskInvocationResult#Parameters
   */
  readonly parameters?: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskInvocationResult#Status
   */
  readonly status?: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskInvocationResult#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskInvocationResult#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskInvocationResult#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskInvocationResult#OwnerInformation
   */
  readonly ownerInformation?: string;

  /**
   * @schema GetMaintenanceWindowExecutionTaskInvocationResult#WindowTargetId
   */
  readonly windowTargetId?: string;

}

/**
 * @schema GetMaintenanceWindowTaskRequest
 */
export interface GetMaintenanceWindowTaskRequest {
  /**
   * @schema GetMaintenanceWindowTaskRequest#WindowId
   */
  readonly windowId: string;

  /**
   * @schema GetMaintenanceWindowTaskRequest#WindowTaskId
   */
  readonly windowTaskId: string;

}

/**
 * @schema GetMaintenanceWindowTaskResult
 */
export interface GetMaintenanceWindowTaskResult {
  /**
   * @schema GetMaintenanceWindowTaskResult#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema GetMaintenanceWindowTaskResult#WindowTaskId
   */
  readonly windowTaskId?: string;

  /**
   * @schema GetMaintenanceWindowTaskResult#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema GetMaintenanceWindowTaskResult#TaskArn
   */
  readonly taskArn?: string;

  /**
   * @schema GetMaintenanceWindowTaskResult#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema GetMaintenanceWindowTaskResult#TaskType
   */
  readonly taskType?: string;

  /**
   * @schema GetMaintenanceWindowTaskResult#TaskParameters
   */
  readonly taskParameters?: { [key: string]: MaintenanceWindowTaskParameterValueExpression };

  /**
   * @schema GetMaintenanceWindowTaskResult#TaskInvocationParameters
   */
  readonly taskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;

  /**
   * @schema GetMaintenanceWindowTaskResult#Priority
   */
  readonly priority?: number;

  /**
   * @schema GetMaintenanceWindowTaskResult#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema GetMaintenanceWindowTaskResult#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema GetMaintenanceWindowTaskResult#LoggingInfo
   */
  readonly loggingInfo?: LoggingInfo;

  /**
   * @schema GetMaintenanceWindowTaskResult#Name
   */
  readonly name?: string;

  /**
   * @schema GetMaintenanceWindowTaskResult#Description
   */
  readonly description?: string;

}

/**
 * @schema GetOpsItemRequest
 */
export interface GetOpsItemRequest {
  /**
   * @schema GetOpsItemRequest#OpsItemId
   */
  readonly opsItemId: string;

}

/**
 * @schema GetOpsItemResponse
 */
export interface GetOpsItemResponse {
  /**
   * @schema GetOpsItemResponse#OpsItem
   */
  readonly opsItem?: OpsItem;

}

/**
 * @schema GetOpsSummaryRequest
 */
export interface GetOpsSummaryRequest {
  /**
   * @schema GetOpsSummaryRequest#SyncName
   */
  readonly syncName?: string;

  /**
   * @schema GetOpsSummaryRequest#Filters
   */
  readonly filters?: OpsFilter[];

  /**
   * @schema GetOpsSummaryRequest#Aggregators
   */
  readonly aggregators?: OpsAggregator[];

  /**
   * @schema GetOpsSummaryRequest#ResultAttributes
   */
  readonly resultAttributes?: OpsResultAttribute[];

  /**
   * @schema GetOpsSummaryRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetOpsSummaryRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema GetOpsSummaryResult
 */
export interface GetOpsSummaryResult {
  /**
   * @schema GetOpsSummaryResult#Entities
   */
  readonly entities?: OpsEntity[];

  /**
   * @schema GetOpsSummaryResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetParameterRequest
 */
export interface GetParameterRequest {
  /**
   * @schema GetParameterRequest#Name
   */
  readonly name: string;

  /**
   * @schema GetParameterRequest#WithDecryption
   */
  readonly withDecryption?: boolean;

}

/**
 * @schema GetParameterResult
 */
export interface GetParameterResult {
  /**
   * @schema GetParameterResult#Parameter
   */
  readonly parameter?: Parameter;

}

/**
 * @schema GetParameterHistoryRequest
 */
export interface GetParameterHistoryRequest {
  /**
   * @schema GetParameterHistoryRequest#Name
   */
  readonly name: string;

  /**
   * @schema GetParameterHistoryRequest#WithDecryption
   */
  readonly withDecryption?: boolean;

  /**
   * @schema GetParameterHistoryRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetParameterHistoryRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetParameterHistoryResult
 */
export interface GetParameterHistoryResult {
  /**
   * @schema GetParameterHistoryResult#Parameters
   */
  readonly parameters?: ParameterHistory[];

  /**
   * @schema GetParameterHistoryResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetParametersRequest
 */
export interface GetParametersRequest {
  /**
   * @schema GetParametersRequest#Names
   */
  readonly names: string[];

  /**
   * @schema GetParametersRequest#WithDecryption
   */
  readonly withDecryption?: boolean;

}

/**
 * @schema GetParametersResult
 */
export interface GetParametersResult {
  /**
   * @schema GetParametersResult#Parameters
   */
  readonly parameters?: Parameter[];

  /**
   * @schema GetParametersResult#InvalidParameters
   */
  readonly invalidParameters?: string[];

}

/**
 * @schema GetParametersByPathRequest
 */
export interface GetParametersByPathRequest {
  /**
   * @schema GetParametersByPathRequest#Path
   */
  readonly path: string;

  /**
   * @schema GetParametersByPathRequest#Recursive
   */
  readonly recursive?: boolean;

  /**
   * @schema GetParametersByPathRequest#ParameterFilters
   */
  readonly parameterFilters?: ParameterStringFilter[];

  /**
   * @schema GetParametersByPathRequest#WithDecryption
   */
  readonly withDecryption?: boolean;

  /**
   * @schema GetParametersByPathRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetParametersByPathRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetParametersByPathResult
 */
export interface GetParametersByPathResult {
  /**
   * @schema GetParametersByPathResult#Parameters
   */
  readonly parameters?: Parameter[];

  /**
   * @schema GetParametersByPathResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetPatchBaselineRequest
 */
export interface GetPatchBaselineRequest {
  /**
   * @schema GetPatchBaselineRequest#BaselineId
   */
  readonly baselineId: string;

}

/**
 * @schema GetPatchBaselineResult
 */
export interface GetPatchBaselineResult {
  /**
   * @schema GetPatchBaselineResult#BaselineId
   */
  readonly baselineId?: string;

  /**
   * @schema GetPatchBaselineResult#Name
   */
  readonly name?: string;

  /**
   * @schema GetPatchBaselineResult#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema GetPatchBaselineResult#GlobalFilters
   */
  readonly globalFilters?: PatchFilterGroup;

  /**
   * @schema GetPatchBaselineResult#ApprovalRules
   */
  readonly approvalRules?: PatchRuleGroup;

  /**
   * @schema GetPatchBaselineResult#ApprovedPatches
   */
  readonly approvedPatches?: string[];

  /**
   * @schema GetPatchBaselineResult#ApprovedPatchesComplianceLevel
   */
  readonly approvedPatchesComplianceLevel?: string;

  /**
   * @schema GetPatchBaselineResult#ApprovedPatchesEnableNonSecurity
   */
  readonly approvedPatchesEnableNonSecurity?: boolean;

  /**
   * @schema GetPatchBaselineResult#RejectedPatches
   */
  readonly rejectedPatches?: string[];

  /**
   * @schema GetPatchBaselineResult#RejectedPatchesAction
   */
  readonly rejectedPatchesAction?: string;

  /**
   * @schema GetPatchBaselineResult#PatchGroups
   */
  readonly patchGroups?: string[];

  /**
   * @schema GetPatchBaselineResult#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema GetPatchBaselineResult#ModifiedDate
   */
  readonly modifiedDate?: string;

  /**
   * @schema GetPatchBaselineResult#Description
   */
  readonly description?: string;

  /**
   * @schema GetPatchBaselineResult#Sources
   */
  readonly sources?: PatchSource[];

}

/**
 * @schema GetPatchBaselineForPatchGroupRequest
 */
export interface GetPatchBaselineForPatchGroupRequest {
  /**
   * @schema GetPatchBaselineForPatchGroupRequest#PatchGroup
   */
  readonly patchGroup: string;

  /**
   * @schema GetPatchBaselineForPatchGroupRequest#OperatingSystem
   */
  readonly operatingSystem?: string;

}

/**
 * @schema GetPatchBaselineForPatchGroupResult
 */
export interface GetPatchBaselineForPatchGroupResult {
  /**
   * @schema GetPatchBaselineForPatchGroupResult#BaselineId
   */
  readonly baselineId?: string;

  /**
   * @schema GetPatchBaselineForPatchGroupResult#PatchGroup
   */
  readonly patchGroup?: string;

  /**
   * @schema GetPatchBaselineForPatchGroupResult#OperatingSystem
   */
  readonly operatingSystem?: string;

}

/**
 * @schema GetServiceSettingRequest
 */
export interface GetServiceSettingRequest {
  /**
   * @schema GetServiceSettingRequest#SettingId
   */
  readonly settingId: string;

}

/**
 * @schema GetServiceSettingResult
 */
export interface GetServiceSettingResult {
  /**
   * @schema GetServiceSettingResult#ServiceSetting
   */
  readonly serviceSetting?: ServiceSetting;

}

/**
 * @schema LabelParameterVersionRequest
 */
export interface LabelParameterVersionRequest {
  /**
   * @schema LabelParameterVersionRequest#Name
   */
  readonly name: string;

  /**
   * @schema LabelParameterVersionRequest#ParameterVersion
   */
  readonly parameterVersion?: number;

  /**
   * @schema LabelParameterVersionRequest#Labels
   */
  readonly labels: string[];

}

/**
 * @schema LabelParameterVersionResult
 */
export interface LabelParameterVersionResult {
  /**
   * @schema LabelParameterVersionResult#InvalidLabels
   */
  readonly invalidLabels?: string[];

  /**
   * @schema LabelParameterVersionResult#ParameterVersion
   */
  readonly parameterVersion?: number;

}

/**
 * @schema ListAssociationVersionsRequest
 */
export interface ListAssociationVersionsRequest {
  /**
   * @schema ListAssociationVersionsRequest#AssociationId
   */
  readonly associationId: string;

  /**
   * @schema ListAssociationVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAssociationVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAssociationVersionsResult
 */
export interface ListAssociationVersionsResult {
  /**
   * @schema ListAssociationVersionsResult#AssociationVersions
   */
  readonly associationVersions?: AssociationVersionInfo[];

  /**
   * @schema ListAssociationVersionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAssociationsRequest
 */
export interface ListAssociationsRequest {
  /**
   * @schema ListAssociationsRequest#AssociationFilterList
   */
  readonly associationFilterList?: AssociationFilter[];

  /**
   * @schema ListAssociationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAssociationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAssociationsResult
 */
export interface ListAssociationsResult {
  /**
   * @schema ListAssociationsResult#Associations
   */
  readonly associations?: Association[];

  /**
   * @schema ListAssociationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListCommandInvocationsRequest
 */
export interface ListCommandInvocationsRequest {
  /**
   * @schema ListCommandInvocationsRequest#CommandId
   */
  readonly commandId?: string;

  /**
   * @schema ListCommandInvocationsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ListCommandInvocationsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListCommandInvocationsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListCommandInvocationsRequest#Filters
   */
  readonly filters?: CommandFilter[];

  /**
   * @schema ListCommandInvocationsRequest#Details
   */
  readonly details?: boolean;

}

/**
 * @schema ListCommandInvocationsResult
 */
export interface ListCommandInvocationsResult {
  /**
   * @schema ListCommandInvocationsResult#CommandInvocations
   */
  readonly commandInvocations?: CommandInvocation[];

  /**
   * @schema ListCommandInvocationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListCommandsRequest
 */
export interface ListCommandsRequest {
  /**
   * @schema ListCommandsRequest#CommandId
   */
  readonly commandId?: string;

  /**
   * @schema ListCommandsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ListCommandsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListCommandsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListCommandsRequest#Filters
   */
  readonly filters?: CommandFilter[];

}

/**
 * @schema ListCommandsResult
 */
export interface ListCommandsResult {
  /**
   * @schema ListCommandsResult#Commands
   */
  readonly commands?: Command[];

  /**
   * @schema ListCommandsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListComplianceItemsRequest
 */
export interface ListComplianceItemsRequest {
  /**
   * @schema ListComplianceItemsRequest#Filters
   */
  readonly filters?: ComplianceStringFilter[];

  /**
   * @schema ListComplianceItemsRequest#ResourceIds
   */
  readonly resourceIds?: string[];

  /**
   * @schema ListComplianceItemsRequest#ResourceTypes
   */
  readonly resourceTypes?: string[];

  /**
   * @schema ListComplianceItemsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListComplianceItemsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListComplianceItemsResult
 */
export interface ListComplianceItemsResult {
  /**
   * @schema ListComplianceItemsResult#ComplianceItems
   */
  readonly complianceItems?: ComplianceItem[];

  /**
   * @schema ListComplianceItemsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListComplianceSummariesRequest
 */
export interface ListComplianceSummariesRequest {
  /**
   * @schema ListComplianceSummariesRequest#Filters
   */
  readonly filters?: ComplianceStringFilter[];

  /**
   * @schema ListComplianceSummariesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListComplianceSummariesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListComplianceSummariesResult
 */
export interface ListComplianceSummariesResult {
  /**
   * @schema ListComplianceSummariesResult#ComplianceSummaryItems
   */
  readonly complianceSummaryItems?: ComplianceSummaryItem[];

  /**
   * @schema ListComplianceSummariesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDocumentVersionsRequest
 */
export interface ListDocumentVersionsRequest {
  /**
   * @schema ListDocumentVersionsRequest#Name
   */
  readonly name: string;

  /**
   * @schema ListDocumentVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListDocumentVersionsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDocumentVersionsResult
 */
export interface ListDocumentVersionsResult {
  /**
   * @schema ListDocumentVersionsResult#DocumentVersions
   */
  readonly documentVersions?: DocumentVersionInfo[];

  /**
   * @schema ListDocumentVersionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDocumentsRequest
 */
export interface ListDocumentsRequest {
  /**
   * @schema ListDocumentsRequest#DocumentFilterList
   */
  readonly documentFilterList?: DocumentFilter[];

  /**
   * @schema ListDocumentsRequest#Filters
   */
  readonly filters?: DocumentKeyValuesFilter[];

  /**
   * @schema ListDocumentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListDocumentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDocumentsResult
 */
export interface ListDocumentsResult {
  /**
   * @schema ListDocumentsResult#DocumentIdentifiers
   */
  readonly documentIdentifiers?: DocumentIdentifier[];

  /**
   * @schema ListDocumentsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInventoryEntriesRequest
 */
export interface ListInventoryEntriesRequest {
  /**
   * @schema ListInventoryEntriesRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema ListInventoryEntriesRequest#TypeName
   */
  readonly typeName: string;

  /**
   * @schema ListInventoryEntriesRequest#Filters
   */
  readonly filters?: InventoryFilter[];

  /**
   * @schema ListInventoryEntriesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListInventoryEntriesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListInventoryEntriesResult
 */
export interface ListInventoryEntriesResult {
  /**
   * @schema ListInventoryEntriesResult#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema ListInventoryEntriesResult#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ListInventoryEntriesResult#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema ListInventoryEntriesResult#CaptureTime
   */
  readonly captureTime?: string;

  /**
   * @schema ListInventoryEntriesResult#Entries
   */
  readonly entries?: { [key: string]: string }[];

  /**
   * @schema ListInventoryEntriesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListResourceComplianceSummariesRequest
 */
export interface ListResourceComplianceSummariesRequest {
  /**
   * @schema ListResourceComplianceSummariesRequest#Filters
   */
  readonly filters?: ComplianceStringFilter[];

  /**
   * @schema ListResourceComplianceSummariesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResourceComplianceSummariesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListResourceComplianceSummariesResult
 */
export interface ListResourceComplianceSummariesResult {
  /**
   * @schema ListResourceComplianceSummariesResult#ResourceComplianceSummaryItems
   */
  readonly resourceComplianceSummaryItems?: ResourceComplianceSummaryItem[];

  /**
   * @schema ListResourceComplianceSummariesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListResourceDataSyncRequest
 */
export interface ListResourceDataSyncRequest {
  /**
   * @schema ListResourceDataSyncRequest#SyncType
   */
  readonly syncType?: string;

  /**
   * @schema ListResourceDataSyncRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResourceDataSyncRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListResourceDataSyncResult
 */
export interface ListResourceDataSyncResult {
  /**
   * @schema ListResourceDataSyncResult#ResourceDataSyncItems
   */
  readonly resourceDataSyncItems?: ResourceDataSyncItem[];

  /**
   * @schema ListResourceDataSyncResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema ListTagsForResourceRequest#ResourceId
   */
  readonly resourceId: string;

}

/**
 * @schema ListTagsForResourceResult
 */
export interface ListTagsForResourceResult {
  /**
   * @schema ListTagsForResourceResult#TagList
   */
  readonly tagList?: Tag[];

}

/**
 * @schema ModifyDocumentPermissionRequest
 */
export interface ModifyDocumentPermissionRequest {
  /**
   * @schema ModifyDocumentPermissionRequest#Name
   */
  readonly name: string;

  /**
   * @schema ModifyDocumentPermissionRequest#PermissionType
   */
  readonly permissionType: string;

  /**
   * @schema ModifyDocumentPermissionRequest#AccountIdsToAdd
   */
  readonly accountIdsToAdd?: string[];

  /**
   * @schema ModifyDocumentPermissionRequest#AccountIdsToRemove
   */
  readonly accountIdsToRemove?: string[];

  /**
   * @schema ModifyDocumentPermissionRequest#SharedDocumentVersion
   */
  readonly sharedDocumentVersion?: string;

}

/**
 * @schema ModifyDocumentPermissionResponse
 */
export interface ModifyDocumentPermissionResponse {
}

/**
 * @schema PutComplianceItemsRequest
 */
export interface PutComplianceItemsRequest {
  /**
   * @schema PutComplianceItemsRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema PutComplianceItemsRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema PutComplianceItemsRequest#ComplianceType
   */
  readonly complianceType: string;

  /**
   * @schema PutComplianceItemsRequest#ExecutionSummary
   */
  readonly executionSummary: ComplianceExecutionSummary;

  /**
   * @schema PutComplianceItemsRequest#Items
   */
  readonly items: ComplianceItemEntry[];

  /**
   * @schema PutComplianceItemsRequest#ItemContentHash
   */
  readonly itemContentHash?: string;

  /**
   * @schema PutComplianceItemsRequest#UploadType
   */
  readonly uploadType?: string;

}

/**
 * @schema PutComplianceItemsResult
 */
export interface PutComplianceItemsResult {
}

/**
 * @schema PutInventoryRequest
 */
export interface PutInventoryRequest {
  /**
   * @schema PutInventoryRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema PutInventoryRequest#Items
   */
  readonly items: InventoryItem[];

}

/**
 * @schema PutInventoryResult
 */
export interface PutInventoryResult {
  /**
   * @schema PutInventoryResult#Message
   */
  readonly message?: string;

}

/**
 * @schema PutParameterRequest
 */
export interface PutParameterRequest {
  /**
   * @schema PutParameterRequest#Name
   */
  readonly name: string;

  /**
   * @schema PutParameterRequest#Description
   */
  readonly description?: string;

  /**
   * @schema PutParameterRequest#Value
   */
  readonly value: string;

  /**
   * @schema PutParameterRequest#Type
   */
  readonly type?: string;

  /**
   * @schema PutParameterRequest#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema PutParameterRequest#Overwrite
   */
  readonly overwrite?: boolean;

  /**
   * @schema PutParameterRequest#AllowedPattern
   */
  readonly allowedPattern?: string;

  /**
   * @schema PutParameterRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema PutParameterRequest#Tier
   */
  readonly tier?: string;

  /**
   * @schema PutParameterRequest#Policies
   */
  readonly policies?: string;

  /**
   * @schema PutParameterRequest#DataType
   */
  readonly dataType?: string;

}

/**
 * @schema PutParameterResult
 */
export interface PutParameterResult {
  /**
   * @schema PutParameterResult#Version
   */
  readonly version?: number;

  /**
   * @schema PutParameterResult#Tier
   */
  readonly tier?: string;

}

/**
 * @schema RegisterDefaultPatchBaselineRequest
 */
export interface RegisterDefaultPatchBaselineRequest {
  /**
   * @schema RegisterDefaultPatchBaselineRequest#BaselineId
   */
  readonly baselineId: string;

}

/**
 * @schema RegisterDefaultPatchBaselineResult
 */
export interface RegisterDefaultPatchBaselineResult {
  /**
   * @schema RegisterDefaultPatchBaselineResult#BaselineId
   */
  readonly baselineId?: string;

}

/**
 * @schema RegisterPatchBaselineForPatchGroupRequest
 */
export interface RegisterPatchBaselineForPatchGroupRequest {
  /**
   * @schema RegisterPatchBaselineForPatchGroupRequest#BaselineId
   */
  readonly baselineId: string;

  /**
   * @schema RegisterPatchBaselineForPatchGroupRequest#PatchGroup
   */
  readonly patchGroup: string;

}

/**
 * @schema RegisterPatchBaselineForPatchGroupResult
 */
export interface RegisterPatchBaselineForPatchGroupResult {
  /**
   * @schema RegisterPatchBaselineForPatchGroupResult#BaselineId
   */
  readonly baselineId?: string;

  /**
   * @schema RegisterPatchBaselineForPatchGroupResult#PatchGroup
   */
  readonly patchGroup?: string;

}

/**
 * @schema RegisterTargetWithMaintenanceWindowRequest
 */
export interface RegisterTargetWithMaintenanceWindowRequest {
  /**
   * @schema RegisterTargetWithMaintenanceWindowRequest#WindowId
   */
  readonly windowId: string;

  /**
   * @schema RegisterTargetWithMaintenanceWindowRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema RegisterTargetWithMaintenanceWindowRequest#Targets
   */
  readonly targets: Target[];

  /**
   * @schema RegisterTargetWithMaintenanceWindowRequest#OwnerInformation
   */
  readonly ownerInformation?: string;

  /**
   * @schema RegisterTargetWithMaintenanceWindowRequest#Name
   */
  readonly name?: string;

  /**
   * @schema RegisterTargetWithMaintenanceWindowRequest#Description
   */
  readonly description?: string;

  /**
   * @schema RegisterTargetWithMaintenanceWindowRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema RegisterTargetWithMaintenanceWindowResult
 */
export interface RegisterTargetWithMaintenanceWindowResult {
  /**
   * @schema RegisterTargetWithMaintenanceWindowResult#WindowTargetId
   */
  readonly windowTargetId?: string;

}

/**
 * @schema RegisterTaskWithMaintenanceWindowRequest
 */
export interface RegisterTaskWithMaintenanceWindowRequest {
  /**
   * @schema RegisterTaskWithMaintenanceWindowRequest#WindowId
   */
  readonly windowId: string;

  /**
   * @schema RegisterTaskWithMaintenanceWindowRequest#Targets
   */
  readonly targets: Target[];

  /**
   * @schema RegisterTaskWithMaintenanceWindowRequest#TaskArn
   */
  readonly taskArn: string;

  /**
   * @schema RegisterTaskWithMaintenanceWindowRequest#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema RegisterTaskWithMaintenanceWindowRequest#TaskType
   */
  readonly taskType: string;

  /**
   * @schema RegisterTaskWithMaintenanceWindowRequest#TaskParameters
   */
  readonly taskParameters?: { [key: string]: MaintenanceWindowTaskParameterValueExpression };

  /**
   * @schema RegisterTaskWithMaintenanceWindowRequest#TaskInvocationParameters
   */
  readonly taskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;

  /**
   * @schema RegisterTaskWithMaintenanceWindowRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema RegisterTaskWithMaintenanceWindowRequest#MaxConcurrency
   */
  readonly maxConcurrency: string;

  /**
   * @schema RegisterTaskWithMaintenanceWindowRequest#MaxErrors
   */
  readonly maxErrors: string;

  /**
   * @schema RegisterTaskWithMaintenanceWindowRequest#LoggingInfo
   */
  readonly loggingInfo?: LoggingInfo;

  /**
   * @schema RegisterTaskWithMaintenanceWindowRequest#Name
   */
  readonly name?: string;

  /**
   * @schema RegisterTaskWithMaintenanceWindowRequest#Description
   */
  readonly description?: string;

  /**
   * @schema RegisterTaskWithMaintenanceWindowRequest#ClientToken
   */
  readonly clientToken?: string;

}

/**
 * @schema RegisterTaskWithMaintenanceWindowResult
 */
export interface RegisterTaskWithMaintenanceWindowResult {
  /**
   * @schema RegisterTaskWithMaintenanceWindowResult#WindowTaskId
   */
  readonly windowTaskId?: string;

}

/**
 * @schema RemoveTagsFromResourceRequest
 */
export interface RemoveTagsFromResourceRequest {
  /**
   * @schema RemoveTagsFromResourceRequest#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema RemoveTagsFromResourceRequest#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema RemoveTagsFromResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema RemoveTagsFromResourceResult
 */
export interface RemoveTagsFromResourceResult {
}

/**
 * @schema ResetServiceSettingRequest
 */
export interface ResetServiceSettingRequest {
  /**
   * @schema ResetServiceSettingRequest#SettingId
   */
  readonly settingId: string;

}

/**
 * @schema ResetServiceSettingResult
 */
export interface ResetServiceSettingResult {
  /**
   * @schema ResetServiceSettingResult#ServiceSetting
   */
  readonly serviceSetting?: ServiceSetting;

}

/**
 * @schema ResumeSessionRequest
 */
export interface ResumeSessionRequest {
  /**
   * @schema ResumeSessionRequest#SessionId
   */
  readonly sessionId: string;

}

/**
 * @schema ResumeSessionResponse
 */
export interface ResumeSessionResponse {
  /**
   * @schema ResumeSessionResponse#SessionId
   */
  readonly sessionId?: string;

  /**
   * @schema ResumeSessionResponse#TokenValue
   */
  readonly tokenValue?: string;

  /**
   * @schema ResumeSessionResponse#StreamUrl
   */
  readonly streamUrl?: string;

}

/**
 * @schema SendAutomationSignalRequest
 */
export interface SendAutomationSignalRequest {
  /**
   * @schema SendAutomationSignalRequest#AutomationExecutionId
   */
  readonly automationExecutionId: string;

  /**
   * @schema SendAutomationSignalRequest#SignalType
   */
  readonly signalType: string;

  /**
   * @schema SendAutomationSignalRequest#Payload
   */
  readonly payload?: { [key: string]: string[] };

}

/**
 * @schema SendAutomationSignalResult
 */
export interface SendAutomationSignalResult {
}

/**
 * @schema SendCommandRequest
 */
export interface SendCommandRequest {
  /**
   * @schema SendCommandRequest#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema SendCommandRequest#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema SendCommandRequest#DocumentName
   */
  readonly documentName: string;

  /**
   * @schema SendCommandRequest#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema SendCommandRequest#DocumentHash
   */
  readonly documentHash?: string;

  /**
   * @schema SendCommandRequest#DocumentHashType
   */
  readonly documentHashType?: string;

  /**
   * @schema SendCommandRequest#TimeoutSeconds
   */
  readonly timeoutSeconds?: number;

  /**
   * @schema SendCommandRequest#Comment
   */
  readonly comment?: string;

  /**
   * @schema SendCommandRequest#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema SendCommandRequest#OutputS3Region
   */
  readonly outputS3Region?: string;

  /**
   * @schema SendCommandRequest#OutputS3BucketName
   */
  readonly outputS3BucketName?: string;

  /**
   * @schema SendCommandRequest#OutputS3KeyPrefix
   */
  readonly outputS3KeyPrefix?: string;

  /**
   * @schema SendCommandRequest#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema SendCommandRequest#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema SendCommandRequest#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema SendCommandRequest#NotificationConfig
   */
  readonly notificationConfig?: NotificationConfig;

  /**
   * @schema SendCommandRequest#CloudWatchOutputConfig
   */
  readonly cloudWatchOutputConfig?: CloudWatchOutputConfig;

}

/**
 * @schema SendCommandResult
 */
export interface SendCommandResult {
  /**
   * @schema SendCommandResult#Command
   */
  readonly command?: Command;

}

/**
 * @schema StartAssociationsOnceRequest
 */
export interface StartAssociationsOnceRequest {
  /**
   * @schema StartAssociationsOnceRequest#AssociationIds
   */
  readonly associationIds: string[];

}

/**
 * @schema StartAssociationsOnceResult
 */
export interface StartAssociationsOnceResult {
}

/**
 * @schema StartAutomationExecutionRequest
 */
export interface StartAutomationExecutionRequest {
  /**
   * @schema StartAutomationExecutionRequest#DocumentName
   */
  readonly documentName: string;

  /**
   * @schema StartAutomationExecutionRequest#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema StartAutomationExecutionRequest#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema StartAutomationExecutionRequest#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema StartAutomationExecutionRequest#Mode
   */
  readonly mode?: string;

  /**
   * @schema StartAutomationExecutionRequest#TargetParameterName
   */
  readonly targetParameterName?: string;

  /**
   * @schema StartAutomationExecutionRequest#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema StartAutomationExecutionRequest#TargetMaps
   */
  readonly targetMaps?: { [key: string]: string[] }[];

  /**
   * @schema StartAutomationExecutionRequest#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema StartAutomationExecutionRequest#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema StartAutomationExecutionRequest#TargetLocations
   */
  readonly targetLocations?: TargetLocation[];

  /**
   * @schema StartAutomationExecutionRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema StartAutomationExecutionResult
 */
export interface StartAutomationExecutionResult {
  /**
   * @schema StartAutomationExecutionResult#AutomationExecutionId
   */
  readonly automationExecutionId?: string;

}

/**
 * @schema StartSessionRequest
 */
export interface StartSessionRequest {
  /**
   * @schema StartSessionRequest#Target
   */
  readonly target: string;

  /**
   * @schema StartSessionRequest#DocumentName
   */
  readonly documentName?: string;

  /**
   * @schema StartSessionRequest#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

}

/**
 * @schema StartSessionResponse
 */
export interface StartSessionResponse {
  /**
   * @schema StartSessionResponse#SessionId
   */
  readonly sessionId?: string;

  /**
   * @schema StartSessionResponse#TokenValue
   */
  readonly tokenValue?: string;

  /**
   * @schema StartSessionResponse#StreamUrl
   */
  readonly streamUrl?: string;

}

/**
 * @schema StopAutomationExecutionRequest
 */
export interface StopAutomationExecutionRequest {
  /**
   * @schema StopAutomationExecutionRequest#AutomationExecutionId
   */
  readonly automationExecutionId: string;

  /**
   * @schema StopAutomationExecutionRequest#Type
   */
  readonly type?: string;

}

/**
 * @schema StopAutomationExecutionResult
 */
export interface StopAutomationExecutionResult {
}

/**
 * @schema TerminateSessionRequest
 */
export interface TerminateSessionRequest {
  /**
   * @schema TerminateSessionRequest#SessionId
   */
  readonly sessionId: string;

}

/**
 * @schema TerminateSessionResponse
 */
export interface TerminateSessionResponse {
  /**
   * @schema TerminateSessionResponse#SessionId
   */
  readonly sessionId?: string;

}

/**
 * @schema UpdateAssociationRequest
 */
export interface UpdateAssociationRequest {
  /**
   * @schema UpdateAssociationRequest#AssociationId
   */
  readonly associationId: string;

  /**
   * @schema UpdateAssociationRequest#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema UpdateAssociationRequest#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema UpdateAssociationRequest#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema UpdateAssociationRequest#OutputLocation
   */
  readonly outputLocation?: InstanceAssociationOutputLocation;

  /**
   * @schema UpdateAssociationRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateAssociationRequest#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema UpdateAssociationRequest#AssociationName
   */
  readonly associationName?: string;

  /**
   * @schema UpdateAssociationRequest#AssociationVersion
   */
  readonly associationVersion?: string;

  /**
   * @schema UpdateAssociationRequest#AutomationTargetParameterName
   */
  readonly automationTargetParameterName?: string;

  /**
   * @schema UpdateAssociationRequest#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema UpdateAssociationRequest#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema UpdateAssociationRequest#ComplianceSeverity
   */
  readonly complianceSeverity?: string;

  /**
   * @schema UpdateAssociationRequest#SyncCompliance
   */
  readonly syncCompliance?: string;

  /**
   * @schema UpdateAssociationRequest#ApplyOnlyAtCronInterval
   */
  readonly applyOnlyAtCronInterval?: boolean;

}

/**
 * @schema UpdateAssociationResult
 */
export interface UpdateAssociationResult {
  /**
   * @schema UpdateAssociationResult#AssociationDescription
   */
  readonly associationDescription?: AssociationDescription;

}

/**
 * @schema UpdateAssociationStatusRequest
 */
export interface UpdateAssociationStatusRequest {
  /**
   * @schema UpdateAssociationStatusRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateAssociationStatusRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema UpdateAssociationStatusRequest#AssociationStatus
   */
  readonly associationStatus: AssociationStatus;

}

/**
 * @schema UpdateAssociationStatusResult
 */
export interface UpdateAssociationStatusResult {
  /**
   * @schema UpdateAssociationStatusResult#AssociationDescription
   */
  readonly associationDescription?: AssociationDescription;

}

/**
 * @schema UpdateDocumentRequest
 */
export interface UpdateDocumentRequest {
  /**
   * @schema UpdateDocumentRequest#Content
   */
  readonly content: string;

  /**
   * @schema UpdateDocumentRequest#Attachments
   */
  readonly attachments?: AttachmentsSource[];

  /**
   * @schema UpdateDocumentRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateDocumentRequest#VersionName
   */
  readonly versionName?: string;

  /**
   * @schema UpdateDocumentRequest#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema UpdateDocumentRequest#DocumentFormat
   */
  readonly documentFormat?: string;

  /**
   * @schema UpdateDocumentRequest#TargetType
   */
  readonly targetType?: string;

}

/**
 * @schema UpdateDocumentResult
 */
export interface UpdateDocumentResult {
  /**
   * @schema UpdateDocumentResult#DocumentDescription
   */
  readonly documentDescription?: DocumentDescription;

}

/**
 * @schema UpdateDocumentDefaultVersionRequest
 */
export interface UpdateDocumentDefaultVersionRequest {
  /**
   * @schema UpdateDocumentDefaultVersionRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateDocumentDefaultVersionRequest#DocumentVersion
   */
  readonly documentVersion: string;

}

/**
 * @schema UpdateDocumentDefaultVersionResult
 */
export interface UpdateDocumentDefaultVersionResult {
  /**
   * @schema UpdateDocumentDefaultVersionResult#Description
   */
  readonly description?: DocumentDefaultVersionDescription;

}

/**
 * @schema UpdateMaintenanceWindowRequest
 */
export interface UpdateMaintenanceWindowRequest {
  /**
   * @schema UpdateMaintenanceWindowRequest#WindowId
   */
  readonly windowId: string;

  /**
   * @schema UpdateMaintenanceWindowRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateMaintenanceWindowRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateMaintenanceWindowRequest#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema UpdateMaintenanceWindowRequest#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema UpdateMaintenanceWindowRequest#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema UpdateMaintenanceWindowRequest#ScheduleTimezone
   */
  readonly scheduleTimezone?: string;

  /**
   * @schema UpdateMaintenanceWindowRequest#ScheduleOffset
   */
  readonly scheduleOffset?: number;

  /**
   * @schema UpdateMaintenanceWindowRequest#Duration
   */
  readonly duration?: number;

  /**
   * @schema UpdateMaintenanceWindowRequest#Cutoff
   */
  readonly cutoff?: number;

  /**
   * @schema UpdateMaintenanceWindowRequest#AllowUnassociatedTargets
   */
  readonly allowUnassociatedTargets?: boolean;

  /**
   * @schema UpdateMaintenanceWindowRequest#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema UpdateMaintenanceWindowRequest#Replace
   */
  readonly replace?: boolean;

}

/**
 * @schema UpdateMaintenanceWindowResult
 */
export interface UpdateMaintenanceWindowResult {
  /**
   * @schema UpdateMaintenanceWindowResult#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema UpdateMaintenanceWindowResult#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateMaintenanceWindowResult#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateMaintenanceWindowResult#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema UpdateMaintenanceWindowResult#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema UpdateMaintenanceWindowResult#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema UpdateMaintenanceWindowResult#ScheduleTimezone
   */
  readonly scheduleTimezone?: string;

  /**
   * @schema UpdateMaintenanceWindowResult#ScheduleOffset
   */
  readonly scheduleOffset?: number;

  /**
   * @schema UpdateMaintenanceWindowResult#Duration
   */
  readonly duration?: number;

  /**
   * @schema UpdateMaintenanceWindowResult#Cutoff
   */
  readonly cutoff?: number;

  /**
   * @schema UpdateMaintenanceWindowResult#AllowUnassociatedTargets
   */
  readonly allowUnassociatedTargets?: boolean;

  /**
   * @schema UpdateMaintenanceWindowResult#Enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema UpdateMaintenanceWindowTargetRequest
 */
export interface UpdateMaintenanceWindowTargetRequest {
  /**
   * @schema UpdateMaintenanceWindowTargetRequest#WindowId
   */
  readonly windowId: string;

  /**
   * @schema UpdateMaintenanceWindowTargetRequest#WindowTargetId
   */
  readonly windowTargetId: string;

  /**
   * @schema UpdateMaintenanceWindowTargetRequest#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema UpdateMaintenanceWindowTargetRequest#OwnerInformation
   */
  readonly ownerInformation?: string;

  /**
   * @schema UpdateMaintenanceWindowTargetRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateMaintenanceWindowTargetRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateMaintenanceWindowTargetRequest#Replace
   */
  readonly replace?: boolean;

}

/**
 * @schema UpdateMaintenanceWindowTargetResult
 */
export interface UpdateMaintenanceWindowTargetResult {
  /**
   * @schema UpdateMaintenanceWindowTargetResult#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema UpdateMaintenanceWindowTargetResult#WindowTargetId
   */
  readonly windowTargetId?: string;

  /**
   * @schema UpdateMaintenanceWindowTargetResult#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema UpdateMaintenanceWindowTargetResult#OwnerInformation
   */
  readonly ownerInformation?: string;

  /**
   * @schema UpdateMaintenanceWindowTargetResult#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateMaintenanceWindowTargetResult#Description
   */
  readonly description?: string;

}

/**
 * @schema UpdateMaintenanceWindowTaskRequest
 */
export interface UpdateMaintenanceWindowTaskRequest {
  /**
   * @schema UpdateMaintenanceWindowTaskRequest#WindowId
   */
  readonly windowId: string;

  /**
   * @schema UpdateMaintenanceWindowTaskRequest#WindowTaskId
   */
  readonly windowTaskId: string;

  /**
   * @schema UpdateMaintenanceWindowTaskRequest#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema UpdateMaintenanceWindowTaskRequest#TaskArn
   */
  readonly taskArn?: string;

  /**
   * @schema UpdateMaintenanceWindowTaskRequest#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema UpdateMaintenanceWindowTaskRequest#TaskParameters
   */
  readonly taskParameters?: { [key: string]: MaintenanceWindowTaskParameterValueExpression };

  /**
   * @schema UpdateMaintenanceWindowTaskRequest#TaskInvocationParameters
   */
  readonly taskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;

  /**
   * @schema UpdateMaintenanceWindowTaskRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema UpdateMaintenanceWindowTaskRequest#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema UpdateMaintenanceWindowTaskRequest#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema UpdateMaintenanceWindowTaskRequest#LoggingInfo
   */
  readonly loggingInfo?: LoggingInfo;

  /**
   * @schema UpdateMaintenanceWindowTaskRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateMaintenanceWindowTaskRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateMaintenanceWindowTaskRequest#Replace
   */
  readonly replace?: boolean;

}

/**
 * @schema UpdateMaintenanceWindowTaskResult
 */
export interface UpdateMaintenanceWindowTaskResult {
  /**
   * @schema UpdateMaintenanceWindowTaskResult#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema UpdateMaintenanceWindowTaskResult#WindowTaskId
   */
  readonly windowTaskId?: string;

  /**
   * @schema UpdateMaintenanceWindowTaskResult#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema UpdateMaintenanceWindowTaskResult#TaskArn
   */
  readonly taskArn?: string;

  /**
   * @schema UpdateMaintenanceWindowTaskResult#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema UpdateMaintenanceWindowTaskResult#TaskParameters
   */
  readonly taskParameters?: { [key: string]: MaintenanceWindowTaskParameterValueExpression };

  /**
   * @schema UpdateMaintenanceWindowTaskResult#TaskInvocationParameters
   */
  readonly taskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;

  /**
   * @schema UpdateMaintenanceWindowTaskResult#Priority
   */
  readonly priority?: number;

  /**
   * @schema UpdateMaintenanceWindowTaskResult#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema UpdateMaintenanceWindowTaskResult#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema UpdateMaintenanceWindowTaskResult#LoggingInfo
   */
  readonly loggingInfo?: LoggingInfo;

  /**
   * @schema UpdateMaintenanceWindowTaskResult#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateMaintenanceWindowTaskResult#Description
   */
  readonly description?: string;

}

/**
 * @schema UpdateManagedInstanceRoleRequest
 */
export interface UpdateManagedInstanceRoleRequest {
  /**
   * @schema UpdateManagedInstanceRoleRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema UpdateManagedInstanceRoleRequest#IamRole
   */
  readonly iamRole: string;

}

/**
 * @schema UpdateManagedInstanceRoleResult
 */
export interface UpdateManagedInstanceRoleResult {
}

/**
 * @schema UpdateOpsItemRequest
 */
export interface UpdateOpsItemRequest {
  /**
   * @schema UpdateOpsItemRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateOpsItemRequest#OperationalData
   */
  readonly operationalData?: { [key: string]: OpsItemDataValue };

  /**
   * @schema UpdateOpsItemRequest#OperationalDataToDelete
   */
  readonly operationalDataToDelete?: string[];

  /**
   * @schema UpdateOpsItemRequest#Notifications
   */
  readonly notifications?: OpsItemNotification[];

  /**
   * @schema UpdateOpsItemRequest#Priority
   */
  readonly priority?: number;

  /**
   * @schema UpdateOpsItemRequest#RelatedOpsItems
   */
  readonly relatedOpsItems?: RelatedOpsItem[];

  /**
   * @schema UpdateOpsItemRequest#Status
   */
  readonly status?: string;

  /**
   * @schema UpdateOpsItemRequest#OpsItemId
   */
  readonly opsItemId: string;

  /**
   * @schema UpdateOpsItemRequest#Title
   */
  readonly title?: string;

  /**
   * @schema UpdateOpsItemRequest#Category
   */
  readonly category?: string;

  /**
   * @schema UpdateOpsItemRequest#Severity
   */
  readonly severity?: string;

}

/**
 * @schema UpdateOpsItemResponse
 */
export interface UpdateOpsItemResponse {
}

/**
 * @schema UpdatePatchBaselineRequest
 */
export interface UpdatePatchBaselineRequest {
  /**
   * @schema UpdatePatchBaselineRequest#BaselineId
   */
  readonly baselineId: string;

  /**
   * @schema UpdatePatchBaselineRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdatePatchBaselineRequest#GlobalFilters
   */
  readonly globalFilters?: PatchFilterGroup;

  /**
   * @schema UpdatePatchBaselineRequest#ApprovalRules
   */
  readonly approvalRules?: PatchRuleGroup;

  /**
   * @schema UpdatePatchBaselineRequest#ApprovedPatches
   */
  readonly approvedPatches?: string[];

  /**
   * @schema UpdatePatchBaselineRequest#ApprovedPatchesComplianceLevel
   */
  readonly approvedPatchesComplianceLevel?: string;

  /**
   * @schema UpdatePatchBaselineRequest#ApprovedPatchesEnableNonSecurity
   */
  readonly approvedPatchesEnableNonSecurity?: boolean;

  /**
   * @schema UpdatePatchBaselineRequest#RejectedPatches
   */
  readonly rejectedPatches?: string[];

  /**
   * @schema UpdatePatchBaselineRequest#RejectedPatchesAction
   */
  readonly rejectedPatchesAction?: string;

  /**
   * @schema UpdatePatchBaselineRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdatePatchBaselineRequest#Sources
   */
  readonly sources?: PatchSource[];

  /**
   * @schema UpdatePatchBaselineRequest#Replace
   */
  readonly replace?: boolean;

}

/**
 * @schema UpdatePatchBaselineResult
 */
export interface UpdatePatchBaselineResult {
  /**
   * @schema UpdatePatchBaselineResult#BaselineId
   */
  readonly baselineId?: string;

  /**
   * @schema UpdatePatchBaselineResult#Name
   */
  readonly name?: string;

  /**
   * @schema UpdatePatchBaselineResult#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema UpdatePatchBaselineResult#GlobalFilters
   */
  readonly globalFilters?: PatchFilterGroup;

  /**
   * @schema UpdatePatchBaselineResult#ApprovalRules
   */
  readonly approvalRules?: PatchRuleGroup;

  /**
   * @schema UpdatePatchBaselineResult#ApprovedPatches
   */
  readonly approvedPatches?: string[];

  /**
   * @schema UpdatePatchBaselineResult#ApprovedPatchesComplianceLevel
   */
  readonly approvedPatchesComplianceLevel?: string;

  /**
   * @schema UpdatePatchBaselineResult#ApprovedPatchesEnableNonSecurity
   */
  readonly approvedPatchesEnableNonSecurity?: boolean;

  /**
   * @schema UpdatePatchBaselineResult#RejectedPatches
   */
  readonly rejectedPatches?: string[];

  /**
   * @schema UpdatePatchBaselineResult#RejectedPatchesAction
   */
  readonly rejectedPatchesAction?: string;

  /**
   * @schema UpdatePatchBaselineResult#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema UpdatePatchBaselineResult#ModifiedDate
   */
  readonly modifiedDate?: string;

  /**
   * @schema UpdatePatchBaselineResult#Description
   */
  readonly description?: string;

  /**
   * @schema UpdatePatchBaselineResult#Sources
   */
  readonly sources?: PatchSource[];

}

/**
 * @schema UpdateResourceDataSyncRequest
 */
export interface UpdateResourceDataSyncRequest {
  /**
   * @schema UpdateResourceDataSyncRequest#SyncName
   */
  readonly syncName: string;

  /**
   * @schema UpdateResourceDataSyncRequest#SyncType
   */
  readonly syncType: string;

  /**
   * @schema UpdateResourceDataSyncRequest#SyncSource
   */
  readonly syncSource: ResourceDataSyncSource;

}

/**
 * @schema UpdateResourceDataSyncResult
 */
export interface UpdateResourceDataSyncResult {
}

/**
 * @schema UpdateServiceSettingRequest
 */
export interface UpdateServiceSettingRequest {
  /**
   * @schema UpdateServiceSettingRequest#SettingId
   */
  readonly settingId: string;

  /**
   * @schema UpdateServiceSettingRequest#SettingValue
   */
  readonly settingValue: string;

}

/**
 * @schema UpdateServiceSettingResult
 */
export interface UpdateServiceSettingResult {
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
  readonly value: string;

}

/**
 * @schema Target
 */
export interface Target {
  /**
   * @schema Target#Key
   */
  readonly key?: string;

  /**
   * @schema Target#Values
   */
  readonly values?: string[];

}

/**
 * @schema InstanceAssociationOutputLocation
 */
export interface InstanceAssociationOutputLocation {
  /**
   * @schema InstanceAssociationOutputLocation#S3Location
   */
  readonly s3Location?: S3OutputLocation;

}

/**
 * @schema AssociationDescription
 */
export interface AssociationDescription {
  /**
   * @schema AssociationDescription#Name
   */
  readonly name?: string;

  /**
   * @schema AssociationDescription#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema AssociationDescription#AssociationVersion
   */
  readonly associationVersion?: string;

  /**
   * @schema AssociationDescription#Date
   */
  readonly date?: string;

  /**
   * @schema AssociationDescription#LastUpdateAssociationDate
   */
  readonly lastUpdateAssociationDate?: string;

  /**
   * @schema AssociationDescription#Status
   */
  readonly status?: AssociationStatus;

  /**
   * @schema AssociationDescription#Overview
   */
  readonly overview?: AssociationOverview;

  /**
   * @schema AssociationDescription#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema AssociationDescription#AutomationTargetParameterName
   */
  readonly automationTargetParameterName?: string;

  /**
   * @schema AssociationDescription#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema AssociationDescription#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema AssociationDescription#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema AssociationDescription#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema AssociationDescription#OutputLocation
   */
  readonly outputLocation?: InstanceAssociationOutputLocation;

  /**
   * @schema AssociationDescription#LastExecutionDate
   */
  readonly lastExecutionDate?: string;

  /**
   * @schema AssociationDescription#LastSuccessfulExecutionDate
   */
  readonly lastSuccessfulExecutionDate?: string;

  /**
   * @schema AssociationDescription#AssociationName
   */
  readonly associationName?: string;

  /**
   * @schema AssociationDescription#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema AssociationDescription#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema AssociationDescription#ComplianceSeverity
   */
  readonly complianceSeverity?: string;

  /**
   * @schema AssociationDescription#SyncCompliance
   */
  readonly syncCompliance?: string;

  /**
   * @schema AssociationDescription#ApplyOnlyAtCronInterval
   */
  readonly applyOnlyAtCronInterval?: boolean;

}

/**
 * @schema CreateAssociationBatchRequestEntry
 */
export interface CreateAssociationBatchRequestEntry {
  /**
   * @schema CreateAssociationBatchRequestEntry#Name
   */
  readonly name: string;

  /**
   * @schema CreateAssociationBatchRequestEntry#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema CreateAssociationBatchRequestEntry#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema CreateAssociationBatchRequestEntry#AutomationTargetParameterName
   */
  readonly automationTargetParameterName?: string;

  /**
   * @schema CreateAssociationBatchRequestEntry#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema CreateAssociationBatchRequestEntry#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema CreateAssociationBatchRequestEntry#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema CreateAssociationBatchRequestEntry#OutputLocation
   */
  readonly outputLocation?: InstanceAssociationOutputLocation;

  /**
   * @schema CreateAssociationBatchRequestEntry#AssociationName
   */
  readonly associationName?: string;

  /**
   * @schema CreateAssociationBatchRequestEntry#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema CreateAssociationBatchRequestEntry#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema CreateAssociationBatchRequestEntry#ComplianceSeverity
   */
  readonly complianceSeverity?: string;

  /**
   * @schema CreateAssociationBatchRequestEntry#SyncCompliance
   */
  readonly syncCompliance?: string;

  /**
   * @schema CreateAssociationBatchRequestEntry#ApplyOnlyAtCronInterval
   */
  readonly applyOnlyAtCronInterval?: boolean;

}

/**
 * @schema FailedCreateAssociation
 */
export interface FailedCreateAssociation {
  /**
   * @schema FailedCreateAssociation#Entry
   */
  readonly entry?: CreateAssociationBatchRequestEntry;

  /**
   * @schema FailedCreateAssociation#Message
   */
  readonly message?: string;

  /**
   * @schema FailedCreateAssociation#Fault
   */
  readonly fault?: string;

}

/**
 * @schema DocumentRequires
 */
export interface DocumentRequires {
  /**
   * @schema DocumentRequires#Name
   */
  readonly name: string;

  /**
   * @schema DocumentRequires#Version
   */
  readonly version?: string;

}

/**
 * @schema AttachmentsSource
 */
export interface AttachmentsSource {
  /**
   * @schema AttachmentsSource#Key
   */
  readonly key?: string;

  /**
   * @schema AttachmentsSource#Values
   */
  readonly values?: string[];

  /**
   * @schema AttachmentsSource#Name
   */
  readonly name?: string;

}

/**
 * @schema DocumentDescription
 */
export interface DocumentDescription {
  /**
   * @schema DocumentDescription#Sha1
   */
  readonly sha1?: string;

  /**
   * @schema DocumentDescription#Hash
   */
  readonly hash?: string;

  /**
   * @schema DocumentDescription#HashType
   */
  readonly hashType?: string;

  /**
   * @schema DocumentDescription#Name
   */
  readonly name?: string;

  /**
   * @schema DocumentDescription#VersionName
   */
  readonly versionName?: string;

  /**
   * @schema DocumentDescription#Owner
   */
  readonly owner?: string;

  /**
   * @schema DocumentDescription#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema DocumentDescription#Status
   */
  readonly status?: string;

  /**
   * @schema DocumentDescription#StatusInformation
   */
  readonly statusInformation?: string;

  /**
   * @schema DocumentDescription#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema DocumentDescription#Description
   */
  readonly description?: string;

  /**
   * @schema DocumentDescription#Parameters
   */
  readonly parameters?: DocumentParameter[];

  /**
   * @schema DocumentDescription#PlatformTypes
   */
  readonly platformTypes?: string[];

  /**
   * @schema DocumentDescription#DocumentType
   */
  readonly documentType?: string;

  /**
   * @schema DocumentDescription#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema DocumentDescription#LatestVersion
   */
  readonly latestVersion?: string;

  /**
   * @schema DocumentDescription#DefaultVersion
   */
  readonly defaultVersion?: string;

  /**
   * @schema DocumentDescription#DocumentFormat
   */
  readonly documentFormat?: string;

  /**
   * @schema DocumentDescription#TargetType
   */
  readonly targetType?: string;

  /**
   * @schema DocumentDescription#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema DocumentDescription#AttachmentsInformation
   */
  readonly attachmentsInformation?: AttachmentInformation[];

  /**
   * @schema DocumentDescription#Requires
   */
  readonly requires?: DocumentRequires[];

}

/**
 * @schema OpsItemDataValue
 */
export interface OpsItemDataValue {
  /**
   * @schema OpsItemDataValue#Value
   */
  readonly value?: string;

  /**
   * @schema OpsItemDataValue#Type
   */
  readonly type?: string;

}

/**
 * @schema OpsItemNotification
 */
export interface OpsItemNotification {
  /**
   * @schema OpsItemNotification#Arn
   */
  readonly arn?: string;

}

/**
 * @schema RelatedOpsItem
 */
export interface RelatedOpsItem {
  /**
   * @schema RelatedOpsItem#OpsItemId
   */
  readonly opsItemId: string;

}

/**
 * @schema PatchFilterGroup
 */
export interface PatchFilterGroup {
  /**
   * @schema PatchFilterGroup#PatchFilters
   */
  readonly patchFilters: PatchFilter[];

}

/**
 * @schema PatchRuleGroup
 */
export interface PatchRuleGroup {
  /**
   * @schema PatchRuleGroup#PatchRules
   */
  readonly patchRules: PatchRule[];

}

/**
 * @schema PatchSource
 */
export interface PatchSource {
  /**
   * @schema PatchSource#Name
   */
  readonly name: string;

  /**
   * @schema PatchSource#Products
   */
  readonly products: string[];

  /**
   * @schema PatchSource#Configuration
   */
  readonly configuration: string;

}

/**
 * @schema ResourceDataSyncS3Destination
 */
export interface ResourceDataSyncS3Destination {
  /**
   * @schema ResourceDataSyncS3Destination#BucketName
   */
  readonly bucketName: string;

  /**
   * @schema ResourceDataSyncS3Destination#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema ResourceDataSyncS3Destination#SyncFormat
   */
  readonly syncFormat: string;

  /**
   * @schema ResourceDataSyncS3Destination#Region
   */
  readonly region: string;

  /**
   * @schema ResourceDataSyncS3Destination#AWSKMSKeyARN
   */
  readonly awskmsKeyArn?: string;

  /**
   * @schema ResourceDataSyncS3Destination#DestinationDataSharing
   */
  readonly destinationDataSharing?: ResourceDataSyncDestinationDataSharing;

}

/**
 * @schema ResourceDataSyncSource
 */
export interface ResourceDataSyncSource {
  /**
   * @schema ResourceDataSyncSource#SourceType
   */
  readonly sourceType: string;

  /**
   * @schema ResourceDataSyncSource#AwsOrganizationsSource
   */
  readonly awsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource;

  /**
   * @schema ResourceDataSyncSource#SourceRegions
   */
  readonly sourceRegions: string[];

  /**
   * @schema ResourceDataSyncSource#IncludeFutureRegions
   */
  readonly includeFutureRegions?: boolean;

}

/**
 * @schema InventoryDeletionSummary
 */
export interface InventoryDeletionSummary {
  /**
   * @schema InventoryDeletionSummary#TotalCount
   */
  readonly totalCount?: number;

  /**
   * @schema InventoryDeletionSummary#RemainingCount
   */
  readonly remainingCount?: number;

  /**
   * @schema InventoryDeletionSummary#SummaryItems
   */
  readonly summaryItems?: InventoryDeletionSummaryItem[];

}

/**
 * @schema DescribeActivationsFilter
 */
export interface DescribeActivationsFilter {
  /**
   * @schema DescribeActivationsFilter#FilterKey
   */
  readonly filterKey?: string;

  /**
   * @schema DescribeActivationsFilter#FilterValues
   */
  readonly filterValues?: string[];

}

/**
 * @schema Activation
 */
export interface Activation {
  /**
   * @schema Activation#ActivationId
   */
  readonly activationId?: string;

  /**
   * @schema Activation#Description
   */
  readonly description?: string;

  /**
   * @schema Activation#DefaultInstanceName
   */
  readonly defaultInstanceName?: string;

  /**
   * @schema Activation#IamRole
   */
  readonly iamRole?: string;

  /**
   * @schema Activation#RegistrationLimit
   */
  readonly registrationLimit?: number;

  /**
   * @schema Activation#RegistrationsCount
   */
  readonly registrationsCount?: number;

  /**
   * @schema Activation#ExpirationDate
   */
  readonly expirationDate?: string;

  /**
   * @schema Activation#Expired
   */
  readonly expired?: boolean;

  /**
   * @schema Activation#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema Activation#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema AssociationExecutionTargetsFilter
 */
export interface AssociationExecutionTargetsFilter {
  /**
   * @schema AssociationExecutionTargetsFilter#Key
   */
  readonly key: string;

  /**
   * @schema AssociationExecutionTargetsFilter#Value
   */
  readonly value: string;

}

/**
 * @schema AssociationExecutionTarget
 */
export interface AssociationExecutionTarget {
  /**
   * @schema AssociationExecutionTarget#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema AssociationExecutionTarget#AssociationVersion
   */
  readonly associationVersion?: string;

  /**
   * @schema AssociationExecutionTarget#ExecutionId
   */
  readonly executionId?: string;

  /**
   * @schema AssociationExecutionTarget#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema AssociationExecutionTarget#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema AssociationExecutionTarget#Status
   */
  readonly status?: string;

  /**
   * @schema AssociationExecutionTarget#DetailedStatus
   */
  readonly detailedStatus?: string;

  /**
   * @schema AssociationExecutionTarget#LastExecutionDate
   */
  readonly lastExecutionDate?: string;

  /**
   * @schema AssociationExecutionTarget#OutputSource
   */
  readonly outputSource?: OutputSource;

}

/**
 * @schema AssociationExecutionFilter
 */
export interface AssociationExecutionFilter {
  /**
   * @schema AssociationExecutionFilter#Key
   */
  readonly key: string;

  /**
   * @schema AssociationExecutionFilter#Value
   */
  readonly value: string;

  /**
   * @schema AssociationExecutionFilter#Type
   */
  readonly type: string;

}

/**
 * @schema AssociationExecution
 */
export interface AssociationExecution {
  /**
   * @schema AssociationExecution#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema AssociationExecution#AssociationVersion
   */
  readonly associationVersion?: string;

  /**
   * @schema AssociationExecution#ExecutionId
   */
  readonly executionId?: string;

  /**
   * @schema AssociationExecution#Status
   */
  readonly status?: string;

  /**
   * @schema AssociationExecution#DetailedStatus
   */
  readonly detailedStatus?: string;

  /**
   * @schema AssociationExecution#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema AssociationExecution#LastExecutionDate
   */
  readonly lastExecutionDate?: string;

  /**
   * @schema AssociationExecution#ResourceCountByStatus
   */
  readonly resourceCountByStatus?: string;

}

/**
 * @schema AutomationExecutionFilter
 */
export interface AutomationExecutionFilter {
  /**
   * @schema AutomationExecutionFilter#Key
   */
  readonly key: string;

  /**
   * @schema AutomationExecutionFilter#Values
   */
  readonly values: string[];

}

/**
 * @schema AutomationExecutionMetadata
 */
export interface AutomationExecutionMetadata {
  /**
   * @schema AutomationExecutionMetadata#AutomationExecutionId
   */
  readonly automationExecutionId?: string;

  /**
   * @schema AutomationExecutionMetadata#DocumentName
   */
  readonly documentName?: string;

  /**
   * @schema AutomationExecutionMetadata#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema AutomationExecutionMetadata#AutomationExecutionStatus
   */
  readonly automationExecutionStatus?: string;

  /**
   * @schema AutomationExecutionMetadata#ExecutionStartTime
   */
  readonly executionStartTime?: string;

  /**
   * @schema AutomationExecutionMetadata#ExecutionEndTime
   */
  readonly executionEndTime?: string;

  /**
   * @schema AutomationExecutionMetadata#ExecutedBy
   */
  readonly executedBy?: string;

  /**
   * @schema AutomationExecutionMetadata#LogFile
   */
  readonly logFile?: string;

  /**
   * @schema AutomationExecutionMetadata#Outputs
   */
  readonly outputs?: { [key: string]: string[] };

  /**
   * @schema AutomationExecutionMetadata#Mode
   */
  readonly mode?: string;

  /**
   * @schema AutomationExecutionMetadata#ParentAutomationExecutionId
   */
  readonly parentAutomationExecutionId?: string;

  /**
   * @schema AutomationExecutionMetadata#CurrentStepName
   */
  readonly currentStepName?: string;

  /**
   * @schema AutomationExecutionMetadata#CurrentAction
   */
  readonly currentAction?: string;

  /**
   * @schema AutomationExecutionMetadata#FailureMessage
   */
  readonly failureMessage?: string;

  /**
   * @schema AutomationExecutionMetadata#TargetParameterName
   */
  readonly targetParameterName?: string;

  /**
   * @schema AutomationExecutionMetadata#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema AutomationExecutionMetadata#TargetMaps
   */
  readonly targetMaps?: { [key: string]: string[] }[];

  /**
   * @schema AutomationExecutionMetadata#ResolvedTargets
   */
  readonly resolvedTargets?: ResolvedTargets;

  /**
   * @schema AutomationExecutionMetadata#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema AutomationExecutionMetadata#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema AutomationExecutionMetadata#Target
   */
  readonly target?: string;

  /**
   * @schema AutomationExecutionMetadata#AutomationType
   */
  readonly automationType?: string;

}

/**
 * @schema StepExecutionFilter
 */
export interface StepExecutionFilter {
  /**
   * @schema StepExecutionFilter#Key
   */
  readonly key: string;

  /**
   * @schema StepExecutionFilter#Values
   */
  readonly values: string[];

}

/**
 * @schema StepExecution
 */
export interface StepExecution {
  /**
   * @schema StepExecution#StepName
   */
  readonly stepName?: string;

  /**
   * @schema StepExecution#Action
   */
  readonly action?: string;

  /**
   * @schema StepExecution#TimeoutSeconds
   */
  readonly timeoutSeconds?: number;

  /**
   * @schema StepExecution#OnFailure
   */
  readonly onFailure?: string;

  /**
   * @schema StepExecution#MaxAttempts
   */
  readonly maxAttempts?: number;

  /**
   * @schema StepExecution#ExecutionStartTime
   */
  readonly executionStartTime?: string;

  /**
   * @schema StepExecution#ExecutionEndTime
   */
  readonly executionEndTime?: string;

  /**
   * @schema StepExecution#StepStatus
   */
  readonly stepStatus?: string;

  /**
   * @schema StepExecution#ResponseCode
   */
  readonly responseCode?: string;

  /**
   * @schema StepExecution#Inputs
   */
  readonly inputs?: { [key: string]: string };

  /**
   * @schema StepExecution#Outputs
   */
  readonly outputs?: { [key: string]: string[] };

  /**
   * @schema StepExecution#Response
   */
  readonly response?: string;

  /**
   * @schema StepExecution#FailureMessage
   */
  readonly failureMessage?: string;

  /**
   * @schema StepExecution#FailureDetails
   */
  readonly failureDetails?: FailureDetails;

  /**
   * @schema StepExecution#StepExecutionId
   */
  readonly stepExecutionId?: string;

  /**
   * @schema StepExecution#OverriddenParameters
   */
  readonly overriddenParameters?: { [key: string]: string[] };

  /**
   * @schema StepExecution#IsEnd
   */
  readonly isEnd?: boolean;

  /**
   * @schema StepExecution#NextStep
   */
  readonly nextStep?: string;

  /**
   * @schema StepExecution#IsCritical
   */
  readonly isCritical?: boolean;

  /**
   * @schema StepExecution#ValidNextSteps
   */
  readonly validNextSteps?: string[];

  /**
   * @schema StepExecution#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema StepExecution#TargetLocation
   */
  readonly targetLocation?: TargetLocation;

}

/**
 * @schema PatchOrchestratorFilter
 */
export interface PatchOrchestratorFilter {
  /**
   * @schema PatchOrchestratorFilter#Key
   */
  readonly key?: string;

  /**
   * @schema PatchOrchestratorFilter#Values
   */
  readonly values?: string[];

}

/**
 * @schema Patch
 */
export interface Patch {
  /**
   * @schema Patch#Id
   */
  readonly id?: string;

  /**
   * @schema Patch#ReleaseDate
   */
  readonly releaseDate?: string;

  /**
   * @schema Patch#Title
   */
  readonly title?: string;

  /**
   * @schema Patch#Description
   */
  readonly description?: string;

  /**
   * @schema Patch#ContentUrl
   */
  readonly contentUrl?: string;

  /**
   * @schema Patch#Vendor
   */
  readonly vendor?: string;

  /**
   * @schema Patch#ProductFamily
   */
  readonly productFamily?: string;

  /**
   * @schema Patch#Product
   */
  readonly product?: string;

  /**
   * @schema Patch#Classification
   */
  readonly classification?: string;

  /**
   * @schema Patch#MsrcSeverity
   */
  readonly msrcSeverity?: string;

  /**
   * @schema Patch#KbNumber
   */
  readonly kbNumber?: string;

  /**
   * @schema Patch#MsrcNumber
   */
  readonly msrcNumber?: string;

  /**
   * @schema Patch#Language
   */
  readonly language?: string;

  /**
   * @schema Patch#AdvisoryIds
   */
  readonly advisoryIds?: string[];

  /**
   * @schema Patch#BugzillaIds
   */
  readonly bugzillaIds?: string[];

  /**
   * @schema Patch#CVEIds
   */
  readonly cveIds?: string[];

  /**
   * @schema Patch#Name
   */
  readonly name?: string;

  /**
   * @schema Patch#Epoch
   */
  readonly epoch?: number;

  /**
   * @schema Patch#Version
   */
  readonly version?: string;

  /**
   * @schema Patch#Release
   */
  readonly release?: string;

  /**
   * @schema Patch#Arch
   */
  readonly arch?: string;

  /**
   * @schema Patch#Severity
   */
  readonly severity?: string;

  /**
   * @schema Patch#Repository
   */
  readonly repository?: string;

}

/**
 * @schema AccountSharingInfo
 */
export interface AccountSharingInfo {
  /**
   * @schema AccountSharingInfo#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema AccountSharingInfo#SharedDocumentVersion
   */
  readonly sharedDocumentVersion?: string;

}

/**
 * @schema InstanceAssociation
 */
export interface InstanceAssociation {
  /**
   * @schema InstanceAssociation#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema InstanceAssociation#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema InstanceAssociation#Content
   */
  readonly content?: string;

  /**
   * @schema InstanceAssociation#AssociationVersion
   */
  readonly associationVersion?: string;

}

/**
 * @schema EffectivePatch
 */
export interface EffectivePatch {
  /**
   * @schema EffectivePatch#Patch
   */
  readonly patch?: Patch;

  /**
   * @schema EffectivePatch#PatchStatus
   */
  readonly patchStatus?: PatchStatus;

}

/**
 * @schema InstanceAssociationStatusInfo
 */
export interface InstanceAssociationStatusInfo {
  /**
   * @schema InstanceAssociationStatusInfo#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema InstanceAssociationStatusInfo#Name
   */
  readonly name?: string;

  /**
   * @schema InstanceAssociationStatusInfo#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema InstanceAssociationStatusInfo#AssociationVersion
   */
  readonly associationVersion?: string;

  /**
   * @schema InstanceAssociationStatusInfo#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema InstanceAssociationStatusInfo#ExecutionDate
   */
  readonly executionDate?: string;

  /**
   * @schema InstanceAssociationStatusInfo#Status
   */
  readonly status?: string;

  /**
   * @schema InstanceAssociationStatusInfo#DetailedStatus
   */
  readonly detailedStatus?: string;

  /**
   * @schema InstanceAssociationStatusInfo#ExecutionSummary
   */
  readonly executionSummary?: string;

  /**
   * @schema InstanceAssociationStatusInfo#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema InstanceAssociationStatusInfo#OutputUrl
   */
  readonly outputUrl?: InstanceAssociationOutputUrl;

  /**
   * @schema InstanceAssociationStatusInfo#AssociationName
   */
  readonly associationName?: string;

}

/**
 * @schema InstanceInformationFilter
 */
export interface InstanceInformationFilter {
  /**
   * @schema InstanceInformationFilter#key
   */
  readonly key: string;

  /**
   * @schema InstanceInformationFilter#valueSet
   */
  readonly valueSet: string[];

}

/**
 * @schema InstanceInformationStringFilter
 */
export interface InstanceInformationStringFilter {
  /**
   * @schema InstanceInformationStringFilter#Key
   */
  readonly key: string;

  /**
   * @schema InstanceInformationStringFilter#Values
   */
  readonly values: string[];

}

/**
 * @schema InstanceInformation
 */
export interface InstanceInformation {
  /**
   * @schema InstanceInformation#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema InstanceInformation#PingStatus
   */
  readonly pingStatus?: string;

  /**
   * @schema InstanceInformation#LastPingDateTime
   */
  readonly lastPingDateTime?: string;

  /**
   * @schema InstanceInformation#AgentVersion
   */
  readonly agentVersion?: string;

  /**
   * @schema InstanceInformation#IsLatestVersion
   */
  readonly isLatestVersion?: boolean;

  /**
   * @schema InstanceInformation#PlatformType
   */
  readonly platformType?: string;

  /**
   * @schema InstanceInformation#PlatformName
   */
  readonly platformName?: string;

  /**
   * @schema InstanceInformation#PlatformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema InstanceInformation#ActivationId
   */
  readonly activationId?: string;

  /**
   * @schema InstanceInformation#IamRole
   */
  readonly iamRole?: string;

  /**
   * @schema InstanceInformation#RegistrationDate
   */
  readonly registrationDate?: string;

  /**
   * @schema InstanceInformation#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema InstanceInformation#Name
   */
  readonly name?: string;

  /**
   * @schema InstanceInformation#IPAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema InstanceInformation#ComputerName
   */
  readonly computerName?: string;

  /**
   * @schema InstanceInformation#AssociationStatus
   */
  readonly associationStatus?: string;

  /**
   * @schema InstanceInformation#LastAssociationExecutionDate
   */
  readonly lastAssociationExecutionDate?: string;

  /**
   * @schema InstanceInformation#LastSuccessfulAssociationExecutionDate
   */
  readonly lastSuccessfulAssociationExecutionDate?: string;

  /**
   * @schema InstanceInformation#AssociationOverview
   */
  readonly associationOverview?: InstanceAggregatedAssociationOverview;

}

/**
 * @schema InstancePatchState
 */
export interface InstancePatchState {
  /**
   * @schema InstancePatchState#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema InstancePatchState#PatchGroup
   */
  readonly patchGroup: string;

  /**
   * @schema InstancePatchState#BaselineId
   */
  readonly baselineId: string;

  /**
   * @schema InstancePatchState#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema InstancePatchState#InstallOverrideList
   */
  readonly installOverrideList?: string;

  /**
   * @schema InstancePatchState#OwnerInformation
   */
  readonly ownerInformation?: string;

  /**
   * @schema InstancePatchState#InstalledCount
   */
  readonly installedCount?: number;

  /**
   * @schema InstancePatchState#InstalledOtherCount
   */
  readonly installedOtherCount?: number;

  /**
   * @schema InstancePatchState#InstalledPendingRebootCount
   */
  readonly installedPendingRebootCount?: number;

  /**
   * @schema InstancePatchState#InstalledRejectedCount
   */
  readonly installedRejectedCount?: number;

  /**
   * @schema InstancePatchState#MissingCount
   */
  readonly missingCount?: number;

  /**
   * @schema InstancePatchState#FailedCount
   */
  readonly failedCount?: number;

  /**
   * @schema InstancePatchState#UnreportedNotApplicableCount
   */
  readonly unreportedNotApplicableCount?: number;

  /**
   * @schema InstancePatchState#NotApplicableCount
   */
  readonly notApplicableCount?: number;

  /**
   * @schema InstancePatchState#OperationStartTime
   */
  readonly operationStartTime: string;

  /**
   * @schema InstancePatchState#OperationEndTime
   */
  readonly operationEndTime: string;

  /**
   * @schema InstancePatchState#Operation
   */
  readonly operation: string;

  /**
   * @schema InstancePatchState#LastNoRebootInstallOperationTime
   */
  readonly lastNoRebootInstallOperationTime?: string;

  /**
   * @schema InstancePatchState#RebootOption
   */
  readonly rebootOption?: string;

}

/**
 * @schema InstancePatchStateFilter
 */
export interface InstancePatchStateFilter {
  /**
   * @schema InstancePatchStateFilter#Key
   */
  readonly key: string;

  /**
   * @schema InstancePatchStateFilter#Values
   */
  readonly values: string[];

  /**
   * @schema InstancePatchStateFilter#Type
   */
  readonly type: string;

}

/**
 * @schema PatchComplianceData
 */
export interface PatchComplianceData {
  /**
   * @schema PatchComplianceData#Title
   */
  readonly title: string;

  /**
   * @schema PatchComplianceData#KBId
   */
  readonly kbId: string;

  /**
   * @schema PatchComplianceData#Classification
   */
  readonly classification: string;

  /**
   * @schema PatchComplianceData#Severity
   */
  readonly severity: string;

  /**
   * @schema PatchComplianceData#State
   */
  readonly state: string;

  /**
   * @schema PatchComplianceData#InstalledTime
   */
  readonly installedTime: string;

  /**
   * @schema PatchComplianceData#CVEIds
   */
  readonly cveIds?: string;

}

/**
 * @schema InventoryDeletionStatusItem
 */
export interface InventoryDeletionStatusItem {
  /**
   * @schema InventoryDeletionStatusItem#DeletionId
   */
  readonly deletionId?: string;

  /**
   * @schema InventoryDeletionStatusItem#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema InventoryDeletionStatusItem#DeletionStartTime
   */
  readonly deletionStartTime?: string;

  /**
   * @schema InventoryDeletionStatusItem#LastStatus
   */
  readonly lastStatus?: string;

  /**
   * @schema InventoryDeletionStatusItem#LastStatusMessage
   */
  readonly lastStatusMessage?: string;

  /**
   * @schema InventoryDeletionStatusItem#DeletionSummary
   */
  readonly deletionSummary?: InventoryDeletionSummary;

  /**
   * @schema InventoryDeletionStatusItem#LastStatusUpdateTime
   */
  readonly lastStatusUpdateTime?: string;

}

/**
 * @schema MaintenanceWindowFilter
 */
export interface MaintenanceWindowFilter {
  /**
   * @schema MaintenanceWindowFilter#Key
   */
  readonly key?: string;

  /**
   * @schema MaintenanceWindowFilter#Values
   */
  readonly values?: string[];

}

/**
 * @schema MaintenanceWindowExecutionTaskInvocationIdentity
 */
export interface MaintenanceWindowExecutionTaskInvocationIdentity {
  /**
   * @schema MaintenanceWindowExecutionTaskInvocationIdentity#WindowExecutionId
   */
  readonly windowExecutionId?: string;

  /**
   * @schema MaintenanceWindowExecutionTaskInvocationIdentity#TaskExecutionId
   */
  readonly taskExecutionId?: string;

  /**
   * @schema MaintenanceWindowExecutionTaskInvocationIdentity#InvocationId
   */
  readonly invocationId?: string;

  /**
   * @schema MaintenanceWindowExecutionTaskInvocationIdentity#ExecutionId
   */
  readonly executionId?: string;

  /**
   * @schema MaintenanceWindowExecutionTaskInvocationIdentity#TaskType
   */
  readonly taskType?: string;

  /**
   * @schema MaintenanceWindowExecutionTaskInvocationIdentity#Parameters
   */
  readonly parameters?: string;

  /**
   * @schema MaintenanceWindowExecutionTaskInvocationIdentity#Status
   */
  readonly status?: string;

  /**
   * @schema MaintenanceWindowExecutionTaskInvocationIdentity#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema MaintenanceWindowExecutionTaskInvocationIdentity#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema MaintenanceWindowExecutionTaskInvocationIdentity#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema MaintenanceWindowExecutionTaskInvocationIdentity#OwnerInformation
   */
  readonly ownerInformation?: string;

  /**
   * @schema MaintenanceWindowExecutionTaskInvocationIdentity#WindowTargetId
   */
  readonly windowTargetId?: string;

}

/**
 * @schema MaintenanceWindowExecutionTaskIdentity
 */
export interface MaintenanceWindowExecutionTaskIdentity {
  /**
   * @schema MaintenanceWindowExecutionTaskIdentity#WindowExecutionId
   */
  readonly windowExecutionId?: string;

  /**
   * @schema MaintenanceWindowExecutionTaskIdentity#TaskExecutionId
   */
  readonly taskExecutionId?: string;

  /**
   * @schema MaintenanceWindowExecutionTaskIdentity#Status
   */
  readonly status?: string;

  /**
   * @schema MaintenanceWindowExecutionTaskIdentity#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema MaintenanceWindowExecutionTaskIdentity#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema MaintenanceWindowExecutionTaskIdentity#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema MaintenanceWindowExecutionTaskIdentity#TaskArn
   */
  readonly taskArn?: string;

  /**
   * @schema MaintenanceWindowExecutionTaskIdentity#TaskType
   */
  readonly taskType?: string;

}

/**
 * @schema MaintenanceWindowExecution
 */
export interface MaintenanceWindowExecution {
  /**
   * @schema MaintenanceWindowExecution#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema MaintenanceWindowExecution#WindowExecutionId
   */
  readonly windowExecutionId?: string;

  /**
   * @schema MaintenanceWindowExecution#Status
   */
  readonly status?: string;

  /**
   * @schema MaintenanceWindowExecution#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema MaintenanceWindowExecution#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema MaintenanceWindowExecution#EndTime
   */
  readonly endTime?: string;

}

/**
 * @schema ScheduledWindowExecution
 */
export interface ScheduledWindowExecution {
  /**
   * @schema ScheduledWindowExecution#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema ScheduledWindowExecution#Name
   */
  readonly name?: string;

  /**
   * @schema ScheduledWindowExecution#ExecutionTime
   */
  readonly executionTime?: string;

}

/**
 * @schema MaintenanceWindowTarget
 */
export interface MaintenanceWindowTarget {
  /**
   * @schema MaintenanceWindowTarget#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema MaintenanceWindowTarget#WindowTargetId
   */
  readonly windowTargetId?: string;

  /**
   * @schema MaintenanceWindowTarget#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema MaintenanceWindowTarget#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema MaintenanceWindowTarget#OwnerInformation
   */
  readonly ownerInformation?: string;

  /**
   * @schema MaintenanceWindowTarget#Name
   */
  readonly name?: string;

  /**
   * @schema MaintenanceWindowTarget#Description
   */
  readonly description?: string;

}

/**
 * @schema MaintenanceWindowTask
 */
export interface MaintenanceWindowTask {
  /**
   * @schema MaintenanceWindowTask#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema MaintenanceWindowTask#WindowTaskId
   */
  readonly windowTaskId?: string;

  /**
   * @schema MaintenanceWindowTask#TaskArn
   */
  readonly taskArn?: string;

  /**
   * @schema MaintenanceWindowTask#Type
   */
  readonly type?: string;

  /**
   * @schema MaintenanceWindowTask#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema MaintenanceWindowTask#TaskParameters
   */
  readonly taskParameters?: { [key: string]: MaintenanceWindowTaskParameterValueExpression };

  /**
   * @schema MaintenanceWindowTask#Priority
   */
  readonly priority?: number;

  /**
   * @schema MaintenanceWindowTask#LoggingInfo
   */
  readonly loggingInfo?: LoggingInfo;

  /**
   * @schema MaintenanceWindowTask#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema MaintenanceWindowTask#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema MaintenanceWindowTask#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema MaintenanceWindowTask#Name
   */
  readonly name?: string;

  /**
   * @schema MaintenanceWindowTask#Description
   */
  readonly description?: string;

}

/**
 * @schema MaintenanceWindowIdentity
 */
export interface MaintenanceWindowIdentity {
  /**
   * @schema MaintenanceWindowIdentity#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema MaintenanceWindowIdentity#Name
   */
  readonly name?: string;

  /**
   * @schema MaintenanceWindowIdentity#Description
   */
  readonly description?: string;

  /**
   * @schema MaintenanceWindowIdentity#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema MaintenanceWindowIdentity#Duration
   */
  readonly duration?: number;

  /**
   * @schema MaintenanceWindowIdentity#Cutoff
   */
  readonly cutoff?: number;

  /**
   * @schema MaintenanceWindowIdentity#Schedule
   */
  readonly schedule?: string;

  /**
   * @schema MaintenanceWindowIdentity#ScheduleTimezone
   */
  readonly scheduleTimezone?: string;

  /**
   * @schema MaintenanceWindowIdentity#ScheduleOffset
   */
  readonly scheduleOffset?: number;

  /**
   * @schema MaintenanceWindowIdentity#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema MaintenanceWindowIdentity#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema MaintenanceWindowIdentity#NextExecutionTime
   */
  readonly nextExecutionTime?: string;

}

/**
 * @schema MaintenanceWindowIdentityForTarget
 */
export interface MaintenanceWindowIdentityForTarget {
  /**
   * @schema MaintenanceWindowIdentityForTarget#WindowId
   */
  readonly windowId?: string;

  /**
   * @schema MaintenanceWindowIdentityForTarget#Name
   */
  readonly name?: string;

}

/**
 * @schema OpsItemFilter
 */
export interface OpsItemFilter {
  /**
   * @schema OpsItemFilter#Key
   */
  readonly key: string;

  /**
   * @schema OpsItemFilter#Values
   */
  readonly values: string[];

  /**
   * @schema OpsItemFilter#Operator
   */
  readonly operator: string;

}

/**
 * @schema OpsItemSummary
 */
export interface OpsItemSummary {
  /**
   * @schema OpsItemSummary#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema OpsItemSummary#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema OpsItemSummary#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema OpsItemSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema OpsItemSummary#Priority
   */
  readonly priority?: number;

  /**
   * @schema OpsItemSummary#Source
   */
  readonly source?: string;

  /**
   * @schema OpsItemSummary#Status
   */
  readonly status?: string;

  /**
   * @schema OpsItemSummary#OpsItemId
   */
  readonly opsItemId?: string;

  /**
   * @schema OpsItemSummary#Title
   */
  readonly title?: string;

  /**
   * @schema OpsItemSummary#OperationalData
   */
  readonly operationalData?: { [key: string]: OpsItemDataValue };

  /**
   * @schema OpsItemSummary#Category
   */
  readonly category?: string;

  /**
   * @schema OpsItemSummary#Severity
   */
  readonly severity?: string;

}

/**
 * @schema ParametersFilter
 */
export interface ParametersFilter {
  /**
   * @schema ParametersFilter#Key
   */
  readonly key: string;

  /**
   * @schema ParametersFilter#Values
   */
  readonly values: string[];

}

/**
 * @schema ParameterStringFilter
 */
export interface ParameterStringFilter {
  /**
   * @schema ParameterStringFilter#Key
   */
  readonly key: string;

  /**
   * @schema ParameterStringFilter#Option
   */
  readonly option?: string;

  /**
   * @schema ParameterStringFilter#Values
   */
  readonly values?: string[];

}

/**
 * @schema ParameterMetadata
 */
export interface ParameterMetadata {
  /**
   * @schema ParameterMetadata#Name
   */
  readonly name?: string;

  /**
   * @schema ParameterMetadata#Type
   */
  readonly type?: string;

  /**
   * @schema ParameterMetadata#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema ParameterMetadata#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema ParameterMetadata#LastModifiedUser
   */
  readonly lastModifiedUser?: string;

  /**
   * @schema ParameterMetadata#Description
   */
  readonly description?: string;

  /**
   * @schema ParameterMetadata#AllowedPattern
   */
  readonly allowedPattern?: string;

  /**
   * @schema ParameterMetadata#Version
   */
  readonly version?: number;

  /**
   * @schema ParameterMetadata#Tier
   */
  readonly tier?: string;

  /**
   * @schema ParameterMetadata#Policies
   */
  readonly policies?: ParameterInlinePolicy[];

  /**
   * @schema ParameterMetadata#DataType
   */
  readonly dataType?: string;

}

/**
 * @schema PatchBaselineIdentity
 */
export interface PatchBaselineIdentity {
  /**
   * @schema PatchBaselineIdentity#BaselineId
   */
  readonly baselineId?: string;

  /**
   * @schema PatchBaselineIdentity#BaselineName
   */
  readonly baselineName?: string;

  /**
   * @schema PatchBaselineIdentity#OperatingSystem
   */
  readonly operatingSystem?: string;

  /**
   * @schema PatchBaselineIdentity#BaselineDescription
   */
  readonly baselineDescription?: string;

  /**
   * @schema PatchBaselineIdentity#DefaultBaseline
   */
  readonly defaultBaseline?: boolean;

}

/**
 * @schema PatchGroupPatchBaselineMapping
 */
export interface PatchGroupPatchBaselineMapping {
  /**
   * @schema PatchGroupPatchBaselineMapping#PatchGroup
   */
  readonly patchGroup?: string;

  /**
   * @schema PatchGroupPatchBaselineMapping#BaselineIdentity
   */
  readonly baselineIdentity?: PatchBaselineIdentity;

}

/**
 * @schema SessionFilter
 */
export interface SessionFilter {
  /**
   * @schema SessionFilter#key
   */
  readonly key: string;

  /**
   * @schema SessionFilter#value
   */
  readonly value: string;

}

/**
 * @schema Session
 */
export interface Session {
  /**
   * @schema Session#SessionId
   */
  readonly sessionId?: string;

  /**
   * @schema Session#Target
   */
  readonly target?: string;

  /**
   * @schema Session#Status
   */
  readonly status?: string;

  /**
   * @schema Session#StartDate
   */
  readonly startDate?: string;

  /**
   * @schema Session#EndDate
   */
  readonly endDate?: string;

  /**
   * @schema Session#DocumentName
   */
  readonly documentName?: string;

  /**
   * @schema Session#Owner
   */
  readonly owner?: string;

  /**
   * @schema Session#Details
   */
  readonly details?: string;

  /**
   * @schema Session#OutputUrl
   */
  readonly outputUrl?: SessionManagerOutputUrl;

}

/**
 * @schema AutomationExecution
 */
export interface AutomationExecution {
  /**
   * @schema AutomationExecution#AutomationExecutionId
   */
  readonly automationExecutionId?: string;

  /**
   * @schema AutomationExecution#DocumentName
   */
  readonly documentName?: string;

  /**
   * @schema AutomationExecution#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema AutomationExecution#ExecutionStartTime
   */
  readonly executionStartTime?: string;

  /**
   * @schema AutomationExecution#ExecutionEndTime
   */
  readonly executionEndTime?: string;

  /**
   * @schema AutomationExecution#AutomationExecutionStatus
   */
  readonly automationExecutionStatus?: string;

  /**
   * @schema AutomationExecution#StepExecutions
   */
  readonly stepExecutions?: StepExecution[];

  /**
   * @schema AutomationExecution#StepExecutionsTruncated
   */
  readonly stepExecutionsTruncated?: boolean;

  /**
   * @schema AutomationExecution#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema AutomationExecution#Outputs
   */
  readonly outputs?: { [key: string]: string[] };

  /**
   * @schema AutomationExecution#FailureMessage
   */
  readonly failureMessage?: string;

  /**
   * @schema AutomationExecution#Mode
   */
  readonly mode?: string;

  /**
   * @schema AutomationExecution#ParentAutomationExecutionId
   */
  readonly parentAutomationExecutionId?: string;

  /**
   * @schema AutomationExecution#ExecutedBy
   */
  readonly executedBy?: string;

  /**
   * @schema AutomationExecution#CurrentStepName
   */
  readonly currentStepName?: string;

  /**
   * @schema AutomationExecution#CurrentAction
   */
  readonly currentAction?: string;

  /**
   * @schema AutomationExecution#TargetParameterName
   */
  readonly targetParameterName?: string;

  /**
   * @schema AutomationExecution#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema AutomationExecution#TargetMaps
   */
  readonly targetMaps?: { [key: string]: string[] }[];

  /**
   * @schema AutomationExecution#ResolvedTargets
   */
  readonly resolvedTargets?: ResolvedTargets;

  /**
   * @schema AutomationExecution#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema AutomationExecution#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema AutomationExecution#Target
   */
  readonly target?: string;

  /**
   * @schema AutomationExecution#TargetLocations
   */
  readonly targetLocations?: TargetLocation[];

  /**
   * @schema AutomationExecution#ProgressCounters
   */
  readonly progressCounters?: ProgressCounters;

}

/**
 * @schema CloudWatchOutputConfig
 */
export interface CloudWatchOutputConfig {
  /**
   * @schema CloudWatchOutputConfig#CloudWatchLogGroupName
   */
  readonly cloudWatchLogGroupName?: string;

  /**
   * @schema CloudWatchOutputConfig#CloudWatchOutputEnabled
   */
  readonly cloudWatchOutputEnabled?: boolean;

}

/**
 * @schema AttachmentContent
 */
export interface AttachmentContent {
  /**
   * @schema AttachmentContent#Name
   */
  readonly name?: string;

  /**
   * @schema AttachmentContent#Size
   */
  readonly size?: number;

  /**
   * @schema AttachmentContent#Hash
   */
  readonly hash?: string;

  /**
   * @schema AttachmentContent#HashType
   */
  readonly hashType?: string;

  /**
   * @schema AttachmentContent#Url
   */
  readonly url?: string;

}

/**
 * @schema InventoryFilter
 */
export interface InventoryFilter {
  /**
   * @schema InventoryFilter#Key
   */
  readonly key: string;

  /**
   * @schema InventoryFilter#Values
   */
  readonly values: string[];

  /**
   * @schema InventoryFilter#Type
   */
  readonly type?: string;

}

/**
 * @schema InventoryAggregator
 */
export interface InventoryAggregator {
  /**
   * @schema InventoryAggregator#Expression
   */
  readonly expression?: string;

  /**
   * @schema InventoryAggregator#Aggregators
   */
  readonly aggregators?: InventoryAggregator[];

  /**
   * @schema InventoryAggregator#Groups
   */
  readonly groups?: InventoryGroup[];

}

/**
 * @schema ResultAttribute
 */
export interface ResultAttribute {
  /**
   * @schema ResultAttribute#TypeName
   */
  readonly typeName: string;

}

/**
 * @schema InventoryResultEntity
 */
export interface InventoryResultEntity {
  /**
   * @schema InventoryResultEntity#Id
   */
  readonly id?: string;

  /**
   * @schema InventoryResultEntity#Data
   */
  readonly data?: { [key: string]: InventoryResultItem };

}

/**
 * @schema InventoryItemSchema
 */
export interface InventoryItemSchema {
  /**
   * @schema InventoryItemSchema#TypeName
   */
  readonly typeName: string;

  /**
   * @schema InventoryItemSchema#Version
   */
  readonly version?: string;

  /**
   * @schema InventoryItemSchema#Attributes
   */
  readonly attributes: InventoryItemAttribute[];

  /**
   * @schema InventoryItemSchema#DisplayName
   */
  readonly displayName?: string;

}

/**
 * @schema MaintenanceWindowTaskParameterValueExpression
 */
export interface MaintenanceWindowTaskParameterValueExpression {
  /**
   * @schema MaintenanceWindowTaskParameterValueExpression#Values
   */
  readonly values?: string[];

}

/**
 * @schema MaintenanceWindowTaskInvocationParameters
 */
export interface MaintenanceWindowTaskInvocationParameters {
  /**
   * @schema MaintenanceWindowTaskInvocationParameters#RunCommand
   */
  readonly runCommand?: MaintenanceWindowRunCommandParameters;

  /**
   * @schema MaintenanceWindowTaskInvocationParameters#Automation
   */
  readonly automation?: MaintenanceWindowAutomationParameters;

  /**
   * @schema MaintenanceWindowTaskInvocationParameters#StepFunctions
   */
  readonly stepFunctions?: MaintenanceWindowStepFunctionsParameters;

  /**
   * @schema MaintenanceWindowTaskInvocationParameters#Lambda
   */
  readonly lambda?: MaintenanceWindowLambdaParameters;

}

/**
 * @schema LoggingInfo
 */
export interface LoggingInfo {
  /**
   * @schema LoggingInfo#S3BucketName
   */
  readonly s3BucketName: string;

  /**
   * @schema LoggingInfo#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

  /**
   * @schema LoggingInfo#S3Region
   */
  readonly s3Region: string;

}

/**
 * @schema OpsItem
 */
export interface OpsItem {
  /**
   * @schema OpsItem#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema OpsItem#CreatedTime
   */
  readonly createdTime?: string;

  /**
   * @schema OpsItem#Description
   */
  readonly description?: string;

  /**
   * @schema OpsItem#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema OpsItem#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema OpsItem#Notifications
   */
  readonly notifications?: OpsItemNotification[];

  /**
   * @schema OpsItem#Priority
   */
  readonly priority?: number;

  /**
   * @schema OpsItem#RelatedOpsItems
   */
  readonly relatedOpsItems?: RelatedOpsItem[];

  /**
   * @schema OpsItem#Status
   */
  readonly status?: string;

  /**
   * @schema OpsItem#OpsItemId
   */
  readonly opsItemId?: string;

  /**
   * @schema OpsItem#Version
   */
  readonly version?: string;

  /**
   * @schema OpsItem#Title
   */
  readonly title?: string;

  /**
   * @schema OpsItem#Source
   */
  readonly source?: string;

  /**
   * @schema OpsItem#OperationalData
   */
  readonly operationalData?: { [key: string]: OpsItemDataValue };

  /**
   * @schema OpsItem#Category
   */
  readonly category?: string;

  /**
   * @schema OpsItem#Severity
   */
  readonly severity?: string;

}

/**
 * @schema OpsFilter
 */
export interface OpsFilter {
  /**
   * @schema OpsFilter#Key
   */
  readonly key: string;

  /**
   * @schema OpsFilter#Values
   */
  readonly values: string[];

  /**
   * @schema OpsFilter#Type
   */
  readonly type?: string;

}

/**
 * @schema OpsAggregator
 */
export interface OpsAggregator {
  /**
   * @schema OpsAggregator#AggregatorType
   */
  readonly aggregatorType?: string;

  /**
   * @schema OpsAggregator#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema OpsAggregator#AttributeName
   */
  readonly attributeName?: string;

  /**
   * @schema OpsAggregator#Values
   */
  readonly values?: { [key: string]: string };

  /**
   * @schema OpsAggregator#Filters
   */
  readonly filters?: OpsFilter[];

  /**
   * @schema OpsAggregator#Aggregators
   */
  readonly aggregators?: OpsAggregator[];

}

/**
 * @schema OpsResultAttribute
 */
export interface OpsResultAttribute {
  /**
   * @schema OpsResultAttribute#TypeName
   */
  readonly typeName: string;

}

/**
 * @schema OpsEntity
 */
export interface OpsEntity {
  /**
   * @schema OpsEntity#Id
   */
  readonly id?: string;

  /**
   * @schema OpsEntity#Data
   */
  readonly data?: { [key: string]: OpsEntityItem };

}

/**
 * @schema Parameter
 */
export interface Parameter {
  /**
   * @schema Parameter#Name
   */
  readonly name?: string;

  /**
   * @schema Parameter#Type
   */
  readonly type?: string;

  /**
   * @schema Parameter#Value
   */
  readonly value?: string;

  /**
   * @schema Parameter#Version
   */
  readonly version?: number;

  /**
   * @schema Parameter#Selector
   */
  readonly selector?: string;

  /**
   * @schema Parameter#SourceResult
   */
  readonly sourceResult?: string;

  /**
   * @schema Parameter#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema Parameter#ARN
   */
  readonly arn?: string;

  /**
   * @schema Parameter#DataType
   */
  readonly dataType?: string;

}

/**
 * @schema ParameterHistory
 */
export interface ParameterHistory {
  /**
   * @schema ParameterHistory#Name
   */
  readonly name?: string;

  /**
   * @schema ParameterHistory#Type
   */
  readonly type?: string;

  /**
   * @schema ParameterHistory#KeyId
   */
  readonly keyId?: string;

  /**
   * @schema ParameterHistory#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema ParameterHistory#LastModifiedUser
   */
  readonly lastModifiedUser?: string;

  /**
   * @schema ParameterHistory#Description
   */
  readonly description?: string;

  /**
   * @schema ParameterHistory#Value
   */
  readonly value?: string;

  /**
   * @schema ParameterHistory#AllowedPattern
   */
  readonly allowedPattern?: string;

  /**
   * @schema ParameterHistory#Version
   */
  readonly version?: number;

  /**
   * @schema ParameterHistory#Labels
   */
  readonly labels?: string[];

  /**
   * @schema ParameterHistory#Tier
   */
  readonly tier?: string;

  /**
   * @schema ParameterHistory#Policies
   */
  readonly policies?: ParameterInlinePolicy[];

  /**
   * @schema ParameterHistory#DataType
   */
  readonly dataType?: string;

}

/**
 * @schema ServiceSetting
 */
export interface ServiceSetting {
  /**
   * @schema ServiceSetting#SettingId
   */
  readonly settingId?: string;

  /**
   * @schema ServiceSetting#SettingValue
   */
  readonly settingValue?: string;

  /**
   * @schema ServiceSetting#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema ServiceSetting#LastModifiedUser
   */
  readonly lastModifiedUser?: string;

  /**
   * @schema ServiceSetting#ARN
   */
  readonly arn?: string;

  /**
   * @schema ServiceSetting#Status
   */
  readonly status?: string;

}

/**
 * @schema AssociationVersionInfo
 */
export interface AssociationVersionInfo {
  /**
   * @schema AssociationVersionInfo#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema AssociationVersionInfo#AssociationVersion
   */
  readonly associationVersion?: string;

  /**
   * @schema AssociationVersionInfo#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema AssociationVersionInfo#Name
   */
  readonly name?: string;

  /**
   * @schema AssociationVersionInfo#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema AssociationVersionInfo#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema AssociationVersionInfo#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema AssociationVersionInfo#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema AssociationVersionInfo#OutputLocation
   */
  readonly outputLocation?: InstanceAssociationOutputLocation;

  /**
   * @schema AssociationVersionInfo#AssociationName
   */
  readonly associationName?: string;

  /**
   * @schema AssociationVersionInfo#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema AssociationVersionInfo#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema AssociationVersionInfo#ComplianceSeverity
   */
  readonly complianceSeverity?: string;

  /**
   * @schema AssociationVersionInfo#SyncCompliance
   */
  readonly syncCompliance?: string;

  /**
   * @schema AssociationVersionInfo#ApplyOnlyAtCronInterval
   */
  readonly applyOnlyAtCronInterval?: boolean;

}

/**
 * @schema AssociationFilter
 */
export interface AssociationFilter {
  /**
   * @schema AssociationFilter#key
   */
  readonly key: string;

  /**
   * @schema AssociationFilter#value
   */
  readonly value: string;

}

/**
 * @schema Association
 */
export interface Association {
  /**
   * @schema Association#Name
   */
  readonly name?: string;

  /**
   * @schema Association#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Association#AssociationId
   */
  readonly associationId?: string;

  /**
   * @schema Association#AssociationVersion
   */
  readonly associationVersion?: string;

  /**
   * @schema Association#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema Association#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema Association#LastExecutionDate
   */
  readonly lastExecutionDate?: string;

  /**
   * @schema Association#Overview
   */
  readonly overview?: AssociationOverview;

  /**
   * @schema Association#ScheduleExpression
   */
  readonly scheduleExpression?: string;

  /**
   * @schema Association#AssociationName
   */
  readonly associationName?: string;

}

/**
 * @schema CommandFilter
 */
export interface CommandFilter {
  /**
   * @schema CommandFilter#key
   */
  readonly key: string;

  /**
   * @schema CommandFilter#value
   */
  readonly value: string;

}

/**
 * @schema CommandInvocation
 */
export interface CommandInvocation {
  /**
   * @schema CommandInvocation#CommandId
   */
  readonly commandId?: string;

  /**
   * @schema CommandInvocation#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema CommandInvocation#InstanceName
   */
  readonly instanceName?: string;

  /**
   * @schema CommandInvocation#Comment
   */
  readonly comment?: string;

  /**
   * @schema CommandInvocation#DocumentName
   */
  readonly documentName?: string;

  /**
   * @schema CommandInvocation#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema CommandInvocation#RequestedDateTime
   */
  readonly requestedDateTime?: string;

  /**
   * @schema CommandInvocation#Status
   */
  readonly status?: string;

  /**
   * @schema CommandInvocation#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema CommandInvocation#TraceOutput
   */
  readonly traceOutput?: string;

  /**
   * @schema CommandInvocation#StandardOutputUrl
   */
  readonly standardOutputUrl?: string;

  /**
   * @schema CommandInvocation#StandardErrorUrl
   */
  readonly standardErrorUrl?: string;

  /**
   * @schema CommandInvocation#CommandPlugins
   */
  readonly commandPlugins?: CommandPlugin[];

  /**
   * @schema CommandInvocation#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema CommandInvocation#NotificationConfig
   */
  readonly notificationConfig?: NotificationConfig;

  /**
   * @schema CommandInvocation#CloudWatchOutputConfig
   */
  readonly cloudWatchOutputConfig?: CloudWatchOutputConfig;

}

/**
 * @schema Command
 */
export interface Command {
  /**
   * @schema Command#CommandId
   */
  readonly commandId?: string;

  /**
   * @schema Command#DocumentName
   */
  readonly documentName?: string;

  /**
   * @schema Command#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema Command#Comment
   */
  readonly comment?: string;

  /**
   * @schema Command#ExpiresAfter
   */
  readonly expiresAfter?: string;

  /**
   * @schema Command#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema Command#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema Command#Targets
   */
  readonly targets?: Target[];

  /**
   * @schema Command#RequestedDateTime
   */
  readonly requestedDateTime?: string;

  /**
   * @schema Command#Status
   */
  readonly status?: string;

  /**
   * @schema Command#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema Command#OutputS3Region
   */
  readonly outputS3Region?: string;

  /**
   * @schema Command#OutputS3BucketName
   */
  readonly outputS3BucketName?: string;

  /**
   * @schema Command#OutputS3KeyPrefix
   */
  readonly outputS3KeyPrefix?: string;

  /**
   * @schema Command#MaxConcurrency
   */
  readonly maxConcurrency?: string;

  /**
   * @schema Command#MaxErrors
   */
  readonly maxErrors?: string;

  /**
   * @schema Command#TargetCount
   */
  readonly targetCount?: number;

  /**
   * @schema Command#CompletedCount
   */
  readonly completedCount?: number;

  /**
   * @schema Command#ErrorCount
   */
  readonly errorCount?: number;

  /**
   * @schema Command#DeliveryTimedOutCount
   */
  readonly deliveryTimedOutCount?: number;

  /**
   * @schema Command#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema Command#NotificationConfig
   */
  readonly notificationConfig?: NotificationConfig;

  /**
   * @schema Command#CloudWatchOutputConfig
   */
  readonly cloudWatchOutputConfig?: CloudWatchOutputConfig;

  /**
   * @schema Command#TimeoutSeconds
   */
  readonly timeoutSeconds?: number;

}

/**
 * @schema ComplianceStringFilter
 */
export interface ComplianceStringFilter {
  /**
   * @schema ComplianceStringFilter#Key
   */
  readonly key?: string;

  /**
   * @schema ComplianceStringFilter#Values
   */
  readonly values?: string[];

  /**
   * @schema ComplianceStringFilter#Type
   */
  readonly type?: string;

}

/**
 * @schema ComplianceItem
 */
export interface ComplianceItem {
  /**
   * @schema ComplianceItem#ComplianceType
   */
  readonly complianceType?: string;

  /**
   * @schema ComplianceItem#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ComplianceItem#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ComplianceItem#Id
   */
  readonly id?: string;

  /**
   * @schema ComplianceItem#Title
   */
  readonly title?: string;

  /**
   * @schema ComplianceItem#Status
   */
  readonly status?: string;

  /**
   * @schema ComplianceItem#Severity
   */
  readonly severity?: string;

  /**
   * @schema ComplianceItem#ExecutionSummary
   */
  readonly executionSummary?: ComplianceExecutionSummary;

  /**
   * @schema ComplianceItem#Details
   */
  readonly details?: { [key: string]: string };

}

/**
 * @schema ComplianceSummaryItem
 */
export interface ComplianceSummaryItem {
  /**
   * @schema ComplianceSummaryItem#ComplianceType
   */
  readonly complianceType?: string;

  /**
   * @schema ComplianceSummaryItem#CompliantSummary
   */
  readonly compliantSummary?: CompliantSummary;

  /**
   * @schema ComplianceSummaryItem#NonCompliantSummary
   */
  readonly nonCompliantSummary?: NonCompliantSummary;

}

/**
 * @schema DocumentVersionInfo
 */
export interface DocumentVersionInfo {
  /**
   * @schema DocumentVersionInfo#Name
   */
  readonly name?: string;

  /**
   * @schema DocumentVersionInfo#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema DocumentVersionInfo#VersionName
   */
  readonly versionName?: string;

  /**
   * @schema DocumentVersionInfo#CreatedDate
   */
  readonly createdDate?: string;

  /**
   * @schema DocumentVersionInfo#IsDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

  /**
   * @schema DocumentVersionInfo#DocumentFormat
   */
  readonly documentFormat?: string;

  /**
   * @schema DocumentVersionInfo#Status
   */
  readonly status?: string;

  /**
   * @schema DocumentVersionInfo#StatusInformation
   */
  readonly statusInformation?: string;

}

/**
 * @schema DocumentFilter
 */
export interface DocumentFilter {
  /**
   * @schema DocumentFilter#key
   */
  readonly key: string;

  /**
   * @schema DocumentFilter#value
   */
  readonly value: string;

}

/**
 * @schema DocumentKeyValuesFilter
 */
export interface DocumentKeyValuesFilter {
  /**
   * @schema DocumentKeyValuesFilter#Key
   */
  readonly key?: string;

  /**
   * @schema DocumentKeyValuesFilter#Values
   */
  readonly values?: string[];

}

/**
 * @schema DocumentIdentifier
 */
export interface DocumentIdentifier {
  /**
   * @schema DocumentIdentifier#Name
   */
  readonly name?: string;

  /**
   * @schema DocumentIdentifier#Owner
   */
  readonly owner?: string;

  /**
   * @schema DocumentIdentifier#VersionName
   */
  readonly versionName?: string;

  /**
   * @schema DocumentIdentifier#PlatformTypes
   */
  readonly platformTypes?: string[];

  /**
   * @schema DocumentIdentifier#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema DocumentIdentifier#DocumentType
   */
  readonly documentType?: string;

  /**
   * @schema DocumentIdentifier#SchemaVersion
   */
  readonly schemaVersion?: string;

  /**
   * @schema DocumentIdentifier#DocumentFormat
   */
  readonly documentFormat?: string;

  /**
   * @schema DocumentIdentifier#TargetType
   */
  readonly targetType?: string;

  /**
   * @schema DocumentIdentifier#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema DocumentIdentifier#Requires
   */
  readonly requires?: DocumentRequires[];

}

/**
 * @schema ResourceComplianceSummaryItem
 */
export interface ResourceComplianceSummaryItem {
  /**
   * @schema ResourceComplianceSummaryItem#ComplianceType
   */
  readonly complianceType?: string;

  /**
   * @schema ResourceComplianceSummaryItem#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ResourceComplianceSummaryItem#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema ResourceComplianceSummaryItem#Status
   */
  readonly status?: string;

  /**
   * @schema ResourceComplianceSummaryItem#OverallSeverity
   */
  readonly overallSeverity?: string;

  /**
   * @schema ResourceComplianceSummaryItem#ExecutionSummary
   */
  readonly executionSummary?: ComplianceExecutionSummary;

  /**
   * @schema ResourceComplianceSummaryItem#CompliantSummary
   */
  readonly compliantSummary?: CompliantSummary;

  /**
   * @schema ResourceComplianceSummaryItem#NonCompliantSummary
   */
  readonly nonCompliantSummary?: NonCompliantSummary;

}

/**
 * @schema ResourceDataSyncItem
 */
export interface ResourceDataSyncItem {
  /**
   * @schema ResourceDataSyncItem#SyncName
   */
  readonly syncName?: string;

  /**
   * @schema ResourceDataSyncItem#SyncType
   */
  readonly syncType?: string;

  /**
   * @schema ResourceDataSyncItem#SyncSource
   */
  readonly syncSource?: ResourceDataSyncSourceWithState;

  /**
   * @schema ResourceDataSyncItem#S3Destination
   */
  readonly s3Destination?: ResourceDataSyncS3Destination;

  /**
   * @schema ResourceDataSyncItem#LastSyncTime
   */
  readonly lastSyncTime?: string;

  /**
   * @schema ResourceDataSyncItem#LastSuccessfulSyncTime
   */
  readonly lastSuccessfulSyncTime?: string;

  /**
   * @schema ResourceDataSyncItem#SyncLastModifiedTime
   */
  readonly syncLastModifiedTime?: string;

  /**
   * @schema ResourceDataSyncItem#LastStatus
   */
  readonly lastStatus?: string;

  /**
   * @schema ResourceDataSyncItem#SyncCreatedTime
   */
  readonly syncCreatedTime?: string;

  /**
   * @schema ResourceDataSyncItem#LastSyncStatusMessage
   */
  readonly lastSyncStatusMessage?: string;

}

/**
 * @schema ComplianceExecutionSummary
 */
export interface ComplianceExecutionSummary {
  /**
   * @schema ComplianceExecutionSummary#ExecutionTime
   */
  readonly executionTime: string;

  /**
   * @schema ComplianceExecutionSummary#ExecutionId
   */
  readonly executionId?: string;

  /**
   * @schema ComplianceExecutionSummary#ExecutionType
   */
  readonly executionType?: string;

}

/**
 * @schema ComplianceItemEntry
 */
export interface ComplianceItemEntry {
  /**
   * @schema ComplianceItemEntry#Id
   */
  readonly id?: string;

  /**
   * @schema ComplianceItemEntry#Title
   */
  readonly title?: string;

  /**
   * @schema ComplianceItemEntry#Severity
   */
  readonly severity: string;

  /**
   * @schema ComplianceItemEntry#Status
   */
  readonly status: string;

  /**
   * @schema ComplianceItemEntry#Details
   */
  readonly details?: { [key: string]: string };

}

/**
 * @schema InventoryItem
 */
export interface InventoryItem {
  /**
   * @schema InventoryItem#TypeName
   */
  readonly typeName: string;

  /**
   * @schema InventoryItem#SchemaVersion
   */
  readonly schemaVersion: string;

  /**
   * @schema InventoryItem#CaptureTime
   */
  readonly captureTime: string;

  /**
   * @schema InventoryItem#ContentHash
   */
  readonly contentHash?: string;

  /**
   * @schema InventoryItem#Content
   */
  readonly content?: { [key: string]: string }[];

  /**
   * @schema InventoryItem#Context
   */
  readonly context?: { [key: string]: string };

}

/**
 * @schema NotificationConfig
 */
export interface NotificationConfig {
  /**
   * @schema NotificationConfig#NotificationArn
   */
  readonly notificationArn?: string;

  /**
   * @schema NotificationConfig#NotificationEvents
   */
  readonly notificationEvents?: string[];

  /**
   * @schema NotificationConfig#NotificationType
   */
  readonly notificationType?: string;

}

/**
 * @schema TargetLocation
 */
export interface TargetLocation {
  /**
   * @schema TargetLocation#Accounts
   */
  readonly accounts?: string[];

  /**
   * @schema TargetLocation#Regions
   */
  readonly regions?: string[];

  /**
   * @schema TargetLocation#TargetLocationMaxConcurrency
   */
  readonly targetLocationMaxConcurrency?: string;

  /**
   * @schema TargetLocation#TargetLocationMaxErrors
   */
  readonly targetLocationMaxErrors?: string;

  /**
   * @schema TargetLocation#ExecutionRoleName
   */
  readonly executionRoleName?: string;

}

/**
 * @schema AssociationStatus
 */
export interface AssociationStatus {
  /**
   * @schema AssociationStatus#Date
   */
  readonly date: string;

  /**
   * @schema AssociationStatus#Name
   */
  readonly name: string;

  /**
   * @schema AssociationStatus#Message
   */
  readonly message: string;

  /**
   * @schema AssociationStatus#AdditionalInfo
   */
  readonly additionalInfo?: string;

}

/**
 * @schema DocumentDefaultVersionDescription
 */
export interface DocumentDefaultVersionDescription {
  /**
   * @schema DocumentDefaultVersionDescription#Name
   */
  readonly name?: string;

  /**
   * @schema DocumentDefaultVersionDescription#DefaultVersion
   */
  readonly defaultVersion?: string;

  /**
   * @schema DocumentDefaultVersionDescription#DefaultVersionName
   */
  readonly defaultVersionName?: string;

}

/**
 * @schema S3OutputLocation
 */
export interface S3OutputLocation {
  /**
   * @schema S3OutputLocation#OutputS3Region
   */
  readonly outputS3Region?: string;

  /**
   * @schema S3OutputLocation#OutputS3BucketName
   */
  readonly outputS3BucketName?: string;

  /**
   * @schema S3OutputLocation#OutputS3KeyPrefix
   */
  readonly outputS3KeyPrefix?: string;

}

/**
 * @schema AssociationOverview
 */
export interface AssociationOverview {
  /**
   * @schema AssociationOverview#Status
   */
  readonly status?: string;

  /**
   * @schema AssociationOverview#DetailedStatus
   */
  readonly detailedStatus?: string;

  /**
   * @schema AssociationOverview#AssociationStatusAggregatedCount
   */
  readonly associationStatusAggregatedCount?: { [key: string]: number };

}

/**
 * @schema DocumentParameter
 */
export interface DocumentParameter {
  /**
   * @schema DocumentParameter#Name
   */
  readonly name?: string;

  /**
   * @schema DocumentParameter#Type
   */
  readonly type?: string;

  /**
   * @schema DocumentParameter#Description
   */
  readonly description?: string;

  /**
   * @schema DocumentParameter#DefaultValue
   */
  readonly defaultValue?: string;

}

/**
 * @schema AttachmentInformation
 */
export interface AttachmentInformation {
  /**
   * @schema AttachmentInformation#Name
   */
  readonly name?: string;

}

/**
 * @schema PatchFilter
 */
export interface PatchFilter {
  /**
   * @schema PatchFilter#Key
   */
  readonly key: string;

  /**
   * @schema PatchFilter#Values
   */
  readonly values: string[];

}

/**
 * @schema PatchRule
 */
export interface PatchRule {
  /**
   * @schema PatchRule#PatchFilterGroup
   */
  readonly patchFilterGroup: PatchFilterGroup;

  /**
   * @schema PatchRule#ComplianceLevel
   */
  readonly complianceLevel?: string;

  /**
   * @schema PatchRule#ApproveAfterDays
   */
  readonly approveAfterDays?: number;

  /**
   * @schema PatchRule#ApproveUntilDate
   */
  readonly approveUntilDate?: string;

  /**
   * @schema PatchRule#EnableNonSecurity
   */
  readonly enableNonSecurity?: boolean;

}

/**
 * @schema ResourceDataSyncDestinationDataSharing
 */
export interface ResourceDataSyncDestinationDataSharing {
  /**
   * @schema ResourceDataSyncDestinationDataSharing#DestinationDataSharingType
   */
  readonly destinationDataSharingType?: string;

}

/**
 * @schema ResourceDataSyncAwsOrganizationsSource
 */
export interface ResourceDataSyncAwsOrganizationsSource {
  /**
   * @schema ResourceDataSyncAwsOrganizationsSource#OrganizationSourceType
   */
  readonly organizationSourceType: string;

  /**
   * @schema ResourceDataSyncAwsOrganizationsSource#OrganizationalUnits
   */
  readonly organizationalUnits?: ResourceDataSyncOrganizationalUnit[];

}

/**
 * @schema InventoryDeletionSummaryItem
 */
export interface InventoryDeletionSummaryItem {
  /**
   * @schema InventoryDeletionSummaryItem#Version
   */
  readonly version?: string;

  /**
   * @schema InventoryDeletionSummaryItem#Count
   */
  readonly count?: number;

  /**
   * @schema InventoryDeletionSummaryItem#RemainingCount
   */
  readonly remainingCount?: number;

}

/**
 * @schema OutputSource
 */
export interface OutputSource {
  /**
   * @schema OutputSource#OutputSourceId
   */
  readonly outputSourceId?: string;

  /**
   * @schema OutputSource#OutputSourceType
   */
  readonly outputSourceType?: string;

}

/**
 * @schema ResolvedTargets
 */
export interface ResolvedTargets {
  /**
   * @schema ResolvedTargets#ParameterValues
   */
  readonly parameterValues?: string[];

  /**
   * @schema ResolvedTargets#Truncated
   */
  readonly truncated?: boolean;

}

/**
 * @schema FailureDetails
 */
export interface FailureDetails {
  /**
   * @schema FailureDetails#FailureStage
   */
  readonly failureStage?: string;

  /**
   * @schema FailureDetails#FailureType
   */
  readonly failureType?: string;

  /**
   * @schema FailureDetails#Details
   */
  readonly details?: { [key: string]: string[] };

}

/**
 * @schema PatchStatus
 */
export interface PatchStatus {
  /**
   * @schema PatchStatus#DeploymentStatus
   */
  readonly deploymentStatus?: string;

  /**
   * @schema PatchStatus#ComplianceLevel
   */
  readonly complianceLevel?: string;

  /**
   * @schema PatchStatus#ApprovalDate
   */
  readonly approvalDate?: string;

}

/**
 * @schema InstanceAssociationOutputUrl
 */
export interface InstanceAssociationOutputUrl {
  /**
   * @schema InstanceAssociationOutputUrl#S3OutputUrl
   */
  readonly s3OutputUrl?: S3OutputUrl;

}

/**
 * @schema InstanceAggregatedAssociationOverview
 */
export interface InstanceAggregatedAssociationOverview {
  /**
   * @schema InstanceAggregatedAssociationOverview#DetailedStatus
   */
  readonly detailedStatus?: string;

  /**
   * @schema InstanceAggregatedAssociationOverview#InstanceAssociationStatusAggregatedCount
   */
  readonly instanceAssociationStatusAggregatedCount?: { [key: string]: number };

}

/**
 * @schema ParameterInlinePolicy
 */
export interface ParameterInlinePolicy {
  /**
   * @schema ParameterInlinePolicy#PolicyText
   */
  readonly policyText?: string;

  /**
   * @schema ParameterInlinePolicy#PolicyType
   */
  readonly policyType?: string;

  /**
   * @schema ParameterInlinePolicy#PolicyStatus
   */
  readonly policyStatus?: string;

}

/**
 * @schema SessionManagerOutputUrl
 */
export interface SessionManagerOutputUrl {
  /**
   * @schema SessionManagerOutputUrl#S3OutputUrl
   */
  readonly s3OutputUrl?: string;

  /**
   * @schema SessionManagerOutputUrl#CloudWatchOutputUrl
   */
  readonly cloudWatchOutputUrl?: string;

}

/**
 * @schema ProgressCounters
 */
export interface ProgressCounters {
  /**
   * @schema ProgressCounters#TotalSteps
   */
  readonly totalSteps?: number;

  /**
   * @schema ProgressCounters#SuccessSteps
   */
  readonly successSteps?: number;

  /**
   * @schema ProgressCounters#FailedSteps
   */
  readonly failedSteps?: number;

  /**
   * @schema ProgressCounters#CancelledSteps
   */
  readonly cancelledSteps?: number;

  /**
   * @schema ProgressCounters#TimedOutSteps
   */
  readonly timedOutSteps?: number;

}

/**
 * @schema InventoryGroup
 */
export interface InventoryGroup {
  /**
   * @schema InventoryGroup#Name
   */
  readonly name: string;

  /**
   * @schema InventoryGroup#Filters
   */
  readonly filters: InventoryFilter[];

}

/**
 * @schema InventoryResultItem
 */
export interface InventoryResultItem {
  /**
   * @schema InventoryResultItem#TypeName
   */
  readonly typeName: string;

  /**
   * @schema InventoryResultItem#SchemaVersion
   */
  readonly schemaVersion: string;

  /**
   * @schema InventoryResultItem#CaptureTime
   */
  readonly captureTime?: string;

  /**
   * @schema InventoryResultItem#ContentHash
   */
  readonly contentHash?: string;

  /**
   * @schema InventoryResultItem#Content
   */
  readonly content: { [key: string]: string }[];

}

/**
 * @schema InventoryItemAttribute
 */
export interface InventoryItemAttribute {
  /**
   * @schema InventoryItemAttribute#Name
   */
  readonly name: string;

  /**
   * @schema InventoryItemAttribute#DataType
   */
  readonly dataType: string;

}

/**
 * @schema MaintenanceWindowRunCommandParameters
 */
export interface MaintenanceWindowRunCommandParameters {
  /**
   * @schema MaintenanceWindowRunCommandParameters#Comment
   */
  readonly comment?: string;

  /**
   * @schema MaintenanceWindowRunCommandParameters#CloudWatchOutputConfig
   */
  readonly cloudWatchOutputConfig?: CloudWatchOutputConfig;

  /**
   * @schema MaintenanceWindowRunCommandParameters#DocumentHash
   */
  readonly documentHash?: string;

  /**
   * @schema MaintenanceWindowRunCommandParameters#DocumentHashType
   */
  readonly documentHashType?: string;

  /**
   * @schema MaintenanceWindowRunCommandParameters#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema MaintenanceWindowRunCommandParameters#NotificationConfig
   */
  readonly notificationConfig?: NotificationConfig;

  /**
   * @schema MaintenanceWindowRunCommandParameters#OutputS3BucketName
   */
  readonly outputS3BucketName?: string;

  /**
   * @schema MaintenanceWindowRunCommandParameters#OutputS3KeyPrefix
   */
  readonly outputS3KeyPrefix?: string;

  /**
   * @schema MaintenanceWindowRunCommandParameters#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

  /**
   * @schema MaintenanceWindowRunCommandParameters#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema MaintenanceWindowRunCommandParameters#TimeoutSeconds
   */
  readonly timeoutSeconds?: number;

}

/**
 * @schema MaintenanceWindowAutomationParameters
 */
export interface MaintenanceWindowAutomationParameters {
  /**
   * @schema MaintenanceWindowAutomationParameters#DocumentVersion
   */
  readonly documentVersion?: string;

  /**
   * @schema MaintenanceWindowAutomationParameters#Parameters
   */
  readonly parameters?: { [key: string]: string[] };

}

/**
 * @schema MaintenanceWindowStepFunctionsParameters
 */
export interface MaintenanceWindowStepFunctionsParameters {
  /**
   * @schema MaintenanceWindowStepFunctionsParameters#Input
   */
  readonly input?: string;

  /**
   * @schema MaintenanceWindowStepFunctionsParameters#Name
   */
  readonly name?: string;

}

/**
 * @schema MaintenanceWindowLambdaParameters
 */
export interface MaintenanceWindowLambdaParameters {
  /**
   * @schema MaintenanceWindowLambdaParameters#ClientContext
   */
  readonly clientContext?: string;

  /**
   * @schema MaintenanceWindowLambdaParameters#Qualifier
   */
  readonly qualifier?: string;

  /**
   * @schema MaintenanceWindowLambdaParameters#Payload
   */
  readonly payload?: any;

}

/**
 * @schema OpsEntityItem
 */
export interface OpsEntityItem {
  /**
   * @schema OpsEntityItem#CaptureTime
   */
  readonly captureTime?: string;

  /**
   * @schema OpsEntityItem#Content
   */
  readonly content?: { [key: string]: string }[];

}

/**
 * @schema CommandPlugin
 */
export interface CommandPlugin {
  /**
   * @schema CommandPlugin#Name
   */
  readonly name?: string;

  /**
   * @schema CommandPlugin#Status
   */
  readonly status?: string;

  /**
   * @schema CommandPlugin#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema CommandPlugin#ResponseCode
   */
  readonly responseCode?: number;

  /**
   * @schema CommandPlugin#ResponseStartDateTime
   */
  readonly responseStartDateTime?: string;

  /**
   * @schema CommandPlugin#ResponseFinishDateTime
   */
  readonly responseFinishDateTime?: string;

  /**
   * @schema CommandPlugin#Output
   */
  readonly output?: string;

  /**
   * @schema CommandPlugin#StandardOutputUrl
   */
  readonly standardOutputUrl?: string;

  /**
   * @schema CommandPlugin#StandardErrorUrl
   */
  readonly standardErrorUrl?: string;

  /**
   * @schema CommandPlugin#OutputS3Region
   */
  readonly outputS3Region?: string;

  /**
   * @schema CommandPlugin#OutputS3BucketName
   */
  readonly outputS3BucketName?: string;

  /**
   * @schema CommandPlugin#OutputS3KeyPrefix
   */
  readonly outputS3KeyPrefix?: string;

}

/**
 * @schema CompliantSummary
 */
export interface CompliantSummary {
  /**
   * @schema CompliantSummary#CompliantCount
   */
  readonly compliantCount?: number;

  /**
   * @schema CompliantSummary#SeveritySummary
   */
  readonly severitySummary?: SeveritySummary;

}

/**
 * @schema NonCompliantSummary
 */
export interface NonCompliantSummary {
  /**
   * @schema NonCompliantSummary#NonCompliantCount
   */
  readonly nonCompliantCount?: number;

  /**
   * @schema NonCompliantSummary#SeveritySummary
   */
  readonly severitySummary?: SeveritySummary;

}

/**
 * @schema ResourceDataSyncSourceWithState
 */
export interface ResourceDataSyncSourceWithState {
  /**
   * @schema ResourceDataSyncSourceWithState#SourceType
   */
  readonly sourceType?: string;

  /**
   * @schema ResourceDataSyncSourceWithState#AwsOrganizationsSource
   */
  readonly awsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource;

  /**
   * @schema ResourceDataSyncSourceWithState#SourceRegions
   */
  readonly sourceRegions?: string[];

  /**
   * @schema ResourceDataSyncSourceWithState#IncludeFutureRegions
   */
  readonly includeFutureRegions?: boolean;

  /**
   * @schema ResourceDataSyncSourceWithState#State
   */
  readonly state?: string;

}

/**
 * @schema ResourceDataSyncOrganizationalUnit
 */
export interface ResourceDataSyncOrganizationalUnit {
  /**
   * @schema ResourceDataSyncOrganizationalUnit#OrganizationalUnitId
   */
  readonly organizationalUnitId?: string;

}

/**
 * @schema S3OutputUrl
 */
export interface S3OutputUrl {
  /**
   * @schema S3OutputUrl#OutputUrl
   */
  readonly outputUrl?: string;

}

/**
 * @schema SeveritySummary
 */
export interface SeveritySummary {
  /**
   * @schema SeveritySummary#CriticalCount
   */
  readonly criticalCount?: number;

  /**
   * @schema SeveritySummary#HighCount
   */
  readonly highCount?: number;

  /**
   * @schema SeveritySummary#MediumCount
   */
  readonly mediumCount?: number;

  /**
   * @schema SeveritySummary#LowCount
   */
  readonly lowCount?: number;

  /**
   * @schema SeveritySummary#InformationalCount
   */
  readonly informationalCount?: number;

  /**
   * @schema SeveritySummary#UnspecifiedCount
   */
  readonly unspecifiedCount?: number;

}
