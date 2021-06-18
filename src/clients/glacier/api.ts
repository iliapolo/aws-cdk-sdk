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

  public completeMultipartUpload(input: shapes.GlacierCompleteMultipartUploadInput): GlacierCompleteMultipartUpload {
    return new GlacierCompleteMultipartUpload(this, 'CompleteMultipartUpload', this.__resources, input);
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

  public createVault(input: shapes.GlacierCreateVaultInput): GlacierCreateVault {
    return new GlacierCreateVault(this, 'CreateVault', this.__resources, input);
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

  public describeJob(input: shapes.GlacierDescribeJobInput): GlacierDescribeJob {
    return new GlacierDescribeJob(this, 'DescribeJob', this.__resources, input);
  }

  public describeVault(input: shapes.GlacierDescribeVaultInput): GlacierDescribeVault {
    return new GlacierDescribeVault(this, 'DescribeVault', this.__resources, input);
  }

  public fetchDataRetrievalPolicy(input: shapes.GlacierGetDataRetrievalPolicyInput): GlacierFetchDataRetrievalPolicy {
    return new GlacierFetchDataRetrievalPolicy(this, 'FetchDataRetrievalPolicy', this.__resources, input);
  }

  public fetchJobOutput(input: shapes.GlacierGetJobOutputInput): GlacierFetchJobOutput {
    return new GlacierFetchJobOutput(this, 'FetchJobOutput', this.__resources, input);
  }

  public fetchVaultAccessPolicy(input: shapes.GlacierGetVaultAccessPolicyInput): GlacierFetchVaultAccessPolicy {
    return new GlacierFetchVaultAccessPolicy(this, 'FetchVaultAccessPolicy', this.__resources, input);
  }

  public fetchVaultLock(input: shapes.GlacierGetVaultLockInput): GlacierFetchVaultLock {
    return new GlacierFetchVaultLock(this, 'FetchVaultLock', this.__resources, input);
  }

  public fetchVaultNotifications(input: shapes.GlacierGetVaultNotificationsInput): GlacierFetchVaultNotifications {
    return new GlacierFetchVaultNotifications(this, 'FetchVaultNotifications', this.__resources, input);
  }

  public initiateJob(input: shapes.GlacierInitiateJobInput): GlacierInitiateJob {
    return new GlacierInitiateJob(this, 'InitiateJob', this.__resources, input);
  }

  public initiateMultipartUpload(input: shapes.GlacierInitiateMultipartUploadInput): GlacierInitiateMultipartUpload {
    return new GlacierInitiateMultipartUpload(this, 'InitiateMultipartUpload', this.__resources, input);
  }

  public initiateVaultLock(input: shapes.GlacierInitiateVaultLockInput): GlacierInitiateVaultLock {
    return new GlacierInitiateVaultLock(this, 'InitiateVaultLock', this.__resources, input);
  }

  public listJobs(input: shapes.GlacierListJobsInput): GlacierListJobs {
    return new GlacierListJobs(this, 'ListJobs', this.__resources, input);
  }

  public listMultipartUploads(input: shapes.GlacierListMultipartUploadsInput): GlacierListMultipartUploads {
    return new GlacierListMultipartUploads(this, 'ListMultipartUploads', this.__resources, input);
  }

  public listParts(input: shapes.GlacierListPartsInput): GlacierListParts {
    return new GlacierListParts(this, 'ListParts', this.__resources, input);
  }

  public listProvisionedCapacity(input: shapes.GlacierListProvisionedCapacityInput): GlacierListProvisionedCapacity {
    return new GlacierListProvisionedCapacity(this, 'ListProvisionedCapacity', this.__resources, input);
  }

  public listTagsForVault(input: shapes.GlacierListTagsForVaultInput): GlacierListTagsForVault {
    return new GlacierListTagsForVault(this, 'ListTagsForVault', this.__resources, input);
  }

  public listVaults(input: shapes.GlacierListVaultsInput): GlacierListVaults {
    return new GlacierListVaults(this, 'ListVaults', this.__resources, input);
  }

  public purchaseProvisionedCapacity(input: shapes.GlacierPurchaseProvisionedCapacityInput): GlacierPurchaseProvisionedCapacity {
    return new GlacierPurchaseProvisionedCapacity(this, 'PurchaseProvisionedCapacity', this.__resources, input);
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

  public setDataRetrievalPolicy(input: shapes.GlacierSetDataRetrievalPolicyInput): void {
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

  public setVaultAccessPolicy(input: shapes.GlacierSetVaultAccessPolicyInput): void {
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

  public setVaultNotifications(input: shapes.GlacierSetVaultNotificationsInput): void {
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

  public uploadArchive(input: shapes.GlacierUploadArchiveInput): GlacierUploadArchive {
    return new GlacierUploadArchive(this, 'UploadArchive', this.__resources, input);
  }

  public uploadMultipartPart(input: shapes.GlacierUploadMultipartPartInput): GlacierUploadMultipartPart {
    return new GlacierUploadMultipartPart(this, 'UploadMultipartPart', this.__resources, input);
  }

}

export class GlacierCompleteMultipartUpload extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierCompleteMultipartUploadInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          uploadId: this.input.uploadId,
          archiveSize: this.input.archiveSize,
          checksum: this.input.checksum,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMultipartUpload.location', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          uploadId: this.input.uploadId,
          archiveSize: this.input.archiveSize,
          checksum: this.input.checksum,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMultipartUpload.checksum', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          uploadId: this.input.uploadId,
          archiveSize: this.input.archiveSize,
          checksum: this.input.checksum,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMultipartUpload.archiveId', props);
    return resource.getResponseField('archiveId') as unknown as string;
  }

}

export class GlacierCreateVault extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierCreateVaultInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateVault.location', props);
    return resource.getResponseField('location') as unknown as string;
  }

}

export class GlacierDescribeJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierDescribeJobInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobId', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobDescription', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Action', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.ArchiveId', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.VaultARN', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.CreationDate', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Completed', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.StatusCode', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.StatusMessage', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.ArchiveSizeInBytes', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.InventorySizeInBytes', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.SNSTopic', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.CompletionDate', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.SHA256TreeHash', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.ArchiveSHA256TreeHash', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.RetrievalByteRange', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.Tier', props);
    return resource.getResponseField('Tier') as unknown as string;
  }

  public get inventoryRetrievalParameters(): GlacierDescribeJobInventoryRetrievalParameters {
    return new GlacierDescribeJobInventoryRetrievalParameters(this, 'InventoryRetrievalParameters', this.__resources, this.input);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.JobOutputPath', props);
    return resource.getResponseField('JobOutputPath') as unknown as string;
  }

  public get selectParameters(): GlacierDescribeJobSelectParameters {
    return new GlacierDescribeJobSelectParameters(this, 'SelectParameters', this.__resources, this.input);
  }

  public get outputLocation(): GlacierDescribeJobOutputLocation {
    return new GlacierDescribeJobOutputLocation(this, 'OutputLocation', this.__resources, this.input);
  }

}

export class GlacierDescribeJobInventoryRetrievalParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierDescribeJobInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.InventoryRetrievalParameters.Format', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.InventoryRetrievalParameters.StartDate', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.InventoryRetrievalParameters.EndDate', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.InventoryRetrievalParameters.Limit', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.InventoryRetrievalParameters.Marker', props);
    return resource.getResponseField('InventoryRetrievalParameters.Marker') as unknown as string;
  }

}

export class GlacierDescribeJobSelectParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierDescribeJobInput) {
    super(scope, id);
  }

  public get inputSerialization(): GlacierDescribeJobSelectParametersInputSerialization {
    return new GlacierDescribeJobSelectParametersInputSerialization(this, 'InputSerialization', this.__resources, this.input);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.SelectParameters.ExpressionType', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.SelectParameters.Expression', props);
    return resource.getResponseField('SelectParameters.Expression') as unknown as string;
  }

  public get outputSerialization(): GlacierDescribeJobSelectParametersOutputSerialization {
    return new GlacierDescribeJobSelectParametersOutputSerialization(this, 'OutputSerialization', this.__resources, this.input);
  }

}

export class GlacierDescribeJobSelectParametersInputSerialization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierDescribeJobInput) {
    super(scope, id);
  }

  public get csv(): GlacierDescribeJobSelectParametersInputSerializationCsv {
    return new GlacierDescribeJobSelectParametersInputSerializationCsv(this, 'Csv', this.__resources, this.input);
  }

}

export class GlacierDescribeJobSelectParametersInputSerializationCsv extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierDescribeJobInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.SelectParameters.InputSerialization.csv.FileHeaderInfo', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.SelectParameters.InputSerialization.csv.Comments', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.SelectParameters.InputSerialization.csv.QuoteEscapeCharacter', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.SelectParameters.InputSerialization.csv.RecordDelimiter', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.SelectParameters.InputSerialization.csv.FieldDelimiter', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.SelectParameters.InputSerialization.csv.QuoteCharacter', props);
    return resource.getResponseField('SelectParameters.InputSerialization.csv.QuoteCharacter') as unknown as string;
  }

}

export class GlacierDescribeJobSelectParametersOutputSerialization extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierDescribeJobInput) {
    super(scope, id);
  }

  public get csv(): GlacierDescribeJobSelectParametersOutputSerializationCsv {
    return new GlacierDescribeJobSelectParametersOutputSerializationCsv(this, 'Csv', this.__resources, this.input);
  }

}

export class GlacierDescribeJobSelectParametersOutputSerializationCsv extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierDescribeJobInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.SelectParameters.OutputSerialization.csv.QuoteFields', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.SelectParameters.OutputSerialization.csv.QuoteEscapeCharacter', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.SelectParameters.OutputSerialization.csv.RecordDelimiter', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.SelectParameters.OutputSerialization.csv.FieldDelimiter', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.SelectParameters.OutputSerialization.csv.QuoteCharacter', props);
    return resource.getResponseField('SelectParameters.OutputSerialization.csv.QuoteCharacter') as unknown as string;
  }

}

export class GlacierDescribeJobOutputLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierDescribeJobInput) {
    super(scope, id);
  }

  public get s3(): GlacierDescribeJobOutputLocationS3 {
    return new GlacierDescribeJobOutputLocationS3(this, 'S3', this.__resources, this.input);
  }

}

export class GlacierDescribeJobOutputLocationS3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierDescribeJobInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.OutputLocation.S3.BucketName', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.OutputLocation.S3.Prefix', props);
    return resource.getResponseField('OutputLocation.S3.Prefix') as unknown as string;
  }

  public get encryption(): GlacierDescribeJobOutputLocationS3Encryption {
    return new GlacierDescribeJobOutputLocationS3Encryption(this, 'Encryption', this.__resources, this.input);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.OutputLocation.S3.CannedACL', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.OutputLocation.S3.AccessControlList', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.OutputLocation.S3.Tagging', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.OutputLocation.S3.UserMetadata', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.OutputLocation.S3.StorageClass', props);
    return resource.getResponseField('OutputLocation.S3.StorageClass') as unknown as string;
  }

}

export class GlacierDescribeJobOutputLocationS3Encryption extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierDescribeJobInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.OutputLocation.S3.Encryption.EncryptionType', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.OutputLocation.S3.Encryption.KMSKeyId', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJob.OutputLocation.S3.Encryption.KMSContext', props);
    return resource.getResponseField('OutputLocation.S3.Encryption.KMSContext') as unknown as string;
  }

}

export class GlacierDescribeVault extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierDescribeVaultInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeVault.VaultARN', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeVault.VaultName', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeVault.CreationDate', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeVault.LastInventoryDate', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeVault.NumberOfArchives', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeVault.SizeInBytes', props);
    return resource.getResponseField('SizeInBytes') as unknown as number;
  }

}

export class GlacierFetchDataRetrievalPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierGetDataRetrievalPolicyInput) {
    super(scope, id);
  }

  public get policy(): GlacierFetchDataRetrievalPolicyPolicy {
    return new GlacierFetchDataRetrievalPolicyPolicy(this, 'Policy', this.__resources, this.input);
  }

}

export class GlacierFetchDataRetrievalPolicyPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierGetDataRetrievalPolicyInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataRetrievalPolicy.Policy.Rules', props);
    return resource.getResponseField('Policy.Rules') as unknown as shapes.GlacierDataRetrievalRule[];
  }

}

export class GlacierFetchJobOutput extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierGetJobOutputInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
          range: this.input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobOutput.body', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
          range: this.input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobOutput.checksum', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
          range: this.input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobOutput.status', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
          range: this.input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobOutput.contentRange', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
          range: this.input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobOutput.acceptRanges', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
          range: this.input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobOutput.contentType', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobId: this.input.jobId,
          range: this.input.range,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetJobOutput.archiveDescription', props);
    return resource.getResponseField('archiveDescription') as unknown as string;
  }

}

export class GlacierFetchVaultAccessPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierGetVaultAccessPolicyInput) {
    super(scope, id);
  }

  public get policy(): GlacierFetchVaultAccessPolicyPolicy {
    return new GlacierFetchVaultAccessPolicyPolicy(this, 'Policy', this.__resources, this.input);
  }

}

export class GlacierFetchVaultAccessPolicyPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierGetVaultAccessPolicyInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVaultAccessPolicy.policy.Policy', props);
    return resource.getResponseField('policy.Policy') as unknown as string;
  }

}

export class GlacierFetchVaultLock extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierGetVaultLockInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVaultLock.Policy', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVaultLock.State', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVaultLock.ExpirationDate', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVaultLock.CreationDate', props);
    return resource.getResponseField('CreationDate') as unknown as string;
  }

}

export class GlacierFetchVaultNotifications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierGetVaultNotificationsInput) {
    super(scope, id);
  }

  public get vaultNotificationConfig(): GlacierFetchVaultNotificationsVaultNotificationConfig {
    return new GlacierFetchVaultNotificationsVaultNotificationConfig(this, 'VaultNotificationConfig', this.__resources, this.input);
  }

}

export class GlacierFetchVaultNotificationsVaultNotificationConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierGetVaultNotificationsInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVaultNotifications.vaultNotificationConfig.SNSTopic', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetVaultNotifications.vaultNotificationConfig.Events', props);
    return resource.getResponseField('vaultNotificationConfig.Events') as unknown as string[];
  }

}

export class GlacierInitiateJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierInitiateJobInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobParameters: {
            Format: this.input.jobParameters?.format,
            Type: this.input.jobParameters?.type,
            ArchiveId: this.input.jobParameters?.archiveId,
            Description: this.input.jobParameters?.description,
            SNSTopic: this.input.jobParameters?.snsTopic,
            RetrievalByteRange: this.input.jobParameters?.retrievalByteRange,
            Tier: this.input.jobParameters?.tier,
            InventoryRetrievalParameters: {
              StartDate: this.input.jobParameters?.inventoryRetrievalParameters?.startDate,
              EndDate: this.input.jobParameters?.inventoryRetrievalParameters?.endDate,
              Limit: this.input.jobParameters?.inventoryRetrievalParameters?.limit,
              Marker: this.input.jobParameters?.inventoryRetrievalParameters?.marker,
            },
            SelectParameters: {
              InputSerialization: {
                csv: {
                  FileHeaderInfo: this.input.jobParameters?.selectParameters?.inputSerialization?.csv?.fileHeaderInfo,
                  Comments: this.input.jobParameters?.selectParameters?.inputSerialization?.csv?.comments,
                  QuoteEscapeCharacter: this.input.jobParameters?.selectParameters?.inputSerialization?.csv?.quoteEscapeCharacter,
                  RecordDelimiter: this.input.jobParameters?.selectParameters?.inputSerialization?.csv?.recordDelimiter,
                  FieldDelimiter: this.input.jobParameters?.selectParameters?.inputSerialization?.csv?.fieldDelimiter,
                  QuoteCharacter: this.input.jobParameters?.selectParameters?.inputSerialization?.csv?.quoteCharacter,
                },
              },
              ExpressionType: this.input.jobParameters?.selectParameters?.expressionType,
              Expression: this.input.jobParameters?.selectParameters?.expression,
              OutputSerialization: {
                csv: {
                  QuoteFields: this.input.jobParameters?.selectParameters?.outputSerialization?.csv?.quoteFields,
                  QuoteEscapeCharacter: this.input.jobParameters?.selectParameters?.outputSerialization?.csv?.quoteEscapeCharacter,
                  RecordDelimiter: this.input.jobParameters?.selectParameters?.outputSerialization?.csv?.recordDelimiter,
                  FieldDelimiter: this.input.jobParameters?.selectParameters?.outputSerialization?.csv?.fieldDelimiter,
                  QuoteCharacter: this.input.jobParameters?.selectParameters?.outputSerialization?.csv?.quoteCharacter,
                },
              },
            },
            OutputLocation: {
              S3: {
                BucketName: this.input.jobParameters?.outputLocation?.s3?.bucketName,
                Prefix: this.input.jobParameters?.outputLocation?.s3?.prefix,
                Encryption: {
                  EncryptionType: this.input.jobParameters?.outputLocation?.s3?.encryption?.encryptionType,
                  KMSKeyId: this.input.jobParameters?.outputLocation?.s3?.encryption?.kmsKeyId,
                  KMSContext: this.input.jobParameters?.outputLocation?.s3?.encryption?.kmsContext,
                },
                CannedACL: this.input.jobParameters?.outputLocation?.s3?.cannedAcl,
                AccessControlList: this.input.jobParameters?.outputLocation?.s3?.accessControlList,
                Tagging: this.input.jobParameters?.outputLocation?.s3?.tagging,
                UserMetadata: this.input.jobParameters?.outputLocation?.s3?.userMetadata,
                StorageClass: this.input.jobParameters?.outputLocation?.s3?.storageClass,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateJob.location', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobParameters: {
            Format: this.input.jobParameters?.format,
            Type: this.input.jobParameters?.type,
            ArchiveId: this.input.jobParameters?.archiveId,
            Description: this.input.jobParameters?.description,
            SNSTopic: this.input.jobParameters?.snsTopic,
            RetrievalByteRange: this.input.jobParameters?.retrievalByteRange,
            Tier: this.input.jobParameters?.tier,
            InventoryRetrievalParameters: {
              StartDate: this.input.jobParameters?.inventoryRetrievalParameters?.startDate,
              EndDate: this.input.jobParameters?.inventoryRetrievalParameters?.endDate,
              Limit: this.input.jobParameters?.inventoryRetrievalParameters?.limit,
              Marker: this.input.jobParameters?.inventoryRetrievalParameters?.marker,
            },
            SelectParameters: {
              InputSerialization: {
                csv: {
                  FileHeaderInfo: this.input.jobParameters?.selectParameters?.inputSerialization?.csv?.fileHeaderInfo,
                  Comments: this.input.jobParameters?.selectParameters?.inputSerialization?.csv?.comments,
                  QuoteEscapeCharacter: this.input.jobParameters?.selectParameters?.inputSerialization?.csv?.quoteEscapeCharacter,
                  RecordDelimiter: this.input.jobParameters?.selectParameters?.inputSerialization?.csv?.recordDelimiter,
                  FieldDelimiter: this.input.jobParameters?.selectParameters?.inputSerialization?.csv?.fieldDelimiter,
                  QuoteCharacter: this.input.jobParameters?.selectParameters?.inputSerialization?.csv?.quoteCharacter,
                },
              },
              ExpressionType: this.input.jobParameters?.selectParameters?.expressionType,
              Expression: this.input.jobParameters?.selectParameters?.expression,
              OutputSerialization: {
                csv: {
                  QuoteFields: this.input.jobParameters?.selectParameters?.outputSerialization?.csv?.quoteFields,
                  QuoteEscapeCharacter: this.input.jobParameters?.selectParameters?.outputSerialization?.csv?.quoteEscapeCharacter,
                  RecordDelimiter: this.input.jobParameters?.selectParameters?.outputSerialization?.csv?.recordDelimiter,
                  FieldDelimiter: this.input.jobParameters?.selectParameters?.outputSerialization?.csv?.fieldDelimiter,
                  QuoteCharacter: this.input.jobParameters?.selectParameters?.outputSerialization?.csv?.quoteCharacter,
                },
              },
            },
            OutputLocation: {
              S3: {
                BucketName: this.input.jobParameters?.outputLocation?.s3?.bucketName,
                Prefix: this.input.jobParameters?.outputLocation?.s3?.prefix,
                Encryption: {
                  EncryptionType: this.input.jobParameters?.outputLocation?.s3?.encryption?.encryptionType,
                  KMSKeyId: this.input.jobParameters?.outputLocation?.s3?.encryption?.kmsKeyId,
                  KMSContext: this.input.jobParameters?.outputLocation?.s3?.encryption?.kmsContext,
                },
                CannedACL: this.input.jobParameters?.outputLocation?.s3?.cannedAcl,
                AccessControlList: this.input.jobParameters?.outputLocation?.s3?.accessControlList,
                Tagging: this.input.jobParameters?.outputLocation?.s3?.tagging,
                UserMetadata: this.input.jobParameters?.outputLocation?.s3?.userMetadata,
                StorageClass: this.input.jobParameters?.outputLocation?.s3?.storageClass,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateJob.jobId', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          jobParameters: {
            Format: this.input.jobParameters?.format,
            Type: this.input.jobParameters?.type,
            ArchiveId: this.input.jobParameters?.archiveId,
            Description: this.input.jobParameters?.description,
            SNSTopic: this.input.jobParameters?.snsTopic,
            RetrievalByteRange: this.input.jobParameters?.retrievalByteRange,
            Tier: this.input.jobParameters?.tier,
            InventoryRetrievalParameters: {
              StartDate: this.input.jobParameters?.inventoryRetrievalParameters?.startDate,
              EndDate: this.input.jobParameters?.inventoryRetrievalParameters?.endDate,
              Limit: this.input.jobParameters?.inventoryRetrievalParameters?.limit,
              Marker: this.input.jobParameters?.inventoryRetrievalParameters?.marker,
            },
            SelectParameters: {
              InputSerialization: {
                csv: {
                  FileHeaderInfo: this.input.jobParameters?.selectParameters?.inputSerialization?.csv?.fileHeaderInfo,
                  Comments: this.input.jobParameters?.selectParameters?.inputSerialization?.csv?.comments,
                  QuoteEscapeCharacter: this.input.jobParameters?.selectParameters?.inputSerialization?.csv?.quoteEscapeCharacter,
                  RecordDelimiter: this.input.jobParameters?.selectParameters?.inputSerialization?.csv?.recordDelimiter,
                  FieldDelimiter: this.input.jobParameters?.selectParameters?.inputSerialization?.csv?.fieldDelimiter,
                  QuoteCharacter: this.input.jobParameters?.selectParameters?.inputSerialization?.csv?.quoteCharacter,
                },
              },
              ExpressionType: this.input.jobParameters?.selectParameters?.expressionType,
              Expression: this.input.jobParameters?.selectParameters?.expression,
              OutputSerialization: {
                csv: {
                  QuoteFields: this.input.jobParameters?.selectParameters?.outputSerialization?.csv?.quoteFields,
                  QuoteEscapeCharacter: this.input.jobParameters?.selectParameters?.outputSerialization?.csv?.quoteEscapeCharacter,
                  RecordDelimiter: this.input.jobParameters?.selectParameters?.outputSerialization?.csv?.recordDelimiter,
                  FieldDelimiter: this.input.jobParameters?.selectParameters?.outputSerialization?.csv?.fieldDelimiter,
                  QuoteCharacter: this.input.jobParameters?.selectParameters?.outputSerialization?.csv?.quoteCharacter,
                },
              },
            },
            OutputLocation: {
              S3: {
                BucketName: this.input.jobParameters?.outputLocation?.s3?.bucketName,
                Prefix: this.input.jobParameters?.outputLocation?.s3?.prefix,
                Encryption: {
                  EncryptionType: this.input.jobParameters?.outputLocation?.s3?.encryption?.encryptionType,
                  KMSKeyId: this.input.jobParameters?.outputLocation?.s3?.encryption?.kmsKeyId,
                  KMSContext: this.input.jobParameters?.outputLocation?.s3?.encryption?.kmsContext,
                },
                CannedACL: this.input.jobParameters?.outputLocation?.s3?.cannedAcl,
                AccessControlList: this.input.jobParameters?.outputLocation?.s3?.accessControlList,
                Tagging: this.input.jobParameters?.outputLocation?.s3?.tagging,
                UserMetadata: this.input.jobParameters?.outputLocation?.s3?.userMetadata,
                StorageClass: this.input.jobParameters?.outputLocation?.s3?.storageClass,
              },
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateJob.jobOutputPath', props);
    return resource.getResponseField('jobOutputPath') as unknown as string;
  }

}

export class GlacierInitiateMultipartUpload extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierInitiateMultipartUploadInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          archiveDescription: this.input.archiveDescription,
          partSize: this.input.partSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateMultipartUpload.location', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          archiveDescription: this.input.archiveDescription,
          partSize: this.input.partSize,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateMultipartUpload.uploadId', props);
    return resource.getResponseField('uploadId') as unknown as string;
  }

}

export class GlacierInitiateVaultLock extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierInitiateVaultLockInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          policy: {
            Policy: this.input.policy?.policy,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateVaultLock.lockId', props);
    return resource.getResponseField('lockId') as unknown as string;
  }

}

export class GlacierListJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierListJobsInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          limit: this.input.limit,
          marker: this.input.marker,
          statuscode: this.input.statuscode,
          completed: this.input.completed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.JobList', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          limit: this.input.limit,
          marker: this.input.marker,
          statuscode: this.input.statuscode,
          completed: this.input.completed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class GlacierListMultipartUploads extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierListMultipartUploadsInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          marker: this.input.marker,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMultipartUploads.UploadsList', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          marker: this.input.marker,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListMultipartUploads.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class GlacierListParts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierListPartsInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          uploadId: this.input.uploadId,
          marker: this.input.marker,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.MultipartUploadId', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          uploadId: this.input.uploadId,
          marker: this.input.marker,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.VaultARN', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          uploadId: this.input.uploadId,
          marker: this.input.marker,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.ArchiveDescription', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          uploadId: this.input.uploadId,
          marker: this.input.marker,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.PartSizeInBytes', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          uploadId: this.input.uploadId,
          marker: this.input.marker,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.CreationDate', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          uploadId: this.input.uploadId,
          marker: this.input.marker,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.Parts', props);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          uploadId: this.input.uploadId,
          marker: this.input.marker,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListParts.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class GlacierListProvisionedCapacity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierListProvisionedCapacityInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProvisionedCapacity.ProvisionedCapacityList', props);
    return resource.getResponseField('ProvisionedCapacityList') as unknown as shapes.GlacierProvisionedCapacityDescription[];
  }

}

export class GlacierListTagsForVault extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierListTagsForVaultInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForVault.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class GlacierListVaults extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierListVaultsInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          marker: this.input.marker,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVaults.VaultList', props);
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
          accountId: this.input.accountId,
          marker: this.input.marker,
          limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListVaults.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class GlacierPurchaseProvisionedCapacity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierPurchaseProvisionedCapacityInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseProvisionedCapacity.capacityId', props);
    return resource.getResponseField('capacityId') as unknown as string;
  }

}

export class GlacierUploadArchive extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierUploadArchiveInput) {
    super(scope, id);
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
          vaultName: this.input.vaultName,
          accountId: this.input.accountId,
          archiveDescription: this.input.archiveDescription,
          checksum: this.input.checksum,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadArchive.location', props);
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
          vaultName: this.input.vaultName,
          accountId: this.input.accountId,
          archiveDescription: this.input.archiveDescription,
          checksum: this.input.checksum,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadArchive.checksum', props);
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
          vaultName: this.input.vaultName,
          accountId: this.input.accountId,
          archiveDescription: this.input.archiveDescription,
          checksum: this.input.checksum,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadArchive.archiveId', props);
    return resource.getResponseField('archiveId') as unknown as string;
  }

}

export class GlacierUploadMultipartPart extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.GlacierUploadMultipartPartInput) {
    super(scope, id);
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
          accountId: this.input.accountId,
          vaultName: this.input.vaultName,
          uploadId: this.input.uploadId,
          checksum: this.input.checksum,
          range: this.input.range,
          body: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadMultipartPart.checksum', props);
    return resource.getResponseField('checksum') as unknown as string;
  }

}

