import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class BackupClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createBackupPlan(input: shapes.BackupCreateBackupPlanInput): BackupResponsesCreateBackupPlan {
    return new BackupResponsesCreateBackupPlan(this, this.__resources, input);
  }

  public createBackupSelection(input: shapes.BackupCreateBackupSelectionInput): BackupResponsesCreateBackupSelection {
    return new BackupResponsesCreateBackupSelection(this, this.__resources, input);
  }

  public createBackupVault(input: shapes.BackupCreateBackupVaultInput): BackupResponsesCreateBackupVault {
    return new BackupResponsesCreateBackupVault(this, this.__resources, input);
  }

  public deleteBackupPlan(input: shapes.BackupDeleteBackupPlanInput): BackupResponsesDeleteBackupPlan {
    return new BackupResponsesDeleteBackupPlan(this, this.__resources, input);
  }

  public deleteBackupSelection(input: shapes.BackupDeleteBackupSelectionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackupSelection',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DeleteBackupSelection'),
        parameters: {
          BackupPlanId: input.backupPlanId,
          SelectionId: input.selectionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBackupSelection', props);
  }

  public deleteBackupVault(input: shapes.BackupDeleteBackupVaultInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackupVault',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DeleteBackupVault'),
        parameters: {
          BackupVaultName: input.backupVaultName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBackupVault', props);
  }

  public deleteBackupVaultAccessPolicy(input: shapes.BackupDeleteBackupVaultAccessPolicyInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackupVaultAccessPolicy',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DeleteBackupVaultAccessPolicy'),
        parameters: {
          BackupVaultName: input.backupVaultName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBackupVaultAccessPolicy', props);
  }

  public deleteBackupVaultNotifications(input: shapes.BackupDeleteBackupVaultNotificationsInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackupVaultNotifications',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DeleteBackupVaultNotifications'),
        parameters: {
          BackupVaultName: input.backupVaultName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteBackupVaultNotifications', props);
  }

  public deleteRecoveryPoint(input: shapes.BackupDeleteRecoveryPointInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DeleteRecoveryPoint'),
        parameters: {
          BackupVaultName: input.backupVaultName,
          RecoveryPointArn: input.recoveryPointArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRecoveryPoint', props);
  }

  public describeBackupJob(input: shapes.BackupDescribeBackupJobInput): BackupResponsesDescribeBackupJob {
    return new BackupResponsesDescribeBackupJob(this, this.__resources, input);
  }

  public describeBackupVault(input: shapes.BackupDescribeBackupVaultInput): BackupResponsesDescribeBackupVault {
    return new BackupResponsesDescribeBackupVault(this, this.__resources, input);
  }

  public describeCopyJob(input: shapes.BackupDescribeCopyJobInput): BackupResponsesDescribeCopyJob {
    return new BackupResponsesDescribeCopyJob(this, this.__resources, input);
  }

  public describeGlobalSettings(): BackupResponsesDescribeGlobalSettings {
    return new BackupResponsesDescribeGlobalSettings(this, this.__resources);
  }

  public describeProtectedResource(input: shapes.BackupDescribeProtectedResourceInput): BackupResponsesDescribeProtectedResource {
    return new BackupResponsesDescribeProtectedResource(this, this.__resources, input);
  }

  public describeRecoveryPoint(input: shapes.BackupDescribeRecoveryPointInput): BackupResponsesDescribeRecoveryPoint {
    return new BackupResponsesDescribeRecoveryPoint(this, this.__resources, input);
  }

  public describeRegionSettings(): BackupResponsesDescribeRegionSettings {
    return new BackupResponsesDescribeRegionSettings(this, this.__resources);
  }

  public describeRestoreJob(input: shapes.BackupDescribeRestoreJobInput): BackupResponsesDescribeRestoreJob {
    return new BackupResponsesDescribeRestoreJob(this, this.__resources, input);
  }

  public exportBackupPlanTemplate(input: shapes.BackupExportBackupPlanTemplateInput): BackupResponsesExportBackupPlanTemplate {
    return new BackupResponsesExportBackupPlanTemplate(this, this.__resources, input);
  }

  public fetchBackupPlan(input: shapes.BackupGetBackupPlanInput): BackupResponsesFetchBackupPlan {
    return new BackupResponsesFetchBackupPlan(this, this.__resources, input);
  }

  public fetchBackupPlanFromJson(input: shapes.BackupGetBackupPlanFromJsonInput): BackupResponsesFetchBackupPlanFromJson {
    return new BackupResponsesFetchBackupPlanFromJson(this, this.__resources, input);
  }

  public fetchBackupPlanFromTemplate(input: shapes.BackupGetBackupPlanFromTemplateInput): BackupResponsesFetchBackupPlanFromTemplate {
    return new BackupResponsesFetchBackupPlanFromTemplate(this, this.__resources, input);
  }

  public fetchBackupSelection(input: shapes.BackupGetBackupSelectionInput): BackupResponsesFetchBackupSelection {
    return new BackupResponsesFetchBackupSelection(this, this.__resources, input);
  }

  public fetchBackupVaultAccessPolicy(input: shapes.BackupGetBackupVaultAccessPolicyInput): BackupResponsesFetchBackupVaultAccessPolicy {
    return new BackupResponsesFetchBackupVaultAccessPolicy(this, this.__resources, input);
  }

  public fetchBackupVaultNotifications(input: shapes.BackupGetBackupVaultNotificationsInput): BackupResponsesFetchBackupVaultNotifications {
    return new BackupResponsesFetchBackupVaultNotifications(this, this.__resources, input);
  }

  public fetchRecoveryPointRestoreMetadata(input: shapes.BackupGetRecoveryPointRestoreMetadataInput): BackupResponsesFetchRecoveryPointRestoreMetadata {
    return new BackupResponsesFetchRecoveryPointRestoreMetadata(this, this.__resources, input);
  }

  public fetchSupportedResourceTypes(): BackupResponsesFetchSupportedResourceTypes {
    return new BackupResponsesFetchSupportedResourceTypes(this, this.__resources);
  }

  public listBackupJobs(input: shapes.BackupListBackupJobsInput): BackupResponsesListBackupJobs {
    return new BackupResponsesListBackupJobs(this, this.__resources, input);
  }

  public listBackupPlanTemplates(input: shapes.BackupListBackupPlanTemplatesInput): BackupResponsesListBackupPlanTemplates {
    return new BackupResponsesListBackupPlanTemplates(this, this.__resources, input);
  }

  public listBackupPlanVersions(input: shapes.BackupListBackupPlanVersionsInput): BackupResponsesListBackupPlanVersions {
    return new BackupResponsesListBackupPlanVersions(this, this.__resources, input);
  }

  public listBackupPlans(input: shapes.BackupListBackupPlansInput): BackupResponsesListBackupPlans {
    return new BackupResponsesListBackupPlans(this, this.__resources, input);
  }

  public listBackupSelections(input: shapes.BackupListBackupSelectionsInput): BackupResponsesListBackupSelections {
    return new BackupResponsesListBackupSelections(this, this.__resources, input);
  }

  public listBackupVaults(input: shapes.BackupListBackupVaultsInput): BackupResponsesListBackupVaults {
    return new BackupResponsesListBackupVaults(this, this.__resources, input);
  }

  public listCopyJobs(input: shapes.BackupListCopyJobsInput): BackupResponsesListCopyJobs {
    return new BackupResponsesListCopyJobs(this, this.__resources, input);
  }

  public listProtectedResources(input: shapes.BackupListProtectedResourcesInput): BackupResponsesListProtectedResources {
    return new BackupResponsesListProtectedResources(this, this.__resources, input);
  }

  public listRecoveryPointsByBackupVault(input: shapes.BackupListRecoveryPointsByBackupVaultInput): BackupResponsesListRecoveryPointsByBackupVault {
    return new BackupResponsesListRecoveryPointsByBackupVault(this, this.__resources, input);
  }

  public listRecoveryPointsByResource(input: shapes.BackupListRecoveryPointsByResourceInput): BackupResponsesListRecoveryPointsByResource {
    return new BackupResponsesListRecoveryPointsByResource(this, this.__resources, input);
  }

  public listRestoreJobs(input: shapes.BackupListRestoreJobsInput): BackupResponsesListRestoreJobs {
    return new BackupResponsesListRestoreJobs(this, this.__resources, input);
  }

  public listTags(input: shapes.BackupListTagsInput): BackupResponsesListTags {
    return new BackupResponsesListTags(this, this.__resources, input);
  }

  public putBackupVaultAccessPolicy(input: shapes.BackupPutBackupVaultAccessPolicyInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBackupVaultAccessPolicy',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.PutBackupVaultAccessPolicy'),
        parameters: {
          BackupVaultName: input.backupVaultName,
          Policy: input.policy,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBackupVaultAccessPolicy', props);
  }

  public putBackupVaultNotifications(input: shapes.BackupPutBackupVaultNotificationsInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putBackupVaultNotifications',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.PutBackupVaultNotifications'),
        parameters: {
          BackupVaultName: input.backupVaultName,
          SNSTopicArn: input.snsTopicArn,
          BackupVaultEvents: input.backupVaultEvents,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutBackupVaultNotifications', props);
  }

  public startBackupJob(input: shapes.BackupStartBackupJobInput): BackupResponsesStartBackupJob {
    return new BackupResponsesStartBackupJob(this, this.__resources, input);
  }

  public startCopyJob(input: shapes.BackupStartCopyJobInput): BackupResponsesStartCopyJob {
    return new BackupResponsesStartCopyJob(this, this.__resources, input);
  }

  public startRestoreJob(input: shapes.BackupStartRestoreJobInput): BackupResponsesStartRestoreJob {
    return new BackupResponsesStartRestoreJob(this, this.__resources, input);
  }

  public stopBackupJob(input: shapes.BackupStopBackupJobInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.StopBackupJob'),
        parameters: {
          BackupJobId: input.backupJobId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopBackupJob', props);
  }

  public tagResource(input: shapes.BackupTagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.BackupUntagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeyList: input.tagKeyList,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateBackupPlan(input: shapes.BackupUpdateBackupPlanInput): BackupResponsesUpdateBackupPlan {
    return new BackupResponsesUpdateBackupPlan(this, this.__resources, input);
  }

  public updateGlobalSettings(input: shapes.BackupUpdateGlobalSettingsInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGlobalSettings',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.UpdateGlobalSettings'),
        parameters: {
          GlobalSettings: input.globalSettings,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateGlobalSettings', props);
  }

  public updateRecoveryPointLifecycle(input: shapes.BackupUpdateRecoveryPointLifecycleInput): BackupResponsesUpdateRecoveryPointLifecycle {
    return new BackupResponsesUpdateRecoveryPointLifecycle(this, this.__resources, input);
  }

  public updateRegionSettings(input: shapes.BackupUpdateRegionSettingsInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRegionSettings',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.UpdateRegionSettings'),
        parameters: {
          ResourceTypeOptInPreference: input.resourceTypeOptInPreference,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateRegionSettings', props);
  }

}

export class BackupResponsesCreateBackupPlan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupCreateBackupPlanInput) {
  }

  public get backupPlanId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.CreateBackupPlan.BackupPlanId'),
        outputPath: 'BackupPlanId',
        parameters: {
          BackupPlan: {
            BackupPlanName: this.__input.backupPlan.backupPlanName,
            Rules: this.__input.backupPlan.rules,
            AdvancedBackupSettings: this.__input.backupPlan.advancedBackupSettings,
          },
          BackupPlanTags: this.__input.backupPlanTags,
          CreatorRequestId: this.__input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackupPlan.BackupPlanId', props);
    return resource.getResponseField('BackupPlanId') as unknown as string;
  }

  public get backupPlanArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.CreateBackupPlan.BackupPlanArn'),
        outputPath: 'BackupPlanArn',
        parameters: {
          BackupPlan: {
            BackupPlanName: this.__input.backupPlan.backupPlanName,
            Rules: this.__input.backupPlan.rules,
            AdvancedBackupSettings: this.__input.backupPlan.advancedBackupSettings,
          },
          BackupPlanTags: this.__input.backupPlanTags,
          CreatorRequestId: this.__input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackupPlan.BackupPlanArn', props);
    return resource.getResponseField('BackupPlanArn') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.CreateBackupPlan.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          BackupPlan: {
            BackupPlanName: this.__input.backupPlan.backupPlanName,
            Rules: this.__input.backupPlan.rules,
            AdvancedBackupSettings: this.__input.backupPlan.advancedBackupSettings,
          },
          BackupPlanTags: this.__input.backupPlanTags,
          CreatorRequestId: this.__input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackupPlan.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.CreateBackupPlan.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          BackupPlan: {
            BackupPlanName: this.__input.backupPlan.backupPlanName,
            Rules: this.__input.backupPlan.rules,
            AdvancedBackupSettings: this.__input.backupPlan.advancedBackupSettings,
          },
          BackupPlanTags: this.__input.backupPlanTags,
          CreatorRequestId: this.__input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackupPlan.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

  public get advancedBackupSettings(): shapes.BackupAdvancedBackupSetting[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.CreateBackupPlan.AdvancedBackupSettings'),
        outputPath: 'AdvancedBackupSettings',
        parameters: {
          BackupPlan: {
            BackupPlanName: this.__input.backupPlan.backupPlanName,
            Rules: this.__input.backupPlan.rules,
            AdvancedBackupSettings: this.__input.backupPlan.advancedBackupSettings,
          },
          BackupPlanTags: this.__input.backupPlanTags,
          CreatorRequestId: this.__input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackupPlan.AdvancedBackupSettings', props);
    return resource.getResponseField('AdvancedBackupSettings') as unknown as shapes.BackupAdvancedBackupSetting[];
  }

}

export class BackupResponsesCreateBackupSelection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupCreateBackupSelectionInput) {
  }

  public get selectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackupSelection',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.CreateBackupSelection.SelectionId'),
        outputPath: 'SelectionId',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          BackupSelection: {
            SelectionName: this.__input.backupSelection.selectionName,
            IamRoleArn: this.__input.backupSelection.iamRoleArn,
            Resources: this.__input.backupSelection.resources,
            ListOfTags: this.__input.backupSelection.listOfTags,
          },
          CreatorRequestId: this.__input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackupSelection.SelectionId', props);
    return resource.getResponseField('SelectionId') as unknown as string;
  }

  public get backupPlanId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackupSelection',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.CreateBackupSelection.BackupPlanId'),
        outputPath: 'BackupPlanId',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          BackupSelection: {
            SelectionName: this.__input.backupSelection.selectionName,
            IamRoleArn: this.__input.backupSelection.iamRoleArn,
            Resources: this.__input.backupSelection.resources,
            ListOfTags: this.__input.backupSelection.listOfTags,
          },
          CreatorRequestId: this.__input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackupSelection.BackupPlanId', props);
    return resource.getResponseField('BackupPlanId') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackupSelection',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.CreateBackupSelection.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          BackupSelection: {
            SelectionName: this.__input.backupSelection.selectionName,
            IamRoleArn: this.__input.backupSelection.iamRoleArn,
            Resources: this.__input.backupSelection.resources,
            ListOfTags: this.__input.backupSelection.listOfTags,
          },
          CreatorRequestId: this.__input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackupSelection.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

}

export class BackupResponsesCreateBackupVault {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupCreateBackupVaultInput) {
  }

  public get backupVaultName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackupVault',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.CreateBackupVault.BackupVaultName'),
        outputPath: 'BackupVaultName',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          BackupVaultTags: this.__input.backupVaultTags,
          EncryptionKeyArn: this.__input.encryptionKeyArn,
          CreatorRequestId: this.__input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackupVault.BackupVaultName', props);
    return resource.getResponseField('BackupVaultName') as unknown as string;
  }

  public get backupVaultArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackupVault',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.CreateBackupVault.BackupVaultArn'),
        outputPath: 'BackupVaultArn',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          BackupVaultTags: this.__input.backupVaultTags,
          EncryptionKeyArn: this.__input.encryptionKeyArn,
          CreatorRequestId: this.__input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackupVault.BackupVaultArn', props);
    return resource.getResponseField('BackupVaultArn') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBackupVault',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.CreateBackupVault.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          BackupVaultTags: this.__input.backupVaultTags,
          EncryptionKeyArn: this.__input.encryptionKeyArn,
          CreatorRequestId: this.__input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBackupVault.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

}

export class BackupResponsesDeleteBackupPlan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupDeleteBackupPlanInput) {
  }

  public get backupPlanId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DeleteBackupPlan.BackupPlanId'),
        outputPath: 'BackupPlanId',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackupPlan.BackupPlanId', props);
    return resource.getResponseField('BackupPlanId') as unknown as string;
  }

  public get backupPlanArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DeleteBackupPlan.BackupPlanArn'),
        outputPath: 'BackupPlanArn',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackupPlan.BackupPlanArn', props);
    return resource.getResponseField('BackupPlanArn') as unknown as string;
  }

  public get deletionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DeleteBackupPlan.DeletionDate'),
        outputPath: 'DeletionDate',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackupPlan.DeletionDate', props);
    return resource.getResponseField('DeletionDate') as unknown as string;
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DeleteBackupPlan.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBackupPlan.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

}

export class BackupResponsesDescribeBackupJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupDescribeBackupJobInput) {
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.AccountId'),
        outputPath: 'AccountId',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.AccountId', props);
    return resource.getResponseField('AccountId') as unknown as string;
  }

  public get backupJobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.BackupJobId'),
        outputPath: 'BackupJobId',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.BackupJobId', props);
    return resource.getResponseField('BackupJobId') as unknown as string;
  }

  public get backupVaultName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.BackupVaultName'),
        outputPath: 'BackupVaultName',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.BackupVaultName', props);
    return resource.getResponseField('BackupVaultName') as unknown as string;
  }

  public get backupVaultArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.BackupVaultArn'),
        outputPath: 'BackupVaultArn',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.BackupVaultArn', props);
    return resource.getResponseField('BackupVaultArn') as unknown as string;
  }

  public get recoveryPointArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.RecoveryPointArn'),
        outputPath: 'RecoveryPointArn',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.RecoveryPointArn', props);
    return resource.getResponseField('RecoveryPointArn') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.ResourceArn'),
        outputPath: 'ResourceArn',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.ResourceArn', props);
    return resource.getResponseField('ResourceArn') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

  public get completionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.CompletionDate'),
        outputPath: 'CompletionDate',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.CompletionDate', props);
    return resource.getResponseField('CompletionDate') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.State'),
        outputPath: 'State',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.StatusMessage'),
        outputPath: 'StatusMessage',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

  public get percentDone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.PercentDone'),
        outputPath: 'PercentDone',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.PercentDone', props);
    return resource.getResponseField('PercentDone') as unknown as string;
  }

  public get backupSizeInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.BackupSizeInBytes'),
        outputPath: 'BackupSizeInBytes',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.BackupSizeInBytes', props);
    return resource.getResponseField('BackupSizeInBytes') as unknown as number;
  }

  public get iamRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.IamRoleArn'),
        outputPath: 'IamRoleArn',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.IamRoleArn', props);
    return resource.getResponseField('IamRoleArn') as unknown as string;
  }

  public get createdBy(): BackupResponsesDescribeBackupJobCreatedBy {
    return new BackupResponsesDescribeBackupJobCreatedBy(this.__scope, this.__resources, this.__input);
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.ResourceType'),
        outputPath: 'ResourceType',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.ResourceType', props);
    return resource.getResponseField('ResourceType') as unknown as string;
  }

  public get bytesTransferred(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.BytesTransferred'),
        outputPath: 'BytesTransferred',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.BytesTransferred', props);
    return resource.getResponseField('BytesTransferred') as unknown as number;
  }

  public get expectedCompletionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.ExpectedCompletionDate'),
        outputPath: 'ExpectedCompletionDate',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.ExpectedCompletionDate', props);
    return resource.getResponseField('ExpectedCompletionDate') as unknown as string;
  }

  public get startBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.StartBy'),
        outputPath: 'StartBy',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.StartBy', props);
    return resource.getResponseField('StartBy') as unknown as string;
  }

  public get backupOptions(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.BackupOptions'),
        outputPath: 'BackupOptions',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.BackupOptions', props);
    return resource.getResponseField('BackupOptions') as unknown as Record<string, string>;
  }

  public get backupType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.BackupType'),
        outputPath: 'BackupType',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.BackupType', props);
    return resource.getResponseField('BackupType') as unknown as string;
  }

}

export class BackupResponsesDescribeBackupJobCreatedBy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupDescribeBackupJobInput) {
  }

  public get backupPlanId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.CreatedBy.BackupPlanId'),
        outputPath: 'CreatedBy.BackupPlanId',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.CreatedBy.BackupPlanId', props);
    return resource.getResponseField('CreatedBy.BackupPlanId') as unknown as string;
  }

  public get backupPlanArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.CreatedBy.BackupPlanArn'),
        outputPath: 'CreatedBy.BackupPlanArn',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.CreatedBy.BackupPlanArn', props);
    return resource.getResponseField('CreatedBy.BackupPlanArn') as unknown as string;
  }

  public get backupPlanVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.CreatedBy.BackupPlanVersion'),
        outputPath: 'CreatedBy.BackupPlanVersion',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.CreatedBy.BackupPlanVersion', props);
    return resource.getResponseField('CreatedBy.BackupPlanVersion') as unknown as string;
  }

  public get backupRuleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupJob.CreatedBy.BackupRuleId'),
        outputPath: 'CreatedBy.BackupRuleId',
        parameters: {
          BackupJobId: this.__input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupJob.CreatedBy.BackupRuleId', props);
    return resource.getResponseField('CreatedBy.BackupRuleId') as unknown as string;
  }

}

export class BackupResponsesDescribeBackupVault {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupDescribeBackupVaultInput) {
  }

  public get backupVaultName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupVault',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupVault.BackupVaultName'),
        outputPath: 'BackupVaultName',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupVault.BackupVaultName', props);
    return resource.getResponseField('BackupVaultName') as unknown as string;
  }

  public get backupVaultArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupVault',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupVault.BackupVaultArn'),
        outputPath: 'BackupVaultArn',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupVault.BackupVaultArn', props);
    return resource.getResponseField('BackupVaultArn') as unknown as string;
  }

  public get encryptionKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupVault',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupVault.EncryptionKeyArn'),
        outputPath: 'EncryptionKeyArn',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupVault.EncryptionKeyArn', props);
    return resource.getResponseField('EncryptionKeyArn') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupVault',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupVault.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupVault.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupVault',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupVault.CreatorRequestId'),
        outputPath: 'CreatorRequestId',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupVault.CreatorRequestId', props);
    return resource.getResponseField('CreatorRequestId') as unknown as string;
  }

  public get numberOfRecoveryPoints(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBackupVault',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeBackupVault.NumberOfRecoveryPoints'),
        outputPath: 'NumberOfRecoveryPoints',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBackupVault.NumberOfRecoveryPoints', props);
    return resource.getResponseField('NumberOfRecoveryPoints') as unknown as number;
  }

}

export class BackupResponsesDescribeCopyJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupDescribeCopyJobInput) {
  }

  public get copyJob(): BackupResponsesDescribeCopyJobCopyJob {
    return new BackupResponsesDescribeCopyJobCopyJob(this.__scope, this.__resources, this.__input);
  }

}

export class BackupResponsesDescribeCopyJobCopyJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupDescribeCopyJobInput) {
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCopyJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeCopyJob.CopyJob.AccountId'),
        outputPath: 'CopyJob.AccountId',
        parameters: {
          CopyJobId: this.__input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCopyJob.CopyJob.AccountId', props);
    return resource.getResponseField('CopyJob.AccountId') as unknown as string;
  }

  public get copyJobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCopyJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeCopyJob.CopyJob.CopyJobId'),
        outputPath: 'CopyJob.CopyJobId',
        parameters: {
          CopyJobId: this.__input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCopyJob.CopyJob.CopyJobId', props);
    return resource.getResponseField('CopyJob.CopyJobId') as unknown as string;
  }

  public get sourceBackupVaultArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCopyJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeCopyJob.CopyJob.SourceBackupVaultArn'),
        outputPath: 'CopyJob.SourceBackupVaultArn',
        parameters: {
          CopyJobId: this.__input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCopyJob.CopyJob.SourceBackupVaultArn', props);
    return resource.getResponseField('CopyJob.SourceBackupVaultArn') as unknown as string;
  }

  public get sourceRecoveryPointArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCopyJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeCopyJob.CopyJob.SourceRecoveryPointArn'),
        outputPath: 'CopyJob.SourceRecoveryPointArn',
        parameters: {
          CopyJobId: this.__input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCopyJob.CopyJob.SourceRecoveryPointArn', props);
    return resource.getResponseField('CopyJob.SourceRecoveryPointArn') as unknown as string;
  }

  public get destinationBackupVaultArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCopyJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeCopyJob.CopyJob.DestinationBackupVaultArn'),
        outputPath: 'CopyJob.DestinationBackupVaultArn',
        parameters: {
          CopyJobId: this.__input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCopyJob.CopyJob.DestinationBackupVaultArn', props);
    return resource.getResponseField('CopyJob.DestinationBackupVaultArn') as unknown as string;
  }

  public get destinationRecoveryPointArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCopyJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeCopyJob.CopyJob.DestinationRecoveryPointArn'),
        outputPath: 'CopyJob.DestinationRecoveryPointArn',
        parameters: {
          CopyJobId: this.__input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCopyJob.CopyJob.DestinationRecoveryPointArn', props);
    return resource.getResponseField('CopyJob.DestinationRecoveryPointArn') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCopyJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeCopyJob.CopyJob.ResourceArn'),
        outputPath: 'CopyJob.ResourceArn',
        parameters: {
          CopyJobId: this.__input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCopyJob.CopyJob.ResourceArn', props);
    return resource.getResponseField('CopyJob.ResourceArn') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCopyJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeCopyJob.CopyJob.CreationDate'),
        outputPath: 'CopyJob.CreationDate',
        parameters: {
          CopyJobId: this.__input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCopyJob.CopyJob.CreationDate', props);
    return resource.getResponseField('CopyJob.CreationDate') as unknown as string;
  }

  public get completionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCopyJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeCopyJob.CopyJob.CompletionDate'),
        outputPath: 'CopyJob.CompletionDate',
        parameters: {
          CopyJobId: this.__input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCopyJob.CopyJob.CompletionDate', props);
    return resource.getResponseField('CopyJob.CompletionDate') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCopyJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeCopyJob.CopyJob.State'),
        outputPath: 'CopyJob.State',
        parameters: {
          CopyJobId: this.__input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCopyJob.CopyJob.State', props);
    return resource.getResponseField('CopyJob.State') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCopyJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeCopyJob.CopyJob.StatusMessage'),
        outputPath: 'CopyJob.StatusMessage',
        parameters: {
          CopyJobId: this.__input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCopyJob.CopyJob.StatusMessage', props);
    return resource.getResponseField('CopyJob.StatusMessage') as unknown as string;
  }

  public get backupSizeInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCopyJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeCopyJob.CopyJob.BackupSizeInBytes'),
        outputPath: 'CopyJob.BackupSizeInBytes',
        parameters: {
          CopyJobId: this.__input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCopyJob.CopyJob.BackupSizeInBytes', props);
    return resource.getResponseField('CopyJob.BackupSizeInBytes') as unknown as number;
  }

  public get iamRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCopyJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeCopyJob.CopyJob.IamRoleArn'),
        outputPath: 'CopyJob.IamRoleArn',
        parameters: {
          CopyJobId: this.__input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCopyJob.CopyJob.IamRoleArn', props);
    return resource.getResponseField('CopyJob.IamRoleArn') as unknown as string;
  }

  public get createdBy(): BackupResponsesDescribeCopyJobCopyJobCreatedBy {
    return new BackupResponsesDescribeCopyJobCopyJobCreatedBy(this.__scope, this.__resources, this.__input);
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCopyJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeCopyJob.CopyJob.ResourceType'),
        outputPath: 'CopyJob.ResourceType',
        parameters: {
          CopyJobId: this.__input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCopyJob.CopyJob.ResourceType', props);
    return resource.getResponseField('CopyJob.ResourceType') as unknown as string;
  }

}

export class BackupResponsesDescribeCopyJobCopyJobCreatedBy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupDescribeCopyJobInput) {
  }

  public get backupPlanId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCopyJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeCopyJob.CopyJob.CreatedBy.BackupPlanId'),
        outputPath: 'CopyJob.CreatedBy.BackupPlanId',
        parameters: {
          CopyJobId: this.__input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCopyJob.CopyJob.CreatedBy.BackupPlanId', props);
    return resource.getResponseField('CopyJob.CreatedBy.BackupPlanId') as unknown as string;
  }

  public get backupPlanArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCopyJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeCopyJob.CopyJob.CreatedBy.BackupPlanArn'),
        outputPath: 'CopyJob.CreatedBy.BackupPlanArn',
        parameters: {
          CopyJobId: this.__input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCopyJob.CopyJob.CreatedBy.BackupPlanArn', props);
    return resource.getResponseField('CopyJob.CreatedBy.BackupPlanArn') as unknown as string;
  }

  public get backupPlanVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCopyJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeCopyJob.CopyJob.CreatedBy.BackupPlanVersion'),
        outputPath: 'CopyJob.CreatedBy.BackupPlanVersion',
        parameters: {
          CopyJobId: this.__input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCopyJob.CopyJob.CreatedBy.BackupPlanVersion', props);
    return resource.getResponseField('CopyJob.CreatedBy.BackupPlanVersion') as unknown as string;
  }

  public get backupRuleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCopyJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeCopyJob.CopyJob.CreatedBy.BackupRuleId'),
        outputPath: 'CopyJob.CreatedBy.BackupRuleId',
        parameters: {
          CopyJobId: this.__input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCopyJob.CopyJob.CreatedBy.BackupRuleId', props);
    return resource.getResponseField('CopyJob.CreatedBy.BackupRuleId') as unknown as string;
  }

}

export class BackupResponsesDescribeGlobalSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get globalSettings(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGlobalSettings',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeGlobalSettings.GlobalSettings'),
        outputPath: 'GlobalSettings',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGlobalSettings.GlobalSettings', props);
    return resource.getResponseField('GlobalSettings') as unknown as Record<string, string>;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGlobalSettings',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeGlobalSettings.LastUpdateTime'),
        outputPath: 'LastUpdateTime',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGlobalSettings.LastUpdateTime', props);
    return resource.getResponseField('LastUpdateTime') as unknown as string;
  }

}

export class BackupResponsesDescribeProtectedResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupDescribeProtectedResourceInput) {
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProtectedResource',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeProtectedResource.ResourceArn'),
        outputPath: 'ResourceArn',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProtectedResource.ResourceArn', props);
    return resource.getResponseField('ResourceArn') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProtectedResource',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeProtectedResource.ResourceType'),
        outputPath: 'ResourceType',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProtectedResource.ResourceType', props);
    return resource.getResponseField('ResourceType') as unknown as string;
  }

  public get lastBackupTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProtectedResource',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeProtectedResource.LastBackupTime'),
        outputPath: 'LastBackupTime',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProtectedResource.LastBackupTime', props);
    return resource.getResponseField('LastBackupTime') as unknown as string;
  }

}

export class BackupResponsesDescribeRecoveryPoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupDescribeRecoveryPointInput) {
  }

  public get recoveryPointArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.RecoveryPointArn'),
        outputPath: 'RecoveryPointArn',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.RecoveryPointArn', props);
    return resource.getResponseField('RecoveryPointArn') as unknown as string;
  }

  public get backupVaultName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.BackupVaultName'),
        outputPath: 'BackupVaultName',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.BackupVaultName', props);
    return resource.getResponseField('BackupVaultName') as unknown as string;
  }

  public get backupVaultArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.BackupVaultArn'),
        outputPath: 'BackupVaultArn',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.BackupVaultArn', props);
    return resource.getResponseField('BackupVaultArn') as unknown as string;
  }

  public get sourceBackupVaultArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.SourceBackupVaultArn'),
        outputPath: 'SourceBackupVaultArn',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.SourceBackupVaultArn', props);
    return resource.getResponseField('SourceBackupVaultArn') as unknown as string;
  }

  public get resourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.ResourceArn'),
        outputPath: 'ResourceArn',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.ResourceArn', props);
    return resource.getResponseField('ResourceArn') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.ResourceType'),
        outputPath: 'ResourceType',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.ResourceType', props);
    return resource.getResponseField('ResourceType') as unknown as string;
  }

  public get createdBy(): BackupResponsesDescribeRecoveryPointCreatedBy {
    return new BackupResponsesDescribeRecoveryPointCreatedBy(this.__scope, this.__resources, this.__input);
  }

  public get iamRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.IamRoleArn'),
        outputPath: 'IamRoleArn',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.IamRoleArn', props);
    return resource.getResponseField('IamRoleArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.Status'),
        outputPath: 'Status',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

  public get completionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.CompletionDate'),
        outputPath: 'CompletionDate',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.CompletionDate', props);
    return resource.getResponseField('CompletionDate') as unknown as string;
  }

  public get backupSizeInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.BackupSizeInBytes'),
        outputPath: 'BackupSizeInBytes',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.BackupSizeInBytes', props);
    return resource.getResponseField('BackupSizeInBytes') as unknown as number;
  }

  public get calculatedLifecycle(): BackupResponsesDescribeRecoveryPointCalculatedLifecycle {
    return new BackupResponsesDescribeRecoveryPointCalculatedLifecycle(this.__scope, this.__resources, this.__input);
  }

  public get lifecycle(): BackupResponsesDescribeRecoveryPointLifecycle {
    return new BackupResponsesDescribeRecoveryPointLifecycle(this.__scope, this.__resources, this.__input);
  }

  public get encryptionKeyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.EncryptionKeyArn'),
        outputPath: 'EncryptionKeyArn',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.EncryptionKeyArn', props);
    return resource.getResponseField('EncryptionKeyArn') as unknown as string;
  }

  public get isEncrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.IsEncrypted'),
        outputPath: 'IsEncrypted',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.IsEncrypted', props);
    return resource.getResponseField('IsEncrypted') as unknown as boolean;
  }

  public get storageClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.StorageClass'),
        outputPath: 'StorageClass',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.StorageClass', props);
    return resource.getResponseField('StorageClass') as unknown as string;
  }

  public get lastRestoreTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.LastRestoreTime'),
        outputPath: 'LastRestoreTime',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.LastRestoreTime', props);
    return resource.getResponseField('LastRestoreTime') as unknown as string;
  }

}

export class BackupResponsesDescribeRecoveryPointCreatedBy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupDescribeRecoveryPointInput) {
  }

  public get backupPlanId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.CreatedBy.BackupPlanId'),
        outputPath: 'CreatedBy.BackupPlanId',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.CreatedBy.BackupPlanId', props);
    return resource.getResponseField('CreatedBy.BackupPlanId') as unknown as string;
  }

  public get backupPlanArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.CreatedBy.BackupPlanArn'),
        outputPath: 'CreatedBy.BackupPlanArn',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.CreatedBy.BackupPlanArn', props);
    return resource.getResponseField('CreatedBy.BackupPlanArn') as unknown as string;
  }

  public get backupPlanVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.CreatedBy.BackupPlanVersion'),
        outputPath: 'CreatedBy.BackupPlanVersion',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.CreatedBy.BackupPlanVersion', props);
    return resource.getResponseField('CreatedBy.BackupPlanVersion') as unknown as string;
  }

  public get backupRuleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.CreatedBy.BackupRuleId'),
        outputPath: 'CreatedBy.BackupRuleId',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.CreatedBy.BackupRuleId', props);
    return resource.getResponseField('CreatedBy.BackupRuleId') as unknown as string;
  }

}

export class BackupResponsesDescribeRecoveryPointCalculatedLifecycle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupDescribeRecoveryPointInput) {
  }

  public get moveToColdStorageAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.CalculatedLifecycle.MoveToColdStorageAt'),
        outputPath: 'CalculatedLifecycle.MoveToColdStorageAt',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.CalculatedLifecycle.MoveToColdStorageAt', props);
    return resource.getResponseField('CalculatedLifecycle.MoveToColdStorageAt') as unknown as string;
  }

  public get deleteAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.CalculatedLifecycle.DeleteAt'),
        outputPath: 'CalculatedLifecycle.DeleteAt',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.CalculatedLifecycle.DeleteAt', props);
    return resource.getResponseField('CalculatedLifecycle.DeleteAt') as unknown as string;
  }

}

export class BackupResponsesDescribeRecoveryPointLifecycle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupDescribeRecoveryPointInput) {
  }

  public get moveToColdStorageAfterDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.Lifecycle.MoveToColdStorageAfterDays'),
        outputPath: 'Lifecycle.MoveToColdStorageAfterDays',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.Lifecycle.MoveToColdStorageAfterDays', props);
    return resource.getResponseField('Lifecycle.MoveToColdStorageAfterDays') as unknown as number;
  }

  public get deleteAfterDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecoveryPoint',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRecoveryPoint.Lifecycle.DeleteAfterDays'),
        outputPath: 'Lifecycle.DeleteAfterDays',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecoveryPoint.Lifecycle.DeleteAfterDays', props);
    return resource.getResponseField('Lifecycle.DeleteAfterDays') as unknown as number;
  }

}

export class BackupResponsesDescribeRegionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get resourceTypeOptInPreference(): Record<string, boolean> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRegionSettings',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRegionSettings.ResourceTypeOptInPreference'),
        outputPath: 'ResourceTypeOptInPreference',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRegionSettings.ResourceTypeOptInPreference', props);
    return resource.getResponseField('ResourceTypeOptInPreference') as unknown as Record<string, boolean>;
  }

}

export class BackupResponsesDescribeRestoreJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupDescribeRestoreJobInput) {
  }

  public get accountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRestoreJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRestoreJob.AccountId'),
        outputPath: 'AccountId',
        parameters: {
          RestoreJobId: this.__input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRestoreJob.AccountId', props);
    return resource.getResponseField('AccountId') as unknown as string;
  }

  public get restoreJobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRestoreJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRestoreJob.RestoreJobId'),
        outputPath: 'RestoreJobId',
        parameters: {
          RestoreJobId: this.__input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRestoreJob.RestoreJobId', props);
    return resource.getResponseField('RestoreJobId') as unknown as string;
  }

  public get recoveryPointArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRestoreJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRestoreJob.RecoveryPointArn'),
        outputPath: 'RecoveryPointArn',
        parameters: {
          RestoreJobId: this.__input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRestoreJob.RecoveryPointArn', props);
    return resource.getResponseField('RecoveryPointArn') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRestoreJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRestoreJob.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          RestoreJobId: this.__input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRestoreJob.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

  public get completionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRestoreJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRestoreJob.CompletionDate'),
        outputPath: 'CompletionDate',
        parameters: {
          RestoreJobId: this.__input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRestoreJob.CompletionDate', props);
    return resource.getResponseField('CompletionDate') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRestoreJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRestoreJob.Status'),
        outputPath: 'Status',
        parameters: {
          RestoreJobId: this.__input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRestoreJob.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRestoreJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRestoreJob.StatusMessage'),
        outputPath: 'StatusMessage',
        parameters: {
          RestoreJobId: this.__input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRestoreJob.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

  public get percentDone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRestoreJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRestoreJob.PercentDone'),
        outputPath: 'PercentDone',
        parameters: {
          RestoreJobId: this.__input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRestoreJob.PercentDone', props);
    return resource.getResponseField('PercentDone') as unknown as string;
  }

  public get backupSizeInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRestoreJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRestoreJob.BackupSizeInBytes'),
        outputPath: 'BackupSizeInBytes',
        parameters: {
          RestoreJobId: this.__input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRestoreJob.BackupSizeInBytes', props);
    return resource.getResponseField('BackupSizeInBytes') as unknown as number;
  }

  public get iamRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRestoreJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRestoreJob.IamRoleArn'),
        outputPath: 'IamRoleArn',
        parameters: {
          RestoreJobId: this.__input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRestoreJob.IamRoleArn', props);
    return resource.getResponseField('IamRoleArn') as unknown as string;
  }

  public get expectedCompletionTimeMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRestoreJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRestoreJob.ExpectedCompletionTimeMinutes'),
        outputPath: 'ExpectedCompletionTimeMinutes',
        parameters: {
          RestoreJobId: this.__input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRestoreJob.ExpectedCompletionTimeMinutes', props);
    return resource.getResponseField('ExpectedCompletionTimeMinutes') as unknown as number;
  }

  public get createdResourceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRestoreJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRestoreJob.CreatedResourceArn'),
        outputPath: 'CreatedResourceArn',
        parameters: {
          RestoreJobId: this.__input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRestoreJob.CreatedResourceArn', props);
    return resource.getResponseField('CreatedResourceArn') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRestoreJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.DescribeRestoreJob.ResourceType'),
        outputPath: 'ResourceType',
        parameters: {
          RestoreJobId: this.__input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRestoreJob.ResourceType', props);
    return resource.getResponseField('ResourceType') as unknown as string;
  }

}

export class BackupResponsesExportBackupPlanTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupExportBackupPlanTemplateInput) {
  }

  public get backupPlanTemplateJson(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'exportBackupPlanTemplate',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ExportBackupPlanTemplate.BackupPlanTemplateJson'),
        outputPath: 'BackupPlanTemplateJson',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ExportBackupPlanTemplate.BackupPlanTemplateJson', props);
    return resource.getResponseField('BackupPlanTemplateJson') as unknown as string;
  }

}

export class BackupResponsesFetchBackupPlan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupGetBackupPlanInput) {
  }

  public get backupPlan(): BackupResponsesFetchBackupPlanBackupPlan {
    return new BackupResponsesFetchBackupPlanBackupPlan(this.__scope, this.__resources, this.__input);
  }

  public get backupPlanId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupPlan.BackupPlanId'),
        outputPath: 'BackupPlanId',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupPlan.BackupPlanId', props);
    return resource.getResponseField('BackupPlanId') as unknown as string;
  }

  public get backupPlanArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupPlan.BackupPlanArn'),
        outputPath: 'BackupPlanArn',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupPlan.BackupPlanArn', props);
    return resource.getResponseField('BackupPlanArn') as unknown as string;
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupPlan.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupPlan.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupPlan.CreatorRequestId'),
        outputPath: 'CreatorRequestId',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupPlan.CreatorRequestId', props);
    return resource.getResponseField('CreatorRequestId') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupPlan.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupPlan.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

  public get deletionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupPlan.DeletionDate'),
        outputPath: 'DeletionDate',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupPlan.DeletionDate', props);
    return resource.getResponseField('DeletionDate') as unknown as string;
  }

  public get lastExecutionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupPlan.LastExecutionDate'),
        outputPath: 'LastExecutionDate',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupPlan.LastExecutionDate', props);
    return resource.getResponseField('LastExecutionDate') as unknown as string;
  }

  public get advancedBackupSettings(): shapes.BackupAdvancedBackupSetting[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupPlan.AdvancedBackupSettings'),
        outputPath: 'AdvancedBackupSettings',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupPlan.AdvancedBackupSettings', props);
    return resource.getResponseField('AdvancedBackupSettings') as unknown as shapes.BackupAdvancedBackupSetting[];
  }

}

export class BackupResponsesFetchBackupPlanBackupPlan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupGetBackupPlanInput) {
  }

  public get backupPlanName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupPlan.BackupPlan.BackupPlanName'),
        outputPath: 'BackupPlan.BackupPlanName',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupPlan.BackupPlan.BackupPlanName', props);
    return resource.getResponseField('BackupPlan.BackupPlanName') as unknown as string;
  }

  public get rules(): shapes.BackupBackupRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupPlan.BackupPlan.Rules'),
        outputPath: 'BackupPlan.Rules',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupPlan.BackupPlan.Rules', props);
    return resource.getResponseField('BackupPlan.Rules') as unknown as shapes.BackupBackupRule[];
  }

  public get advancedBackupSettings(): shapes.BackupAdvancedBackupSetting[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupPlan.BackupPlan.AdvancedBackupSettings'),
        outputPath: 'BackupPlan.AdvancedBackupSettings',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupPlan.BackupPlan.AdvancedBackupSettings', props);
    return resource.getResponseField('BackupPlan.AdvancedBackupSettings') as unknown as shapes.BackupAdvancedBackupSetting[];
  }

}

export class BackupResponsesFetchBackupPlanFromJson {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupGetBackupPlanFromJsonInput) {
  }

  public get backupPlan(): BackupResponsesFetchBackupPlanFromJsonBackupPlan {
    return new BackupResponsesFetchBackupPlanFromJsonBackupPlan(this.__scope, this.__resources, this.__input);
  }

}

export class BackupResponsesFetchBackupPlanFromJsonBackupPlan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupGetBackupPlanFromJsonInput) {
  }

  public get backupPlanName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupPlanFromJson',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupPlanFromJSON.BackupPlan.BackupPlanName'),
        outputPath: 'BackupPlan.BackupPlanName',
        parameters: {
          BackupPlanTemplateJson: this.__input.backupPlanTemplateJson,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupPlanFromJSON.BackupPlan.BackupPlanName', props);
    return resource.getResponseField('BackupPlan.BackupPlanName') as unknown as string;
  }

  public get rules(): shapes.BackupBackupRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupPlanFromJson',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupPlanFromJSON.BackupPlan.Rules'),
        outputPath: 'BackupPlan.Rules',
        parameters: {
          BackupPlanTemplateJson: this.__input.backupPlanTemplateJson,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupPlanFromJSON.BackupPlan.Rules', props);
    return resource.getResponseField('BackupPlan.Rules') as unknown as shapes.BackupBackupRule[];
  }

  public get advancedBackupSettings(): shapes.BackupAdvancedBackupSetting[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupPlanFromJson',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupPlanFromJSON.BackupPlan.AdvancedBackupSettings'),
        outputPath: 'BackupPlan.AdvancedBackupSettings',
        parameters: {
          BackupPlanTemplateJson: this.__input.backupPlanTemplateJson,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupPlanFromJSON.BackupPlan.AdvancedBackupSettings', props);
    return resource.getResponseField('BackupPlan.AdvancedBackupSettings') as unknown as shapes.BackupAdvancedBackupSetting[];
  }

}

export class BackupResponsesFetchBackupPlanFromTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupGetBackupPlanFromTemplateInput) {
  }

  public get backupPlanDocument(): BackupResponsesFetchBackupPlanFromTemplateBackupPlanDocument {
    return new BackupResponsesFetchBackupPlanFromTemplateBackupPlanDocument(this.__scope, this.__resources, this.__input);
  }

}

export class BackupResponsesFetchBackupPlanFromTemplateBackupPlanDocument {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupGetBackupPlanFromTemplateInput) {
  }

  public get backupPlanName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupPlanFromTemplate',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupPlanFromTemplate.BackupPlanDocument.BackupPlanName'),
        outputPath: 'BackupPlanDocument.BackupPlanName',
        parameters: {
          BackupPlanTemplateId: this.__input.backupPlanTemplateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupPlanFromTemplate.BackupPlanDocument.BackupPlanName', props);
    return resource.getResponseField('BackupPlanDocument.BackupPlanName') as unknown as string;
  }

  public get rules(): shapes.BackupBackupRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupPlanFromTemplate',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupPlanFromTemplate.BackupPlanDocument.Rules'),
        outputPath: 'BackupPlanDocument.Rules',
        parameters: {
          BackupPlanTemplateId: this.__input.backupPlanTemplateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupPlanFromTemplate.BackupPlanDocument.Rules', props);
    return resource.getResponseField('BackupPlanDocument.Rules') as unknown as shapes.BackupBackupRule[];
  }

  public get advancedBackupSettings(): shapes.BackupAdvancedBackupSetting[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupPlanFromTemplate',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupPlanFromTemplate.BackupPlanDocument.AdvancedBackupSettings'),
        outputPath: 'BackupPlanDocument.AdvancedBackupSettings',
        parameters: {
          BackupPlanTemplateId: this.__input.backupPlanTemplateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupPlanFromTemplate.BackupPlanDocument.AdvancedBackupSettings', props);
    return resource.getResponseField('BackupPlanDocument.AdvancedBackupSettings') as unknown as shapes.BackupAdvancedBackupSetting[];
  }

}

export class BackupResponsesFetchBackupSelection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupGetBackupSelectionInput) {
  }

  public get backupSelection(): BackupResponsesFetchBackupSelectionBackupSelection {
    return new BackupResponsesFetchBackupSelectionBackupSelection(this.__scope, this.__resources, this.__input);
  }

  public get selectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupSelection',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupSelection.SelectionId'),
        outputPath: 'SelectionId',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          SelectionId: this.__input.selectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupSelection.SelectionId', props);
    return resource.getResponseField('SelectionId') as unknown as string;
  }

  public get backupPlanId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupSelection',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupSelection.BackupPlanId'),
        outputPath: 'BackupPlanId',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          SelectionId: this.__input.selectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupSelection.BackupPlanId', props);
    return resource.getResponseField('BackupPlanId') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupSelection',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupSelection.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          SelectionId: this.__input.selectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupSelection.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

  public get creatorRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupSelection',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupSelection.CreatorRequestId'),
        outputPath: 'CreatorRequestId',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          SelectionId: this.__input.selectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupSelection.CreatorRequestId', props);
    return resource.getResponseField('CreatorRequestId') as unknown as string;
  }

}

export class BackupResponsesFetchBackupSelectionBackupSelection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupGetBackupSelectionInput) {
  }

  public get selectionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupSelection',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupSelection.BackupSelection.SelectionName'),
        outputPath: 'BackupSelection.SelectionName',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          SelectionId: this.__input.selectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupSelection.BackupSelection.SelectionName', props);
    return resource.getResponseField('BackupSelection.SelectionName') as unknown as string;
  }

  public get iamRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupSelection',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupSelection.BackupSelection.IamRoleArn'),
        outputPath: 'BackupSelection.IamRoleArn',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          SelectionId: this.__input.selectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupSelection.BackupSelection.IamRoleArn', props);
    return resource.getResponseField('BackupSelection.IamRoleArn') as unknown as string;
  }

  public get resources(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupSelection',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupSelection.BackupSelection.Resources'),
        outputPath: 'BackupSelection.Resources',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          SelectionId: this.__input.selectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupSelection.BackupSelection.Resources', props);
    return resource.getResponseField('BackupSelection.Resources') as unknown as string[];
  }

  public get listOfTags(): shapes.BackupCondition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupSelection',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupSelection.BackupSelection.ListOfTags'),
        outputPath: 'BackupSelection.ListOfTags',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          SelectionId: this.__input.selectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupSelection.BackupSelection.ListOfTags', props);
    return resource.getResponseField('BackupSelection.ListOfTags') as unknown as shapes.BackupCondition[];
  }

}

export class BackupResponsesFetchBackupVaultAccessPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupGetBackupVaultAccessPolicyInput) {
  }

  public get backupVaultName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupVaultAccessPolicy',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupVaultAccessPolicy.BackupVaultName'),
        outputPath: 'BackupVaultName',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupVaultAccessPolicy.BackupVaultName', props);
    return resource.getResponseField('BackupVaultName') as unknown as string;
  }

  public get backupVaultArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupVaultAccessPolicy',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupVaultAccessPolicy.BackupVaultArn'),
        outputPath: 'BackupVaultArn',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupVaultAccessPolicy.BackupVaultArn', props);
    return resource.getResponseField('BackupVaultArn') as unknown as string;
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupVaultAccessPolicy',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupVaultAccessPolicy.Policy'),
        outputPath: 'Policy',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupVaultAccessPolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class BackupResponsesFetchBackupVaultNotifications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupGetBackupVaultNotificationsInput) {
  }

  public get backupVaultName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupVaultNotifications',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupVaultNotifications.BackupVaultName'),
        outputPath: 'BackupVaultName',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupVaultNotifications.BackupVaultName', props);
    return resource.getResponseField('BackupVaultName') as unknown as string;
  }

  public get backupVaultArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupVaultNotifications',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupVaultNotifications.BackupVaultArn'),
        outputPath: 'BackupVaultArn',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupVaultNotifications.BackupVaultArn', props);
    return resource.getResponseField('BackupVaultArn') as unknown as string;
  }

  public get snsTopicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupVaultNotifications',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupVaultNotifications.SNSTopicArn'),
        outputPath: 'SNSTopicArn',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupVaultNotifications.SNSTopicArn', props);
    return resource.getResponseField('SNSTopicArn') as unknown as string;
  }

  public get backupVaultEvents(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBackupVaultNotifications',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetBackupVaultNotifications.BackupVaultEvents'),
        outputPath: 'BackupVaultEvents',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBackupVaultNotifications.BackupVaultEvents', props);
    return resource.getResponseField('BackupVaultEvents') as unknown as string[];
  }

}

export class BackupResponsesFetchRecoveryPointRestoreMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupGetRecoveryPointRestoreMetadataInput) {
  }

  public get backupVaultArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecoveryPointRestoreMetadata',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetRecoveryPointRestoreMetadata.BackupVaultArn'),
        outputPath: 'BackupVaultArn',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecoveryPointRestoreMetadata.BackupVaultArn', props);
    return resource.getResponseField('BackupVaultArn') as unknown as string;
  }

  public get recoveryPointArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecoveryPointRestoreMetadata',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetRecoveryPointRestoreMetadata.RecoveryPointArn'),
        outputPath: 'RecoveryPointArn',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecoveryPointRestoreMetadata.RecoveryPointArn', props);
    return resource.getResponseField('RecoveryPointArn') as unknown as string;
  }

  public get restoreMetadata(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRecoveryPointRestoreMetadata',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetRecoveryPointRestoreMetadata.RestoreMetadata'),
        outputPath: 'RestoreMetadata',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRecoveryPointRestoreMetadata.RestoreMetadata', props);
    return resource.getResponseField('RestoreMetadata') as unknown as Record<string, string>;
  }

}

export class BackupResponsesFetchSupportedResourceTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get resourceTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSupportedResourceTypes',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.GetSupportedResourceTypes.ResourceTypes'),
        outputPath: 'ResourceTypes',
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSupportedResourceTypes.ResourceTypes', props);
    return resource.getResponseField('ResourceTypes') as unknown as string[];
  }

}

export class BackupResponsesListBackupJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupListBackupJobsInput) {
  }

  public get backupJobs(): shapes.BackupBackupJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBackupJobs',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListBackupJobs.BackupJobs'),
        outputPath: 'BackupJobs',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ByResourceArn: this.__input.byResourceArn,
          ByState: this.__input.byState,
          ByBackupVaultName: this.__input.byBackupVaultName,
          ByCreatedBefore: this.__input.byCreatedBefore,
          ByCreatedAfter: this.__input.byCreatedAfter,
          ByResourceType: this.__input.byResourceType,
          ByAccountId: this.__input.byAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBackupJobs.BackupJobs', props);
    return resource.getResponseField('BackupJobs') as unknown as shapes.BackupBackupJob[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBackupJobs',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListBackupJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ByResourceArn: this.__input.byResourceArn,
          ByState: this.__input.byState,
          ByBackupVaultName: this.__input.byBackupVaultName,
          ByCreatedBefore: this.__input.byCreatedBefore,
          ByCreatedAfter: this.__input.byCreatedAfter,
          ByResourceType: this.__input.byResourceType,
          ByAccountId: this.__input.byAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBackupJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BackupResponsesListBackupPlanTemplates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupListBackupPlanTemplatesInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBackupPlanTemplates',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListBackupPlanTemplates.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBackupPlanTemplates.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get backupPlanTemplatesList(): shapes.BackupBackupPlanTemplatesListMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBackupPlanTemplates',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListBackupPlanTemplates.BackupPlanTemplatesList'),
        outputPath: 'BackupPlanTemplatesList',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBackupPlanTemplates.BackupPlanTemplatesList', props);
    return resource.getResponseField('BackupPlanTemplatesList') as unknown as shapes.BackupBackupPlanTemplatesListMember[];
  }

}

export class BackupResponsesListBackupPlanVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupListBackupPlanVersionsInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBackupPlanVersions',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListBackupPlanVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBackupPlanVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get backupPlanVersionsList(): shapes.BackupBackupPlansListMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBackupPlanVersions',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListBackupPlanVersions.BackupPlanVersionsList'),
        outputPath: 'BackupPlanVersionsList',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBackupPlanVersions.BackupPlanVersionsList', props);
    return resource.getResponseField('BackupPlanVersionsList') as unknown as shapes.BackupBackupPlansListMember[];
  }

}

export class BackupResponsesListBackupPlans {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupListBackupPlansInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBackupPlans',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListBackupPlans.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          IncludeDeleted: this.__input.includeDeleted,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBackupPlans.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get backupPlansList(): shapes.BackupBackupPlansListMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBackupPlans',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListBackupPlans.BackupPlansList'),
        outputPath: 'BackupPlansList',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          IncludeDeleted: this.__input.includeDeleted,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBackupPlans.BackupPlansList', props);
    return resource.getResponseField('BackupPlansList') as unknown as shapes.BackupBackupPlansListMember[];
  }

}

export class BackupResponsesListBackupSelections {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupListBackupSelectionsInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBackupSelections',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListBackupSelections.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBackupSelections.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get backupSelectionsList(): shapes.BackupBackupSelectionsListMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBackupSelections',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListBackupSelections.BackupSelectionsList'),
        outputPath: 'BackupSelectionsList',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBackupSelections.BackupSelectionsList', props);
    return resource.getResponseField('BackupSelectionsList') as unknown as shapes.BackupBackupSelectionsListMember[];
  }

}

export class BackupResponsesListBackupVaults {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupListBackupVaultsInput) {
  }

  public get backupVaultList(): shapes.BackupBackupVaultListMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBackupVaults',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListBackupVaults.BackupVaultList'),
        outputPath: 'BackupVaultList',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBackupVaults.BackupVaultList', props);
    return resource.getResponseField('BackupVaultList') as unknown as shapes.BackupBackupVaultListMember[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBackupVaults',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListBackupVaults.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBackupVaults.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BackupResponsesListCopyJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupListCopyJobsInput) {
  }

  public get copyJobs(): shapes.BackupCopyJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCopyJobs',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListCopyJobs.CopyJobs'),
        outputPath: 'CopyJobs',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ByResourceArn: this.__input.byResourceArn,
          ByState: this.__input.byState,
          ByCreatedBefore: this.__input.byCreatedBefore,
          ByCreatedAfter: this.__input.byCreatedAfter,
          ByResourceType: this.__input.byResourceType,
          ByDestinationVaultArn: this.__input.byDestinationVaultArn,
          ByAccountId: this.__input.byAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCopyJobs.CopyJobs', props);
    return resource.getResponseField('CopyJobs') as unknown as shapes.BackupCopyJob[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCopyJobs',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListCopyJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ByResourceArn: this.__input.byResourceArn,
          ByState: this.__input.byState,
          ByCreatedBefore: this.__input.byCreatedBefore,
          ByCreatedAfter: this.__input.byCreatedAfter,
          ByResourceType: this.__input.byResourceType,
          ByDestinationVaultArn: this.__input.byDestinationVaultArn,
          ByAccountId: this.__input.byAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCopyJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BackupResponsesListProtectedResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupListProtectedResourcesInput) {
  }

  public get results(): shapes.BackupProtectedResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProtectedResources',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListProtectedResources.Results'),
        outputPath: 'Results',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProtectedResources.Results', props);
    return resource.getResponseField('Results') as unknown as shapes.BackupProtectedResource[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProtectedResources',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListProtectedResources.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProtectedResources.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BackupResponsesListRecoveryPointsByBackupVault {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupListRecoveryPointsByBackupVaultInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecoveryPointsByBackupVault',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListRecoveryPointsByBackupVault.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ByResourceArn: this.__input.byResourceArn,
          ByResourceType: this.__input.byResourceType,
          ByBackupPlanId: this.__input.byBackupPlanId,
          ByCreatedBefore: this.__input.byCreatedBefore,
          ByCreatedAfter: this.__input.byCreatedAfter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecoveryPointsByBackupVault.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get recoveryPoints(): shapes.BackupRecoveryPointByBackupVault[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecoveryPointsByBackupVault',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListRecoveryPointsByBackupVault.RecoveryPoints'),
        outputPath: 'RecoveryPoints',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ByResourceArn: this.__input.byResourceArn,
          ByResourceType: this.__input.byResourceType,
          ByBackupPlanId: this.__input.byBackupPlanId,
          ByCreatedBefore: this.__input.byCreatedBefore,
          ByCreatedAfter: this.__input.byCreatedAfter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecoveryPointsByBackupVault.RecoveryPoints', props);
    return resource.getResponseField('RecoveryPoints') as unknown as shapes.BackupRecoveryPointByBackupVault[];
  }

}

export class BackupResponsesListRecoveryPointsByResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupListRecoveryPointsByResourceInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecoveryPointsByResource',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListRecoveryPointsByResource.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecoveryPointsByResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get recoveryPoints(): shapes.BackupRecoveryPointByResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecoveryPointsByResource',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListRecoveryPointsByResource.RecoveryPoints'),
        outputPath: 'RecoveryPoints',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecoveryPointsByResource.RecoveryPoints', props);
    return resource.getResponseField('RecoveryPoints') as unknown as shapes.BackupRecoveryPointByResource[];
  }

}

export class BackupResponsesListRestoreJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupListRestoreJobsInput) {
  }

  public get restoreJobs(): shapes.BackupRestoreJobsListMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRestoreJobs',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListRestoreJobs.RestoreJobs'),
        outputPath: 'RestoreJobs',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ByAccountId: this.__input.byAccountId,
          ByCreatedBefore: this.__input.byCreatedBefore,
          ByCreatedAfter: this.__input.byCreatedAfter,
          ByStatus: this.__input.byStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRestoreJobs.RestoreJobs', props);
    return resource.getResponseField('RestoreJobs') as unknown as shapes.BackupRestoreJobsListMember[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRestoreJobs',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListRestoreJobs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          ByAccountId: this.__input.byAccountId,
          ByCreatedBefore: this.__input.byCreatedBefore,
          ByCreatedAfter: this.__input.byCreatedAfter,
          ByStatus: this.__input.byStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRestoreJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BackupResponsesListTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupListTagsInput) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTags',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListTags.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTags.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTags',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.ListTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class BackupResponsesStartBackupJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupStartBackupJobInput) {
  }

  public get backupJobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.StartBackupJob.BackupJobId'),
        outputPath: 'BackupJobId',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          ResourceArn: this.__input.resourceArn,
          IamRoleArn: this.__input.iamRoleArn,
          IdempotencyToken: this.__input.idempotencyToken,
          StartWindowMinutes: this.__input.startWindowMinutes,
          CompleteWindowMinutes: this.__input.completeWindowMinutes,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.__input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.__input.lifecycle?.deleteAfterDays,
          },
          RecoveryPointTags: this.__input.recoveryPointTags,
          BackupOptions: this.__input.backupOptions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartBackupJob.BackupJobId', props);
    return resource.getResponseField('BackupJobId') as unknown as string;
  }

  public get recoveryPointArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.StartBackupJob.RecoveryPointArn'),
        outputPath: 'RecoveryPointArn',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          ResourceArn: this.__input.resourceArn,
          IamRoleArn: this.__input.iamRoleArn,
          IdempotencyToken: this.__input.idempotencyToken,
          StartWindowMinutes: this.__input.startWindowMinutes,
          CompleteWindowMinutes: this.__input.completeWindowMinutes,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.__input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.__input.lifecycle?.deleteAfterDays,
          },
          RecoveryPointTags: this.__input.recoveryPointTags,
          BackupOptions: this.__input.backupOptions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartBackupJob.RecoveryPointArn', props);
    return resource.getResponseField('RecoveryPointArn') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startBackupJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.StartBackupJob.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          ResourceArn: this.__input.resourceArn,
          IamRoleArn: this.__input.iamRoleArn,
          IdempotencyToken: this.__input.idempotencyToken,
          StartWindowMinutes: this.__input.startWindowMinutes,
          CompleteWindowMinutes: this.__input.completeWindowMinutes,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.__input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.__input.lifecycle?.deleteAfterDays,
          },
          RecoveryPointTags: this.__input.recoveryPointTags,
          BackupOptions: this.__input.backupOptions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartBackupJob.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

}

export class BackupResponsesStartCopyJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupStartCopyJobInput) {
  }

  public get copyJobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startCopyJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.StartCopyJob.CopyJobId'),
        outputPath: 'CopyJobId',
        parameters: {
          RecoveryPointArn: this.__input.recoveryPointArn,
          SourceBackupVaultName: this.__input.sourceBackupVaultName,
          DestinationBackupVaultArn: this.__input.destinationBackupVaultArn,
          IamRoleArn: this.__input.iamRoleArn,
          IdempotencyToken: this.__input.idempotencyToken,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.__input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.__input.lifecycle?.deleteAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartCopyJob.CopyJobId', props);
    return resource.getResponseField('CopyJobId') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startCopyJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.StartCopyJob.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          RecoveryPointArn: this.__input.recoveryPointArn,
          SourceBackupVaultName: this.__input.sourceBackupVaultName,
          DestinationBackupVaultArn: this.__input.destinationBackupVaultArn,
          IamRoleArn: this.__input.iamRoleArn,
          IdempotencyToken: this.__input.idempotencyToken,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.__input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.__input.lifecycle?.deleteAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartCopyJob.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

}

export class BackupResponsesStartRestoreJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupStartRestoreJobInput) {
  }

  public get restoreJobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startRestoreJob',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.StartRestoreJob.RestoreJobId'),
        outputPath: 'RestoreJobId',
        parameters: {
          RecoveryPointArn: this.__input.recoveryPointArn,
          Metadata: this.__input.metadata,
          IamRoleArn: this.__input.iamRoleArn,
          IdempotencyToken: this.__input.idempotencyToken,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartRestoreJob.RestoreJobId', props);
    return resource.getResponseField('RestoreJobId') as unknown as string;
  }

}

export class BackupResponsesUpdateBackupPlan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupUpdateBackupPlanInput) {
  }

  public get backupPlanId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.UpdateBackupPlan.BackupPlanId'),
        outputPath: 'BackupPlanId',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          BackupPlan: {
            BackupPlanName: this.__input.backupPlan.backupPlanName,
            Rules: this.__input.backupPlan.rules,
            AdvancedBackupSettings: this.__input.backupPlan.advancedBackupSettings,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackupPlan.BackupPlanId', props);
    return resource.getResponseField('BackupPlanId') as unknown as string;
  }

  public get backupPlanArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.UpdateBackupPlan.BackupPlanArn'),
        outputPath: 'BackupPlanArn',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          BackupPlan: {
            BackupPlanName: this.__input.backupPlan.backupPlanName,
            Rules: this.__input.backupPlan.rules,
            AdvancedBackupSettings: this.__input.backupPlan.advancedBackupSettings,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackupPlan.BackupPlanArn', props);
    return resource.getResponseField('BackupPlanArn') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.UpdateBackupPlan.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          BackupPlan: {
            BackupPlanName: this.__input.backupPlan.backupPlanName,
            Rules: this.__input.backupPlan.rules,
            AdvancedBackupSettings: this.__input.backupPlan.advancedBackupSettings,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackupPlan.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.UpdateBackupPlan.VersionId'),
        outputPath: 'VersionId',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          BackupPlan: {
            BackupPlanName: this.__input.backupPlan.backupPlanName,
            Rules: this.__input.backupPlan.rules,
            AdvancedBackupSettings: this.__input.backupPlan.advancedBackupSettings,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackupPlan.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

  public get advancedBackupSettings(): shapes.BackupAdvancedBackupSetting[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBackupPlan',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.UpdateBackupPlan.AdvancedBackupSettings'),
        outputPath: 'AdvancedBackupSettings',
        parameters: {
          BackupPlanId: this.__input.backupPlanId,
          BackupPlan: {
            BackupPlanName: this.__input.backupPlan.backupPlanName,
            Rules: this.__input.backupPlan.rules,
            AdvancedBackupSettings: this.__input.backupPlan.advancedBackupSettings,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBackupPlan.AdvancedBackupSettings', props);
    return resource.getResponseField('AdvancedBackupSettings') as unknown as shapes.BackupAdvancedBackupSetting[];
  }

}

export class BackupResponsesUpdateRecoveryPointLifecycle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupUpdateRecoveryPointLifecycleInput) {
  }

  public get backupVaultArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRecoveryPointLifecycle',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.UpdateRecoveryPointLifecycle.BackupVaultArn'),
        outputPath: 'BackupVaultArn',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.__input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.__input.lifecycle?.deleteAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRecoveryPointLifecycle.BackupVaultArn', props);
    return resource.getResponseField('BackupVaultArn') as unknown as string;
  }

  public get recoveryPointArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRecoveryPointLifecycle',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.UpdateRecoveryPointLifecycle.RecoveryPointArn'),
        outputPath: 'RecoveryPointArn',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.__input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.__input.lifecycle?.deleteAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRecoveryPointLifecycle.RecoveryPointArn', props);
    return resource.getResponseField('RecoveryPointArn') as unknown as string;
  }

  public get lifecycle(): BackupResponsesUpdateRecoveryPointLifecycleLifecycle {
    return new BackupResponsesUpdateRecoveryPointLifecycleLifecycle(this.__scope, this.__resources, this.__input);
  }

  public get calculatedLifecycle(): BackupResponsesUpdateRecoveryPointLifecycleCalculatedLifecycle {
    return new BackupResponsesUpdateRecoveryPointLifecycleCalculatedLifecycle(this.__scope, this.__resources, this.__input);
  }

}

export class BackupResponsesUpdateRecoveryPointLifecycleLifecycle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupUpdateRecoveryPointLifecycleInput) {
  }

  public get moveToColdStorageAfterDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRecoveryPointLifecycle',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.UpdateRecoveryPointLifecycle.Lifecycle.MoveToColdStorageAfterDays'),
        outputPath: 'Lifecycle.MoveToColdStorageAfterDays',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.__input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.__input.lifecycle?.deleteAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRecoveryPointLifecycle.Lifecycle.MoveToColdStorageAfterDays', props);
    return resource.getResponseField('Lifecycle.MoveToColdStorageAfterDays') as unknown as number;
  }

  public get deleteAfterDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRecoveryPointLifecycle',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.UpdateRecoveryPointLifecycle.Lifecycle.DeleteAfterDays'),
        outputPath: 'Lifecycle.DeleteAfterDays',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.__input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.__input.lifecycle?.deleteAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRecoveryPointLifecycle.Lifecycle.DeleteAfterDays', props);
    return resource.getResponseField('Lifecycle.DeleteAfterDays') as unknown as number;
  }

}

export class BackupResponsesUpdateRecoveryPointLifecycleCalculatedLifecycle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BackupUpdateRecoveryPointLifecycleInput) {
  }

  public get moveToColdStorageAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRecoveryPointLifecycle',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.UpdateRecoveryPointLifecycle.CalculatedLifecycle.MoveToColdStorageAt'),
        outputPath: 'CalculatedLifecycle.MoveToColdStorageAt',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.__input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.__input.lifecycle?.deleteAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRecoveryPointLifecycle.CalculatedLifecycle.MoveToColdStorageAt', props);
    return resource.getResponseField('CalculatedLifecycle.MoveToColdStorageAt') as unknown as string;
  }

  public get deleteAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRecoveryPointLifecycle',
        service: 'Backup',
        physicalResourceId: cr.PhysicalResourceId.of('Backup.UpdateRecoveryPointLifecycle.CalculatedLifecycle.DeleteAt'),
        outputPath: 'CalculatedLifecycle.DeleteAt',
        parameters: {
          BackupVaultName: this.__input.backupVaultName,
          RecoveryPointArn: this.__input.recoveryPointArn,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.__input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.__input.lifecycle?.deleteAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRecoveryPointLifecycle.CalculatedLifecycle.DeleteAt', props);
    return resource.getResponseField('CalculatedLifecycle.DeleteAt') as unknown as string;
  }

}

