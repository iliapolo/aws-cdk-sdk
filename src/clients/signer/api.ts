import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SignerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addProfilePermission(input: shapes.SignerAddProfilePermissionRequest): SignerAddProfilePermission {
    return new SignerAddProfilePermission(this, 'AddProfilePermission', this.__resources, input);
  }

  public cancelSigningProfile(input: shapes.SignerCancelSigningProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.CancelSigningProfile'),
        parameters: {
          profileName: input.profileName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CancelSigningProfile', props);
  }

  public describeSigningJob(input: shapes.SignerDescribeSigningJobRequest): SignerDescribeSigningJob {
    return new SignerDescribeSigningJob(this, 'DescribeSigningJob', this.__resources, input);
  }

  public fetchSigningPlatform(input: shapes.SignerGetSigningPlatformRequest): SignerFetchSigningPlatform {
    return new SignerFetchSigningPlatform(this, 'FetchSigningPlatform', this.__resources, input);
  }

  public fetchSigningProfile(input: shapes.SignerGetSigningProfileRequest): SignerFetchSigningProfile {
    return new SignerFetchSigningProfile(this, 'FetchSigningProfile', this.__resources, input);
  }

  public listProfilePermissions(input: shapes.SignerListProfilePermissionsRequest): SignerListProfilePermissions {
    return new SignerListProfilePermissions(this, 'ListProfilePermissions', this.__resources, input);
  }

  public listSigningJobs(input: shapes.SignerListSigningJobsRequest): SignerListSigningJobs {
    return new SignerListSigningJobs(this, 'ListSigningJobs', this.__resources, input);
  }

  public listSigningPlatforms(input: shapes.SignerListSigningPlatformsRequest): SignerListSigningPlatforms {
    return new SignerListSigningPlatforms(this, 'ListSigningPlatforms', this.__resources, input);
  }

  public listSigningProfiles(input: shapes.SignerListSigningProfilesRequest): SignerListSigningProfiles {
    return new SignerListSigningProfiles(this, 'ListSigningProfiles', this.__resources, input);
  }

  public listTagsForResource(input: shapes.SignerListTagsForResourceRequest): SignerListTagsForResource {
    return new SignerListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public putSigningProfile(input: shapes.SignerPutSigningProfileRequest): SignerPutSigningProfile {
    return new SignerPutSigningProfile(this, 'PutSigningProfile', this.__resources, input);
  }

  public removeProfilePermission(input: shapes.SignerRemoveProfilePermissionRequest): SignerRemoveProfilePermission {
    return new SignerRemoveProfilePermission(this, 'RemoveProfilePermission', this.__resources, input);
  }

  public revokeSignature(input: shapes.SignerRevokeSignatureRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'revokeSignature',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.RevokeSignature'),
        parameters: {
          jobId: input.jobId,
          jobOwner: input.jobOwner,
          reason: input.reason,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RevokeSignature', props);
  }

  public revokeSigningProfile(input: shapes.SignerRevokeSigningProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'revokeSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.RevokeSigningProfile'),
        parameters: {
          profileName: input.profileName,
          profileVersion: input.profileVersion,
          reason: input.reason,
          effectiveTime: input.effectiveTime,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RevokeSigningProfile', props);
  }

  public startSigningJob(input: shapes.SignerStartSigningJobRequest): SignerStartSigningJob {
    return new SignerStartSigningJob(this, 'StartSigningJob', this.__resources, input);
  }

  public tagResource(input: shapes.SignerTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.SignerUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

}

export class SignerAddProfilePermission extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerAddProfilePermissionRequest) {
    super(scope, id);
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addProfilePermission',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.AddProfilePermission.revisionId'),
        outputPath: 'revisionId',
        parameters: {
          profileName: this.input.profileName,
          profileVersion: this.input.profileVersion,
          action: this.input.action,
          principal: this.input.principal,
          revisionId: this.input.revisionId,
          statementId: this.input.statementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddProfilePermission.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

}

export class SignerDescribeSigningJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerDescribeSigningJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.jobId'),
        outputPath: 'jobId',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.jobId', props);
    return resource.getResponseField('jobId') as unknown as string;
  }

  public get source(): SignerDescribeSigningJobSource {
    return new SignerDescribeSigningJobSource(this, 'Source', this.__resources, this.input);
  }

  public get signingMaterial(): SignerDescribeSigningJobSigningMaterial {
    return new SignerDescribeSigningJobSigningMaterial(this, 'SigningMaterial', this.__resources, this.input);
  }

  public get platformId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.platformId'),
        outputPath: 'platformId',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.platformId', props);
    return resource.getResponseField('platformId') as unknown as string;
  }

  public get platformDisplayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.platformDisplayName'),
        outputPath: 'platformDisplayName',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.platformDisplayName', props);
    return resource.getResponseField('platformDisplayName') as unknown as string;
  }

  public get profileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.profileName'),
        outputPath: 'profileName',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.profileName', props);
    return resource.getResponseField('profileName') as unknown as string;
  }

  public get profileVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.profileVersion'),
        outputPath: 'profileVersion',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.profileVersion', props);
    return resource.getResponseField('profileVersion') as unknown as string;
  }

  public get overrides(): SignerDescribeSigningJobOverrides {
    return new SignerDescribeSigningJobOverrides(this, 'Overrides', this.__resources, this.input);
  }

  public get signingParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.signingParameters'),
        outputPath: 'signingParameters',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.signingParameters', props);
    return resource.getResponseField('signingParameters') as unknown as Record<string, string>;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get completedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.completedAt'),
        outputPath: 'completedAt',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.completedAt', props);
    return resource.getResponseField('completedAt') as unknown as string;
  }

  public get signatureExpiresAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.signatureExpiresAt'),
        outputPath: 'signatureExpiresAt',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.signatureExpiresAt', props);
    return resource.getResponseField('signatureExpiresAt') as unknown as string;
  }

  public get requestedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.requestedBy'),
        outputPath: 'requestedBy',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.requestedBy', props);
    return resource.getResponseField('requestedBy') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.status'),
        outputPath: 'status',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.statusReason'),
        outputPath: 'statusReason',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.statusReason', props);
    return resource.getResponseField('statusReason') as unknown as string;
  }

  public get revocationRecord(): SignerDescribeSigningJobRevocationRecord {
    return new SignerDescribeSigningJobRevocationRecord(this, 'RevocationRecord', this.__resources, this.input);
  }

  public get signedObject(): SignerDescribeSigningJobSignedObject {
    return new SignerDescribeSigningJobSignedObject(this, 'SignedObject', this.__resources, this.input);
  }

  public get jobOwner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.jobOwner'),
        outputPath: 'jobOwner',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.jobOwner', props);
    return resource.getResponseField('jobOwner') as unknown as string;
  }

  public get jobInvoker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.jobInvoker'),
        outputPath: 'jobInvoker',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.jobInvoker', props);
    return resource.getResponseField('jobInvoker') as unknown as string;
  }

}

export class SignerDescribeSigningJobSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerDescribeSigningJobRequest) {
    super(scope, id);
  }

  public get s3(): SignerDescribeSigningJobSourceS3 {
    return new SignerDescribeSigningJobSourceS3(this, 'S3', this.__resources, this.input);
  }

}

export class SignerDescribeSigningJobSourceS3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerDescribeSigningJobRequest) {
    super(scope, id);
  }

  public get bucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.source.s3.bucketName'),
        outputPath: 'source.s3.bucketName',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.source.s3.bucketName', props);
    return resource.getResponseField('source.s3.bucketName') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.source.s3.key'),
        outputPath: 'source.s3.key',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.source.s3.key', props);
    return resource.getResponseField('source.s3.key') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.source.s3.version'),
        outputPath: 'source.s3.version',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.source.s3.version', props);
    return resource.getResponseField('source.s3.version') as unknown as string;
  }

}

export class SignerDescribeSigningJobSigningMaterial extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerDescribeSigningJobRequest) {
    super(scope, id);
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.signingMaterial.certificateArn'),
        outputPath: 'signingMaterial.certificateArn',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.signingMaterial.certificateArn', props);
    return resource.getResponseField('signingMaterial.certificateArn') as unknown as string;
  }

}

export class SignerDescribeSigningJobOverrides extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerDescribeSigningJobRequest) {
    super(scope, id);
  }

  public get signingConfiguration(): SignerDescribeSigningJobOverridesSigningConfiguration {
    return new SignerDescribeSigningJobOverridesSigningConfiguration(this, 'SigningConfiguration', this.__resources, this.input);
  }

  public get signingImageFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.overrides.signingImageFormat'),
        outputPath: 'overrides.signingImageFormat',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.overrides.signingImageFormat', props);
    return resource.getResponseField('overrides.signingImageFormat') as unknown as string;
  }

}

export class SignerDescribeSigningJobOverridesSigningConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerDescribeSigningJobRequest) {
    super(scope, id);
  }

  public get encryptionAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.overrides.signingConfiguration.encryptionAlgorithm'),
        outputPath: 'overrides.signingConfiguration.encryptionAlgorithm',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.overrides.signingConfiguration.encryptionAlgorithm', props);
    return resource.getResponseField('overrides.signingConfiguration.encryptionAlgorithm') as unknown as string;
  }

  public get hashAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.overrides.signingConfiguration.hashAlgorithm'),
        outputPath: 'overrides.signingConfiguration.hashAlgorithm',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.overrides.signingConfiguration.hashAlgorithm', props);
    return resource.getResponseField('overrides.signingConfiguration.hashAlgorithm') as unknown as string;
  }

}

export class SignerDescribeSigningJobRevocationRecord extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerDescribeSigningJobRequest) {
    super(scope, id);
  }

  public get reason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.revocationRecord.reason'),
        outputPath: 'revocationRecord.reason',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.revocationRecord.reason', props);
    return resource.getResponseField('revocationRecord.reason') as unknown as string;
  }

  public get revokedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.revocationRecord.revokedAt'),
        outputPath: 'revocationRecord.revokedAt',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.revocationRecord.revokedAt', props);
    return resource.getResponseField('revocationRecord.revokedAt') as unknown as string;
  }

  public get revokedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.revocationRecord.revokedBy'),
        outputPath: 'revocationRecord.revokedBy',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.revocationRecord.revokedBy', props);
    return resource.getResponseField('revocationRecord.revokedBy') as unknown as string;
  }

}

export class SignerDescribeSigningJobSignedObject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerDescribeSigningJobRequest) {
    super(scope, id);
  }

  public get s3(): SignerDescribeSigningJobSignedObjectS3 {
    return new SignerDescribeSigningJobSignedObjectS3(this, 'S3', this.__resources, this.input);
  }

}

export class SignerDescribeSigningJobSignedObjectS3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerDescribeSigningJobRequest) {
    super(scope, id);
  }

  public get bucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.signedObject.s3.bucketName'),
        outputPath: 'signedObject.s3.bucketName',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.signedObject.s3.bucketName', props);
    return resource.getResponseField('signedObject.s3.bucketName') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.DescribeSigningJob.signedObject.s3.key'),
        outputPath: 'signedObject.s3.key',
        parameters: {
          jobId: this.input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSigningJob.signedObject.s3.key', props);
    return resource.getResponseField('signedObject.s3.key') as unknown as string;
  }

}

export class SignerFetchSigningPlatform extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerGetSigningPlatformRequest) {
    super(scope, id);
  }

  public get platformId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningPlatform',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningPlatform.platformId'),
        outputPath: 'platformId',
        parameters: {
          platformId: this.input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningPlatform.platformId', props);
    return resource.getResponseField('platformId') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningPlatform',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningPlatform.displayName'),
        outputPath: 'displayName',
        parameters: {
          platformId: this.input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningPlatform.displayName', props);
    return resource.getResponseField('displayName') as unknown as string;
  }

  public get partner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningPlatform',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningPlatform.partner'),
        outputPath: 'partner',
        parameters: {
          platformId: this.input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningPlatform.partner', props);
    return resource.getResponseField('partner') as unknown as string;
  }

  public get target(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningPlatform',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningPlatform.target'),
        outputPath: 'target',
        parameters: {
          platformId: this.input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningPlatform.target', props);
    return resource.getResponseField('target') as unknown as string;
  }

  public get category(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningPlatform',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningPlatform.category'),
        outputPath: 'category',
        parameters: {
          platformId: this.input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningPlatform.category', props);
    return resource.getResponseField('category') as unknown as string;
  }

  public get signingConfiguration(): SignerFetchSigningPlatformSigningConfiguration {
    return new SignerFetchSigningPlatformSigningConfiguration(this, 'SigningConfiguration', this.__resources, this.input);
  }

  public get signingImageFormat(): SignerFetchSigningPlatformSigningImageFormat {
    return new SignerFetchSigningPlatformSigningImageFormat(this, 'SigningImageFormat', this.__resources, this.input);
  }

  public get maxSizeInMb(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningPlatform',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningPlatform.maxSizeInMB'),
        outputPath: 'maxSizeInMB',
        parameters: {
          platformId: this.input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningPlatform.maxSizeInMB', props);
    return resource.getResponseField('maxSizeInMB') as unknown as number;
  }

  public get revocationSupported(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningPlatform',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningPlatform.revocationSupported'),
        outputPath: 'revocationSupported',
        parameters: {
          platformId: this.input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningPlatform.revocationSupported', props);
    return resource.getResponseField('revocationSupported') as unknown as boolean;
  }

}

export class SignerFetchSigningPlatformSigningConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerGetSigningPlatformRequest) {
    super(scope, id);
  }

  public get encryptionAlgorithmOptions(): SignerFetchSigningPlatformSigningConfigurationEncryptionAlgorithmOptions {
    return new SignerFetchSigningPlatformSigningConfigurationEncryptionAlgorithmOptions(this, 'EncryptionAlgorithmOptions', this.__resources, this.input);
  }

  public get hashAlgorithmOptions(): SignerFetchSigningPlatformSigningConfigurationHashAlgorithmOptions {
    return new SignerFetchSigningPlatformSigningConfigurationHashAlgorithmOptions(this, 'HashAlgorithmOptions', this.__resources, this.input);
  }

}

export class SignerFetchSigningPlatformSigningConfigurationEncryptionAlgorithmOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerGetSigningPlatformRequest) {
    super(scope, id);
  }

  public get allowedValues(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningPlatform',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningPlatform.signingConfiguration.encryptionAlgorithmOptions.allowedValues'),
        outputPath: 'signingConfiguration.encryptionAlgorithmOptions.allowedValues',
        parameters: {
          platformId: this.input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningPlatform.signingConfiguration.encryptionAlgorithmOptions.allowedValues', props);
    return resource.getResponseField('signingConfiguration.encryptionAlgorithmOptions.allowedValues') as unknown as string[];
  }

  public get defaultValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningPlatform',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningPlatform.signingConfiguration.encryptionAlgorithmOptions.defaultValue'),
        outputPath: 'signingConfiguration.encryptionAlgorithmOptions.defaultValue',
        parameters: {
          platformId: this.input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningPlatform.signingConfiguration.encryptionAlgorithmOptions.defaultValue', props);
    return resource.getResponseField('signingConfiguration.encryptionAlgorithmOptions.defaultValue') as unknown as string;
  }

}

export class SignerFetchSigningPlatformSigningConfigurationHashAlgorithmOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerGetSigningPlatformRequest) {
    super(scope, id);
  }

  public get allowedValues(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningPlatform',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningPlatform.signingConfiguration.hashAlgorithmOptions.allowedValues'),
        outputPath: 'signingConfiguration.hashAlgorithmOptions.allowedValues',
        parameters: {
          platformId: this.input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningPlatform.signingConfiguration.hashAlgorithmOptions.allowedValues', props);
    return resource.getResponseField('signingConfiguration.hashAlgorithmOptions.allowedValues') as unknown as string[];
  }

  public get defaultValue(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningPlatform',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningPlatform.signingConfiguration.hashAlgorithmOptions.defaultValue'),
        outputPath: 'signingConfiguration.hashAlgorithmOptions.defaultValue',
        parameters: {
          platformId: this.input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningPlatform.signingConfiguration.hashAlgorithmOptions.defaultValue', props);
    return resource.getResponseField('signingConfiguration.hashAlgorithmOptions.defaultValue') as unknown as string;
  }

}

export class SignerFetchSigningPlatformSigningImageFormat extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerGetSigningPlatformRequest) {
    super(scope, id);
  }

  public get supportedFormats(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningPlatform',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningPlatform.signingImageFormat.supportedFormats'),
        outputPath: 'signingImageFormat.supportedFormats',
        parameters: {
          platformId: this.input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningPlatform.signingImageFormat.supportedFormats', props);
    return resource.getResponseField('signingImageFormat.supportedFormats') as unknown as string[];
  }

  public get defaultFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningPlatform',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningPlatform.signingImageFormat.defaultFormat'),
        outputPath: 'signingImageFormat.defaultFormat',
        parameters: {
          platformId: this.input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningPlatform.signingImageFormat.defaultFormat', props);
    return resource.getResponseField('signingImageFormat.defaultFormat') as unknown as string;
  }

}

export class SignerFetchSigningProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerGetSigningProfileRequest) {
    super(scope, id);
  }

  public get profileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningProfile.profileName'),
        outputPath: 'profileName',
        parameters: {
          profileName: this.input.profileName,
          profileOwner: this.input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningProfile.profileName', props);
    return resource.getResponseField('profileName') as unknown as string;
  }

  public get profileVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningProfile.profileVersion'),
        outputPath: 'profileVersion',
        parameters: {
          profileName: this.input.profileName,
          profileOwner: this.input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningProfile.profileVersion', props);
    return resource.getResponseField('profileVersion') as unknown as string;
  }

  public get profileVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningProfile.profileVersionArn'),
        outputPath: 'profileVersionArn',
        parameters: {
          profileName: this.input.profileName,
          profileOwner: this.input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningProfile.profileVersionArn', props);
    return resource.getResponseField('profileVersionArn') as unknown as string;
  }

  public get revocationRecord(): SignerFetchSigningProfileRevocationRecord {
    return new SignerFetchSigningProfileRevocationRecord(this, 'RevocationRecord', this.__resources, this.input);
  }

  public get signingMaterial(): SignerFetchSigningProfileSigningMaterial {
    return new SignerFetchSigningProfileSigningMaterial(this, 'SigningMaterial', this.__resources, this.input);
  }

  public get platformId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningProfile.platformId'),
        outputPath: 'platformId',
        parameters: {
          profileName: this.input.profileName,
          profileOwner: this.input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningProfile.platformId', props);
    return resource.getResponseField('platformId') as unknown as string;
  }

  public get platformDisplayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningProfile.platformDisplayName'),
        outputPath: 'platformDisplayName',
        parameters: {
          profileName: this.input.profileName,
          profileOwner: this.input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningProfile.platformDisplayName', props);
    return resource.getResponseField('platformDisplayName') as unknown as string;
  }

  public get signatureValidityPeriod(): SignerFetchSigningProfileSignatureValidityPeriod {
    return new SignerFetchSigningProfileSignatureValidityPeriod(this, 'SignatureValidityPeriod', this.__resources, this.input);
  }

  public get overrides(): SignerFetchSigningProfileOverrides {
    return new SignerFetchSigningProfileOverrides(this, 'Overrides', this.__resources, this.input);
  }

  public get signingParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningProfile.signingParameters'),
        outputPath: 'signingParameters',
        parameters: {
          profileName: this.input.profileName,
          profileOwner: this.input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningProfile.signingParameters', props);
    return resource.getResponseField('signingParameters') as unknown as Record<string, string>;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningProfile.status'),
        outputPath: 'status',
        parameters: {
          profileName: this.input.profileName,
          profileOwner: this.input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningProfile.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningProfile.statusReason'),
        outputPath: 'statusReason',
        parameters: {
          profileName: this.input.profileName,
          profileOwner: this.input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningProfile.statusReason', props);
    return resource.getResponseField('statusReason') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningProfile.arn'),
        outputPath: 'arn',
        parameters: {
          profileName: this.input.profileName,
          profileOwner: this.input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningProfile.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningProfile.tags'),
        outputPath: 'tags',
        parameters: {
          profileName: this.input.profileName,
          profileOwner: this.input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningProfile.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class SignerFetchSigningProfileRevocationRecord extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerGetSigningProfileRequest) {
    super(scope, id);
  }

  public get revocationEffectiveFrom(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningProfile.revocationRecord.revocationEffectiveFrom'),
        outputPath: 'revocationRecord.revocationEffectiveFrom',
        parameters: {
          profileName: this.input.profileName,
          profileOwner: this.input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningProfile.revocationRecord.revocationEffectiveFrom', props);
    return resource.getResponseField('revocationRecord.revocationEffectiveFrom') as unknown as string;
  }

  public get revokedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningProfile.revocationRecord.revokedAt'),
        outputPath: 'revocationRecord.revokedAt',
        parameters: {
          profileName: this.input.profileName,
          profileOwner: this.input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningProfile.revocationRecord.revokedAt', props);
    return resource.getResponseField('revocationRecord.revokedAt') as unknown as string;
  }

  public get revokedBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningProfile.revocationRecord.revokedBy'),
        outputPath: 'revocationRecord.revokedBy',
        parameters: {
          profileName: this.input.profileName,
          profileOwner: this.input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningProfile.revocationRecord.revokedBy', props);
    return resource.getResponseField('revocationRecord.revokedBy') as unknown as string;
  }

}

export class SignerFetchSigningProfileSigningMaterial extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerGetSigningProfileRequest) {
    super(scope, id);
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningProfile.signingMaterial.certificateArn'),
        outputPath: 'signingMaterial.certificateArn',
        parameters: {
          profileName: this.input.profileName,
          profileOwner: this.input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningProfile.signingMaterial.certificateArn', props);
    return resource.getResponseField('signingMaterial.certificateArn') as unknown as string;
  }

}

export class SignerFetchSigningProfileSignatureValidityPeriod extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerGetSigningProfileRequest) {
    super(scope, id);
  }

  public get value(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningProfile.signatureValidityPeriod.value'),
        outputPath: 'signatureValidityPeriod.value',
        parameters: {
          profileName: this.input.profileName,
          profileOwner: this.input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningProfile.signatureValidityPeriod.value', props);
    return resource.getResponseField('signatureValidityPeriod.value') as unknown as number;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningProfile.signatureValidityPeriod.type'),
        outputPath: 'signatureValidityPeriod.type',
        parameters: {
          profileName: this.input.profileName,
          profileOwner: this.input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningProfile.signatureValidityPeriod.type', props);
    return resource.getResponseField('signatureValidityPeriod.type') as unknown as string;
  }

}

export class SignerFetchSigningProfileOverrides extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerGetSigningProfileRequest) {
    super(scope, id);
  }

  public get signingConfiguration(): SignerFetchSigningProfileOverridesSigningConfiguration {
    return new SignerFetchSigningProfileOverridesSigningConfiguration(this, 'SigningConfiguration', this.__resources, this.input);
  }

  public get signingImageFormat(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningProfile.overrides.signingImageFormat'),
        outputPath: 'overrides.signingImageFormat',
        parameters: {
          profileName: this.input.profileName,
          profileOwner: this.input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningProfile.overrides.signingImageFormat', props);
    return resource.getResponseField('overrides.signingImageFormat') as unknown as string;
  }

}

export class SignerFetchSigningProfileOverridesSigningConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerGetSigningProfileRequest) {
    super(scope, id);
  }

  public get encryptionAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningProfile.overrides.signingConfiguration.encryptionAlgorithm'),
        outputPath: 'overrides.signingConfiguration.encryptionAlgorithm',
        parameters: {
          profileName: this.input.profileName,
          profileOwner: this.input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningProfile.overrides.signingConfiguration.encryptionAlgorithm', props);
    return resource.getResponseField('overrides.signingConfiguration.encryptionAlgorithm') as unknown as string;
  }

  public get hashAlgorithm(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.GetSigningProfile.overrides.signingConfiguration.hashAlgorithm'),
        outputPath: 'overrides.signingConfiguration.hashAlgorithm',
        parameters: {
          profileName: this.input.profileName,
          profileOwner: this.input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetSigningProfile.overrides.signingConfiguration.hashAlgorithm', props);
    return resource.getResponseField('overrides.signingConfiguration.hashAlgorithm') as unknown as string;
  }

}

export class SignerListProfilePermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerListProfilePermissionsRequest) {
    super(scope, id);
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProfilePermissions',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.ListProfilePermissions.revisionId'),
        outputPath: 'revisionId',
        parameters: {
          profileName: this.input.profileName,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProfilePermissions.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

  public get policySizeBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProfilePermissions',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.ListProfilePermissions.policySizeBytes'),
        outputPath: 'policySizeBytes',
        parameters: {
          profileName: this.input.profileName,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProfilePermissions.policySizeBytes', props);
    return resource.getResponseField('policySizeBytes') as unknown as number;
  }

  public get permissions(): shapes.SignerPermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProfilePermissions',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.ListProfilePermissions.permissions'),
        outputPath: 'permissions',
        parameters: {
          profileName: this.input.profileName,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProfilePermissions.permissions', props);
    return resource.getResponseField('permissions') as unknown as shapes.SignerPermission[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProfilePermissions',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.ListProfilePermissions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          profileName: this.input.profileName,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProfilePermissions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SignerListSigningJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerListSigningJobsRequest) {
    super(scope, id);
  }

  public get jobs(): shapes.SignerSigningJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSigningJobs',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.ListSigningJobs.jobs'),
        outputPath: 'jobs',
        parameters: {
          status: this.input.status,
          platformId: this.input.platformId,
          requestedBy: this.input.requestedBy,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          isRevoked: this.input.isRevoked,
          signatureExpiresBefore: this.input.signatureExpiresBefore,
          signatureExpiresAfter: this.input.signatureExpiresAfter,
          jobInvoker: this.input.jobInvoker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSigningJobs.jobs', props);
    return resource.getResponseField('jobs') as unknown as shapes.SignerSigningJob[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSigningJobs',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.ListSigningJobs.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          status: this.input.status,
          platformId: this.input.platformId,
          requestedBy: this.input.requestedBy,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          isRevoked: this.input.isRevoked,
          signatureExpiresBefore: this.input.signatureExpiresBefore,
          signatureExpiresAfter: this.input.signatureExpiresAfter,
          jobInvoker: this.input.jobInvoker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSigningJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SignerListSigningPlatforms extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerListSigningPlatformsRequest) {
    super(scope, id);
  }

  public get platforms(): shapes.SignerSigningPlatform[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSigningPlatforms',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.ListSigningPlatforms.platforms'),
        outputPath: 'platforms',
        parameters: {
          category: this.input.category,
          partner: this.input.partner,
          target: this.input.target,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSigningPlatforms.platforms', props);
    return resource.getResponseField('platforms') as unknown as shapes.SignerSigningPlatform[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSigningPlatforms',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.ListSigningPlatforms.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          category: this.input.category,
          partner: this.input.partner,
          target: this.input.target,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSigningPlatforms.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SignerListSigningProfiles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerListSigningProfilesRequest) {
    super(scope, id);
  }

  public get profiles(): shapes.SignerSigningProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSigningProfiles',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.ListSigningProfiles.profiles'),
        outputPath: 'profiles',
        parameters: {
          includeCanceled: this.input.includeCanceled,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          platformId: this.input.platformId,
          statuses: this.input.statuses,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSigningProfiles.profiles', props);
    return resource.getResponseField('profiles') as unknown as shapes.SignerSigningProfile[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSigningProfiles',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.ListSigningProfiles.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          includeCanceled: this.input.includeCanceled,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
          platformId: this.input.platformId,
          statuses: this.input.statuses,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSigningProfiles.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SignerListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class SignerPutSigningProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerPutSigningProfileRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.PutSigningProfile.arn'),
        outputPath: 'arn',
        parameters: {
          profileName: this.input.profileName,
          signingMaterial: {
            certificateArn: this.input.signingMaterial?.certificateArn,
          },
          signatureValidityPeriod: {
            value: this.input.signatureValidityPeriod?.value,
            type: this.input.signatureValidityPeriod?.type,
          },
          platformId: this.input.platformId,
          overrides: {
            signingConfiguration: {
              encryptionAlgorithm: this.input.overrides?.signingConfiguration?.encryptionAlgorithm,
              hashAlgorithm: this.input.overrides?.signingConfiguration?.hashAlgorithm,
            },
            signingImageFormat: this.input.overrides?.signingImageFormat,
          },
          signingParameters: this.input.signingParameters,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutSigningProfile.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get profileVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.PutSigningProfile.profileVersion'),
        outputPath: 'profileVersion',
        parameters: {
          profileName: this.input.profileName,
          signingMaterial: {
            certificateArn: this.input.signingMaterial?.certificateArn,
          },
          signatureValidityPeriod: {
            value: this.input.signatureValidityPeriod?.value,
            type: this.input.signatureValidityPeriod?.type,
          },
          platformId: this.input.platformId,
          overrides: {
            signingConfiguration: {
              encryptionAlgorithm: this.input.overrides?.signingConfiguration?.encryptionAlgorithm,
              hashAlgorithm: this.input.overrides?.signingConfiguration?.hashAlgorithm,
            },
            signingImageFormat: this.input.overrides?.signingImageFormat,
          },
          signingParameters: this.input.signingParameters,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutSigningProfile.profileVersion', props);
    return resource.getResponseField('profileVersion') as unknown as string;
  }

  public get profileVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putSigningProfile',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.PutSigningProfile.profileVersionArn'),
        outputPath: 'profileVersionArn',
        parameters: {
          profileName: this.input.profileName,
          signingMaterial: {
            certificateArn: this.input.signingMaterial?.certificateArn,
          },
          signatureValidityPeriod: {
            value: this.input.signatureValidityPeriod?.value,
            type: this.input.signatureValidityPeriod?.type,
          },
          platformId: this.input.platformId,
          overrides: {
            signingConfiguration: {
              encryptionAlgorithm: this.input.overrides?.signingConfiguration?.encryptionAlgorithm,
              hashAlgorithm: this.input.overrides?.signingConfiguration?.hashAlgorithm,
            },
            signingImageFormat: this.input.overrides?.signingImageFormat,
          },
          signingParameters: this.input.signingParameters,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutSigningProfile.profileVersionArn', props);
    return resource.getResponseField('profileVersionArn') as unknown as string;
  }

}

export class SignerRemoveProfilePermission extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerRemoveProfilePermissionRequest) {
    super(scope, id);
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeProfilePermission',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.RemoveProfilePermission.revisionId'),
        outputPath: 'revisionId',
        parameters: {
          profileName: this.input.profileName,
          revisionId: this.input.revisionId,
          statementId: this.input.statementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveProfilePermission.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

}

export class SignerStartSigningJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.SignerStartSigningJobRequest) {
    super(scope, id);
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.StartSigningJob.jobId'),
        outputPath: 'jobId',
        parameters: {
          source: {
            s3: {
              bucketName: this.input.source.s3?.bucketName,
              key: this.input.source.s3?.key,
              version: this.input.source.s3?.version,
            },
          },
          destination: {
            s3: {
              bucketName: this.input.destination.s3?.bucketName,
              prefix: this.input.destination.s3?.prefix,
            },
          },
          profileName: this.input.profileName,
          clientRequestToken: this.input.clientRequestToken,
          profileOwner: this.input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSigningJob.jobId', props);
    return resource.getResponseField('jobId') as unknown as string;
  }

  public get jobOwner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSigningJob',
        service: 'Signer',
        physicalResourceId: cr.PhysicalResourceId.of('Signer.StartSigningJob.jobOwner'),
        outputPath: 'jobOwner',
        parameters: {
          source: {
            s3: {
              bucketName: this.input.source.s3?.bucketName,
              key: this.input.source.s3?.key,
              version: this.input.source.s3?.version,
            },
          },
          destination: {
            s3: {
              bucketName: this.input.destination.s3?.bucketName,
              prefix: this.input.destination.s3?.prefix,
            },
          },
          profileName: this.input.profileName,
          clientRequestToken: this.input.clientRequestToken,
          profileOwner: this.input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSigningJob.jobOwner', props);
    return resource.getResponseField('jobOwner') as unknown as string;
  }

}

