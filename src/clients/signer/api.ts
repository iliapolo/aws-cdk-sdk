import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class SignerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addProfilePermission(input: shapes.SignerAddProfilePermissionRequest): SignerResponsesAddProfilePermission {
    return new SignerResponsesAddProfilePermission(this, this.__resources, input);
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

  public describeSigningJob(input: shapes.SignerDescribeSigningJobRequest): SignerResponsesDescribeSigningJob {
    return new SignerResponsesDescribeSigningJob(this, this.__resources, input);
  }

  public fetchSigningPlatform(input: shapes.SignerGetSigningPlatformRequest): SignerResponsesFetchSigningPlatform {
    return new SignerResponsesFetchSigningPlatform(this, this.__resources, input);
  }

  public fetchSigningProfile(input: shapes.SignerGetSigningProfileRequest): SignerResponsesFetchSigningProfile {
    return new SignerResponsesFetchSigningProfile(this, this.__resources, input);
  }

  public listProfilePermissions(input: shapes.SignerListProfilePermissionsRequest): SignerResponsesListProfilePermissions {
    return new SignerResponsesListProfilePermissions(this, this.__resources, input);
  }

  public listSigningJobs(input: shapes.SignerListSigningJobsRequest): SignerResponsesListSigningJobs {
    return new SignerResponsesListSigningJobs(this, this.__resources, input);
  }

  public listSigningPlatforms(input: shapes.SignerListSigningPlatformsRequest): SignerResponsesListSigningPlatforms {
    return new SignerResponsesListSigningPlatforms(this, this.__resources, input);
  }

  public listSigningProfiles(input: shapes.SignerListSigningProfilesRequest): SignerResponsesListSigningProfiles {
    return new SignerResponsesListSigningProfiles(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.SignerListTagsForResourceRequest): SignerResponsesListTagsForResource {
    return new SignerResponsesListTagsForResource(this, this.__resources, input);
  }

  public putSigningProfile(input: shapes.SignerPutSigningProfileRequest): SignerResponsesPutSigningProfile {
    return new SignerResponsesPutSigningProfile(this, this.__resources, input);
  }

  public removeProfilePermission(input: shapes.SignerRemoveProfilePermissionRequest): SignerResponsesRemoveProfilePermission {
    return new SignerResponsesRemoveProfilePermission(this, this.__resources, input);
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

  public startSigningJob(input: shapes.SignerStartSigningJobRequest): SignerResponsesStartSigningJob {
    return new SignerResponsesStartSigningJob(this, this.__resources, input);
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

export class SignerResponsesAddProfilePermission {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerAddProfilePermissionRequest) {
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
          profileName: this.__input.profileName,
          profileVersion: this.__input.profileVersion,
          action: this.__input.action,
          principal: this.__input.principal,
          revisionId: this.__input.revisionId,
          statementId: this.__input.statementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddProfilePermission.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

}

export class SignerResponsesDescribeSigningJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerDescribeSigningJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.jobId', props);
    return resource.getResponseField('jobId') as unknown as string;
  }

  public get source(): SignerResponsesDescribeSigningJobSource {
    return new SignerResponsesDescribeSigningJobSource(this.__scope, this.__resources, this.__input);
  }

  public get signingMaterial(): SignerResponsesDescribeSigningJobSigningMaterial {
    return new SignerResponsesDescribeSigningJobSigningMaterial(this.__scope, this.__resources, this.__input);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.platformId', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.platformDisplayName', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.profileName', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.profileVersion', props);
    return resource.getResponseField('profileVersion') as unknown as string;
  }

  public get overrides(): SignerResponsesDescribeSigningJobOverrides {
    return new SignerResponsesDescribeSigningJobOverrides(this.__scope, this.__resources, this.__input);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.signingParameters', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.createdAt', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.completedAt', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.signatureExpiresAt', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.requestedBy', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.status', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.statusReason', props);
    return resource.getResponseField('statusReason') as unknown as string;
  }

  public get revocationRecord(): SignerResponsesDescribeSigningJobRevocationRecord {
    return new SignerResponsesDescribeSigningJobRevocationRecord(this.__scope, this.__resources, this.__input);
  }

  public get signedObject(): SignerResponsesDescribeSigningJobSignedObject {
    return new SignerResponsesDescribeSigningJobSignedObject(this.__scope, this.__resources, this.__input);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.jobOwner', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.jobInvoker', props);
    return resource.getResponseField('jobInvoker') as unknown as string;
  }

}

export class SignerResponsesDescribeSigningJobSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerDescribeSigningJobRequest) {
  }

  public get s3(): SignerResponsesDescribeSigningJobSourceS3 {
    return new SignerResponsesDescribeSigningJobSourceS3(this.__scope, this.__resources, this.__input);
  }

}

export class SignerResponsesDescribeSigningJobSourceS3 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerDescribeSigningJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.source.s3.bucketName', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.source.s3.key', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.source.s3.version', props);
    return resource.getResponseField('source.s3.version') as unknown as string;
  }

}

export class SignerResponsesDescribeSigningJobSigningMaterial {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerDescribeSigningJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.signingMaterial.certificateArn', props);
    return resource.getResponseField('signingMaterial.certificateArn') as unknown as string;
  }

}

export class SignerResponsesDescribeSigningJobOverrides {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerDescribeSigningJobRequest) {
  }

  public get signingConfiguration(): SignerResponsesDescribeSigningJobOverridesSigningConfiguration {
    return new SignerResponsesDescribeSigningJobOverridesSigningConfiguration(this.__scope, this.__resources, this.__input);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.overrides.signingImageFormat', props);
    return resource.getResponseField('overrides.signingImageFormat') as unknown as string;
  }

}

export class SignerResponsesDescribeSigningJobOverridesSigningConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerDescribeSigningJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.overrides.signingConfiguration.encryptionAlgorithm', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.overrides.signingConfiguration.hashAlgorithm', props);
    return resource.getResponseField('overrides.signingConfiguration.hashAlgorithm') as unknown as string;
  }

}

export class SignerResponsesDescribeSigningJobRevocationRecord {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerDescribeSigningJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.revocationRecord.reason', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.revocationRecord.revokedAt', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.revocationRecord.revokedBy', props);
    return resource.getResponseField('revocationRecord.revokedBy') as unknown as string;
  }

}

export class SignerResponsesDescribeSigningJobSignedObject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerDescribeSigningJobRequest) {
  }

  public get s3(): SignerResponsesDescribeSigningJobSignedObjectS3 {
    return new SignerResponsesDescribeSigningJobSignedObjectS3(this.__scope, this.__resources, this.__input);
  }

}

export class SignerResponsesDescribeSigningJobSignedObjectS3 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerDescribeSigningJobRequest) {
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.signedObject.s3.bucketName', props);
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
          jobId: this.__input.jobId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSigningJob.signedObject.s3.key', props);
    return resource.getResponseField('signedObject.s3.key') as unknown as string;
  }

}

export class SignerResponsesFetchSigningPlatform {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerGetSigningPlatformRequest) {
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
          platformId: this.__input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningPlatform.platformId', props);
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
          platformId: this.__input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningPlatform.displayName', props);
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
          platformId: this.__input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningPlatform.partner', props);
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
          platformId: this.__input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningPlatform.target', props);
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
          platformId: this.__input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningPlatform.category', props);
    return resource.getResponseField('category') as unknown as string;
  }

  public get signingConfiguration(): SignerResponsesFetchSigningPlatformSigningConfiguration {
    return new SignerResponsesFetchSigningPlatformSigningConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get signingImageFormat(): SignerResponsesFetchSigningPlatformSigningImageFormat {
    return new SignerResponsesFetchSigningPlatformSigningImageFormat(this.__scope, this.__resources, this.__input);
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
          platformId: this.__input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningPlatform.maxSizeInMB', props);
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
          platformId: this.__input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningPlatform.revocationSupported', props);
    return resource.getResponseField('revocationSupported') as unknown as boolean;
  }

}

export class SignerResponsesFetchSigningPlatformSigningConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerGetSigningPlatformRequest) {
  }

  public get encryptionAlgorithmOptions(): SignerResponsesFetchSigningPlatformSigningConfigurationEncryptionAlgorithmOptions {
    return new SignerResponsesFetchSigningPlatformSigningConfigurationEncryptionAlgorithmOptions(this.__scope, this.__resources, this.__input);
  }

  public get hashAlgorithmOptions(): SignerResponsesFetchSigningPlatformSigningConfigurationHashAlgorithmOptions {
    return new SignerResponsesFetchSigningPlatformSigningConfigurationHashAlgorithmOptions(this.__scope, this.__resources, this.__input);
  }

}

export class SignerResponsesFetchSigningPlatformSigningConfigurationEncryptionAlgorithmOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerGetSigningPlatformRequest) {
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
          platformId: this.__input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningPlatform.signingConfiguration.encryptionAlgorithmOptions.allowedValues', props);
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
          platformId: this.__input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningPlatform.signingConfiguration.encryptionAlgorithmOptions.defaultValue', props);
    return resource.getResponseField('signingConfiguration.encryptionAlgorithmOptions.defaultValue') as unknown as string;
  }

}

export class SignerResponsesFetchSigningPlatformSigningConfigurationHashAlgorithmOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerGetSigningPlatformRequest) {
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
          platformId: this.__input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningPlatform.signingConfiguration.hashAlgorithmOptions.allowedValues', props);
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
          platformId: this.__input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningPlatform.signingConfiguration.hashAlgorithmOptions.defaultValue', props);
    return resource.getResponseField('signingConfiguration.hashAlgorithmOptions.defaultValue') as unknown as string;
  }

}

export class SignerResponsesFetchSigningPlatformSigningImageFormat {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerGetSigningPlatformRequest) {
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
          platformId: this.__input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningPlatform.signingImageFormat.supportedFormats', props);
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
          platformId: this.__input.platformId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningPlatform.signingImageFormat.defaultFormat', props);
    return resource.getResponseField('signingImageFormat.defaultFormat') as unknown as string;
  }

}

export class SignerResponsesFetchSigningProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerGetSigningProfileRequest) {
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
          profileName: this.__input.profileName,
          profileOwner: this.__input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningProfile.profileName', props);
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
          profileName: this.__input.profileName,
          profileOwner: this.__input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningProfile.profileVersion', props);
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
          profileName: this.__input.profileName,
          profileOwner: this.__input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningProfile.profileVersionArn', props);
    return resource.getResponseField('profileVersionArn') as unknown as string;
  }

  public get revocationRecord(): SignerResponsesFetchSigningProfileRevocationRecord {
    return new SignerResponsesFetchSigningProfileRevocationRecord(this.__scope, this.__resources, this.__input);
  }

  public get signingMaterial(): SignerResponsesFetchSigningProfileSigningMaterial {
    return new SignerResponsesFetchSigningProfileSigningMaterial(this.__scope, this.__resources, this.__input);
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
          profileName: this.__input.profileName,
          profileOwner: this.__input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningProfile.platformId', props);
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
          profileName: this.__input.profileName,
          profileOwner: this.__input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningProfile.platformDisplayName', props);
    return resource.getResponseField('platformDisplayName') as unknown as string;
  }

  public get signatureValidityPeriod(): SignerResponsesFetchSigningProfileSignatureValidityPeriod {
    return new SignerResponsesFetchSigningProfileSignatureValidityPeriod(this.__scope, this.__resources, this.__input);
  }

  public get overrides(): SignerResponsesFetchSigningProfileOverrides {
    return new SignerResponsesFetchSigningProfileOverrides(this.__scope, this.__resources, this.__input);
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
          profileName: this.__input.profileName,
          profileOwner: this.__input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningProfile.signingParameters', props);
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
          profileName: this.__input.profileName,
          profileOwner: this.__input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningProfile.status', props);
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
          profileName: this.__input.profileName,
          profileOwner: this.__input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningProfile.statusReason', props);
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
          profileName: this.__input.profileName,
          profileOwner: this.__input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningProfile.arn', props);
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
          profileName: this.__input.profileName,
          profileOwner: this.__input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningProfile.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class SignerResponsesFetchSigningProfileRevocationRecord {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerGetSigningProfileRequest) {
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
          profileName: this.__input.profileName,
          profileOwner: this.__input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningProfile.revocationRecord.revocationEffectiveFrom', props);
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
          profileName: this.__input.profileName,
          profileOwner: this.__input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningProfile.revocationRecord.revokedAt', props);
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
          profileName: this.__input.profileName,
          profileOwner: this.__input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningProfile.revocationRecord.revokedBy', props);
    return resource.getResponseField('revocationRecord.revokedBy') as unknown as string;
  }

}

export class SignerResponsesFetchSigningProfileSigningMaterial {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerGetSigningProfileRequest) {
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
          profileName: this.__input.profileName,
          profileOwner: this.__input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningProfile.signingMaterial.certificateArn', props);
    return resource.getResponseField('signingMaterial.certificateArn') as unknown as string;
  }

}

export class SignerResponsesFetchSigningProfileSignatureValidityPeriod {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerGetSigningProfileRequest) {
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
          profileName: this.__input.profileName,
          profileOwner: this.__input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningProfile.signatureValidityPeriod.value', props);
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
          profileName: this.__input.profileName,
          profileOwner: this.__input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningProfile.signatureValidityPeriod.type', props);
    return resource.getResponseField('signatureValidityPeriod.type') as unknown as string;
  }

}

export class SignerResponsesFetchSigningProfileOverrides {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerGetSigningProfileRequest) {
  }

  public get signingConfiguration(): SignerResponsesFetchSigningProfileOverridesSigningConfiguration {
    return new SignerResponsesFetchSigningProfileOverridesSigningConfiguration(this.__scope, this.__resources, this.__input);
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
          profileName: this.__input.profileName,
          profileOwner: this.__input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningProfile.overrides.signingImageFormat', props);
    return resource.getResponseField('overrides.signingImageFormat') as unknown as string;
  }

}

export class SignerResponsesFetchSigningProfileOverridesSigningConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerGetSigningProfileRequest) {
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
          profileName: this.__input.profileName,
          profileOwner: this.__input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningProfile.overrides.signingConfiguration.encryptionAlgorithm', props);
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
          profileName: this.__input.profileName,
          profileOwner: this.__input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetSigningProfile.overrides.signingConfiguration.hashAlgorithm', props);
    return resource.getResponseField('overrides.signingConfiguration.hashAlgorithm') as unknown as string;
  }

}

export class SignerResponsesListProfilePermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerListProfilePermissionsRequest) {
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
          profileName: this.__input.profileName,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProfilePermissions.revisionId', props);
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
          profileName: this.__input.profileName,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProfilePermissions.policySizeBytes', props);
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
          profileName: this.__input.profileName,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProfilePermissions.permissions', props);
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
          profileName: this.__input.profileName,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProfilePermissions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SignerResponsesListSigningJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerListSigningJobsRequest) {
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
          status: this.__input.status,
          platformId: this.__input.platformId,
          requestedBy: this.__input.requestedBy,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          isRevoked: this.__input.isRevoked,
          signatureExpiresBefore: this.__input.signatureExpiresBefore,
          signatureExpiresAfter: this.__input.signatureExpiresAfter,
          jobInvoker: this.__input.jobInvoker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSigningJobs.jobs', props);
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
          status: this.__input.status,
          platformId: this.__input.platformId,
          requestedBy: this.__input.requestedBy,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          isRevoked: this.__input.isRevoked,
          signatureExpiresBefore: this.__input.signatureExpiresBefore,
          signatureExpiresAfter: this.__input.signatureExpiresAfter,
          jobInvoker: this.__input.jobInvoker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSigningJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SignerResponsesListSigningPlatforms {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerListSigningPlatformsRequest) {
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
          category: this.__input.category,
          partner: this.__input.partner,
          target: this.__input.target,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSigningPlatforms.platforms', props);
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
          category: this.__input.category,
          partner: this.__input.partner,
          target: this.__input.target,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSigningPlatforms.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SignerResponsesListSigningProfiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerListSigningProfilesRequest) {
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
          includeCanceled: this.__input.includeCanceled,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          platformId: this.__input.platformId,
          statuses: this.__input.statuses,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSigningProfiles.profiles', props);
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
          includeCanceled: this.__input.includeCanceled,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          platformId: this.__input.platformId,
          statuses: this.__input.statuses,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSigningProfiles.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class SignerResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerListTagsForResourceRequest) {
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
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class SignerResponsesPutSigningProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerPutSigningProfileRequest) {
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
          profileName: this.__input.profileName,
          signingMaterial: {
            certificateArn: this.__input.signingMaterial?.certificateArn,
          },
          signatureValidityPeriod: {
            value: this.__input.signatureValidityPeriod?.value,
            type: this.__input.signatureValidityPeriod?.type,
          },
          platformId: this.__input.platformId,
          overrides: {
            signingConfiguration: {
              encryptionAlgorithm: this.__input.overrides?.signingConfiguration?.encryptionAlgorithm,
              hashAlgorithm: this.__input.overrides?.signingConfiguration?.hashAlgorithm,
            },
            signingImageFormat: this.__input.overrides?.signingImageFormat,
          },
          signingParameters: this.__input.signingParameters,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutSigningProfile.arn', props);
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
          profileName: this.__input.profileName,
          signingMaterial: {
            certificateArn: this.__input.signingMaterial?.certificateArn,
          },
          signatureValidityPeriod: {
            value: this.__input.signatureValidityPeriod?.value,
            type: this.__input.signatureValidityPeriod?.type,
          },
          platformId: this.__input.platformId,
          overrides: {
            signingConfiguration: {
              encryptionAlgorithm: this.__input.overrides?.signingConfiguration?.encryptionAlgorithm,
              hashAlgorithm: this.__input.overrides?.signingConfiguration?.hashAlgorithm,
            },
            signingImageFormat: this.__input.overrides?.signingImageFormat,
          },
          signingParameters: this.__input.signingParameters,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutSigningProfile.profileVersion', props);
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
          profileName: this.__input.profileName,
          signingMaterial: {
            certificateArn: this.__input.signingMaterial?.certificateArn,
          },
          signatureValidityPeriod: {
            value: this.__input.signatureValidityPeriod?.value,
            type: this.__input.signatureValidityPeriod?.type,
          },
          platformId: this.__input.platformId,
          overrides: {
            signingConfiguration: {
              encryptionAlgorithm: this.__input.overrides?.signingConfiguration?.encryptionAlgorithm,
              hashAlgorithm: this.__input.overrides?.signingConfiguration?.hashAlgorithm,
            },
            signingImageFormat: this.__input.overrides?.signingImageFormat,
          },
          signingParameters: this.__input.signingParameters,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutSigningProfile.profileVersionArn', props);
    return resource.getResponseField('profileVersionArn') as unknown as string;
  }

}

export class SignerResponsesRemoveProfilePermission {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerRemoveProfilePermissionRequest) {
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
          profileName: this.__input.profileName,
          revisionId: this.__input.revisionId,
          statementId: this.__input.statementId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveProfilePermission.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

}

export class SignerResponsesStartSigningJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.SignerStartSigningJobRequest) {
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
              bucketName: this.__input.source.s3?.bucketName,
              key: this.__input.source.s3?.key,
              version: this.__input.source.s3?.version,
            },
          },
          destination: {
            s3: {
              bucketName: this.__input.destination.s3?.bucketName,
              prefix: this.__input.destination.s3?.prefix,
            },
          },
          profileName: this.__input.profileName,
          clientRequestToken: this.__input.clientRequestToken,
          profileOwner: this.__input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSigningJob.jobId', props);
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
              bucketName: this.__input.source.s3?.bucketName,
              key: this.__input.source.s3?.key,
              version: this.__input.source.s3?.version,
            },
          },
          destination: {
            s3: {
              bucketName: this.__input.destination.s3?.bucketName,
              prefix: this.__input.destination.s3?.prefix,
            },
          },
          profileName: this.__input.profileName,
          clientRequestToken: this.__input.clientRequestToken,
          profileOwner: this.__input.profileOwner,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSigningJob.jobOwner', props);
    return resource.getResponseField('jobOwner') as unknown as string;
  }

}

