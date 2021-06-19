import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class GlacierClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public abortMultipartUpload(input: shapes.GlacierAbortMultipartUploadInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'abortMultipartUpload',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.AbortMultipartUpload'),
        parameters: {
          accountId: input.accountId,
          vaultName: input.vaultName,
          uploadId: input.uploadId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AbortMultipartUpload', props);
  }

  public abortVaultLock(input: shapes.GlacierAbortVaultLockInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'abortVaultLock',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.AbortVaultLock'),
        parameters: {
          accountId: input.accountId,
          vaultName: input.vaultName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AbortVaultLock', props);
  }

  public addTagsToVault(input: shapes.GlacierAddTagsToVaultInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addTagsToVault',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.AddTagsToVault'),
        parameters: {
          accountId: input.accountId,
          vaultName: input.vaultName,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddTagsToVault', props);
  }

  public completeMultipartUpload(input: shapes.GlacierCompleteMultipartUploadInput): GlacierResponsesCompleteMultipartUpload {
    return new GlacierResponsesCompleteMultipartUpload(this, this.__resources, input);
  }

  public completeVaultLock(input: shapes.GlacierCompleteVaultLockInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeVaultLock',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.CompleteVaultLock'),
        parameters: {
          accountId: input.accountId,
          vaultName: input.vaultName,
          lockId: input.lockId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CompleteVaultLock', props);
  }

  public createVault(input: shapes.GlacierCreateVaultInput): GlacierResponsesCreateVault {
    return new GlacierResponsesCreateVault(this, this.__resources, input);
  }

  public deleteArchive(input: shapes.GlacierDeleteArchiveInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteArchive',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DeleteArchive'),
        parameters: {
          accountId: input.accountId,
          vaultName: input.vaultName,
          archiveId: input.archiveId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteArchive', props);
  }

  public deleteVault(input: shapes.GlacierDeleteVaultInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVault',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DeleteVault'),
        parameters: {
          accountId: input.accountId,
          vaultName: input.vaultName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteVault', props);
  }

  public deleteVaultAccessPolicy(input: shapes.GlacierDeleteVaultAccessPolicyInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVaultAccessPolicy',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DeleteVaultAccessPolicy'),
        parameters: {
          accountId: input.accountId,
          vaultName: input.vaultName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteVaultAccessPolicy', props);
  }

  public deleteVaultNotifications(input: shapes.GlacierDeleteVaultNotificationsInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVaultNotifications',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DeleteVaultNotifications'),
        parameters: {
          accountId: input.accountId,
          vaultName: input.vaultName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteVaultNotifications', props);
  }

  public describeJob(input: shapes.GlacierDescribeJobInput): GlacierResponsesDescribeJob {
    return new GlacierResponsesDescribeJob(this, this.__resources, input);
  }

  public describeVault(input: shapes.GlacierDescribeVaultInput): GlacierResponsesDescribeVault {
    return new GlacierResponsesDescribeVault(this, this.__resources, input);
  }

  public fetchDataRetrievalPolicy(input: shapes.GlacierGetDataRetrievalPolicyInput): GlacierResponsesFetchDataRetrievalPolicy {
    return new GlacierResponsesFetchDataRetrievalPolicy(this, this.__resources, input);
  }

  public fetchJobOutput(input: shapes.GlacierGetJobOutputInput): GlacierResponsesFetchJobOutput {
    return new GlacierResponsesFetchJobOutput(this, this.__resources, input);
  }

  public fetchVaultAccessPolicy(input: shapes.GlacierGetVaultAccessPolicyInput): GlacierResponsesFetchVaultAccessPolicy {
    return new GlacierResponsesFetchVaultAccessPolicy(this, this.__resources, input);
  }

  public fetchVaultLock(input: shapes.GlacierGetVaultLockInput): GlacierResponsesFetchVaultLock {
    return new GlacierResponsesFetchVaultLock(this, this.__resources, input);
  }

  public fetchVaultNotifications(input: shapes.GlacierGetVaultNotificationsInput): GlacierResponsesFetchVaultNotifications {
    return new GlacierResponsesFetchVaultNotifications(this, this.__resources, input);
  }

  public initiateJob(input: shapes.GlacierInitiateJobInput): GlacierResponsesInitiateJob {
    return new GlacierResponsesInitiateJob(this, this.__resources, input);
  }

  public initiateMultipartUpload(input: shapes.GlacierInitiateMultipartUploadInput): GlacierResponsesInitiateMultipartUpload {
    return new GlacierResponsesInitiateMultipartUpload(this, this.__resources, input);
  }

  public initiateVaultLock(input: shapes.GlacierInitiateVaultLockInput): GlacierResponsesInitiateVaultLock {
    return new GlacierResponsesInitiateVaultLock(this, this.__resources, input);
  }

  public listJobs(input: shapes.GlacierListJobsInput): GlacierResponsesListJobs {
    return new GlacierResponsesListJobs(this, this.__resources, input);
  }

  public listMultipartUploads(input: shapes.GlacierListMultipartUploadsInput): GlacierResponsesListMultipartUploads {
    return new GlacierResponsesListMultipartUploads(this, this.__resources, input);
  }

  public listParts(input: shapes.GlacierListPartsInput): GlacierResponsesListParts {
    return new GlacierResponsesListParts(this, this.__resources, input);
  }

  public listProvisionedCapacity(input: shapes.GlacierListProvisionedCapacityInput): GlacierResponsesListProvisionedCapacity {
    return new GlacierResponsesListProvisionedCapacity(this, this.__resources, input);
  }

  public listTagsForVault(input: shapes.GlacierListTagsForVaultInput): GlacierResponsesListTagsForVault {
    return new GlacierResponsesListTagsForVault(this, this.__resources, input);
  }

  public listVaults(input: shapes.GlacierListVaultsInput): GlacierResponsesListVaults {
    return new GlacierResponsesListVaults(this, this.__resources, input);
  }

  public purchaseProvisionedCapacity(input: shapes.GlacierPurchaseProvisionedCapacityInput): GlacierResponsesPurchaseProvisionedCapacity {
    return new GlacierResponsesPurchaseProvisionedCapacity(this, this.__resources, input);
  }

  public removeTagsFromVault(input: shapes.GlacierRemoveTagsFromVaultInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeTagsFromVault',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.RemoveTagsFromVault'),
        parameters: {
          accountId: input.accountId,
          vaultName: input.vaultName,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemoveTagsFromVault', props);
  }

  public putDataRetrievalPolicy(input: shapes.GlacierSetDataRetrievalPolicyInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setDataRetrievalPolicy',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.SetDataRetrievalPolicy'),
        parameters: {
          accountId: input.accountId,
          Policy: {
            Rules: input.policy?.rules,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetDataRetrievalPolicy', props);
  }

  public putVaultAccessPolicy(input: shapes.GlacierSetVaultAccessPolicyInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setVaultAccessPolicy',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.SetVaultAccessPolicy'),
        parameters: {
          accountId: input.accountId,
          vaultName: input.vaultName,
          policy: {
            Policy: input.policy?.policy,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetVaultAccessPolicy', props);
  }

  public putVaultNotifications(input: shapes.GlacierSetVaultNotificationsInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setVaultNotifications',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.SetVaultNotifications'),
        parameters: {
          accountId: input.accountId,
          vaultName: input.vaultName,
          vaultNotificationConfig: {
            SNSTopic: input.vaultNotificationConfig?.snsTopic,
            Events: input.vaultNotificationConfig?.events,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetVaultNotifications', props);
  }

  public uploadArchive(input: shapes.GlacierUploadArchiveInput): GlacierResponsesUploadArchive {
    return new GlacierResponsesUploadArchive(this, this.__resources, input);
  }

  public uploadMultipartPart(input: shapes.GlacierUploadMultipartPartInput): GlacierResponsesUploadMultipartPart {
    return new GlacierResponsesUploadMultipartPart(this, this.__resources, input);
  }

}

export class GlacierResponsesCompleteMultipartUpload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierCompleteMultipartUploadInput) {
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMultipartUpload',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.CompleteMultipartUpload.location'),
        outputPath: 'location',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          uploadId: this.__input.uploadId,
          archiveSize: this.__input.archiveSize,
          checksum: this.__input.checksum,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMultipartUpload.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get checksum(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMultipartUpload',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.CompleteMultipartUpload.checksum'),
        outputPath: 'checksum',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          uploadId: this.__input.uploadId,
          archiveSize: this.__input.archiveSize,
          checksum: this.__input.checksum,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMultipartUpload.checksum', props);
    return resource.getResponseField('checksum') as unknown as string;
  }

  public get archiveId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMultipartUpload',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.CompleteMultipartUpload.archiveId'),
        outputPath: 'archiveId',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          uploadId: this.__input.uploadId,
          archiveSize: this.__input.archiveSize,
          checksum: this.__input.checksum,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMultipartUpload.archiveId', props);
    return resource.getResponseField('archiveId') as unknown as string;
  }

}

export class GlacierResponsesCreateVault {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierCreateVaultInput) {
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVault',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.CreateVault.location'),
        outputPath: 'location',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVault.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

}

export class GlacierResponsesDescribeJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierDescribeJobInput) {
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.JobId'),
        outputPath: 'JobId',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobId', props);
    return resource.getResponseField('JobId') as unknown as string;
  }

  public get jobDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.JobDescription'),
        outputPath: 'JobDescription',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobDescription', props);
    return resource.getResponseField('JobDescription') as unknown as string;
  }

  public get action(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.Action'),
        outputPath: 'Action',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Action', props);
    return resource.getResponseField('Action') as unknown as string;
  }

  public get archiveId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.ArchiveId'),
        outputPath: 'ArchiveId',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.ArchiveId', props);
    return resource.getResponseField('ArchiveId') as unknown as string;
  }

  public get vaultArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.VaultARN'),
        outputPath: 'VaultARN',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.VaultARN', props);
    return resource.getResponseField('VaultARN') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

  public get completed(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.Completed'),
        outputPath: 'Completed',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Completed', props);
    return resource.getResponseField('Completed') as unknown as boolean;
  }

  public get statusCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.StatusCode'),
        outputPath: 'StatusCode',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.StatusCode', props);
    return resource.getResponseField('StatusCode') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.StatusMessage'),
        outputPath: 'StatusMessage',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.StatusMessage', props);
    return resource.getResponseField('StatusMessage') as unknown as string;
  }

  public get archiveSizeInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.ArchiveSizeInBytes'),
        outputPath: 'ArchiveSizeInBytes',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.ArchiveSizeInBytes', props);
    return resource.getResponseField('ArchiveSizeInBytes') as unknown as number;
  }

  public get inventorySizeInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.InventorySizeInBytes'),
        outputPath: 'InventorySizeInBytes',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.InventorySizeInBytes', props);
    return resource.getResponseField('InventorySizeInBytes') as unknown as number;
  }

  public get snsTopic(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.SNSTopic'),
        outputPath: 'SNSTopic',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.SNSTopic', props);
    return resource.getResponseField('SNSTopic') as unknown as string;
  }

  public get completionDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.CompletionDate'),
        outputPath: 'CompletionDate',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.CompletionDate', props);
    return resource.getResponseField('CompletionDate') as unknown as string;
  }

  public get sha256TreeHash(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.SHA256TreeHash'),
        outputPath: 'SHA256TreeHash',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.SHA256TreeHash', props);
    return resource.getResponseField('SHA256TreeHash') as unknown as string;
  }

  public get archiveSha256TreeHash(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.ArchiveSHA256TreeHash'),
        outputPath: 'ArchiveSHA256TreeHash',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.ArchiveSHA256TreeHash', props);
    return resource.getResponseField('ArchiveSHA256TreeHash') as unknown as string;
  }

  public get retrievalByteRange(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.RetrievalByteRange'),
        outputPath: 'RetrievalByteRange',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.RetrievalByteRange', props);
    return resource.getResponseField('RetrievalByteRange') as unknown as string;
  }

  public get tier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.Tier'),
        outputPath: 'Tier',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.Tier', props);
    return resource.getResponseField('Tier') as unknown as string;
  }

  public get inventoryRetrievalParameters(): GlacierResponsesDescribeJobInventoryRetrievalParameters {
    return new GlacierResponsesDescribeJobInventoryRetrievalParameters(this.__scope, this.__resources, this.__input);
  }

  public get jobOutputPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.JobOutputPath'),
        outputPath: 'JobOutputPath',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.JobOutputPath', props);
    return resource.getResponseField('JobOutputPath') as unknown as string;
  }

  public get selectParameters(): GlacierResponsesDescribeJobSelectParameters {
    return new GlacierResponsesDescribeJobSelectParameters(this.__scope, this.__resources, this.__input);
  }

  public get outputLocation(): GlacierResponsesDescribeJobOutputLocation {
    return new GlacierResponsesDescribeJobOutputLocation(this.__scope, this.__resources, this.__input);
  }

}

export class GlacierResponsesDescribeJobInventoryRetrievalParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierDescribeJobInput) {
  }

  public get format(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.InventoryRetrievalParameters.Format'),
        outputPath: 'InventoryRetrievalParameters.Format',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.InventoryRetrievalParameters.Format', props);
    return resource.getResponseField('InventoryRetrievalParameters.Format') as unknown as string;
  }

  public get startDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.InventoryRetrievalParameters.StartDate'),
        outputPath: 'InventoryRetrievalParameters.StartDate',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.InventoryRetrievalParameters.StartDate', props);
    return resource.getResponseField('InventoryRetrievalParameters.StartDate') as unknown as string;
  }

  public get endDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.InventoryRetrievalParameters.EndDate'),
        outputPath: 'InventoryRetrievalParameters.EndDate',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.InventoryRetrievalParameters.EndDate', props);
    return resource.getResponseField('InventoryRetrievalParameters.EndDate') as unknown as string;
  }

  public get limit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.InventoryRetrievalParameters.Limit'),
        outputPath: 'InventoryRetrievalParameters.Limit',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.InventoryRetrievalParameters.Limit', props);
    return resource.getResponseField('InventoryRetrievalParameters.Limit') as unknown as string;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.InventoryRetrievalParameters.Marker'),
        outputPath: 'InventoryRetrievalParameters.Marker',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.InventoryRetrievalParameters.Marker', props);
    return resource.getResponseField('InventoryRetrievalParameters.Marker') as unknown as string;
  }

}

export class GlacierResponsesDescribeJobSelectParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierDescribeJobInput) {
  }

  public get inputSerialization(): GlacierResponsesDescribeJobSelectParametersInputSerialization {
    return new GlacierResponsesDescribeJobSelectParametersInputSerialization(this.__scope, this.__resources, this.__input);
  }

  public get expressionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.SelectParameters.ExpressionType'),
        outputPath: 'SelectParameters.ExpressionType',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.SelectParameters.ExpressionType', props);
    return resource.getResponseField('SelectParameters.ExpressionType') as unknown as string;
  }

  public get expression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.SelectParameters.Expression'),
        outputPath: 'SelectParameters.Expression',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.SelectParameters.Expression', props);
    return resource.getResponseField('SelectParameters.Expression') as unknown as string;
  }

  public get outputSerialization(): GlacierResponsesDescribeJobSelectParametersOutputSerialization {
    return new GlacierResponsesDescribeJobSelectParametersOutputSerialization(this.__scope, this.__resources, this.__input);
  }

}

export class GlacierResponsesDescribeJobSelectParametersInputSerialization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierDescribeJobInput) {
  }

  public get csv(): GlacierResponsesDescribeJobSelectParametersInputSerializationCsv {
    return new GlacierResponsesDescribeJobSelectParametersInputSerializationCsv(this.__scope, this.__resources, this.__input);
  }

}

export class GlacierResponsesDescribeJobSelectParametersInputSerializationCsv {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierDescribeJobInput) {
  }

  public get fileHeaderInfo(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.SelectParameters.InputSerialization.csv.FileHeaderInfo'),
        outputPath: 'SelectParameters.InputSerialization.csv.FileHeaderInfo',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.SelectParameters.InputSerialization.csv.FileHeaderInfo', props);
    return resource.getResponseField('SelectParameters.InputSerialization.csv.FileHeaderInfo') as unknown as string;
  }

  public get comments(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.SelectParameters.InputSerialization.csv.Comments'),
        outputPath: 'SelectParameters.InputSerialization.csv.Comments',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.SelectParameters.InputSerialization.csv.Comments', props);
    return resource.getResponseField('SelectParameters.InputSerialization.csv.Comments') as unknown as string;
  }

  public get quoteEscapeCharacter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.SelectParameters.InputSerialization.csv.QuoteEscapeCharacter'),
        outputPath: 'SelectParameters.InputSerialization.csv.QuoteEscapeCharacter',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.SelectParameters.InputSerialization.csv.QuoteEscapeCharacter', props);
    return resource.getResponseField('SelectParameters.InputSerialization.csv.QuoteEscapeCharacter') as unknown as string;
  }

  public get recordDelimiter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.SelectParameters.InputSerialization.csv.RecordDelimiter'),
        outputPath: 'SelectParameters.InputSerialization.csv.RecordDelimiter',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.SelectParameters.InputSerialization.csv.RecordDelimiter', props);
    return resource.getResponseField('SelectParameters.InputSerialization.csv.RecordDelimiter') as unknown as string;
  }

  public get fieldDelimiter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.SelectParameters.InputSerialization.csv.FieldDelimiter'),
        outputPath: 'SelectParameters.InputSerialization.csv.FieldDelimiter',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.SelectParameters.InputSerialization.csv.FieldDelimiter', props);
    return resource.getResponseField('SelectParameters.InputSerialization.csv.FieldDelimiter') as unknown as string;
  }

  public get quoteCharacter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.SelectParameters.InputSerialization.csv.QuoteCharacter'),
        outputPath: 'SelectParameters.InputSerialization.csv.QuoteCharacter',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.SelectParameters.InputSerialization.csv.QuoteCharacter', props);
    return resource.getResponseField('SelectParameters.InputSerialization.csv.QuoteCharacter') as unknown as string;
  }

}

export class GlacierResponsesDescribeJobSelectParametersOutputSerialization {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierDescribeJobInput) {
  }

  public get csv(): GlacierResponsesDescribeJobSelectParametersOutputSerializationCsv {
    return new GlacierResponsesDescribeJobSelectParametersOutputSerializationCsv(this.__scope, this.__resources, this.__input);
  }

}

export class GlacierResponsesDescribeJobSelectParametersOutputSerializationCsv {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierDescribeJobInput) {
  }

  public get quoteFields(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.SelectParameters.OutputSerialization.csv.QuoteFields'),
        outputPath: 'SelectParameters.OutputSerialization.csv.QuoteFields',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.SelectParameters.OutputSerialization.csv.QuoteFields', props);
    return resource.getResponseField('SelectParameters.OutputSerialization.csv.QuoteFields') as unknown as string;
  }

  public get quoteEscapeCharacter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.SelectParameters.OutputSerialization.csv.QuoteEscapeCharacter'),
        outputPath: 'SelectParameters.OutputSerialization.csv.QuoteEscapeCharacter',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.SelectParameters.OutputSerialization.csv.QuoteEscapeCharacter', props);
    return resource.getResponseField('SelectParameters.OutputSerialization.csv.QuoteEscapeCharacter') as unknown as string;
  }

  public get recordDelimiter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.SelectParameters.OutputSerialization.csv.RecordDelimiter'),
        outputPath: 'SelectParameters.OutputSerialization.csv.RecordDelimiter',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.SelectParameters.OutputSerialization.csv.RecordDelimiter', props);
    return resource.getResponseField('SelectParameters.OutputSerialization.csv.RecordDelimiter') as unknown as string;
  }

  public get fieldDelimiter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.SelectParameters.OutputSerialization.csv.FieldDelimiter'),
        outputPath: 'SelectParameters.OutputSerialization.csv.FieldDelimiter',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.SelectParameters.OutputSerialization.csv.FieldDelimiter', props);
    return resource.getResponseField('SelectParameters.OutputSerialization.csv.FieldDelimiter') as unknown as string;
  }

  public get quoteCharacter(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.SelectParameters.OutputSerialization.csv.QuoteCharacter'),
        outputPath: 'SelectParameters.OutputSerialization.csv.QuoteCharacter',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.SelectParameters.OutputSerialization.csv.QuoteCharacter', props);
    return resource.getResponseField('SelectParameters.OutputSerialization.csv.QuoteCharacter') as unknown as string;
  }

}

export class GlacierResponsesDescribeJobOutputLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierDescribeJobInput) {
  }

  public get s3(): GlacierResponsesDescribeJobOutputLocationS3 {
    return new GlacierResponsesDescribeJobOutputLocationS3(this.__scope, this.__resources, this.__input);
  }

}

export class GlacierResponsesDescribeJobOutputLocationS3 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierDescribeJobInput) {
  }

  public get bucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.OutputLocation.S3.BucketName'),
        outputPath: 'OutputLocation.S3.BucketName',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.OutputLocation.S3.BucketName', props);
    return resource.getResponseField('OutputLocation.S3.BucketName') as unknown as string;
  }

  public get prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.OutputLocation.S3.Prefix'),
        outputPath: 'OutputLocation.S3.Prefix',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.OutputLocation.S3.Prefix', props);
    return resource.getResponseField('OutputLocation.S3.Prefix') as unknown as string;
  }

  public get encryption(): GlacierResponsesDescribeJobOutputLocationS3Encryption {
    return new GlacierResponsesDescribeJobOutputLocationS3Encryption(this.__scope, this.__resources, this.__input);
  }

  public get cannedAcl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.OutputLocation.S3.CannedACL'),
        outputPath: 'OutputLocation.S3.CannedACL',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.OutputLocation.S3.CannedACL', props);
    return resource.getResponseField('OutputLocation.S3.CannedACL') as unknown as string;
  }

  public get accessControlList(): shapes.GlacierGrant[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.OutputLocation.S3.AccessControlList'),
        outputPath: 'OutputLocation.S3.AccessControlList',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.OutputLocation.S3.AccessControlList', props);
    return resource.getResponseField('OutputLocation.S3.AccessControlList') as unknown as shapes.GlacierGrant[];
  }

  public get tagging(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.OutputLocation.S3.Tagging'),
        outputPath: 'OutputLocation.S3.Tagging',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.OutputLocation.S3.Tagging', props);
    return resource.getResponseField('OutputLocation.S3.Tagging') as unknown as Record<string, string>;
  }

  public get userMetadata(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.OutputLocation.S3.UserMetadata'),
        outputPath: 'OutputLocation.S3.UserMetadata',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.OutputLocation.S3.UserMetadata', props);
    return resource.getResponseField('OutputLocation.S3.UserMetadata') as unknown as Record<string, string>;
  }

  public get storageClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.OutputLocation.S3.StorageClass'),
        outputPath: 'OutputLocation.S3.StorageClass',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.OutputLocation.S3.StorageClass', props);
    return resource.getResponseField('OutputLocation.S3.StorageClass') as unknown as string;
  }

}

export class GlacierResponsesDescribeJobOutputLocationS3Encryption {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierDescribeJobInput) {
  }

  public get encryptionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.OutputLocation.S3.Encryption.EncryptionType'),
        outputPath: 'OutputLocation.S3.Encryption.EncryptionType',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.OutputLocation.S3.Encryption.EncryptionType', props);
    return resource.getResponseField('OutputLocation.S3.Encryption.EncryptionType') as unknown as string;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.OutputLocation.S3.Encryption.KMSKeyId'),
        outputPath: 'OutputLocation.S3.Encryption.KMSKeyId',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.OutputLocation.S3.Encryption.KMSKeyId', props);
    return resource.getResponseField('OutputLocation.S3.Encryption.KMSKeyId') as unknown as string;
  }

  public get kmsContext(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeJob.OutputLocation.S3.Encryption.KMSContext'),
        outputPath: 'OutputLocation.S3.Encryption.KMSContext',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJob.OutputLocation.S3.Encryption.KMSContext', props);
    return resource.getResponseField('OutputLocation.S3.Encryption.KMSContext') as unknown as string;
  }

}

export class GlacierResponsesDescribeVault {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierDescribeVaultInput) {
  }

  public get vaultArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVault',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeVault.VaultARN'),
        outputPath: 'VaultARN',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVault.VaultARN', props);
    return resource.getResponseField('VaultARN') as unknown as string;
  }

  public get vaultName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVault',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeVault.VaultName'),
        outputPath: 'VaultName',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVault.VaultName', props);
    return resource.getResponseField('VaultName') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVault',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeVault.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVault.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

  public get lastInventoryDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVault',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeVault.LastInventoryDate'),
        outputPath: 'LastInventoryDate',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVault.LastInventoryDate', props);
    return resource.getResponseField('LastInventoryDate') as unknown as string;
  }

  public get numberOfArchives(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVault',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeVault.NumberOfArchives'),
        outputPath: 'NumberOfArchives',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVault.NumberOfArchives', props);
    return resource.getResponseField('NumberOfArchives') as unknown as number;
  }

  public get sizeInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVault',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.DescribeVault.SizeInBytes'),
        outputPath: 'SizeInBytes',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVault.SizeInBytes', props);
    return resource.getResponseField('SizeInBytes') as unknown as number;
  }

}

export class GlacierResponsesFetchDataRetrievalPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierGetDataRetrievalPolicyInput) {
  }

  public get policy(): GlacierResponsesFetchDataRetrievalPolicyPolicy {
    return new GlacierResponsesFetchDataRetrievalPolicyPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class GlacierResponsesFetchDataRetrievalPolicyPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierGetDataRetrievalPolicyInput) {
  }

  public get rules(): shapes.GlacierDataRetrievalRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataRetrievalPolicy',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.GetDataRetrievalPolicy.Policy.Rules'),
        outputPath: 'Policy.Rules',
        parameters: {
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataRetrievalPolicy.Policy.Rules', props);
    return resource.getResponseField('Policy.Rules') as unknown as shapes.GlacierDataRetrievalRule[];
  }

}

export class GlacierResponsesFetchJobOutput {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierGetJobOutputInput) {
  }

  public get body(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobOutput',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.GetJobOutput.body'),
        outputPath: 'body',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
          range: this.__input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobOutput.body', props);
    return resource.getResponseField('body') as unknown as any;
  }

  public get checksum(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobOutput',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.GetJobOutput.checksum'),
        outputPath: 'checksum',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
          range: this.__input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobOutput.checksum', props);
    return resource.getResponseField('checksum') as unknown as string;
  }

  public get status(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobOutput',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.GetJobOutput.status'),
        outputPath: 'status',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
          range: this.__input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobOutput.status', props);
    return resource.getResponseField('status') as unknown as number;
  }

  public get contentRange(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobOutput',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.GetJobOutput.contentRange'),
        outputPath: 'contentRange',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
          range: this.__input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobOutput.contentRange', props);
    return resource.getResponseField('contentRange') as unknown as string;
  }

  public get acceptRanges(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobOutput',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.GetJobOutput.acceptRanges'),
        outputPath: 'acceptRanges',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
          range: this.__input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobOutput.acceptRanges', props);
    return resource.getResponseField('acceptRanges') as unknown as string;
  }

  public get contentType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobOutput',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.GetJobOutput.contentType'),
        outputPath: 'contentType',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
          range: this.__input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobOutput.contentType', props);
    return resource.getResponseField('contentType') as unknown as string;
  }

  public get archiveDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getJobOutput',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.GetJobOutput.archiveDescription'),
        outputPath: 'archiveDescription',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobId: this.__input.jobId,
          range: this.__input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetJobOutput.archiveDescription', props);
    return resource.getResponseField('archiveDescription') as unknown as string;
  }

}

export class GlacierResponsesFetchVaultAccessPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierGetVaultAccessPolicyInput) {
  }

  public get policy(): GlacierResponsesFetchVaultAccessPolicyPolicy {
    return new GlacierResponsesFetchVaultAccessPolicyPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class GlacierResponsesFetchVaultAccessPolicyPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierGetVaultAccessPolicyInput) {
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVaultAccessPolicy',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.GetVaultAccessPolicy.policy.Policy'),
        outputPath: 'policy.Policy',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVaultAccessPolicy.policy.Policy', props);
    return resource.getResponseField('policy.Policy') as unknown as string;
  }

}

export class GlacierResponsesFetchVaultLock {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierGetVaultLockInput) {
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVaultLock',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.GetVaultLock.Policy'),
        outputPath: 'Policy',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVaultLock.Policy', props);
    return resource.getResponseField('Policy') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVaultLock',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.GetVaultLock.State'),
        outputPath: 'State',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVaultLock.State', props);
    return resource.getResponseField('State') as unknown as string;
  }

  public get expirationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVaultLock',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.GetVaultLock.ExpirationDate'),
        outputPath: 'ExpirationDate',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVaultLock.ExpirationDate', props);
    return resource.getResponseField('ExpirationDate') as unknown as string;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVaultLock',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.GetVaultLock.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVaultLock.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

}

export class GlacierResponsesFetchVaultNotifications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierGetVaultNotificationsInput) {
  }

  public get vaultNotificationConfig(): GlacierResponsesFetchVaultNotificationsVaultNotificationConfig {
    return new GlacierResponsesFetchVaultNotificationsVaultNotificationConfig(this.__scope, this.__resources, this.__input);
  }

}

export class GlacierResponsesFetchVaultNotificationsVaultNotificationConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierGetVaultNotificationsInput) {
  }

  public get snsTopic(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVaultNotifications',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.GetVaultNotifications.vaultNotificationConfig.SNSTopic'),
        outputPath: 'vaultNotificationConfig.SNSTopic',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVaultNotifications.vaultNotificationConfig.SNSTopic', props);
    return resource.getResponseField('vaultNotificationConfig.SNSTopic') as unknown as string;
  }

  public get events(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getVaultNotifications',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.GetVaultNotifications.vaultNotificationConfig.Events'),
        outputPath: 'vaultNotificationConfig.Events',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetVaultNotifications.vaultNotificationConfig.Events', props);
    return resource.getResponseField('vaultNotificationConfig.Events') as unknown as string[];
  }

}

export class GlacierResponsesInitiateJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierInitiateJobInput) {
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.InitiateJob.location'),
        outputPath: 'location',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobParameters: {
            Format: this.__input.jobParameters?.format,
            Type: this.__input.jobParameters?.type,
            ArchiveId: this.__input.jobParameters?.archiveId,
            Description: this.__input.jobParameters?.description,
            SNSTopic: this.__input.jobParameters?.snsTopic,
            RetrievalByteRange: this.__input.jobParameters?.retrievalByteRange,
            Tier: this.__input.jobParameters?.tier,
            InventoryRetrievalParameters: {
              StartDate: this.__input.jobParameters?.inventoryRetrievalParameters?.startDate,
              EndDate: this.__input.jobParameters?.inventoryRetrievalParameters?.endDate,
              Limit: this.__input.jobParameters?.inventoryRetrievalParameters?.limit,
              Marker: this.__input.jobParameters?.inventoryRetrievalParameters?.marker,
            },
            SelectParameters: {
              InputSerialization: {
                csv: {
                  FileHeaderInfo: this.__input.jobParameters?.selectParameters?.inputSerialization?.csv?.fileHeaderInfo,
                  Comments: this.__input.jobParameters?.selectParameters?.inputSerialization?.csv?.comments,
                  QuoteEscapeCharacter: this.__input.jobParameters?.selectParameters?.inputSerialization?.csv?.quoteEscapeCharacter,
                  RecordDelimiter: this.__input.jobParameters?.selectParameters?.inputSerialization?.csv?.recordDelimiter,
                  FieldDelimiter: this.__input.jobParameters?.selectParameters?.inputSerialization?.csv?.fieldDelimiter,
                  QuoteCharacter: this.__input.jobParameters?.selectParameters?.inputSerialization?.csv?.quoteCharacter,
                },
              },
              ExpressionType: this.__input.jobParameters?.selectParameters?.expressionType,
              Expression: this.__input.jobParameters?.selectParameters?.expression,
              OutputSerialization: {
                csv: {
                  QuoteFields: this.__input.jobParameters?.selectParameters?.outputSerialization?.csv?.quoteFields,
                  QuoteEscapeCharacter: this.__input.jobParameters?.selectParameters?.outputSerialization?.csv?.quoteEscapeCharacter,
                  RecordDelimiter: this.__input.jobParameters?.selectParameters?.outputSerialization?.csv?.recordDelimiter,
                  FieldDelimiter: this.__input.jobParameters?.selectParameters?.outputSerialization?.csv?.fieldDelimiter,
                  QuoteCharacter: this.__input.jobParameters?.selectParameters?.outputSerialization?.csv?.quoteCharacter,
                },
              },
            },
            OutputLocation: {
              S3: {
                BucketName: this.__input.jobParameters?.outputLocation?.s3?.bucketName,
                Prefix: this.__input.jobParameters?.outputLocation?.s3?.prefix,
                Encryption: {
                  EncryptionType: this.__input.jobParameters?.outputLocation?.s3?.encryption?.encryptionType,
                  KMSKeyId: this.__input.jobParameters?.outputLocation?.s3?.encryption?.kmsKeyId,
                  KMSContext: this.__input.jobParameters?.outputLocation?.s3?.encryption?.kmsContext,
                },
                CannedACL: this.__input.jobParameters?.outputLocation?.s3?.cannedAcl,
                AccessControlList: this.__input.jobParameters?.outputLocation?.s3?.accessControlList,
                Tagging: this.__input.jobParameters?.outputLocation?.s3?.tagging,
                UserMetadata: this.__input.jobParameters?.outputLocation?.s3?.userMetadata,
                StorageClass: this.__input.jobParameters?.outputLocation?.s3?.storageClass,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateJob.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.InitiateJob.jobId'),
        outputPath: 'jobId',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobParameters: {
            Format: this.__input.jobParameters?.format,
            Type: this.__input.jobParameters?.type,
            ArchiveId: this.__input.jobParameters?.archiveId,
            Description: this.__input.jobParameters?.description,
            SNSTopic: this.__input.jobParameters?.snsTopic,
            RetrievalByteRange: this.__input.jobParameters?.retrievalByteRange,
            Tier: this.__input.jobParameters?.tier,
            InventoryRetrievalParameters: {
              StartDate: this.__input.jobParameters?.inventoryRetrievalParameters?.startDate,
              EndDate: this.__input.jobParameters?.inventoryRetrievalParameters?.endDate,
              Limit: this.__input.jobParameters?.inventoryRetrievalParameters?.limit,
              Marker: this.__input.jobParameters?.inventoryRetrievalParameters?.marker,
            },
            SelectParameters: {
              InputSerialization: {
                csv: {
                  FileHeaderInfo: this.__input.jobParameters?.selectParameters?.inputSerialization?.csv?.fileHeaderInfo,
                  Comments: this.__input.jobParameters?.selectParameters?.inputSerialization?.csv?.comments,
                  QuoteEscapeCharacter: this.__input.jobParameters?.selectParameters?.inputSerialization?.csv?.quoteEscapeCharacter,
                  RecordDelimiter: this.__input.jobParameters?.selectParameters?.inputSerialization?.csv?.recordDelimiter,
                  FieldDelimiter: this.__input.jobParameters?.selectParameters?.inputSerialization?.csv?.fieldDelimiter,
                  QuoteCharacter: this.__input.jobParameters?.selectParameters?.inputSerialization?.csv?.quoteCharacter,
                },
              },
              ExpressionType: this.__input.jobParameters?.selectParameters?.expressionType,
              Expression: this.__input.jobParameters?.selectParameters?.expression,
              OutputSerialization: {
                csv: {
                  QuoteFields: this.__input.jobParameters?.selectParameters?.outputSerialization?.csv?.quoteFields,
                  QuoteEscapeCharacter: this.__input.jobParameters?.selectParameters?.outputSerialization?.csv?.quoteEscapeCharacter,
                  RecordDelimiter: this.__input.jobParameters?.selectParameters?.outputSerialization?.csv?.recordDelimiter,
                  FieldDelimiter: this.__input.jobParameters?.selectParameters?.outputSerialization?.csv?.fieldDelimiter,
                  QuoteCharacter: this.__input.jobParameters?.selectParameters?.outputSerialization?.csv?.quoteCharacter,
                },
              },
            },
            OutputLocation: {
              S3: {
                BucketName: this.__input.jobParameters?.outputLocation?.s3?.bucketName,
                Prefix: this.__input.jobParameters?.outputLocation?.s3?.prefix,
                Encryption: {
                  EncryptionType: this.__input.jobParameters?.outputLocation?.s3?.encryption?.encryptionType,
                  KMSKeyId: this.__input.jobParameters?.outputLocation?.s3?.encryption?.kmsKeyId,
                  KMSContext: this.__input.jobParameters?.outputLocation?.s3?.encryption?.kmsContext,
                },
                CannedACL: this.__input.jobParameters?.outputLocation?.s3?.cannedAcl,
                AccessControlList: this.__input.jobParameters?.outputLocation?.s3?.accessControlList,
                Tagging: this.__input.jobParameters?.outputLocation?.s3?.tagging,
                UserMetadata: this.__input.jobParameters?.outputLocation?.s3?.userMetadata,
                StorageClass: this.__input.jobParameters?.outputLocation?.s3?.storageClass,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateJob.jobId', props);
    return resource.getResponseField('jobId') as unknown as string;
  }

  public get jobOutputPath(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateJob',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.InitiateJob.jobOutputPath'),
        outputPath: 'jobOutputPath',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          jobParameters: {
            Format: this.__input.jobParameters?.format,
            Type: this.__input.jobParameters?.type,
            ArchiveId: this.__input.jobParameters?.archiveId,
            Description: this.__input.jobParameters?.description,
            SNSTopic: this.__input.jobParameters?.snsTopic,
            RetrievalByteRange: this.__input.jobParameters?.retrievalByteRange,
            Tier: this.__input.jobParameters?.tier,
            InventoryRetrievalParameters: {
              StartDate: this.__input.jobParameters?.inventoryRetrievalParameters?.startDate,
              EndDate: this.__input.jobParameters?.inventoryRetrievalParameters?.endDate,
              Limit: this.__input.jobParameters?.inventoryRetrievalParameters?.limit,
              Marker: this.__input.jobParameters?.inventoryRetrievalParameters?.marker,
            },
            SelectParameters: {
              InputSerialization: {
                csv: {
                  FileHeaderInfo: this.__input.jobParameters?.selectParameters?.inputSerialization?.csv?.fileHeaderInfo,
                  Comments: this.__input.jobParameters?.selectParameters?.inputSerialization?.csv?.comments,
                  QuoteEscapeCharacter: this.__input.jobParameters?.selectParameters?.inputSerialization?.csv?.quoteEscapeCharacter,
                  RecordDelimiter: this.__input.jobParameters?.selectParameters?.inputSerialization?.csv?.recordDelimiter,
                  FieldDelimiter: this.__input.jobParameters?.selectParameters?.inputSerialization?.csv?.fieldDelimiter,
                  QuoteCharacter: this.__input.jobParameters?.selectParameters?.inputSerialization?.csv?.quoteCharacter,
                },
              },
              ExpressionType: this.__input.jobParameters?.selectParameters?.expressionType,
              Expression: this.__input.jobParameters?.selectParameters?.expression,
              OutputSerialization: {
                csv: {
                  QuoteFields: this.__input.jobParameters?.selectParameters?.outputSerialization?.csv?.quoteFields,
                  QuoteEscapeCharacter: this.__input.jobParameters?.selectParameters?.outputSerialization?.csv?.quoteEscapeCharacter,
                  RecordDelimiter: this.__input.jobParameters?.selectParameters?.outputSerialization?.csv?.recordDelimiter,
                  FieldDelimiter: this.__input.jobParameters?.selectParameters?.outputSerialization?.csv?.fieldDelimiter,
                  QuoteCharacter: this.__input.jobParameters?.selectParameters?.outputSerialization?.csv?.quoteCharacter,
                },
              },
            },
            OutputLocation: {
              S3: {
                BucketName: this.__input.jobParameters?.outputLocation?.s3?.bucketName,
                Prefix: this.__input.jobParameters?.outputLocation?.s3?.prefix,
                Encryption: {
                  EncryptionType: this.__input.jobParameters?.outputLocation?.s3?.encryption?.encryptionType,
                  KMSKeyId: this.__input.jobParameters?.outputLocation?.s3?.encryption?.kmsKeyId,
                  KMSContext: this.__input.jobParameters?.outputLocation?.s3?.encryption?.kmsContext,
                },
                CannedACL: this.__input.jobParameters?.outputLocation?.s3?.cannedAcl,
                AccessControlList: this.__input.jobParameters?.outputLocation?.s3?.accessControlList,
                Tagging: this.__input.jobParameters?.outputLocation?.s3?.tagging,
                UserMetadata: this.__input.jobParameters?.outputLocation?.s3?.userMetadata,
                StorageClass: this.__input.jobParameters?.outputLocation?.s3?.storageClass,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateJob.jobOutputPath', props);
    return resource.getResponseField('jobOutputPath') as unknown as string;
  }

}

export class GlacierResponsesInitiateMultipartUpload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierInitiateMultipartUploadInput) {
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateMultipartUpload',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.InitiateMultipartUpload.location'),
        outputPath: 'location',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          archiveDescription: this.__input.archiveDescription,
          partSize: this.__input.partSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateMultipartUpload.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get uploadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateMultipartUpload',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.InitiateMultipartUpload.uploadId'),
        outputPath: 'uploadId',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          archiveDescription: this.__input.archiveDescription,
          partSize: this.__input.partSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateMultipartUpload.uploadId', props);
    return resource.getResponseField('uploadId') as unknown as string;
  }

}

export class GlacierResponsesInitiateVaultLock {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierInitiateVaultLockInput) {
  }

  public get lockId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateVaultLock',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.InitiateVaultLock.lockId'),
        outputPath: 'lockId',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          policy: {
            Policy: this.__input.policy?.policy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateVaultLock.lockId', props);
    return resource.getResponseField('lockId') as unknown as string;
  }

}

export class GlacierResponsesListJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierListJobsInput) {
  }

  public get jobList(): shapes.GlacierGlacierJobDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.ListJobs.JobList'),
        outputPath: 'JobList',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          limit: this.__input.limit,
          marker: this.__input.marker,
          statuscode: this.__input.statuscode,
          completed: this.__input.completed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.JobList', props);
    return resource.getResponseField('JobList') as unknown as shapes.GlacierGlacierJobDescription[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.ListJobs.Marker'),
        outputPath: 'Marker',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          limit: this.__input.limit,
          marker: this.__input.marker,
          statuscode: this.__input.statuscode,
          completed: this.__input.completed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class GlacierResponsesListMultipartUploads {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierListMultipartUploadsInput) {
  }

  public get uploadsList(): shapes.GlacierUploadListElement[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.ListMultipartUploads.UploadsList'),
        outputPath: 'UploadsList',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          marker: this.__input.marker,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMultipartUploads.UploadsList', props);
    return resource.getResponseField('UploadsList') as unknown as shapes.GlacierUploadListElement[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listMultipartUploads',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.ListMultipartUploads.Marker'),
        outputPath: 'Marker',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          marker: this.__input.marker,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListMultipartUploads.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class GlacierResponsesListParts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierListPartsInput) {
  }

  public get multipartUploadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.ListParts.MultipartUploadId'),
        outputPath: 'MultipartUploadId',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          uploadId: this.__input.uploadId,
          marker: this.__input.marker,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.MultipartUploadId', props);
    return resource.getResponseField('MultipartUploadId') as unknown as string;
  }

  public get vaultArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.ListParts.VaultARN'),
        outputPath: 'VaultARN',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          uploadId: this.__input.uploadId,
          marker: this.__input.marker,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.VaultARN', props);
    return resource.getResponseField('VaultARN') as unknown as string;
  }

  public get archiveDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.ListParts.ArchiveDescription'),
        outputPath: 'ArchiveDescription',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          uploadId: this.__input.uploadId,
          marker: this.__input.marker,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.ArchiveDescription', props);
    return resource.getResponseField('ArchiveDescription') as unknown as string;
  }

  public get partSizeInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.ListParts.PartSizeInBytes'),
        outputPath: 'PartSizeInBytes',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          uploadId: this.__input.uploadId,
          marker: this.__input.marker,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.PartSizeInBytes', props);
    return resource.getResponseField('PartSizeInBytes') as unknown as number;
  }

  public get creationDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.ListParts.CreationDate'),
        outputPath: 'CreationDate',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          uploadId: this.__input.uploadId,
          marker: this.__input.marker,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

  public get parts(): shapes.GlacierPartListElement[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.ListParts.Parts'),
        outputPath: 'Parts',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          uploadId: this.__input.uploadId,
          marker: this.__input.marker,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.Parts', props);
    return resource.getResponseField('Parts') as unknown as shapes.GlacierPartListElement[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listParts',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.ListParts.Marker'),
        outputPath: 'Marker',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          uploadId: this.__input.uploadId,
          marker: this.__input.marker,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListParts.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class GlacierResponsesListProvisionedCapacity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierListProvisionedCapacityInput) {
  }

  public get provisionedCapacityList(): shapes.GlacierProvisionedCapacityDescription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProvisionedCapacity',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.ListProvisionedCapacity.ProvisionedCapacityList'),
        outputPath: 'ProvisionedCapacityList',
        parameters: {
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProvisionedCapacity.ProvisionedCapacityList', props);
    return resource.getResponseField('ProvisionedCapacityList') as unknown as shapes.GlacierProvisionedCapacityDescription[];
  }

}

export class GlacierResponsesListTagsForVault {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierListTagsForVaultInput) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForVault',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.ListTagsForVault.Tags'),
        outputPath: 'Tags',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForVault.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class GlacierResponsesListVaults {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierListVaultsInput) {
  }

  public get vaultList(): shapes.GlacierDescribeVaultOutput[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVaults',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.ListVaults.VaultList'),
        outputPath: 'VaultList',
        parameters: {
          accountId: this.__input.accountId,
          marker: this.__input.marker,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVaults.VaultList', props);
    return resource.getResponseField('VaultList') as unknown as shapes.GlacierDescribeVaultOutput[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVaults',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.ListVaults.Marker'),
        outputPath: 'Marker',
        parameters: {
          accountId: this.__input.accountId,
          marker: this.__input.marker,
          limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVaults.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class GlacierResponsesPurchaseProvisionedCapacity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierPurchaseProvisionedCapacityInput) {
  }

  public get capacityId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseProvisionedCapacity',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.PurchaseProvisionedCapacity.capacityId'),
        outputPath: 'capacityId',
        parameters: {
          accountId: this.__input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseProvisionedCapacity.capacityId', props);
    return resource.getResponseField('capacityId') as unknown as string;
  }

}

export class GlacierResponsesUploadArchive {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierUploadArchiveInput) {
  }

  public get location(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadArchive',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.UploadArchive.location'),
        outputPath: 'location',
        parameters: {
          vaultName: this.__input.vaultName,
          accountId: this.__input.accountId,
          archiveDescription: this.__input.archiveDescription,
          checksum: this.__input.checksum,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadArchive.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

  public get checksum(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadArchive',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.UploadArchive.checksum'),
        outputPath: 'checksum',
        parameters: {
          vaultName: this.__input.vaultName,
          accountId: this.__input.accountId,
          archiveDescription: this.__input.archiveDescription,
          checksum: this.__input.checksum,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadArchive.checksum', props);
    return resource.getResponseField('checksum') as unknown as string;
  }

  public get archiveId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadArchive',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.UploadArchive.archiveId'),
        outputPath: 'archiveId',
        parameters: {
          vaultName: this.__input.vaultName,
          accountId: this.__input.accountId,
          archiveDescription: this.__input.archiveDescription,
          checksum: this.__input.checksum,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadArchive.archiveId', props);
    return resource.getResponseField('archiveId') as unknown as string;
  }

}

export class GlacierResponsesUploadMultipartPart {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.GlacierUploadMultipartPartInput) {
  }

  public get checksum(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadMultipartPart',
        service: 'Glacier',
        physicalResourceId: cr.PhysicalResourceId.of('Glacier.UploadMultipartPart.checksum'),
        outputPath: 'checksum',
        parameters: {
          accountId: this.__input.accountId,
          vaultName: this.__input.vaultName,
          uploadId: this.__input.uploadId,
          checksum: this.__input.checksum,
          range: this.__input.range,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadMultipartPart.checksum', props);
    return resource.getResponseField('checksum') as unknown as string;
  }

}

