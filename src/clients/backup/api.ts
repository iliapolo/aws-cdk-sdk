import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class BackupClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createBackupPlan(input: shapes.BackupCreateBackupPlanInput): BackupCreateBackupPlan {
    return new BackupCreateBackupPlan(this, 'CreateBackupPlan', this.__resources, input);
  }

  public createBackupSelection(input: shapes.BackupCreateBackupSelectionInput): BackupCreateBackupSelection {
    return new BackupCreateBackupSelection(this, 'CreateBackupSelection', this.__resources, input);
  }

  public createBackupVault(input: shapes.BackupCreateBackupVaultInput): BackupCreateBackupVault {
    return new BackupCreateBackupVault(this, 'CreateBackupVault', this.__resources, input);
  }

  public deleteBackupPlan(input: shapes.BackupDeleteBackupPlanInput): BackupDeleteBackupPlan {
    return new BackupDeleteBackupPlan(this, 'DeleteBackupPlan', this.__resources, input);
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

  public describeBackupJob(input: shapes.BackupDescribeBackupJobInput): BackupDescribeBackupJob {
    return new BackupDescribeBackupJob(this, 'DescribeBackupJob', this.__resources, input);
  }

  public describeBackupVault(input: shapes.BackupDescribeBackupVaultInput): BackupDescribeBackupVault {
    return new BackupDescribeBackupVault(this, 'DescribeBackupVault', this.__resources, input);
  }

  public describeCopyJob(input: shapes.BackupDescribeCopyJobInput): BackupDescribeCopyJob {
    return new BackupDescribeCopyJob(this, 'DescribeCopyJob', this.__resources, input);
  }

  public describeGlobalSettings(): BackupDescribeGlobalSettings {
    return new BackupDescribeGlobalSettings(this, 'DescribeGlobalSettings', this.__resources);
  }

  public describeProtectedResource(input: shapes.BackupDescribeProtectedResourceInput): BackupDescribeProtectedResource {
    return new BackupDescribeProtectedResource(this, 'DescribeProtectedResource', this.__resources, input);
  }

  public describeRecoveryPoint(input: shapes.BackupDescribeRecoveryPointInput): BackupDescribeRecoveryPoint {
    return new BackupDescribeRecoveryPoint(this, 'DescribeRecoveryPoint', this.__resources, input);
  }

  public describeRegionSettings(): BackupDescribeRegionSettings {
    return new BackupDescribeRegionSettings(this, 'DescribeRegionSettings', this.__resources);
  }

  public describeRestoreJob(input: shapes.BackupDescribeRestoreJobInput): BackupDescribeRestoreJob {
    return new BackupDescribeRestoreJob(this, 'DescribeRestoreJob', this.__resources, input);
  }

  public exportBackupPlanTemplate(input: shapes.BackupExportBackupPlanTemplateInput): BackupExportBackupPlanTemplate {
    return new BackupExportBackupPlanTemplate(this, 'ExportBackupPlanTemplate', this.__resources, input);
  }

  public fetchBackupPlan(input: shapes.BackupGetBackupPlanInput): BackupFetchBackupPlan {
    return new BackupFetchBackupPlan(this, 'FetchBackupPlan', this.__resources, input);
  }

  public fetchBackupPlanFromJson(input: shapes.BackupGetBackupPlanFromJsonInput): BackupFetchBackupPlanFromJson {
    return new BackupFetchBackupPlanFromJson(this, 'FetchBackupPlanFromJson', this.__resources, input);
  }

  public fetchBackupPlanFromTemplate(input: shapes.BackupGetBackupPlanFromTemplateInput): BackupFetchBackupPlanFromTemplate {
    return new BackupFetchBackupPlanFromTemplate(this, 'FetchBackupPlanFromTemplate', this.__resources, input);
  }

  public fetchBackupSelection(input: shapes.BackupGetBackupSelectionInput): BackupFetchBackupSelection {
    return new BackupFetchBackupSelection(this, 'FetchBackupSelection', this.__resources, input);
  }

  public fetchBackupVaultAccessPolicy(input: shapes.BackupGetBackupVaultAccessPolicyInput): BackupFetchBackupVaultAccessPolicy {
    return new BackupFetchBackupVaultAccessPolicy(this, 'FetchBackupVaultAccessPolicy', this.__resources, input);
  }

  public fetchBackupVaultNotifications(input: shapes.BackupGetBackupVaultNotificationsInput): BackupFetchBackupVaultNotifications {
    return new BackupFetchBackupVaultNotifications(this, 'FetchBackupVaultNotifications', this.__resources, input);
  }

  public fetchRecoveryPointRestoreMetadata(input: shapes.BackupGetRecoveryPointRestoreMetadataInput): BackupFetchRecoveryPointRestoreMetadata {
    return new BackupFetchRecoveryPointRestoreMetadata(this, 'FetchRecoveryPointRestoreMetadata', this.__resources, input);
  }

  public fetchSupportedResourceTypes(): BackupFetchSupportedResourceTypes {
    return new BackupFetchSupportedResourceTypes(this, 'FetchSupportedResourceTypes', this.__resources);
  }

  public listBackupJobs(input: shapes.BackupListBackupJobsInput): BackupListBackupJobs {
    return new BackupListBackupJobs(this, 'ListBackupJobs', this.__resources, input);
  }

  public listBackupPlanTemplates(input: shapes.BackupListBackupPlanTemplatesInput): BackupListBackupPlanTemplates {
    return new BackupListBackupPlanTemplates(this, 'ListBackupPlanTemplates', this.__resources, input);
  }

  public listBackupPlanVersions(input: shapes.BackupListBackupPlanVersionsInput): BackupListBackupPlanVersions {
    return new BackupListBackupPlanVersions(this, 'ListBackupPlanVersions', this.__resources, input);
  }

  public listBackupPlans(input: shapes.BackupListBackupPlansInput): BackupListBackupPlans {
    return new BackupListBackupPlans(this, 'ListBackupPlans', this.__resources, input);
  }

  public listBackupSelections(input: shapes.BackupListBackupSelectionsInput): BackupListBackupSelections {
    return new BackupListBackupSelections(this, 'ListBackupSelections', this.__resources, input);
  }

  public listBackupVaults(input: shapes.BackupListBackupVaultsInput): BackupListBackupVaults {
    return new BackupListBackupVaults(this, 'ListBackupVaults', this.__resources, input);
  }

  public listCopyJobs(input: shapes.BackupListCopyJobsInput): BackupListCopyJobs {
    return new BackupListCopyJobs(this, 'ListCopyJobs', this.__resources, input);
  }

  public listProtectedResources(input: shapes.BackupListProtectedResourcesInput): BackupListProtectedResources {
    return new BackupListProtectedResources(this, 'ListProtectedResources', this.__resources, input);
  }

  public listRecoveryPointsByBackupVault(input: shapes.BackupListRecoveryPointsByBackupVaultInput): BackupListRecoveryPointsByBackupVault {
    return new BackupListRecoveryPointsByBackupVault(this, 'ListRecoveryPointsByBackupVault', this.__resources, input);
  }

  public listRecoveryPointsByResource(input: shapes.BackupListRecoveryPointsByResourceInput): BackupListRecoveryPointsByResource {
    return new BackupListRecoveryPointsByResource(this, 'ListRecoveryPointsByResource', this.__resources, input);
  }

  public listRestoreJobs(input: shapes.BackupListRestoreJobsInput): BackupListRestoreJobs {
    return new BackupListRestoreJobs(this, 'ListRestoreJobs', this.__resources, input);
  }

  public listTags(input: shapes.BackupListTagsInput): BackupListTags {
    return new BackupListTags(this, 'ListTags', this.__resources, input);
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

  public startBackupJob(input: shapes.BackupStartBackupJobInput): BackupStartBackupJob {
    return new BackupStartBackupJob(this, 'StartBackupJob', this.__resources, input);
  }

  public startCopyJob(input: shapes.BackupStartCopyJobInput): BackupStartCopyJob {
    return new BackupStartCopyJob(this, 'StartCopyJob', this.__resources, input);
  }

  public startRestoreJob(input: shapes.BackupStartRestoreJobInput): BackupStartRestoreJob {
    return new BackupStartRestoreJob(this, 'StartRestoreJob', this.__resources, input);
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

  public updateBackupPlan(input: shapes.BackupUpdateBackupPlanInput): BackupUpdateBackupPlan {
    return new BackupUpdateBackupPlan(this, 'UpdateBackupPlan', this.__resources, input);
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

  public updateRecoveryPointLifecycle(input: shapes.BackupUpdateRecoveryPointLifecycleInput): BackupUpdateRecoveryPointLifecycle {
    return new BackupUpdateRecoveryPointLifecycle(this, 'UpdateRecoveryPointLifecycle', this.__resources, input);
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

export class BackupCreateBackupPlan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupCreateBackupPlanInput) {
    super(scope, id);
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
            BackupPlanName: this.input.backupPlan.backupPlanName,
            Rules: this.input.backupPlan.rules,
            AdvancedBackupSettings: this.input.backupPlan.advancedBackupSettings,
          },
          BackupPlanTags: this.input.backupPlanTags,
          CreatorRequestId: this.input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackupPlan.BackupPlanId', props);
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
            BackupPlanName: this.input.backupPlan.backupPlanName,
            Rules: this.input.backupPlan.rules,
            AdvancedBackupSettings: this.input.backupPlan.advancedBackupSettings,
          },
          BackupPlanTags: this.input.backupPlanTags,
          CreatorRequestId: this.input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackupPlan.BackupPlanArn', props);
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
            BackupPlanName: this.input.backupPlan.backupPlanName,
            Rules: this.input.backupPlan.rules,
            AdvancedBackupSettings: this.input.backupPlan.advancedBackupSettings,
          },
          BackupPlanTags: this.input.backupPlanTags,
          CreatorRequestId: this.input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackupPlan.CreationDate', props);
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
            BackupPlanName: this.input.backupPlan.backupPlanName,
            Rules: this.input.backupPlan.rules,
            AdvancedBackupSettings: this.input.backupPlan.advancedBackupSettings,
          },
          BackupPlanTags: this.input.backupPlanTags,
          CreatorRequestId: this.input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackupPlan.VersionId', props);
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
            BackupPlanName: this.input.backupPlan.backupPlanName,
            Rules: this.input.backupPlan.rules,
            AdvancedBackupSettings: this.input.backupPlan.advancedBackupSettings,
          },
          BackupPlanTags: this.input.backupPlanTags,
          CreatorRequestId: this.input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackupPlan.AdvancedBackupSettings', props);
    return resource.getResponseField('AdvancedBackupSettings') as unknown as shapes.BackupAdvancedBackupSetting[];
  }

}

export class BackupCreateBackupSelection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupCreateBackupSelectionInput) {
    super(scope, id);
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
          BackupPlanId: this.input.backupPlanId,
          BackupSelection: {
            SelectionName: this.input.backupSelection.selectionName,
            IamRoleArn: this.input.backupSelection.iamRoleArn,
            Resources: this.input.backupSelection.resources,
            ListOfTags: this.input.backupSelection.listOfTags,
          },
          CreatorRequestId: this.input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackupSelection.SelectionId', props);
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
          BackupPlanId: this.input.backupPlanId,
          BackupSelection: {
            SelectionName: this.input.backupSelection.selectionName,
            IamRoleArn: this.input.backupSelection.iamRoleArn,
            Resources: this.input.backupSelection.resources,
            ListOfTags: this.input.backupSelection.listOfTags,
          },
          CreatorRequestId: this.input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackupSelection.BackupPlanId', props);
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
          BackupPlanId: this.input.backupPlanId,
          BackupSelection: {
            SelectionName: this.input.backupSelection.selectionName,
            IamRoleArn: this.input.backupSelection.iamRoleArn,
            Resources: this.input.backupSelection.resources,
            ListOfTags: this.input.backupSelection.listOfTags,
          },
          CreatorRequestId: this.input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackupSelection.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

}

export class BackupCreateBackupVault extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupCreateBackupVaultInput) {
    super(scope, id);
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
          BackupVaultName: this.input.backupVaultName,
          BackupVaultTags: this.input.backupVaultTags,
          EncryptionKeyArn: this.input.encryptionKeyArn,
          CreatorRequestId: this.input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackupVault.BackupVaultName', props);
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
          BackupVaultName: this.input.backupVaultName,
          BackupVaultTags: this.input.backupVaultTags,
          EncryptionKeyArn: this.input.encryptionKeyArn,
          CreatorRequestId: this.input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackupVault.BackupVaultArn', props);
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
          BackupVaultName: this.input.backupVaultName,
          BackupVaultTags: this.input.backupVaultTags,
          EncryptionKeyArn: this.input.encryptionKeyArn,
          CreatorRequestId: this.input.creatorRequestId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBackupVault.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

}

export class BackupDeleteBackupPlan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupDeleteBackupPlanInput) {
    super(scope, id);
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
          BackupPlanId: this.input.backupPlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackupPlan.BackupPlanId', props);
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
          BackupPlanId: this.input.backupPlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackupPlan.BackupPlanArn', props);
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
          BackupPlanId: this.input.backupPlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackupPlan.DeletionDate', props);
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
          BackupPlanId: this.input.backupPlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBackupPlan.VersionId', props);
    return resource.getResponseField('VersionId') as unknown as string;
  }

}

export class BackupDescribeBackupJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupDescribeBackupJobInput) {
    super(scope, id);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.AccountId', props);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.BackupJobId', props);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.BackupVaultName', props);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.BackupVaultArn', props);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.RecoveryPointArn', props);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.ResourceArn', props);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.CreationDate', props);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.CompletionDate', props);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.State', props);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.StatusMessage', props);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.PercentDone', props);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.BackupSizeInBytes', props);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.IamRoleArn', props);
    return resource.getResponseField('IamRoleArn') as unknown as string;
  }

  public get createdBy(): BackupDescribeBackupJobCreatedBy {
    return new BackupDescribeBackupJobCreatedBy(this, 'CreatedBy', this.__resources, this.input);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.ResourceType', props);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.BytesTransferred', props);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.ExpectedCompletionDate', props);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.StartBy', props);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.BackupOptions', props);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.BackupType', props);
    return resource.getResponseField('BackupType') as unknown as string;
  }

}

export class BackupDescribeBackupJobCreatedBy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupDescribeBackupJobInput) {
    super(scope, id);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.CreatedBy.BackupPlanId', props);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.CreatedBy.BackupPlanArn', props);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.CreatedBy.BackupPlanVersion', props);
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
          BackupJobId: this.input.backupJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupJob.CreatedBy.BackupRuleId', props);
    return resource.getResponseField('CreatedBy.BackupRuleId') as unknown as string;
  }

}

export class BackupDescribeBackupVault extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupDescribeBackupVaultInput) {
    super(scope, id);
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
          BackupVaultName: this.input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupVault.BackupVaultName', props);
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
          BackupVaultName: this.input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupVault.BackupVaultArn', props);
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
          BackupVaultName: this.input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupVault.EncryptionKeyArn', props);
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
          BackupVaultName: this.input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupVault.CreationDate', props);
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
          BackupVaultName: this.input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupVault.CreatorRequestId', props);
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
          BackupVaultName: this.input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBackupVault.NumberOfRecoveryPoints', props);
    return resource.getResponseField('NumberOfRecoveryPoints') as unknown as number;
  }

}

export class BackupDescribeCopyJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupDescribeCopyJobInput) {
    super(scope, id);
  }

  public get copyJob(): BackupDescribeCopyJobCopyJob {
    return new BackupDescribeCopyJobCopyJob(this, 'CopyJob', this.__resources, this.input);
  }

}

export class BackupDescribeCopyJobCopyJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupDescribeCopyJobInput) {
    super(scope, id);
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
          CopyJobId: this.input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCopyJob.CopyJob.AccountId', props);
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
          CopyJobId: this.input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCopyJob.CopyJob.CopyJobId', props);
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
          CopyJobId: this.input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCopyJob.CopyJob.SourceBackupVaultArn', props);
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
          CopyJobId: this.input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCopyJob.CopyJob.SourceRecoveryPointArn', props);
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
          CopyJobId: this.input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCopyJob.CopyJob.DestinationBackupVaultArn', props);
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
          CopyJobId: this.input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCopyJob.CopyJob.DestinationRecoveryPointArn', props);
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
          CopyJobId: this.input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCopyJob.CopyJob.ResourceArn', props);
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
          CopyJobId: this.input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCopyJob.CopyJob.CreationDate', props);
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
          CopyJobId: this.input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCopyJob.CopyJob.CompletionDate', props);
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
          CopyJobId: this.input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCopyJob.CopyJob.State', props);
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
          CopyJobId: this.input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCopyJob.CopyJob.StatusMessage', props);
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
          CopyJobId: this.input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCopyJob.CopyJob.BackupSizeInBytes', props);
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
          CopyJobId: this.input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCopyJob.CopyJob.IamRoleArn', props);
    return resource.getResponseField('CopyJob.IamRoleArn') as unknown as string;
  }

  public get createdBy(): BackupDescribeCopyJobCopyJobCreatedBy {
    return new BackupDescribeCopyJobCopyJobCreatedBy(this, 'CreatedBy', this.__resources, this.input);
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
          CopyJobId: this.input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCopyJob.CopyJob.ResourceType', props);
    return resource.getResponseField('CopyJob.ResourceType') as unknown as string;
  }

}

export class BackupDescribeCopyJobCopyJobCreatedBy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupDescribeCopyJobInput) {
    super(scope, id);
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
          CopyJobId: this.input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCopyJob.CopyJob.CreatedBy.BackupPlanId', props);
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
          CopyJobId: this.input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCopyJob.CopyJob.CreatedBy.BackupPlanArn', props);
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
          CopyJobId: this.input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCopyJob.CopyJob.CreatedBy.BackupPlanVersion', props);
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
          CopyJobId: this.input.copyJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCopyJob.CopyJob.CreatedBy.BackupRuleId', props);
    return resource.getResponseField('CopyJob.CreatedBy.BackupRuleId') as unknown as string;
  }

}

export class BackupDescribeGlobalSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeGlobalSettings.GlobalSettings', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeGlobalSettings.LastUpdateTime', props);
    return resource.getResponseField('LastUpdateTime') as unknown as string;
  }

}

export class BackupDescribeProtectedResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupDescribeProtectedResourceInput) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProtectedResource.ResourceArn', props);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProtectedResource.ResourceType', props);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProtectedResource.LastBackupTime', props);
    return resource.getResponseField('LastBackupTime') as unknown as string;
  }

}

export class BackupDescribeRecoveryPoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupDescribeRecoveryPointInput) {
    super(scope, id);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.RecoveryPointArn', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.BackupVaultName', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.BackupVaultArn', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.SourceBackupVaultArn', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.ResourceArn', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.ResourceType', props);
    return resource.getResponseField('ResourceType') as unknown as string;
  }

  public get createdBy(): BackupDescribeRecoveryPointCreatedBy {
    return new BackupDescribeRecoveryPointCreatedBy(this, 'CreatedBy', this.__resources, this.input);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.IamRoleArn', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.Status', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.CreationDate', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.CompletionDate', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.BackupSizeInBytes', props);
    return resource.getResponseField('BackupSizeInBytes') as unknown as number;
  }

  public get calculatedLifecycle(): BackupDescribeRecoveryPointCalculatedLifecycle {
    return new BackupDescribeRecoveryPointCalculatedLifecycle(this, 'CalculatedLifecycle', this.__resources, this.input);
  }

  public get lifecycle(): BackupDescribeRecoveryPointLifecycle {
    return new BackupDescribeRecoveryPointLifecycle(this, 'Lifecycle', this.__resources, this.input);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.EncryptionKeyArn', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.IsEncrypted', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.StorageClass', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.LastRestoreTime', props);
    return resource.getResponseField('LastRestoreTime') as unknown as string;
  }

}

export class BackupDescribeRecoveryPointCreatedBy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupDescribeRecoveryPointInput) {
    super(scope, id);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.CreatedBy.BackupPlanId', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.CreatedBy.BackupPlanArn', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.CreatedBy.BackupPlanVersion', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.CreatedBy.BackupRuleId', props);
    return resource.getResponseField('CreatedBy.BackupRuleId') as unknown as string;
  }

}

export class BackupDescribeRecoveryPointCalculatedLifecycle extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupDescribeRecoveryPointInput) {
    super(scope, id);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.CalculatedLifecycle.MoveToColdStorageAt', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.CalculatedLifecycle.DeleteAt', props);
    return resource.getResponseField('CalculatedLifecycle.DeleteAt') as unknown as string;
  }

}

export class BackupDescribeRecoveryPointLifecycle extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupDescribeRecoveryPointInput) {
    super(scope, id);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.Lifecycle.MoveToColdStorageAfterDays', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecoveryPoint.Lifecycle.DeleteAfterDays', props);
    return resource.getResponseField('Lifecycle.DeleteAfterDays') as unknown as number;
  }

}

export class BackupDescribeRegionSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeRegionSettings.ResourceTypeOptInPreference', props);
    return resource.getResponseField('ResourceTypeOptInPreference') as unknown as Record<string, boolean>;
  }

}

export class BackupDescribeRestoreJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupDescribeRestoreJobInput) {
    super(scope, id);
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
          RestoreJobId: this.input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRestoreJob.AccountId', props);
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
          RestoreJobId: this.input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRestoreJob.RestoreJobId', props);
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
          RestoreJobId: this.input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRestoreJob.RecoveryPointArn', props);
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
          RestoreJobId: this.input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRestoreJob.CreationDate', props);
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
          RestoreJobId: this.input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRestoreJob.CompletionDate', props);
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
          RestoreJobId: this.input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRestoreJob.Status', props);
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
          RestoreJobId: this.input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRestoreJob.StatusMessage', props);
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
          RestoreJobId: this.input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRestoreJob.PercentDone', props);
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
          RestoreJobId: this.input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRestoreJob.BackupSizeInBytes', props);
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
          RestoreJobId: this.input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRestoreJob.IamRoleArn', props);
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
          RestoreJobId: this.input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRestoreJob.ExpectedCompletionTimeMinutes', props);
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
          RestoreJobId: this.input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRestoreJob.CreatedResourceArn', props);
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
          RestoreJobId: this.input.restoreJobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRestoreJob.ResourceType', props);
    return resource.getResponseField('ResourceType') as unknown as string;
  }

}

export class BackupExportBackupPlanTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupExportBackupPlanTemplateInput) {
    super(scope, id);
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
          BackupPlanId: this.input.backupPlanId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ExportBackupPlanTemplate.BackupPlanTemplateJson', props);
    return resource.getResponseField('BackupPlanTemplateJson') as unknown as string;
  }

}

export class BackupFetchBackupPlan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupGetBackupPlanInput) {
    super(scope, id);
  }

  public get backupPlan(): BackupFetchBackupPlanBackupPlan {
    return new BackupFetchBackupPlanBackupPlan(this, 'BackupPlan', this.__resources, this.input);
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
          BackupPlanId: this.input.backupPlanId,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupPlan.BackupPlanId', props);
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
          BackupPlanId: this.input.backupPlanId,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupPlan.BackupPlanArn', props);
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
          BackupPlanId: this.input.backupPlanId,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupPlan.VersionId', props);
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
          BackupPlanId: this.input.backupPlanId,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupPlan.CreatorRequestId', props);
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
          BackupPlanId: this.input.backupPlanId,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupPlan.CreationDate', props);
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
          BackupPlanId: this.input.backupPlanId,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupPlan.DeletionDate', props);
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
          BackupPlanId: this.input.backupPlanId,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupPlan.LastExecutionDate', props);
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
          BackupPlanId: this.input.backupPlanId,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupPlan.AdvancedBackupSettings', props);
    return resource.getResponseField('AdvancedBackupSettings') as unknown as shapes.BackupAdvancedBackupSetting[];
  }

}

export class BackupFetchBackupPlanBackupPlan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupGetBackupPlanInput) {
    super(scope, id);
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
          BackupPlanId: this.input.backupPlanId,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupPlan.BackupPlan.BackupPlanName', props);
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
          BackupPlanId: this.input.backupPlanId,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupPlan.BackupPlan.Rules', props);
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
          BackupPlanId: this.input.backupPlanId,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupPlan.BackupPlan.AdvancedBackupSettings', props);
    return resource.getResponseField('BackupPlan.AdvancedBackupSettings') as unknown as shapes.BackupAdvancedBackupSetting[];
  }

}

export class BackupFetchBackupPlanFromJson extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupGetBackupPlanFromJsonInput) {
    super(scope, id);
  }

  public get backupPlan(): BackupFetchBackupPlanFromJsonBackupPlan {
    return new BackupFetchBackupPlanFromJsonBackupPlan(this, 'BackupPlan', this.__resources, this.input);
  }

}

export class BackupFetchBackupPlanFromJsonBackupPlan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupGetBackupPlanFromJsonInput) {
    super(scope, id);
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
          BackupPlanTemplateJson: this.input.backupPlanTemplateJson,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupPlanFromJSON.BackupPlan.BackupPlanName', props);
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
          BackupPlanTemplateJson: this.input.backupPlanTemplateJson,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupPlanFromJSON.BackupPlan.Rules', props);
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
          BackupPlanTemplateJson: this.input.backupPlanTemplateJson,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupPlanFromJSON.BackupPlan.AdvancedBackupSettings', props);
    return resource.getResponseField('BackupPlan.AdvancedBackupSettings') as unknown as shapes.BackupAdvancedBackupSetting[];
  }

}

export class BackupFetchBackupPlanFromTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupGetBackupPlanFromTemplateInput) {
    super(scope, id);
  }

  public get backupPlanDocument(): BackupFetchBackupPlanFromTemplateBackupPlanDocument {
    return new BackupFetchBackupPlanFromTemplateBackupPlanDocument(this, 'BackupPlanDocument', this.__resources, this.input);
  }

}

export class BackupFetchBackupPlanFromTemplateBackupPlanDocument extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupGetBackupPlanFromTemplateInput) {
    super(scope, id);
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
          BackupPlanTemplateId: this.input.backupPlanTemplateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupPlanFromTemplate.BackupPlanDocument.BackupPlanName', props);
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
          BackupPlanTemplateId: this.input.backupPlanTemplateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupPlanFromTemplate.BackupPlanDocument.Rules', props);
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
          BackupPlanTemplateId: this.input.backupPlanTemplateId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupPlanFromTemplate.BackupPlanDocument.AdvancedBackupSettings', props);
    return resource.getResponseField('BackupPlanDocument.AdvancedBackupSettings') as unknown as shapes.BackupAdvancedBackupSetting[];
  }

}

export class BackupFetchBackupSelection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupGetBackupSelectionInput) {
    super(scope, id);
  }

  public get backupSelection(): BackupFetchBackupSelectionBackupSelection {
    return new BackupFetchBackupSelectionBackupSelection(this, 'BackupSelection', this.__resources, this.input);
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
          BackupPlanId: this.input.backupPlanId,
          SelectionId: this.input.selectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupSelection.SelectionId', props);
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
          BackupPlanId: this.input.backupPlanId,
          SelectionId: this.input.selectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupSelection.BackupPlanId', props);
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
          BackupPlanId: this.input.backupPlanId,
          SelectionId: this.input.selectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupSelection.CreationDate', props);
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
          BackupPlanId: this.input.backupPlanId,
          SelectionId: this.input.selectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupSelection.CreatorRequestId', props);
    return resource.getResponseField('CreatorRequestId') as unknown as string;
  }

}

export class BackupFetchBackupSelectionBackupSelection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupGetBackupSelectionInput) {
    super(scope, id);
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
          BackupPlanId: this.input.backupPlanId,
          SelectionId: this.input.selectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupSelection.BackupSelection.SelectionName', props);
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
          BackupPlanId: this.input.backupPlanId,
          SelectionId: this.input.selectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupSelection.BackupSelection.IamRoleArn', props);
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
          BackupPlanId: this.input.backupPlanId,
          SelectionId: this.input.selectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupSelection.BackupSelection.Resources', props);
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
          BackupPlanId: this.input.backupPlanId,
          SelectionId: this.input.selectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupSelection.BackupSelection.ListOfTags', props);
    return resource.getResponseField('BackupSelection.ListOfTags') as unknown as shapes.BackupCondition[];
  }

}

export class BackupFetchBackupVaultAccessPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupGetBackupVaultAccessPolicyInput) {
    super(scope, id);
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
          BackupVaultName: this.input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupVaultAccessPolicy.BackupVaultName', props);
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
          BackupVaultName: this.input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupVaultAccessPolicy.BackupVaultArn', props);
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
          BackupVaultName: this.input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupVaultAccessPolicy.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

}

export class BackupFetchBackupVaultNotifications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupGetBackupVaultNotificationsInput) {
    super(scope, id);
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
          BackupVaultName: this.input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupVaultNotifications.BackupVaultName', props);
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
          BackupVaultName: this.input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupVaultNotifications.BackupVaultArn', props);
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
          BackupVaultName: this.input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupVaultNotifications.SNSTopicArn', props);
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
          BackupVaultName: this.input.backupVaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBackupVaultNotifications.BackupVaultEvents', props);
    return resource.getResponseField('BackupVaultEvents') as unknown as string[];
  }

}

export class BackupFetchRecoveryPointRestoreMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupGetRecoveryPointRestoreMetadataInput) {
    super(scope, id);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRecoveryPointRestoreMetadata.BackupVaultArn', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRecoveryPointRestoreMetadata.RecoveryPointArn', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRecoveryPointRestoreMetadata.RestoreMetadata', props);
    return resource.getResponseField('RestoreMetadata') as unknown as Record<string, string>;
  }

}

export class BackupFetchSupportedResourceTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'GetSupportedResourceTypes.ResourceTypes', props);
    return resource.getResponseField('ResourceTypes') as unknown as string[];
  }

}

export class BackupListBackupJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupListBackupJobsInput) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ByResourceArn: this.input.byResourceArn,
          ByState: this.input.byState,
          ByBackupVaultName: this.input.byBackupVaultName,
          ByCreatedBefore: this.input.byCreatedBefore,
          ByCreatedAfter: this.input.byCreatedAfter,
          ByResourceType: this.input.byResourceType,
          ByAccountId: this.input.byAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBackupJobs.BackupJobs', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ByResourceArn: this.input.byResourceArn,
          ByState: this.input.byState,
          ByBackupVaultName: this.input.byBackupVaultName,
          ByCreatedBefore: this.input.byCreatedBefore,
          ByCreatedAfter: this.input.byCreatedAfter,
          ByResourceType: this.input.byResourceType,
          ByAccountId: this.input.byAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBackupJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BackupListBackupPlanTemplates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupListBackupPlanTemplatesInput) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBackupPlanTemplates.NextToken', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBackupPlanTemplates.BackupPlanTemplatesList', props);
    return resource.getResponseField('BackupPlanTemplatesList') as unknown as shapes.BackupBackupPlanTemplatesListMember[];
  }

}

export class BackupListBackupPlanVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupListBackupPlanVersionsInput) {
    super(scope, id);
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
          BackupPlanId: this.input.backupPlanId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBackupPlanVersions.NextToken', props);
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
          BackupPlanId: this.input.backupPlanId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBackupPlanVersions.BackupPlanVersionsList', props);
    return resource.getResponseField('BackupPlanVersionsList') as unknown as shapes.BackupBackupPlansListMember[];
  }

}

export class BackupListBackupPlans extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupListBackupPlansInput) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          IncludeDeleted: this.input.includeDeleted,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBackupPlans.NextToken', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          IncludeDeleted: this.input.includeDeleted,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBackupPlans.BackupPlansList', props);
    return resource.getResponseField('BackupPlansList') as unknown as shapes.BackupBackupPlansListMember[];
  }

}

export class BackupListBackupSelections extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupListBackupSelectionsInput) {
    super(scope, id);
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
          BackupPlanId: this.input.backupPlanId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBackupSelections.NextToken', props);
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
          BackupPlanId: this.input.backupPlanId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBackupSelections.BackupSelectionsList', props);
    return resource.getResponseField('BackupSelectionsList') as unknown as shapes.BackupBackupSelectionsListMember[];
  }

}

export class BackupListBackupVaults extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupListBackupVaultsInput) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBackupVaults.BackupVaultList', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBackupVaults.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BackupListCopyJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupListCopyJobsInput) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ByResourceArn: this.input.byResourceArn,
          ByState: this.input.byState,
          ByCreatedBefore: this.input.byCreatedBefore,
          ByCreatedAfter: this.input.byCreatedAfter,
          ByResourceType: this.input.byResourceType,
          ByDestinationVaultArn: this.input.byDestinationVaultArn,
          ByAccountId: this.input.byAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCopyJobs.CopyJobs', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ByResourceArn: this.input.byResourceArn,
          ByState: this.input.byState,
          ByCreatedBefore: this.input.byCreatedBefore,
          ByCreatedAfter: this.input.byCreatedAfter,
          ByResourceType: this.input.byResourceType,
          ByDestinationVaultArn: this.input.byDestinationVaultArn,
          ByAccountId: this.input.byAccountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCopyJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BackupListProtectedResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupListProtectedResourcesInput) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProtectedResources.Results', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProtectedResources.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BackupListRecoveryPointsByBackupVault extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupListRecoveryPointsByBackupVaultInput) {
    super(scope, id);
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
          BackupVaultName: this.input.backupVaultName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ByResourceArn: this.input.byResourceArn,
          ByResourceType: this.input.byResourceType,
          ByBackupPlanId: this.input.byBackupPlanId,
          ByCreatedBefore: this.input.byCreatedBefore,
          ByCreatedAfter: this.input.byCreatedAfter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecoveryPointsByBackupVault.NextToken', props);
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
          BackupVaultName: this.input.backupVaultName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ByResourceArn: this.input.byResourceArn,
          ByResourceType: this.input.byResourceType,
          ByBackupPlanId: this.input.byBackupPlanId,
          ByCreatedBefore: this.input.byCreatedBefore,
          ByCreatedAfter: this.input.byCreatedAfter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecoveryPointsByBackupVault.RecoveryPoints', props);
    return resource.getResponseField('RecoveryPoints') as unknown as shapes.BackupRecoveryPointByBackupVault[];
  }

}

export class BackupListRecoveryPointsByResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupListRecoveryPointsByResourceInput) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecoveryPointsByResource.NextToken', props);
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
          ResourceArn: this.input.resourceArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecoveryPointsByResource.RecoveryPoints', props);
    return resource.getResponseField('RecoveryPoints') as unknown as shapes.BackupRecoveryPointByResource[];
  }

}

export class BackupListRestoreJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupListRestoreJobsInput) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ByAccountId: this.input.byAccountId,
          ByCreatedBefore: this.input.byCreatedBefore,
          ByCreatedAfter: this.input.byCreatedAfter,
          ByStatus: this.input.byStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRestoreJobs.RestoreJobs', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          ByAccountId: this.input.byAccountId,
          ByCreatedBefore: this.input.byCreatedBefore,
          ByCreatedAfter: this.input.byCreatedAfter,
          ByStatus: this.input.byStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRestoreJobs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class BackupListTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupListTagsInput) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTags.NextToken', props);
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
          ResourceArn: this.input.resourceArn,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class BackupStartBackupJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupStartBackupJobInput) {
    super(scope, id);
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
          BackupVaultName: this.input.backupVaultName,
          ResourceArn: this.input.resourceArn,
          IamRoleArn: this.input.iamRoleArn,
          IdempotencyToken: this.input.idempotencyToken,
          StartWindowMinutes: this.input.startWindowMinutes,
          CompleteWindowMinutes: this.input.completeWindowMinutes,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.input.lifecycle?.deleteAfterDays,
          },
          RecoveryPointTags: this.input.recoveryPointTags,
          BackupOptions: this.input.backupOptions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartBackupJob.BackupJobId', props);
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
          BackupVaultName: this.input.backupVaultName,
          ResourceArn: this.input.resourceArn,
          IamRoleArn: this.input.iamRoleArn,
          IdempotencyToken: this.input.idempotencyToken,
          StartWindowMinutes: this.input.startWindowMinutes,
          CompleteWindowMinutes: this.input.completeWindowMinutes,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.input.lifecycle?.deleteAfterDays,
          },
          RecoveryPointTags: this.input.recoveryPointTags,
          BackupOptions: this.input.backupOptions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartBackupJob.RecoveryPointArn', props);
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
          BackupVaultName: this.input.backupVaultName,
          ResourceArn: this.input.resourceArn,
          IamRoleArn: this.input.iamRoleArn,
          IdempotencyToken: this.input.idempotencyToken,
          StartWindowMinutes: this.input.startWindowMinutes,
          CompleteWindowMinutes: this.input.completeWindowMinutes,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.input.lifecycle?.deleteAfterDays,
          },
          RecoveryPointTags: this.input.recoveryPointTags,
          BackupOptions: this.input.backupOptions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartBackupJob.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

}

export class BackupStartCopyJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupStartCopyJobInput) {
    super(scope, id);
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
          RecoveryPointArn: this.input.recoveryPointArn,
          SourceBackupVaultName: this.input.sourceBackupVaultName,
          DestinationBackupVaultArn: this.input.destinationBackupVaultArn,
          IamRoleArn: this.input.iamRoleArn,
          IdempotencyToken: this.input.idempotencyToken,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.input.lifecycle?.deleteAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartCopyJob.CopyJobId', props);
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
          RecoveryPointArn: this.input.recoveryPointArn,
          SourceBackupVaultName: this.input.sourceBackupVaultName,
          DestinationBackupVaultArn: this.input.destinationBackupVaultArn,
          IamRoleArn: this.input.iamRoleArn,
          IdempotencyToken: this.input.idempotencyToken,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.input.lifecycle?.deleteAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartCopyJob.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

}

export class BackupStartRestoreJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupStartRestoreJobInput) {
    super(scope, id);
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
          RecoveryPointArn: this.input.recoveryPointArn,
          Metadata: this.input.metadata,
          IamRoleArn: this.input.iamRoleArn,
          IdempotencyToken: this.input.idempotencyToken,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartRestoreJob.RestoreJobId', props);
    return resource.getResponseField('RestoreJobId') as unknown as string;
  }

}

export class BackupUpdateBackupPlan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupUpdateBackupPlanInput) {
    super(scope, id);
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
          BackupPlanId: this.input.backupPlanId,
          BackupPlan: {
            BackupPlanName: this.input.backupPlan.backupPlanName,
            Rules: this.input.backupPlan.rules,
            AdvancedBackupSettings: this.input.backupPlan.advancedBackupSettings,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBackupPlan.BackupPlanId', props);
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
          BackupPlanId: this.input.backupPlanId,
          BackupPlan: {
            BackupPlanName: this.input.backupPlan.backupPlanName,
            Rules: this.input.backupPlan.rules,
            AdvancedBackupSettings: this.input.backupPlan.advancedBackupSettings,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBackupPlan.BackupPlanArn', props);
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
          BackupPlanId: this.input.backupPlanId,
          BackupPlan: {
            BackupPlanName: this.input.backupPlan.backupPlanName,
            Rules: this.input.backupPlan.rules,
            AdvancedBackupSettings: this.input.backupPlan.advancedBackupSettings,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBackupPlan.CreationDate', props);
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
          BackupPlanId: this.input.backupPlanId,
          BackupPlan: {
            BackupPlanName: this.input.backupPlan.backupPlanName,
            Rules: this.input.backupPlan.rules,
            AdvancedBackupSettings: this.input.backupPlan.advancedBackupSettings,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBackupPlan.VersionId', props);
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
          BackupPlanId: this.input.backupPlanId,
          BackupPlan: {
            BackupPlanName: this.input.backupPlan.backupPlanName,
            Rules: this.input.backupPlan.rules,
            AdvancedBackupSettings: this.input.backupPlan.advancedBackupSettings,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBackupPlan.AdvancedBackupSettings', props);
    return resource.getResponseField('AdvancedBackupSettings') as unknown as shapes.BackupAdvancedBackupSetting[];
  }

}

export class BackupUpdateRecoveryPointLifecycle extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupUpdateRecoveryPointLifecycleInput) {
    super(scope, id);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.input.lifecycle?.deleteAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRecoveryPointLifecycle.BackupVaultArn', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.input.lifecycle?.deleteAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRecoveryPointLifecycle.RecoveryPointArn', props);
    return resource.getResponseField('RecoveryPointArn') as unknown as string;
  }

  public get lifecycle(): BackupUpdateRecoveryPointLifecycleLifecycle {
    return new BackupUpdateRecoveryPointLifecycleLifecycle(this, 'Lifecycle', this.__resources, this.input);
  }

  public get calculatedLifecycle(): BackupUpdateRecoveryPointLifecycleCalculatedLifecycle {
    return new BackupUpdateRecoveryPointLifecycleCalculatedLifecycle(this, 'CalculatedLifecycle', this.__resources, this.input);
  }

}

export class BackupUpdateRecoveryPointLifecycleLifecycle extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupUpdateRecoveryPointLifecycleInput) {
    super(scope, id);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.input.lifecycle?.deleteAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRecoveryPointLifecycle.Lifecycle.MoveToColdStorageAfterDays', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.input.lifecycle?.deleteAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRecoveryPointLifecycle.Lifecycle.DeleteAfterDays', props);
    return resource.getResponseField('Lifecycle.DeleteAfterDays') as unknown as number;
  }

}

export class BackupUpdateRecoveryPointLifecycleCalculatedLifecycle extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BackupUpdateRecoveryPointLifecycleInput) {
    super(scope, id);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.input.lifecycle?.deleteAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRecoveryPointLifecycle.CalculatedLifecycle.MoveToColdStorageAt', props);
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
          BackupVaultName: this.input.backupVaultName,
          RecoveryPointArn: this.input.recoveryPointArn,
          Lifecycle: {
            MoveToColdStorageAfterDays: this.input.lifecycle?.moveToColdStorageAfterDays,
            DeleteAfterDays: this.input.lifecycle?.deleteAfterDays,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRecoveryPointLifecycle.CalculatedLifecycle.DeleteAt', props);
    return resource.getResponseField('CalculatedLifecycle.DeleteAt') as unknown as string;
  }

}

