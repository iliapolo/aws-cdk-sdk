import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SsmClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addTagsToResource(input: shapes.SsmAddTagsToResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addTagsToResource',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.AddTagsToResource'),
        parameters: {
          ResourceType: input.resourceType,
          ResourceId: input.resourceId,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddTagsToResource', props);
  }

  public cancelCommand(input: shapes.SsmCancelCommandRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CancelCommand'),
        parameters: {
          CommandId: input.commandId,
          InstanceIds: input.instanceIds,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CancelCommand', props);
  }

  public cancelMaintenanceWindowExecution(input: shapes.SsmCancelMaintenanceWindowExecutionRequest): SSMResponsesCancelMaintenanceWindowExecution {
    return new SSMResponsesCancelMaintenanceWindowExecution(this, this.__resources, input);
  }

  public createActivation(input: shapes.SsmCreateActivationRequest): SSMResponsesCreateActivation {
    return new SSMResponsesCreateActivation(this, this.__resources, input);
  }

  public createAssociation(input: shapes.SsmCreateAssociationRequest): SSMResponsesCreateAssociation {
    return new SSMResponsesCreateAssociation(this, this.__resources, input);
  }

  public createAssociationBatch(input: shapes.SsmCreateAssociationBatchRequest): SSMResponsesCreateAssociationBatch {
    return new SSMResponsesCreateAssociationBatch(this, this.__resources, input);
  }

  public createDocument(input: shapes.SsmCreateDocumentRequest): SSMResponsesCreateDocument {
    return new SSMResponsesCreateDocument(this, this.__resources, input);
  }

  public createMaintenanceWindow(input: shapes.SsmCreateMaintenanceWindowRequest): SSMResponsesCreateMaintenanceWindow {
    return new SSMResponsesCreateMaintenanceWindow(this, this.__resources, input);
  }

  public createOpsItem(input: shapes.SsmCreateOpsItemRequest): SSMResponsesCreateOpsItem {
    return new SSMResponsesCreateOpsItem(this, this.__resources, input);
  }

  public createPatchBaseline(input: shapes.SsmCreatePatchBaselineRequest): SSMResponsesCreatePatchBaseline {
    return new SSMResponsesCreatePatchBaseline(this, this.__resources, input);
  }

  public createResourceDataSync(input: shapes.SsmCreateResourceDataSyncRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createResourceDataSync',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateResourceDataSync'),
        parameters: {
          SyncName: input.syncName,
          S3Destination: {
            BucketName: input.s3Destination?.bucketName,
            Prefix: input.s3Destination?.prefix,
            SyncFormat: input.s3Destination?.syncFormat,
            Region: input.s3Destination?.region,
            AWSKMSKeyARN: input.s3Destination?.awskmsKeyArn,
            DestinationDataSharing: {
              DestinationDataSharingType: input.s3Destination?.destinationDataSharing?.destinationDataSharingType,
            },
          },
          SyncType: input.syncType,
          SyncSource: {
            SourceType: input.syncSource?.sourceType,
            AwsOrganizationsSource: {
              OrganizationSourceType: input.syncSource?.awsOrganizationsSource?.organizationSourceType,
              OrganizationalUnits: input.syncSource?.awsOrganizationsSource?.organizationalUnits,
            },
            SourceRegions: input.syncSource?.sourceRegions,
            IncludeFutureRegions: input.syncSource?.includeFutureRegions,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateResourceDataSync', props);
  }

  public deleteActivation(input: shapes.SsmDeleteActivationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteActivation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DeleteActivation'),
        parameters: {
          ActivationId: input.activationId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteActivation', props);
  }

  public deleteAssociation(input: shapes.SsmDeleteAssociationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DeleteAssociation'),
        parameters: {
          Name: input.name,
          InstanceId: input.instanceId,
          AssociationId: input.associationId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAssociation', props);
  }

  public deleteDocument(input: shapes.SsmDeleteDocumentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DeleteDocument'),
        parameters: {
          Name: input.name,
          DocumentVersion: input.documentVersion,
          VersionName: input.versionName,
          Force: input.force,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDocument', props);
  }

  public deleteInventory(input: shapes.SsmDeleteInventoryRequest): SSMResponsesDeleteInventory {
    return new SSMResponsesDeleteInventory(this, this.__resources, input);
  }

  public deleteMaintenanceWindow(input: shapes.SsmDeleteMaintenanceWindowRequest): SSMResponsesDeleteMaintenanceWindow {
    return new SSMResponsesDeleteMaintenanceWindow(this, this.__resources, input);
  }

  public deleteParameter(input: shapes.SsmDeleteParameterRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteParameter',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DeleteParameter'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteParameter', props);
  }

  public deleteParameters(input: shapes.SsmDeleteParametersRequest): SSMResponsesDeleteParameters {
    return new SSMResponsesDeleteParameters(this, this.__resources, input);
  }

  public deletePatchBaseline(input: shapes.SsmDeletePatchBaselineRequest): SSMResponsesDeletePatchBaseline {
    return new SSMResponsesDeletePatchBaseline(this, this.__resources, input);
  }

  public deleteResourceDataSync(input: shapes.SsmDeleteResourceDataSyncRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteResourceDataSync',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DeleteResourceDataSync'),
        parameters: {
          SyncName: input.syncName,
          SyncType: input.syncType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteResourceDataSync', props);
  }

  public deregisterManagedInstance(input: shapes.SsmDeregisterManagedInstanceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterManagedInstance',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DeregisterManagedInstance'),
        parameters: {
          InstanceId: input.instanceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeregisterManagedInstance', props);
  }

  public deregisterPatchBaselineForPatchGroup(input: shapes.SsmDeregisterPatchBaselineForPatchGroupRequest): SSMResponsesDeregisterPatchBaselineForPatchGroup {
    return new SSMResponsesDeregisterPatchBaselineForPatchGroup(this, this.__resources, input);
  }

  public deregisterTargetFromMaintenanceWindow(input: shapes.SsmDeregisterTargetFromMaintenanceWindowRequest): SSMResponsesDeregisterTargetFromMaintenanceWindow {
    return new SSMResponsesDeregisterTargetFromMaintenanceWindow(this, this.__resources, input);
  }

  public deregisterTaskFromMaintenanceWindow(input: shapes.SsmDeregisterTaskFromMaintenanceWindowRequest): SSMResponsesDeregisterTaskFromMaintenanceWindow {
    return new SSMResponsesDeregisterTaskFromMaintenanceWindow(this, this.__resources, input);
  }

  public describeActivations(input: shapes.SsmDescribeActivationsRequest): SSMResponsesDescribeActivations {
    return new SSMResponsesDescribeActivations(this, this.__resources, input);
  }

  public describeAssociation(input: shapes.SsmDescribeAssociationRequest): SSMResponsesDescribeAssociation {
    return new SSMResponsesDescribeAssociation(this, this.__resources, input);
  }

  public describeAssociationExecutionTargets(input: shapes.SsmDescribeAssociationExecutionTargetsRequest): SSMResponsesDescribeAssociationExecutionTargets {
    return new SSMResponsesDescribeAssociationExecutionTargets(this, this.__resources, input);
  }

  public describeAssociationExecutions(input: shapes.SsmDescribeAssociationExecutionsRequest): SSMResponsesDescribeAssociationExecutions {
    return new SSMResponsesDescribeAssociationExecutions(this, this.__resources, input);
  }

  public describeAutomationExecutions(input: shapes.SsmDescribeAutomationExecutionsRequest): SSMResponsesDescribeAutomationExecutions {
    return new SSMResponsesDescribeAutomationExecutions(this, this.__resources, input);
  }

  public describeAutomationStepExecutions(input: shapes.SsmDescribeAutomationStepExecutionsRequest): SSMResponsesDescribeAutomationStepExecutions {
    return new SSMResponsesDescribeAutomationStepExecutions(this, this.__resources, input);
  }

  public describeAvailablePatches(input: shapes.SsmDescribeAvailablePatchesRequest): SSMResponsesDescribeAvailablePatches {
    return new SSMResponsesDescribeAvailablePatches(this, this.__resources, input);
  }

  public describeDocument(input: shapes.SsmDescribeDocumentRequest): SSMResponsesDescribeDocument {
    return new SSMResponsesDescribeDocument(this, this.__resources, input);
  }

  public describeDocumentPermission(input: shapes.SsmDescribeDocumentPermissionRequest): SSMResponsesDescribeDocumentPermission {
    return new SSMResponsesDescribeDocumentPermission(this, this.__resources, input);
  }

  public describeEffectiveInstanceAssociations(input: shapes.SsmDescribeEffectiveInstanceAssociationsRequest): SSMResponsesDescribeEffectiveInstanceAssociations {
    return new SSMResponsesDescribeEffectiveInstanceAssociations(this, this.__resources, input);
  }

  public describeEffectivePatchesForPatchBaseline(input: shapes.SsmDescribeEffectivePatchesForPatchBaselineRequest): SSMResponsesDescribeEffectivePatchesForPatchBaseline {
    return new SSMResponsesDescribeEffectivePatchesForPatchBaseline(this, this.__resources, input);
  }

  public describeInstanceAssociationsStatus(input: shapes.SsmDescribeInstanceAssociationsStatusRequest): SSMResponsesDescribeInstanceAssociationsStatus {
    return new SSMResponsesDescribeInstanceAssociationsStatus(this, this.__resources, input);
  }

  public describeInstanceInformation(input: shapes.SsmDescribeInstanceInformationRequest): SSMResponsesDescribeInstanceInformation {
    return new SSMResponsesDescribeInstanceInformation(this, this.__resources, input);
  }

  public describeInstancePatchStates(input: shapes.SsmDescribeInstancePatchStatesRequest): SSMResponsesDescribeInstancePatchStates {
    return new SSMResponsesDescribeInstancePatchStates(this, this.__resources, input);
  }

  public describeInstancePatchStatesForPatchGroup(input: shapes.SsmDescribeInstancePatchStatesForPatchGroupRequest): SSMResponsesDescribeInstancePatchStatesForPatchGroup {
    return new SSMResponsesDescribeInstancePatchStatesForPatchGroup(this, this.__resources, input);
  }

  public describeInstancePatches(input: shapes.SsmDescribeInstancePatchesRequest): SSMResponsesDescribeInstancePatches {
    return new SSMResponsesDescribeInstancePatches(this, this.__resources, input);
  }

  public describeInventoryDeletions(input: shapes.SsmDescribeInventoryDeletionsRequest): SSMResponsesDescribeInventoryDeletions {
    return new SSMResponsesDescribeInventoryDeletions(this, this.__resources, input);
  }

  public describeMaintenanceWindowExecutionTaskInvocations(input: shapes.SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest): SSMResponsesDescribeMaintenanceWindowExecutionTaskInvocations {
    return new SSMResponsesDescribeMaintenanceWindowExecutionTaskInvocations(this, this.__resources, input);
  }

  public describeMaintenanceWindowExecutionTasks(input: shapes.SsmDescribeMaintenanceWindowExecutionTasksRequest): SSMResponsesDescribeMaintenanceWindowExecutionTasks {
    return new SSMResponsesDescribeMaintenanceWindowExecutionTasks(this, this.__resources, input);
  }

  public describeMaintenanceWindowExecutions(input: shapes.SsmDescribeMaintenanceWindowExecutionsRequest): SSMResponsesDescribeMaintenanceWindowExecutions {
    return new SSMResponsesDescribeMaintenanceWindowExecutions(this, this.__resources, input);
  }

  public describeMaintenanceWindowSchedule(input: shapes.SsmDescribeMaintenanceWindowScheduleRequest): SSMResponsesDescribeMaintenanceWindowSchedule {
    return new SSMResponsesDescribeMaintenanceWindowSchedule(this, this.__resources, input);
  }

  public describeMaintenanceWindowTargets(input: shapes.SsmDescribeMaintenanceWindowTargetsRequest): SSMResponsesDescribeMaintenanceWindowTargets {
    return new SSMResponsesDescribeMaintenanceWindowTargets(this, this.__resources, input);
  }

  public describeMaintenanceWindowTasks(input: shapes.SsmDescribeMaintenanceWindowTasksRequest): SSMResponsesDescribeMaintenanceWindowTasks {
    return new SSMResponsesDescribeMaintenanceWindowTasks(this, this.__resources, input);
  }

  public describeMaintenanceWindows(input: shapes.SsmDescribeMaintenanceWindowsRequest): SSMResponsesDescribeMaintenanceWindows {
    return new SSMResponsesDescribeMaintenanceWindows(this, this.__resources, input);
  }

  public describeMaintenanceWindowsForTarget(input: shapes.SsmDescribeMaintenanceWindowsForTargetRequest): SSMResponsesDescribeMaintenanceWindowsForTarget {
    return new SSMResponsesDescribeMaintenanceWindowsForTarget(this, this.__resources, input);
  }

  public describeOpsItems(input: shapes.SsmDescribeOpsItemsRequest): SSMResponsesDescribeOpsItems {
    return new SSMResponsesDescribeOpsItems(this, this.__resources, input);
  }

  public describeParameters(input: shapes.SsmDescribeParametersRequest): SSMResponsesDescribeParameters {
    return new SSMResponsesDescribeParameters(this, this.__resources, input);
  }

  public describePatchBaselines(input: shapes.SsmDescribePatchBaselinesRequest): SSMResponsesDescribePatchBaselines {
    return new SSMResponsesDescribePatchBaselines(this, this.__resources, input);
  }

  public describePatchGroupState(input: shapes.SsmDescribePatchGroupStateRequest): SSMResponsesDescribePatchGroupState {
    return new SSMResponsesDescribePatchGroupState(this, this.__resources, input);
  }

  public describePatchGroups(input: shapes.SsmDescribePatchGroupsRequest): SSMResponsesDescribePatchGroups {
    return new SSMResponsesDescribePatchGroups(this, this.__resources, input);
  }

  public describePatchProperties(input: shapes.SsmDescribePatchPropertiesRequest): SSMResponsesDescribePatchProperties {
    return new SSMResponsesDescribePatchProperties(this, this.__resources, input);
  }

  public describeSessions(input: shapes.SsmDescribeSessionsRequest): SSMResponsesDescribeSessions {
    return new SSMResponsesDescribeSessions(this, this.__resources, input);
  }

  public fetchAutomationExecution(input: shapes.SsmGetAutomationExecutionRequest): SSMResponsesFetchAutomationExecution {
    return new SSMResponsesFetchAutomationExecution(this, this.__resources, input);
  }

  public fetchCalendarState(input: shapes.SsmGetCalendarStateRequest): SSMResponsesFetchCalendarState {
    return new SSMResponsesFetchCalendarState(this, this.__resources, input);
  }

  public fetchCommandInvocation(input: shapes.SsmGetCommandInvocationRequest): SSMResponsesFetchCommandInvocation {
    return new SSMResponsesFetchCommandInvocation(this, this.__resources, input);
  }

  public fetchConnectionStatus(input: shapes.SsmGetConnectionStatusRequest): SSMResponsesFetchConnectionStatus {
    return new SSMResponsesFetchConnectionStatus(this, this.__resources, input);
  }

  public fetchDefaultPatchBaseline(input: shapes.SsmGetDefaultPatchBaselineRequest): SSMResponsesFetchDefaultPatchBaseline {
    return new SSMResponsesFetchDefaultPatchBaseline(this, this.__resources, input);
  }

  public fetchDeployablePatchSnapshotForInstance(input: shapes.SsmGetDeployablePatchSnapshotForInstanceRequest): SSMResponsesFetchDeployablePatchSnapshotForInstance {
    return new SSMResponsesFetchDeployablePatchSnapshotForInstance(this, this.__resources, input);
  }

  public fetchDocument(input: shapes.SsmGetDocumentRequest): SSMResponsesFetchDocument {
    return new SSMResponsesFetchDocument(this, this.__resources, input);
  }

  public fetchInventory(input: shapes.SsmGetInventoryRequest): SSMResponsesFetchInventory {
    return new SSMResponsesFetchInventory(this, this.__resources, input);
  }

  public fetchInventorySchema(input: shapes.SsmGetInventorySchemaRequest): SSMResponsesFetchInventorySchema {
    return new SSMResponsesFetchInventorySchema(this, this.__resources, input);
  }

  public fetchMaintenanceWindow(input: shapes.SsmGetMaintenanceWindowRequest): SSMResponsesFetchMaintenanceWindow {
    return new SSMResponsesFetchMaintenanceWindow(this, this.__resources, input);
  }

  public fetchMaintenanceWindowExecution(input: shapes.SsmGetMaintenanceWindowExecutionRequest): SSMResponsesFetchMaintenanceWindowExecution {
    return new SSMResponsesFetchMaintenanceWindowExecution(this, this.__resources, input);
  }

  public fetchMaintenanceWindowExecutionTask(input: shapes.SsmGetMaintenanceWindowExecutionTaskRequest): SSMResponsesFetchMaintenanceWindowExecutionTask {
    return new SSMResponsesFetchMaintenanceWindowExecutionTask(this, this.__resources, input);
  }

  public fetchMaintenanceWindowExecutionTaskInvocation(input: shapes.SsmGetMaintenanceWindowExecutionTaskInvocationRequest): SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation {
    return new SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation(this, this.__resources, input);
  }

  public fetchMaintenanceWindowTask(input: shapes.SsmGetMaintenanceWindowTaskRequest): SSMResponsesFetchMaintenanceWindowTask {
    return new SSMResponsesFetchMaintenanceWindowTask(this, this.__resources, input);
  }

  public fetchOpsItem(input: shapes.SsmGetOpsItemRequest): SSMResponsesFetchOpsItem {
    return new SSMResponsesFetchOpsItem(this, this.__resources, input);
  }

  public fetchOpsSummary(input: shapes.SsmGetOpsSummaryRequest): SSMResponsesFetchOpsSummary {
    return new SSMResponsesFetchOpsSummary(this, this.__resources, input);
  }

  public fetchParameter(input: shapes.SsmGetParameterRequest): SSMResponsesFetchParameter {
    return new SSMResponsesFetchParameter(this, this.__resources, input);
  }

  public fetchParameterHistory(input: shapes.SsmGetParameterHistoryRequest): SSMResponsesFetchParameterHistory {
    return new SSMResponsesFetchParameterHistory(this, this.__resources, input);
  }

  public fetchParameters(input: shapes.SsmGetParametersRequest): SSMResponsesFetchParameters {
    return new SSMResponsesFetchParameters(this, this.__resources, input);
  }

  public fetchParametersByPath(input: shapes.SsmGetParametersByPathRequest): SSMResponsesFetchParametersByPath {
    return new SSMResponsesFetchParametersByPath(this, this.__resources, input);
  }

  public fetchPatchBaseline(input: shapes.SsmGetPatchBaselineRequest): SSMResponsesFetchPatchBaseline {
    return new SSMResponsesFetchPatchBaseline(this, this.__resources, input);
  }

  public fetchPatchBaselineForPatchGroup(input: shapes.SsmGetPatchBaselineForPatchGroupRequest): SSMResponsesFetchPatchBaselineForPatchGroup {
    return new SSMResponsesFetchPatchBaselineForPatchGroup(this, this.__resources, input);
  }

  public fetchServiceSetting(input: shapes.SsmGetServiceSettingRequest): SSMResponsesFetchServiceSetting {
    return new SSMResponsesFetchServiceSetting(this, this.__resources, input);
  }

  public labelParameterVersion(input: shapes.SsmLabelParameterVersionRequest): SSMResponsesLabelParameterVersion {
    return new SSMResponsesLabelParameterVersion(this, this.__resources, input);
  }

  public listAssociationVersions(input: shapes.SsmListAssociationVersionsRequest): SSMResponsesListAssociationVersions {
    return new SSMResponsesListAssociationVersions(this, this.__resources, input);
  }

  public listAssociations(input: shapes.SsmListAssociationsRequest): SSMResponsesListAssociations {
    return new SSMResponsesListAssociations(this, this.__resources, input);
  }

  public listCommandInvocations(input: shapes.SsmListCommandInvocationsRequest): SSMResponsesListCommandInvocations {
    return new SSMResponsesListCommandInvocations(this, this.__resources, input);
  }

  public listCommands(input: shapes.SsmListCommandsRequest): SSMResponsesListCommands {
    return new SSMResponsesListCommands(this, this.__resources, input);
  }

  public listComplianceItems(input: shapes.SsmListComplianceItemsRequest): SSMResponsesListComplianceItems {
    return new SSMResponsesListComplianceItems(this, this.__resources, input);
  }

  public listComplianceSummaries(input: shapes.SsmListComplianceSummariesRequest): SSMResponsesListComplianceSummaries {
    return new SSMResponsesListComplianceSummaries(this, this.__resources, input);
  }

  public listDocumentVersions(input: shapes.SsmListDocumentVersionsRequest): SSMResponsesListDocumentVersions {
    return new SSMResponsesListDocumentVersions(this, this.__resources, input);
  }

  public listDocuments(input: shapes.SsmListDocumentsRequest): SSMResponsesListDocuments {
    return new SSMResponsesListDocuments(this, this.__resources, input);
  }

  public listInventoryEntries(input: shapes.SsmListInventoryEntriesRequest): SSMResponsesListInventoryEntries {
    return new SSMResponsesListInventoryEntries(this, this.__resources, input);
  }

  public listResourceComplianceSummaries(input: shapes.SsmListResourceComplianceSummariesRequest): SSMResponsesListResourceComplianceSummaries {
    return new SSMResponsesListResourceComplianceSummaries(this, this.__resources, input);
  }

  public listResourceDataSync(input: shapes.SsmListResourceDataSyncRequest): SSMResponsesListResourceDataSync {
    return new SSMResponsesListResourceDataSync(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.SsmListTagsForResourceRequest): SSMResponsesListTagsForResource {
    return new SSMResponsesListTagsForResource(this, this.__resources, input);
  }

  public modifyDocumentPermission(input: shapes.SsmModifyDocumentPermissionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDocumentPermission',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ModifyDocumentPermission'),
        parameters: {
          Name: input.name,
          PermissionType: input.permissionType,
          AccountIdsToAdd: input.accountIdsToAdd,
          AccountIdsToRemove: input.accountIdsToRemove,
          SharedDocumentVersion: input.sharedDocumentVersion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ModifyDocumentPermission', props);
  }

  public putComplianceItems(input: shapes.SsmPutComplianceItemsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putComplianceItems',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.PutComplianceItems'),
        parameters: {
          ResourceId: input.resourceId,
          ResourceType: input.resourceType,
          ComplianceType: input.complianceType,
          ExecutionSummary: {
            ExecutionTime: input.executionSummary.executionTime,
            ExecutionId: input.executionSummary.executionId,
            ExecutionType: input.executionSummary.executionType,
          },
          Items: input.items,
          ItemContentHash: input.itemContentHash,
          UploadType: input.uploadType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutComplianceItems', props);
  }

  public putInventory(input: shapes.SsmPutInventoryRequest): SSMResponsesPutInventory {
    return new SSMResponsesPutInventory(this, this.__resources, input);
  }

  public putParameter(input: shapes.SsmPutParameterRequest): SSMResponsesPutParameter {
    return new SSMResponsesPutParameter(this, this.__resources, input);
  }

  public registerDefaultPatchBaseline(input: shapes.SsmRegisterDefaultPatchBaselineRequest): SSMResponsesRegisterDefaultPatchBaseline {
    return new SSMResponsesRegisterDefaultPatchBaseline(this, this.__resources, input);
  }

  public registerPatchBaselineForPatchGroup(input: shapes.SsmRegisterPatchBaselineForPatchGroupRequest): SSMResponsesRegisterPatchBaselineForPatchGroup {
    return new SSMResponsesRegisterPatchBaselineForPatchGroup(this, this.__resources, input);
  }

  public registerTargetWithMaintenanceWindow(input: shapes.SsmRegisterTargetWithMaintenanceWindowRequest): SSMResponsesRegisterTargetWithMaintenanceWindow {
    return new SSMResponsesRegisterTargetWithMaintenanceWindow(this, this.__resources, input);
  }

  public registerTaskWithMaintenanceWindow(input: shapes.SsmRegisterTaskWithMaintenanceWindowRequest): SSMResponsesRegisterTaskWithMaintenanceWindow {
    return new SSMResponsesRegisterTaskWithMaintenanceWindow(this, this.__resources, input);
  }

  public removeTagsFromResource(input: shapes.SsmRemoveTagsFromResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeTagsFromResource',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.RemoveTagsFromResource'),
        parameters: {
          ResourceType: input.resourceType,
          ResourceId: input.resourceId,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemoveTagsFromResource', props);
  }

  public resetServiceSetting(input: shapes.SsmResetServiceSettingRequest): SSMResponsesResetServiceSetting {
    return new SSMResponsesResetServiceSetting(this, this.__resources, input);
  }

  public resumeSession(input: shapes.SsmResumeSessionRequest): SSMResponsesResumeSession {
    return new SSMResponsesResumeSession(this, this.__resources, input);
  }

  public sendAutomationSignal(input: shapes.SsmSendAutomationSignalRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendAutomationSignal',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendAutomationSignal'),
        parameters: {
          AutomationExecutionId: input.automationExecutionId,
          SignalType: input.signalType,
          Payload: input.payload,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SendAutomationSignal', props);
  }

  public sendCommand(input: shapes.SsmSendCommandRequest): SSMResponsesSendCommand {
    return new SSMResponsesSendCommand(this, this.__resources, input);
  }

  public startAssociationsOnce(input: shapes.SsmStartAssociationsOnceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startAssociationsOnce',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.StartAssociationsOnce'),
        parameters: {
          AssociationIds: input.associationIds,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartAssociationsOnce', props);
  }

  public startAutomationExecution(input: shapes.SsmStartAutomationExecutionRequest): SSMResponsesStartAutomationExecution {
    return new SSMResponsesStartAutomationExecution(this, this.__resources, input);
  }

  public startSession(input: shapes.SsmStartSessionRequest): SSMResponsesStartSession {
    return new SSMResponsesStartSession(this, this.__resources, input);
  }

  public stopAutomationExecution(input: shapes.SsmStopAutomationExecutionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.StopAutomationExecution'),
        parameters: {
          AutomationExecutionId: input.automationExecutionId,
          Type: input.type,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopAutomationExecution', props);
  }

  public terminateSession(input: shapes.SsmTerminateSessionRequest): SSMResponsesTerminateSession {
    return new SSMResponsesTerminateSession(this, this.__resources, input);
  }

  public updateAssociation(input: shapes.SsmUpdateAssociationRequest): SSMResponsesUpdateAssociation {
    return new SSMResponsesUpdateAssociation(this, this.__resources, input);
  }

  public updateAssociationStatus(input: shapes.SsmUpdateAssociationStatusRequest): SSMResponsesUpdateAssociationStatus {
    return new SSMResponsesUpdateAssociationStatus(this, this.__resources, input);
  }

  public updateDocument(input: shapes.SsmUpdateDocumentRequest): SSMResponsesUpdateDocument {
    return new SSMResponsesUpdateDocument(this, this.__resources, input);
  }

  public updateDocumentDefaultVersion(input: shapes.SsmUpdateDocumentDefaultVersionRequest): SSMResponsesUpdateDocumentDefaultVersion {
    return new SSMResponsesUpdateDocumentDefaultVersion(this, this.__resources, input);
  }

  public updateMaintenanceWindow(input: shapes.SsmUpdateMaintenanceWindowRequest): SSMResponsesUpdateMaintenanceWindow {
    return new SSMResponsesUpdateMaintenanceWindow(this, this.__resources, input);
  }

  public updateMaintenanceWindowTarget(input: shapes.SsmUpdateMaintenanceWindowTargetRequest): SSMResponsesUpdateMaintenanceWindowTarget {
    return new SSMResponsesUpdateMaintenanceWindowTarget(this, this.__resources, input);
  }

  public updateMaintenanceWindowTask(input: shapes.SsmUpdateMaintenanceWindowTaskRequest): SSMResponsesUpdateMaintenanceWindowTask {
    return new SSMResponsesUpdateMaintenanceWindowTask(this, this.__resources, input);
  }

  public updateManagedInstanceRole(input: shapes.SsmUpdateManagedInstanceRoleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateManagedInstanceRole',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateManagedInstanceRole'),
        parameters: {
          InstanceId: input.instanceId,
          IamRole: input.iamRole,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateManagedInstanceRole', props);
  }

  public updateOpsItem(input: shapes.SsmUpdateOpsItemRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateOpsItem',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateOpsItem'),
        parameters: {
          Description: input.description,
          OperationalData: input.operationalData,
          OperationalDataToDelete: input.operationalDataToDelete,
          Notifications: input.notifications,
          Priority: input.priority,
          RelatedOpsItems: input.relatedOpsItems,
          Status: input.status,
          OpsItemId: input.opsItemId,
          Title: input.title,
          Category: input.category,
          Severity: input.severity,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateOpsItem', props);
  }

  public updatePatchBaseline(input: shapes.SsmUpdatePatchBaselineRequest): SSMResponsesUpdatePatchBaseline {
    return new SSMResponsesUpdatePatchBaseline(this, this.__resources, input);
  }

  public updateResourceDataSync(input: shapes.SsmUpdateResourceDataSyncRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateResourceDataSync',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateResourceDataSync'),
        parameters: {
          SyncName: input.syncName,
          SyncType: input.syncType,
          SyncSource: {
            SourceType: input.syncSource.sourceType,
            AwsOrganizationsSource: {
              OrganizationSourceType: input.syncSource.awsOrganizationsSource?.organizationSourceType,
              OrganizationalUnits: input.syncSource.awsOrganizationsSource?.organizationalUnits,
            },
            SourceRegions: input.syncSource.sourceRegions,
            IncludeFutureRegions: input.syncSource.includeFutureRegions,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateResourceDataSync', props);
  }

  public updateServiceSetting(input: shapes.SsmUpdateServiceSettingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServiceSetting',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateServiceSetting'),
        parameters: {
          SettingId: input.settingId,
          SettingValue: input.settingValue,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateServiceSetting', props);
  }

}

export class SSMResponsesCancelMaintenanceWindowExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmCancelMaintenanceWindowExecutionRequest) {
  }

  public get windowExecutionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelMaintenanceWindowExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CancelMaintenanceWindowExecution.WindowExecutionId'),
        outputPath: 'WindowExecutionId',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelMaintenanceWindowExecution.WindowExecutionId', props);
    return resource.getResponseField('WindowExecutionId') as unknown as string;
  }

}

export class SSMResponsesCreateActivation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmCreateActivationRequest) {
  }

  public get activationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createActivation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateActivation.ActivationId'),
        outputPath: 'ActivationId',
        parameters: {
          Description: this.__input.description,
          DefaultInstanceName: this.__input.defaultInstanceName,
          IamRole: this.__input.iamRole,
          RegistrationLimit: this.__input.registrationLimit,
          ExpirationDate: this.__input.expirationDate,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateActivation.ActivationId', props);
    return resource.getResponseField('ActivationId') as unknown as string;
  }

  public get activationCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createActivation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateActivation.ActivationCode'),
        outputPath: 'ActivationCode',
        parameters: {
          Description: this.__input.description,
          DefaultInstanceName: this.__input.defaultInstanceName,
          IamRole: this.__input.iamRole,
          RegistrationLimit: this.__input.registrationLimit,
          ExpirationDate: this.__input.expirationDate,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateActivation.ActivationCode', props);
    return resource.getResponseField('ActivationCode') as unknown as string;
  }

}

export class SSMResponsesCreateAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmCreateAssociationRequest) {
  }

  public get associationDescription(): SSMResponsesCreateAssociationAssociationDescription {
    return new SSMResponsesCreateAssociationAssociationDescription(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesCreateAssociationAssociationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmCreateAssociationRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.Name'),
        outputPath: 'AssociationDescription.Name',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.Name', props);
    return resource.getResponseField('AssociationDescription.Name') as unknown as string;
  }

  public get instanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.InstanceId'),
        outputPath: 'AssociationDescription.InstanceId',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.InstanceId', props);
    return resource.getResponseField('AssociationDescription.InstanceId') as unknown as string;
  }

  public get associationVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.AssociationVersion'),
        outputPath: 'AssociationDescription.AssociationVersion',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.AssociationVersion', props);
    return resource.getResponseField('AssociationDescription.AssociationVersion') as unknown as string;
  }

  public get date(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.Date'),
        outputPath: 'AssociationDescription.Date',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.Date', props);
    return resource.getResponseField('AssociationDescription.Date') as unknown as string;
  }

  public get lastUpdateAssociationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.LastUpdateAssociationDate'),
        outputPath: 'AssociationDescription.LastUpdateAssociationDate',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.LastUpdateAssociationDate', props);
    return resource.getResponseField('AssociationDescription.LastUpdateAssociationDate') as unknown as string;
  }

  public get status(): SSMResponsesCreateAssociationAssociationDescriptionStatus {
    return new SSMResponsesCreateAssociationAssociationDescriptionStatus(this.__scope, this.__resources, this.__input);
  }

  public get overview(): SSMResponsesCreateAssociationAssociationDescriptionOverview {
    return new SSMResponsesCreateAssociationAssociationDescriptionOverview(this.__scope, this.__resources, this.__input);
  }

  public get documentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.DocumentVersion'),
        outputPath: 'AssociationDescription.DocumentVersion',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.DocumentVersion', props);
    return resource.getResponseField('AssociationDescription.DocumentVersion') as unknown as string;
  }

  public get automationTargetParameterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.AutomationTargetParameterName'),
        outputPath: 'AssociationDescription.AutomationTargetParameterName',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.AutomationTargetParameterName', props);
    return resource.getResponseField('AssociationDescription.AutomationTargetParameterName') as unknown as string;
  }

  public get parameters(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.Parameters'),
        outputPath: 'AssociationDescription.Parameters',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.Parameters', props);
    return resource.getResponseField('AssociationDescription.Parameters') as unknown as Record<string, string[]>;
  }

  public get associationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.AssociationId'),
        outputPath: 'AssociationDescription.AssociationId',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.AssociationId', props);
    return resource.getResponseField('AssociationDescription.AssociationId') as unknown as string;
  }

  public get targets(): shapes.SsmTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.Targets'),
        outputPath: 'AssociationDescription.Targets',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.Targets', props);
    return resource.getResponseField('AssociationDescription.Targets') as unknown as shapes.SsmTarget[];
  }

  public get scheduleExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.ScheduleExpression'),
        outputPath: 'AssociationDescription.ScheduleExpression',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.ScheduleExpression', props);
    return resource.getResponseField('AssociationDescription.ScheduleExpression') as unknown as string;
  }

  public get outputLocation(): SSMResponsesCreateAssociationAssociationDescriptionOutputLocation {
    return new SSMResponsesCreateAssociationAssociationDescriptionOutputLocation(this.__scope, this.__resources, this.__input);
  }

  public get lastExecutionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.LastExecutionDate'),
        outputPath: 'AssociationDescription.LastExecutionDate',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.LastExecutionDate', props);
    return resource.getResponseField('AssociationDescription.LastExecutionDate') as unknown as string;
  }

  public get lastSuccessfulExecutionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.LastSuccessfulExecutionDate'),
        outputPath: 'AssociationDescription.LastSuccessfulExecutionDate',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.LastSuccessfulExecutionDate', props);
    return resource.getResponseField('AssociationDescription.LastSuccessfulExecutionDate') as unknown as string;
  }

  public get associationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.AssociationName'),
        outputPath: 'AssociationDescription.AssociationName',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.AssociationName', props);
    return resource.getResponseField('AssociationDescription.AssociationName') as unknown as string;
  }

  public get maxErrors(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.MaxErrors'),
        outputPath: 'AssociationDescription.MaxErrors',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.MaxErrors', props);
    return resource.getResponseField('AssociationDescription.MaxErrors') as unknown as string;
  }

  public get maxConcurrency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.MaxConcurrency'),
        outputPath: 'AssociationDescription.MaxConcurrency',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.MaxConcurrency', props);
    return resource.getResponseField('AssociationDescription.MaxConcurrency') as unknown as string;
  }

  public get complianceSeverity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.ComplianceSeverity'),
        outputPath: 'AssociationDescription.ComplianceSeverity',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.ComplianceSeverity', props);
    return resource.getResponseField('AssociationDescription.ComplianceSeverity') as unknown as string;
  }

  public get syncCompliance(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.SyncCompliance'),
        outputPath: 'AssociationDescription.SyncCompliance',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.SyncCompliance', props);
    return resource.getResponseField('AssociationDescription.SyncCompliance') as unknown as string;
  }

  public get applyOnlyAtCronInterval(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.ApplyOnlyAtCronInterval'),
        outputPath: 'AssociationDescription.ApplyOnlyAtCronInterval',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.ApplyOnlyAtCronInterval', props);
    return resource.getResponseField('AssociationDescription.ApplyOnlyAtCronInterval') as unknown as boolean;
  }

}

export class SSMResponsesCreateAssociationAssociationDescriptionStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmCreateAssociationRequest) {
  }

  public get date(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.Status.Date'),
        outputPath: 'AssociationDescription.Status.Date',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.Status.Date', props);
    return resource.getResponseField('AssociationDescription.Status.Date') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.Status.Name'),
        outputPath: 'AssociationDescription.Status.Name',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.Status.Name', props);
    return resource.getResponseField('AssociationDescription.Status.Name') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.Status.Message'),
        outputPath: 'AssociationDescription.Status.Message',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.Status.Message', props);
    return resource.getResponseField('AssociationDescription.Status.Message') as unknown as string;
  }

  public get additionalInfo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.Status.AdditionalInfo'),
        outputPath: 'AssociationDescription.Status.AdditionalInfo',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.Status.AdditionalInfo', props);
    return resource.getResponseField('AssociationDescription.Status.AdditionalInfo') as unknown as string;
  }

}

export class SSMResponsesCreateAssociationAssociationDescriptionOverview {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmCreateAssociationRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.Overview.Status'),
        outputPath: 'AssociationDescription.Overview.Status',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.Overview.Status', props);
    return resource.getResponseField('AssociationDescription.Overview.Status') as unknown as string;
  }

  public get detailedStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.Overview.DetailedStatus'),
        outputPath: 'AssociationDescription.Overview.DetailedStatus',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.Overview.DetailedStatus', props);
    return resource.getResponseField('AssociationDescription.Overview.DetailedStatus') as unknown as string;
  }

  public get associationStatusAggregatedCount(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.Overview.AssociationStatusAggregatedCount'),
        outputPath: 'AssociationDescription.Overview.AssociationStatusAggregatedCount',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.Overview.AssociationStatusAggregatedCount', props);
    return resource.getResponseField('AssociationDescription.Overview.AssociationStatusAggregatedCount') as unknown as Record<string, number>;
  }

}

export class SSMResponsesCreateAssociationAssociationDescriptionOutputLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmCreateAssociationRequest) {
  }

  public get s3Location(): SSMResponsesCreateAssociationAssociationDescriptionOutputLocationS3Location {
    return new SSMResponsesCreateAssociationAssociationDescriptionOutputLocationS3Location(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesCreateAssociationAssociationDescriptionOutputLocationS3Location {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmCreateAssociationRequest) {
  }

  public get outputS3Region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3Region'),
        outputPath: 'AssociationDescription.OutputLocation.S3Location.OutputS3Region',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3Region', props);
    return resource.getResponseField('AssociationDescription.OutputLocation.S3Location.OutputS3Region') as unknown as string;
  }

  public get outputS3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3BucketName'),
        outputPath: 'AssociationDescription.OutputLocation.S3Location.OutputS3BucketName',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3BucketName', props);
    return resource.getResponseField('AssociationDescription.OutputLocation.S3Location.OutputS3BucketName') as unknown as string;
  }

  public get outputS3KeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix'),
        outputPath: 'AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          InstanceId: this.__input.instanceId,
          Parameters: this.__input.parameters,
          Targets: this.__input.targets,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.__input.associationName,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix', props);
    return resource.getResponseField('AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix') as unknown as string;
  }

}

export class SSMResponsesCreateAssociationBatch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmCreateAssociationBatchRequest) {
  }

  public get successful(): shapes.SsmAssociationDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociationBatch',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociationBatch.Successful'),
        outputPath: 'Successful',
        parameters: {
          Entries: this.__input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociationBatch.Successful', props);
    return resource.getResponseField('Successful') as unknown as shapes.SsmAssociationDescription[];
  }

  public get failed(): shapes.SsmFailedCreateAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAssociationBatch',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateAssociationBatch.Failed'),
        outputPath: 'Failed',
        parameters: {
          Entries: this.__input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAssociationBatch.Failed', props);
    return resource.getResponseField('Failed') as unknown as shapes.SsmFailedCreateAssociation[];
  }

}

export class SSMResponsesCreateDocument {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmCreateDocumentRequest) {
  }

  public get documentDescription(): SSMResponsesCreateDocumentDocumentDescription {
    return new SSMResponsesCreateDocumentDocumentDescription(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesCreateDocumentDocumentDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmCreateDocumentRequest) {
  }

  public get sha1(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.Sha1'),
        outputPath: 'DocumentDescription.Sha1',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.Sha1', props);
    return resource.getResponseField('DocumentDescription.Sha1') as unknown as string;
  }

  public get hash(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.Hash'),
        outputPath: 'DocumentDescription.Hash',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.Hash', props);
    return resource.getResponseField('DocumentDescription.Hash') as unknown as string;
  }

  public get hashType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.HashType'),
        outputPath: 'DocumentDescription.HashType',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.HashType', props);
    return resource.getResponseField('DocumentDescription.HashType') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.Name'),
        outputPath: 'DocumentDescription.Name',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.Name', props);
    return resource.getResponseField('DocumentDescription.Name') as unknown as string;
  }

  public get versionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.VersionName'),
        outputPath: 'DocumentDescription.VersionName',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.VersionName', props);
    return resource.getResponseField('DocumentDescription.VersionName') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.Owner'),
        outputPath: 'DocumentDescription.Owner',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.Owner', props);
    return resource.getResponseField('DocumentDescription.Owner') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.CreatedDate'),
        outputPath: 'DocumentDescription.CreatedDate',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.CreatedDate', props);
    return resource.getResponseField('DocumentDescription.CreatedDate') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.Status'),
        outputPath: 'DocumentDescription.Status',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.Status', props);
    return resource.getResponseField('DocumentDescription.Status') as unknown as string;
  }

  public get statusInformation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.StatusInformation'),
        outputPath: 'DocumentDescription.StatusInformation',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.StatusInformation', props);
    return resource.getResponseField('DocumentDescription.StatusInformation') as unknown as string;
  }

  public get documentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.DocumentVersion'),
        outputPath: 'DocumentDescription.DocumentVersion',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.DocumentVersion', props);
    return resource.getResponseField('DocumentDescription.DocumentVersion') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.Description'),
        outputPath: 'DocumentDescription.Description',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.Description', props);
    return resource.getResponseField('DocumentDescription.Description') as unknown as string;
  }

  public get parameters(): shapes.SsmDocumentParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.Parameters'),
        outputPath: 'DocumentDescription.Parameters',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.Parameters', props);
    return resource.getResponseField('DocumentDescription.Parameters') as unknown as shapes.SsmDocumentParameter[];
  }

  public get platformTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.PlatformTypes'),
        outputPath: 'DocumentDescription.PlatformTypes',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.PlatformTypes', props);
    return resource.getResponseField('DocumentDescription.PlatformTypes') as unknown as string[];
  }

  public get documentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.DocumentType'),
        outputPath: 'DocumentDescription.DocumentType',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.DocumentType', props);
    return resource.getResponseField('DocumentDescription.DocumentType') as unknown as string;
  }

  public get schemaVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.SchemaVersion'),
        outputPath: 'DocumentDescription.SchemaVersion',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.SchemaVersion', props);
    return resource.getResponseField('DocumentDescription.SchemaVersion') as unknown as string;
  }

  public get latestVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.LatestVersion'),
        outputPath: 'DocumentDescription.LatestVersion',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.LatestVersion', props);
    return resource.getResponseField('DocumentDescription.LatestVersion') as unknown as string;
  }

  public get defaultVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.DefaultVersion'),
        outputPath: 'DocumentDescription.DefaultVersion',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.DefaultVersion', props);
    return resource.getResponseField('DocumentDescription.DefaultVersion') as unknown as string;
  }

  public get documentFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.DocumentFormat'),
        outputPath: 'DocumentDescription.DocumentFormat',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.DocumentFormat', props);
    return resource.getResponseField('DocumentDescription.DocumentFormat') as unknown as string;
  }

  public get targetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.TargetType'),
        outputPath: 'DocumentDescription.TargetType',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.TargetType', props);
    return resource.getResponseField('DocumentDescription.TargetType') as unknown as string;
  }

  public get tags(): shapes.SsmTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.Tags'),
        outputPath: 'DocumentDescription.Tags',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.Tags', props);
    return resource.getResponseField('DocumentDescription.Tags') as unknown as shapes.SsmTag[];
  }

  public get attachmentsInformation(): shapes.SsmAttachmentInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.AttachmentsInformation'),
        outputPath: 'DocumentDescription.AttachmentsInformation',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.AttachmentsInformation', props);
    return resource.getResponseField('DocumentDescription.AttachmentsInformation') as unknown as shapes.SsmAttachmentInformation[];
  }

  public get requires(): shapes.SsmDocumentRequires[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateDocument.DocumentDescription.Requires'),
        outputPath: 'DocumentDescription.Requires',
        parameters: {
          Content: this.__input.content,
          Requires: this.__input.requires,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentType: this.__input.documentType,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDocument.DocumentDescription.Requires', props);
    return resource.getResponseField('DocumentDescription.Requires') as unknown as shapes.SsmDocumentRequires[];
  }

}

export class SSMResponsesCreateMaintenanceWindow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmCreateMaintenanceWindowRequest) {
  }

  public get windowId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateMaintenanceWindow.WindowId'),
        outputPath: 'WindowId',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
          Schedule: this.__input.schedule,
          ScheduleTimezone: this.__input.scheduleTimezone,
          ScheduleOffset: this.__input.scheduleOffset,
          Duration: this.__input.duration,
          Cutoff: this.__input.cutoff,
          AllowUnassociatedTargets: this.__input.allowUnassociatedTargets,
          ClientToken: this.__input.clientToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMaintenanceWindow.WindowId', props);
    return resource.getResponseField('WindowId') as unknown as string;
  }

}

export class SSMResponsesCreateOpsItem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmCreateOpsItemRequest) {
  }

  public get opsItemId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createOpsItem',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreateOpsItem.OpsItemId'),
        outputPath: 'OpsItemId',
        parameters: {
          Description: this.__input.description,
          OperationalData: this.__input.operationalData,
          Notifications: this.__input.notifications,
          Priority: this.__input.priority,
          RelatedOpsItems: this.__input.relatedOpsItems,
          Source: this.__input.source,
          Title: this.__input.title,
          Tags: this.__input.tags,
          Category: this.__input.category,
          Severity: this.__input.severity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateOpsItem.OpsItemId', props);
    return resource.getResponseField('OpsItemId') as unknown as string;
  }

}

export class SSMResponsesCreatePatchBaseline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmCreatePatchBaselineRequest) {
  }

  public get baselineId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.CreatePatchBaseline.BaselineId'),
        outputPath: 'BaselineId',
        parameters: {
          OperatingSystem: this.__input.operatingSystem,
          Name: this.__input.name,
          GlobalFilters: {
            PatchFilters: this.__input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.__input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.__input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.__input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.__input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.__input.rejectedPatches,
          RejectedPatchesAction: this.__input.rejectedPatchesAction,
          Description: this.__input.description,
          Sources: this.__input.sources,
          ClientToken: this.__input.clientToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePatchBaseline.BaselineId', props);
    return resource.getResponseField('BaselineId') as unknown as string;
  }

}

export class SSMResponsesDeleteInventory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDeleteInventoryRequest) {
  }

  public get deletionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInventory',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DeleteInventory.DeletionId'),
        outputPath: 'DeletionId',
        parameters: {
          TypeName: this.__input.typeName,
          SchemaDeleteOption: this.__input.schemaDeleteOption,
          DryRun: this.__input.dryRun,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteInventory.DeletionId', props);
    return resource.getResponseField('DeletionId') as unknown as string;
  }

  public get typeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInventory',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DeleteInventory.TypeName'),
        outputPath: 'TypeName',
        parameters: {
          TypeName: this.__input.typeName,
          SchemaDeleteOption: this.__input.schemaDeleteOption,
          DryRun: this.__input.dryRun,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteInventory.TypeName', props);
    return resource.getResponseField('TypeName') as unknown as string;
  }

  public get deletionSummary(): SSMResponsesDeleteInventoryDeletionSummary {
    return new SSMResponsesDeleteInventoryDeletionSummary(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesDeleteInventoryDeletionSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDeleteInventoryRequest) {
  }

  public get totalCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInventory',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DeleteInventory.DeletionSummary.TotalCount'),
        outputPath: 'DeletionSummary.TotalCount',
        parameters: {
          TypeName: this.__input.typeName,
          SchemaDeleteOption: this.__input.schemaDeleteOption,
          DryRun: this.__input.dryRun,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteInventory.DeletionSummary.TotalCount', props);
    return resource.getResponseField('DeletionSummary.TotalCount') as unknown as number;
  }

  public get remainingCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInventory',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DeleteInventory.DeletionSummary.RemainingCount'),
        outputPath: 'DeletionSummary.RemainingCount',
        parameters: {
          TypeName: this.__input.typeName,
          SchemaDeleteOption: this.__input.schemaDeleteOption,
          DryRun: this.__input.dryRun,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteInventory.DeletionSummary.RemainingCount', props);
    return resource.getResponseField('DeletionSummary.RemainingCount') as unknown as number;
  }

  public get summaryItems(): shapes.SsmInventoryDeletionSummaryItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInventory',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DeleteInventory.DeletionSummary.SummaryItems'),
        outputPath: 'DeletionSummary.SummaryItems',
        parameters: {
          TypeName: this.__input.typeName,
          SchemaDeleteOption: this.__input.schemaDeleteOption,
          DryRun: this.__input.dryRun,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteInventory.DeletionSummary.SummaryItems', props);
    return resource.getResponseField('DeletionSummary.SummaryItems') as unknown as shapes.SsmInventoryDeletionSummaryItem[];
  }

}

export class SSMResponsesDeleteMaintenanceWindow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDeleteMaintenanceWindowRequest) {
  }

  public get windowId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DeleteMaintenanceWindow.WindowId'),
        outputPath: 'WindowId',
        parameters: {
          WindowId: this.__input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteMaintenanceWindow.WindowId', props);
    return resource.getResponseField('WindowId') as unknown as string;
  }

}

export class SSMResponsesDeleteParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDeleteParametersRequest) {
  }

  public get deletedParameters(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteParameters',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DeleteParameters.DeletedParameters'),
        outputPath: 'DeletedParameters',
        parameters: {
          Names: this.__input.names,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteParameters.DeletedParameters', props);
    return resource.getResponseField('DeletedParameters') as unknown as string[];
  }

  public get invalidParameters(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteParameters',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DeleteParameters.InvalidParameters'),
        outputPath: 'InvalidParameters',
        parameters: {
          Names: this.__input.names,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteParameters.InvalidParameters', props);
    return resource.getResponseField('InvalidParameters') as unknown as string[];
  }

}

export class SSMResponsesDeletePatchBaseline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDeletePatchBaselineRequest) {
  }

  public get baselineId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DeletePatchBaseline.BaselineId'),
        outputPath: 'BaselineId',
        parameters: {
          BaselineId: this.__input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeletePatchBaseline.BaselineId', props);
    return resource.getResponseField('BaselineId') as unknown as string;
  }

}

export class SSMResponsesDeregisterPatchBaselineForPatchGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDeregisterPatchBaselineForPatchGroupRequest) {
  }

  public get baselineId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterPatchBaselineForPatchGroup',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DeregisterPatchBaselineForPatchGroup.BaselineId'),
        outputPath: 'BaselineId',
        parameters: {
          BaselineId: this.__input.baselineId,
          PatchGroup: this.__input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterPatchBaselineForPatchGroup.BaselineId', props);
    return resource.getResponseField('BaselineId') as unknown as string;
  }

  public get patchGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterPatchBaselineForPatchGroup',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DeregisterPatchBaselineForPatchGroup.PatchGroup'),
        outputPath: 'PatchGroup',
        parameters: {
          BaselineId: this.__input.baselineId,
          PatchGroup: this.__input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterPatchBaselineForPatchGroup.PatchGroup', props);
    return resource.getResponseField('PatchGroup') as unknown as string;
  }

}

export class SSMResponsesDeregisterTargetFromMaintenanceWindow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDeregisterTargetFromMaintenanceWindowRequest) {
  }

  public get windowId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTargetFromMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DeregisterTargetFromMaintenanceWindow.WindowId'),
        outputPath: 'WindowId',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTargetId: this.__input.windowTargetId,
          Safe: this.__input.safe,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTargetFromMaintenanceWindow.WindowId', props);
    return resource.getResponseField('WindowId') as unknown as string;
  }

  public get windowTargetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTargetFromMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DeregisterTargetFromMaintenanceWindow.WindowTargetId'),
        outputPath: 'WindowTargetId',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTargetId: this.__input.windowTargetId,
          Safe: this.__input.safe,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTargetFromMaintenanceWindow.WindowTargetId', props);
    return resource.getResponseField('WindowTargetId') as unknown as string;
  }

}

export class SSMResponsesDeregisterTaskFromMaintenanceWindow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDeregisterTaskFromMaintenanceWindowRequest) {
  }

  public get windowId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskFromMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DeregisterTaskFromMaintenanceWindow.WindowId'),
        outputPath: 'WindowId',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskFromMaintenanceWindow.WindowId', props);
    return resource.getResponseField('WindowId') as unknown as string;
  }

  public get windowTaskId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterTaskFromMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DeregisterTaskFromMaintenanceWindow.WindowTaskId'),
        outputPath: 'WindowTaskId',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterTaskFromMaintenanceWindow.WindowTaskId', props);
    return resource.getResponseField('WindowTaskId') as unknown as string;
  }

}

export class SSMResponsesDescribeActivations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeActivationsRequest) {
  }

  public get activationList(): shapes.SsmActivation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeActivations',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeActivations.ActivationList'),
        outputPath: 'ActivationList',
        parameters: {
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeActivations.ActivationList', props);
    return resource.getResponseField('ActivationList') as unknown as shapes.SsmActivation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeActivations',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeActivations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeActivations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeAssociationRequest) {
  }

  public get associationDescription(): SSMResponsesDescribeAssociationAssociationDescription {
    return new SSMResponsesDescribeAssociationAssociationDescription(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesDescribeAssociationAssociationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeAssociationRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.Name'),
        outputPath: 'AssociationDescription.Name',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.Name', props);
    return resource.getResponseField('AssociationDescription.Name') as unknown as string;
  }

  public get instanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.InstanceId'),
        outputPath: 'AssociationDescription.InstanceId',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.InstanceId', props);
    return resource.getResponseField('AssociationDescription.InstanceId') as unknown as string;
  }

  public get associationVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.AssociationVersion'),
        outputPath: 'AssociationDescription.AssociationVersion',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.AssociationVersion', props);
    return resource.getResponseField('AssociationDescription.AssociationVersion') as unknown as string;
  }

  public get date(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.Date'),
        outputPath: 'AssociationDescription.Date',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.Date', props);
    return resource.getResponseField('AssociationDescription.Date') as unknown as string;
  }

  public get lastUpdateAssociationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.LastUpdateAssociationDate'),
        outputPath: 'AssociationDescription.LastUpdateAssociationDate',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.LastUpdateAssociationDate', props);
    return resource.getResponseField('AssociationDescription.LastUpdateAssociationDate') as unknown as string;
  }

  public get status(): SSMResponsesDescribeAssociationAssociationDescriptionStatus {
    return new SSMResponsesDescribeAssociationAssociationDescriptionStatus(this.__scope, this.__resources, this.__input);
  }

  public get overview(): SSMResponsesDescribeAssociationAssociationDescriptionOverview {
    return new SSMResponsesDescribeAssociationAssociationDescriptionOverview(this.__scope, this.__resources, this.__input);
  }

  public get documentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.DocumentVersion'),
        outputPath: 'AssociationDescription.DocumentVersion',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.DocumentVersion', props);
    return resource.getResponseField('AssociationDescription.DocumentVersion') as unknown as string;
  }

  public get automationTargetParameterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.AutomationTargetParameterName'),
        outputPath: 'AssociationDescription.AutomationTargetParameterName',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.AutomationTargetParameterName', props);
    return resource.getResponseField('AssociationDescription.AutomationTargetParameterName') as unknown as string;
  }

  public get parameters(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.Parameters'),
        outputPath: 'AssociationDescription.Parameters',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.Parameters', props);
    return resource.getResponseField('AssociationDescription.Parameters') as unknown as Record<string, string[]>;
  }

  public get associationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.AssociationId'),
        outputPath: 'AssociationDescription.AssociationId',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.AssociationId', props);
    return resource.getResponseField('AssociationDescription.AssociationId') as unknown as string;
  }

  public get targets(): shapes.SsmTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.Targets'),
        outputPath: 'AssociationDescription.Targets',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.Targets', props);
    return resource.getResponseField('AssociationDescription.Targets') as unknown as shapes.SsmTarget[];
  }

  public get scheduleExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.ScheduleExpression'),
        outputPath: 'AssociationDescription.ScheduleExpression',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.ScheduleExpression', props);
    return resource.getResponseField('AssociationDescription.ScheduleExpression') as unknown as string;
  }

  public get outputLocation(): SSMResponsesDescribeAssociationAssociationDescriptionOutputLocation {
    return new SSMResponsesDescribeAssociationAssociationDescriptionOutputLocation(this.__scope, this.__resources, this.__input);
  }

  public get lastExecutionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.LastExecutionDate'),
        outputPath: 'AssociationDescription.LastExecutionDate',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.LastExecutionDate', props);
    return resource.getResponseField('AssociationDescription.LastExecutionDate') as unknown as string;
  }

  public get lastSuccessfulExecutionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.LastSuccessfulExecutionDate'),
        outputPath: 'AssociationDescription.LastSuccessfulExecutionDate',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.LastSuccessfulExecutionDate', props);
    return resource.getResponseField('AssociationDescription.LastSuccessfulExecutionDate') as unknown as string;
  }

  public get associationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.AssociationName'),
        outputPath: 'AssociationDescription.AssociationName',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.AssociationName', props);
    return resource.getResponseField('AssociationDescription.AssociationName') as unknown as string;
  }

  public get maxErrors(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.MaxErrors'),
        outputPath: 'AssociationDescription.MaxErrors',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.MaxErrors', props);
    return resource.getResponseField('AssociationDescription.MaxErrors') as unknown as string;
  }

  public get maxConcurrency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.MaxConcurrency'),
        outputPath: 'AssociationDescription.MaxConcurrency',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.MaxConcurrency', props);
    return resource.getResponseField('AssociationDescription.MaxConcurrency') as unknown as string;
  }

  public get complianceSeverity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.ComplianceSeverity'),
        outputPath: 'AssociationDescription.ComplianceSeverity',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.ComplianceSeverity', props);
    return resource.getResponseField('AssociationDescription.ComplianceSeverity') as unknown as string;
  }

  public get syncCompliance(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.SyncCompliance'),
        outputPath: 'AssociationDescription.SyncCompliance',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.SyncCompliance', props);
    return resource.getResponseField('AssociationDescription.SyncCompliance') as unknown as string;
  }

  public get applyOnlyAtCronInterval(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.ApplyOnlyAtCronInterval'),
        outputPath: 'AssociationDescription.ApplyOnlyAtCronInterval',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.ApplyOnlyAtCronInterval', props);
    return resource.getResponseField('AssociationDescription.ApplyOnlyAtCronInterval') as unknown as boolean;
  }

}

export class SSMResponsesDescribeAssociationAssociationDescriptionStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeAssociationRequest) {
  }

  public get date(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.Status.Date'),
        outputPath: 'AssociationDescription.Status.Date',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.Status.Date', props);
    return resource.getResponseField('AssociationDescription.Status.Date') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.Status.Name'),
        outputPath: 'AssociationDescription.Status.Name',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.Status.Name', props);
    return resource.getResponseField('AssociationDescription.Status.Name') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.Status.Message'),
        outputPath: 'AssociationDescription.Status.Message',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.Status.Message', props);
    return resource.getResponseField('AssociationDescription.Status.Message') as unknown as string;
  }

  public get additionalInfo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.Status.AdditionalInfo'),
        outputPath: 'AssociationDescription.Status.AdditionalInfo',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.Status.AdditionalInfo', props);
    return resource.getResponseField('AssociationDescription.Status.AdditionalInfo') as unknown as string;
  }

}

export class SSMResponsesDescribeAssociationAssociationDescriptionOverview {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeAssociationRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.Overview.Status'),
        outputPath: 'AssociationDescription.Overview.Status',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.Overview.Status', props);
    return resource.getResponseField('AssociationDescription.Overview.Status') as unknown as string;
  }

  public get detailedStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.Overview.DetailedStatus'),
        outputPath: 'AssociationDescription.Overview.DetailedStatus',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.Overview.DetailedStatus', props);
    return resource.getResponseField('AssociationDescription.Overview.DetailedStatus') as unknown as string;
  }

  public get associationStatusAggregatedCount(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.Overview.AssociationStatusAggregatedCount'),
        outputPath: 'AssociationDescription.Overview.AssociationStatusAggregatedCount',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.Overview.AssociationStatusAggregatedCount', props);
    return resource.getResponseField('AssociationDescription.Overview.AssociationStatusAggregatedCount') as unknown as Record<string, number>;
  }

}

export class SSMResponsesDescribeAssociationAssociationDescriptionOutputLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeAssociationRequest) {
  }

  public get s3Location(): SSMResponsesDescribeAssociationAssociationDescriptionOutputLocationS3Location {
    return new SSMResponsesDescribeAssociationAssociationDescriptionOutputLocationS3Location(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesDescribeAssociationAssociationDescriptionOutputLocationS3Location {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeAssociationRequest) {
  }

  public get outputS3Region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3Region'),
        outputPath: 'AssociationDescription.OutputLocation.S3Location.OutputS3Region',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3Region', props);
    return resource.getResponseField('AssociationDescription.OutputLocation.S3Location.OutputS3Region') as unknown as string;
  }

  public get outputS3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3BucketName'),
        outputPath: 'AssociationDescription.OutputLocation.S3Location.OutputS3BucketName',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3BucketName', props);
    return resource.getResponseField('AssociationDescription.OutputLocation.S3Location.OutputS3BucketName') as unknown as string;
  }

  public get outputS3KeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix'),
        outputPath: 'AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationId: this.__input.associationId,
          AssociationVersion: this.__input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix', props);
    return resource.getResponseField('AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix') as unknown as string;
  }

}

export class SSMResponsesDescribeAssociationExecutionTargets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeAssociationExecutionTargetsRequest) {
  }

  public get associationExecutionTargets(): shapes.SsmAssociationExecutionTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociationExecutionTargets',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociationExecutionTargets.AssociationExecutionTargets'),
        outputPath: 'AssociationExecutionTargets',
        parameters: {
          AssociationId: this.__input.associationId,
          ExecutionId: this.__input.executionId,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociationExecutionTargets.AssociationExecutionTargets', props);
    return resource.getResponseField('AssociationExecutionTargets') as unknown as shapes.SsmAssociationExecutionTarget[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociationExecutionTargets',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociationExecutionTargets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AssociationId: this.__input.associationId,
          ExecutionId: this.__input.executionId,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociationExecutionTargets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeAssociationExecutions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeAssociationExecutionsRequest) {
  }

  public get associationExecutions(): shapes.SsmAssociationExecution[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociationExecutions',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociationExecutions.AssociationExecutions'),
        outputPath: 'AssociationExecutions',
        parameters: {
          AssociationId: this.__input.associationId,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociationExecutions.AssociationExecutions', props);
    return resource.getResponseField('AssociationExecutions') as unknown as shapes.SsmAssociationExecution[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAssociationExecutions',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAssociationExecutions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AssociationId: this.__input.associationId,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAssociationExecutions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeAutomationExecutions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeAutomationExecutionsRequest) {
  }

  public get automationExecutionMetadataList(): shapes.SsmAutomationExecutionMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutomationExecutions',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAutomationExecutions.AutomationExecutionMetadataList'),
        outputPath: 'AutomationExecutionMetadataList',
        parameters: {
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutomationExecutions.AutomationExecutionMetadataList', props);
    return resource.getResponseField('AutomationExecutionMetadataList') as unknown as shapes.SsmAutomationExecutionMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutomationExecutions',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAutomationExecutions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutomationExecutions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeAutomationStepExecutions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeAutomationStepExecutionsRequest) {
  }

  public get stepExecutions(): shapes.SsmStepExecution[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutomationStepExecutions',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAutomationStepExecutions.StepExecutions'),
        outputPath: 'StepExecutions',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ReverseOrder: this.__input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutomationStepExecutions.StepExecutions', props);
    return resource.getResponseField('StepExecutions') as unknown as shapes.SsmStepExecution[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAutomationStepExecutions',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAutomationStepExecutions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ReverseOrder: this.__input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAutomationStepExecutions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeAvailablePatches {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeAvailablePatchesRequest) {
  }

  public get patches(): shapes.SsmPatch[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAvailablePatches',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAvailablePatches.Patches'),
        outputPath: 'Patches',
        parameters: {
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAvailablePatches.Patches', props);
    return resource.getResponseField('Patches') as unknown as shapes.SsmPatch[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAvailablePatches',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeAvailablePatches.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAvailablePatches.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeDocument {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeDocumentRequest) {
  }

  public get document(): SSMResponsesDescribeDocumentDocument {
    return new SSMResponsesDescribeDocumentDocument(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesDescribeDocumentDocument {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeDocumentRequest) {
  }

  public get sha1(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.Sha1'),
        outputPath: 'Document.Sha1',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.Sha1', props);
    return resource.getResponseField('Document.Sha1') as unknown as string;
  }

  public get hash(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.Hash'),
        outputPath: 'Document.Hash',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.Hash', props);
    return resource.getResponseField('Document.Hash') as unknown as string;
  }

  public get hashType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.HashType'),
        outputPath: 'Document.HashType',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.HashType', props);
    return resource.getResponseField('Document.HashType') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.Name'),
        outputPath: 'Document.Name',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.Name', props);
    return resource.getResponseField('Document.Name') as unknown as string;
  }

  public get versionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.VersionName'),
        outputPath: 'Document.VersionName',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.VersionName', props);
    return resource.getResponseField('Document.VersionName') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.Owner'),
        outputPath: 'Document.Owner',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.Owner', props);
    return resource.getResponseField('Document.Owner') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.CreatedDate'),
        outputPath: 'Document.CreatedDate',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.CreatedDate', props);
    return resource.getResponseField('Document.CreatedDate') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.Status'),
        outputPath: 'Document.Status',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.Status', props);
    return resource.getResponseField('Document.Status') as unknown as string;
  }

  public get statusInformation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.StatusInformation'),
        outputPath: 'Document.StatusInformation',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.StatusInformation', props);
    return resource.getResponseField('Document.StatusInformation') as unknown as string;
  }

  public get documentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.DocumentVersion'),
        outputPath: 'Document.DocumentVersion',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.DocumentVersion', props);
    return resource.getResponseField('Document.DocumentVersion') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.Description'),
        outputPath: 'Document.Description',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.Description', props);
    return resource.getResponseField('Document.Description') as unknown as string;
  }

  public get parameters(): shapes.SsmDocumentParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.Parameters'),
        outputPath: 'Document.Parameters',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.Parameters', props);
    return resource.getResponseField('Document.Parameters') as unknown as shapes.SsmDocumentParameter[];
  }

  public get platformTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.PlatformTypes'),
        outputPath: 'Document.PlatformTypes',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.PlatformTypes', props);
    return resource.getResponseField('Document.PlatformTypes') as unknown as string[];
  }

  public get documentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.DocumentType'),
        outputPath: 'Document.DocumentType',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.DocumentType', props);
    return resource.getResponseField('Document.DocumentType') as unknown as string;
  }

  public get schemaVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.SchemaVersion'),
        outputPath: 'Document.SchemaVersion',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.SchemaVersion', props);
    return resource.getResponseField('Document.SchemaVersion') as unknown as string;
  }

  public get latestVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.LatestVersion'),
        outputPath: 'Document.LatestVersion',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.LatestVersion', props);
    return resource.getResponseField('Document.LatestVersion') as unknown as string;
  }

  public get defaultVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.DefaultVersion'),
        outputPath: 'Document.DefaultVersion',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.DefaultVersion', props);
    return resource.getResponseField('Document.DefaultVersion') as unknown as string;
  }

  public get documentFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.DocumentFormat'),
        outputPath: 'Document.DocumentFormat',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.DocumentFormat', props);
    return resource.getResponseField('Document.DocumentFormat') as unknown as string;
  }

  public get targetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.TargetType'),
        outputPath: 'Document.TargetType',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.TargetType', props);
    return resource.getResponseField('Document.TargetType') as unknown as string;
  }

  public get tags(): shapes.SsmTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.Tags'),
        outputPath: 'Document.Tags',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.Tags', props);
    return resource.getResponseField('Document.Tags') as unknown as shapes.SsmTag[];
  }

  public get attachmentsInformation(): shapes.SsmAttachmentInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.AttachmentsInformation'),
        outputPath: 'Document.AttachmentsInformation',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.AttachmentsInformation', props);
    return resource.getResponseField('Document.AttachmentsInformation') as unknown as shapes.SsmAttachmentInformation[];
  }

  public get requires(): shapes.SsmDocumentRequires[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocument.Document.Requires'),
        outputPath: 'Document.Requires',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
          VersionName: this.__input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocument.Document.Requires', props);
    return resource.getResponseField('Document.Requires') as unknown as shapes.SsmDocumentRequires[];
  }

}

export class SSMResponsesDescribeDocumentPermission {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeDocumentPermissionRequest) {
  }

  public get accountIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentPermission',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocumentPermission.AccountIds'),
        outputPath: 'AccountIds',
        parameters: {
          Name: this.__input.name,
          PermissionType: this.__input.permissionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentPermission.AccountIds', props);
    return resource.getResponseField('AccountIds') as unknown as string[];
  }

  public get accountSharingInfoList(): shapes.SsmAccountSharingInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDocumentPermission',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeDocumentPermission.AccountSharingInfoList'),
        outputPath: 'AccountSharingInfoList',
        parameters: {
          Name: this.__input.name,
          PermissionType: this.__input.permissionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDocumentPermission.AccountSharingInfoList', props);
    return resource.getResponseField('AccountSharingInfoList') as unknown as shapes.SsmAccountSharingInfo[];
  }

}

export class SSMResponsesDescribeEffectiveInstanceAssociations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeEffectiveInstanceAssociationsRequest) {
  }

  public get associations(): shapes.SsmInstanceAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEffectiveInstanceAssociations',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeEffectiveInstanceAssociations.Associations'),
        outputPath: 'Associations',
        parameters: {
          InstanceId: this.__input.instanceId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEffectiveInstanceAssociations.Associations', props);
    return resource.getResponseField('Associations') as unknown as shapes.SsmInstanceAssociation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEffectiveInstanceAssociations',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeEffectiveInstanceAssociations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.__input.instanceId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEffectiveInstanceAssociations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeEffectivePatchesForPatchBaseline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeEffectivePatchesForPatchBaselineRequest) {
  }

  public get effectivePatches(): shapes.SsmEffectivePatch[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEffectivePatchesForPatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeEffectivePatchesForPatchBaseline.EffectivePatches'),
        outputPath: 'EffectivePatches',
        parameters: {
          BaselineId: this.__input.baselineId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEffectivePatchesForPatchBaseline.EffectivePatches', props);
    return resource.getResponseField('EffectivePatches') as unknown as shapes.SsmEffectivePatch[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEffectivePatchesForPatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeEffectivePatchesForPatchBaseline.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          BaselineId: this.__input.baselineId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEffectivePatchesForPatchBaseline.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeInstanceAssociationsStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeInstanceAssociationsStatusRequest) {
  }

  public get instanceAssociationStatusInfos(): shapes.SsmInstanceAssociationStatusInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceAssociationsStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeInstanceAssociationsStatus.InstanceAssociationStatusInfos'),
        outputPath: 'InstanceAssociationStatusInfos',
        parameters: {
          InstanceId: this.__input.instanceId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceAssociationsStatus.InstanceAssociationStatusInfos', props);
    return resource.getResponseField('InstanceAssociationStatusInfos') as unknown as shapes.SsmInstanceAssociationStatusInfo[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceAssociationsStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeInstanceAssociationsStatus.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.__input.instanceId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceAssociationsStatus.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeInstanceInformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeInstanceInformationRequest) {
  }

  public get instanceInformationList(): shapes.SsmInstanceInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceInformation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeInstanceInformation.InstanceInformationList'),
        outputPath: 'InstanceInformationList',
        parameters: {
          InstanceInformationFilterList: this.__input.instanceInformationFilterList,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceInformation.InstanceInformationList', props);
    return resource.getResponseField('InstanceInformationList') as unknown as shapes.SsmInstanceInformation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstanceInformation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeInstanceInformation.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceInformationFilterList: this.__input.instanceInformationFilterList,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstanceInformation.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeInstancePatchStates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeInstancePatchStatesRequest) {
  }

  public get instancePatchStates(): shapes.SsmInstancePatchState[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstancePatchStates',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeInstancePatchStates.InstancePatchStates'),
        outputPath: 'InstancePatchStates',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstancePatchStates.InstancePatchStates', props);
    return resource.getResponseField('InstancePatchStates') as unknown as shapes.SsmInstancePatchState[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstancePatchStates',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeInstancePatchStates.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstancePatchStates.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeInstancePatchStatesForPatchGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeInstancePatchStatesForPatchGroupRequest) {
  }

  public get instancePatchStates(): shapes.SsmInstancePatchState[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstancePatchStatesForPatchGroup',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeInstancePatchStatesForPatchGroup.InstancePatchStates'),
        outputPath: 'InstancePatchStates',
        parameters: {
          PatchGroup: this.__input.patchGroup,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstancePatchStatesForPatchGroup.InstancePatchStates', props);
    return resource.getResponseField('InstancePatchStates') as unknown as shapes.SsmInstancePatchState[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstancePatchStatesForPatchGroup',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeInstancePatchStatesForPatchGroup.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          PatchGroup: this.__input.patchGroup,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstancePatchStatesForPatchGroup.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeInstancePatches {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeInstancePatchesRequest) {
  }

  public get patches(): shapes.SsmPatchComplianceData[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstancePatches',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeInstancePatches.Patches'),
        outputPath: 'Patches',
        parameters: {
          InstanceId: this.__input.instanceId,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstancePatches.Patches', props);
    return resource.getResponseField('Patches') as unknown as shapes.SsmPatchComplianceData[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstancePatches',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeInstancePatches.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.__input.instanceId,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstancePatches.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeInventoryDeletions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeInventoryDeletionsRequest) {
  }

  public get inventoryDeletions(): shapes.SsmInventoryDeletionStatusItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInventoryDeletions',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeInventoryDeletions.InventoryDeletions'),
        outputPath: 'InventoryDeletions',
        parameters: {
          DeletionId: this.__input.deletionId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInventoryDeletions.InventoryDeletions', props);
    return resource.getResponseField('InventoryDeletions') as unknown as shapes.SsmInventoryDeletionStatusItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInventoryDeletions',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeInventoryDeletions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DeletionId: this.__input.deletionId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInventoryDeletions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeMaintenanceWindowExecutionTaskInvocations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest) {
  }

  public get windowExecutionTaskInvocationIdentities(): shapes.SsmMaintenanceWindowExecutionTaskInvocationIdentity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceWindowExecutionTaskInvocations',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeMaintenanceWindowExecutionTaskInvocations.WindowExecutionTaskInvocationIdentities'),
        outputPath: 'WindowExecutionTaskInvocationIdentities',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceWindowExecutionTaskInvocations.WindowExecutionTaskInvocationIdentities', props);
    return resource.getResponseField('WindowExecutionTaskInvocationIdentities') as unknown as shapes.SsmMaintenanceWindowExecutionTaskInvocationIdentity[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceWindowExecutionTaskInvocations',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeMaintenanceWindowExecutionTaskInvocations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceWindowExecutionTaskInvocations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeMaintenanceWindowExecutionTasks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeMaintenanceWindowExecutionTasksRequest) {
  }

  public get windowExecutionTaskIdentities(): shapes.SsmMaintenanceWindowExecutionTaskIdentity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceWindowExecutionTasks',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeMaintenanceWindowExecutionTasks.WindowExecutionTaskIdentities'),
        outputPath: 'WindowExecutionTaskIdentities',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceWindowExecutionTasks.WindowExecutionTaskIdentities', props);
    return resource.getResponseField('WindowExecutionTaskIdentities') as unknown as shapes.SsmMaintenanceWindowExecutionTaskIdentity[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceWindowExecutionTasks',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeMaintenanceWindowExecutionTasks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceWindowExecutionTasks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeMaintenanceWindowExecutions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeMaintenanceWindowExecutionsRequest) {
  }

  public get windowExecutions(): shapes.SsmMaintenanceWindowExecution[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceWindowExecutions',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeMaintenanceWindowExecutions.WindowExecutions'),
        outputPath: 'WindowExecutions',
        parameters: {
          WindowId: this.__input.windowId,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceWindowExecutions.WindowExecutions', props);
    return resource.getResponseField('WindowExecutions') as unknown as shapes.SsmMaintenanceWindowExecution[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceWindowExecutions',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeMaintenanceWindowExecutions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          WindowId: this.__input.windowId,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceWindowExecutions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeMaintenanceWindowSchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeMaintenanceWindowScheduleRequest) {
  }

  public get scheduledWindowExecutions(): shapes.SsmScheduledWindowExecution[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceWindowSchedule',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeMaintenanceWindowSchedule.ScheduledWindowExecutions'),
        outputPath: 'ScheduledWindowExecutions',
        parameters: {
          WindowId: this.__input.windowId,
          Targets: this.__input.targets,
          ResourceType: this.__input.resourceType,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceWindowSchedule.ScheduledWindowExecutions', props);
    return resource.getResponseField('ScheduledWindowExecutions') as unknown as shapes.SsmScheduledWindowExecution[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceWindowSchedule',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeMaintenanceWindowSchedule.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          WindowId: this.__input.windowId,
          Targets: this.__input.targets,
          ResourceType: this.__input.resourceType,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceWindowSchedule.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeMaintenanceWindowTargets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeMaintenanceWindowTargetsRequest) {
  }

  public get targets(): shapes.SsmMaintenanceWindowTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceWindowTargets',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeMaintenanceWindowTargets.Targets'),
        outputPath: 'Targets',
        parameters: {
          WindowId: this.__input.windowId,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceWindowTargets.Targets', props);
    return resource.getResponseField('Targets') as unknown as shapes.SsmMaintenanceWindowTarget[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceWindowTargets',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeMaintenanceWindowTargets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          WindowId: this.__input.windowId,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceWindowTargets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeMaintenanceWindowTasks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeMaintenanceWindowTasksRequest) {
  }

  public get tasks(): shapes.SsmMaintenanceWindowTask[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceWindowTasks',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeMaintenanceWindowTasks.Tasks'),
        outputPath: 'Tasks',
        parameters: {
          WindowId: this.__input.windowId,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceWindowTasks.Tasks', props);
    return resource.getResponseField('Tasks') as unknown as shapes.SsmMaintenanceWindowTask[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceWindowTasks',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeMaintenanceWindowTasks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          WindowId: this.__input.windowId,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceWindowTasks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeMaintenanceWindows {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeMaintenanceWindowsRequest) {
  }

  public get windowIdentities(): shapes.SsmMaintenanceWindowIdentity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceWindows',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeMaintenanceWindows.WindowIdentities'),
        outputPath: 'WindowIdentities',
        parameters: {
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceWindows.WindowIdentities', props);
    return resource.getResponseField('WindowIdentities') as unknown as shapes.SsmMaintenanceWindowIdentity[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceWindows',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeMaintenanceWindows.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceWindows.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeMaintenanceWindowsForTarget {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeMaintenanceWindowsForTargetRequest) {
  }

  public get windowIdentities(): shapes.SsmMaintenanceWindowIdentityForTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceWindowsForTarget',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeMaintenanceWindowsForTarget.WindowIdentities'),
        outputPath: 'WindowIdentities',
        parameters: {
          Targets: this.__input.targets,
          ResourceType: this.__input.resourceType,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceWindowsForTarget.WindowIdentities', props);
    return resource.getResponseField('WindowIdentities') as unknown as shapes.SsmMaintenanceWindowIdentityForTarget[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMaintenanceWindowsForTarget',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeMaintenanceWindowsForTarget.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Targets: this.__input.targets,
          ResourceType: this.__input.resourceType,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMaintenanceWindowsForTarget.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeOpsItems {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeOpsItemsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOpsItems',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeOpsItems.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          OpsItemFilters: this.__input.opsItemFilters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOpsItems.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get opsItemSummaries(): shapes.SsmOpsItemSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOpsItems',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeOpsItems.OpsItemSummaries'),
        outputPath: 'OpsItemSummaries',
        parameters: {
          OpsItemFilters: this.__input.opsItemFilters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOpsItems.OpsItemSummaries', props);
    return resource.getResponseField('OpsItemSummaries') as unknown as shapes.SsmOpsItemSummary[];
  }

}

export class SSMResponsesDescribeParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeParametersRequest) {
  }

  public get parameters(): shapes.SsmParameterMetadata[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeParameters',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeParameters.Parameters'),
        outputPath: 'Parameters',
        parameters: {
          Filters: this.__input.filters,
          ParameterFilters: this.__input.parameterFilters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeParameters.Parameters', props);
    return resource.getResponseField('Parameters') as unknown as shapes.SsmParameterMetadata[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeParameters',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeParameters.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: this.__input.filters,
          ParameterFilters: this.__input.parameterFilters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeParameters.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribePatchBaselines {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribePatchBaselinesRequest) {
  }

  public get baselineIdentities(): shapes.SsmPatchBaselineIdentity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePatchBaselines',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribePatchBaselines.BaselineIdentities'),
        outputPath: 'BaselineIdentities',
        parameters: {
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePatchBaselines.BaselineIdentities', props);
    return resource.getResponseField('BaselineIdentities') as unknown as shapes.SsmPatchBaselineIdentity[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePatchBaselines',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribePatchBaselines.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePatchBaselines.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribePatchGroupState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribePatchGroupStateRequest) {
  }

  public get instances(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePatchGroupState',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribePatchGroupState.Instances'),
        outputPath: 'Instances',
        parameters: {
          PatchGroup: this.__input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePatchGroupState.Instances', props);
    return resource.getResponseField('Instances') as unknown as number;
  }

  public get instancesWithInstalledPatches(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePatchGroupState',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribePatchGroupState.InstancesWithInstalledPatches'),
        outputPath: 'InstancesWithInstalledPatches',
        parameters: {
          PatchGroup: this.__input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePatchGroupState.InstancesWithInstalledPatches', props);
    return resource.getResponseField('InstancesWithInstalledPatches') as unknown as number;
  }

  public get instancesWithInstalledOtherPatches(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePatchGroupState',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribePatchGroupState.InstancesWithInstalledOtherPatches'),
        outputPath: 'InstancesWithInstalledOtherPatches',
        parameters: {
          PatchGroup: this.__input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePatchGroupState.InstancesWithInstalledOtherPatches', props);
    return resource.getResponseField('InstancesWithInstalledOtherPatches') as unknown as number;
  }

  public get instancesWithInstalledPendingRebootPatches(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePatchGroupState',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribePatchGroupState.InstancesWithInstalledPendingRebootPatches'),
        outputPath: 'InstancesWithInstalledPendingRebootPatches',
        parameters: {
          PatchGroup: this.__input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePatchGroupState.InstancesWithInstalledPendingRebootPatches', props);
    return resource.getResponseField('InstancesWithInstalledPendingRebootPatches') as unknown as number;
  }

  public get instancesWithInstalledRejectedPatches(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePatchGroupState',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribePatchGroupState.InstancesWithInstalledRejectedPatches'),
        outputPath: 'InstancesWithInstalledRejectedPatches',
        parameters: {
          PatchGroup: this.__input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePatchGroupState.InstancesWithInstalledRejectedPatches', props);
    return resource.getResponseField('InstancesWithInstalledRejectedPatches') as unknown as number;
  }

  public get instancesWithMissingPatches(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePatchGroupState',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribePatchGroupState.InstancesWithMissingPatches'),
        outputPath: 'InstancesWithMissingPatches',
        parameters: {
          PatchGroup: this.__input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePatchGroupState.InstancesWithMissingPatches', props);
    return resource.getResponseField('InstancesWithMissingPatches') as unknown as number;
  }

  public get instancesWithFailedPatches(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePatchGroupState',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribePatchGroupState.InstancesWithFailedPatches'),
        outputPath: 'InstancesWithFailedPatches',
        parameters: {
          PatchGroup: this.__input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePatchGroupState.InstancesWithFailedPatches', props);
    return resource.getResponseField('InstancesWithFailedPatches') as unknown as number;
  }

  public get instancesWithNotApplicablePatches(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePatchGroupState',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribePatchGroupState.InstancesWithNotApplicablePatches'),
        outputPath: 'InstancesWithNotApplicablePatches',
        parameters: {
          PatchGroup: this.__input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePatchGroupState.InstancesWithNotApplicablePatches', props);
    return resource.getResponseField('InstancesWithNotApplicablePatches') as unknown as number;
  }

  public get instancesWithUnreportedNotApplicablePatches(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePatchGroupState',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribePatchGroupState.InstancesWithUnreportedNotApplicablePatches'),
        outputPath: 'InstancesWithUnreportedNotApplicablePatches',
        parameters: {
          PatchGroup: this.__input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePatchGroupState.InstancesWithUnreportedNotApplicablePatches', props);
    return resource.getResponseField('InstancesWithUnreportedNotApplicablePatches') as unknown as number;
  }

}

export class SSMResponsesDescribePatchGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribePatchGroupsRequest) {
  }

  public get mappings(): shapes.SsmPatchGroupPatchBaselineMapping[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePatchGroups',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribePatchGroups.Mappings'),
        outputPath: 'Mappings',
        parameters: {
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePatchGroups.Mappings', props);
    return resource.getResponseField('Mappings') as unknown as shapes.SsmPatchGroupPatchBaselineMapping[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePatchGroups',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribePatchGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePatchGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribePatchProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribePatchPropertiesRequest) {
  }

  public get properties(): Record<string, string>[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePatchProperties',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribePatchProperties.Properties'),
        outputPath: 'Properties',
        parameters: {
          OperatingSystem: this.__input.operatingSystem,
          Property: this.__input.property,
          PatchSet: this.__input.patchSet,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePatchProperties.Properties', props);
    return resource.getResponseField('Properties') as unknown as Record<string, string>[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePatchProperties',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribePatchProperties.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          OperatingSystem: this.__input.operatingSystem,
          Property: this.__input.property,
          PatchSet: this.__input.patchSet,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePatchProperties.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesDescribeSessions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmDescribeSessionsRequest) {
  }

  public get sessions(): shapes.SsmSession[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSessions',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeSessions.Sessions'),
        outputPath: 'Sessions',
        parameters: {
          State: this.__input.state,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSessions.Sessions', props);
    return resource.getResponseField('Sessions') as unknown as shapes.SsmSession[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSessions',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.DescribeSessions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          State: this.__input.state,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSessions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesFetchAutomationExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetAutomationExecutionRequest) {
  }

  public get automationExecution(): SSMResponsesFetchAutomationExecutionAutomationExecution {
    return new SSMResponsesFetchAutomationExecutionAutomationExecution(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesFetchAutomationExecutionAutomationExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetAutomationExecutionRequest) {
  }

  public get automationExecutionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.AutomationExecutionId'),
        outputPath: 'AutomationExecution.AutomationExecutionId',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.AutomationExecutionId', props);
    return resource.getResponseField('AutomationExecution.AutomationExecutionId') as unknown as string;
  }

  public get documentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.DocumentName'),
        outputPath: 'AutomationExecution.DocumentName',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.DocumentName', props);
    return resource.getResponseField('AutomationExecution.DocumentName') as unknown as string;
  }

  public get documentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.DocumentVersion'),
        outputPath: 'AutomationExecution.DocumentVersion',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.DocumentVersion', props);
    return resource.getResponseField('AutomationExecution.DocumentVersion') as unknown as string;
  }

  public get executionStartTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.ExecutionStartTime'),
        outputPath: 'AutomationExecution.ExecutionStartTime',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.ExecutionStartTime', props);
    return resource.getResponseField('AutomationExecution.ExecutionStartTime') as unknown as string;
  }

  public get executionEndTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.ExecutionEndTime'),
        outputPath: 'AutomationExecution.ExecutionEndTime',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.ExecutionEndTime', props);
    return resource.getResponseField('AutomationExecution.ExecutionEndTime') as unknown as string;
  }

  public get automationExecutionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.AutomationExecutionStatus'),
        outputPath: 'AutomationExecution.AutomationExecutionStatus',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.AutomationExecutionStatus', props);
    return resource.getResponseField('AutomationExecution.AutomationExecutionStatus') as unknown as string;
  }

  public get stepExecutions(): shapes.SsmStepExecution[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.StepExecutions'),
        outputPath: 'AutomationExecution.StepExecutions',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.StepExecutions', props);
    return resource.getResponseField('AutomationExecution.StepExecutions') as unknown as shapes.SsmStepExecution[];
  }

  public get stepExecutionsTruncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.StepExecutionsTruncated'),
        outputPath: 'AutomationExecution.StepExecutionsTruncated',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.StepExecutionsTruncated', props);
    return resource.getResponseField('AutomationExecution.StepExecutionsTruncated') as unknown as boolean;
  }

  public get parameters(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.Parameters'),
        outputPath: 'AutomationExecution.Parameters',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.Parameters', props);
    return resource.getResponseField('AutomationExecution.Parameters') as unknown as Record<string, string[]>;
  }

  public get outputs(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.Outputs'),
        outputPath: 'AutomationExecution.Outputs',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.Outputs', props);
    return resource.getResponseField('AutomationExecution.Outputs') as unknown as Record<string, string[]>;
  }

  public get failureMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.FailureMessage'),
        outputPath: 'AutomationExecution.FailureMessage',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.FailureMessage', props);
    return resource.getResponseField('AutomationExecution.FailureMessage') as unknown as string;
  }

  public get mode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.Mode'),
        outputPath: 'AutomationExecution.Mode',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.Mode', props);
    return resource.getResponseField('AutomationExecution.Mode') as unknown as string;
  }

  public get parentAutomationExecutionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.ParentAutomationExecutionId'),
        outputPath: 'AutomationExecution.ParentAutomationExecutionId',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.ParentAutomationExecutionId', props);
    return resource.getResponseField('AutomationExecution.ParentAutomationExecutionId') as unknown as string;
  }

  public get executedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.ExecutedBy'),
        outputPath: 'AutomationExecution.ExecutedBy',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.ExecutedBy', props);
    return resource.getResponseField('AutomationExecution.ExecutedBy') as unknown as string;
  }

  public get currentStepName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.CurrentStepName'),
        outputPath: 'AutomationExecution.CurrentStepName',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.CurrentStepName', props);
    return resource.getResponseField('AutomationExecution.CurrentStepName') as unknown as string;
  }

  public get currentAction(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.CurrentAction'),
        outputPath: 'AutomationExecution.CurrentAction',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.CurrentAction', props);
    return resource.getResponseField('AutomationExecution.CurrentAction') as unknown as string;
  }

  public get targetParameterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.TargetParameterName'),
        outputPath: 'AutomationExecution.TargetParameterName',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.TargetParameterName', props);
    return resource.getResponseField('AutomationExecution.TargetParameterName') as unknown as string;
  }

  public get targets(): shapes.SsmTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.Targets'),
        outputPath: 'AutomationExecution.Targets',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.Targets', props);
    return resource.getResponseField('AutomationExecution.Targets') as unknown as shapes.SsmTarget[];
  }

  public get targetMaps(): Record<string, string[]>[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.TargetMaps'),
        outputPath: 'AutomationExecution.TargetMaps',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.TargetMaps', props);
    return resource.getResponseField('AutomationExecution.TargetMaps') as unknown as Record<string, string[]>[];
  }

  public get resolvedTargets(): SSMResponsesFetchAutomationExecutionAutomationExecutionResolvedTargets {
    return new SSMResponsesFetchAutomationExecutionAutomationExecutionResolvedTargets(this.__scope, this.__resources, this.__input);
  }

  public get maxConcurrency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.MaxConcurrency'),
        outputPath: 'AutomationExecution.MaxConcurrency',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.MaxConcurrency', props);
    return resource.getResponseField('AutomationExecution.MaxConcurrency') as unknown as string;
  }

  public get maxErrors(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.MaxErrors'),
        outputPath: 'AutomationExecution.MaxErrors',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.MaxErrors', props);
    return resource.getResponseField('AutomationExecution.MaxErrors') as unknown as string;
  }

  public get target(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.Target'),
        outputPath: 'AutomationExecution.Target',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.Target', props);
    return resource.getResponseField('AutomationExecution.Target') as unknown as string;
  }

  public get targetLocations(): shapes.SsmTargetLocation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.TargetLocations'),
        outputPath: 'AutomationExecution.TargetLocations',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.TargetLocations', props);
    return resource.getResponseField('AutomationExecution.TargetLocations') as unknown as shapes.SsmTargetLocation[];
  }

  public get progressCounters(): SSMResponsesFetchAutomationExecutionAutomationExecutionProgressCounters {
    return new SSMResponsesFetchAutomationExecutionAutomationExecutionProgressCounters(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesFetchAutomationExecutionAutomationExecutionResolvedTargets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetAutomationExecutionRequest) {
  }

  public get parameterValues(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.ResolvedTargets.ParameterValues'),
        outputPath: 'AutomationExecution.ResolvedTargets.ParameterValues',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.ResolvedTargets.ParameterValues', props);
    return resource.getResponseField('AutomationExecution.ResolvedTargets.ParameterValues') as unknown as string[];
  }

  public get truncated(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.ResolvedTargets.Truncated'),
        outputPath: 'AutomationExecution.ResolvedTargets.Truncated',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.ResolvedTargets.Truncated', props);
    return resource.getResponseField('AutomationExecution.ResolvedTargets.Truncated') as unknown as boolean;
  }

}

export class SSMResponsesFetchAutomationExecutionAutomationExecutionProgressCounters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetAutomationExecutionRequest) {
  }

  public get totalSteps(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.ProgressCounters.TotalSteps'),
        outputPath: 'AutomationExecution.ProgressCounters.TotalSteps',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.ProgressCounters.TotalSteps', props);
    return resource.getResponseField('AutomationExecution.ProgressCounters.TotalSteps') as unknown as number;
  }

  public get successSteps(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.ProgressCounters.SuccessSteps'),
        outputPath: 'AutomationExecution.ProgressCounters.SuccessSteps',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.ProgressCounters.SuccessSteps', props);
    return resource.getResponseField('AutomationExecution.ProgressCounters.SuccessSteps') as unknown as number;
  }

  public get failedSteps(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.ProgressCounters.FailedSteps'),
        outputPath: 'AutomationExecution.ProgressCounters.FailedSteps',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.ProgressCounters.FailedSteps', props);
    return resource.getResponseField('AutomationExecution.ProgressCounters.FailedSteps') as unknown as number;
  }

  public get cancelledSteps(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.ProgressCounters.CancelledSteps'),
        outputPath: 'AutomationExecution.ProgressCounters.CancelledSteps',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.ProgressCounters.CancelledSteps', props);
    return resource.getResponseField('AutomationExecution.ProgressCounters.CancelledSteps') as unknown as number;
  }

  public get timedOutSteps(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetAutomationExecution.AutomationExecution.ProgressCounters.TimedOutSteps'),
        outputPath: 'AutomationExecution.ProgressCounters.TimedOutSteps',
        parameters: {
          AutomationExecutionId: this.__input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAutomationExecution.AutomationExecution.ProgressCounters.TimedOutSteps', props);
    return resource.getResponseField('AutomationExecution.ProgressCounters.TimedOutSteps') as unknown as number;
  }

}

export class SSMResponsesFetchCalendarState {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetCalendarStateRequest) {
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCalendarState',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetCalendarState.State'),
        outputPath: 'State',
        parameters: {
          CalendarNames: this.__input.calendarNames,
          AtTime: this.__input.atTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCalendarState.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get atTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCalendarState',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetCalendarState.AtTime'),
        outputPath: 'AtTime',
        parameters: {
          CalendarNames: this.__input.calendarNames,
          AtTime: this.__input.atTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCalendarState.AtTime', props);
    return resource.getResponseField('AtTime') as unknown as string;
  }

  public get nextTransitionTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCalendarState',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetCalendarState.NextTransitionTime'),
        outputPath: 'NextTransitionTime',
        parameters: {
          CalendarNames: this.__input.calendarNames,
          AtTime: this.__input.atTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCalendarState.NextTransitionTime', props);
    return resource.getResponseField('NextTransitionTime') as unknown as string;
  }

}

export class SSMResponsesFetchCommandInvocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetCommandInvocationRequest) {
  }

  public get commandId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommandInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetCommandInvocation.CommandId'),
        outputPath: 'CommandId',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          PluginName: this.__input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommandInvocation.CommandId', props);
    return resource.getResponseField('CommandId') as unknown as string;
  }

  public get instanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommandInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetCommandInvocation.InstanceId'),
        outputPath: 'InstanceId',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          PluginName: this.__input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommandInvocation.InstanceId', props);
    return resource.getResponseField('InstanceId') as unknown as string;
  }

  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommandInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetCommandInvocation.Comment'),
        outputPath: 'Comment',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          PluginName: this.__input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommandInvocation.Comment', props);
    return resource.getResponseField('Comment') as unknown as string;
  }

  public get documentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommandInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetCommandInvocation.DocumentName'),
        outputPath: 'DocumentName',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          PluginName: this.__input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommandInvocation.DocumentName', props);
    return resource.getResponseField('DocumentName') as unknown as string;
  }

  public get documentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommandInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetCommandInvocation.DocumentVersion'),
        outputPath: 'DocumentVersion',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          PluginName: this.__input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommandInvocation.DocumentVersion', props);
    return resource.getResponseField('DocumentVersion') as unknown as string;
  }

  public get pluginName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommandInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetCommandInvocation.PluginName'),
        outputPath: 'PluginName',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          PluginName: this.__input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommandInvocation.PluginName', props);
    return resource.getResponseField('PluginName') as unknown as string;
  }

  public get responseCode(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommandInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetCommandInvocation.ResponseCode'),
        outputPath: 'ResponseCode',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          PluginName: this.__input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommandInvocation.ResponseCode', props);
    return resource.getResponseField('ResponseCode') as unknown as number;
  }

  public get executionStartDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommandInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetCommandInvocation.ExecutionStartDateTime'),
        outputPath: 'ExecutionStartDateTime',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          PluginName: this.__input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommandInvocation.ExecutionStartDateTime', props);
    return resource.getResponseField('ExecutionStartDateTime') as unknown as string;
  }

  public get executionElapsedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommandInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetCommandInvocation.ExecutionElapsedTime'),
        outputPath: 'ExecutionElapsedTime',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          PluginName: this.__input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommandInvocation.ExecutionElapsedTime', props);
    return resource.getResponseField('ExecutionElapsedTime') as unknown as string;
  }

  public get executionEndDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommandInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetCommandInvocation.ExecutionEndDateTime'),
        outputPath: 'ExecutionEndDateTime',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          PluginName: this.__input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommandInvocation.ExecutionEndDateTime', props);
    return resource.getResponseField('ExecutionEndDateTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommandInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetCommandInvocation.Status'),
        outputPath: 'Status',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          PluginName: this.__input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommandInvocation.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get statusDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommandInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetCommandInvocation.StatusDetails'),
        outputPath: 'StatusDetails',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          PluginName: this.__input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommandInvocation.StatusDetails', props);
    return resource.getResponseField('StatusDetails') as unknown as string;
  }

  public get standardOutputContent(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommandInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetCommandInvocation.StandardOutputContent'),
        outputPath: 'StandardOutputContent',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          PluginName: this.__input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommandInvocation.StandardOutputContent', props);
    return resource.getResponseField('StandardOutputContent') as unknown as string;
  }

  public get standardOutputUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommandInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetCommandInvocation.StandardOutputUrl'),
        outputPath: 'StandardOutputUrl',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          PluginName: this.__input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommandInvocation.StandardOutputUrl', props);
    return resource.getResponseField('StandardOutputUrl') as unknown as string;
  }

  public get standardErrorContent(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommandInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetCommandInvocation.StandardErrorContent'),
        outputPath: 'StandardErrorContent',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          PluginName: this.__input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommandInvocation.StandardErrorContent', props);
    return resource.getResponseField('StandardErrorContent') as unknown as string;
  }

  public get standardErrorUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommandInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetCommandInvocation.StandardErrorUrl'),
        outputPath: 'StandardErrorUrl',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          PluginName: this.__input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommandInvocation.StandardErrorUrl', props);
    return resource.getResponseField('StandardErrorUrl') as unknown as string;
  }

  public get cloudWatchOutputConfig(): SSMResponsesFetchCommandInvocationCloudWatchOutputConfig {
    return new SSMResponsesFetchCommandInvocationCloudWatchOutputConfig(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesFetchCommandInvocationCloudWatchOutputConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetCommandInvocationRequest) {
  }

  public get cloudWatchLogGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommandInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetCommandInvocation.CloudWatchOutputConfig.CloudWatchLogGroupName'),
        outputPath: 'CloudWatchOutputConfig.CloudWatchLogGroupName',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          PluginName: this.__input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommandInvocation.CloudWatchOutputConfig.CloudWatchLogGroupName', props);
    return resource.getResponseField('CloudWatchOutputConfig.CloudWatchLogGroupName') as unknown as string;
  }

  public get cloudWatchOutputEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getCommandInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetCommandInvocation.CloudWatchOutputConfig.CloudWatchOutputEnabled'),
        outputPath: 'CloudWatchOutputConfig.CloudWatchOutputEnabled',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          PluginName: this.__input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetCommandInvocation.CloudWatchOutputConfig.CloudWatchOutputEnabled', props);
    return resource.getResponseField('CloudWatchOutputConfig.CloudWatchOutputEnabled') as unknown as boolean;
  }

}

export class SSMResponsesFetchConnectionStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetConnectionStatusRequest) {
  }

  public get target(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnectionStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetConnectionStatus.Target'),
        outputPath: 'Target',
        parameters: {
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnectionStatus.Target', props);
    return resource.getResponseField('Target') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnectionStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetConnectionStatus.Status'),
        outputPath: 'Status',
        parameters: {
          Target: this.__input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnectionStatus.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class SSMResponsesFetchDefaultPatchBaseline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetDefaultPatchBaselineRequest) {
  }

  public get baselineId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDefaultPatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetDefaultPatchBaseline.BaselineId'),
        outputPath: 'BaselineId',
        parameters: {
          OperatingSystem: this.__input.operatingSystem,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDefaultPatchBaseline.BaselineId', props);
    return resource.getResponseField('BaselineId') as unknown as string;
  }

  public get operatingSystem(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDefaultPatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetDefaultPatchBaseline.OperatingSystem'),
        outputPath: 'OperatingSystem',
        parameters: {
          OperatingSystem: this.__input.operatingSystem,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDefaultPatchBaseline.OperatingSystem', props);
    return resource.getResponseField('OperatingSystem') as unknown as string;
  }

}

export class SSMResponsesFetchDeployablePatchSnapshotForInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetDeployablePatchSnapshotForInstanceRequest) {
  }

  public get instanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployablePatchSnapshotForInstance',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetDeployablePatchSnapshotForInstance.InstanceId'),
        outputPath: 'InstanceId',
        parameters: {
          InstanceId: this.__input.instanceId,
          SnapshotId: this.__input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployablePatchSnapshotForInstance.InstanceId', props);
    return resource.getResponseField('InstanceId') as unknown as string;
  }

  public get snapshotId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployablePatchSnapshotForInstance',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetDeployablePatchSnapshotForInstance.SnapshotId'),
        outputPath: 'SnapshotId',
        parameters: {
          InstanceId: this.__input.instanceId,
          SnapshotId: this.__input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployablePatchSnapshotForInstance.SnapshotId', props);
    return resource.getResponseField('SnapshotId') as unknown as string;
  }

  public get snapshotDownloadUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployablePatchSnapshotForInstance',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetDeployablePatchSnapshotForInstance.SnapshotDownloadUrl'),
        outputPath: 'SnapshotDownloadUrl',
        parameters: {
          InstanceId: this.__input.instanceId,
          SnapshotId: this.__input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployablePatchSnapshotForInstance.SnapshotDownloadUrl', props);
    return resource.getResponseField('SnapshotDownloadUrl') as unknown as string;
  }

  public get product(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDeployablePatchSnapshotForInstance',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetDeployablePatchSnapshotForInstance.Product'),
        outputPath: 'Product',
        parameters: {
          InstanceId: this.__input.instanceId,
          SnapshotId: this.__input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDeployablePatchSnapshotForInstance.Product', props);
    return resource.getResponseField('Product') as unknown as string;
  }

}

export class SSMResponsesFetchDocument {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetDocumentRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetDocument.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get versionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetDocument.VersionName'),
        outputPath: 'VersionName',
        parameters: {
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.VersionName', props);
    return resource.getResponseField('VersionName') as unknown as string;
  }

  public get documentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetDocument.DocumentVersion'),
        outputPath: 'DocumentVersion',
        parameters: {
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.DocumentVersion', props);
    return resource.getResponseField('DocumentVersion') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetDocument.Status'),
        outputPath: 'Status',
        parameters: {
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get statusInformation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetDocument.StatusInformation'),
        outputPath: 'StatusInformation',
        parameters: {
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.StatusInformation', props);
    return resource.getResponseField('StatusInformation') as unknown as string;
  }

  public get content(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetDocument.Content'),
        outputPath: 'Content',
        parameters: {
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Content', props);
    return resource.getResponseField('Content') as unknown as string;
  }

  public get documentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetDocument.DocumentType'),
        outputPath: 'DocumentType',
        parameters: {
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.DocumentType', props);
    return resource.getResponseField('DocumentType') as unknown as string;
  }

  public get documentFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetDocument.DocumentFormat'),
        outputPath: 'DocumentFormat',
        parameters: {
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.DocumentFormat', props);
    return resource.getResponseField('DocumentFormat') as unknown as string;
  }

  public get requires(): shapes.SsmDocumentRequires[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetDocument.Requires'),
        outputPath: 'Requires',
        parameters: {
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.Requires', props);
    return resource.getResponseField('Requires') as unknown as shapes.SsmDocumentRequires[];
  }

  public get attachmentsContent(): shapes.SsmAttachmentContent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetDocument.AttachmentsContent'),
        outputPath: 'AttachmentsContent',
        parameters: {
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDocument.AttachmentsContent', props);
    return resource.getResponseField('AttachmentsContent') as unknown as shapes.SsmAttachmentContent[];
  }

}

export class SSMResponsesFetchInventory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetInventoryRequest) {
  }

  public get entities(): shapes.SsmInventoryResultEntity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInventory',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetInventory.Entities'),
        outputPath: 'Entities',
        parameters: {
          Filters: this.__input.filters,
          Aggregators: this.__input.aggregators,
          ResultAttributes: this.__input.resultAttributes,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInventory.Entities', props);
    return resource.getResponseField('Entities') as unknown as shapes.SsmInventoryResultEntity[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInventory',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetInventory.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: this.__input.filters,
          Aggregators: this.__input.aggregators,
          ResultAttributes: this.__input.resultAttributes,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInventory.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesFetchInventorySchema {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetInventorySchemaRequest) {
  }

  public get schemas(): shapes.SsmInventoryItemSchema[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInventorySchema',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetInventorySchema.Schemas'),
        outputPath: 'Schemas',
        parameters: {
          TypeName: this.__input.typeName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Aggregator: this.__input.aggregator,
          SubType: this.__input.subType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInventorySchema.Schemas', props);
    return resource.getResponseField('Schemas') as unknown as shapes.SsmInventoryItemSchema[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getInventorySchema',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetInventorySchema.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          TypeName: this.__input.typeName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Aggregator: this.__input.aggregator,
          SubType: this.__input.subType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetInventorySchema.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesFetchMaintenanceWindow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetMaintenanceWindowRequest) {
  }

  public get windowId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindow.WindowId'),
        outputPath: 'WindowId',
        parameters: {
          WindowId: this.__input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindow.WindowId', props);
    return resource.getResponseField('WindowId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindow.Name'),
        outputPath: 'Name',
        parameters: {
          WindowId: this.__input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindow.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindow.Description'),
        outputPath: 'Description',
        parameters: {
          WindowId: this.__input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindow.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get startDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindow.StartDate'),
        outputPath: 'StartDate',
        parameters: {
          WindowId: this.__input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindow.StartDate', props);
    return resource.getResponseField('StartDate') as unknown as string;
  }

  public get endDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindow.EndDate'),
        outputPath: 'EndDate',
        parameters: {
          WindowId: this.__input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindow.EndDate', props);
    return resource.getResponseField('EndDate') as unknown as string;
  }

  public get schedule(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindow.Schedule'),
        outputPath: 'Schedule',
        parameters: {
          WindowId: this.__input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindow.Schedule', props);
    return resource.getResponseField('Schedule') as unknown as string;
  }

  public get scheduleTimezone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindow.ScheduleTimezone'),
        outputPath: 'ScheduleTimezone',
        parameters: {
          WindowId: this.__input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindow.ScheduleTimezone', props);
    return resource.getResponseField('ScheduleTimezone') as unknown as string;
  }

  public get scheduleOffset(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindow.ScheduleOffset'),
        outputPath: 'ScheduleOffset',
        parameters: {
          WindowId: this.__input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindow.ScheduleOffset', props);
    return resource.getResponseField('ScheduleOffset') as unknown as number;
  }

  public get nextExecutionTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindow.NextExecutionTime'),
        outputPath: 'NextExecutionTime',
        parameters: {
          WindowId: this.__input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindow.NextExecutionTime', props);
    return resource.getResponseField('NextExecutionTime') as unknown as string;
  }

  public get duration(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindow.Duration'),
        outputPath: 'Duration',
        parameters: {
          WindowId: this.__input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindow.Duration', props);
    return resource.getResponseField('Duration') as unknown as number;
  }

  public get cutoff(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindow.Cutoff'),
        outputPath: 'Cutoff',
        parameters: {
          WindowId: this.__input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindow.Cutoff', props);
    return resource.getResponseField('Cutoff') as unknown as number;
  }

  public get allowUnassociatedTargets(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindow.AllowUnassociatedTargets'),
        outputPath: 'AllowUnassociatedTargets',
        parameters: {
          WindowId: this.__input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindow.AllowUnassociatedTargets', props);
    return resource.getResponseField('AllowUnassociatedTargets') as unknown as boolean;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindow.Enabled'),
        outputPath: 'Enabled',
        parameters: {
          WindowId: this.__input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindow.Enabled', props);
    return resource.getResponseField('Enabled') as unknown as boolean;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindow.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          WindowId: this.__input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindow.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get modifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindow.ModifiedDate'),
        outputPath: 'ModifiedDate',
        parameters: {
          WindowId: this.__input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindow.ModifiedDate', props);
    return resource.getResponseField('ModifiedDate') as unknown as string;
  }

}

export class SSMResponsesFetchMaintenanceWindowExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetMaintenanceWindowExecutionRequest) {
  }

  public get windowExecutionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecution.WindowExecutionId'),
        outputPath: 'WindowExecutionId',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecution.WindowExecutionId', props);
    return resource.getResponseField('WindowExecutionId') as unknown as string;
  }

  public get taskIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecution.TaskIds'),
        outputPath: 'TaskIds',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecution.TaskIds', props);
    return resource.getResponseField('TaskIds') as unknown as string[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecution.Status'),
        outputPath: 'Status',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecution.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get statusDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecution.StatusDetails'),
        outputPath: 'StatusDetails',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecution.StatusDetails', props);
    return resource.getResponseField('StatusDetails') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecution.StartTime'),
        outputPath: 'StartTime',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecution.StartTime', props);
    return resource.getResponseField('StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecution.EndTime'),
        outputPath: 'EndTime',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecution.EndTime', props);
    return resource.getResponseField('EndTime') as unknown as string;
  }

}

export class SSMResponsesFetchMaintenanceWindowExecutionTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetMaintenanceWindowExecutionTaskRequest) {
  }

  public get windowExecutionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTask.WindowExecutionId'),
        outputPath: 'WindowExecutionId',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTask.WindowExecutionId', props);
    return resource.getResponseField('WindowExecutionId') as unknown as string;
  }

  public get taskExecutionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTask.TaskExecutionId'),
        outputPath: 'TaskExecutionId',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTask.TaskExecutionId', props);
    return resource.getResponseField('TaskExecutionId') as unknown as string;
  }

  public get taskArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTask.TaskArn'),
        outputPath: 'TaskArn',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTask.TaskArn', props);
    return resource.getResponseField('TaskArn') as unknown as string;
  }

  public get serviceRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTask.ServiceRole'),
        outputPath: 'ServiceRole',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTask.ServiceRole', props);
    return resource.getResponseField('ServiceRole') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTask.Type'),
        outputPath: 'Type',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTask.Type', props);
    return resource.getResponseField('Type') as unknown as string;
  }

  public get taskParameters(): Record<string, shapes.SsmMaintenanceWindowTaskParameterValueExpression>[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTask.TaskParameters'),
        outputPath: 'TaskParameters',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTask.TaskParameters', props);
    return resource.getResponseField('TaskParameters') as unknown as Record<string, shapes.SsmMaintenanceWindowTaskParameterValueExpression>[];
  }

  public get priority(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTask.Priority'),
        outputPath: 'Priority',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTask.Priority', props);
    return resource.getResponseField('Priority') as unknown as number;
  }

  public get maxConcurrency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTask.MaxConcurrency'),
        outputPath: 'MaxConcurrency',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTask.MaxConcurrency', props);
    return resource.getResponseField('MaxConcurrency') as unknown as string;
  }

  public get maxErrors(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTask.MaxErrors'),
        outputPath: 'MaxErrors',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTask.MaxErrors', props);
    return resource.getResponseField('MaxErrors') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTask.Status'),
        outputPath: 'Status',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTask.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get statusDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTask.StatusDetails'),
        outputPath: 'StatusDetails',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTask.StatusDetails', props);
    return resource.getResponseField('StatusDetails') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTask.StartTime'),
        outputPath: 'StartTime',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTask.StartTime', props);
    return resource.getResponseField('StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTask.EndTime'),
        outputPath: 'EndTime',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTask.EndTime', props);
    return resource.getResponseField('EndTime') as unknown as string;
  }

}

export class SSMResponsesFetchMaintenanceWindowExecutionTaskInvocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetMaintenanceWindowExecutionTaskInvocationRequest) {
  }

  public get windowExecutionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTaskInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTaskInvocation.WindowExecutionId'),
        outputPath: 'WindowExecutionId',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
          InvocationId: this.__input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTaskInvocation.WindowExecutionId', props);
    return resource.getResponseField('WindowExecutionId') as unknown as string;
  }

  public get taskExecutionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTaskInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTaskInvocation.TaskExecutionId'),
        outputPath: 'TaskExecutionId',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
          InvocationId: this.__input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTaskInvocation.TaskExecutionId', props);
    return resource.getResponseField('TaskExecutionId') as unknown as string;
  }

  public get invocationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTaskInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTaskInvocation.InvocationId'),
        outputPath: 'InvocationId',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
          InvocationId: this.__input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTaskInvocation.InvocationId', props);
    return resource.getResponseField('InvocationId') as unknown as string;
  }

  public get executionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTaskInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTaskInvocation.ExecutionId'),
        outputPath: 'ExecutionId',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
          InvocationId: this.__input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTaskInvocation.ExecutionId', props);
    return resource.getResponseField('ExecutionId') as unknown as string;
  }

  public get taskType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTaskInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTaskInvocation.TaskType'),
        outputPath: 'TaskType',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
          InvocationId: this.__input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTaskInvocation.TaskType', props);
    return resource.getResponseField('TaskType') as unknown as string;
  }

  public get parameters(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTaskInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTaskInvocation.Parameters'),
        outputPath: 'Parameters',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
          InvocationId: this.__input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTaskInvocation.Parameters', props);
    return resource.getResponseField('Parameters') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTaskInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTaskInvocation.Status'),
        outputPath: 'Status',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
          InvocationId: this.__input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTaskInvocation.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get statusDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTaskInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTaskInvocation.StatusDetails'),
        outputPath: 'StatusDetails',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
          InvocationId: this.__input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTaskInvocation.StatusDetails', props);
    return resource.getResponseField('StatusDetails') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTaskInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTaskInvocation.StartTime'),
        outputPath: 'StartTime',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
          InvocationId: this.__input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTaskInvocation.StartTime', props);
    return resource.getResponseField('StartTime') as unknown as string;
  }

  public get endTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTaskInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTaskInvocation.EndTime'),
        outputPath: 'EndTime',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
          InvocationId: this.__input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTaskInvocation.EndTime', props);
    return resource.getResponseField('EndTime') as unknown as string;
  }

  public get ownerInformation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTaskInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTaskInvocation.OwnerInformation'),
        outputPath: 'OwnerInformation',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
          InvocationId: this.__input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTaskInvocation.OwnerInformation', props);
    return resource.getResponseField('OwnerInformation') as unknown as string;
  }

  public get windowTargetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowExecutionTaskInvocation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowExecutionTaskInvocation.WindowTargetId'),
        outputPath: 'WindowTargetId',
        parameters: {
          WindowExecutionId: this.__input.windowExecutionId,
          TaskId: this.__input.taskId,
          InvocationId: this.__input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowExecutionTaskInvocation.WindowTargetId', props);
    return resource.getResponseField('WindowTargetId') as unknown as string;
  }

}

export class SSMResponsesFetchMaintenanceWindowTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetMaintenanceWindowTaskRequest) {
  }

  public get windowId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.WindowId'),
        outputPath: 'WindowId',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.WindowId', props);
    return resource.getResponseField('WindowId') as unknown as string;
  }

  public get windowTaskId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.WindowTaskId'),
        outputPath: 'WindowTaskId',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.WindowTaskId', props);
    return resource.getResponseField('WindowTaskId') as unknown as string;
  }

  public get targets(): shapes.SsmTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.Targets'),
        outputPath: 'Targets',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.Targets', props);
    return resource.getResponseField('Targets') as unknown as shapes.SsmTarget[];
  }

  public get taskArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskArn'),
        outputPath: 'TaskArn',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskArn', props);
    return resource.getResponseField('TaskArn') as unknown as string;
  }

  public get serviceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.ServiceRoleArn'),
        outputPath: 'ServiceRoleArn',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.ServiceRoleArn', props);
    return resource.getResponseField('ServiceRoleArn') as unknown as string;
  }

  public get taskType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskType'),
        outputPath: 'TaskType',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskType', props);
    return resource.getResponseField('TaskType') as unknown as string;
  }

  public get taskParameters(): Record<string, shapes.SsmMaintenanceWindowTaskParameterValueExpression> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskParameters'),
        outputPath: 'TaskParameters',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskParameters', props);
    return resource.getResponseField('TaskParameters') as unknown as Record<string, shapes.SsmMaintenanceWindowTaskParameterValueExpression>;
  }

  public get taskInvocationParameters(): SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParameters {
    return new SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParameters(this.__scope, this.__resources, this.__input);
  }

  public get priority(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.Priority'),
        outputPath: 'Priority',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.Priority', props);
    return resource.getResponseField('Priority') as unknown as number;
  }

  public get maxConcurrency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.MaxConcurrency'),
        outputPath: 'MaxConcurrency',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.MaxConcurrency', props);
    return resource.getResponseField('MaxConcurrency') as unknown as string;
  }

  public get maxErrors(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.MaxErrors'),
        outputPath: 'MaxErrors',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.MaxErrors', props);
    return resource.getResponseField('MaxErrors') as unknown as string;
  }

  public get loggingInfo(): SSMResponsesFetchMaintenanceWindowTaskLoggingInfo {
    return new SSMResponsesFetchMaintenanceWindowTaskLoggingInfo(this.__scope, this.__resources, this.__input);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.Name'),
        outputPath: 'Name',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.Description'),
        outputPath: 'Description',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetMaintenanceWindowTaskRequest) {
  }

  public get runCommand(): SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand {
    return new SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand(this.__scope, this.__resources, this.__input);
  }

  public get automation(): SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersAutomation {
    return new SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersAutomation(this.__scope, this.__resources, this.__input);
  }

  public get stepFunctions(): SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersStepFunctions {
    return new SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersStepFunctions(this.__scope, this.__resources, this.__input);
  }

  public get lambda(): SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersLambda {
    return new SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersLambda(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetMaintenanceWindowTaskRequest) {
  }

  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.Comment'),
        outputPath: 'TaskInvocationParameters.RunCommand.Comment',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.Comment', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.Comment') as unknown as string;
  }

  public get cloudWatchOutputConfig(): SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig {
    return new SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig(this.__scope, this.__resources, this.__input);
  }

  public get documentHash(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.DocumentHash'),
        outputPath: 'TaskInvocationParameters.RunCommand.DocumentHash',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.DocumentHash', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.DocumentHash') as unknown as string;
  }

  public get documentHashType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.DocumentHashType'),
        outputPath: 'TaskInvocationParameters.RunCommand.DocumentHashType',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.DocumentHashType', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.DocumentHashType') as unknown as string;
  }

  public get documentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.DocumentVersion'),
        outputPath: 'TaskInvocationParameters.RunCommand.DocumentVersion',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.DocumentVersion', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.DocumentVersion') as unknown as string;
  }

  public get notificationConfig(): SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig {
    return new SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig(this.__scope, this.__resources, this.__input);
  }

  public get outputS3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.OutputS3BucketName'),
        outputPath: 'TaskInvocationParameters.RunCommand.OutputS3BucketName',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.OutputS3BucketName', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.OutputS3BucketName') as unknown as string;
  }

  public get outputS3KeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.OutputS3KeyPrefix'),
        outputPath: 'TaskInvocationParameters.RunCommand.OutputS3KeyPrefix',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.OutputS3KeyPrefix', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.OutputS3KeyPrefix') as unknown as string;
  }

  public get parameters(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.Parameters'),
        outputPath: 'TaskInvocationParameters.RunCommand.Parameters',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.Parameters', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.Parameters') as unknown as Record<string, string[]>;
  }

  public get serviceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.ServiceRoleArn'),
        outputPath: 'TaskInvocationParameters.RunCommand.ServiceRoleArn',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.ServiceRoleArn', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.ServiceRoleArn') as unknown as string;
  }

  public get timeoutSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.TimeoutSeconds'),
        outputPath: 'TaskInvocationParameters.RunCommand.TimeoutSeconds',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.TimeoutSeconds', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.TimeoutSeconds') as unknown as number;
  }

}

export class SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetMaintenanceWindowTaskRequest) {
  }

  public get cloudWatchLogGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchLogGroupName'),
        outputPath: 'TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchLogGroupName',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchLogGroupName', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchLogGroupName') as unknown as string;
  }

  public get cloudWatchOutputEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchOutputEnabled'),
        outputPath: 'TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchOutputEnabled',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchOutputEnabled', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchOutputEnabled') as unknown as boolean;
  }

}

export class SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetMaintenanceWindowTaskRequest) {
  }

  public get notificationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.NotificationConfig.NotificationArn'),
        outputPath: 'TaskInvocationParameters.RunCommand.NotificationConfig.NotificationArn',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.NotificationConfig.NotificationArn', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.NotificationConfig.NotificationArn') as unknown as string;
  }

  public get notificationEvents(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.NotificationConfig.NotificationEvents'),
        outputPath: 'TaskInvocationParameters.RunCommand.NotificationConfig.NotificationEvents',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.NotificationConfig.NotificationEvents', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.NotificationConfig.NotificationEvents') as unknown as string[];
  }

  public get notificationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.NotificationConfig.NotificationType'),
        outputPath: 'TaskInvocationParameters.RunCommand.NotificationConfig.NotificationType',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.NotificationConfig.NotificationType', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.NotificationConfig.NotificationType') as unknown as string;
  }

}

export class SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersAutomation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetMaintenanceWindowTaskRequest) {
  }

  public get documentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskInvocationParameters.Automation.DocumentVersion'),
        outputPath: 'TaskInvocationParameters.Automation.DocumentVersion',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskInvocationParameters.Automation.DocumentVersion', props);
    return resource.getResponseField('TaskInvocationParameters.Automation.DocumentVersion') as unknown as string;
  }

  public get parameters(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskInvocationParameters.Automation.Parameters'),
        outputPath: 'TaskInvocationParameters.Automation.Parameters',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskInvocationParameters.Automation.Parameters', props);
    return resource.getResponseField('TaskInvocationParameters.Automation.Parameters') as unknown as Record<string, string[]>;
  }

}

export class SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersStepFunctions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetMaintenanceWindowTaskRequest) {
  }

  public get input(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskInvocationParameters.StepFunctions.Input'),
        outputPath: 'TaskInvocationParameters.StepFunctions.Input',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskInvocationParameters.StepFunctions.Input', props);
    return resource.getResponseField('TaskInvocationParameters.StepFunctions.Input') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskInvocationParameters.StepFunctions.Name'),
        outputPath: 'TaskInvocationParameters.StepFunctions.Name',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskInvocationParameters.StepFunctions.Name', props);
    return resource.getResponseField('TaskInvocationParameters.StepFunctions.Name') as unknown as string;
  }

}

export class SSMResponsesFetchMaintenanceWindowTaskTaskInvocationParametersLambda {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetMaintenanceWindowTaskRequest) {
  }

  public get clientContext(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskInvocationParameters.Lambda.ClientContext'),
        outputPath: 'TaskInvocationParameters.Lambda.ClientContext',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskInvocationParameters.Lambda.ClientContext', props);
    return resource.getResponseField('TaskInvocationParameters.Lambda.ClientContext') as unknown as string;
  }

  public get qualifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskInvocationParameters.Lambda.Qualifier'),
        outputPath: 'TaskInvocationParameters.Lambda.Qualifier',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskInvocationParameters.Lambda.Qualifier', props);
    return resource.getResponseField('TaskInvocationParameters.Lambda.Qualifier') as unknown as string;
  }

  public get payload(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.TaskInvocationParameters.Lambda.Payload'),
        outputPath: 'TaskInvocationParameters.Lambda.Payload',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.TaskInvocationParameters.Lambda.Payload', props);
    return resource.getResponseField('TaskInvocationParameters.Lambda.Payload') as unknown as any;
  }

}

export class SSMResponsesFetchMaintenanceWindowTaskLoggingInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetMaintenanceWindowTaskRequest) {
  }

  public get s3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.LoggingInfo.S3BucketName'),
        outputPath: 'LoggingInfo.S3BucketName',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.LoggingInfo.S3BucketName', props);
    return resource.getResponseField('LoggingInfo.S3BucketName') as unknown as string;
  }

  public get s3KeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.LoggingInfo.S3KeyPrefix'),
        outputPath: 'LoggingInfo.S3KeyPrefix',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.LoggingInfo.S3KeyPrefix', props);
    return resource.getResponseField('LoggingInfo.S3KeyPrefix') as unknown as string;
  }

  public get s3Region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetMaintenanceWindowTask.LoggingInfo.S3Region'),
        outputPath: 'LoggingInfo.S3Region',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMaintenanceWindowTask.LoggingInfo.S3Region', props);
    return resource.getResponseField('LoggingInfo.S3Region') as unknown as string;
  }

}

export class SSMResponsesFetchOpsItem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetOpsItemRequest) {
  }

  public get opsItem(): SSMResponsesFetchOpsItemOpsItem {
    return new SSMResponsesFetchOpsItemOpsItem(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesFetchOpsItemOpsItem {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetOpsItemRequest) {
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpsItem',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetOpsItem.OpsItem.CreatedBy'),
        outputPath: 'OpsItem.CreatedBy',
        parameters: {
          OpsItemId: this.__input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpsItem.OpsItem.CreatedBy', props);
    return resource.getResponseField('OpsItem.CreatedBy') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpsItem',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetOpsItem.OpsItem.CreatedTime'),
        outputPath: 'OpsItem.CreatedTime',
        parameters: {
          OpsItemId: this.__input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpsItem.OpsItem.CreatedTime', props);
    return resource.getResponseField('OpsItem.CreatedTime') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpsItem',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetOpsItem.OpsItem.Description'),
        outputPath: 'OpsItem.Description',
        parameters: {
          OpsItemId: this.__input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpsItem.OpsItem.Description', props);
    return resource.getResponseField('OpsItem.Description') as unknown as string;
  }

  public get lastModifiedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpsItem',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetOpsItem.OpsItem.LastModifiedBy'),
        outputPath: 'OpsItem.LastModifiedBy',
        parameters: {
          OpsItemId: this.__input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpsItem.OpsItem.LastModifiedBy', props);
    return resource.getResponseField('OpsItem.LastModifiedBy') as unknown as string;
  }

  public get lastModifiedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpsItem',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetOpsItem.OpsItem.LastModifiedTime'),
        outputPath: 'OpsItem.LastModifiedTime',
        parameters: {
          OpsItemId: this.__input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpsItem.OpsItem.LastModifiedTime', props);
    return resource.getResponseField('OpsItem.LastModifiedTime') as unknown as string;
  }

  public get notifications(): shapes.SsmOpsItemNotification[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpsItem',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetOpsItem.OpsItem.Notifications'),
        outputPath: 'OpsItem.Notifications',
        parameters: {
          OpsItemId: this.__input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpsItem.OpsItem.Notifications', props);
    return resource.getResponseField('OpsItem.Notifications') as unknown as shapes.SsmOpsItemNotification[];
  }

  public get priority(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpsItem',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetOpsItem.OpsItem.Priority'),
        outputPath: 'OpsItem.Priority',
        parameters: {
          OpsItemId: this.__input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpsItem.OpsItem.Priority', props);
    return resource.getResponseField('OpsItem.Priority') as unknown as number;
  }

  public get relatedOpsItems(): shapes.SsmRelatedOpsItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpsItem',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetOpsItem.OpsItem.RelatedOpsItems'),
        outputPath: 'OpsItem.RelatedOpsItems',
        parameters: {
          OpsItemId: this.__input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpsItem.OpsItem.RelatedOpsItems', props);
    return resource.getResponseField('OpsItem.RelatedOpsItems') as unknown as shapes.SsmRelatedOpsItem[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpsItem',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetOpsItem.OpsItem.Status'),
        outputPath: 'OpsItem.Status',
        parameters: {
          OpsItemId: this.__input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpsItem.OpsItem.Status', props);
    return resource.getResponseField('OpsItem.Status') as unknown as string;
  }

  public get opsItemId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpsItem',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetOpsItem.OpsItem.OpsItemId'),
        outputPath: 'OpsItem.OpsItemId',
        parameters: {
          OpsItemId: this.__input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpsItem.OpsItem.OpsItemId', props);
    return resource.getResponseField('OpsItem.OpsItemId') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpsItem',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetOpsItem.OpsItem.Version'),
        outputPath: 'OpsItem.Version',
        parameters: {
          OpsItemId: this.__input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpsItem.OpsItem.Version', props);
    return resource.getResponseField('OpsItem.Version') as unknown as string;
  }

  public get title(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpsItem',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetOpsItem.OpsItem.Title'),
        outputPath: 'OpsItem.Title',
        parameters: {
          OpsItemId: this.__input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpsItem.OpsItem.Title', props);
    return resource.getResponseField('OpsItem.Title') as unknown as string;
  }

  public get source(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpsItem',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetOpsItem.OpsItem.Source'),
        outputPath: 'OpsItem.Source',
        parameters: {
          OpsItemId: this.__input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpsItem.OpsItem.Source', props);
    return resource.getResponseField('OpsItem.Source') as unknown as string;
  }

  public get operationalData(): Record<string, shapes.SsmOpsItemDataValue> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpsItem',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetOpsItem.OpsItem.OperationalData'),
        outputPath: 'OpsItem.OperationalData',
        parameters: {
          OpsItemId: this.__input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpsItem.OpsItem.OperationalData', props);
    return resource.getResponseField('OpsItem.OperationalData') as unknown as Record<string, shapes.SsmOpsItemDataValue>;
  }

  public get category(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpsItem',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetOpsItem.OpsItem.Category'),
        outputPath: 'OpsItem.Category',
        parameters: {
          OpsItemId: this.__input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpsItem.OpsItem.Category', props);
    return resource.getResponseField('OpsItem.Category') as unknown as string;
  }

  public get severity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpsItem',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetOpsItem.OpsItem.Severity'),
        outputPath: 'OpsItem.Severity',
        parameters: {
          OpsItemId: this.__input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpsItem.OpsItem.Severity', props);
    return resource.getResponseField('OpsItem.Severity') as unknown as string;
  }

}

export class SSMResponsesFetchOpsSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetOpsSummaryRequest) {
  }

  public get entities(): shapes.SsmOpsEntity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpsSummary',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetOpsSummary.Entities'),
        outputPath: 'Entities',
        parameters: {
          SyncName: this.__input.syncName,
          Filters: this.__input.filters,
          Aggregators: this.__input.aggregators,
          ResultAttributes: this.__input.resultAttributes,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpsSummary.Entities', props);
    return resource.getResponseField('Entities') as unknown as shapes.SsmOpsEntity[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getOpsSummary',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetOpsSummary.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SyncName: this.__input.syncName,
          Filters: this.__input.filters,
          Aggregators: this.__input.aggregators,
          ResultAttributes: this.__input.resultAttributes,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetOpsSummary.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesFetchParameter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetParameterRequest) {
  }

  public get parameter(): SSMResponsesFetchParameterParameter {
    return new SSMResponsesFetchParameterParameter(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesFetchParameterParameter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetParameterRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParameter',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetParameter.Parameter.Name'),
        outputPath: 'Parameter.Name',
        parameters: {
          Name: this.__input.name,
          WithDecryption: this.__input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParameter.Parameter.Name', props);
    return resource.getResponseField('Parameter.Name') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParameter',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetParameter.Parameter.Type'),
        outputPath: 'Parameter.Type',
        parameters: {
          Name: this.__input.name,
          WithDecryption: this.__input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParameter.Parameter.Type', props);
    return resource.getResponseField('Parameter.Type') as unknown as string;
  }

  public get value(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParameter',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetParameter.Parameter.Value'),
        outputPath: 'Parameter.Value',
        parameters: {
          Name: this.__input.name,
          WithDecryption: this.__input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParameter.Parameter.Value', props);
    return resource.getResponseField('Parameter.Value') as unknown as string;
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParameter',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetParameter.Parameter.Version'),
        outputPath: 'Parameter.Version',
        parameters: {
          Name: this.__input.name,
          WithDecryption: this.__input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParameter.Parameter.Version', props);
    return resource.getResponseField('Parameter.Version') as unknown as number;
  }

  public get selector(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParameter',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetParameter.Parameter.Selector'),
        outputPath: 'Parameter.Selector',
        parameters: {
          Name: this.__input.name,
          WithDecryption: this.__input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParameter.Parameter.Selector', props);
    return resource.getResponseField('Parameter.Selector') as unknown as string;
  }

  public get sourceResult(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParameter',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetParameter.Parameter.SourceResult'),
        outputPath: 'Parameter.SourceResult',
        parameters: {
          Name: this.__input.name,
          WithDecryption: this.__input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParameter.Parameter.SourceResult', props);
    return resource.getResponseField('Parameter.SourceResult') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParameter',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetParameter.Parameter.LastModifiedDate'),
        outputPath: 'Parameter.LastModifiedDate',
        parameters: {
          Name: this.__input.name,
          WithDecryption: this.__input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParameter.Parameter.LastModifiedDate', props);
    return resource.getResponseField('Parameter.LastModifiedDate') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParameter',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetParameter.Parameter.ARN'),
        outputPath: 'Parameter.ARN',
        parameters: {
          Name: this.__input.name,
          WithDecryption: this.__input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParameter.Parameter.ARN', props);
    return resource.getResponseField('Parameter.ARN') as unknown as string;
  }

  public get dataType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParameter',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetParameter.Parameter.DataType'),
        outputPath: 'Parameter.DataType',
        parameters: {
          Name: this.__input.name,
          WithDecryption: this.__input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParameter.Parameter.DataType', props);
    return resource.getResponseField('Parameter.DataType') as unknown as string;
  }

}

export class SSMResponsesFetchParameterHistory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetParameterHistoryRequest) {
  }

  public get parameters(): shapes.SsmParameterHistory[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParameterHistory',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetParameterHistory.Parameters'),
        outputPath: 'Parameters',
        parameters: {
          Name: this.__input.name,
          WithDecryption: this.__input.withDecryption,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParameterHistory.Parameters', props);
    return resource.getResponseField('Parameters') as unknown as shapes.SsmParameterHistory[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParameterHistory',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetParameterHistory.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Name: this.__input.name,
          WithDecryption: this.__input.withDecryption,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParameterHistory.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesFetchParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetParametersRequest) {
  }

  public get parameters(): shapes.SsmParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParameters',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetParameters.Parameters'),
        outputPath: 'Parameters',
        parameters: {
          Names: this.__input.names,
          WithDecryption: this.__input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParameters.Parameters', props);
    return resource.getResponseField('Parameters') as unknown as shapes.SsmParameter[];
  }

  public get invalidParameters(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParameters',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetParameters.InvalidParameters'),
        outputPath: 'InvalidParameters',
        parameters: {
          Names: this.__input.names,
          WithDecryption: this.__input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParameters.InvalidParameters', props);
    return resource.getResponseField('InvalidParameters') as unknown as string[];
  }

}

export class SSMResponsesFetchParametersByPath {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetParametersByPathRequest) {
  }

  public get parameters(): shapes.SsmParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParametersByPath',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetParametersByPath.Parameters'),
        outputPath: 'Parameters',
        parameters: {
          Path: this.__input.path,
          Recursive: this.__input.recursive,
          ParameterFilters: this.__input.parameterFilters,
          WithDecryption: this.__input.withDecryption,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParametersByPath.Parameters', props);
    return resource.getResponseField('Parameters') as unknown as shapes.SsmParameter[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getParametersByPath',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetParametersByPath.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Path: this.__input.path,
          Recursive: this.__input.recursive,
          ParameterFilters: this.__input.parameterFilters,
          WithDecryption: this.__input.withDecryption,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetParametersByPath.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesFetchPatchBaseline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetPatchBaselineRequest) {
  }

  public get baselineId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetPatchBaseline.BaselineId'),
        outputPath: 'BaselineId',
        parameters: {
          BaselineId: this.__input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPatchBaseline.BaselineId', props);
    return resource.getResponseField('BaselineId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetPatchBaseline.Name'),
        outputPath: 'Name',
        parameters: {
          BaselineId: this.__input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPatchBaseline.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get operatingSystem(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetPatchBaseline.OperatingSystem'),
        outputPath: 'OperatingSystem',
        parameters: {
          BaselineId: this.__input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPatchBaseline.OperatingSystem', props);
    return resource.getResponseField('OperatingSystem') as unknown as string;
  }

  public get globalFilters(): SSMResponsesFetchPatchBaselineGlobalFilters {
    return new SSMResponsesFetchPatchBaselineGlobalFilters(this.__scope, this.__resources, this.__input);
  }

  public get approvalRules(): SSMResponsesFetchPatchBaselineApprovalRules {
    return new SSMResponsesFetchPatchBaselineApprovalRules(this.__scope, this.__resources, this.__input);
  }

  public get approvedPatches(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetPatchBaseline.ApprovedPatches'),
        outputPath: 'ApprovedPatches',
        parameters: {
          BaselineId: this.__input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPatchBaseline.ApprovedPatches', props);
    return resource.getResponseField('ApprovedPatches') as unknown as string[];
  }

  public get approvedPatchesComplianceLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetPatchBaseline.ApprovedPatchesComplianceLevel'),
        outputPath: 'ApprovedPatchesComplianceLevel',
        parameters: {
          BaselineId: this.__input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPatchBaseline.ApprovedPatchesComplianceLevel', props);
    return resource.getResponseField('ApprovedPatchesComplianceLevel') as unknown as string;
  }

  public get approvedPatchesEnableNonSecurity(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetPatchBaseline.ApprovedPatchesEnableNonSecurity'),
        outputPath: 'ApprovedPatchesEnableNonSecurity',
        parameters: {
          BaselineId: this.__input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPatchBaseline.ApprovedPatchesEnableNonSecurity', props);
    return resource.getResponseField('ApprovedPatchesEnableNonSecurity') as unknown as boolean;
  }

  public get rejectedPatches(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetPatchBaseline.RejectedPatches'),
        outputPath: 'RejectedPatches',
        parameters: {
          BaselineId: this.__input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPatchBaseline.RejectedPatches', props);
    return resource.getResponseField('RejectedPatches') as unknown as string[];
  }

  public get rejectedPatchesAction(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetPatchBaseline.RejectedPatchesAction'),
        outputPath: 'RejectedPatchesAction',
        parameters: {
          BaselineId: this.__input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPatchBaseline.RejectedPatchesAction', props);
    return resource.getResponseField('RejectedPatchesAction') as unknown as string;
  }

  public get patchGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetPatchBaseline.PatchGroups'),
        outputPath: 'PatchGroups',
        parameters: {
          BaselineId: this.__input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPatchBaseline.PatchGroups', props);
    return resource.getResponseField('PatchGroups') as unknown as string[];
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetPatchBaseline.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          BaselineId: this.__input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPatchBaseline.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get modifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetPatchBaseline.ModifiedDate'),
        outputPath: 'ModifiedDate',
        parameters: {
          BaselineId: this.__input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPatchBaseline.ModifiedDate', props);
    return resource.getResponseField('ModifiedDate') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetPatchBaseline.Description'),
        outputPath: 'Description',
        parameters: {
          BaselineId: this.__input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPatchBaseline.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get sources(): shapes.SsmPatchSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetPatchBaseline.Sources'),
        outputPath: 'Sources',
        parameters: {
          BaselineId: this.__input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPatchBaseline.Sources', props);
    return resource.getResponseField('Sources') as unknown as shapes.SsmPatchSource[];
  }

}

export class SSMResponsesFetchPatchBaselineGlobalFilters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetPatchBaselineRequest) {
  }

  public get patchFilters(): shapes.SsmPatchFilter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetPatchBaseline.GlobalFilters.PatchFilters'),
        outputPath: 'GlobalFilters.PatchFilters',
        parameters: {
          BaselineId: this.__input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPatchBaseline.GlobalFilters.PatchFilters', props);
    return resource.getResponseField('GlobalFilters.PatchFilters') as unknown as shapes.SsmPatchFilter[];
  }

}

export class SSMResponsesFetchPatchBaselineApprovalRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetPatchBaselineRequest) {
  }

  public get patchRules(): shapes.SsmPatchRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetPatchBaseline.ApprovalRules.PatchRules'),
        outputPath: 'ApprovalRules.PatchRules',
        parameters: {
          BaselineId: this.__input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPatchBaseline.ApprovalRules.PatchRules', props);
    return resource.getResponseField('ApprovalRules.PatchRules') as unknown as shapes.SsmPatchRule[];
  }

}

export class SSMResponsesFetchPatchBaselineForPatchGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetPatchBaselineForPatchGroupRequest) {
  }

  public get baselineId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPatchBaselineForPatchGroup',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetPatchBaselineForPatchGroup.BaselineId'),
        outputPath: 'BaselineId',
        parameters: {
          PatchGroup: this.__input.patchGroup,
          OperatingSystem: this.__input.operatingSystem,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPatchBaselineForPatchGroup.BaselineId', props);
    return resource.getResponseField('BaselineId') as unknown as string;
  }

  public get patchGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPatchBaselineForPatchGroup',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetPatchBaselineForPatchGroup.PatchGroup'),
        outputPath: 'PatchGroup',
        parameters: {
          PatchGroup: this.__input.patchGroup,
          OperatingSystem: this.__input.operatingSystem,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPatchBaselineForPatchGroup.PatchGroup', props);
    return resource.getResponseField('PatchGroup') as unknown as string;
  }

  public get operatingSystem(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getPatchBaselineForPatchGroup',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetPatchBaselineForPatchGroup.OperatingSystem'),
        outputPath: 'OperatingSystem',
        parameters: {
          PatchGroup: this.__input.patchGroup,
          OperatingSystem: this.__input.operatingSystem,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetPatchBaselineForPatchGroup.OperatingSystem', props);
    return resource.getResponseField('OperatingSystem') as unknown as string;
  }

}

export class SSMResponsesFetchServiceSetting {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetServiceSettingRequest) {
  }

  public get serviceSetting(): SSMResponsesFetchServiceSettingServiceSetting {
    return new SSMResponsesFetchServiceSettingServiceSetting(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesFetchServiceSettingServiceSetting {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmGetServiceSettingRequest) {
  }

  public get settingId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceSetting',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetServiceSetting.ServiceSetting.SettingId'),
        outputPath: 'ServiceSetting.SettingId',
        parameters: {
          SettingId: this.__input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceSetting.ServiceSetting.SettingId', props);
    return resource.getResponseField('ServiceSetting.SettingId') as unknown as string;
  }

  public get settingValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceSetting',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetServiceSetting.ServiceSetting.SettingValue'),
        outputPath: 'ServiceSetting.SettingValue',
        parameters: {
          SettingId: this.__input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceSetting.ServiceSetting.SettingValue', props);
    return resource.getResponseField('ServiceSetting.SettingValue') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceSetting',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetServiceSetting.ServiceSetting.LastModifiedDate'),
        outputPath: 'ServiceSetting.LastModifiedDate',
        parameters: {
          SettingId: this.__input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceSetting.ServiceSetting.LastModifiedDate', props);
    return resource.getResponseField('ServiceSetting.LastModifiedDate') as unknown as string;
  }

  public get lastModifiedUser(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceSetting',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetServiceSetting.ServiceSetting.LastModifiedUser'),
        outputPath: 'ServiceSetting.LastModifiedUser',
        parameters: {
          SettingId: this.__input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceSetting.ServiceSetting.LastModifiedUser', props);
    return resource.getResponseField('ServiceSetting.LastModifiedUser') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceSetting',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetServiceSetting.ServiceSetting.ARN'),
        outputPath: 'ServiceSetting.ARN',
        parameters: {
          SettingId: this.__input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceSetting.ServiceSetting.ARN', props);
    return resource.getResponseField('ServiceSetting.ARN') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getServiceSetting',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.GetServiceSetting.ServiceSetting.Status'),
        outputPath: 'ServiceSetting.Status',
        parameters: {
          SettingId: this.__input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetServiceSetting.ServiceSetting.Status', props);
    return resource.getResponseField('ServiceSetting.Status') as unknown as string;
  }

}

export class SSMResponsesLabelParameterVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmLabelParameterVersionRequest) {
  }

  public get invalidLabels(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'labelParameterVersion',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.LabelParameterVersion.InvalidLabels'),
        outputPath: 'InvalidLabels',
        parameters: {
          Name: this.__input.name,
          ParameterVersion: this.__input.parameterVersion,
          Labels: this.__input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'LabelParameterVersion.InvalidLabels', props);
    return resource.getResponseField('InvalidLabels') as unknown as string[];
  }

  public get parameterVersion(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'labelParameterVersion',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.LabelParameterVersion.ParameterVersion'),
        outputPath: 'ParameterVersion',
        parameters: {
          Name: this.__input.name,
          ParameterVersion: this.__input.parameterVersion,
          Labels: this.__input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'LabelParameterVersion.ParameterVersion', props);
    return resource.getResponseField('ParameterVersion') as unknown as number;
  }

}

export class SSMResponsesListAssociationVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmListAssociationVersionsRequest) {
  }

  public get associationVersions(): shapes.SsmAssociationVersionInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssociationVersions',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListAssociationVersions.AssociationVersions'),
        outputPath: 'AssociationVersions',
        parameters: {
          AssociationId: this.__input.associationId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssociationVersions.AssociationVersions', props);
    return resource.getResponseField('AssociationVersions') as unknown as shapes.SsmAssociationVersionInfo[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssociationVersions',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListAssociationVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AssociationId: this.__input.associationId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssociationVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesListAssociations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmListAssociationsRequest) {
  }

  public get associations(): shapes.SsmAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssociations',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListAssociations.Associations'),
        outputPath: 'Associations',
        parameters: {
          AssociationFilterList: this.__input.associationFilterList,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssociations.Associations', props);
    return resource.getResponseField('Associations') as unknown as shapes.SsmAssociation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssociations',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListAssociations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AssociationFilterList: this.__input.associationFilterList,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssociations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesListCommandInvocations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmListCommandInvocationsRequest) {
  }

  public get commandInvocations(): shapes.SsmCommandInvocation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCommandInvocations',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListCommandInvocations.CommandInvocations'),
        outputPath: 'CommandInvocations',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
          Details: this.__input.details,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCommandInvocations.CommandInvocations', props);
    return resource.getResponseField('CommandInvocations') as unknown as shapes.SsmCommandInvocation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCommandInvocations',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListCommandInvocations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
          Details: this.__input.details,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCommandInvocations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesListCommands {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmListCommandsRequest) {
  }

  public get commands(): shapes.SsmCommand[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCommands',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListCommands.Commands'),
        outputPath: 'Commands',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCommands.Commands', props);
    return resource.getResponseField('Commands') as unknown as shapes.SsmCommand[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCommands',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListCommands.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          CommandId: this.__input.commandId,
          InstanceId: this.__input.instanceId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCommands.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesListComplianceItems {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmListComplianceItemsRequest) {
  }

  public get complianceItems(): shapes.SsmComplianceItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listComplianceItems',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListComplianceItems.ComplianceItems'),
        outputPath: 'ComplianceItems',
        parameters: {
          Filters: this.__input.filters,
          ResourceIds: this.__input.resourceIds,
          ResourceTypes: this.__input.resourceTypes,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListComplianceItems.ComplianceItems', props);
    return resource.getResponseField('ComplianceItems') as unknown as shapes.SsmComplianceItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listComplianceItems',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListComplianceItems.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: this.__input.filters,
          ResourceIds: this.__input.resourceIds,
          ResourceTypes: this.__input.resourceTypes,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListComplianceItems.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesListComplianceSummaries {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmListComplianceSummariesRequest) {
  }

  public get complianceSummaryItems(): shapes.SsmComplianceSummaryItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listComplianceSummaries',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListComplianceSummaries.ComplianceSummaryItems'),
        outputPath: 'ComplianceSummaryItems',
        parameters: {
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListComplianceSummaries.ComplianceSummaryItems', props);
    return resource.getResponseField('ComplianceSummaryItems') as unknown as shapes.SsmComplianceSummaryItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listComplianceSummaries',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListComplianceSummaries.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListComplianceSummaries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesListDocumentVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmListDocumentVersionsRequest) {
  }

  public get documentVersions(): shapes.SsmDocumentVersionInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDocumentVersions',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListDocumentVersions.DocumentVersions'),
        outputPath: 'DocumentVersions',
        parameters: {
          Name: this.__input.name,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDocumentVersions.DocumentVersions', props);
    return resource.getResponseField('DocumentVersions') as unknown as shapes.SsmDocumentVersionInfo[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDocumentVersions',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListDocumentVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Name: this.__input.name,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDocumentVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesListDocuments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmListDocumentsRequest) {
  }

  public get documentIdentifiers(): shapes.SsmDocumentIdentifier[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDocuments',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListDocuments.DocumentIdentifiers'),
        outputPath: 'DocumentIdentifiers',
        parameters: {
          DocumentFilterList: this.__input.documentFilterList,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDocuments.DocumentIdentifiers', props);
    return resource.getResponseField('DocumentIdentifiers') as unknown as shapes.SsmDocumentIdentifier[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDocuments',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListDocuments.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DocumentFilterList: this.__input.documentFilterList,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDocuments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesListInventoryEntries {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmListInventoryEntriesRequest) {
  }

  public get typeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInventoryEntries',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListInventoryEntries.TypeName'),
        outputPath: 'TypeName',
        parameters: {
          InstanceId: this.__input.instanceId,
          TypeName: this.__input.typeName,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInventoryEntries.TypeName', props);
    return resource.getResponseField('TypeName') as unknown as string;
  }

  public get instanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInventoryEntries',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListInventoryEntries.InstanceId'),
        outputPath: 'InstanceId',
        parameters: {
          InstanceId: this.__input.instanceId,
          TypeName: this.__input.typeName,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInventoryEntries.InstanceId', props);
    return resource.getResponseField('InstanceId') as unknown as string;
  }

  public get schemaVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInventoryEntries',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListInventoryEntries.SchemaVersion'),
        outputPath: 'SchemaVersion',
        parameters: {
          InstanceId: this.__input.instanceId,
          TypeName: this.__input.typeName,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInventoryEntries.SchemaVersion', props);
    return resource.getResponseField('SchemaVersion') as unknown as string;
  }

  public get captureTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInventoryEntries',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListInventoryEntries.CaptureTime'),
        outputPath: 'CaptureTime',
        parameters: {
          InstanceId: this.__input.instanceId,
          TypeName: this.__input.typeName,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInventoryEntries.CaptureTime', props);
    return resource.getResponseField('CaptureTime') as unknown as string;
  }

  public get entries(): Record<string, string>[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInventoryEntries',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListInventoryEntries.Entries'),
        outputPath: 'Entries',
        parameters: {
          InstanceId: this.__input.instanceId,
          TypeName: this.__input.typeName,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInventoryEntries.Entries', props);
    return resource.getResponseField('Entries') as unknown as Record<string, string>[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listInventoryEntries',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListInventoryEntries.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          InstanceId: this.__input.instanceId,
          TypeName: this.__input.typeName,
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListInventoryEntries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesListResourceComplianceSummaries {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmListResourceComplianceSummariesRequest) {
  }

  public get resourceComplianceSummaryItems(): shapes.SsmResourceComplianceSummaryItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceComplianceSummaries',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListResourceComplianceSummaries.ResourceComplianceSummaryItems'),
        outputPath: 'ResourceComplianceSummaryItems',
        parameters: {
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceComplianceSummaries.ResourceComplianceSummaryItems', props);
    return resource.getResponseField('ResourceComplianceSummaryItems') as unknown as shapes.SsmResourceComplianceSummaryItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceComplianceSummaries',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListResourceComplianceSummaries.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: this.__input.filters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceComplianceSummaries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesListResourceDataSync {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmListResourceDataSyncRequest) {
  }

  public get resourceDataSyncItems(): shapes.SsmResourceDataSyncItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceDataSync',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListResourceDataSync.ResourceDataSyncItems'),
        outputPath: 'ResourceDataSyncItems',
        parameters: {
          SyncType: this.__input.syncType,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceDataSync.ResourceDataSyncItems', props);
    return resource.getResponseField('ResourceDataSyncItems') as unknown as shapes.SsmResourceDataSyncItem[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResourceDataSync',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListResourceDataSync.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SyncType: this.__input.syncType,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResourceDataSync.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmListTagsForResourceRequest) {
  }

  public get tagList(): shapes.SsmTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ListTagsForResource.TagList'),
        outputPath: 'TagList',
        parameters: {
          ResourceType: this.__input.resourceType,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.TagList', props);
    return resource.getResponseField('TagList') as unknown as shapes.SsmTag[];
  }

}

export class SSMResponsesPutInventory {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmPutInventoryRequest) {
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putInventory',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.PutInventory.Message'),
        outputPath: 'Message',
        parameters: {
          InstanceId: this.__input.instanceId,
          Items: this.__input.items,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutInventory.Message', props);
    return resource.getResponseField('Message') as unknown as string;
  }

}

export class SSMResponsesPutParameter {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmPutParameterRequest) {
  }

  public get version(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putParameter',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.PutParameter.Version'),
        outputPath: 'Version',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Value: this.__input.value,
          Type: this.__input.type,
          KeyId: this.__input.keyId,
          Overwrite: this.__input.overwrite,
          AllowedPattern: this.__input.allowedPattern,
          Tags: this.__input.tags,
          Tier: this.__input.tier,
          Policies: this.__input.policies,
          DataType: this.__input.dataType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutParameter.Version', props);
    return resource.getResponseField('Version') as unknown as number;
  }

  public get tier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putParameter',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.PutParameter.Tier'),
        outputPath: 'Tier',
        parameters: {
          Name: this.__input.name,
          Description: this.__input.description,
          Value: this.__input.value,
          Type: this.__input.type,
          KeyId: this.__input.keyId,
          Overwrite: this.__input.overwrite,
          AllowedPattern: this.__input.allowedPattern,
          Tags: this.__input.tags,
          Tier: this.__input.tier,
          Policies: this.__input.policies,
          DataType: this.__input.dataType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutParameter.Tier', props);
    return resource.getResponseField('Tier') as unknown as string;
  }

}

export class SSMResponsesRegisterDefaultPatchBaseline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmRegisterDefaultPatchBaselineRequest) {
  }

  public get baselineId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerDefaultPatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.RegisterDefaultPatchBaseline.BaselineId'),
        outputPath: 'BaselineId',
        parameters: {
          BaselineId: this.__input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterDefaultPatchBaseline.BaselineId', props);
    return resource.getResponseField('BaselineId') as unknown as string;
  }

}

export class SSMResponsesRegisterPatchBaselineForPatchGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmRegisterPatchBaselineForPatchGroupRequest) {
  }

  public get baselineId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerPatchBaselineForPatchGroup',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.RegisterPatchBaselineForPatchGroup.BaselineId'),
        outputPath: 'BaselineId',
        parameters: {
          BaselineId: this.__input.baselineId,
          PatchGroup: this.__input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterPatchBaselineForPatchGroup.BaselineId', props);
    return resource.getResponseField('BaselineId') as unknown as string;
  }

  public get patchGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerPatchBaselineForPatchGroup',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.RegisterPatchBaselineForPatchGroup.PatchGroup'),
        outputPath: 'PatchGroup',
        parameters: {
          BaselineId: this.__input.baselineId,
          PatchGroup: this.__input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterPatchBaselineForPatchGroup.PatchGroup', props);
    return resource.getResponseField('PatchGroup') as unknown as string;
  }

}

export class SSMResponsesRegisterTargetWithMaintenanceWindow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmRegisterTargetWithMaintenanceWindowRequest) {
  }

  public get windowTargetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTargetWithMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.RegisterTargetWithMaintenanceWindow.WindowTargetId'),
        outputPath: 'WindowTargetId',
        parameters: {
          WindowId: this.__input.windowId,
          ResourceType: this.__input.resourceType,
          Targets: this.__input.targets,
          OwnerInformation: this.__input.ownerInformation,
          Name: this.__input.name,
          Description: this.__input.description,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTargetWithMaintenanceWindow.WindowTargetId', props);
    return resource.getResponseField('WindowTargetId') as unknown as string;
  }

}

export class SSMResponsesRegisterTaskWithMaintenanceWindow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmRegisterTaskWithMaintenanceWindowRequest) {
  }

  public get windowTaskId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerTaskWithMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.RegisterTaskWithMaintenanceWindow.WindowTaskId'),
        outputPath: 'WindowTaskId',
        parameters: {
          WindowId: this.__input.windowId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskType: this.__input.taskType,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          ClientToken: this.__input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterTaskWithMaintenanceWindow.WindowTaskId', props);
    return resource.getResponseField('WindowTaskId') as unknown as string;
  }

}

export class SSMResponsesResetServiceSetting {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmResetServiceSettingRequest) {
  }

  public get serviceSetting(): SSMResponsesResetServiceSettingServiceSetting {
    return new SSMResponsesResetServiceSettingServiceSetting(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesResetServiceSettingServiceSetting {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmResetServiceSettingRequest) {
  }

  public get settingId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetServiceSetting',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ResetServiceSetting.ServiceSetting.SettingId'),
        outputPath: 'ServiceSetting.SettingId',
        parameters: {
          SettingId: this.__input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetServiceSetting.ServiceSetting.SettingId', props);
    return resource.getResponseField('ServiceSetting.SettingId') as unknown as string;
  }

  public get settingValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetServiceSetting',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ResetServiceSetting.ServiceSetting.SettingValue'),
        outputPath: 'ServiceSetting.SettingValue',
        parameters: {
          SettingId: this.__input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetServiceSetting.ServiceSetting.SettingValue', props);
    return resource.getResponseField('ServiceSetting.SettingValue') as unknown as string;
  }

  public get lastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetServiceSetting',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ResetServiceSetting.ServiceSetting.LastModifiedDate'),
        outputPath: 'ServiceSetting.LastModifiedDate',
        parameters: {
          SettingId: this.__input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetServiceSetting.ServiceSetting.LastModifiedDate', props);
    return resource.getResponseField('ServiceSetting.LastModifiedDate') as unknown as string;
  }

  public get lastModifiedUser(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetServiceSetting',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ResetServiceSetting.ServiceSetting.LastModifiedUser'),
        outputPath: 'ServiceSetting.LastModifiedUser',
        parameters: {
          SettingId: this.__input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetServiceSetting.ServiceSetting.LastModifiedUser', props);
    return resource.getResponseField('ServiceSetting.LastModifiedUser') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetServiceSetting',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ResetServiceSetting.ServiceSetting.ARN'),
        outputPath: 'ServiceSetting.ARN',
        parameters: {
          SettingId: this.__input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetServiceSetting.ServiceSetting.ARN', props);
    return resource.getResponseField('ServiceSetting.ARN') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetServiceSetting',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ResetServiceSetting.ServiceSetting.Status'),
        outputPath: 'ServiceSetting.Status',
        parameters: {
          SettingId: this.__input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetServiceSetting.ServiceSetting.Status', props);
    return resource.getResponseField('ServiceSetting.Status') as unknown as string;
  }

}

export class SSMResponsesResumeSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmResumeSessionRequest) {
  }

  public get sessionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeSession',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ResumeSession.SessionId'),
        outputPath: 'SessionId',
        parameters: {
          SessionId: this.__input.sessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeSession.SessionId', props);
    return resource.getResponseField('SessionId') as unknown as string;
  }

  public get tokenValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeSession',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ResumeSession.TokenValue'),
        outputPath: 'TokenValue',
        parameters: {
          SessionId: this.__input.sessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeSession.TokenValue', props);
    return resource.getResponseField('TokenValue') as unknown as string;
  }

  public get streamUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resumeSession',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.ResumeSession.StreamUrl'),
        outputPath: 'StreamUrl',
        parameters: {
          SessionId: this.__input.sessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResumeSession.StreamUrl', props);
    return resource.getResponseField('StreamUrl') as unknown as string;
  }

}

export class SSMResponsesSendCommand {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmSendCommandRequest) {
  }

  public get command(): SSMResponsesSendCommandCommand {
    return new SSMResponsesSendCommandCommand(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesSendCommandCommand {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmSendCommandRequest) {
  }

  public get commandId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.CommandId'),
        outputPath: 'Command.CommandId',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.CommandId', props);
    return resource.getResponseField('Command.CommandId') as unknown as string;
  }

  public get documentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.DocumentName'),
        outputPath: 'Command.DocumentName',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.DocumentName', props);
    return resource.getResponseField('Command.DocumentName') as unknown as string;
  }

  public get documentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.DocumentVersion'),
        outputPath: 'Command.DocumentVersion',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.DocumentVersion', props);
    return resource.getResponseField('Command.DocumentVersion') as unknown as string;
  }

  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.Comment'),
        outputPath: 'Command.Comment',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.Comment', props);
    return resource.getResponseField('Command.Comment') as unknown as string;
  }

  public get expiresAfter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.ExpiresAfter'),
        outputPath: 'Command.ExpiresAfter',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.ExpiresAfter', props);
    return resource.getResponseField('Command.ExpiresAfter') as unknown as string;
  }

  public get parameters(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.Parameters'),
        outputPath: 'Command.Parameters',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.Parameters', props);
    return resource.getResponseField('Command.Parameters') as unknown as Record<string, string[]>;
  }

  public get instanceIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.InstanceIds'),
        outputPath: 'Command.InstanceIds',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.InstanceIds', props);
    return resource.getResponseField('Command.InstanceIds') as unknown as string[];
  }

  public get targets(): shapes.SsmTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.Targets'),
        outputPath: 'Command.Targets',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.Targets', props);
    return resource.getResponseField('Command.Targets') as unknown as shapes.SsmTarget[];
  }

  public get requestedDateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.RequestedDateTime'),
        outputPath: 'Command.RequestedDateTime',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.RequestedDateTime', props);
    return resource.getResponseField('Command.RequestedDateTime') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.Status'),
        outputPath: 'Command.Status',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.Status', props);
    return resource.getResponseField('Command.Status') as unknown as string;
  }

  public get statusDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.StatusDetails'),
        outputPath: 'Command.StatusDetails',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.StatusDetails', props);
    return resource.getResponseField('Command.StatusDetails') as unknown as string;
  }

  public get outputS3Region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.OutputS3Region'),
        outputPath: 'Command.OutputS3Region',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.OutputS3Region', props);
    return resource.getResponseField('Command.OutputS3Region') as unknown as string;
  }

  public get outputS3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.OutputS3BucketName'),
        outputPath: 'Command.OutputS3BucketName',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.OutputS3BucketName', props);
    return resource.getResponseField('Command.OutputS3BucketName') as unknown as string;
  }

  public get outputS3KeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.OutputS3KeyPrefix'),
        outputPath: 'Command.OutputS3KeyPrefix',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.OutputS3KeyPrefix', props);
    return resource.getResponseField('Command.OutputS3KeyPrefix') as unknown as string;
  }

  public get maxConcurrency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.MaxConcurrency'),
        outputPath: 'Command.MaxConcurrency',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.MaxConcurrency', props);
    return resource.getResponseField('Command.MaxConcurrency') as unknown as string;
  }

  public get maxErrors(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.MaxErrors'),
        outputPath: 'Command.MaxErrors',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.MaxErrors', props);
    return resource.getResponseField('Command.MaxErrors') as unknown as string;
  }

  public get targetCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.TargetCount'),
        outputPath: 'Command.TargetCount',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.TargetCount', props);
    return resource.getResponseField('Command.TargetCount') as unknown as number;
  }

  public get completedCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.CompletedCount'),
        outputPath: 'Command.CompletedCount',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.CompletedCount', props);
    return resource.getResponseField('Command.CompletedCount') as unknown as number;
  }

  public get errorCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.ErrorCount'),
        outputPath: 'Command.ErrorCount',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.ErrorCount', props);
    return resource.getResponseField('Command.ErrorCount') as unknown as number;
  }

  public get deliveryTimedOutCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.DeliveryTimedOutCount'),
        outputPath: 'Command.DeliveryTimedOutCount',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.DeliveryTimedOutCount', props);
    return resource.getResponseField('Command.DeliveryTimedOutCount') as unknown as number;
  }

  public get serviceRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.ServiceRole'),
        outputPath: 'Command.ServiceRole',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.ServiceRole', props);
    return resource.getResponseField('Command.ServiceRole') as unknown as string;
  }

  public get notificationConfig(): SSMResponsesSendCommandCommandNotificationConfig {
    return new SSMResponsesSendCommandCommandNotificationConfig(this.__scope, this.__resources, this.__input);
  }

  public get cloudWatchOutputConfig(): SSMResponsesSendCommandCommandCloudWatchOutputConfig {
    return new SSMResponsesSendCommandCommandCloudWatchOutputConfig(this.__scope, this.__resources, this.__input);
  }

  public get timeoutSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.TimeoutSeconds'),
        outputPath: 'Command.TimeoutSeconds',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.TimeoutSeconds', props);
    return resource.getResponseField('Command.TimeoutSeconds') as unknown as number;
  }

}

export class SSMResponsesSendCommandCommandNotificationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmSendCommandRequest) {
  }

  public get notificationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.NotificationConfig.NotificationArn'),
        outputPath: 'Command.NotificationConfig.NotificationArn',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.NotificationConfig.NotificationArn', props);
    return resource.getResponseField('Command.NotificationConfig.NotificationArn') as unknown as string;
  }

  public get notificationEvents(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.NotificationConfig.NotificationEvents'),
        outputPath: 'Command.NotificationConfig.NotificationEvents',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.NotificationConfig.NotificationEvents', props);
    return resource.getResponseField('Command.NotificationConfig.NotificationEvents') as unknown as string[];
  }

  public get notificationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.NotificationConfig.NotificationType'),
        outputPath: 'Command.NotificationConfig.NotificationType',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.NotificationConfig.NotificationType', props);
    return resource.getResponseField('Command.NotificationConfig.NotificationType') as unknown as string;
  }

}

export class SSMResponsesSendCommandCommandCloudWatchOutputConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmSendCommandRequest) {
  }

  public get cloudWatchLogGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.CloudWatchOutputConfig.CloudWatchLogGroupName'),
        outputPath: 'Command.CloudWatchOutputConfig.CloudWatchLogGroupName',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.CloudWatchOutputConfig.CloudWatchLogGroupName', props);
    return resource.getResponseField('Command.CloudWatchOutputConfig.CloudWatchLogGroupName') as unknown as string;
  }

  public get cloudWatchOutputEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sendCommand',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.SendCommand.Command.CloudWatchOutputConfig.CloudWatchOutputEnabled'),
        outputPath: 'Command.CloudWatchOutputConfig.CloudWatchOutputEnabled',
        parameters: {
          InstanceIds: this.__input.instanceIds,
          Targets: this.__input.targets,
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          DocumentHash: this.__input.documentHash,
          DocumentHashType: this.__input.documentHashType,
          TimeoutSeconds: this.__input.timeoutSeconds,
          Comment: this.__input.comment,
          Parameters: this.__input.parameters,
          OutputS3Region: this.__input.outputS3Region,
          OutputS3BucketName: this.__input.outputS3BucketName,
          OutputS3KeyPrefix: this.__input.outputS3KeyPrefix,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          ServiceRoleArn: this.__input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.__input.notificationConfig?.notificationArn,
            NotificationEvents: this.__input.notificationConfig?.notificationEvents,
            NotificationType: this.__input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.__input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.__input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SendCommand.Command.CloudWatchOutputConfig.CloudWatchOutputEnabled', props);
    return resource.getResponseField('Command.CloudWatchOutputConfig.CloudWatchOutputEnabled') as unknown as boolean;
  }

}

export class SSMResponsesStartAutomationExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmStartAutomationExecutionRequest) {
  }

  public get automationExecutionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startAutomationExecution',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.StartAutomationExecution.AutomationExecutionId'),
        outputPath: 'AutomationExecutionId',
        parameters: {
          DocumentName: this.__input.documentName,
          DocumentVersion: this.__input.documentVersion,
          Parameters: this.__input.parameters,
          ClientToken: this.__input.clientToken,
          Mode: this.__input.mode,
          TargetParameterName: this.__input.targetParameterName,
          Targets: this.__input.targets,
          TargetMaps: this.__input.targetMaps,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          TargetLocations: this.__input.targetLocations,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartAutomationExecution.AutomationExecutionId', props);
    return resource.getResponseField('AutomationExecutionId') as unknown as string;
  }

}

export class SSMResponsesStartSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmStartSessionRequest) {
  }

  public get sessionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSession',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.StartSession.SessionId'),
        outputPath: 'SessionId',
        parameters: {
          Target: this.__input.target,
          DocumentName: this.__input.documentName,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSession.SessionId', props);
    return resource.getResponseField('SessionId') as unknown as string;
  }

  public get tokenValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSession',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.StartSession.TokenValue'),
        outputPath: 'TokenValue',
        parameters: {
          Target: this.__input.target,
          DocumentName: this.__input.documentName,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSession.TokenValue', props);
    return resource.getResponseField('TokenValue') as unknown as string;
  }

  public get streamUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSession',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.StartSession.StreamUrl'),
        outputPath: 'StreamUrl',
        parameters: {
          Target: this.__input.target,
          DocumentName: this.__input.documentName,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSession.StreamUrl', props);
    return resource.getResponseField('StreamUrl') as unknown as string;
  }

}

export class SSMResponsesTerminateSession {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmTerminateSessionRequest) {
  }

  public get sessionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateSession',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.TerminateSession.SessionId'),
        outputPath: 'SessionId',
        parameters: {
          SessionId: this.__input.sessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateSession.SessionId', props);
    return resource.getResponseField('SessionId') as unknown as string;
  }

}

export class SSMResponsesUpdateAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateAssociationRequest) {
  }

  public get associationDescription(): SSMResponsesUpdateAssociationAssociationDescription {
    return new SSMResponsesUpdateAssociationAssociationDescription(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesUpdateAssociationAssociationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateAssociationRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.Name'),
        outputPath: 'AssociationDescription.Name',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.Name', props);
    return resource.getResponseField('AssociationDescription.Name') as unknown as string;
  }

  public get instanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.InstanceId'),
        outputPath: 'AssociationDescription.InstanceId',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.InstanceId', props);
    return resource.getResponseField('AssociationDescription.InstanceId') as unknown as string;
  }

  public get associationVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.AssociationVersion'),
        outputPath: 'AssociationDescription.AssociationVersion',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.AssociationVersion', props);
    return resource.getResponseField('AssociationDescription.AssociationVersion') as unknown as string;
  }

  public get date(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.Date'),
        outputPath: 'AssociationDescription.Date',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.Date', props);
    return resource.getResponseField('AssociationDescription.Date') as unknown as string;
  }

  public get lastUpdateAssociationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.LastUpdateAssociationDate'),
        outputPath: 'AssociationDescription.LastUpdateAssociationDate',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.LastUpdateAssociationDate', props);
    return resource.getResponseField('AssociationDescription.LastUpdateAssociationDate') as unknown as string;
  }

  public get status(): SSMResponsesUpdateAssociationAssociationDescriptionStatus {
    return new SSMResponsesUpdateAssociationAssociationDescriptionStatus(this.__scope, this.__resources, this.__input);
  }

  public get overview(): SSMResponsesUpdateAssociationAssociationDescriptionOverview {
    return new SSMResponsesUpdateAssociationAssociationDescriptionOverview(this.__scope, this.__resources, this.__input);
  }

  public get documentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.DocumentVersion'),
        outputPath: 'AssociationDescription.DocumentVersion',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.DocumentVersion', props);
    return resource.getResponseField('AssociationDescription.DocumentVersion') as unknown as string;
  }

  public get automationTargetParameterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.AutomationTargetParameterName'),
        outputPath: 'AssociationDescription.AutomationTargetParameterName',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.AutomationTargetParameterName', props);
    return resource.getResponseField('AssociationDescription.AutomationTargetParameterName') as unknown as string;
  }

  public get parameters(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.Parameters'),
        outputPath: 'AssociationDescription.Parameters',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.Parameters', props);
    return resource.getResponseField('AssociationDescription.Parameters') as unknown as Record<string, string[]>;
  }

  public get associationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.AssociationId'),
        outputPath: 'AssociationDescription.AssociationId',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.AssociationId', props);
    return resource.getResponseField('AssociationDescription.AssociationId') as unknown as string;
  }

  public get targets(): shapes.SsmTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.Targets'),
        outputPath: 'AssociationDescription.Targets',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.Targets', props);
    return resource.getResponseField('AssociationDescription.Targets') as unknown as shapes.SsmTarget[];
  }

  public get scheduleExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.ScheduleExpression'),
        outputPath: 'AssociationDescription.ScheduleExpression',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.ScheduleExpression', props);
    return resource.getResponseField('AssociationDescription.ScheduleExpression') as unknown as string;
  }

  public get outputLocation(): SSMResponsesUpdateAssociationAssociationDescriptionOutputLocation {
    return new SSMResponsesUpdateAssociationAssociationDescriptionOutputLocation(this.__scope, this.__resources, this.__input);
  }

  public get lastExecutionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.LastExecutionDate'),
        outputPath: 'AssociationDescription.LastExecutionDate',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.LastExecutionDate', props);
    return resource.getResponseField('AssociationDescription.LastExecutionDate') as unknown as string;
  }

  public get lastSuccessfulExecutionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.LastSuccessfulExecutionDate'),
        outputPath: 'AssociationDescription.LastSuccessfulExecutionDate',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.LastSuccessfulExecutionDate', props);
    return resource.getResponseField('AssociationDescription.LastSuccessfulExecutionDate') as unknown as string;
  }

  public get associationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.AssociationName'),
        outputPath: 'AssociationDescription.AssociationName',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.AssociationName', props);
    return resource.getResponseField('AssociationDescription.AssociationName') as unknown as string;
  }

  public get maxErrors(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.MaxErrors'),
        outputPath: 'AssociationDescription.MaxErrors',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.MaxErrors', props);
    return resource.getResponseField('AssociationDescription.MaxErrors') as unknown as string;
  }

  public get maxConcurrency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.MaxConcurrency'),
        outputPath: 'AssociationDescription.MaxConcurrency',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.MaxConcurrency', props);
    return resource.getResponseField('AssociationDescription.MaxConcurrency') as unknown as string;
  }

  public get complianceSeverity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.ComplianceSeverity'),
        outputPath: 'AssociationDescription.ComplianceSeverity',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.ComplianceSeverity', props);
    return resource.getResponseField('AssociationDescription.ComplianceSeverity') as unknown as string;
  }

  public get syncCompliance(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.SyncCompliance'),
        outputPath: 'AssociationDescription.SyncCompliance',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.SyncCompliance', props);
    return resource.getResponseField('AssociationDescription.SyncCompliance') as unknown as string;
  }

  public get applyOnlyAtCronInterval(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.ApplyOnlyAtCronInterval'),
        outputPath: 'AssociationDescription.ApplyOnlyAtCronInterval',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.ApplyOnlyAtCronInterval', props);
    return resource.getResponseField('AssociationDescription.ApplyOnlyAtCronInterval') as unknown as boolean;
  }

}

export class SSMResponsesUpdateAssociationAssociationDescriptionStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateAssociationRequest) {
  }

  public get date(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.Status.Date'),
        outputPath: 'AssociationDescription.Status.Date',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.Status.Date', props);
    return resource.getResponseField('AssociationDescription.Status.Date') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.Status.Name'),
        outputPath: 'AssociationDescription.Status.Name',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.Status.Name', props);
    return resource.getResponseField('AssociationDescription.Status.Name') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.Status.Message'),
        outputPath: 'AssociationDescription.Status.Message',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.Status.Message', props);
    return resource.getResponseField('AssociationDescription.Status.Message') as unknown as string;
  }

  public get additionalInfo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.Status.AdditionalInfo'),
        outputPath: 'AssociationDescription.Status.AdditionalInfo',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.Status.AdditionalInfo', props);
    return resource.getResponseField('AssociationDescription.Status.AdditionalInfo') as unknown as string;
  }

}

export class SSMResponsesUpdateAssociationAssociationDescriptionOverview {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateAssociationRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.Overview.Status'),
        outputPath: 'AssociationDescription.Overview.Status',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.Overview.Status', props);
    return resource.getResponseField('AssociationDescription.Overview.Status') as unknown as string;
  }

  public get detailedStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.Overview.DetailedStatus'),
        outputPath: 'AssociationDescription.Overview.DetailedStatus',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.Overview.DetailedStatus', props);
    return resource.getResponseField('AssociationDescription.Overview.DetailedStatus') as unknown as string;
  }

  public get associationStatusAggregatedCount(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.Overview.AssociationStatusAggregatedCount'),
        outputPath: 'AssociationDescription.Overview.AssociationStatusAggregatedCount',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.Overview.AssociationStatusAggregatedCount', props);
    return resource.getResponseField('AssociationDescription.Overview.AssociationStatusAggregatedCount') as unknown as Record<string, number>;
  }

}

export class SSMResponsesUpdateAssociationAssociationDescriptionOutputLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateAssociationRequest) {
  }

  public get s3Location(): SSMResponsesUpdateAssociationAssociationDescriptionOutputLocationS3Location {
    return new SSMResponsesUpdateAssociationAssociationDescriptionOutputLocationS3Location(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesUpdateAssociationAssociationDescriptionOutputLocationS3Location {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateAssociationRequest) {
  }

  public get outputS3Region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3Region'),
        outputPath: 'AssociationDescription.OutputLocation.S3Location.OutputS3Region',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3Region', props);
    return resource.getResponseField('AssociationDescription.OutputLocation.S3Location.OutputS3Region') as unknown as string;
  }

  public get outputS3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3BucketName'),
        outputPath: 'AssociationDescription.OutputLocation.S3Location.OutputS3BucketName',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3BucketName', props);
    return resource.getResponseField('AssociationDescription.OutputLocation.S3Location.OutputS3BucketName') as unknown as string;
  }

  public get outputS3KeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociation',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix'),
        outputPath: 'AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix',
        parameters: {
          AssociationId: this.__input.associationId,
          Parameters: this.__input.parameters,
          DocumentVersion: this.__input.documentVersion,
          ScheduleExpression: this.__input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.__input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.__input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.__input.name,
          Targets: this.__input.targets,
          AssociationName: this.__input.associationName,
          AssociationVersion: this.__input.associationVersion,
          AutomationTargetParameterName: this.__input.automationTargetParameterName,
          MaxErrors: this.__input.maxErrors,
          MaxConcurrency: this.__input.maxConcurrency,
          ComplianceSeverity: this.__input.complianceSeverity,
          SyncCompliance: this.__input.syncCompliance,
          ApplyOnlyAtCronInterval: this.__input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix', props);
    return resource.getResponseField('AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix') as unknown as string;
  }

}

export class SSMResponsesUpdateAssociationStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateAssociationStatusRequest) {
  }

  public get associationDescription(): SSMResponsesUpdateAssociationStatusAssociationDescription {
    return new SSMResponsesUpdateAssociationStatusAssociationDescription(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesUpdateAssociationStatusAssociationDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateAssociationStatusRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.Name'),
        outputPath: 'AssociationDescription.Name',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.Name', props);
    return resource.getResponseField('AssociationDescription.Name') as unknown as string;
  }

  public get instanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.InstanceId'),
        outputPath: 'AssociationDescription.InstanceId',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.InstanceId', props);
    return resource.getResponseField('AssociationDescription.InstanceId') as unknown as string;
  }

  public get associationVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.AssociationVersion'),
        outputPath: 'AssociationDescription.AssociationVersion',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.AssociationVersion', props);
    return resource.getResponseField('AssociationDescription.AssociationVersion') as unknown as string;
  }

  public get date(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.Date'),
        outputPath: 'AssociationDescription.Date',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.Date', props);
    return resource.getResponseField('AssociationDescription.Date') as unknown as string;
  }

  public get lastUpdateAssociationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.LastUpdateAssociationDate'),
        outputPath: 'AssociationDescription.LastUpdateAssociationDate',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.LastUpdateAssociationDate', props);
    return resource.getResponseField('AssociationDescription.LastUpdateAssociationDate') as unknown as string;
  }

  public get status(): SSMResponsesUpdateAssociationStatusAssociationDescriptionStatus {
    return new SSMResponsesUpdateAssociationStatusAssociationDescriptionStatus(this.__scope, this.__resources, this.__input);
  }

  public get overview(): SSMResponsesUpdateAssociationStatusAssociationDescriptionOverview {
    return new SSMResponsesUpdateAssociationStatusAssociationDescriptionOverview(this.__scope, this.__resources, this.__input);
  }

  public get documentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.DocumentVersion'),
        outputPath: 'AssociationDescription.DocumentVersion',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.DocumentVersion', props);
    return resource.getResponseField('AssociationDescription.DocumentVersion') as unknown as string;
  }

  public get automationTargetParameterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.AutomationTargetParameterName'),
        outputPath: 'AssociationDescription.AutomationTargetParameterName',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.AutomationTargetParameterName', props);
    return resource.getResponseField('AssociationDescription.AutomationTargetParameterName') as unknown as string;
  }

  public get parameters(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.Parameters'),
        outputPath: 'AssociationDescription.Parameters',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.Parameters', props);
    return resource.getResponseField('AssociationDescription.Parameters') as unknown as Record<string, string[]>;
  }

  public get associationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.AssociationId'),
        outputPath: 'AssociationDescription.AssociationId',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.AssociationId', props);
    return resource.getResponseField('AssociationDescription.AssociationId') as unknown as string;
  }

  public get targets(): shapes.SsmTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.Targets'),
        outputPath: 'AssociationDescription.Targets',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.Targets', props);
    return resource.getResponseField('AssociationDescription.Targets') as unknown as shapes.SsmTarget[];
  }

  public get scheduleExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.ScheduleExpression'),
        outputPath: 'AssociationDescription.ScheduleExpression',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.ScheduleExpression', props);
    return resource.getResponseField('AssociationDescription.ScheduleExpression') as unknown as string;
  }

  public get outputLocation(): SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocation {
    return new SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocation(this.__scope, this.__resources, this.__input);
  }

  public get lastExecutionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.LastExecutionDate'),
        outputPath: 'AssociationDescription.LastExecutionDate',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.LastExecutionDate', props);
    return resource.getResponseField('AssociationDescription.LastExecutionDate') as unknown as string;
  }

  public get lastSuccessfulExecutionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.LastSuccessfulExecutionDate'),
        outputPath: 'AssociationDescription.LastSuccessfulExecutionDate',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.LastSuccessfulExecutionDate', props);
    return resource.getResponseField('AssociationDescription.LastSuccessfulExecutionDate') as unknown as string;
  }

  public get associationName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.AssociationName'),
        outputPath: 'AssociationDescription.AssociationName',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.AssociationName', props);
    return resource.getResponseField('AssociationDescription.AssociationName') as unknown as string;
  }

  public get maxErrors(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.MaxErrors'),
        outputPath: 'AssociationDescription.MaxErrors',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.MaxErrors', props);
    return resource.getResponseField('AssociationDescription.MaxErrors') as unknown as string;
  }

  public get maxConcurrency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.MaxConcurrency'),
        outputPath: 'AssociationDescription.MaxConcurrency',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.MaxConcurrency', props);
    return resource.getResponseField('AssociationDescription.MaxConcurrency') as unknown as string;
  }

  public get complianceSeverity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.ComplianceSeverity'),
        outputPath: 'AssociationDescription.ComplianceSeverity',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.ComplianceSeverity', props);
    return resource.getResponseField('AssociationDescription.ComplianceSeverity') as unknown as string;
  }

  public get syncCompliance(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.SyncCompliance'),
        outputPath: 'AssociationDescription.SyncCompliance',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.SyncCompliance', props);
    return resource.getResponseField('AssociationDescription.SyncCompliance') as unknown as string;
  }

  public get applyOnlyAtCronInterval(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.ApplyOnlyAtCronInterval'),
        outputPath: 'AssociationDescription.ApplyOnlyAtCronInterval',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.ApplyOnlyAtCronInterval', props);
    return resource.getResponseField('AssociationDescription.ApplyOnlyAtCronInterval') as unknown as boolean;
  }

}

export class SSMResponsesUpdateAssociationStatusAssociationDescriptionStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateAssociationStatusRequest) {
  }

  public get date(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.Status.Date'),
        outputPath: 'AssociationDescription.Status.Date',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.Status.Date', props);
    return resource.getResponseField('AssociationDescription.Status.Date') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.Status.Name'),
        outputPath: 'AssociationDescription.Status.Name',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.Status.Name', props);
    return resource.getResponseField('AssociationDescription.Status.Name') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.Status.Message'),
        outputPath: 'AssociationDescription.Status.Message',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.Status.Message', props);
    return resource.getResponseField('AssociationDescription.Status.Message') as unknown as string;
  }

  public get additionalInfo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.Status.AdditionalInfo'),
        outputPath: 'AssociationDescription.Status.AdditionalInfo',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.Status.AdditionalInfo', props);
    return resource.getResponseField('AssociationDescription.Status.AdditionalInfo') as unknown as string;
  }

}

export class SSMResponsesUpdateAssociationStatusAssociationDescriptionOverview {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateAssociationStatusRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.Overview.Status'),
        outputPath: 'AssociationDescription.Overview.Status',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.Overview.Status', props);
    return resource.getResponseField('AssociationDescription.Overview.Status') as unknown as string;
  }

  public get detailedStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.Overview.DetailedStatus'),
        outputPath: 'AssociationDescription.Overview.DetailedStatus',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.Overview.DetailedStatus', props);
    return resource.getResponseField('AssociationDescription.Overview.DetailedStatus') as unknown as string;
  }

  public get associationStatusAggregatedCount(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.Overview.AssociationStatusAggregatedCount'),
        outputPath: 'AssociationDescription.Overview.AssociationStatusAggregatedCount',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.Overview.AssociationStatusAggregatedCount', props);
    return resource.getResponseField('AssociationDescription.Overview.AssociationStatusAggregatedCount') as unknown as Record<string, number>;
  }

}

export class SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateAssociationStatusRequest) {
  }

  public get s3Location(): SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocationS3Location {
    return new SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocationS3Location(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesUpdateAssociationStatusAssociationDescriptionOutputLocationS3Location {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateAssociationStatusRequest) {
  }

  public get outputS3Region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.OutputLocation.S3Location.OutputS3Region'),
        outputPath: 'AssociationDescription.OutputLocation.S3Location.OutputS3Region',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.OutputLocation.S3Location.OutputS3Region', props);
    return resource.getResponseField('AssociationDescription.OutputLocation.S3Location.OutputS3Region') as unknown as string;
  }

  public get outputS3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.OutputLocation.S3Location.OutputS3BucketName'),
        outputPath: 'AssociationDescription.OutputLocation.S3Location.OutputS3BucketName',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.OutputLocation.S3Location.OutputS3BucketName', props);
    return resource.getResponseField('AssociationDescription.OutputLocation.S3Location.OutputS3BucketName') as unknown as string;
  }

  public get outputS3KeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAssociationStatus',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateAssociationStatus.AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix'),
        outputPath: 'AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix',
        parameters: {
          Name: this.__input.name,
          InstanceId: this.__input.instanceId,
          AssociationStatus: {
            Date: this.__input.associationStatus.date,
            Name: this.__input.associationStatus.name,
            Message: this.__input.associationStatus.message,
            AdditionalInfo: this.__input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAssociationStatus.AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix', props);
    return resource.getResponseField('AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix') as unknown as string;
  }

}

export class SSMResponsesUpdateDocument {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateDocumentRequest) {
  }

  public get documentDescription(): SSMResponsesUpdateDocumentDocumentDescription {
    return new SSMResponsesUpdateDocumentDocumentDescription(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesUpdateDocumentDocumentDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateDocumentRequest) {
  }

  public get sha1(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.Sha1'),
        outputPath: 'DocumentDescription.Sha1',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.Sha1', props);
    return resource.getResponseField('DocumentDescription.Sha1') as unknown as string;
  }

  public get hash(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.Hash'),
        outputPath: 'DocumentDescription.Hash',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.Hash', props);
    return resource.getResponseField('DocumentDescription.Hash') as unknown as string;
  }

  public get hashType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.HashType'),
        outputPath: 'DocumentDescription.HashType',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.HashType', props);
    return resource.getResponseField('DocumentDescription.HashType') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.Name'),
        outputPath: 'DocumentDescription.Name',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.Name', props);
    return resource.getResponseField('DocumentDescription.Name') as unknown as string;
  }

  public get versionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.VersionName'),
        outputPath: 'DocumentDescription.VersionName',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.VersionName', props);
    return resource.getResponseField('DocumentDescription.VersionName') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.Owner'),
        outputPath: 'DocumentDescription.Owner',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.Owner', props);
    return resource.getResponseField('DocumentDescription.Owner') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.CreatedDate'),
        outputPath: 'DocumentDescription.CreatedDate',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.CreatedDate', props);
    return resource.getResponseField('DocumentDescription.CreatedDate') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.Status'),
        outputPath: 'DocumentDescription.Status',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.Status', props);
    return resource.getResponseField('DocumentDescription.Status') as unknown as string;
  }

  public get statusInformation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.StatusInformation'),
        outputPath: 'DocumentDescription.StatusInformation',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.StatusInformation', props);
    return resource.getResponseField('DocumentDescription.StatusInformation') as unknown as string;
  }

  public get documentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.DocumentVersion'),
        outputPath: 'DocumentDescription.DocumentVersion',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.DocumentVersion', props);
    return resource.getResponseField('DocumentDescription.DocumentVersion') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.Description'),
        outputPath: 'DocumentDescription.Description',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.Description', props);
    return resource.getResponseField('DocumentDescription.Description') as unknown as string;
  }

  public get parameters(): shapes.SsmDocumentParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.Parameters'),
        outputPath: 'DocumentDescription.Parameters',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.Parameters', props);
    return resource.getResponseField('DocumentDescription.Parameters') as unknown as shapes.SsmDocumentParameter[];
  }

  public get platformTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.PlatformTypes'),
        outputPath: 'DocumentDescription.PlatformTypes',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.PlatformTypes', props);
    return resource.getResponseField('DocumentDescription.PlatformTypes') as unknown as string[];
  }

  public get documentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.DocumentType'),
        outputPath: 'DocumentDescription.DocumentType',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.DocumentType', props);
    return resource.getResponseField('DocumentDescription.DocumentType') as unknown as string;
  }

  public get schemaVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.SchemaVersion'),
        outputPath: 'DocumentDescription.SchemaVersion',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.SchemaVersion', props);
    return resource.getResponseField('DocumentDescription.SchemaVersion') as unknown as string;
  }

  public get latestVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.LatestVersion'),
        outputPath: 'DocumentDescription.LatestVersion',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.LatestVersion', props);
    return resource.getResponseField('DocumentDescription.LatestVersion') as unknown as string;
  }

  public get defaultVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.DefaultVersion'),
        outputPath: 'DocumentDescription.DefaultVersion',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.DefaultVersion', props);
    return resource.getResponseField('DocumentDescription.DefaultVersion') as unknown as string;
  }

  public get documentFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.DocumentFormat'),
        outputPath: 'DocumentDescription.DocumentFormat',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.DocumentFormat', props);
    return resource.getResponseField('DocumentDescription.DocumentFormat') as unknown as string;
  }

  public get targetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.TargetType'),
        outputPath: 'DocumentDescription.TargetType',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.TargetType', props);
    return resource.getResponseField('DocumentDescription.TargetType') as unknown as string;
  }

  public get tags(): shapes.SsmTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.Tags'),
        outputPath: 'DocumentDescription.Tags',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.Tags', props);
    return resource.getResponseField('DocumentDescription.Tags') as unknown as shapes.SsmTag[];
  }

  public get attachmentsInformation(): shapes.SsmAttachmentInformation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.AttachmentsInformation'),
        outputPath: 'DocumentDescription.AttachmentsInformation',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.AttachmentsInformation', props);
    return resource.getResponseField('DocumentDescription.AttachmentsInformation') as unknown as shapes.SsmAttachmentInformation[];
  }

  public get requires(): shapes.SsmDocumentRequires[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocument',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocument.DocumentDescription.Requires'),
        outputPath: 'DocumentDescription.Requires',
        parameters: {
          Content: this.__input.content,
          Attachments: this.__input.attachments,
          Name: this.__input.name,
          VersionName: this.__input.versionName,
          DocumentVersion: this.__input.documentVersion,
          DocumentFormat: this.__input.documentFormat,
          TargetType: this.__input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocument.DocumentDescription.Requires', props);
    return resource.getResponseField('DocumentDescription.Requires') as unknown as shapes.SsmDocumentRequires[];
  }

}

export class SSMResponsesUpdateDocumentDefaultVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateDocumentDefaultVersionRequest) {
  }

  public get description(): SSMResponsesUpdateDocumentDefaultVersionDescription {
    return new SSMResponsesUpdateDocumentDefaultVersionDescription(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesUpdateDocumentDefaultVersionDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateDocumentDefaultVersionRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocumentDefaultVersion',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocumentDefaultVersion.Description.Name'),
        outputPath: 'Description.Name',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocumentDefaultVersion.Description.Name', props);
    return resource.getResponseField('Description.Name') as unknown as string;
  }

  public get defaultVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocumentDefaultVersion',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocumentDefaultVersion.Description.DefaultVersion'),
        outputPath: 'Description.DefaultVersion',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocumentDefaultVersion.Description.DefaultVersion', props);
    return resource.getResponseField('Description.DefaultVersion') as unknown as string;
  }

  public get defaultVersionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDocumentDefaultVersion',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateDocumentDefaultVersion.Description.DefaultVersionName'),
        outputPath: 'Description.DefaultVersionName',
        parameters: {
          Name: this.__input.name,
          DocumentVersion: this.__input.documentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDocumentDefaultVersion.Description.DefaultVersionName', props);
    return resource.getResponseField('Description.DefaultVersionName') as unknown as string;
  }

}

export class SSMResponsesUpdateMaintenanceWindow {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateMaintenanceWindowRequest) {
  }

  public get windowId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindow.WindowId'),
        outputPath: 'WindowId',
        parameters: {
          WindowId: this.__input.windowId,
          Name: this.__input.name,
          Description: this.__input.description,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
          Schedule: this.__input.schedule,
          ScheduleTimezone: this.__input.scheduleTimezone,
          ScheduleOffset: this.__input.scheduleOffset,
          Duration: this.__input.duration,
          Cutoff: this.__input.cutoff,
          AllowUnassociatedTargets: this.__input.allowUnassociatedTargets,
          Enabled: this.__input.enabled,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindow.WindowId', props);
    return resource.getResponseField('WindowId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindow.Name'),
        outputPath: 'Name',
        parameters: {
          WindowId: this.__input.windowId,
          Name: this.__input.name,
          Description: this.__input.description,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
          Schedule: this.__input.schedule,
          ScheduleTimezone: this.__input.scheduleTimezone,
          ScheduleOffset: this.__input.scheduleOffset,
          Duration: this.__input.duration,
          Cutoff: this.__input.cutoff,
          AllowUnassociatedTargets: this.__input.allowUnassociatedTargets,
          Enabled: this.__input.enabled,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindow.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindow.Description'),
        outputPath: 'Description',
        parameters: {
          WindowId: this.__input.windowId,
          Name: this.__input.name,
          Description: this.__input.description,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
          Schedule: this.__input.schedule,
          ScheduleTimezone: this.__input.scheduleTimezone,
          ScheduleOffset: this.__input.scheduleOffset,
          Duration: this.__input.duration,
          Cutoff: this.__input.cutoff,
          AllowUnassociatedTargets: this.__input.allowUnassociatedTargets,
          Enabled: this.__input.enabled,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindow.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get startDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindow.StartDate'),
        outputPath: 'StartDate',
        parameters: {
          WindowId: this.__input.windowId,
          Name: this.__input.name,
          Description: this.__input.description,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
          Schedule: this.__input.schedule,
          ScheduleTimezone: this.__input.scheduleTimezone,
          ScheduleOffset: this.__input.scheduleOffset,
          Duration: this.__input.duration,
          Cutoff: this.__input.cutoff,
          AllowUnassociatedTargets: this.__input.allowUnassociatedTargets,
          Enabled: this.__input.enabled,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindow.StartDate', props);
    return resource.getResponseField('StartDate') as unknown as string;
  }

  public get endDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindow.EndDate'),
        outputPath: 'EndDate',
        parameters: {
          WindowId: this.__input.windowId,
          Name: this.__input.name,
          Description: this.__input.description,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
          Schedule: this.__input.schedule,
          ScheduleTimezone: this.__input.scheduleTimezone,
          ScheduleOffset: this.__input.scheduleOffset,
          Duration: this.__input.duration,
          Cutoff: this.__input.cutoff,
          AllowUnassociatedTargets: this.__input.allowUnassociatedTargets,
          Enabled: this.__input.enabled,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindow.EndDate', props);
    return resource.getResponseField('EndDate') as unknown as string;
  }

  public get schedule(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindow.Schedule'),
        outputPath: 'Schedule',
        parameters: {
          WindowId: this.__input.windowId,
          Name: this.__input.name,
          Description: this.__input.description,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
          Schedule: this.__input.schedule,
          ScheduleTimezone: this.__input.scheduleTimezone,
          ScheduleOffset: this.__input.scheduleOffset,
          Duration: this.__input.duration,
          Cutoff: this.__input.cutoff,
          AllowUnassociatedTargets: this.__input.allowUnassociatedTargets,
          Enabled: this.__input.enabled,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindow.Schedule', props);
    return resource.getResponseField('Schedule') as unknown as string;
  }

  public get scheduleTimezone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindow.ScheduleTimezone'),
        outputPath: 'ScheduleTimezone',
        parameters: {
          WindowId: this.__input.windowId,
          Name: this.__input.name,
          Description: this.__input.description,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
          Schedule: this.__input.schedule,
          ScheduleTimezone: this.__input.scheduleTimezone,
          ScheduleOffset: this.__input.scheduleOffset,
          Duration: this.__input.duration,
          Cutoff: this.__input.cutoff,
          AllowUnassociatedTargets: this.__input.allowUnassociatedTargets,
          Enabled: this.__input.enabled,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindow.ScheduleTimezone', props);
    return resource.getResponseField('ScheduleTimezone') as unknown as string;
  }

  public get scheduleOffset(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindow.ScheduleOffset'),
        outputPath: 'ScheduleOffset',
        parameters: {
          WindowId: this.__input.windowId,
          Name: this.__input.name,
          Description: this.__input.description,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
          Schedule: this.__input.schedule,
          ScheduleTimezone: this.__input.scheduleTimezone,
          ScheduleOffset: this.__input.scheduleOffset,
          Duration: this.__input.duration,
          Cutoff: this.__input.cutoff,
          AllowUnassociatedTargets: this.__input.allowUnassociatedTargets,
          Enabled: this.__input.enabled,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindow.ScheduleOffset', props);
    return resource.getResponseField('ScheduleOffset') as unknown as number;
  }

  public get duration(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindow.Duration'),
        outputPath: 'Duration',
        parameters: {
          WindowId: this.__input.windowId,
          Name: this.__input.name,
          Description: this.__input.description,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
          Schedule: this.__input.schedule,
          ScheduleTimezone: this.__input.scheduleTimezone,
          ScheduleOffset: this.__input.scheduleOffset,
          Duration: this.__input.duration,
          Cutoff: this.__input.cutoff,
          AllowUnassociatedTargets: this.__input.allowUnassociatedTargets,
          Enabled: this.__input.enabled,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindow.Duration', props);
    return resource.getResponseField('Duration') as unknown as number;
  }

  public get cutoff(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindow.Cutoff'),
        outputPath: 'Cutoff',
        parameters: {
          WindowId: this.__input.windowId,
          Name: this.__input.name,
          Description: this.__input.description,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
          Schedule: this.__input.schedule,
          ScheduleTimezone: this.__input.scheduleTimezone,
          ScheduleOffset: this.__input.scheduleOffset,
          Duration: this.__input.duration,
          Cutoff: this.__input.cutoff,
          AllowUnassociatedTargets: this.__input.allowUnassociatedTargets,
          Enabled: this.__input.enabled,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindow.Cutoff', props);
    return resource.getResponseField('Cutoff') as unknown as number;
  }

  public get allowUnassociatedTargets(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindow.AllowUnassociatedTargets'),
        outputPath: 'AllowUnassociatedTargets',
        parameters: {
          WindowId: this.__input.windowId,
          Name: this.__input.name,
          Description: this.__input.description,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
          Schedule: this.__input.schedule,
          ScheduleTimezone: this.__input.scheduleTimezone,
          ScheduleOffset: this.__input.scheduleOffset,
          Duration: this.__input.duration,
          Cutoff: this.__input.cutoff,
          AllowUnassociatedTargets: this.__input.allowUnassociatedTargets,
          Enabled: this.__input.enabled,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindow.AllowUnassociatedTargets', props);
    return resource.getResponseField('AllowUnassociatedTargets') as unknown as boolean;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindow',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindow.Enabled'),
        outputPath: 'Enabled',
        parameters: {
          WindowId: this.__input.windowId,
          Name: this.__input.name,
          Description: this.__input.description,
          StartDate: this.__input.startDate,
          EndDate: this.__input.endDate,
          Schedule: this.__input.schedule,
          ScheduleTimezone: this.__input.scheduleTimezone,
          ScheduleOffset: this.__input.scheduleOffset,
          Duration: this.__input.duration,
          Cutoff: this.__input.cutoff,
          AllowUnassociatedTargets: this.__input.allowUnassociatedTargets,
          Enabled: this.__input.enabled,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindow.Enabled', props);
    return resource.getResponseField('Enabled') as unknown as boolean;
  }

}

export class SSMResponsesUpdateMaintenanceWindowTarget {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateMaintenanceWindowTargetRequest) {
  }

  public get windowId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTarget',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTarget.WindowId'),
        outputPath: 'WindowId',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTargetId: this.__input.windowTargetId,
          Targets: this.__input.targets,
          OwnerInformation: this.__input.ownerInformation,
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTarget.WindowId', props);
    return resource.getResponseField('WindowId') as unknown as string;
  }

  public get windowTargetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTarget',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTarget.WindowTargetId'),
        outputPath: 'WindowTargetId',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTargetId: this.__input.windowTargetId,
          Targets: this.__input.targets,
          OwnerInformation: this.__input.ownerInformation,
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTarget.WindowTargetId', props);
    return resource.getResponseField('WindowTargetId') as unknown as string;
  }

  public get targets(): shapes.SsmTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTarget',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTarget.Targets'),
        outputPath: 'Targets',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTargetId: this.__input.windowTargetId,
          Targets: this.__input.targets,
          OwnerInformation: this.__input.ownerInformation,
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTarget.Targets', props);
    return resource.getResponseField('Targets') as unknown as shapes.SsmTarget[];
  }

  public get ownerInformation(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTarget',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTarget.OwnerInformation'),
        outputPath: 'OwnerInformation',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTargetId: this.__input.windowTargetId,
          Targets: this.__input.targets,
          OwnerInformation: this.__input.ownerInformation,
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTarget.OwnerInformation', props);
    return resource.getResponseField('OwnerInformation') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTarget',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTarget.Name'),
        outputPath: 'Name',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTargetId: this.__input.windowTargetId,
          Targets: this.__input.targets,
          OwnerInformation: this.__input.ownerInformation,
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTarget.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTarget',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTarget.Description'),
        outputPath: 'Description',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTargetId: this.__input.windowTargetId,
          Targets: this.__input.targets,
          OwnerInformation: this.__input.ownerInformation,
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTarget.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class SSMResponsesUpdateMaintenanceWindowTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateMaintenanceWindowTaskRequest) {
  }

  public get windowId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.WindowId'),
        outputPath: 'WindowId',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.WindowId', props);
    return resource.getResponseField('WindowId') as unknown as string;
  }

  public get windowTaskId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.WindowTaskId'),
        outputPath: 'WindowTaskId',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.WindowTaskId', props);
    return resource.getResponseField('WindowTaskId') as unknown as string;
  }

  public get targets(): shapes.SsmTarget[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.Targets'),
        outputPath: 'Targets',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.Targets', props);
    return resource.getResponseField('Targets') as unknown as shapes.SsmTarget[];
  }

  public get taskArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskArn'),
        outputPath: 'TaskArn',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskArn', props);
    return resource.getResponseField('TaskArn') as unknown as string;
  }

  public get serviceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.ServiceRoleArn'),
        outputPath: 'ServiceRoleArn',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.ServiceRoleArn', props);
    return resource.getResponseField('ServiceRoleArn') as unknown as string;
  }

  public get taskParameters(): Record<string, shapes.SsmMaintenanceWindowTaskParameterValueExpression> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskParameters'),
        outputPath: 'TaskParameters',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskParameters', props);
    return resource.getResponseField('TaskParameters') as unknown as Record<string, shapes.SsmMaintenanceWindowTaskParameterValueExpression>;
  }

  public get taskInvocationParameters(): SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParameters {
    return new SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParameters(this.__scope, this.__resources, this.__input);
  }

  public get priority(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.Priority'),
        outputPath: 'Priority',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.Priority', props);
    return resource.getResponseField('Priority') as unknown as number;
  }

  public get maxConcurrency(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.MaxConcurrency'),
        outputPath: 'MaxConcurrency',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.MaxConcurrency', props);
    return resource.getResponseField('MaxConcurrency') as unknown as string;
  }

  public get maxErrors(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.MaxErrors'),
        outputPath: 'MaxErrors',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.MaxErrors', props);
    return resource.getResponseField('MaxErrors') as unknown as string;
  }

  public get loggingInfo(): SSMResponsesUpdateMaintenanceWindowTaskLoggingInfo {
    return new SSMResponsesUpdateMaintenanceWindowTaskLoggingInfo(this.__scope, this.__resources, this.__input);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.Name'),
        outputPath: 'Name',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.Description'),
        outputPath: 'Description',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateMaintenanceWindowTaskRequest) {
  }

  public get runCommand(): SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand {
    return new SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand(this.__scope, this.__resources, this.__input);
  }

  public get automation(): SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersAutomation {
    return new SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersAutomation(this.__scope, this.__resources, this.__input);
  }

  public get stepFunctions(): SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersStepFunctions {
    return new SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersStepFunctions(this.__scope, this.__resources, this.__input);
  }

  public get lambda(): SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersLambda {
    return new SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersLambda(this.__scope, this.__resources, this.__input);
  }

}

export class SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateMaintenanceWindowTaskRequest) {
  }

  public get comment(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.Comment'),
        outputPath: 'TaskInvocationParameters.RunCommand.Comment',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.Comment', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.Comment') as unknown as string;
  }

  public get cloudWatchOutputConfig(): SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig {
    return new SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig(this.__scope, this.__resources, this.__input);
  }

  public get documentHash(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.DocumentHash'),
        outputPath: 'TaskInvocationParameters.RunCommand.DocumentHash',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.DocumentHash', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.DocumentHash') as unknown as string;
  }

  public get documentHashType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.DocumentHashType'),
        outputPath: 'TaskInvocationParameters.RunCommand.DocumentHashType',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.DocumentHashType', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.DocumentHashType') as unknown as string;
  }

  public get documentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.DocumentVersion'),
        outputPath: 'TaskInvocationParameters.RunCommand.DocumentVersion',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.DocumentVersion', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.DocumentVersion') as unknown as string;
  }

  public get notificationConfig(): SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig {
    return new SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig(this.__scope, this.__resources, this.__input);
  }

  public get outputS3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.OutputS3BucketName'),
        outputPath: 'TaskInvocationParameters.RunCommand.OutputS3BucketName',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.OutputS3BucketName', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.OutputS3BucketName') as unknown as string;
  }

  public get outputS3KeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.OutputS3KeyPrefix'),
        outputPath: 'TaskInvocationParameters.RunCommand.OutputS3KeyPrefix',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.OutputS3KeyPrefix', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.OutputS3KeyPrefix') as unknown as string;
  }

  public get parameters(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.Parameters'),
        outputPath: 'TaskInvocationParameters.RunCommand.Parameters',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.Parameters', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.Parameters') as unknown as Record<string, string[]>;
  }

  public get serviceRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.ServiceRoleArn'),
        outputPath: 'TaskInvocationParameters.RunCommand.ServiceRoleArn',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.ServiceRoleArn', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.ServiceRoleArn') as unknown as string;
  }

  public get timeoutSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.TimeoutSeconds'),
        outputPath: 'TaskInvocationParameters.RunCommand.TimeoutSeconds',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.TimeoutSeconds', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.TimeoutSeconds') as unknown as number;
  }

}

export class SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateMaintenanceWindowTaskRequest) {
  }

  public get cloudWatchLogGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchLogGroupName'),
        outputPath: 'TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchLogGroupName',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchLogGroupName', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchLogGroupName') as unknown as string;
  }

  public get cloudWatchOutputEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchOutputEnabled'),
        outputPath: 'TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchOutputEnabled',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchOutputEnabled', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchOutputEnabled') as unknown as boolean;
  }

}

export class SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateMaintenanceWindowTaskRequest) {
  }

  public get notificationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.NotificationConfig.NotificationArn'),
        outputPath: 'TaskInvocationParameters.RunCommand.NotificationConfig.NotificationArn',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.NotificationConfig.NotificationArn', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.NotificationConfig.NotificationArn') as unknown as string;
  }

  public get notificationEvents(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.NotificationConfig.NotificationEvents'),
        outputPath: 'TaskInvocationParameters.RunCommand.NotificationConfig.NotificationEvents',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.NotificationConfig.NotificationEvents', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.NotificationConfig.NotificationEvents') as unknown as string[];
  }

  public get notificationType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.NotificationConfig.NotificationType'),
        outputPath: 'TaskInvocationParameters.RunCommand.NotificationConfig.NotificationType',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.NotificationConfig.NotificationType', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.NotificationConfig.NotificationType') as unknown as string;
  }

}

export class SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersAutomation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateMaintenanceWindowTaskRequest) {
  }

  public get documentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskInvocationParameters.Automation.DocumentVersion'),
        outputPath: 'TaskInvocationParameters.Automation.DocumentVersion',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.Automation.DocumentVersion', props);
    return resource.getResponseField('TaskInvocationParameters.Automation.DocumentVersion') as unknown as string;
  }

  public get parameters(): Record<string, string[]> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskInvocationParameters.Automation.Parameters'),
        outputPath: 'TaskInvocationParameters.Automation.Parameters',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.Automation.Parameters', props);
    return resource.getResponseField('TaskInvocationParameters.Automation.Parameters') as unknown as Record<string, string[]>;
  }

}

export class SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersStepFunctions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateMaintenanceWindowTaskRequest) {
  }

  public get input(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskInvocationParameters.StepFunctions.Input'),
        outputPath: 'TaskInvocationParameters.StepFunctions.Input',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.StepFunctions.Input', props);
    return resource.getResponseField('TaskInvocationParameters.StepFunctions.Input') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskInvocationParameters.StepFunctions.Name'),
        outputPath: 'TaskInvocationParameters.StepFunctions.Name',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.StepFunctions.Name', props);
    return resource.getResponseField('TaskInvocationParameters.StepFunctions.Name') as unknown as string;
  }

}

export class SSMResponsesUpdateMaintenanceWindowTaskTaskInvocationParametersLambda {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateMaintenanceWindowTaskRequest) {
  }

  public get clientContext(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskInvocationParameters.Lambda.ClientContext'),
        outputPath: 'TaskInvocationParameters.Lambda.ClientContext',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.Lambda.ClientContext', props);
    return resource.getResponseField('TaskInvocationParameters.Lambda.ClientContext') as unknown as string;
  }

  public get qualifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskInvocationParameters.Lambda.Qualifier'),
        outputPath: 'TaskInvocationParameters.Lambda.Qualifier',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.Lambda.Qualifier', props);
    return resource.getResponseField('TaskInvocationParameters.Lambda.Qualifier') as unknown as string;
  }

  public get payload(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.TaskInvocationParameters.Lambda.Payload'),
        outputPath: 'TaskInvocationParameters.Lambda.Payload',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.Lambda.Payload', props);
    return resource.getResponseField('TaskInvocationParameters.Lambda.Payload') as unknown as any;
  }

}

export class SSMResponsesUpdateMaintenanceWindowTaskLoggingInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdateMaintenanceWindowTaskRequest) {
  }

  public get s3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.LoggingInfo.S3BucketName'),
        outputPath: 'LoggingInfo.S3BucketName',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.LoggingInfo.S3BucketName', props);
    return resource.getResponseField('LoggingInfo.S3BucketName') as unknown as string;
  }

  public get s3KeyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.LoggingInfo.S3KeyPrefix'),
        outputPath: 'LoggingInfo.S3KeyPrefix',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.LoggingInfo.S3KeyPrefix', props);
    return resource.getResponseField('LoggingInfo.S3KeyPrefix') as unknown as string;
  }

  public get s3Region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMaintenanceWindowTask',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdateMaintenanceWindowTask.LoggingInfo.S3Region'),
        outputPath: 'LoggingInfo.S3Region',
        parameters: {
          WindowId: this.__input.windowId,
          WindowTaskId: this.__input.windowTaskId,
          Targets: this.__input.targets,
          TaskArn: this.__input.taskArn,
          ServiceRoleArn: this.__input.serviceRoleArn,
          TaskParameters: this.__input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.__input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.__input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.__input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.__input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.__input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.__input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.__input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.__input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.__input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.__input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.__input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.__input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.__input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.__input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.__input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.__input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.__input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.__input.priority,
          MaxConcurrency: this.__input.maxConcurrency,
          MaxErrors: this.__input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.__input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.__input.loggingInfo?.s3KeyPrefix,
            S3Region: this.__input.loggingInfo?.s3Region,
          },
          Name: this.__input.name,
          Description: this.__input.description,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMaintenanceWindowTask.LoggingInfo.S3Region', props);
    return resource.getResponseField('LoggingInfo.S3Region') as unknown as string;
  }

}

export class SSMResponsesUpdatePatchBaseline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdatePatchBaselineRequest) {
  }

  public get baselineId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdatePatchBaseline.BaselineId'),
        outputPath: 'BaselineId',
        parameters: {
          BaselineId: this.__input.baselineId,
          Name: this.__input.name,
          GlobalFilters: {
            PatchFilters: this.__input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.__input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.__input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.__input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.__input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.__input.rejectedPatches,
          RejectedPatchesAction: this.__input.rejectedPatchesAction,
          Description: this.__input.description,
          Sources: this.__input.sources,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePatchBaseline.BaselineId', props);
    return resource.getResponseField('BaselineId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdatePatchBaseline.Name'),
        outputPath: 'Name',
        parameters: {
          BaselineId: this.__input.baselineId,
          Name: this.__input.name,
          GlobalFilters: {
            PatchFilters: this.__input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.__input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.__input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.__input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.__input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.__input.rejectedPatches,
          RejectedPatchesAction: this.__input.rejectedPatchesAction,
          Description: this.__input.description,
          Sources: this.__input.sources,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePatchBaseline.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get operatingSystem(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdatePatchBaseline.OperatingSystem'),
        outputPath: 'OperatingSystem',
        parameters: {
          BaselineId: this.__input.baselineId,
          Name: this.__input.name,
          GlobalFilters: {
            PatchFilters: this.__input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.__input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.__input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.__input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.__input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.__input.rejectedPatches,
          RejectedPatchesAction: this.__input.rejectedPatchesAction,
          Description: this.__input.description,
          Sources: this.__input.sources,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePatchBaseline.OperatingSystem', props);
    return resource.getResponseField('OperatingSystem') as unknown as string;
  }

  public get globalFilters(): SSMResponsesUpdatePatchBaselineGlobalFilters {
    return new SSMResponsesUpdatePatchBaselineGlobalFilters(this.__scope, this.__resources, this.__input);
  }

  public get approvalRules(): SSMResponsesUpdatePatchBaselineApprovalRules {
    return new SSMResponsesUpdatePatchBaselineApprovalRules(this.__scope, this.__resources, this.__input);
  }

  public get approvedPatches(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdatePatchBaseline.ApprovedPatches'),
        outputPath: 'ApprovedPatches',
        parameters: {
          BaselineId: this.__input.baselineId,
          Name: this.__input.name,
          GlobalFilters: {
            PatchFilters: this.__input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.__input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.__input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.__input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.__input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.__input.rejectedPatches,
          RejectedPatchesAction: this.__input.rejectedPatchesAction,
          Description: this.__input.description,
          Sources: this.__input.sources,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePatchBaseline.ApprovedPatches', props);
    return resource.getResponseField('ApprovedPatches') as unknown as string[];
  }

  public get approvedPatchesComplianceLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdatePatchBaseline.ApprovedPatchesComplianceLevel'),
        outputPath: 'ApprovedPatchesComplianceLevel',
        parameters: {
          BaselineId: this.__input.baselineId,
          Name: this.__input.name,
          GlobalFilters: {
            PatchFilters: this.__input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.__input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.__input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.__input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.__input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.__input.rejectedPatches,
          RejectedPatchesAction: this.__input.rejectedPatchesAction,
          Description: this.__input.description,
          Sources: this.__input.sources,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePatchBaseline.ApprovedPatchesComplianceLevel', props);
    return resource.getResponseField('ApprovedPatchesComplianceLevel') as unknown as string;
  }

  public get approvedPatchesEnableNonSecurity(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdatePatchBaseline.ApprovedPatchesEnableNonSecurity'),
        outputPath: 'ApprovedPatchesEnableNonSecurity',
        parameters: {
          BaselineId: this.__input.baselineId,
          Name: this.__input.name,
          GlobalFilters: {
            PatchFilters: this.__input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.__input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.__input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.__input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.__input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.__input.rejectedPatches,
          RejectedPatchesAction: this.__input.rejectedPatchesAction,
          Description: this.__input.description,
          Sources: this.__input.sources,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePatchBaseline.ApprovedPatchesEnableNonSecurity', props);
    return resource.getResponseField('ApprovedPatchesEnableNonSecurity') as unknown as boolean;
  }

  public get rejectedPatches(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdatePatchBaseline.RejectedPatches'),
        outputPath: 'RejectedPatches',
        parameters: {
          BaselineId: this.__input.baselineId,
          Name: this.__input.name,
          GlobalFilters: {
            PatchFilters: this.__input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.__input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.__input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.__input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.__input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.__input.rejectedPatches,
          RejectedPatchesAction: this.__input.rejectedPatchesAction,
          Description: this.__input.description,
          Sources: this.__input.sources,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePatchBaseline.RejectedPatches', props);
    return resource.getResponseField('RejectedPatches') as unknown as string[];
  }

  public get rejectedPatchesAction(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdatePatchBaseline.RejectedPatchesAction'),
        outputPath: 'RejectedPatchesAction',
        parameters: {
          BaselineId: this.__input.baselineId,
          Name: this.__input.name,
          GlobalFilters: {
            PatchFilters: this.__input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.__input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.__input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.__input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.__input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.__input.rejectedPatches,
          RejectedPatchesAction: this.__input.rejectedPatchesAction,
          Description: this.__input.description,
          Sources: this.__input.sources,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePatchBaseline.RejectedPatchesAction', props);
    return resource.getResponseField('RejectedPatchesAction') as unknown as string;
  }

  public get createdDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdatePatchBaseline.CreatedDate'),
        outputPath: 'CreatedDate',
        parameters: {
          BaselineId: this.__input.baselineId,
          Name: this.__input.name,
          GlobalFilters: {
            PatchFilters: this.__input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.__input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.__input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.__input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.__input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.__input.rejectedPatches,
          RejectedPatchesAction: this.__input.rejectedPatchesAction,
          Description: this.__input.description,
          Sources: this.__input.sources,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePatchBaseline.CreatedDate', props);
    return resource.getResponseField('CreatedDate') as unknown as string;
  }

  public get modifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdatePatchBaseline.ModifiedDate'),
        outputPath: 'ModifiedDate',
        parameters: {
          BaselineId: this.__input.baselineId,
          Name: this.__input.name,
          GlobalFilters: {
            PatchFilters: this.__input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.__input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.__input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.__input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.__input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.__input.rejectedPatches,
          RejectedPatchesAction: this.__input.rejectedPatchesAction,
          Description: this.__input.description,
          Sources: this.__input.sources,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePatchBaseline.ModifiedDate', props);
    return resource.getResponseField('ModifiedDate') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdatePatchBaseline.Description'),
        outputPath: 'Description',
        parameters: {
          BaselineId: this.__input.baselineId,
          Name: this.__input.name,
          GlobalFilters: {
            PatchFilters: this.__input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.__input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.__input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.__input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.__input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.__input.rejectedPatches,
          RejectedPatchesAction: this.__input.rejectedPatchesAction,
          Description: this.__input.description,
          Sources: this.__input.sources,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePatchBaseline.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get sources(): shapes.SsmPatchSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdatePatchBaseline.Sources'),
        outputPath: 'Sources',
        parameters: {
          BaselineId: this.__input.baselineId,
          Name: this.__input.name,
          GlobalFilters: {
            PatchFilters: this.__input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.__input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.__input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.__input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.__input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.__input.rejectedPatches,
          RejectedPatchesAction: this.__input.rejectedPatchesAction,
          Description: this.__input.description,
          Sources: this.__input.sources,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePatchBaseline.Sources', props);
    return resource.getResponseField('Sources') as unknown as shapes.SsmPatchSource[];
  }

}

export class SSMResponsesUpdatePatchBaselineGlobalFilters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdatePatchBaselineRequest) {
  }

  public get patchFilters(): shapes.SsmPatchFilter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdatePatchBaseline.GlobalFilters.PatchFilters'),
        outputPath: 'GlobalFilters.PatchFilters',
        parameters: {
          BaselineId: this.__input.baselineId,
          Name: this.__input.name,
          GlobalFilters: {
            PatchFilters: this.__input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.__input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.__input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.__input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.__input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.__input.rejectedPatches,
          RejectedPatchesAction: this.__input.rejectedPatchesAction,
          Description: this.__input.description,
          Sources: this.__input.sources,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePatchBaseline.GlobalFilters.PatchFilters', props);
    return resource.getResponseField('GlobalFilters.PatchFilters') as unknown as shapes.SsmPatchFilter[];
  }

}

export class SSMResponsesUpdatePatchBaselineApprovalRules {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SsmUpdatePatchBaselineRequest) {
  }

  public get patchRules(): shapes.SsmPatchRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePatchBaseline',
        service: 'SSM',
        physicalResourceId: cr.PhysicalResourceId.of('SSM.UpdatePatchBaseline.ApprovalRules.PatchRules'),
        outputPath: 'ApprovalRules.PatchRules',
        parameters: {
          BaselineId: this.__input.baselineId,
          Name: this.__input.name,
          GlobalFilters: {
            PatchFilters: this.__input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.__input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.__input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.__input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.__input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.__input.rejectedPatches,
          RejectedPatchesAction: this.__input.rejectedPatchesAction,
          Description: this.__input.description,
          Sources: this.__input.sources,
          Replace: this.__input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdatePatchBaseline.ApprovalRules.PatchRules', props);
    return resource.getResponseField('ApprovalRules.PatchRules') as unknown as shapes.SsmPatchRule[];
  }

}

