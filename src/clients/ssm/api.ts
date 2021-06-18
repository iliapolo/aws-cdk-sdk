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

  public cancelMaintenanceWindowExecution(input: shapes.SsmCancelMaintenanceWindowExecutionRequest): SSMCancelMaintenanceWindowExecution {
    return new SSMCancelMaintenanceWindowExecution(this, 'CancelMaintenanceWindowExecution', this.__resources, input);
  }

  public createActivation(input: shapes.SsmCreateActivationRequest): SSMCreateActivation {
    return new SSMCreateActivation(this, 'CreateActivation', this.__resources, input);
  }

  public createAssociation(input: shapes.SsmCreateAssociationRequest): SSMCreateAssociation {
    return new SSMCreateAssociation(this, 'CreateAssociation', this.__resources, input);
  }

  public createAssociationBatch(input: shapes.SsmCreateAssociationBatchRequest): SSMCreateAssociationBatch {
    return new SSMCreateAssociationBatch(this, 'CreateAssociationBatch', this.__resources, input);
  }

  public createDocument(input: shapes.SsmCreateDocumentRequest): SSMCreateDocument {
    return new SSMCreateDocument(this, 'CreateDocument', this.__resources, input);
  }

  public createMaintenanceWindow(input: shapes.SsmCreateMaintenanceWindowRequest): SSMCreateMaintenanceWindow {
    return new SSMCreateMaintenanceWindow(this, 'CreateMaintenanceWindow', this.__resources, input);
  }

  public createOpsItem(input: shapes.SsmCreateOpsItemRequest): SSMCreateOpsItem {
    return new SSMCreateOpsItem(this, 'CreateOpsItem', this.__resources, input);
  }

  public createPatchBaseline(input: shapes.SsmCreatePatchBaselineRequest): SSMCreatePatchBaseline {
    return new SSMCreatePatchBaseline(this, 'CreatePatchBaseline', this.__resources, input);
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

  public deleteInventory(input: shapes.SsmDeleteInventoryRequest): SSMDeleteInventory {
    return new SSMDeleteInventory(this, 'DeleteInventory', this.__resources, input);
  }

  public deleteMaintenanceWindow(input: shapes.SsmDeleteMaintenanceWindowRequest): SSMDeleteMaintenanceWindow {
    return new SSMDeleteMaintenanceWindow(this, 'DeleteMaintenanceWindow', this.__resources, input);
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

  public deleteParameters(input: shapes.SsmDeleteParametersRequest): SSMDeleteParameters {
    return new SSMDeleteParameters(this, 'DeleteParameters', this.__resources, input);
  }

  public deletePatchBaseline(input: shapes.SsmDeletePatchBaselineRequest): SSMDeletePatchBaseline {
    return new SSMDeletePatchBaseline(this, 'DeletePatchBaseline', this.__resources, input);
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

  public deregisterPatchBaselineForPatchGroup(input: shapes.SsmDeregisterPatchBaselineForPatchGroupRequest): SSMDeregisterPatchBaselineForPatchGroup {
    return new SSMDeregisterPatchBaselineForPatchGroup(this, 'DeregisterPatchBaselineForPatchGroup', this.__resources, input);
  }

  public deregisterTargetFromMaintenanceWindow(input: shapes.SsmDeregisterTargetFromMaintenanceWindowRequest): SSMDeregisterTargetFromMaintenanceWindow {
    return new SSMDeregisterTargetFromMaintenanceWindow(this, 'DeregisterTargetFromMaintenanceWindow', this.__resources, input);
  }

  public deregisterTaskFromMaintenanceWindow(input: shapes.SsmDeregisterTaskFromMaintenanceWindowRequest): SSMDeregisterTaskFromMaintenanceWindow {
    return new SSMDeregisterTaskFromMaintenanceWindow(this, 'DeregisterTaskFromMaintenanceWindow', this.__resources, input);
  }

  public describeActivations(input: shapes.SsmDescribeActivationsRequest): SSMDescribeActivations {
    return new SSMDescribeActivations(this, 'DescribeActivations', this.__resources, input);
  }

  public describeAssociation(input: shapes.SsmDescribeAssociationRequest): SSMDescribeAssociation {
    return new SSMDescribeAssociation(this, 'DescribeAssociation', this.__resources, input);
  }

  public describeAssociationExecutionTargets(input: shapes.SsmDescribeAssociationExecutionTargetsRequest): SSMDescribeAssociationExecutionTargets {
    return new SSMDescribeAssociationExecutionTargets(this, 'DescribeAssociationExecutionTargets', this.__resources, input);
  }

  public describeAssociationExecutions(input: shapes.SsmDescribeAssociationExecutionsRequest): SSMDescribeAssociationExecutions {
    return new SSMDescribeAssociationExecutions(this, 'DescribeAssociationExecutions', this.__resources, input);
  }

  public describeAutomationExecutions(input: shapes.SsmDescribeAutomationExecutionsRequest): SSMDescribeAutomationExecutions {
    return new SSMDescribeAutomationExecutions(this, 'DescribeAutomationExecutions', this.__resources, input);
  }

  public describeAutomationStepExecutions(input: shapes.SsmDescribeAutomationStepExecutionsRequest): SSMDescribeAutomationStepExecutions {
    return new SSMDescribeAutomationStepExecutions(this, 'DescribeAutomationStepExecutions', this.__resources, input);
  }

  public describeAvailablePatches(input: shapes.SsmDescribeAvailablePatchesRequest): SSMDescribeAvailablePatches {
    return new SSMDescribeAvailablePatches(this, 'DescribeAvailablePatches', this.__resources, input);
  }

  public describeDocument(input: shapes.SsmDescribeDocumentRequest): SSMDescribeDocument {
    return new SSMDescribeDocument(this, 'DescribeDocument', this.__resources, input);
  }

  public describeDocumentPermission(input: shapes.SsmDescribeDocumentPermissionRequest): SSMDescribeDocumentPermission {
    return new SSMDescribeDocumentPermission(this, 'DescribeDocumentPermission', this.__resources, input);
  }

  public describeEffectiveInstanceAssociations(input: shapes.SsmDescribeEffectiveInstanceAssociationsRequest): SSMDescribeEffectiveInstanceAssociations {
    return new SSMDescribeEffectiveInstanceAssociations(this, 'DescribeEffectiveInstanceAssociations', this.__resources, input);
  }

  public describeEffectivePatchesForPatchBaseline(input: shapes.SsmDescribeEffectivePatchesForPatchBaselineRequest): SSMDescribeEffectivePatchesForPatchBaseline {
    return new SSMDescribeEffectivePatchesForPatchBaseline(this, 'DescribeEffectivePatchesForPatchBaseline', this.__resources, input);
  }

  public describeInstanceAssociationsStatus(input: shapes.SsmDescribeInstanceAssociationsStatusRequest): SSMDescribeInstanceAssociationsStatus {
    return new SSMDescribeInstanceAssociationsStatus(this, 'DescribeInstanceAssociationsStatus', this.__resources, input);
  }

  public describeInstanceInformation(input: shapes.SsmDescribeInstanceInformationRequest): SSMDescribeInstanceInformation {
    return new SSMDescribeInstanceInformation(this, 'DescribeInstanceInformation', this.__resources, input);
  }

  public describeInstancePatchStates(input: shapes.SsmDescribeInstancePatchStatesRequest): SSMDescribeInstancePatchStates {
    return new SSMDescribeInstancePatchStates(this, 'DescribeInstancePatchStates', this.__resources, input);
  }

  public describeInstancePatchStatesForPatchGroup(input: shapes.SsmDescribeInstancePatchStatesForPatchGroupRequest): SSMDescribeInstancePatchStatesForPatchGroup {
    return new SSMDescribeInstancePatchStatesForPatchGroup(this, 'DescribeInstancePatchStatesForPatchGroup', this.__resources, input);
  }

  public describeInstancePatches(input: shapes.SsmDescribeInstancePatchesRequest): SSMDescribeInstancePatches {
    return new SSMDescribeInstancePatches(this, 'DescribeInstancePatches', this.__resources, input);
  }

  public describeInventoryDeletions(input: shapes.SsmDescribeInventoryDeletionsRequest): SSMDescribeInventoryDeletions {
    return new SSMDescribeInventoryDeletions(this, 'DescribeInventoryDeletions', this.__resources, input);
  }

  public describeMaintenanceWindowExecutionTaskInvocations(input: shapes.SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest): SSMDescribeMaintenanceWindowExecutionTaskInvocations {
    return new SSMDescribeMaintenanceWindowExecutionTaskInvocations(this, 'DescribeMaintenanceWindowExecutionTaskInvocations', this.__resources, input);
  }

  public describeMaintenanceWindowExecutionTasks(input: shapes.SsmDescribeMaintenanceWindowExecutionTasksRequest): SSMDescribeMaintenanceWindowExecutionTasks {
    return new SSMDescribeMaintenanceWindowExecutionTasks(this, 'DescribeMaintenanceWindowExecutionTasks', this.__resources, input);
  }

  public describeMaintenanceWindowExecutions(input: shapes.SsmDescribeMaintenanceWindowExecutionsRequest): SSMDescribeMaintenanceWindowExecutions {
    return new SSMDescribeMaintenanceWindowExecutions(this, 'DescribeMaintenanceWindowExecutions', this.__resources, input);
  }

  public describeMaintenanceWindowSchedule(input: shapes.SsmDescribeMaintenanceWindowScheduleRequest): SSMDescribeMaintenanceWindowSchedule {
    return new SSMDescribeMaintenanceWindowSchedule(this, 'DescribeMaintenanceWindowSchedule', this.__resources, input);
  }

  public describeMaintenanceWindowTargets(input: shapes.SsmDescribeMaintenanceWindowTargetsRequest): SSMDescribeMaintenanceWindowTargets {
    return new SSMDescribeMaintenanceWindowTargets(this, 'DescribeMaintenanceWindowTargets', this.__resources, input);
  }

  public describeMaintenanceWindowTasks(input: shapes.SsmDescribeMaintenanceWindowTasksRequest): SSMDescribeMaintenanceWindowTasks {
    return new SSMDescribeMaintenanceWindowTasks(this, 'DescribeMaintenanceWindowTasks', this.__resources, input);
  }

  public describeMaintenanceWindows(input: shapes.SsmDescribeMaintenanceWindowsRequest): SSMDescribeMaintenanceWindows {
    return new SSMDescribeMaintenanceWindows(this, 'DescribeMaintenanceWindows', this.__resources, input);
  }

  public describeMaintenanceWindowsForTarget(input: shapes.SsmDescribeMaintenanceWindowsForTargetRequest): SSMDescribeMaintenanceWindowsForTarget {
    return new SSMDescribeMaintenanceWindowsForTarget(this, 'DescribeMaintenanceWindowsForTarget', this.__resources, input);
  }

  public describeOpsItems(input: shapes.SsmDescribeOpsItemsRequest): SSMDescribeOpsItems {
    return new SSMDescribeOpsItems(this, 'DescribeOpsItems', this.__resources, input);
  }

  public describeParameters(input: shapes.SsmDescribeParametersRequest): SSMDescribeParameters {
    return new SSMDescribeParameters(this, 'DescribeParameters', this.__resources, input);
  }

  public describePatchBaselines(input: shapes.SsmDescribePatchBaselinesRequest): SSMDescribePatchBaselines {
    return new SSMDescribePatchBaselines(this, 'DescribePatchBaselines', this.__resources, input);
  }

  public describePatchGroupState(input: shapes.SsmDescribePatchGroupStateRequest): SSMDescribePatchGroupState {
    return new SSMDescribePatchGroupState(this, 'DescribePatchGroupState', this.__resources, input);
  }

  public describePatchGroups(input: shapes.SsmDescribePatchGroupsRequest): SSMDescribePatchGroups {
    return new SSMDescribePatchGroups(this, 'DescribePatchGroups', this.__resources, input);
  }

  public describePatchProperties(input: shapes.SsmDescribePatchPropertiesRequest): SSMDescribePatchProperties {
    return new SSMDescribePatchProperties(this, 'DescribePatchProperties', this.__resources, input);
  }

  public describeSessions(input: shapes.SsmDescribeSessionsRequest): SSMDescribeSessions {
    return new SSMDescribeSessions(this, 'DescribeSessions', this.__resources, input);
  }

  public fetchAutomationExecution(input: shapes.SsmGetAutomationExecutionRequest): SSMFetchAutomationExecution {
    return new SSMFetchAutomationExecution(this, 'FetchAutomationExecution', this.__resources, input);
  }

  public fetchCalendarState(input: shapes.SsmGetCalendarStateRequest): SSMFetchCalendarState {
    return new SSMFetchCalendarState(this, 'FetchCalendarState', this.__resources, input);
  }

  public fetchCommandInvocation(input: shapes.SsmGetCommandInvocationRequest): SSMFetchCommandInvocation {
    return new SSMFetchCommandInvocation(this, 'FetchCommandInvocation', this.__resources, input);
  }

  public fetchConnectionStatus(input: shapes.SsmGetConnectionStatusRequest): SSMFetchConnectionStatus {
    return new SSMFetchConnectionStatus(this, 'FetchConnectionStatus', this.__resources, input);
  }

  public fetchDefaultPatchBaseline(input: shapes.SsmGetDefaultPatchBaselineRequest): SSMFetchDefaultPatchBaseline {
    return new SSMFetchDefaultPatchBaseline(this, 'FetchDefaultPatchBaseline', this.__resources, input);
  }

  public fetchDeployablePatchSnapshotForInstance(input: shapes.SsmGetDeployablePatchSnapshotForInstanceRequest): SSMFetchDeployablePatchSnapshotForInstance {
    return new SSMFetchDeployablePatchSnapshotForInstance(this, 'FetchDeployablePatchSnapshotForInstance', this.__resources, input);
  }

  public fetchDocument(input: shapes.SsmGetDocumentRequest): SSMFetchDocument {
    return new SSMFetchDocument(this, 'FetchDocument', this.__resources, input);
  }

  public fetchInventory(input: shapes.SsmGetInventoryRequest): SSMFetchInventory {
    return new SSMFetchInventory(this, 'FetchInventory', this.__resources, input);
  }

  public fetchInventorySchema(input: shapes.SsmGetInventorySchemaRequest): SSMFetchInventorySchema {
    return new SSMFetchInventorySchema(this, 'FetchInventorySchema', this.__resources, input);
  }

  public fetchMaintenanceWindow(input: shapes.SsmGetMaintenanceWindowRequest): SSMFetchMaintenanceWindow {
    return new SSMFetchMaintenanceWindow(this, 'FetchMaintenanceWindow', this.__resources, input);
  }

  public fetchMaintenanceWindowExecution(input: shapes.SsmGetMaintenanceWindowExecutionRequest): SSMFetchMaintenanceWindowExecution {
    return new SSMFetchMaintenanceWindowExecution(this, 'FetchMaintenanceWindowExecution', this.__resources, input);
  }

  public fetchMaintenanceWindowExecutionTask(input: shapes.SsmGetMaintenanceWindowExecutionTaskRequest): SSMFetchMaintenanceWindowExecutionTask {
    return new SSMFetchMaintenanceWindowExecutionTask(this, 'FetchMaintenanceWindowExecutionTask', this.__resources, input);
  }

  public fetchMaintenanceWindowExecutionTaskInvocation(input: shapes.SsmGetMaintenanceWindowExecutionTaskInvocationRequest): SSMFetchMaintenanceWindowExecutionTaskInvocation {
    return new SSMFetchMaintenanceWindowExecutionTaskInvocation(this, 'FetchMaintenanceWindowExecutionTaskInvocation', this.__resources, input);
  }

  public fetchMaintenanceWindowTask(input: shapes.SsmGetMaintenanceWindowTaskRequest): SSMFetchMaintenanceWindowTask {
    return new SSMFetchMaintenanceWindowTask(this, 'FetchMaintenanceWindowTask', this.__resources, input);
  }

  public fetchOpsItem(input: shapes.SsmGetOpsItemRequest): SSMFetchOpsItem {
    return new SSMFetchOpsItem(this, 'FetchOpsItem', this.__resources, input);
  }

  public fetchOpsSummary(input: shapes.SsmGetOpsSummaryRequest): SSMFetchOpsSummary {
    return new SSMFetchOpsSummary(this, 'FetchOpsSummary', this.__resources, input);
  }

  public fetchParameter(input: shapes.SsmGetParameterRequest): SSMFetchParameter {
    return new SSMFetchParameter(this, 'FetchParameter', this.__resources, input);
  }

  public fetchParameterHistory(input: shapes.SsmGetParameterHistoryRequest): SSMFetchParameterHistory {
    return new SSMFetchParameterHistory(this, 'FetchParameterHistory', this.__resources, input);
  }

  public fetchParameters(input: shapes.SsmGetParametersRequest): SSMFetchParameters {
    return new SSMFetchParameters(this, 'FetchParameters', this.__resources, input);
  }

  public fetchParametersByPath(input: shapes.SsmGetParametersByPathRequest): SSMFetchParametersByPath {
    return new SSMFetchParametersByPath(this, 'FetchParametersByPath', this.__resources, input);
  }

  public fetchPatchBaseline(input: shapes.SsmGetPatchBaselineRequest): SSMFetchPatchBaseline {
    return new SSMFetchPatchBaseline(this, 'FetchPatchBaseline', this.__resources, input);
  }

  public fetchPatchBaselineForPatchGroup(input: shapes.SsmGetPatchBaselineForPatchGroupRequest): SSMFetchPatchBaselineForPatchGroup {
    return new SSMFetchPatchBaselineForPatchGroup(this, 'FetchPatchBaselineForPatchGroup', this.__resources, input);
  }

  public fetchServiceSetting(input: shapes.SsmGetServiceSettingRequest): SSMFetchServiceSetting {
    return new SSMFetchServiceSetting(this, 'FetchServiceSetting', this.__resources, input);
  }

  public labelParameterVersion(input: shapes.SsmLabelParameterVersionRequest): SSMLabelParameterVersion {
    return new SSMLabelParameterVersion(this, 'LabelParameterVersion', this.__resources, input);
  }

  public listAssociationVersions(input: shapes.SsmListAssociationVersionsRequest): SSMListAssociationVersions {
    return new SSMListAssociationVersions(this, 'ListAssociationVersions', this.__resources, input);
  }

  public listAssociations(input: shapes.SsmListAssociationsRequest): SSMListAssociations {
    return new SSMListAssociations(this, 'ListAssociations', this.__resources, input);
  }

  public listCommandInvocations(input: shapes.SsmListCommandInvocationsRequest): SSMListCommandInvocations {
    return new SSMListCommandInvocations(this, 'ListCommandInvocations', this.__resources, input);
  }

  public listCommands(input: shapes.SsmListCommandsRequest): SSMListCommands {
    return new SSMListCommands(this, 'ListCommands', this.__resources, input);
  }

  public listComplianceItems(input: shapes.SsmListComplianceItemsRequest): SSMListComplianceItems {
    return new SSMListComplianceItems(this, 'ListComplianceItems', this.__resources, input);
  }

  public listComplianceSummaries(input: shapes.SsmListComplianceSummariesRequest): SSMListComplianceSummaries {
    return new SSMListComplianceSummaries(this, 'ListComplianceSummaries', this.__resources, input);
  }

  public listDocumentVersions(input: shapes.SsmListDocumentVersionsRequest): SSMListDocumentVersions {
    return new SSMListDocumentVersions(this, 'ListDocumentVersions', this.__resources, input);
  }

  public listDocuments(input: shapes.SsmListDocumentsRequest): SSMListDocuments {
    return new SSMListDocuments(this, 'ListDocuments', this.__resources, input);
  }

  public listInventoryEntries(input: shapes.SsmListInventoryEntriesRequest): SSMListInventoryEntries {
    return new SSMListInventoryEntries(this, 'ListInventoryEntries', this.__resources, input);
  }

  public listResourceComplianceSummaries(input: shapes.SsmListResourceComplianceSummariesRequest): SSMListResourceComplianceSummaries {
    return new SSMListResourceComplianceSummaries(this, 'ListResourceComplianceSummaries', this.__resources, input);
  }

  public listResourceDataSync(input: shapes.SsmListResourceDataSyncRequest): SSMListResourceDataSync {
    return new SSMListResourceDataSync(this, 'ListResourceDataSync', this.__resources, input);
  }

  public listTagsForResource(input: shapes.SsmListTagsForResourceRequest): SSMListTagsForResource {
    return new SSMListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
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

  public putInventory(input: shapes.SsmPutInventoryRequest): SSMPutInventory {
    return new SSMPutInventory(this, 'PutInventory', this.__resources, input);
  }

  public putParameter(input: shapes.SsmPutParameterRequest): SSMPutParameter {
    return new SSMPutParameter(this, 'PutParameter', this.__resources, input);
  }

  public registerDefaultPatchBaseline(input: shapes.SsmRegisterDefaultPatchBaselineRequest): SSMRegisterDefaultPatchBaseline {
    return new SSMRegisterDefaultPatchBaseline(this, 'RegisterDefaultPatchBaseline', this.__resources, input);
  }

  public registerPatchBaselineForPatchGroup(input: shapes.SsmRegisterPatchBaselineForPatchGroupRequest): SSMRegisterPatchBaselineForPatchGroup {
    return new SSMRegisterPatchBaselineForPatchGroup(this, 'RegisterPatchBaselineForPatchGroup', this.__resources, input);
  }

  public registerTargetWithMaintenanceWindow(input: shapes.SsmRegisterTargetWithMaintenanceWindowRequest): SSMRegisterTargetWithMaintenanceWindow {
    return new SSMRegisterTargetWithMaintenanceWindow(this, 'RegisterTargetWithMaintenanceWindow', this.__resources, input);
  }

  public registerTaskWithMaintenanceWindow(input: shapes.SsmRegisterTaskWithMaintenanceWindowRequest): SSMRegisterTaskWithMaintenanceWindow {
    return new SSMRegisterTaskWithMaintenanceWindow(this, 'RegisterTaskWithMaintenanceWindow', this.__resources, input);
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

  public resetServiceSetting(input: shapes.SsmResetServiceSettingRequest): SSMResetServiceSetting {
    return new SSMResetServiceSetting(this, 'ResetServiceSetting', this.__resources, input);
  }

  public resumeSession(input: shapes.SsmResumeSessionRequest): SSMResumeSession {
    return new SSMResumeSession(this, 'ResumeSession', this.__resources, input);
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

  public sendCommand(input: shapes.SsmSendCommandRequest): SSMSendCommand {
    return new SSMSendCommand(this, 'SendCommand', this.__resources, input);
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

  public startAutomationExecution(input: shapes.SsmStartAutomationExecutionRequest): SSMStartAutomationExecution {
    return new SSMStartAutomationExecution(this, 'StartAutomationExecution', this.__resources, input);
  }

  public startSession(input: shapes.SsmStartSessionRequest): SSMStartSession {
    return new SSMStartSession(this, 'StartSession', this.__resources, input);
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

  public terminateSession(input: shapes.SsmTerminateSessionRequest): SSMTerminateSession {
    return new SSMTerminateSession(this, 'TerminateSession', this.__resources, input);
  }

  public updateAssociation(input: shapes.SsmUpdateAssociationRequest): SSMUpdateAssociation {
    return new SSMUpdateAssociation(this, 'UpdateAssociation', this.__resources, input);
  }

  public updateAssociationStatus(input: shapes.SsmUpdateAssociationStatusRequest): SSMUpdateAssociationStatus {
    return new SSMUpdateAssociationStatus(this, 'UpdateAssociationStatus', this.__resources, input);
  }

  public updateDocument(input: shapes.SsmUpdateDocumentRequest): SSMUpdateDocument {
    return new SSMUpdateDocument(this, 'UpdateDocument', this.__resources, input);
  }

  public updateDocumentDefaultVersion(input: shapes.SsmUpdateDocumentDefaultVersionRequest): SSMUpdateDocumentDefaultVersion {
    return new SSMUpdateDocumentDefaultVersion(this, 'UpdateDocumentDefaultVersion', this.__resources, input);
  }

  public updateMaintenanceWindow(input: shapes.SsmUpdateMaintenanceWindowRequest): SSMUpdateMaintenanceWindow {
    return new SSMUpdateMaintenanceWindow(this, 'UpdateMaintenanceWindow', this.__resources, input);
  }

  public updateMaintenanceWindowTarget(input: shapes.SsmUpdateMaintenanceWindowTargetRequest): SSMUpdateMaintenanceWindowTarget {
    return new SSMUpdateMaintenanceWindowTarget(this, 'UpdateMaintenanceWindowTarget', this.__resources, input);
  }

  public updateMaintenanceWindowTask(input: shapes.SsmUpdateMaintenanceWindowTaskRequest): SSMUpdateMaintenanceWindowTask {
    return new SSMUpdateMaintenanceWindowTask(this, 'UpdateMaintenanceWindowTask', this.__resources, input);
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

  public updatePatchBaseline(input: shapes.SsmUpdatePatchBaselineRequest): SSMUpdatePatchBaseline {
    return new SSMUpdatePatchBaseline(this, 'UpdatePatchBaseline', this.__resources, input);
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

export class SSMCancelMaintenanceWindowExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmCancelMaintenanceWindowExecutionRequest) {
    super(scope, id);
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
          WindowExecutionId: this.input.windowExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CancelMaintenanceWindowExecution.WindowExecutionId', props);
    return resource.getResponseField('WindowExecutionId') as unknown as string;
  }

}

export class SSMCreateActivation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmCreateActivationRequest) {
    super(scope, id);
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
          Description: this.input.description,
          DefaultInstanceName: this.input.defaultInstanceName,
          IamRole: this.input.iamRole,
          RegistrationLimit: this.input.registrationLimit,
          ExpirationDate: this.input.expirationDate,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateActivation.ActivationId', props);
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
          Description: this.input.description,
          DefaultInstanceName: this.input.defaultInstanceName,
          IamRole: this.input.iamRole,
          RegistrationLimit: this.input.registrationLimit,
          ExpirationDate: this.input.expirationDate,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateActivation.ActivationCode', props);
    return resource.getResponseField('ActivationCode') as unknown as string;
  }

}

export class SSMCreateAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmCreateAssociationRequest) {
    super(scope, id);
  }

  public get associationDescription(): SSMCreateAssociationAssociationDescription {
    return new SSMCreateAssociationAssociationDescription(this, 'AssociationDescription', this.__resources, this.input);
  }

}

export class SSMCreateAssociationAssociationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmCreateAssociationRequest) {
    super(scope, id);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.Name', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.InstanceId', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.AssociationVersion', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.Date', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.LastUpdateAssociationDate', props);
    return resource.getResponseField('AssociationDescription.LastUpdateAssociationDate') as unknown as string;
  }

  public get status(): SSMCreateAssociationAssociationDescriptionStatus {
    return new SSMCreateAssociationAssociationDescriptionStatus(this, 'Status', this.__resources, this.input);
  }

  public get overview(): SSMCreateAssociationAssociationDescriptionOverview {
    return new SSMCreateAssociationAssociationDescriptionOverview(this, 'Overview', this.__resources, this.input);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.DocumentVersion', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.AutomationTargetParameterName', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.Parameters', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.AssociationId', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.Targets', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.ScheduleExpression', props);
    return resource.getResponseField('AssociationDescription.ScheduleExpression') as unknown as string;
  }

  public get outputLocation(): SSMCreateAssociationAssociationDescriptionOutputLocation {
    return new SSMCreateAssociationAssociationDescriptionOutputLocation(this, 'OutputLocation', this.__resources, this.input);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.LastExecutionDate', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.LastSuccessfulExecutionDate', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.AssociationName', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.MaxErrors', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.MaxConcurrency', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.ComplianceSeverity', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.SyncCompliance', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.ApplyOnlyAtCronInterval', props);
    return resource.getResponseField('AssociationDescription.ApplyOnlyAtCronInterval') as unknown as boolean;
  }

}

export class SSMCreateAssociationAssociationDescriptionStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmCreateAssociationRequest) {
    super(scope, id);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.Status.Date', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.Status.Name', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.Status.Message', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.Status.AdditionalInfo', props);
    return resource.getResponseField('AssociationDescription.Status.AdditionalInfo') as unknown as string;
  }

}

export class SSMCreateAssociationAssociationDescriptionOverview extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmCreateAssociationRequest) {
    super(scope, id);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.Overview.Status', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.Overview.DetailedStatus', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.Overview.AssociationStatusAggregatedCount', props);
    return resource.getResponseField('AssociationDescription.Overview.AssociationStatusAggregatedCount') as unknown as Record<string, number>;
  }

}

export class SSMCreateAssociationAssociationDescriptionOutputLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmCreateAssociationRequest) {
    super(scope, id);
  }

  public get s3Location(): SSMCreateAssociationAssociationDescriptionOutputLocationS3Location {
    return new SSMCreateAssociationAssociationDescriptionOutputLocationS3Location(this, 'S3Location', this.__resources, this.input);
  }

}

export class SSMCreateAssociationAssociationDescriptionOutputLocationS3Location extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmCreateAssociationRequest) {
    super(scope, id);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3Region', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3BucketName', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          InstanceId: this.input.instanceId,
          Parameters: this.input.parameters,
          Targets: this.input.targets,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          AssociationName: this.input.associationName,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix', props);
    return resource.getResponseField('AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix') as unknown as string;
  }

}

export class SSMCreateAssociationBatch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmCreateAssociationBatchRequest) {
    super(scope, id);
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
          Entries: this.input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociationBatch.Successful', props);
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
          Entries: this.input.entries,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAssociationBatch.Failed', props);
    return resource.getResponseField('Failed') as unknown as shapes.SsmFailedCreateAssociation[];
  }

}

export class SSMCreateDocument extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmCreateDocumentRequest) {
    super(scope, id);
  }

  public get documentDescription(): SSMCreateDocumentDocumentDescription {
    return new SSMCreateDocumentDocumentDescription(this, 'DocumentDescription', this.__resources, this.input);
  }

}

export class SSMCreateDocumentDocumentDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmCreateDocumentRequest) {
    super(scope, id);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.Sha1', props);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.Hash', props);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.HashType', props);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.Name', props);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.VersionName', props);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.Owner', props);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.CreatedDate', props);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.Status', props);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.StatusInformation', props);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.DocumentVersion', props);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.Description', props);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.Parameters', props);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.PlatformTypes', props);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.DocumentType', props);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.SchemaVersion', props);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.LatestVersion', props);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.DefaultVersion', props);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.DocumentFormat', props);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.TargetType', props);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.Tags', props);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.AttachmentsInformation', props);
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
          Content: this.input.content,
          Requires: this.input.requires,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentType: this.input.documentType,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDocument.DocumentDescription.Requires', props);
    return resource.getResponseField('DocumentDescription.Requires') as unknown as shapes.SsmDocumentRequires[];
  }

}

export class SSMCreateMaintenanceWindow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmCreateMaintenanceWindowRequest) {
    super(scope, id);
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
          Name: this.input.name,
          Description: this.input.description,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
          Schedule: this.input.schedule,
          ScheduleTimezone: this.input.scheduleTimezone,
          ScheduleOffset: this.input.scheduleOffset,
          Duration: this.input.duration,
          Cutoff: this.input.cutoff,
          AllowUnassociatedTargets: this.input.allowUnassociatedTargets,
          ClientToken: this.input.clientToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMaintenanceWindow.WindowId', props);
    return resource.getResponseField('WindowId') as unknown as string;
  }

}

export class SSMCreateOpsItem extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmCreateOpsItemRequest) {
    super(scope, id);
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
          Description: this.input.description,
          OperationalData: this.input.operationalData,
          Notifications: this.input.notifications,
          Priority: this.input.priority,
          RelatedOpsItems: this.input.relatedOpsItems,
          Source: this.input.source,
          Title: this.input.title,
          Tags: this.input.tags,
          Category: this.input.category,
          Severity: this.input.severity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateOpsItem.OpsItemId', props);
    return resource.getResponseField('OpsItemId') as unknown as string;
  }

}

export class SSMCreatePatchBaseline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmCreatePatchBaselineRequest) {
    super(scope, id);
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
          OperatingSystem: this.input.operatingSystem,
          Name: this.input.name,
          GlobalFilters: {
            PatchFilters: this.input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.input.rejectedPatches,
          RejectedPatchesAction: this.input.rejectedPatchesAction,
          Description: this.input.description,
          Sources: this.input.sources,
          ClientToken: this.input.clientToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePatchBaseline.BaselineId', props);
    return resource.getResponseField('BaselineId') as unknown as string;
  }

}

export class SSMDeleteInventory extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDeleteInventoryRequest) {
    super(scope, id);
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
          TypeName: this.input.typeName,
          SchemaDeleteOption: this.input.schemaDeleteOption,
          DryRun: this.input.dryRun,
          ClientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteInventory.DeletionId', props);
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
          TypeName: this.input.typeName,
          SchemaDeleteOption: this.input.schemaDeleteOption,
          DryRun: this.input.dryRun,
          ClientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteInventory.TypeName', props);
    return resource.getResponseField('TypeName') as unknown as string;
  }

  public get deletionSummary(): SSMDeleteInventoryDeletionSummary {
    return new SSMDeleteInventoryDeletionSummary(this, 'DeletionSummary', this.__resources, this.input);
  }

}

export class SSMDeleteInventoryDeletionSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDeleteInventoryRequest) {
    super(scope, id);
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
          TypeName: this.input.typeName,
          SchemaDeleteOption: this.input.schemaDeleteOption,
          DryRun: this.input.dryRun,
          ClientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteInventory.DeletionSummary.TotalCount', props);
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
          TypeName: this.input.typeName,
          SchemaDeleteOption: this.input.schemaDeleteOption,
          DryRun: this.input.dryRun,
          ClientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteInventory.DeletionSummary.RemainingCount', props);
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
          TypeName: this.input.typeName,
          SchemaDeleteOption: this.input.schemaDeleteOption,
          DryRun: this.input.dryRun,
          ClientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteInventory.DeletionSummary.SummaryItems', props);
    return resource.getResponseField('DeletionSummary.SummaryItems') as unknown as shapes.SsmInventoryDeletionSummaryItem[];
  }

}

export class SSMDeleteMaintenanceWindow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDeleteMaintenanceWindowRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteMaintenanceWindow.WindowId', props);
    return resource.getResponseField('WindowId') as unknown as string;
  }

}

export class SSMDeleteParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDeleteParametersRequest) {
    super(scope, id);
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
          Names: this.input.names,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteParameters.DeletedParameters', props);
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
          Names: this.input.names,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteParameters.InvalidParameters', props);
    return resource.getResponseField('InvalidParameters') as unknown as string[];
  }

}

export class SSMDeletePatchBaseline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDeletePatchBaselineRequest) {
    super(scope, id);
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
          BaselineId: this.input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeletePatchBaseline.BaselineId', props);
    return resource.getResponseField('BaselineId') as unknown as string;
  }

}

export class SSMDeregisterPatchBaselineForPatchGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDeregisterPatchBaselineForPatchGroupRequest) {
    super(scope, id);
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
          BaselineId: this.input.baselineId,
          PatchGroup: this.input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterPatchBaselineForPatchGroup.BaselineId', props);
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
          BaselineId: this.input.baselineId,
          PatchGroup: this.input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterPatchBaselineForPatchGroup.PatchGroup', props);
    return resource.getResponseField('PatchGroup') as unknown as string;
  }

}

export class SSMDeregisterTargetFromMaintenanceWindow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDeregisterTargetFromMaintenanceWindowRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          WindowTargetId: this.input.windowTargetId,
          Safe: this.input.safe,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTargetFromMaintenanceWindow.WindowId', props);
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
          WindowId: this.input.windowId,
          WindowTargetId: this.input.windowTargetId,
          Safe: this.input.safe,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTargetFromMaintenanceWindow.WindowTargetId', props);
    return resource.getResponseField('WindowTargetId') as unknown as string;
  }

}

export class SSMDeregisterTaskFromMaintenanceWindow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDeregisterTaskFromMaintenanceWindowRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskFromMaintenanceWindow.WindowId', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterTaskFromMaintenanceWindow.WindowTaskId', props);
    return resource.getResponseField('WindowTaskId') as unknown as string;
  }

}

export class SSMDescribeActivations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeActivationsRequest) {
    super(scope, id);
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
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeActivations.ActivationList', props);
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
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeActivations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeAssociationRequest) {
    super(scope, id);
  }

  public get associationDescription(): SSMDescribeAssociationAssociationDescription {
    return new SSMDescribeAssociationAssociationDescription(this, 'AssociationDescription', this.__resources, this.input);
  }

}

export class SSMDescribeAssociationAssociationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeAssociationRequest) {
    super(scope, id);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.Name', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.InstanceId', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.AssociationVersion', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.Date', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.LastUpdateAssociationDate', props);
    return resource.getResponseField('AssociationDescription.LastUpdateAssociationDate') as unknown as string;
  }

  public get status(): SSMDescribeAssociationAssociationDescriptionStatus {
    return new SSMDescribeAssociationAssociationDescriptionStatus(this, 'Status', this.__resources, this.input);
  }

  public get overview(): SSMDescribeAssociationAssociationDescriptionOverview {
    return new SSMDescribeAssociationAssociationDescriptionOverview(this, 'Overview', this.__resources, this.input);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.DocumentVersion', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.AutomationTargetParameterName', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.Parameters', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.AssociationId', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.Targets', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.ScheduleExpression', props);
    return resource.getResponseField('AssociationDescription.ScheduleExpression') as unknown as string;
  }

  public get outputLocation(): SSMDescribeAssociationAssociationDescriptionOutputLocation {
    return new SSMDescribeAssociationAssociationDescriptionOutputLocation(this, 'OutputLocation', this.__resources, this.input);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.LastExecutionDate', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.LastSuccessfulExecutionDate', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.AssociationName', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.MaxErrors', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.MaxConcurrency', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.ComplianceSeverity', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.SyncCompliance', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.ApplyOnlyAtCronInterval', props);
    return resource.getResponseField('AssociationDescription.ApplyOnlyAtCronInterval') as unknown as boolean;
  }

}

export class SSMDescribeAssociationAssociationDescriptionStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeAssociationRequest) {
    super(scope, id);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.Status.Date', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.Status.Name', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.Status.Message', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.Status.AdditionalInfo', props);
    return resource.getResponseField('AssociationDescription.Status.AdditionalInfo') as unknown as string;
  }

}

export class SSMDescribeAssociationAssociationDescriptionOverview extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeAssociationRequest) {
    super(scope, id);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.Overview.Status', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.Overview.DetailedStatus', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.Overview.AssociationStatusAggregatedCount', props);
    return resource.getResponseField('AssociationDescription.Overview.AssociationStatusAggregatedCount') as unknown as Record<string, number>;
  }

}

export class SSMDescribeAssociationAssociationDescriptionOutputLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeAssociationRequest) {
    super(scope, id);
  }

  public get s3Location(): SSMDescribeAssociationAssociationDescriptionOutputLocationS3Location {
    return new SSMDescribeAssociationAssociationDescriptionOutputLocationS3Location(this, 'S3Location', this.__resources, this.input);
  }

}

export class SSMDescribeAssociationAssociationDescriptionOutputLocationS3Location extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeAssociationRequest) {
    super(scope, id);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3Region', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3BucketName', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationId: this.input.associationId,
          AssociationVersion: this.input.associationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix', props);
    return resource.getResponseField('AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix') as unknown as string;
  }

}

export class SSMDescribeAssociationExecutionTargets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeAssociationExecutionTargetsRequest) {
    super(scope, id);
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
          AssociationId: this.input.associationId,
          ExecutionId: this.input.executionId,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociationExecutionTargets.AssociationExecutionTargets', props);
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
          AssociationId: this.input.associationId,
          ExecutionId: this.input.executionId,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociationExecutionTargets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeAssociationExecutions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeAssociationExecutionsRequest) {
    super(scope, id);
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
          AssociationId: this.input.associationId,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociationExecutions.AssociationExecutions', props);
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
          AssociationId: this.input.associationId,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAssociationExecutions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeAutomationExecutions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeAutomationExecutionsRequest) {
    super(scope, id);
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
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutomationExecutions.AutomationExecutionMetadataList', props);
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
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutomationExecutions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeAutomationStepExecutions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeAutomationStepExecutionsRequest) {
    super(scope, id);
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
          AutomationExecutionId: this.input.automationExecutionId,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ReverseOrder: this.input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutomationStepExecutions.StepExecutions', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ReverseOrder: this.input.reverseOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAutomationStepExecutions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeAvailablePatches extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeAvailablePatchesRequest) {
    super(scope, id);
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
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAvailablePatches.Patches', props);
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
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAvailablePatches.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeDocument extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeDocumentRequest) {
    super(scope, id);
  }

  public get document(): SSMDescribeDocumentDocument {
    return new SSMDescribeDocumentDocument(this, 'Document', this.__resources, this.input);
  }

}

export class SSMDescribeDocumentDocument extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeDocumentRequest) {
    super(scope, id);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.Sha1', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.Hash', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.HashType', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.Name', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.VersionName', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.Owner', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.CreatedDate', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.Status', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.StatusInformation', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.DocumentVersion', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.Description', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.Parameters', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.PlatformTypes', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.DocumentType', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.SchemaVersion', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.LatestVersion', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.DefaultVersion', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.DocumentFormat', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.TargetType', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.Tags', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.AttachmentsInformation', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
          VersionName: this.input.versionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocument.Document.Requires', props);
    return resource.getResponseField('Document.Requires') as unknown as shapes.SsmDocumentRequires[];
  }

}

export class SSMDescribeDocumentPermission extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeDocumentPermissionRequest) {
    super(scope, id);
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
          Name: this.input.name,
          PermissionType: this.input.permissionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentPermission.AccountIds', props);
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
          Name: this.input.name,
          PermissionType: this.input.permissionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDocumentPermission.AccountSharingInfoList', props);
    return resource.getResponseField('AccountSharingInfoList') as unknown as shapes.SsmAccountSharingInfo[];
  }

}

export class SSMDescribeEffectiveInstanceAssociations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeEffectiveInstanceAssociationsRequest) {
    super(scope, id);
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
          InstanceId: this.input.instanceId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEffectiveInstanceAssociations.Associations', props);
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
          InstanceId: this.input.instanceId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEffectiveInstanceAssociations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeEffectivePatchesForPatchBaseline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeEffectivePatchesForPatchBaselineRequest) {
    super(scope, id);
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
          BaselineId: this.input.baselineId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEffectivePatchesForPatchBaseline.EffectivePatches', props);
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
          BaselineId: this.input.baselineId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEffectivePatchesForPatchBaseline.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeInstanceAssociationsStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeInstanceAssociationsStatusRequest) {
    super(scope, id);
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
          InstanceId: this.input.instanceId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceAssociationsStatus.InstanceAssociationStatusInfos', props);
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
          InstanceId: this.input.instanceId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceAssociationsStatus.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeInstanceInformation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeInstanceInformationRequest) {
    super(scope, id);
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
          InstanceInformationFilterList: this.input.instanceInformationFilterList,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceInformation.InstanceInformationList', props);
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
          InstanceInformationFilterList: this.input.instanceInformationFilterList,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstanceInformation.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeInstancePatchStates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeInstancePatchStatesRequest) {
    super(scope, id);
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
          InstanceIds: this.input.instanceIds,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstancePatchStates.InstancePatchStates', props);
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
          InstanceIds: this.input.instanceIds,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstancePatchStates.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeInstancePatchStatesForPatchGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeInstancePatchStatesForPatchGroupRequest) {
    super(scope, id);
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
          PatchGroup: this.input.patchGroup,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstancePatchStatesForPatchGroup.InstancePatchStates', props);
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
          PatchGroup: this.input.patchGroup,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstancePatchStatesForPatchGroup.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeInstancePatches extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeInstancePatchesRequest) {
    super(scope, id);
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
          InstanceId: this.input.instanceId,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstancePatches.Patches', props);
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
          InstanceId: this.input.instanceId,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstancePatches.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeInventoryDeletions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeInventoryDeletionsRequest) {
    super(scope, id);
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
          DeletionId: this.input.deletionId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInventoryDeletions.InventoryDeletions', props);
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
          DeletionId: this.input.deletionId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInventoryDeletions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeMaintenanceWindowExecutionTaskInvocations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeMaintenanceWindowExecutionTaskInvocationsRequest) {
    super(scope, id);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceWindowExecutionTaskInvocations.WindowExecutionTaskInvocationIdentities', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceWindowExecutionTaskInvocations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeMaintenanceWindowExecutionTasks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeMaintenanceWindowExecutionTasksRequest) {
    super(scope, id);
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
          WindowExecutionId: this.input.windowExecutionId,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceWindowExecutionTasks.WindowExecutionTaskIdentities', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceWindowExecutionTasks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeMaintenanceWindowExecutions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeMaintenanceWindowExecutionsRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceWindowExecutions.WindowExecutions', props);
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
          WindowId: this.input.windowId,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceWindowExecutions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeMaintenanceWindowSchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeMaintenanceWindowScheduleRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          Targets: this.input.targets,
          ResourceType: this.input.resourceType,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceWindowSchedule.ScheduledWindowExecutions', props);
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
          WindowId: this.input.windowId,
          Targets: this.input.targets,
          ResourceType: this.input.resourceType,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceWindowSchedule.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeMaintenanceWindowTargets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeMaintenanceWindowTargetsRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceWindowTargets.Targets', props);
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
          WindowId: this.input.windowId,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceWindowTargets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeMaintenanceWindowTasks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeMaintenanceWindowTasksRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceWindowTasks.Tasks', props);
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
          WindowId: this.input.windowId,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceWindowTasks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeMaintenanceWindows extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeMaintenanceWindowsRequest) {
    super(scope, id);
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
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceWindows.WindowIdentities', props);
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
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceWindows.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeMaintenanceWindowsForTarget extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeMaintenanceWindowsForTargetRequest) {
    super(scope, id);
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
          Targets: this.input.targets,
          ResourceType: this.input.resourceType,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceWindowsForTarget.WindowIdentities', props);
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
          Targets: this.input.targets,
          ResourceType: this.input.resourceType,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMaintenanceWindowsForTarget.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeOpsItems extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeOpsItemsRequest) {
    super(scope, id);
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
          OpsItemFilters: this.input.opsItemFilters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOpsItems.NextToken', props);
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
          OpsItemFilters: this.input.opsItemFilters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOpsItems.OpsItemSummaries', props);
    return resource.getResponseField('OpsItemSummaries') as unknown as shapes.SsmOpsItemSummary[];
  }

}

export class SSMDescribeParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeParametersRequest) {
    super(scope, id);
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
          Filters: this.input.filters,
          ParameterFilters: this.input.parameterFilters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeParameters.Parameters', props);
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
          Filters: this.input.filters,
          ParameterFilters: this.input.parameterFilters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeParameters.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribePatchBaselines extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribePatchBaselinesRequest) {
    super(scope, id);
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
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePatchBaselines.BaselineIdentities', props);
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
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePatchBaselines.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribePatchGroupState extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribePatchGroupStateRequest) {
    super(scope, id);
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
          PatchGroup: this.input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePatchGroupState.Instances', props);
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
          PatchGroup: this.input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePatchGroupState.InstancesWithInstalledPatches', props);
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
          PatchGroup: this.input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePatchGroupState.InstancesWithInstalledOtherPatches', props);
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
          PatchGroup: this.input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePatchGroupState.InstancesWithInstalledPendingRebootPatches', props);
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
          PatchGroup: this.input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePatchGroupState.InstancesWithInstalledRejectedPatches', props);
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
          PatchGroup: this.input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePatchGroupState.InstancesWithMissingPatches', props);
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
          PatchGroup: this.input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePatchGroupState.InstancesWithFailedPatches', props);
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
          PatchGroup: this.input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePatchGroupState.InstancesWithNotApplicablePatches', props);
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
          PatchGroup: this.input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePatchGroupState.InstancesWithUnreportedNotApplicablePatches', props);
    return resource.getResponseField('InstancesWithUnreportedNotApplicablePatches') as unknown as number;
  }

}

export class SSMDescribePatchGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribePatchGroupsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePatchGroups.Mappings', props);
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
          MaxResults: this.input.maxResults,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePatchGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribePatchProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribePatchPropertiesRequest) {
    super(scope, id);
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
          OperatingSystem: this.input.operatingSystem,
          Property: this.input.property,
          PatchSet: this.input.patchSet,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePatchProperties.Properties', props);
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
          OperatingSystem: this.input.operatingSystem,
          Property: this.input.property,
          PatchSet: this.input.patchSet,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePatchProperties.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMDescribeSessions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmDescribeSessionsRequest) {
    super(scope, id);
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
          State: this.input.state,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSessions.Sessions', props);
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
          State: this.input.state,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSessions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMFetchAutomationExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetAutomationExecutionRequest) {
    super(scope, id);
  }

  public get automationExecution(): SSMFetchAutomationExecutionAutomationExecution {
    return new SSMFetchAutomationExecutionAutomationExecution(this, 'AutomationExecution', this.__resources, this.input);
  }

}

export class SSMFetchAutomationExecutionAutomationExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetAutomationExecutionRequest) {
    super(scope, id);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.AutomationExecutionId', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.DocumentName', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.DocumentVersion', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.ExecutionStartTime', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.ExecutionEndTime', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.AutomationExecutionStatus', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.StepExecutions', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.StepExecutionsTruncated', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.Parameters', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.Outputs', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.FailureMessage', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.Mode', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.ParentAutomationExecutionId', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.ExecutedBy', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.CurrentStepName', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.CurrentAction', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.TargetParameterName', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.Targets', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.TargetMaps', props);
    return resource.getResponseField('AutomationExecution.TargetMaps') as unknown as Record<string, string[]>[];
  }

  public get resolvedTargets(): SSMFetchAutomationExecutionAutomationExecutionResolvedTargets {
    return new SSMFetchAutomationExecutionAutomationExecutionResolvedTargets(this, 'ResolvedTargets', this.__resources, this.input);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.MaxConcurrency', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.MaxErrors', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.Target', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.TargetLocations', props);
    return resource.getResponseField('AutomationExecution.TargetLocations') as unknown as shapes.SsmTargetLocation[];
  }

  public get progressCounters(): SSMFetchAutomationExecutionAutomationExecutionProgressCounters {
    return new SSMFetchAutomationExecutionAutomationExecutionProgressCounters(this, 'ProgressCounters', this.__resources, this.input);
  }

}

export class SSMFetchAutomationExecutionAutomationExecutionResolvedTargets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetAutomationExecutionRequest) {
    super(scope, id);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.ResolvedTargets.ParameterValues', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.ResolvedTargets.Truncated', props);
    return resource.getResponseField('AutomationExecution.ResolvedTargets.Truncated') as unknown as boolean;
  }

}

export class SSMFetchAutomationExecutionAutomationExecutionProgressCounters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetAutomationExecutionRequest) {
    super(scope, id);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.ProgressCounters.TotalSteps', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.ProgressCounters.SuccessSteps', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.ProgressCounters.FailedSteps', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.ProgressCounters.CancelledSteps', props);
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
          AutomationExecutionId: this.input.automationExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAutomationExecution.AutomationExecution.ProgressCounters.TimedOutSteps', props);
    return resource.getResponseField('AutomationExecution.ProgressCounters.TimedOutSteps') as unknown as number;
  }

}

export class SSMFetchCalendarState extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetCalendarStateRequest) {
    super(scope, id);
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
          CalendarNames: this.input.calendarNames,
          AtTime: this.input.atTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCalendarState.State', props);
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
          CalendarNames: this.input.calendarNames,
          AtTime: this.input.atTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCalendarState.AtTime', props);
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
          CalendarNames: this.input.calendarNames,
          AtTime: this.input.atTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCalendarState.NextTransitionTime', props);
    return resource.getResponseField('NextTransitionTime') as unknown as string;
  }

}

export class SSMFetchCommandInvocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetCommandInvocationRequest) {
    super(scope, id);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          PluginName: this.input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommandInvocation.CommandId', props);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          PluginName: this.input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommandInvocation.InstanceId', props);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          PluginName: this.input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommandInvocation.Comment', props);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          PluginName: this.input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommandInvocation.DocumentName', props);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          PluginName: this.input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommandInvocation.DocumentVersion', props);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          PluginName: this.input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommandInvocation.PluginName', props);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          PluginName: this.input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommandInvocation.ResponseCode', props);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          PluginName: this.input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommandInvocation.ExecutionStartDateTime', props);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          PluginName: this.input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommandInvocation.ExecutionElapsedTime', props);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          PluginName: this.input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommandInvocation.ExecutionEndDateTime', props);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          PluginName: this.input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommandInvocation.Status', props);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          PluginName: this.input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommandInvocation.StatusDetails', props);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          PluginName: this.input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommandInvocation.StandardOutputContent', props);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          PluginName: this.input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommandInvocation.StandardOutputUrl', props);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          PluginName: this.input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommandInvocation.StandardErrorContent', props);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          PluginName: this.input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommandInvocation.StandardErrorUrl', props);
    return resource.getResponseField('StandardErrorUrl') as unknown as string;
  }

  public get cloudWatchOutputConfig(): SSMFetchCommandInvocationCloudWatchOutputConfig {
    return new SSMFetchCommandInvocationCloudWatchOutputConfig(this, 'CloudWatchOutputConfig', this.__resources, this.input);
  }

}

export class SSMFetchCommandInvocationCloudWatchOutputConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetCommandInvocationRequest) {
    super(scope, id);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          PluginName: this.input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommandInvocation.CloudWatchOutputConfig.CloudWatchLogGroupName', props);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          PluginName: this.input.pluginName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetCommandInvocation.CloudWatchOutputConfig.CloudWatchOutputEnabled', props);
    return resource.getResponseField('CloudWatchOutputConfig.CloudWatchOutputEnabled') as unknown as boolean;
  }

}

export class SSMFetchConnectionStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetConnectionStatusRequest) {
    super(scope, id);
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
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnectionStatus.Target', props);
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
          Target: this.input.target,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnectionStatus.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

}

export class SSMFetchDefaultPatchBaseline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetDefaultPatchBaselineRequest) {
    super(scope, id);
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
          OperatingSystem: this.input.operatingSystem,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDefaultPatchBaseline.BaselineId', props);
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
          OperatingSystem: this.input.operatingSystem,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDefaultPatchBaseline.OperatingSystem', props);
    return resource.getResponseField('OperatingSystem') as unknown as string;
  }

}

export class SSMFetchDeployablePatchSnapshotForInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetDeployablePatchSnapshotForInstanceRequest) {
    super(scope, id);
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
          InstanceId: this.input.instanceId,
          SnapshotId: this.input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployablePatchSnapshotForInstance.InstanceId', props);
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
          InstanceId: this.input.instanceId,
          SnapshotId: this.input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployablePatchSnapshotForInstance.SnapshotId', props);
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
          InstanceId: this.input.instanceId,
          SnapshotId: this.input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployablePatchSnapshotForInstance.SnapshotDownloadUrl', props);
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
          InstanceId: this.input.instanceId,
          SnapshotId: this.input.snapshotId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDeployablePatchSnapshotForInstance.Product', props);
    return resource.getResponseField('Product') as unknown as string;
  }

}

export class SSMFetchDocument extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetDocumentRequest) {
    super(scope, id);
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
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Name', props);
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
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.VersionName', props);
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
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.DocumentVersion', props);
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
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Status', props);
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
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.StatusInformation', props);
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
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Content', props);
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
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.DocumentType', props);
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
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.DocumentFormat', props);
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
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.Requires', props);
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
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDocument.AttachmentsContent', props);
    return resource.getResponseField('AttachmentsContent') as unknown as shapes.SsmAttachmentContent[];
  }

}

export class SSMFetchInventory extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetInventoryRequest) {
    super(scope, id);
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
          Filters: this.input.filters,
          Aggregators: this.input.aggregators,
          ResultAttributes: this.input.resultAttributes,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInventory.Entities', props);
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
          Filters: this.input.filters,
          Aggregators: this.input.aggregators,
          ResultAttributes: this.input.resultAttributes,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInventory.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMFetchInventorySchema extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetInventorySchemaRequest) {
    super(scope, id);
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
          TypeName: this.input.typeName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Aggregator: this.input.aggregator,
          SubType: this.input.subType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInventorySchema.Schemas', props);
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
          TypeName: this.input.typeName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Aggregator: this.input.aggregator,
          SubType: this.input.subType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetInventorySchema.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMFetchMaintenanceWindow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetMaintenanceWindowRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindow.WindowId', props);
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
          WindowId: this.input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindow.Name', props);
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
          WindowId: this.input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindow.Description', props);
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
          WindowId: this.input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindow.StartDate', props);
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
          WindowId: this.input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindow.EndDate', props);
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
          WindowId: this.input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindow.Schedule', props);
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
          WindowId: this.input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindow.ScheduleTimezone', props);
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
          WindowId: this.input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindow.ScheduleOffset', props);
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
          WindowId: this.input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindow.NextExecutionTime', props);
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
          WindowId: this.input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindow.Duration', props);
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
          WindowId: this.input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindow.Cutoff', props);
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
          WindowId: this.input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindow.AllowUnassociatedTargets', props);
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
          WindowId: this.input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindow.Enabled', props);
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
          WindowId: this.input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindow.CreatedDate', props);
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
          WindowId: this.input.windowId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindow.ModifiedDate', props);
    return resource.getResponseField('ModifiedDate') as unknown as string;
  }

}

export class SSMFetchMaintenanceWindowExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetMaintenanceWindowExecutionRequest) {
    super(scope, id);
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
          WindowExecutionId: this.input.windowExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecution.WindowExecutionId', props);
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
          WindowExecutionId: this.input.windowExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecution.TaskIds', props);
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
          WindowExecutionId: this.input.windowExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecution.Status', props);
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
          WindowExecutionId: this.input.windowExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecution.StatusDetails', props);
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
          WindowExecutionId: this.input.windowExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecution.StartTime', props);
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
          WindowExecutionId: this.input.windowExecutionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecution.EndTime', props);
    return resource.getResponseField('EndTime') as unknown as string;
  }

}

export class SSMFetchMaintenanceWindowExecutionTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetMaintenanceWindowExecutionTaskRequest) {
    super(scope, id);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTask.WindowExecutionId', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTask.TaskExecutionId', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTask.TaskArn', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTask.ServiceRole', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTask.Type', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTask.TaskParameters', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTask.Priority', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTask.MaxConcurrency', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTask.MaxErrors', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTask.Status', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTask.StatusDetails', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTask.StartTime', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTask.EndTime', props);
    return resource.getResponseField('EndTime') as unknown as string;
  }

}

export class SSMFetchMaintenanceWindowExecutionTaskInvocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetMaintenanceWindowExecutionTaskInvocationRequest) {
    super(scope, id);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
          InvocationId: this.input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTaskInvocation.WindowExecutionId', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
          InvocationId: this.input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTaskInvocation.TaskExecutionId', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
          InvocationId: this.input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTaskInvocation.InvocationId', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
          InvocationId: this.input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTaskInvocation.ExecutionId', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
          InvocationId: this.input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTaskInvocation.TaskType', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
          InvocationId: this.input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTaskInvocation.Parameters', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
          InvocationId: this.input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTaskInvocation.Status', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
          InvocationId: this.input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTaskInvocation.StatusDetails', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
          InvocationId: this.input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTaskInvocation.StartTime', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
          InvocationId: this.input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTaskInvocation.EndTime', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
          InvocationId: this.input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTaskInvocation.OwnerInformation', props);
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
          WindowExecutionId: this.input.windowExecutionId,
          TaskId: this.input.taskId,
          InvocationId: this.input.invocationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowExecutionTaskInvocation.WindowTargetId', props);
    return resource.getResponseField('WindowTargetId') as unknown as string;
  }

}

export class SSMFetchMaintenanceWindowTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetMaintenanceWindowTaskRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.WindowId', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.WindowTaskId', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.Targets', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskArn', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.ServiceRoleArn', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskType', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskParameters', props);
    return resource.getResponseField('TaskParameters') as unknown as Record<string, shapes.SsmMaintenanceWindowTaskParameterValueExpression>;
  }

  public get taskInvocationParameters(): SSMFetchMaintenanceWindowTaskTaskInvocationParameters {
    return new SSMFetchMaintenanceWindowTaskTaskInvocationParameters(this, 'TaskInvocationParameters', this.__resources, this.input);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.Priority', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.MaxConcurrency', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.MaxErrors', props);
    return resource.getResponseField('MaxErrors') as unknown as string;
  }

  public get loggingInfo(): SSMFetchMaintenanceWindowTaskLoggingInfo {
    return new SSMFetchMaintenanceWindowTaskLoggingInfo(this, 'LoggingInfo', this.__resources, this.input);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.Name', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class SSMFetchMaintenanceWindowTaskTaskInvocationParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetMaintenanceWindowTaskRequest) {
    super(scope, id);
  }

  public get runCommand(): SSMFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand {
    return new SSMFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand(this, 'RunCommand', this.__resources, this.input);
  }

  public get automation(): SSMFetchMaintenanceWindowTaskTaskInvocationParametersAutomation {
    return new SSMFetchMaintenanceWindowTaskTaskInvocationParametersAutomation(this, 'Automation', this.__resources, this.input);
  }

  public get stepFunctions(): SSMFetchMaintenanceWindowTaskTaskInvocationParametersStepFunctions {
    return new SSMFetchMaintenanceWindowTaskTaskInvocationParametersStepFunctions(this, 'StepFunctions', this.__resources, this.input);
  }

  public get lambda(): SSMFetchMaintenanceWindowTaskTaskInvocationParametersLambda {
    return new SSMFetchMaintenanceWindowTaskTaskInvocationParametersLambda(this, 'Lambda', this.__resources, this.input);
  }

}

export class SSMFetchMaintenanceWindowTaskTaskInvocationParametersRunCommand extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetMaintenanceWindowTaskRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.Comment', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.Comment') as unknown as string;
  }

  public get cloudWatchOutputConfig(): SSMFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig {
    return new SSMFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig(this, 'CloudWatchOutputConfig', this.__resources, this.input);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.DocumentHash', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.DocumentHashType', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.DocumentVersion', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.DocumentVersion') as unknown as string;
  }

  public get notificationConfig(): SSMFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig {
    return new SSMFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig(this, 'NotificationConfig', this.__resources, this.input);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.OutputS3BucketName', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.OutputS3KeyPrefix', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.Parameters', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.ServiceRoleArn', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.TimeoutSeconds', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.TimeoutSeconds') as unknown as number;
  }

}

export class SSMFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetMaintenanceWindowTaskRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchLogGroupName', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchOutputEnabled', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchOutputEnabled') as unknown as boolean;
  }

}

export class SSMFetchMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetMaintenanceWindowTaskRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.NotificationConfig.NotificationArn', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.NotificationConfig.NotificationEvents', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskInvocationParameters.RunCommand.NotificationConfig.NotificationType', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.NotificationConfig.NotificationType') as unknown as string;
  }

}

export class SSMFetchMaintenanceWindowTaskTaskInvocationParametersAutomation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetMaintenanceWindowTaskRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskInvocationParameters.Automation.DocumentVersion', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskInvocationParameters.Automation.Parameters', props);
    return resource.getResponseField('TaskInvocationParameters.Automation.Parameters') as unknown as Record<string, string[]>;
  }

}

export class SSMFetchMaintenanceWindowTaskTaskInvocationParametersStepFunctions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetMaintenanceWindowTaskRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskInvocationParameters.StepFunctions.Input', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskInvocationParameters.StepFunctions.Name', props);
    return resource.getResponseField('TaskInvocationParameters.StepFunctions.Name') as unknown as string;
  }

}

export class SSMFetchMaintenanceWindowTaskTaskInvocationParametersLambda extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetMaintenanceWindowTaskRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskInvocationParameters.Lambda.ClientContext', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskInvocationParameters.Lambda.Qualifier', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.TaskInvocationParameters.Lambda.Payload', props);
    return resource.getResponseField('TaskInvocationParameters.Lambda.Payload') as unknown as any;
  }

}

export class SSMFetchMaintenanceWindowTaskLoggingInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetMaintenanceWindowTaskRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.LoggingInfo.S3BucketName', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.LoggingInfo.S3KeyPrefix', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMaintenanceWindowTask.LoggingInfo.S3Region', props);
    return resource.getResponseField('LoggingInfo.S3Region') as unknown as string;
  }

}

export class SSMFetchOpsItem extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetOpsItemRequest) {
    super(scope, id);
  }

  public get opsItem(): SSMFetchOpsItemOpsItem {
    return new SSMFetchOpsItemOpsItem(this, 'OpsItem', this.__resources, this.input);
  }

}

export class SSMFetchOpsItemOpsItem extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetOpsItemRequest) {
    super(scope, id);
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
          OpsItemId: this.input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpsItem.OpsItem.CreatedBy', props);
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
          OpsItemId: this.input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpsItem.OpsItem.CreatedTime', props);
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
          OpsItemId: this.input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpsItem.OpsItem.Description', props);
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
          OpsItemId: this.input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpsItem.OpsItem.LastModifiedBy', props);
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
          OpsItemId: this.input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpsItem.OpsItem.LastModifiedTime', props);
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
          OpsItemId: this.input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpsItem.OpsItem.Notifications', props);
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
          OpsItemId: this.input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpsItem.OpsItem.Priority', props);
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
          OpsItemId: this.input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpsItem.OpsItem.RelatedOpsItems', props);
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
          OpsItemId: this.input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpsItem.OpsItem.Status', props);
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
          OpsItemId: this.input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpsItem.OpsItem.OpsItemId', props);
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
          OpsItemId: this.input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpsItem.OpsItem.Version', props);
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
          OpsItemId: this.input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpsItem.OpsItem.Title', props);
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
          OpsItemId: this.input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpsItem.OpsItem.Source', props);
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
          OpsItemId: this.input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpsItem.OpsItem.OperationalData', props);
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
          OpsItemId: this.input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpsItem.OpsItem.Category', props);
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
          OpsItemId: this.input.opsItemId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpsItem.OpsItem.Severity', props);
    return resource.getResponseField('OpsItem.Severity') as unknown as string;
  }

}

export class SSMFetchOpsSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetOpsSummaryRequest) {
    super(scope, id);
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
          SyncName: this.input.syncName,
          Filters: this.input.filters,
          Aggregators: this.input.aggregators,
          ResultAttributes: this.input.resultAttributes,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpsSummary.Entities', props);
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
          SyncName: this.input.syncName,
          Filters: this.input.filters,
          Aggregators: this.input.aggregators,
          ResultAttributes: this.input.resultAttributes,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetOpsSummary.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMFetchParameter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetParameterRequest) {
    super(scope, id);
  }

  public get parameter(): SSMFetchParameterParameter {
    return new SSMFetchParameterParameter(this, 'Parameter', this.__resources, this.input);
  }

}

export class SSMFetchParameterParameter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetParameterRequest) {
    super(scope, id);
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
          Name: this.input.name,
          WithDecryption: this.input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParameter.Parameter.Name', props);
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
          Name: this.input.name,
          WithDecryption: this.input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParameter.Parameter.Type', props);
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
          Name: this.input.name,
          WithDecryption: this.input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParameter.Parameter.Value', props);
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
          Name: this.input.name,
          WithDecryption: this.input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParameter.Parameter.Version', props);
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
          Name: this.input.name,
          WithDecryption: this.input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParameter.Parameter.Selector', props);
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
          Name: this.input.name,
          WithDecryption: this.input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParameter.Parameter.SourceResult', props);
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
          Name: this.input.name,
          WithDecryption: this.input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParameter.Parameter.LastModifiedDate', props);
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
          Name: this.input.name,
          WithDecryption: this.input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParameter.Parameter.ARN', props);
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
          Name: this.input.name,
          WithDecryption: this.input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParameter.Parameter.DataType', props);
    return resource.getResponseField('Parameter.DataType') as unknown as string;
  }

}

export class SSMFetchParameterHistory extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetParameterHistoryRequest) {
    super(scope, id);
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
          Name: this.input.name,
          WithDecryption: this.input.withDecryption,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParameterHistory.Parameters', props);
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
          Name: this.input.name,
          WithDecryption: this.input.withDecryption,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParameterHistory.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMFetchParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetParametersRequest) {
    super(scope, id);
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
          Names: this.input.names,
          WithDecryption: this.input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParameters.Parameters', props);
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
          Names: this.input.names,
          WithDecryption: this.input.withDecryption,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParameters.InvalidParameters', props);
    return resource.getResponseField('InvalidParameters') as unknown as string[];
  }

}

export class SSMFetchParametersByPath extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetParametersByPathRequest) {
    super(scope, id);
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
          Path: this.input.path,
          Recursive: this.input.recursive,
          ParameterFilters: this.input.parameterFilters,
          WithDecryption: this.input.withDecryption,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParametersByPath.Parameters', props);
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
          Path: this.input.path,
          Recursive: this.input.recursive,
          ParameterFilters: this.input.parameterFilters,
          WithDecryption: this.input.withDecryption,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetParametersByPath.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMFetchPatchBaseline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetPatchBaselineRequest) {
    super(scope, id);
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
          BaselineId: this.input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPatchBaseline.BaselineId', props);
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
          BaselineId: this.input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPatchBaseline.Name', props);
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
          BaselineId: this.input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPatchBaseline.OperatingSystem', props);
    return resource.getResponseField('OperatingSystem') as unknown as string;
  }

  public get globalFilters(): SSMFetchPatchBaselineGlobalFilters {
    return new SSMFetchPatchBaselineGlobalFilters(this, 'GlobalFilters', this.__resources, this.input);
  }

  public get approvalRules(): SSMFetchPatchBaselineApprovalRules {
    return new SSMFetchPatchBaselineApprovalRules(this, 'ApprovalRules', this.__resources, this.input);
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
          BaselineId: this.input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPatchBaseline.ApprovedPatches', props);
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
          BaselineId: this.input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPatchBaseline.ApprovedPatchesComplianceLevel', props);
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
          BaselineId: this.input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPatchBaseline.ApprovedPatchesEnableNonSecurity', props);
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
          BaselineId: this.input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPatchBaseline.RejectedPatches', props);
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
          BaselineId: this.input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPatchBaseline.RejectedPatchesAction', props);
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
          BaselineId: this.input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPatchBaseline.PatchGroups', props);
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
          BaselineId: this.input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPatchBaseline.CreatedDate', props);
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
          BaselineId: this.input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPatchBaseline.ModifiedDate', props);
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
          BaselineId: this.input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPatchBaseline.Description', props);
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
          BaselineId: this.input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPatchBaseline.Sources', props);
    return resource.getResponseField('Sources') as unknown as shapes.SsmPatchSource[];
  }

}

export class SSMFetchPatchBaselineGlobalFilters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetPatchBaselineRequest) {
    super(scope, id);
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
          BaselineId: this.input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPatchBaseline.GlobalFilters.PatchFilters', props);
    return resource.getResponseField('GlobalFilters.PatchFilters') as unknown as shapes.SsmPatchFilter[];
  }

}

export class SSMFetchPatchBaselineApprovalRules extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetPatchBaselineRequest) {
    super(scope, id);
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
          BaselineId: this.input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPatchBaseline.ApprovalRules.PatchRules', props);
    return resource.getResponseField('ApprovalRules.PatchRules') as unknown as shapes.SsmPatchRule[];
  }

}

export class SSMFetchPatchBaselineForPatchGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetPatchBaselineForPatchGroupRequest) {
    super(scope, id);
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
          PatchGroup: this.input.patchGroup,
          OperatingSystem: this.input.operatingSystem,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPatchBaselineForPatchGroup.BaselineId', props);
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
          PatchGroup: this.input.patchGroup,
          OperatingSystem: this.input.operatingSystem,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPatchBaselineForPatchGroup.PatchGroup', props);
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
          PatchGroup: this.input.patchGroup,
          OperatingSystem: this.input.operatingSystem,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetPatchBaselineForPatchGroup.OperatingSystem', props);
    return resource.getResponseField('OperatingSystem') as unknown as string;
  }

}

export class SSMFetchServiceSetting extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetServiceSettingRequest) {
    super(scope, id);
  }

  public get serviceSetting(): SSMFetchServiceSettingServiceSetting {
    return new SSMFetchServiceSettingServiceSetting(this, 'ServiceSetting', this.__resources, this.input);
  }

}

export class SSMFetchServiceSettingServiceSetting extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmGetServiceSettingRequest) {
    super(scope, id);
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
          SettingId: this.input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceSetting.ServiceSetting.SettingId', props);
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
          SettingId: this.input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceSetting.ServiceSetting.SettingValue', props);
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
          SettingId: this.input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceSetting.ServiceSetting.LastModifiedDate', props);
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
          SettingId: this.input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceSetting.ServiceSetting.LastModifiedUser', props);
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
          SettingId: this.input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceSetting.ServiceSetting.ARN', props);
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
          SettingId: this.input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetServiceSetting.ServiceSetting.Status', props);
    return resource.getResponseField('ServiceSetting.Status') as unknown as string;
  }

}

export class SSMLabelParameterVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmLabelParameterVersionRequest) {
    super(scope, id);
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
          Name: this.input.name,
          ParameterVersion: this.input.parameterVersion,
          Labels: this.input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'LabelParameterVersion.InvalidLabels', props);
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
          Name: this.input.name,
          ParameterVersion: this.input.parameterVersion,
          Labels: this.input.labels,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'LabelParameterVersion.ParameterVersion', props);
    return resource.getResponseField('ParameterVersion') as unknown as number;
  }

}

export class SSMListAssociationVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmListAssociationVersionsRequest) {
    super(scope, id);
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
          AssociationId: this.input.associationId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssociationVersions.AssociationVersions', props);
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
          AssociationId: this.input.associationId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssociationVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMListAssociations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmListAssociationsRequest) {
    super(scope, id);
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
          AssociationFilterList: this.input.associationFilterList,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssociations.Associations', props);
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
          AssociationFilterList: this.input.associationFilterList,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssociations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMListCommandInvocations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmListCommandInvocationsRequest) {
    super(scope, id);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
          Details: this.input.details,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCommandInvocations.CommandInvocations', props);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
          Details: this.input.details,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCommandInvocations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMListCommands extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmListCommandsRequest) {
    super(scope, id);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCommands.Commands', props);
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
          CommandId: this.input.commandId,
          InstanceId: this.input.instanceId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCommands.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMListComplianceItems extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmListComplianceItemsRequest) {
    super(scope, id);
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
          Filters: this.input.filters,
          ResourceIds: this.input.resourceIds,
          ResourceTypes: this.input.resourceTypes,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListComplianceItems.ComplianceItems', props);
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
          Filters: this.input.filters,
          ResourceIds: this.input.resourceIds,
          ResourceTypes: this.input.resourceTypes,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListComplianceItems.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMListComplianceSummaries extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmListComplianceSummariesRequest) {
    super(scope, id);
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
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListComplianceSummaries.ComplianceSummaryItems', props);
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
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListComplianceSummaries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMListDocumentVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmListDocumentVersionsRequest) {
    super(scope, id);
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
          Name: this.input.name,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDocumentVersions.DocumentVersions', props);
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
          Name: this.input.name,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDocumentVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMListDocuments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmListDocumentsRequest) {
    super(scope, id);
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
          DocumentFilterList: this.input.documentFilterList,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDocuments.DocumentIdentifiers', props);
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
          DocumentFilterList: this.input.documentFilterList,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDocuments.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMListInventoryEntries extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmListInventoryEntriesRequest) {
    super(scope, id);
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
          InstanceId: this.input.instanceId,
          TypeName: this.input.typeName,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInventoryEntries.TypeName', props);
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
          InstanceId: this.input.instanceId,
          TypeName: this.input.typeName,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInventoryEntries.InstanceId', props);
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
          InstanceId: this.input.instanceId,
          TypeName: this.input.typeName,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInventoryEntries.SchemaVersion', props);
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
          InstanceId: this.input.instanceId,
          TypeName: this.input.typeName,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInventoryEntries.CaptureTime', props);
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
          InstanceId: this.input.instanceId,
          TypeName: this.input.typeName,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInventoryEntries.Entries', props);
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
          InstanceId: this.input.instanceId,
          TypeName: this.input.typeName,
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListInventoryEntries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMListResourceComplianceSummaries extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmListResourceComplianceSummariesRequest) {
    super(scope, id);
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
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceComplianceSummaries.ResourceComplianceSummaryItems', props);
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
          Filters: this.input.filters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceComplianceSummaries.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMListResourceDataSync extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmListResourceDataSyncRequest) {
    super(scope, id);
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
          SyncType: this.input.syncType,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceDataSync.ResourceDataSyncItems', props);
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
          SyncType: this.input.syncType,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResourceDataSync.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class SSMListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceType: this.input.resourceType,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.TagList', props);
    return resource.getResponseField('TagList') as unknown as shapes.SsmTag[];
  }

}

export class SSMPutInventory extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmPutInventoryRequest) {
    super(scope, id);
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
          InstanceId: this.input.instanceId,
          Items: this.input.items,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutInventory.Message', props);
    return resource.getResponseField('Message') as unknown as string;
  }

}

export class SSMPutParameter extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmPutParameterRequest) {
    super(scope, id);
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
          Name: this.input.name,
          Description: this.input.description,
          Value: this.input.value,
          Type: this.input.type,
          KeyId: this.input.keyId,
          Overwrite: this.input.overwrite,
          AllowedPattern: this.input.allowedPattern,
          Tags: this.input.tags,
          Tier: this.input.tier,
          Policies: this.input.policies,
          DataType: this.input.dataType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutParameter.Version', props);
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
          Name: this.input.name,
          Description: this.input.description,
          Value: this.input.value,
          Type: this.input.type,
          KeyId: this.input.keyId,
          Overwrite: this.input.overwrite,
          AllowedPattern: this.input.allowedPattern,
          Tags: this.input.tags,
          Tier: this.input.tier,
          Policies: this.input.policies,
          DataType: this.input.dataType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutParameter.Tier', props);
    return resource.getResponseField('Tier') as unknown as string;
  }

}

export class SSMRegisterDefaultPatchBaseline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmRegisterDefaultPatchBaselineRequest) {
    super(scope, id);
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
          BaselineId: this.input.baselineId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterDefaultPatchBaseline.BaselineId', props);
    return resource.getResponseField('BaselineId') as unknown as string;
  }

}

export class SSMRegisterPatchBaselineForPatchGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmRegisterPatchBaselineForPatchGroupRequest) {
    super(scope, id);
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
          BaselineId: this.input.baselineId,
          PatchGroup: this.input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterPatchBaselineForPatchGroup.BaselineId', props);
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
          BaselineId: this.input.baselineId,
          PatchGroup: this.input.patchGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterPatchBaselineForPatchGroup.PatchGroup', props);
    return resource.getResponseField('PatchGroup') as unknown as string;
  }

}

export class SSMRegisterTargetWithMaintenanceWindow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmRegisterTargetWithMaintenanceWindowRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          ResourceType: this.input.resourceType,
          Targets: this.input.targets,
          OwnerInformation: this.input.ownerInformation,
          Name: this.input.name,
          Description: this.input.description,
          ClientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTargetWithMaintenanceWindow.WindowTargetId', props);
    return resource.getResponseField('WindowTargetId') as unknown as string;
  }

}

export class SSMRegisterTaskWithMaintenanceWindow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmRegisterTaskWithMaintenanceWindowRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskType: this.input.taskType,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          ClientToken: this.input.clientToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterTaskWithMaintenanceWindow.WindowTaskId', props);
    return resource.getResponseField('WindowTaskId') as unknown as string;
  }

}

export class SSMResetServiceSetting extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmResetServiceSettingRequest) {
    super(scope, id);
  }

  public get serviceSetting(): SSMResetServiceSettingServiceSetting {
    return new SSMResetServiceSettingServiceSetting(this, 'ServiceSetting', this.__resources, this.input);
  }

}

export class SSMResetServiceSettingServiceSetting extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmResetServiceSettingRequest) {
    super(scope, id);
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
          SettingId: this.input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetServiceSetting.ServiceSetting.SettingId', props);
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
          SettingId: this.input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetServiceSetting.ServiceSetting.SettingValue', props);
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
          SettingId: this.input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetServiceSetting.ServiceSetting.LastModifiedDate', props);
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
          SettingId: this.input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetServiceSetting.ServiceSetting.LastModifiedUser', props);
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
          SettingId: this.input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetServiceSetting.ServiceSetting.ARN', props);
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
          SettingId: this.input.settingId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetServiceSetting.ServiceSetting.Status', props);
    return resource.getResponseField('ServiceSetting.Status') as unknown as string;
  }

}

export class SSMResumeSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmResumeSessionRequest) {
    super(scope, id);
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
          SessionId: this.input.sessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResumeSession.SessionId', props);
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
          SessionId: this.input.sessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResumeSession.TokenValue', props);
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
          SessionId: this.input.sessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResumeSession.StreamUrl', props);
    return resource.getResponseField('StreamUrl') as unknown as string;
  }

}

export class SSMSendCommand extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmSendCommandRequest) {
    super(scope, id);
  }

  public get command(): SSMSendCommandCommand {
    return new SSMSendCommandCommand(this, 'Command', this.__resources, this.input);
  }

}

export class SSMSendCommandCommand extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmSendCommandRequest) {
    super(scope, id);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.CommandId', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.DocumentName', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.DocumentVersion', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.Comment', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.ExpiresAfter', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.Parameters', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.InstanceIds', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.Targets', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.RequestedDateTime', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.Status', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.StatusDetails', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.OutputS3Region', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.OutputS3BucketName', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.OutputS3KeyPrefix', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.MaxConcurrency', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.MaxErrors', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.TargetCount', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.CompletedCount', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.ErrorCount', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.DeliveryTimedOutCount', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.ServiceRole', props);
    return resource.getResponseField('Command.ServiceRole') as unknown as string;
  }

  public get notificationConfig(): SSMSendCommandCommandNotificationConfig {
    return new SSMSendCommandCommandNotificationConfig(this, 'NotificationConfig', this.__resources, this.input);
  }

  public get cloudWatchOutputConfig(): SSMSendCommandCommandCloudWatchOutputConfig {
    return new SSMSendCommandCommandCloudWatchOutputConfig(this, 'CloudWatchOutputConfig', this.__resources, this.input);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.TimeoutSeconds', props);
    return resource.getResponseField('Command.TimeoutSeconds') as unknown as number;
  }

}

export class SSMSendCommandCommandNotificationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmSendCommandRequest) {
    super(scope, id);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.NotificationConfig.NotificationArn', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.NotificationConfig.NotificationEvents', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.NotificationConfig.NotificationType', props);
    return resource.getResponseField('Command.NotificationConfig.NotificationType') as unknown as string;
  }

}

export class SSMSendCommandCommandCloudWatchOutputConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmSendCommandRequest) {
    super(scope, id);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.CloudWatchOutputConfig.CloudWatchLogGroupName', props);
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
          InstanceIds: this.input.instanceIds,
          Targets: this.input.targets,
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          DocumentHash: this.input.documentHash,
          DocumentHashType: this.input.documentHashType,
          TimeoutSeconds: this.input.timeoutSeconds,
          Comment: this.input.comment,
          Parameters: this.input.parameters,
          OutputS3Region: this.input.outputS3Region,
          OutputS3BucketName: this.input.outputS3BucketName,
          OutputS3KeyPrefix: this.input.outputS3KeyPrefix,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          ServiceRoleArn: this.input.serviceRoleArn,
          NotificationConfig: {
            NotificationArn: this.input.notificationConfig?.notificationArn,
            NotificationEvents: this.input.notificationConfig?.notificationEvents,
            NotificationType: this.input.notificationConfig?.notificationType,
          },
          CloudWatchOutputConfig: {
            CloudWatchLogGroupName: this.input.cloudWatchOutputConfig?.cloudWatchLogGroupName,
            CloudWatchOutputEnabled: this.input.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SendCommand.Command.CloudWatchOutputConfig.CloudWatchOutputEnabled', props);
    return resource.getResponseField('Command.CloudWatchOutputConfig.CloudWatchOutputEnabled') as unknown as boolean;
  }

}

export class SSMStartAutomationExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmStartAutomationExecutionRequest) {
    super(scope, id);
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
          DocumentName: this.input.documentName,
          DocumentVersion: this.input.documentVersion,
          Parameters: this.input.parameters,
          ClientToken: this.input.clientToken,
          Mode: this.input.mode,
          TargetParameterName: this.input.targetParameterName,
          Targets: this.input.targets,
          TargetMaps: this.input.targetMaps,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          TargetLocations: this.input.targetLocations,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartAutomationExecution.AutomationExecutionId', props);
    return resource.getResponseField('AutomationExecutionId') as unknown as string;
  }

}

export class SSMStartSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmStartSessionRequest) {
    super(scope, id);
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
          Target: this.input.target,
          DocumentName: this.input.documentName,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSession.SessionId', props);
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
          Target: this.input.target,
          DocumentName: this.input.documentName,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSession.TokenValue', props);
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
          Target: this.input.target,
          DocumentName: this.input.documentName,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSession.StreamUrl', props);
    return resource.getResponseField('StreamUrl') as unknown as string;
  }

}

export class SSMTerminateSession extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmTerminateSessionRequest) {
    super(scope, id);
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
          SessionId: this.input.sessionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateSession.SessionId', props);
    return resource.getResponseField('SessionId') as unknown as string;
  }

}

export class SSMUpdateAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateAssociationRequest) {
    super(scope, id);
  }

  public get associationDescription(): SSMUpdateAssociationAssociationDescription {
    return new SSMUpdateAssociationAssociationDescription(this, 'AssociationDescription', this.__resources, this.input);
  }

}

export class SSMUpdateAssociationAssociationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateAssociationRequest) {
    super(scope, id);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.Name', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.InstanceId', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.AssociationVersion', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.Date', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.LastUpdateAssociationDate', props);
    return resource.getResponseField('AssociationDescription.LastUpdateAssociationDate') as unknown as string;
  }

  public get status(): SSMUpdateAssociationAssociationDescriptionStatus {
    return new SSMUpdateAssociationAssociationDescriptionStatus(this, 'Status', this.__resources, this.input);
  }

  public get overview(): SSMUpdateAssociationAssociationDescriptionOverview {
    return new SSMUpdateAssociationAssociationDescriptionOverview(this, 'Overview', this.__resources, this.input);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.DocumentVersion', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.AutomationTargetParameterName', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.Parameters', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.AssociationId', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.Targets', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.ScheduleExpression', props);
    return resource.getResponseField('AssociationDescription.ScheduleExpression') as unknown as string;
  }

  public get outputLocation(): SSMUpdateAssociationAssociationDescriptionOutputLocation {
    return new SSMUpdateAssociationAssociationDescriptionOutputLocation(this, 'OutputLocation', this.__resources, this.input);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.LastExecutionDate', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.LastSuccessfulExecutionDate', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.AssociationName', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.MaxErrors', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.MaxConcurrency', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.ComplianceSeverity', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.SyncCompliance', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.ApplyOnlyAtCronInterval', props);
    return resource.getResponseField('AssociationDescription.ApplyOnlyAtCronInterval') as unknown as boolean;
  }

}

export class SSMUpdateAssociationAssociationDescriptionStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateAssociationRequest) {
    super(scope, id);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.Status.Date', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.Status.Name', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.Status.Message', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.Status.AdditionalInfo', props);
    return resource.getResponseField('AssociationDescription.Status.AdditionalInfo') as unknown as string;
  }

}

export class SSMUpdateAssociationAssociationDescriptionOverview extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateAssociationRequest) {
    super(scope, id);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.Overview.Status', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.Overview.DetailedStatus', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.Overview.AssociationStatusAggregatedCount', props);
    return resource.getResponseField('AssociationDescription.Overview.AssociationStatusAggregatedCount') as unknown as Record<string, number>;
  }

}

export class SSMUpdateAssociationAssociationDescriptionOutputLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateAssociationRequest) {
    super(scope, id);
  }

  public get s3Location(): SSMUpdateAssociationAssociationDescriptionOutputLocationS3Location {
    return new SSMUpdateAssociationAssociationDescriptionOutputLocationS3Location(this, 'S3Location', this.__resources, this.input);
  }

}

export class SSMUpdateAssociationAssociationDescriptionOutputLocationS3Location extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateAssociationRequest) {
    super(scope, id);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3Region', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3BucketName', props);
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
          AssociationId: this.input.associationId,
          Parameters: this.input.parameters,
          DocumentVersion: this.input.documentVersion,
          ScheduleExpression: this.input.scheduleExpression,
          OutputLocation: {
            S3Location: {
              OutputS3Region: this.input.outputLocation?.s3Location?.outputS3Region,
              OutputS3BucketName: this.input.outputLocation?.s3Location?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.outputLocation?.s3Location?.outputS3KeyPrefix,
            },
          },
          Name: this.input.name,
          Targets: this.input.targets,
          AssociationName: this.input.associationName,
          AssociationVersion: this.input.associationVersion,
          AutomationTargetParameterName: this.input.automationTargetParameterName,
          MaxErrors: this.input.maxErrors,
          MaxConcurrency: this.input.maxConcurrency,
          ComplianceSeverity: this.input.complianceSeverity,
          SyncCompliance: this.input.syncCompliance,
          ApplyOnlyAtCronInterval: this.input.applyOnlyAtCronInterval,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociation.AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix', props);
    return resource.getResponseField('AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix') as unknown as string;
  }

}

export class SSMUpdateAssociationStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateAssociationStatusRequest) {
    super(scope, id);
  }

  public get associationDescription(): SSMUpdateAssociationStatusAssociationDescription {
    return new SSMUpdateAssociationStatusAssociationDescription(this, 'AssociationDescription', this.__resources, this.input);
  }

}

export class SSMUpdateAssociationStatusAssociationDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateAssociationStatusRequest) {
    super(scope, id);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.Name', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.InstanceId', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.AssociationVersion', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.Date', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.LastUpdateAssociationDate', props);
    return resource.getResponseField('AssociationDescription.LastUpdateAssociationDate') as unknown as string;
  }

  public get status(): SSMUpdateAssociationStatusAssociationDescriptionStatus {
    return new SSMUpdateAssociationStatusAssociationDescriptionStatus(this, 'Status', this.__resources, this.input);
  }

  public get overview(): SSMUpdateAssociationStatusAssociationDescriptionOverview {
    return new SSMUpdateAssociationStatusAssociationDescriptionOverview(this, 'Overview', this.__resources, this.input);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.DocumentVersion', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.AutomationTargetParameterName', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.Parameters', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.AssociationId', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.Targets', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.ScheduleExpression', props);
    return resource.getResponseField('AssociationDescription.ScheduleExpression') as unknown as string;
  }

  public get outputLocation(): SSMUpdateAssociationStatusAssociationDescriptionOutputLocation {
    return new SSMUpdateAssociationStatusAssociationDescriptionOutputLocation(this, 'OutputLocation', this.__resources, this.input);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.LastExecutionDate', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.LastSuccessfulExecutionDate', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.AssociationName', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.MaxErrors', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.MaxConcurrency', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.ComplianceSeverity', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.SyncCompliance', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.ApplyOnlyAtCronInterval', props);
    return resource.getResponseField('AssociationDescription.ApplyOnlyAtCronInterval') as unknown as boolean;
  }

}

export class SSMUpdateAssociationStatusAssociationDescriptionStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateAssociationStatusRequest) {
    super(scope, id);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.Status.Date', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.Status.Name', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.Status.Message', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.Status.AdditionalInfo', props);
    return resource.getResponseField('AssociationDescription.Status.AdditionalInfo') as unknown as string;
  }

}

export class SSMUpdateAssociationStatusAssociationDescriptionOverview extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateAssociationStatusRequest) {
    super(scope, id);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.Overview.Status', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.Overview.DetailedStatus', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.Overview.AssociationStatusAggregatedCount', props);
    return resource.getResponseField('AssociationDescription.Overview.AssociationStatusAggregatedCount') as unknown as Record<string, number>;
  }

}

export class SSMUpdateAssociationStatusAssociationDescriptionOutputLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateAssociationStatusRequest) {
    super(scope, id);
  }

  public get s3Location(): SSMUpdateAssociationStatusAssociationDescriptionOutputLocationS3Location {
    return new SSMUpdateAssociationStatusAssociationDescriptionOutputLocationS3Location(this, 'S3Location', this.__resources, this.input);
  }

}

export class SSMUpdateAssociationStatusAssociationDescriptionOutputLocationS3Location extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateAssociationStatusRequest) {
    super(scope, id);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.OutputLocation.S3Location.OutputS3Region', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.OutputLocation.S3Location.OutputS3BucketName', props);
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
          Name: this.input.name,
          InstanceId: this.input.instanceId,
          AssociationStatus: {
            Date: this.input.associationStatus.date,
            Name: this.input.associationStatus.name,
            Message: this.input.associationStatus.message,
            AdditionalInfo: this.input.associationStatus.additionalInfo,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateAssociationStatus.AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix', props);
    return resource.getResponseField('AssociationDescription.OutputLocation.S3Location.OutputS3KeyPrefix') as unknown as string;
  }

}

export class SSMUpdateDocument extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateDocumentRequest) {
    super(scope, id);
  }

  public get documentDescription(): SSMUpdateDocumentDocumentDescription {
    return new SSMUpdateDocumentDocumentDescription(this, 'DocumentDescription', this.__resources, this.input);
  }

}

export class SSMUpdateDocumentDocumentDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateDocumentRequest) {
    super(scope, id);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.Sha1', props);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.Hash', props);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.HashType', props);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.Name', props);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.VersionName', props);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.Owner', props);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.CreatedDate', props);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.Status', props);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.StatusInformation', props);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.DocumentVersion', props);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.Description', props);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.Parameters', props);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.PlatformTypes', props);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.DocumentType', props);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.SchemaVersion', props);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.LatestVersion', props);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.DefaultVersion', props);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.DocumentFormat', props);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.TargetType', props);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.Tags', props);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.AttachmentsInformation', props);
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
          Content: this.input.content,
          Attachments: this.input.attachments,
          Name: this.input.name,
          VersionName: this.input.versionName,
          DocumentVersion: this.input.documentVersion,
          DocumentFormat: this.input.documentFormat,
          TargetType: this.input.targetType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocument.DocumentDescription.Requires', props);
    return resource.getResponseField('DocumentDescription.Requires') as unknown as shapes.SsmDocumentRequires[];
  }

}

export class SSMUpdateDocumentDefaultVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateDocumentDefaultVersionRequest) {
    super(scope, id);
  }

  public get description(): SSMUpdateDocumentDefaultVersionDescription {
    return new SSMUpdateDocumentDefaultVersionDescription(this, 'Description', this.__resources, this.input);
  }

}

export class SSMUpdateDocumentDefaultVersionDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateDocumentDefaultVersionRequest) {
    super(scope, id);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocumentDefaultVersion.Description.Name', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocumentDefaultVersion.Description.DefaultVersion', props);
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
          Name: this.input.name,
          DocumentVersion: this.input.documentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDocumentDefaultVersion.Description.DefaultVersionName', props);
    return resource.getResponseField('Description.DefaultVersionName') as unknown as string;
  }

}

export class SSMUpdateMaintenanceWindow extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateMaintenanceWindowRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          Name: this.input.name,
          Description: this.input.description,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
          Schedule: this.input.schedule,
          ScheduleTimezone: this.input.scheduleTimezone,
          ScheduleOffset: this.input.scheduleOffset,
          Duration: this.input.duration,
          Cutoff: this.input.cutoff,
          AllowUnassociatedTargets: this.input.allowUnassociatedTargets,
          Enabled: this.input.enabled,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindow.WindowId', props);
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
          WindowId: this.input.windowId,
          Name: this.input.name,
          Description: this.input.description,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
          Schedule: this.input.schedule,
          ScheduleTimezone: this.input.scheduleTimezone,
          ScheduleOffset: this.input.scheduleOffset,
          Duration: this.input.duration,
          Cutoff: this.input.cutoff,
          AllowUnassociatedTargets: this.input.allowUnassociatedTargets,
          Enabled: this.input.enabled,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindow.Name', props);
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
          WindowId: this.input.windowId,
          Name: this.input.name,
          Description: this.input.description,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
          Schedule: this.input.schedule,
          ScheduleTimezone: this.input.scheduleTimezone,
          ScheduleOffset: this.input.scheduleOffset,
          Duration: this.input.duration,
          Cutoff: this.input.cutoff,
          AllowUnassociatedTargets: this.input.allowUnassociatedTargets,
          Enabled: this.input.enabled,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindow.Description', props);
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
          WindowId: this.input.windowId,
          Name: this.input.name,
          Description: this.input.description,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
          Schedule: this.input.schedule,
          ScheduleTimezone: this.input.scheduleTimezone,
          ScheduleOffset: this.input.scheduleOffset,
          Duration: this.input.duration,
          Cutoff: this.input.cutoff,
          AllowUnassociatedTargets: this.input.allowUnassociatedTargets,
          Enabled: this.input.enabled,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindow.StartDate', props);
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
          WindowId: this.input.windowId,
          Name: this.input.name,
          Description: this.input.description,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
          Schedule: this.input.schedule,
          ScheduleTimezone: this.input.scheduleTimezone,
          ScheduleOffset: this.input.scheduleOffset,
          Duration: this.input.duration,
          Cutoff: this.input.cutoff,
          AllowUnassociatedTargets: this.input.allowUnassociatedTargets,
          Enabled: this.input.enabled,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindow.EndDate', props);
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
          WindowId: this.input.windowId,
          Name: this.input.name,
          Description: this.input.description,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
          Schedule: this.input.schedule,
          ScheduleTimezone: this.input.scheduleTimezone,
          ScheduleOffset: this.input.scheduleOffset,
          Duration: this.input.duration,
          Cutoff: this.input.cutoff,
          AllowUnassociatedTargets: this.input.allowUnassociatedTargets,
          Enabled: this.input.enabled,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindow.Schedule', props);
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
          WindowId: this.input.windowId,
          Name: this.input.name,
          Description: this.input.description,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
          Schedule: this.input.schedule,
          ScheduleTimezone: this.input.scheduleTimezone,
          ScheduleOffset: this.input.scheduleOffset,
          Duration: this.input.duration,
          Cutoff: this.input.cutoff,
          AllowUnassociatedTargets: this.input.allowUnassociatedTargets,
          Enabled: this.input.enabled,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindow.ScheduleTimezone', props);
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
          WindowId: this.input.windowId,
          Name: this.input.name,
          Description: this.input.description,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
          Schedule: this.input.schedule,
          ScheduleTimezone: this.input.scheduleTimezone,
          ScheduleOffset: this.input.scheduleOffset,
          Duration: this.input.duration,
          Cutoff: this.input.cutoff,
          AllowUnassociatedTargets: this.input.allowUnassociatedTargets,
          Enabled: this.input.enabled,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindow.ScheduleOffset', props);
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
          WindowId: this.input.windowId,
          Name: this.input.name,
          Description: this.input.description,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
          Schedule: this.input.schedule,
          ScheduleTimezone: this.input.scheduleTimezone,
          ScheduleOffset: this.input.scheduleOffset,
          Duration: this.input.duration,
          Cutoff: this.input.cutoff,
          AllowUnassociatedTargets: this.input.allowUnassociatedTargets,
          Enabled: this.input.enabled,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindow.Duration', props);
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
          WindowId: this.input.windowId,
          Name: this.input.name,
          Description: this.input.description,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
          Schedule: this.input.schedule,
          ScheduleTimezone: this.input.scheduleTimezone,
          ScheduleOffset: this.input.scheduleOffset,
          Duration: this.input.duration,
          Cutoff: this.input.cutoff,
          AllowUnassociatedTargets: this.input.allowUnassociatedTargets,
          Enabled: this.input.enabled,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindow.Cutoff', props);
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
          WindowId: this.input.windowId,
          Name: this.input.name,
          Description: this.input.description,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
          Schedule: this.input.schedule,
          ScheduleTimezone: this.input.scheduleTimezone,
          ScheduleOffset: this.input.scheduleOffset,
          Duration: this.input.duration,
          Cutoff: this.input.cutoff,
          AllowUnassociatedTargets: this.input.allowUnassociatedTargets,
          Enabled: this.input.enabled,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindow.AllowUnassociatedTargets', props);
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
          WindowId: this.input.windowId,
          Name: this.input.name,
          Description: this.input.description,
          StartDate: this.input.startDate,
          EndDate: this.input.endDate,
          Schedule: this.input.schedule,
          ScheduleTimezone: this.input.scheduleTimezone,
          ScheduleOffset: this.input.scheduleOffset,
          Duration: this.input.duration,
          Cutoff: this.input.cutoff,
          AllowUnassociatedTargets: this.input.allowUnassociatedTargets,
          Enabled: this.input.enabled,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindow.Enabled', props);
    return resource.getResponseField('Enabled') as unknown as boolean;
  }

}

export class SSMUpdateMaintenanceWindowTarget extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateMaintenanceWindowTargetRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          WindowTargetId: this.input.windowTargetId,
          Targets: this.input.targets,
          OwnerInformation: this.input.ownerInformation,
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTarget.WindowId', props);
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
          WindowId: this.input.windowId,
          WindowTargetId: this.input.windowTargetId,
          Targets: this.input.targets,
          OwnerInformation: this.input.ownerInformation,
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTarget.WindowTargetId', props);
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
          WindowId: this.input.windowId,
          WindowTargetId: this.input.windowTargetId,
          Targets: this.input.targets,
          OwnerInformation: this.input.ownerInformation,
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTarget.Targets', props);
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
          WindowId: this.input.windowId,
          WindowTargetId: this.input.windowTargetId,
          Targets: this.input.targets,
          OwnerInformation: this.input.ownerInformation,
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTarget.OwnerInformation', props);
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
          WindowId: this.input.windowId,
          WindowTargetId: this.input.windowTargetId,
          Targets: this.input.targets,
          OwnerInformation: this.input.ownerInformation,
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTarget.Name', props);
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
          WindowId: this.input.windowId,
          WindowTargetId: this.input.windowTargetId,
          Targets: this.input.targets,
          OwnerInformation: this.input.ownerInformation,
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTarget.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class SSMUpdateMaintenanceWindowTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateMaintenanceWindowTaskRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.WindowId', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.WindowTaskId', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.Targets', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskArn', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.ServiceRoleArn', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskParameters', props);
    return resource.getResponseField('TaskParameters') as unknown as Record<string, shapes.SsmMaintenanceWindowTaskParameterValueExpression>;
  }

  public get taskInvocationParameters(): SSMUpdateMaintenanceWindowTaskTaskInvocationParameters {
    return new SSMUpdateMaintenanceWindowTaskTaskInvocationParameters(this, 'TaskInvocationParameters', this.__resources, this.input);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.Priority', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.MaxConcurrency', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.MaxErrors', props);
    return resource.getResponseField('MaxErrors') as unknown as string;
  }

  public get loggingInfo(): SSMUpdateMaintenanceWindowTaskLoggingInfo {
    return new SSMUpdateMaintenanceWindowTaskLoggingInfo(this, 'LoggingInfo', this.__resources, this.input);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.Name', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class SSMUpdateMaintenanceWindowTaskTaskInvocationParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateMaintenanceWindowTaskRequest) {
    super(scope, id);
  }

  public get runCommand(): SSMUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand {
    return new SSMUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand(this, 'RunCommand', this.__resources, this.input);
  }

  public get automation(): SSMUpdateMaintenanceWindowTaskTaskInvocationParametersAutomation {
    return new SSMUpdateMaintenanceWindowTaskTaskInvocationParametersAutomation(this, 'Automation', this.__resources, this.input);
  }

  public get stepFunctions(): SSMUpdateMaintenanceWindowTaskTaskInvocationParametersStepFunctions {
    return new SSMUpdateMaintenanceWindowTaskTaskInvocationParametersStepFunctions(this, 'StepFunctions', this.__resources, this.input);
  }

  public get lambda(): SSMUpdateMaintenanceWindowTaskTaskInvocationParametersLambda {
    return new SSMUpdateMaintenanceWindowTaskTaskInvocationParametersLambda(this, 'Lambda', this.__resources, this.input);
  }

}

export class SSMUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommand extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateMaintenanceWindowTaskRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.Comment', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.Comment') as unknown as string;
  }

  public get cloudWatchOutputConfig(): SSMUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig {
    return new SSMUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig(this, 'CloudWatchOutputConfig', this.__resources, this.input);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.DocumentHash', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.DocumentHashType', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.DocumentVersion', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.DocumentVersion') as unknown as string;
  }

  public get notificationConfig(): SSMUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig {
    return new SSMUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig(this, 'NotificationConfig', this.__resources, this.input);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.OutputS3BucketName', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.OutputS3KeyPrefix', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.Parameters', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.ServiceRoleArn', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.TimeoutSeconds', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.TimeoutSeconds') as unknown as number;
  }

}

export class SSMUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandCloudWatchOutputConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateMaintenanceWindowTaskRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchLogGroupName', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchOutputEnabled', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.CloudWatchOutputConfig.CloudWatchOutputEnabled') as unknown as boolean;
  }

}

export class SSMUpdateMaintenanceWindowTaskTaskInvocationParametersRunCommandNotificationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateMaintenanceWindowTaskRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.NotificationConfig.NotificationArn', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.NotificationConfig.NotificationEvents', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.RunCommand.NotificationConfig.NotificationType', props);
    return resource.getResponseField('TaskInvocationParameters.RunCommand.NotificationConfig.NotificationType') as unknown as string;
  }

}

export class SSMUpdateMaintenanceWindowTaskTaskInvocationParametersAutomation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateMaintenanceWindowTaskRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.Automation.DocumentVersion', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.Automation.Parameters', props);
    return resource.getResponseField('TaskInvocationParameters.Automation.Parameters') as unknown as Record<string, string[]>;
  }

}

export class SSMUpdateMaintenanceWindowTaskTaskInvocationParametersStepFunctions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateMaintenanceWindowTaskRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.StepFunctions.Input', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.StepFunctions.Name', props);
    return resource.getResponseField('TaskInvocationParameters.StepFunctions.Name') as unknown as string;
  }

}

export class SSMUpdateMaintenanceWindowTaskTaskInvocationParametersLambda extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateMaintenanceWindowTaskRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.Lambda.ClientContext', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.Lambda.Qualifier', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.TaskInvocationParameters.Lambda.Payload', props);
    return resource.getResponseField('TaskInvocationParameters.Lambda.Payload') as unknown as any;
  }

}

export class SSMUpdateMaintenanceWindowTaskLoggingInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdateMaintenanceWindowTaskRequest) {
    super(scope, id);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.LoggingInfo.S3BucketName', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.LoggingInfo.S3KeyPrefix', props);
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
          WindowId: this.input.windowId,
          WindowTaskId: this.input.windowTaskId,
          Targets: this.input.targets,
          TaskArn: this.input.taskArn,
          ServiceRoleArn: this.input.serviceRoleArn,
          TaskParameters: this.input.taskParameters,
          TaskInvocationParameters: {
            RunCommand: {
              Comment: this.input.taskInvocationParameters?.runCommand?.comment,
              CloudWatchOutputConfig: {
                CloudWatchLogGroupName: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchLogGroupName,
                CloudWatchOutputEnabled: this.input.taskInvocationParameters?.runCommand?.cloudWatchOutputConfig?.cloudWatchOutputEnabled,
              },
              DocumentHash: this.input.taskInvocationParameters?.runCommand?.documentHash,
              DocumentHashType: this.input.taskInvocationParameters?.runCommand?.documentHashType,
              DocumentVersion: this.input.taskInvocationParameters?.runCommand?.documentVersion,
              NotificationConfig: {
                NotificationArn: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationArn,
                NotificationEvents: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationEvents,
                NotificationType: this.input.taskInvocationParameters?.runCommand?.notificationConfig?.notificationType,
              },
              OutputS3BucketName: this.input.taskInvocationParameters?.runCommand?.outputS3BucketName,
              OutputS3KeyPrefix: this.input.taskInvocationParameters?.runCommand?.outputS3KeyPrefix,
              Parameters: this.input.taskInvocationParameters?.runCommand?.parameters,
              ServiceRoleArn: this.input.taskInvocationParameters?.runCommand?.serviceRoleArn,
              TimeoutSeconds: this.input.taskInvocationParameters?.runCommand?.timeoutSeconds,
            },
            Automation: {
              DocumentVersion: this.input.taskInvocationParameters?.automation?.documentVersion,
              Parameters: this.input.taskInvocationParameters?.automation?.parameters,
            },
            StepFunctions: {
              Input: this.input.taskInvocationParameters?.stepFunctions?.input,
              Name: this.input.taskInvocationParameters?.stepFunctions?.name,
            },
            Lambda: {
              ClientContext: this.input.taskInvocationParameters?.lambda?.clientContext,
              Qualifier: this.input.taskInvocationParameters?.lambda?.qualifier,
              Payload: {
              },
            },
          },
          Priority: this.input.priority,
          MaxConcurrency: this.input.maxConcurrency,
          MaxErrors: this.input.maxErrors,
          LoggingInfo: {
            S3BucketName: this.input.loggingInfo?.s3BucketName,
            S3KeyPrefix: this.input.loggingInfo?.s3KeyPrefix,
            S3Region: this.input.loggingInfo?.s3Region,
          },
          Name: this.input.name,
          Description: this.input.description,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMaintenanceWindowTask.LoggingInfo.S3Region', props);
    return resource.getResponseField('LoggingInfo.S3Region') as unknown as string;
  }

}

export class SSMUpdatePatchBaseline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdatePatchBaselineRequest) {
    super(scope, id);
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
          BaselineId: this.input.baselineId,
          Name: this.input.name,
          GlobalFilters: {
            PatchFilters: this.input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.input.rejectedPatches,
          RejectedPatchesAction: this.input.rejectedPatchesAction,
          Description: this.input.description,
          Sources: this.input.sources,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePatchBaseline.BaselineId', props);
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
          BaselineId: this.input.baselineId,
          Name: this.input.name,
          GlobalFilters: {
            PatchFilters: this.input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.input.rejectedPatches,
          RejectedPatchesAction: this.input.rejectedPatchesAction,
          Description: this.input.description,
          Sources: this.input.sources,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePatchBaseline.Name', props);
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
          BaselineId: this.input.baselineId,
          Name: this.input.name,
          GlobalFilters: {
            PatchFilters: this.input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.input.rejectedPatches,
          RejectedPatchesAction: this.input.rejectedPatchesAction,
          Description: this.input.description,
          Sources: this.input.sources,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePatchBaseline.OperatingSystem', props);
    return resource.getResponseField('OperatingSystem') as unknown as string;
  }

  public get globalFilters(): SSMUpdatePatchBaselineGlobalFilters {
    return new SSMUpdatePatchBaselineGlobalFilters(this, 'GlobalFilters', this.__resources, this.input);
  }

  public get approvalRules(): SSMUpdatePatchBaselineApprovalRules {
    return new SSMUpdatePatchBaselineApprovalRules(this, 'ApprovalRules', this.__resources, this.input);
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
          BaselineId: this.input.baselineId,
          Name: this.input.name,
          GlobalFilters: {
            PatchFilters: this.input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.input.rejectedPatches,
          RejectedPatchesAction: this.input.rejectedPatchesAction,
          Description: this.input.description,
          Sources: this.input.sources,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePatchBaseline.ApprovedPatches', props);
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
          BaselineId: this.input.baselineId,
          Name: this.input.name,
          GlobalFilters: {
            PatchFilters: this.input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.input.rejectedPatches,
          RejectedPatchesAction: this.input.rejectedPatchesAction,
          Description: this.input.description,
          Sources: this.input.sources,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePatchBaseline.ApprovedPatchesComplianceLevel', props);
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
          BaselineId: this.input.baselineId,
          Name: this.input.name,
          GlobalFilters: {
            PatchFilters: this.input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.input.rejectedPatches,
          RejectedPatchesAction: this.input.rejectedPatchesAction,
          Description: this.input.description,
          Sources: this.input.sources,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePatchBaseline.ApprovedPatchesEnableNonSecurity', props);
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
          BaselineId: this.input.baselineId,
          Name: this.input.name,
          GlobalFilters: {
            PatchFilters: this.input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.input.rejectedPatches,
          RejectedPatchesAction: this.input.rejectedPatchesAction,
          Description: this.input.description,
          Sources: this.input.sources,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePatchBaseline.RejectedPatches', props);
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
          BaselineId: this.input.baselineId,
          Name: this.input.name,
          GlobalFilters: {
            PatchFilters: this.input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.input.rejectedPatches,
          RejectedPatchesAction: this.input.rejectedPatchesAction,
          Description: this.input.description,
          Sources: this.input.sources,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePatchBaseline.RejectedPatchesAction', props);
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
          BaselineId: this.input.baselineId,
          Name: this.input.name,
          GlobalFilters: {
            PatchFilters: this.input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.input.rejectedPatches,
          RejectedPatchesAction: this.input.rejectedPatchesAction,
          Description: this.input.description,
          Sources: this.input.sources,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePatchBaseline.CreatedDate', props);
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
          BaselineId: this.input.baselineId,
          Name: this.input.name,
          GlobalFilters: {
            PatchFilters: this.input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.input.rejectedPatches,
          RejectedPatchesAction: this.input.rejectedPatchesAction,
          Description: this.input.description,
          Sources: this.input.sources,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePatchBaseline.ModifiedDate', props);
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
          BaselineId: this.input.baselineId,
          Name: this.input.name,
          GlobalFilters: {
            PatchFilters: this.input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.input.rejectedPatches,
          RejectedPatchesAction: this.input.rejectedPatchesAction,
          Description: this.input.description,
          Sources: this.input.sources,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePatchBaseline.Description', props);
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
          BaselineId: this.input.baselineId,
          Name: this.input.name,
          GlobalFilters: {
            PatchFilters: this.input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.input.rejectedPatches,
          RejectedPatchesAction: this.input.rejectedPatchesAction,
          Description: this.input.description,
          Sources: this.input.sources,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePatchBaseline.Sources', props);
    return resource.getResponseField('Sources') as unknown as shapes.SsmPatchSource[];
  }

}

export class SSMUpdatePatchBaselineGlobalFilters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdatePatchBaselineRequest) {
    super(scope, id);
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
          BaselineId: this.input.baselineId,
          Name: this.input.name,
          GlobalFilters: {
            PatchFilters: this.input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.input.rejectedPatches,
          RejectedPatchesAction: this.input.rejectedPatchesAction,
          Description: this.input.description,
          Sources: this.input.sources,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePatchBaseline.GlobalFilters.PatchFilters', props);
    return resource.getResponseField('GlobalFilters.PatchFilters') as unknown as shapes.SsmPatchFilter[];
  }

}

export class SSMUpdatePatchBaselineApprovalRules extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SsmUpdatePatchBaselineRequest) {
    super(scope, id);
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
          BaselineId: this.input.baselineId,
          Name: this.input.name,
          GlobalFilters: {
            PatchFilters: this.input.globalFilters?.patchFilters,
          },
          ApprovalRules: {
            PatchRules: this.input.approvalRules?.patchRules,
          },
          ApprovedPatches: this.input.approvedPatches,
          ApprovedPatchesComplianceLevel: this.input.approvedPatchesComplianceLevel,
          ApprovedPatchesEnableNonSecurity: this.input.approvedPatchesEnableNonSecurity,
          RejectedPatches: this.input.rejectedPatches,
          RejectedPatchesAction: this.input.rejectedPatchesAction,
          Description: this.input.description,
          Sources: this.input.sources,
          Replace: this.input.replace,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdatePatchBaseline.ApprovalRules.PatchRules', props);
    return resource.getResponseField('ApprovalRules.PatchRules') as unknown as shapes.SsmPatchRule[];
  }

}

