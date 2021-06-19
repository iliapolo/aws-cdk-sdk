import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class EcrClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchCheckLayerAvailability(input: shapes.EcrBatchCheckLayerAvailabilityRequest): ECRResponsesBatchCheckLayerAvailability {
    return new ECRResponsesBatchCheckLayerAvailability(this, this.__resources, input);
  }

  public batchDeleteImage(input: shapes.EcrBatchDeleteImageRequest): ECRResponsesBatchDeleteImage {
    return new ECRResponsesBatchDeleteImage(this, this.__resources, input);
  }

  public batchGetImage(input: shapes.EcrBatchGetImageRequest): ECRResponsesBatchGetImage {
    return new ECRResponsesBatchGetImage(this, this.__resources, input);
  }

  public completeLayerUpload(input: shapes.EcrCompleteLayerUploadRequest): ECRResponsesCompleteLayerUpload {
    return new ECRResponsesCompleteLayerUpload(this, this.__resources, input);
  }

  public createRepository(input: shapes.EcrCreateRepositoryRequest): ECRResponsesCreateRepository {
    return new ECRResponsesCreateRepository(this, this.__resources, input);
  }

  public deleteLifecyclePolicy(input: shapes.EcrDeleteLifecyclePolicyRequest): ECRResponsesDeleteLifecyclePolicy {
    return new ECRResponsesDeleteLifecyclePolicy(this, this.__resources, input);
  }

  public deleteRepository(input: shapes.EcrDeleteRepositoryRequest): ECRResponsesDeleteRepository {
    return new ECRResponsesDeleteRepository(this, this.__resources, input);
  }

  public deleteRepositoryPolicy(input: shapes.EcrDeleteRepositoryPolicyRequest): ECRResponsesDeleteRepositoryPolicy {
    return new ECRResponsesDeleteRepositoryPolicy(this, this.__resources, input);
  }

  public describeImageScanFindings(input: shapes.EcrDescribeImageScanFindingsRequest): ECRResponsesDescribeImageScanFindings {
    return new ECRResponsesDescribeImageScanFindings(this, this.__resources, input);
  }

  public describeImages(input: shapes.EcrDescribeImagesRequest): ECRResponsesDescribeImages {
    return new ECRResponsesDescribeImages(this, this.__resources, input);
  }

  public describeRepositories(input: shapes.EcrDescribeRepositoriesRequest): ECRResponsesDescribeRepositories {
    return new ECRResponsesDescribeRepositories(this, this.__resources, input);
  }

  public fetchAuthorizationToken(input: shapes.EcrGetAuthorizationTokenRequest): ECRResponsesFetchAuthorizationToken {
    return new ECRResponsesFetchAuthorizationToken(this, this.__resources, input);
  }

  public fetchDownloadUrlForLayer(input: shapes.EcrGetDownloadUrlForLayerRequest): ECRResponsesFetchDownloadUrlForLayer {
    return new ECRResponsesFetchDownloadUrlForLayer(this, this.__resources, input);
  }

  public fetchLifecyclePolicy(input: shapes.EcrGetLifecyclePolicyRequest): ECRResponsesFetchLifecyclePolicy {
    return new ECRResponsesFetchLifecyclePolicy(this, this.__resources, input);
  }

  public fetchLifecyclePolicyPreview(input: shapes.EcrGetLifecyclePolicyPreviewRequest): ECRResponsesFetchLifecyclePolicyPreview {
    return new ECRResponsesFetchLifecyclePolicyPreview(this, this.__resources, input);
  }

  public fetchRepositoryPolicy(input: shapes.EcrGetRepositoryPolicyRequest): ECRResponsesFetchRepositoryPolicy {
    return new ECRResponsesFetchRepositoryPolicy(this, this.__resources, input);
  }

  public initiateLayerUpload(input: shapes.EcrInitiateLayerUploadRequest): ECRResponsesInitiateLayerUpload {
    return new ECRResponsesInitiateLayerUpload(this, this.__resources, input);
  }

  public listImages(input: shapes.EcrListImagesRequest): ECRResponsesListImages {
    return new ECRResponsesListImages(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.EcrListTagsForResourceRequest): ECRResponsesListTagsForResource {
    return new ECRResponsesListTagsForResource(this, this.__resources, input);
  }

  public putImage(input: shapes.EcrPutImageRequest): ECRResponsesPutImage {
    return new ECRResponsesPutImage(this, this.__resources, input);
  }

  public putImageScanningConfiguration(input: shapes.EcrPutImageScanningConfigurationRequest): ECRResponsesPutImageScanningConfiguration {
    return new ECRResponsesPutImageScanningConfiguration(this, this.__resources, input);
  }

  public putImageTagMutability(input: shapes.EcrPutImageTagMutabilityRequest): ECRResponsesPutImageTagMutability {
    return new ECRResponsesPutImageTagMutability(this, this.__resources, input);
  }

  public putLifecyclePolicy(input: shapes.EcrPutLifecyclePolicyRequest): ECRResponsesPutLifecyclePolicy {
    return new ECRResponsesPutLifecyclePolicy(this, this.__resources, input);
  }

  public setRepositoryPolicy(input: shapes.EcrSetRepositoryPolicyRequest): ECRResponsesSetRepositoryPolicy {
    return new ECRResponsesSetRepositoryPolicy(this, this.__resources, input);
  }

  public startImageScan(input: shapes.EcrStartImageScanRequest): ECRResponsesStartImageScan {
    return new ECRResponsesStartImageScan(this, this.__resources, input);
  }

  public startLifecyclePolicyPreview(input: shapes.EcrStartLifecyclePolicyPreviewRequest): ECRResponsesStartLifecyclePolicyPreview {
    return new ECRResponsesStartLifecyclePolicyPreview(this, this.__resources, input);
  }

  public tagResource(input: shapes.EcrTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.EcrUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public uploadLayerPart(input: shapes.EcrUploadLayerPartRequest): ECRResponsesUploadLayerPart {
    return new ECRResponsesUploadLayerPart(this, this.__resources, input);
  }

}

export class ECRResponsesBatchCheckLayerAvailability {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrBatchCheckLayerAvailabilityRequest) {
  }

  public get layers(): shapes.EcrLayer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchCheckLayerAvailability',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.BatchCheckLayerAvailability.layers'),
        outputPath: 'layers',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          layerDigests: this.__input.layerDigests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchCheckLayerAvailability.layers', props);
    return resource.getResponseField('layers') as unknown as shapes.EcrLayer[];
  }

  public get failures(): shapes.EcrLayerFailure[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchCheckLayerAvailability',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.BatchCheckLayerAvailability.failures'),
        outputPath: 'failures',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          layerDigests: this.__input.layerDigests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchCheckLayerAvailability.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcrLayerFailure[];
  }

}

export class ECRResponsesBatchDeleteImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrBatchDeleteImageRequest) {
  }

  public get imageIds(): shapes.EcrImageIdentifier[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteImage',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.BatchDeleteImage.imageIds'),
        outputPath: 'imageIds',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageIds: this.__input.imageIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDeleteImage.imageIds', props);
    return resource.getResponseField('imageIds') as unknown as shapes.EcrImageIdentifier[];
  }

  public get failures(): shapes.EcrImageFailure[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteImage',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.BatchDeleteImage.failures'),
        outputPath: 'failures',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageIds: this.__input.imageIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDeleteImage.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcrImageFailure[];
  }

}

export class ECRResponsesBatchGetImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrBatchGetImageRequest) {
  }

  public get images(): shapes.EcrImage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetImage',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.BatchGetImage.images'),
        outputPath: 'images',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageIds: this.__input.imageIds,
          acceptedMediaTypes: this.__input.acceptedMediaTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetImage.images', props);
    return resource.getResponseField('images') as unknown as shapes.EcrImage[];
  }

  public get failures(): shapes.EcrImageFailure[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchGetImage',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.BatchGetImage.failures'),
        outputPath: 'failures',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageIds: this.__input.imageIds,
          acceptedMediaTypes: this.__input.acceptedMediaTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchGetImage.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcrImageFailure[];
  }

}

export class ECRResponsesCompleteLayerUpload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrCompleteLayerUploadRequest) {
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeLayerUpload',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.CompleteLayerUpload.registryId'),
        outputPath: 'registryId',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          uploadId: this.__input.uploadId,
          layerDigests: this.__input.layerDigests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteLayerUpload.registryId', props);
    return resource.getResponseField('registryId') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeLayerUpload',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.CompleteLayerUpload.repositoryName'),
        outputPath: 'repositoryName',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          uploadId: this.__input.uploadId,
          layerDigests: this.__input.layerDigests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteLayerUpload.repositoryName', props);
    return resource.getResponseField('repositoryName') as unknown as string;
  }

  public get uploadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeLayerUpload',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.CompleteLayerUpload.uploadId'),
        outputPath: 'uploadId',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          uploadId: this.__input.uploadId,
          layerDigests: this.__input.layerDigests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteLayerUpload.uploadId', props);
    return resource.getResponseField('uploadId') as unknown as string;
  }

  public get layerDigest(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeLayerUpload',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.CompleteLayerUpload.layerDigest'),
        outputPath: 'layerDigest',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          uploadId: this.__input.uploadId,
          layerDigests: this.__input.layerDigests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteLayerUpload.layerDigest', props);
    return resource.getResponseField('layerDigest') as unknown as string;
  }

}

export class ECRResponsesCreateRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrCreateRepositoryRequest) {
  }

  public get repository(): ECRResponsesCreateRepositoryRepository {
    return new ECRResponsesCreateRepositoryRepository(this.__scope, this.__resources, this.__input);
  }

}

export class ECRResponsesCreateRepositoryRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrCreateRepositoryRequest) {
  }

  public get repositoryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.CreateRepository.repository.repositoryArn'),
        outputPath: 'repository.repositoryArn',
        parameters: {
          repositoryName: this.__input.repositoryName,
          tags: this.__input.tags,
          imageTagMutability: this.__input.imageTagMutability,
          imageScanningConfiguration: {
            scanOnPush: this.__input.imageScanningConfiguration?.scanOnPush,
          },
          encryptionConfiguration: {
            encryptionType: this.__input.encryptionConfiguration?.encryptionType,
            kmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repository.repositoryArn', props);
    return resource.getResponseField('repository.repositoryArn') as unknown as string;
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.CreateRepository.repository.registryId'),
        outputPath: 'repository.registryId',
        parameters: {
          repositoryName: this.__input.repositoryName,
          tags: this.__input.tags,
          imageTagMutability: this.__input.imageTagMutability,
          imageScanningConfiguration: {
            scanOnPush: this.__input.imageScanningConfiguration?.scanOnPush,
          },
          encryptionConfiguration: {
            encryptionType: this.__input.encryptionConfiguration?.encryptionType,
            kmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repository.registryId', props);
    return resource.getResponseField('repository.registryId') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.CreateRepository.repository.repositoryName'),
        outputPath: 'repository.repositoryName',
        parameters: {
          repositoryName: this.__input.repositoryName,
          tags: this.__input.tags,
          imageTagMutability: this.__input.imageTagMutability,
          imageScanningConfiguration: {
            scanOnPush: this.__input.imageScanningConfiguration?.scanOnPush,
          },
          encryptionConfiguration: {
            encryptionType: this.__input.encryptionConfiguration?.encryptionType,
            kmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repository.repositoryName', props);
    return resource.getResponseField('repository.repositoryName') as unknown as string;
  }

  public get repositoryUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.CreateRepository.repository.repositoryUri'),
        outputPath: 'repository.repositoryUri',
        parameters: {
          repositoryName: this.__input.repositoryName,
          tags: this.__input.tags,
          imageTagMutability: this.__input.imageTagMutability,
          imageScanningConfiguration: {
            scanOnPush: this.__input.imageScanningConfiguration?.scanOnPush,
          },
          encryptionConfiguration: {
            encryptionType: this.__input.encryptionConfiguration?.encryptionType,
            kmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repository.repositoryUri', props);
    return resource.getResponseField('repository.repositoryUri') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.CreateRepository.repository.createdAt'),
        outputPath: 'repository.createdAt',
        parameters: {
          repositoryName: this.__input.repositoryName,
          tags: this.__input.tags,
          imageTagMutability: this.__input.imageTagMutability,
          imageScanningConfiguration: {
            scanOnPush: this.__input.imageScanningConfiguration?.scanOnPush,
          },
          encryptionConfiguration: {
            encryptionType: this.__input.encryptionConfiguration?.encryptionType,
            kmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repository.createdAt', props);
    return resource.getResponseField('repository.createdAt') as unknown as string;
  }

  public get imageTagMutability(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.CreateRepository.repository.imageTagMutability'),
        outputPath: 'repository.imageTagMutability',
        parameters: {
          repositoryName: this.__input.repositoryName,
          tags: this.__input.tags,
          imageTagMutability: this.__input.imageTagMutability,
          imageScanningConfiguration: {
            scanOnPush: this.__input.imageScanningConfiguration?.scanOnPush,
          },
          encryptionConfiguration: {
            encryptionType: this.__input.encryptionConfiguration?.encryptionType,
            kmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repository.imageTagMutability', props);
    return resource.getResponseField('repository.imageTagMutability') as unknown as string;
  }

  public get imageScanningConfiguration(): ECRResponsesCreateRepositoryRepositoryImageScanningConfiguration {
    return new ECRResponsesCreateRepositoryRepositoryImageScanningConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get encryptionConfiguration(): ECRResponsesCreateRepositoryRepositoryEncryptionConfiguration {
    return new ECRResponsesCreateRepositoryRepositoryEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ECRResponsesCreateRepositoryRepositoryImageScanningConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrCreateRepositoryRequest) {
  }

  public get scanOnPush(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.CreateRepository.repository.imageScanningConfiguration.scanOnPush'),
        outputPath: 'repository.imageScanningConfiguration.scanOnPush',
        parameters: {
          repositoryName: this.__input.repositoryName,
          tags: this.__input.tags,
          imageTagMutability: this.__input.imageTagMutability,
          imageScanningConfiguration: {
            scanOnPush: this.__input.imageScanningConfiguration?.scanOnPush,
          },
          encryptionConfiguration: {
            encryptionType: this.__input.encryptionConfiguration?.encryptionType,
            kmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repository.imageScanningConfiguration.scanOnPush', props);
    return resource.getResponseField('repository.imageScanningConfiguration.scanOnPush') as unknown as boolean;
  }

}

export class ECRResponsesCreateRepositoryRepositoryEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrCreateRepositoryRequest) {
  }

  public get encryptionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.CreateRepository.repository.encryptionConfiguration.encryptionType'),
        outputPath: 'repository.encryptionConfiguration.encryptionType',
        parameters: {
          repositoryName: this.__input.repositoryName,
          tags: this.__input.tags,
          imageTagMutability: this.__input.imageTagMutability,
          imageScanningConfiguration: {
            scanOnPush: this.__input.imageScanningConfiguration?.scanOnPush,
          },
          encryptionConfiguration: {
            encryptionType: this.__input.encryptionConfiguration?.encryptionType,
            kmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repository.encryptionConfiguration.encryptionType', props);
    return resource.getResponseField('repository.encryptionConfiguration.encryptionType') as unknown as string;
  }

  public get kmsKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.CreateRepository.repository.encryptionConfiguration.kmsKey'),
        outputPath: 'repository.encryptionConfiguration.kmsKey',
        parameters: {
          repositoryName: this.__input.repositoryName,
          tags: this.__input.tags,
          imageTagMutability: this.__input.imageTagMutability,
          imageScanningConfiguration: {
            scanOnPush: this.__input.imageScanningConfiguration?.scanOnPush,
          },
          encryptionConfiguration: {
            encryptionType: this.__input.encryptionConfiguration?.encryptionType,
            kmsKey: this.__input.encryptionConfiguration?.kmsKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repository.encryptionConfiguration.kmsKey', props);
    return resource.getResponseField('repository.encryptionConfiguration.kmsKey') as unknown as string;
  }

}

export class ECRResponsesDeleteLifecyclePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrDeleteLifecyclePolicyRequest) {
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLifecyclePolicy',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DeleteLifecyclePolicy.registryId'),
        outputPath: 'registryId',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLifecyclePolicy.registryId', props);
    return resource.getResponseField('registryId') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLifecyclePolicy',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DeleteLifecyclePolicy.repositoryName'),
        outputPath: 'repositoryName',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLifecyclePolicy.repositoryName', props);
    return resource.getResponseField('repositoryName') as unknown as string;
  }

  public get lifecyclePolicyText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLifecyclePolicy',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DeleteLifecyclePolicy.lifecyclePolicyText'),
        outputPath: 'lifecyclePolicyText',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLifecyclePolicy.lifecyclePolicyText', props);
    return resource.getResponseField('lifecyclePolicyText') as unknown as string;
  }

  public get lastEvaluatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLifecyclePolicy',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DeleteLifecyclePolicy.lastEvaluatedAt'),
        outputPath: 'lastEvaluatedAt',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteLifecyclePolicy.lastEvaluatedAt', props);
    return resource.getResponseField('lastEvaluatedAt') as unknown as string;
  }

}

export class ECRResponsesDeleteRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrDeleteRepositoryRequest) {
  }

  public get repository(): ECRResponsesDeleteRepositoryRepository {
    return new ECRResponsesDeleteRepositoryRepository(this.__scope, this.__resources, this.__input);
  }

}

export class ECRResponsesDeleteRepositoryRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrDeleteRepositoryRequest) {
  }

  public get repositoryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepository',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DeleteRepository.repository.repositoryArn'),
        outputPath: 'repository.repositoryArn',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepository.repository.repositoryArn', props);
    return resource.getResponseField('repository.repositoryArn') as unknown as string;
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepository',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DeleteRepository.repository.registryId'),
        outputPath: 'repository.registryId',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepository.repository.registryId', props);
    return resource.getResponseField('repository.registryId') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepository',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DeleteRepository.repository.repositoryName'),
        outputPath: 'repository.repositoryName',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepository.repository.repositoryName', props);
    return resource.getResponseField('repository.repositoryName') as unknown as string;
  }

  public get repositoryUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepository',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DeleteRepository.repository.repositoryUri'),
        outputPath: 'repository.repositoryUri',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepository.repository.repositoryUri', props);
    return resource.getResponseField('repository.repositoryUri') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepository',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DeleteRepository.repository.createdAt'),
        outputPath: 'repository.createdAt',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepository.repository.createdAt', props);
    return resource.getResponseField('repository.createdAt') as unknown as string;
  }

  public get imageTagMutability(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepository',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DeleteRepository.repository.imageTagMutability'),
        outputPath: 'repository.imageTagMutability',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepository.repository.imageTagMutability', props);
    return resource.getResponseField('repository.imageTagMutability') as unknown as string;
  }

  public get imageScanningConfiguration(): ECRResponsesDeleteRepositoryRepositoryImageScanningConfiguration {
    return new ECRResponsesDeleteRepositoryRepositoryImageScanningConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get encryptionConfiguration(): ECRResponsesDeleteRepositoryRepositoryEncryptionConfiguration {
    return new ECRResponsesDeleteRepositoryRepositoryEncryptionConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ECRResponsesDeleteRepositoryRepositoryImageScanningConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrDeleteRepositoryRequest) {
  }

  public get scanOnPush(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepository',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DeleteRepository.repository.imageScanningConfiguration.scanOnPush'),
        outputPath: 'repository.imageScanningConfiguration.scanOnPush',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepository.repository.imageScanningConfiguration.scanOnPush', props);
    return resource.getResponseField('repository.imageScanningConfiguration.scanOnPush') as unknown as boolean;
  }

}

export class ECRResponsesDeleteRepositoryRepositoryEncryptionConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrDeleteRepositoryRequest) {
  }

  public get encryptionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepository',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DeleteRepository.repository.encryptionConfiguration.encryptionType'),
        outputPath: 'repository.encryptionConfiguration.encryptionType',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepository.repository.encryptionConfiguration.encryptionType', props);
    return resource.getResponseField('repository.encryptionConfiguration.encryptionType') as unknown as string;
  }

  public get kmsKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepository',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DeleteRepository.repository.encryptionConfiguration.kmsKey'),
        outputPath: 'repository.encryptionConfiguration.kmsKey',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepository.repository.encryptionConfiguration.kmsKey', props);
    return resource.getResponseField('repository.encryptionConfiguration.kmsKey') as unknown as string;
  }

}

export class ECRResponsesDeleteRepositoryPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrDeleteRepositoryPolicyRequest) {
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepositoryPolicy',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DeleteRepositoryPolicy.registryId'),
        outputPath: 'registryId',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepositoryPolicy.registryId', props);
    return resource.getResponseField('registryId') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepositoryPolicy',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DeleteRepositoryPolicy.repositoryName'),
        outputPath: 'repositoryName',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepositoryPolicy.repositoryName', props);
    return resource.getResponseField('repositoryName') as unknown as string;
  }

  public get policyText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepositoryPolicy',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DeleteRepositoryPolicy.policyText'),
        outputPath: 'policyText',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRepositoryPolicy.policyText', props);
    return resource.getResponseField('policyText') as unknown as string;
  }

}

export class ECRResponsesDescribeImageScanFindings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrDescribeImageScanFindingsRequest) {
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageScanFindings',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DescribeImageScanFindings.registryId'),
        outputPath: 'registryId',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageId: {
            imageDigest: this.__input.imageId.imageDigest,
            imageTag: this.__input.imageId.imageTag,
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageScanFindings.registryId', props);
    return resource.getResponseField('registryId') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageScanFindings',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DescribeImageScanFindings.repositoryName'),
        outputPath: 'repositoryName',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageId: {
            imageDigest: this.__input.imageId.imageDigest,
            imageTag: this.__input.imageId.imageTag,
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageScanFindings.repositoryName', props);
    return resource.getResponseField('repositoryName') as unknown as string;
  }

  public get imageId(): ECRResponsesDescribeImageScanFindingsImageId {
    return new ECRResponsesDescribeImageScanFindingsImageId(this.__scope, this.__resources, this.__input);
  }

  public get imageScanStatus(): ECRResponsesDescribeImageScanFindingsImageScanStatus {
    return new ECRResponsesDescribeImageScanFindingsImageScanStatus(this.__scope, this.__resources, this.__input);
  }

  public get imageScanFindings(): ECRResponsesDescribeImageScanFindingsImageScanFindings {
    return new ECRResponsesDescribeImageScanFindingsImageScanFindings(this.__scope, this.__resources, this.__input);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageScanFindings',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DescribeImageScanFindings.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageId: {
            imageDigest: this.__input.imageId.imageDigest,
            imageTag: this.__input.imageId.imageTag,
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageScanFindings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECRResponsesDescribeImageScanFindingsImageId {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrDescribeImageScanFindingsRequest) {
  }

  public get imageDigest(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageScanFindings',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DescribeImageScanFindings.imageId.imageDigest'),
        outputPath: 'imageId.imageDigest',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageId: {
            imageDigest: this.__input.imageId.imageDigest,
            imageTag: this.__input.imageId.imageTag,
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageScanFindings.imageId.imageDigest', props);
    return resource.getResponseField('imageId.imageDigest') as unknown as string;
  }

  public get imageTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageScanFindings',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DescribeImageScanFindings.imageId.imageTag'),
        outputPath: 'imageId.imageTag',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageId: {
            imageDigest: this.__input.imageId.imageDigest,
            imageTag: this.__input.imageId.imageTag,
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageScanFindings.imageId.imageTag', props);
    return resource.getResponseField('imageId.imageTag') as unknown as string;
  }

}

export class ECRResponsesDescribeImageScanFindingsImageScanStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrDescribeImageScanFindingsRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageScanFindings',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DescribeImageScanFindings.imageScanStatus.status'),
        outputPath: 'imageScanStatus.status',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageId: {
            imageDigest: this.__input.imageId.imageDigest,
            imageTag: this.__input.imageId.imageTag,
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageScanFindings.imageScanStatus.status', props);
    return resource.getResponseField('imageScanStatus.status') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageScanFindings',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DescribeImageScanFindings.imageScanStatus.description'),
        outputPath: 'imageScanStatus.description',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageId: {
            imageDigest: this.__input.imageId.imageDigest,
            imageTag: this.__input.imageId.imageTag,
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageScanFindings.imageScanStatus.description', props);
    return resource.getResponseField('imageScanStatus.description') as unknown as string;
  }

}

export class ECRResponsesDescribeImageScanFindingsImageScanFindings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrDescribeImageScanFindingsRequest) {
  }

  public get imageScanCompletedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageScanFindings',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DescribeImageScanFindings.imageScanFindings.imageScanCompletedAt'),
        outputPath: 'imageScanFindings.imageScanCompletedAt',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageId: {
            imageDigest: this.__input.imageId.imageDigest,
            imageTag: this.__input.imageId.imageTag,
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageScanFindings.imageScanFindings.imageScanCompletedAt', props);
    return resource.getResponseField('imageScanFindings.imageScanCompletedAt') as unknown as string;
  }

  public get vulnerabilitySourceUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageScanFindings',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DescribeImageScanFindings.imageScanFindings.vulnerabilitySourceUpdatedAt'),
        outputPath: 'imageScanFindings.vulnerabilitySourceUpdatedAt',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageId: {
            imageDigest: this.__input.imageId.imageDigest,
            imageTag: this.__input.imageId.imageTag,
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageScanFindings.imageScanFindings.vulnerabilitySourceUpdatedAt', props);
    return resource.getResponseField('imageScanFindings.vulnerabilitySourceUpdatedAt') as unknown as string;
  }

  public get findings(): shapes.EcrImageScanFinding[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageScanFindings',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DescribeImageScanFindings.imageScanFindings.findings'),
        outputPath: 'imageScanFindings.findings',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageId: {
            imageDigest: this.__input.imageId.imageDigest,
            imageTag: this.__input.imageId.imageTag,
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageScanFindings.imageScanFindings.findings', props);
    return resource.getResponseField('imageScanFindings.findings') as unknown as shapes.EcrImageScanFinding[];
  }

  public get findingSeverityCounts(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageScanFindings',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DescribeImageScanFindings.imageScanFindings.findingSeverityCounts'),
        outputPath: 'imageScanFindings.findingSeverityCounts',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageId: {
            imageDigest: this.__input.imageId.imageDigest,
            imageTag: this.__input.imageId.imageTag,
          },
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageScanFindings.imageScanFindings.findingSeverityCounts', props);
    return resource.getResponseField('imageScanFindings.findingSeverityCounts') as unknown as Record<string, number>;
  }

}

export class ECRResponsesDescribeImages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrDescribeImagesRequest) {
  }

  public get imageDetails(): shapes.EcrImageDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImages',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DescribeImages.imageDetails'),
        outputPath: 'imageDetails',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageIds: this.__input.imageIds,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filter: {
            tagStatus: this.__input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImages.imageDetails', props);
    return resource.getResponseField('imageDetails') as unknown as shapes.EcrImageDetail[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImages',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DescribeImages.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageIds: this.__input.imageIds,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filter: {
            tagStatus: this.__input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImages.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECRResponsesDescribeRepositories {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrDescribeRepositoriesRequest) {
  }

  public get repositories(): shapes.EcrRepository[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepositories',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DescribeRepositories.repositories'),
        outputPath: 'repositories',
        parameters: {
          registryId: this.__input.registryId,
          repositoryNames: this.__input.repositoryNames,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepositories.repositories', props);
    return resource.getResponseField('repositories') as unknown as shapes.EcrRepository[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepositories',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.DescribeRepositories.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          registryId: this.__input.registryId,
          repositoryNames: this.__input.repositoryNames,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepositories.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECRResponsesFetchAuthorizationToken {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrGetAuthorizationTokenRequest) {
  }

  public get authorizationData(): shapes.EcrAuthorizationData[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizationToken',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.GetAuthorizationToken.authorizationData'),
        outputPath: 'authorizationData',
        parameters: {
          registryIds: this.__input.registryIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizationToken.authorizationData', props);
    return resource.getResponseField('authorizationData') as unknown as shapes.EcrAuthorizationData[];
  }

}

export class ECRResponsesFetchDownloadUrlForLayer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrGetDownloadUrlForLayerRequest) {
  }

  public get downloadUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDownloadUrlForLayer',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.GetDownloadUrlForLayer.downloadUrl'),
        outputPath: 'downloadUrl',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          layerDigest: this.__input.layerDigest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDownloadUrlForLayer.downloadUrl', props);
    return resource.getResponseField('downloadUrl') as unknown as string;
  }

  public get layerDigest(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDownloadUrlForLayer',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.GetDownloadUrlForLayer.layerDigest'),
        outputPath: 'layerDigest',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          layerDigest: this.__input.layerDigest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDownloadUrlForLayer.layerDigest', props);
    return resource.getResponseField('layerDigest') as unknown as string;
  }

}

export class ECRResponsesFetchLifecyclePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrGetLifecyclePolicyRequest) {
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicy',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.GetLifecyclePolicy.registryId'),
        outputPath: 'registryId',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicy.registryId', props);
    return resource.getResponseField('registryId') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicy',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.GetLifecyclePolicy.repositoryName'),
        outputPath: 'repositoryName',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicy.repositoryName', props);
    return resource.getResponseField('repositoryName') as unknown as string;
  }

  public get lifecyclePolicyText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicy',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.GetLifecyclePolicy.lifecyclePolicyText'),
        outputPath: 'lifecyclePolicyText',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicy.lifecyclePolicyText', props);
    return resource.getResponseField('lifecyclePolicyText') as unknown as string;
  }

  public get lastEvaluatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicy',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.GetLifecyclePolicy.lastEvaluatedAt'),
        outputPath: 'lastEvaluatedAt',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicy.lastEvaluatedAt', props);
    return resource.getResponseField('lastEvaluatedAt') as unknown as string;
  }

}

export class ECRResponsesFetchLifecyclePolicyPreview {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrGetLifecyclePolicyPreviewRequest) {
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicyPreview',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.GetLifecyclePolicyPreview.registryId'),
        outputPath: 'registryId',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageIds: this.__input.imageIds,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filter: {
            tagStatus: this.__input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicyPreview.registryId', props);
    return resource.getResponseField('registryId') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicyPreview',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.GetLifecyclePolicyPreview.repositoryName'),
        outputPath: 'repositoryName',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageIds: this.__input.imageIds,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filter: {
            tagStatus: this.__input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicyPreview.repositoryName', props);
    return resource.getResponseField('repositoryName') as unknown as string;
  }

  public get lifecyclePolicyText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicyPreview',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.GetLifecyclePolicyPreview.lifecyclePolicyText'),
        outputPath: 'lifecyclePolicyText',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageIds: this.__input.imageIds,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filter: {
            tagStatus: this.__input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicyPreview.lifecyclePolicyText', props);
    return resource.getResponseField('lifecyclePolicyText') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicyPreview',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.GetLifecyclePolicyPreview.status'),
        outputPath: 'status',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageIds: this.__input.imageIds,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filter: {
            tagStatus: this.__input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicyPreview.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicyPreview',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.GetLifecyclePolicyPreview.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageIds: this.__input.imageIds,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filter: {
            tagStatus: this.__input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicyPreview.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

  public get previewResults(): shapes.EcrLifecyclePolicyPreviewResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicyPreview',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.GetLifecyclePolicyPreview.previewResults'),
        outputPath: 'previewResults',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageIds: this.__input.imageIds,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filter: {
            tagStatus: this.__input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicyPreview.previewResults', props);
    return resource.getResponseField('previewResults') as unknown as shapes.EcrLifecyclePolicyPreviewResult[];
  }

  public get summary(): ECRResponsesFetchLifecyclePolicyPreviewSummary {
    return new ECRResponsesFetchLifecyclePolicyPreviewSummary(this.__scope, this.__resources, this.__input);
  }

}

export class ECRResponsesFetchLifecyclePolicyPreviewSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrGetLifecyclePolicyPreviewRequest) {
  }

  public get expiringImageTotalCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicyPreview',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.GetLifecyclePolicyPreview.summary.expiringImageTotalCount'),
        outputPath: 'summary.expiringImageTotalCount',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageIds: this.__input.imageIds,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filter: {
            tagStatus: this.__input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicyPreview.summary.expiringImageTotalCount', props);
    return resource.getResponseField('summary.expiringImageTotalCount') as unknown as number;
  }

}

export class ECRResponsesFetchRepositoryPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrGetRepositoryPolicyRequest) {
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepositoryPolicy',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.GetRepositoryPolicy.registryId'),
        outputPath: 'registryId',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepositoryPolicy.registryId', props);
    return resource.getResponseField('registryId') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepositoryPolicy',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.GetRepositoryPolicy.repositoryName'),
        outputPath: 'repositoryName',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepositoryPolicy.repositoryName', props);
    return resource.getResponseField('repositoryName') as unknown as string;
  }

  public get policyText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepositoryPolicy',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.GetRepositoryPolicy.policyText'),
        outputPath: 'policyText',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepositoryPolicy.policyText', props);
    return resource.getResponseField('policyText') as unknown as string;
  }

}

export class ECRResponsesInitiateLayerUpload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrInitiateLayerUploadRequest) {
  }

  public get uploadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateLayerUpload',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.InitiateLayerUpload.uploadId'),
        outputPath: 'uploadId',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateLayerUpload.uploadId', props);
    return resource.getResponseField('uploadId') as unknown as string;
  }

  public get partSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateLayerUpload',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.InitiateLayerUpload.partSize'),
        outputPath: 'partSize',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'InitiateLayerUpload.partSize', props);
    return resource.getResponseField('partSize') as unknown as number;
  }

}

export class ECRResponsesListImages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrListImagesRequest) {
  }

  public get imageIds(): shapes.EcrImageIdentifier[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImages',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.ListImages.imageIds'),
        outputPath: 'imageIds',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filter: {
            tagStatus: this.__input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImages.imageIds', props);
    return resource.getResponseField('imageIds') as unknown as shapes.EcrImageIdentifier[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImages',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.ListImages.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filter: {
            tagStatus: this.__input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImages.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECRResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrListTagsForResourceRequest) {
  }

  public get tags(): shapes.EcrTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.EcrTag[];
  }

}

export class ECRResponsesPutImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrPutImageRequest) {
  }

  public get image(): ECRResponsesPutImageImage {
    return new ECRResponsesPutImageImage(this.__scope, this.__resources, this.__input);
  }

}

export class ECRResponsesPutImageImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrPutImageRequest) {
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putImage',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.PutImage.image.registryId'),
        outputPath: 'image.registryId',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageManifest: this.__input.imageManifest,
          imageManifestMediaType: this.__input.imageManifestMediaType,
          imageTag: this.__input.imageTag,
          imageDigest: this.__input.imageDigest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutImage.image.registryId', props);
    return resource.getResponseField('image.registryId') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putImage',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.PutImage.image.repositoryName'),
        outputPath: 'image.repositoryName',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageManifest: this.__input.imageManifest,
          imageManifestMediaType: this.__input.imageManifestMediaType,
          imageTag: this.__input.imageTag,
          imageDigest: this.__input.imageDigest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutImage.image.repositoryName', props);
    return resource.getResponseField('image.repositoryName') as unknown as string;
  }

  public get imageId(): ECRResponsesPutImageImageImageId {
    return new ECRResponsesPutImageImageImageId(this.__scope, this.__resources, this.__input);
  }

  public get imageManifest(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putImage',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.PutImage.image.imageManifest'),
        outputPath: 'image.imageManifest',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageManifest: this.__input.imageManifest,
          imageManifestMediaType: this.__input.imageManifestMediaType,
          imageTag: this.__input.imageTag,
          imageDigest: this.__input.imageDigest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutImage.image.imageManifest', props);
    return resource.getResponseField('image.imageManifest') as unknown as string;
  }

  public get imageManifestMediaType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putImage',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.PutImage.image.imageManifestMediaType'),
        outputPath: 'image.imageManifestMediaType',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageManifest: this.__input.imageManifest,
          imageManifestMediaType: this.__input.imageManifestMediaType,
          imageTag: this.__input.imageTag,
          imageDigest: this.__input.imageDigest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutImage.image.imageManifestMediaType', props);
    return resource.getResponseField('image.imageManifestMediaType') as unknown as string;
  }

}

export class ECRResponsesPutImageImageImageId {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrPutImageRequest) {
  }

  public get imageDigest(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putImage',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.PutImage.image.imageId.imageDigest'),
        outputPath: 'image.imageId.imageDigest',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageManifest: this.__input.imageManifest,
          imageManifestMediaType: this.__input.imageManifestMediaType,
          imageTag: this.__input.imageTag,
          imageDigest: this.__input.imageDigest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutImage.image.imageId.imageDigest', props);
    return resource.getResponseField('image.imageId.imageDigest') as unknown as string;
  }

  public get imageTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putImage',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.PutImage.image.imageId.imageTag'),
        outputPath: 'image.imageId.imageTag',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageManifest: this.__input.imageManifest,
          imageManifestMediaType: this.__input.imageManifestMediaType,
          imageTag: this.__input.imageTag,
          imageDigest: this.__input.imageDigest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutImage.image.imageId.imageTag', props);
    return resource.getResponseField('image.imageId.imageTag') as unknown as string;
  }

}

export class ECRResponsesPutImageScanningConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrPutImageScanningConfigurationRequest) {
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putImageScanningConfiguration',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.PutImageScanningConfiguration.registryId'),
        outputPath: 'registryId',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageScanningConfiguration: {
            scanOnPush: this.__input.imageScanningConfiguration.scanOnPush,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutImageScanningConfiguration.registryId', props);
    return resource.getResponseField('registryId') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putImageScanningConfiguration',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.PutImageScanningConfiguration.repositoryName'),
        outputPath: 'repositoryName',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageScanningConfiguration: {
            scanOnPush: this.__input.imageScanningConfiguration.scanOnPush,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutImageScanningConfiguration.repositoryName', props);
    return resource.getResponseField('repositoryName') as unknown as string;
  }

  public get imageScanningConfiguration(): ECRResponsesPutImageScanningConfigurationImageScanningConfiguration {
    return new ECRResponsesPutImageScanningConfigurationImageScanningConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ECRResponsesPutImageScanningConfigurationImageScanningConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrPutImageScanningConfigurationRequest) {
  }

  public get scanOnPush(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putImageScanningConfiguration',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.PutImageScanningConfiguration.imageScanningConfiguration.scanOnPush'),
        outputPath: 'imageScanningConfiguration.scanOnPush',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageScanningConfiguration: {
            scanOnPush: this.__input.imageScanningConfiguration.scanOnPush,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutImageScanningConfiguration.imageScanningConfiguration.scanOnPush', props);
    return resource.getResponseField('imageScanningConfiguration.scanOnPush') as unknown as boolean;
  }

}

export class ECRResponsesPutImageTagMutability {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrPutImageTagMutabilityRequest) {
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putImageTagMutability',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.PutImageTagMutability.registryId'),
        outputPath: 'registryId',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageTagMutability: this.__input.imageTagMutability,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutImageTagMutability.registryId', props);
    return resource.getResponseField('registryId') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putImageTagMutability',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.PutImageTagMutability.repositoryName'),
        outputPath: 'repositoryName',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageTagMutability: this.__input.imageTagMutability,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutImageTagMutability.repositoryName', props);
    return resource.getResponseField('repositoryName') as unknown as string;
  }

  public get imageTagMutability(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putImageTagMutability',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.PutImageTagMutability.imageTagMutability'),
        outputPath: 'imageTagMutability',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageTagMutability: this.__input.imageTagMutability,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutImageTagMutability.imageTagMutability', props);
    return resource.getResponseField('imageTagMutability') as unknown as string;
  }

}

export class ECRResponsesPutLifecyclePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrPutLifecyclePolicyRequest) {
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putLifecyclePolicy',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.PutLifecyclePolicy.registryId'),
        outputPath: 'registryId',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          lifecyclePolicyText: this.__input.lifecyclePolicyText,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutLifecyclePolicy.registryId', props);
    return resource.getResponseField('registryId') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putLifecyclePolicy',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.PutLifecyclePolicy.repositoryName'),
        outputPath: 'repositoryName',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          lifecyclePolicyText: this.__input.lifecyclePolicyText,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutLifecyclePolicy.repositoryName', props);
    return resource.getResponseField('repositoryName') as unknown as string;
  }

  public get lifecyclePolicyText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putLifecyclePolicy',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.PutLifecyclePolicy.lifecyclePolicyText'),
        outputPath: 'lifecyclePolicyText',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          lifecyclePolicyText: this.__input.lifecyclePolicyText,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutLifecyclePolicy.lifecyclePolicyText', props);
    return resource.getResponseField('lifecyclePolicyText') as unknown as string;
  }

}

export class ECRResponsesSetRepositoryPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrSetRepositoryPolicyRequest) {
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setRepositoryPolicy',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.SetRepositoryPolicy.registryId'),
        outputPath: 'registryId',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          policyText: this.__input.policyText,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SetRepositoryPolicy.registryId', props);
    return resource.getResponseField('registryId') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setRepositoryPolicy',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.SetRepositoryPolicy.repositoryName'),
        outputPath: 'repositoryName',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          policyText: this.__input.policyText,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SetRepositoryPolicy.repositoryName', props);
    return resource.getResponseField('repositoryName') as unknown as string;
  }

  public get policyText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setRepositoryPolicy',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.SetRepositoryPolicy.policyText'),
        outputPath: 'policyText',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          policyText: this.__input.policyText,
          force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SetRepositoryPolicy.policyText', props);
    return resource.getResponseField('policyText') as unknown as string;
  }

}

export class ECRResponsesStartImageScan {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrStartImageScanRequest) {
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageScan',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.StartImageScan.registryId'),
        outputPath: 'registryId',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageId: {
            imageDigest: this.__input.imageId.imageDigest,
            imageTag: this.__input.imageId.imageTag,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageScan.registryId', props);
    return resource.getResponseField('registryId') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageScan',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.StartImageScan.repositoryName'),
        outputPath: 'repositoryName',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageId: {
            imageDigest: this.__input.imageId.imageDigest,
            imageTag: this.__input.imageId.imageTag,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageScan.repositoryName', props);
    return resource.getResponseField('repositoryName') as unknown as string;
  }

  public get imageId(): ECRResponsesStartImageScanImageId {
    return new ECRResponsesStartImageScanImageId(this.__scope, this.__resources, this.__input);
  }

  public get imageScanStatus(): ECRResponsesStartImageScanImageScanStatus {
    return new ECRResponsesStartImageScanImageScanStatus(this.__scope, this.__resources, this.__input);
  }

}

export class ECRResponsesStartImageScanImageId {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrStartImageScanRequest) {
  }

  public get imageDigest(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageScan',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.StartImageScan.imageId.imageDigest'),
        outputPath: 'imageId.imageDigest',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageId: {
            imageDigest: this.__input.imageId.imageDigest,
            imageTag: this.__input.imageId.imageTag,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageScan.imageId.imageDigest', props);
    return resource.getResponseField('imageId.imageDigest') as unknown as string;
  }

  public get imageTag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageScan',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.StartImageScan.imageId.imageTag'),
        outputPath: 'imageId.imageTag',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageId: {
            imageDigest: this.__input.imageId.imageDigest,
            imageTag: this.__input.imageId.imageTag,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageScan.imageId.imageTag', props);
    return resource.getResponseField('imageId.imageTag') as unknown as string;
  }

}

export class ECRResponsesStartImageScanImageScanStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrStartImageScanRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageScan',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.StartImageScan.imageScanStatus.status'),
        outputPath: 'imageScanStatus.status',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageId: {
            imageDigest: this.__input.imageId.imageDigest,
            imageTag: this.__input.imageId.imageTag,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageScan.imageScanStatus.status', props);
    return resource.getResponseField('imageScanStatus.status') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageScan',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.StartImageScan.imageScanStatus.description'),
        outputPath: 'imageScanStatus.description',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageId: {
            imageDigest: this.__input.imageId.imageDigest,
            imageTag: this.__input.imageId.imageTag,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageScan.imageScanStatus.description', props);
    return resource.getResponseField('imageScanStatus.description') as unknown as string;
  }

}

export class ECRResponsesStartLifecyclePolicyPreview {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrStartLifecyclePolicyPreviewRequest) {
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startLifecyclePolicyPreview',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.StartLifecyclePolicyPreview.registryId'),
        outputPath: 'registryId',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          lifecyclePolicyText: this.__input.lifecyclePolicyText,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartLifecyclePolicyPreview.registryId', props);
    return resource.getResponseField('registryId') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startLifecyclePolicyPreview',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.StartLifecyclePolicyPreview.repositoryName'),
        outputPath: 'repositoryName',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          lifecyclePolicyText: this.__input.lifecyclePolicyText,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartLifecyclePolicyPreview.repositoryName', props);
    return resource.getResponseField('repositoryName') as unknown as string;
  }

  public get lifecyclePolicyText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startLifecyclePolicyPreview',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.StartLifecyclePolicyPreview.lifecyclePolicyText'),
        outputPath: 'lifecyclePolicyText',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          lifecyclePolicyText: this.__input.lifecyclePolicyText,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartLifecyclePolicyPreview.lifecyclePolicyText', props);
    return resource.getResponseField('lifecyclePolicyText') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startLifecyclePolicyPreview',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.StartLifecyclePolicyPreview.status'),
        outputPath: 'status',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          lifecyclePolicyText: this.__input.lifecyclePolicyText,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartLifecyclePolicyPreview.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

}

export class ECRResponsesUploadLayerPart {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrUploadLayerPartRequest) {
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadLayerPart',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.UploadLayerPart.registryId'),
        outputPath: 'registryId',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          uploadId: this.__input.uploadId,
          partFirstByte: this.__input.partFirstByte,
          partLastByte: this.__input.partLastByte,
          layerPartBlob: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadLayerPart.registryId', props);
    return resource.getResponseField('registryId') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadLayerPart',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.UploadLayerPart.repositoryName'),
        outputPath: 'repositoryName',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          uploadId: this.__input.uploadId,
          partFirstByte: this.__input.partFirstByte,
          partLastByte: this.__input.partLastByte,
          layerPartBlob: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadLayerPart.repositoryName', props);
    return resource.getResponseField('repositoryName') as unknown as string;
  }

  public get uploadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadLayerPart',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.UploadLayerPart.uploadId'),
        outputPath: 'uploadId',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          uploadId: this.__input.uploadId,
          partFirstByte: this.__input.partFirstByte,
          partLastByte: this.__input.partLastByte,
          layerPartBlob: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadLayerPart.uploadId', props);
    return resource.getResponseField('uploadId') as unknown as string;
  }

  public get lastByteReceived(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadLayerPart',
        service: 'ECR',
        physicalResourceId: cr.PhysicalResourceId.of('ECR.UploadLayerPart.lastByteReceived'),
        outputPath: 'lastByteReceived',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          uploadId: this.__input.uploadId,
          partFirstByte: this.__input.partFirstByte,
          partLastByte: this.__input.partLastByte,
          layerPartBlob: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UploadLayerPart.lastByteReceived', props);
    return resource.getResponseField('lastByteReceived') as unknown as number;
  }

}

