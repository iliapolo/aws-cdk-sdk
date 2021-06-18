import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class EcrClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchCheckLayerAvailability(input: shapes.EcrBatchCheckLayerAvailabilityRequest): ECRBatchCheckLayerAvailability {
    return new ECRBatchCheckLayerAvailability(this, 'BatchCheckLayerAvailability', this.__resources, input);
  }

  public batchDeleteImage(input: shapes.EcrBatchDeleteImageRequest): ECRBatchDeleteImage {
    return new ECRBatchDeleteImage(this, 'BatchDeleteImage', this.__resources, input);
  }

  public batchGetImage(input: shapes.EcrBatchGetImageRequest): ECRBatchGetImage {
    return new ECRBatchGetImage(this, 'BatchGetImage', this.__resources, input);
  }

  public completeLayerUpload(input: shapes.EcrCompleteLayerUploadRequest): ECRCompleteLayerUpload {
    return new ECRCompleteLayerUpload(this, 'CompleteLayerUpload', this.__resources, input);
  }

  public createRepository(input: shapes.EcrCreateRepositoryRequest): ECRCreateRepository {
    return new ECRCreateRepository(this, 'CreateRepository', this.__resources, input);
  }

  public deleteLifecyclePolicy(input: shapes.EcrDeleteLifecyclePolicyRequest): ECRDeleteLifecyclePolicy {
    return new ECRDeleteLifecyclePolicy(this, 'DeleteLifecyclePolicy', this.__resources, input);
  }

  public deleteRepository(input: shapes.EcrDeleteRepositoryRequest): ECRDeleteRepository {
    return new ECRDeleteRepository(this, 'DeleteRepository', this.__resources, input);
  }

  public deleteRepositoryPolicy(input: shapes.EcrDeleteRepositoryPolicyRequest): ECRDeleteRepositoryPolicy {
    return new ECRDeleteRepositoryPolicy(this, 'DeleteRepositoryPolicy', this.__resources, input);
  }

  public describeImageScanFindings(input: shapes.EcrDescribeImageScanFindingsRequest): ECRDescribeImageScanFindings {
    return new ECRDescribeImageScanFindings(this, 'DescribeImageScanFindings', this.__resources, input);
  }

  public describeImages(input: shapes.EcrDescribeImagesRequest): ECRDescribeImages {
    return new ECRDescribeImages(this, 'DescribeImages', this.__resources, input);
  }

  public describeRepositories(input: shapes.EcrDescribeRepositoriesRequest): ECRDescribeRepositories {
    return new ECRDescribeRepositories(this, 'DescribeRepositories', this.__resources, input);
  }

  public fetchAuthorizationToken(input: shapes.EcrGetAuthorizationTokenRequest): ECRFetchAuthorizationToken {
    return new ECRFetchAuthorizationToken(this, 'FetchAuthorizationToken', this.__resources, input);
  }

  public fetchDownloadUrlForLayer(input: shapes.EcrGetDownloadUrlForLayerRequest): ECRFetchDownloadUrlForLayer {
    return new ECRFetchDownloadUrlForLayer(this, 'FetchDownloadUrlForLayer', this.__resources, input);
  }

  public fetchLifecyclePolicy(input: shapes.EcrGetLifecyclePolicyRequest): ECRFetchLifecyclePolicy {
    return new ECRFetchLifecyclePolicy(this, 'FetchLifecyclePolicy', this.__resources, input);
  }

  public fetchLifecyclePolicyPreview(input: shapes.EcrGetLifecyclePolicyPreviewRequest): ECRFetchLifecyclePolicyPreview {
    return new ECRFetchLifecyclePolicyPreview(this, 'FetchLifecyclePolicyPreview', this.__resources, input);
  }

  public fetchRepositoryPolicy(input: shapes.EcrGetRepositoryPolicyRequest): ECRFetchRepositoryPolicy {
    return new ECRFetchRepositoryPolicy(this, 'FetchRepositoryPolicy', this.__resources, input);
  }

  public initiateLayerUpload(input: shapes.EcrInitiateLayerUploadRequest): ECRInitiateLayerUpload {
    return new ECRInitiateLayerUpload(this, 'InitiateLayerUpload', this.__resources, input);
  }

  public listImages(input: shapes.EcrListImagesRequest): ECRListImages {
    return new ECRListImages(this, 'ListImages', this.__resources, input);
  }

  public listTagsForResource(input: shapes.EcrListTagsForResourceRequest): ECRListTagsForResource {
    return new ECRListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public putImage(input: shapes.EcrPutImageRequest): ECRPutImage {
    return new ECRPutImage(this, 'PutImage', this.__resources, input);
  }

  public putImageScanningConfiguration(input: shapes.EcrPutImageScanningConfigurationRequest): ECRPutImageScanningConfiguration {
    return new ECRPutImageScanningConfiguration(this, 'PutImageScanningConfiguration', this.__resources, input);
  }

  public putImageTagMutability(input: shapes.EcrPutImageTagMutabilityRequest): ECRPutImageTagMutability {
    return new ECRPutImageTagMutability(this, 'PutImageTagMutability', this.__resources, input);
  }

  public putLifecyclePolicy(input: shapes.EcrPutLifecyclePolicyRequest): ECRPutLifecyclePolicy {
    return new ECRPutLifecyclePolicy(this, 'PutLifecyclePolicy', this.__resources, input);
  }

  public setRepositoryPolicy(input: shapes.EcrSetRepositoryPolicyRequest): ECRSetRepositoryPolicy {
    return new ECRSetRepositoryPolicy(this, 'SetRepositoryPolicy', this.__resources, input);
  }

  public startImageScan(input: shapes.EcrStartImageScanRequest): ECRStartImageScan {
    return new ECRStartImageScan(this, 'StartImageScan', this.__resources, input);
  }

  public startLifecyclePolicyPreview(input: shapes.EcrStartLifecyclePolicyPreviewRequest): ECRStartLifecyclePolicyPreview {
    return new ECRStartLifecyclePolicyPreview(this, 'StartLifecyclePolicyPreview', this.__resources, input);
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

  public uploadLayerPart(input: shapes.EcrUploadLayerPartRequest): ECRUploadLayerPart {
    return new ECRUploadLayerPart(this, 'UploadLayerPart', this.__resources, input);
  }

}

export class ECRBatchCheckLayerAvailability extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrBatchCheckLayerAvailabilityRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          layerDigests: this.input.layerDigests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchCheckLayerAvailability.layers', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          layerDigests: this.input.layerDigests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchCheckLayerAvailability.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcrLayerFailure[];
  }

}

export class ECRBatchDeleteImage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrBatchDeleteImageRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageIds: this.input.imageIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDeleteImage.imageIds', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageIds: this.input.imageIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDeleteImage.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcrImageFailure[];
  }

}

export class ECRBatchGetImage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrBatchGetImageRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageIds: this.input.imageIds,
          acceptedMediaTypes: this.input.acceptedMediaTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetImage.images', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageIds: this.input.imageIds,
          acceptedMediaTypes: this.input.acceptedMediaTypes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchGetImage.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcrImageFailure[];
  }

}

export class ECRCompleteLayerUpload extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrCompleteLayerUploadRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          uploadId: this.input.uploadId,
          layerDigests: this.input.layerDigests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteLayerUpload.registryId', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          uploadId: this.input.uploadId,
          layerDigests: this.input.layerDigests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteLayerUpload.repositoryName', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          uploadId: this.input.uploadId,
          layerDigests: this.input.layerDigests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteLayerUpload.uploadId', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          uploadId: this.input.uploadId,
          layerDigests: this.input.layerDigests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteLayerUpload.layerDigest', props);
    return resource.getResponseField('layerDigest') as unknown as string;
  }

}

export class ECRCreateRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrCreateRepositoryRequest) {
    super(scope, id);
  }

  public get repository(): ECRCreateRepositoryRepository {
    return new ECRCreateRepositoryRepository(this, 'Repository', this.__resources, this.input);
  }

}

export class ECRCreateRepositoryRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrCreateRepositoryRequest) {
    super(scope, id);
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
          repositoryName: this.input.repositoryName,
          tags: this.input.tags,
          imageTagMutability: this.input.imageTagMutability,
          imageScanningConfiguration: {
            scanOnPush: this.input.imageScanningConfiguration?.scanOnPush,
          },
          encryptionConfiguration: {
            encryptionType: this.input.encryptionConfiguration?.encryptionType,
            kmsKey: this.input.encryptionConfiguration?.kmsKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repository.repositoryArn', props);
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
          repositoryName: this.input.repositoryName,
          tags: this.input.tags,
          imageTagMutability: this.input.imageTagMutability,
          imageScanningConfiguration: {
            scanOnPush: this.input.imageScanningConfiguration?.scanOnPush,
          },
          encryptionConfiguration: {
            encryptionType: this.input.encryptionConfiguration?.encryptionType,
            kmsKey: this.input.encryptionConfiguration?.kmsKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repository.registryId', props);
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
          repositoryName: this.input.repositoryName,
          tags: this.input.tags,
          imageTagMutability: this.input.imageTagMutability,
          imageScanningConfiguration: {
            scanOnPush: this.input.imageScanningConfiguration?.scanOnPush,
          },
          encryptionConfiguration: {
            encryptionType: this.input.encryptionConfiguration?.encryptionType,
            kmsKey: this.input.encryptionConfiguration?.kmsKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repository.repositoryName', props);
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
          repositoryName: this.input.repositoryName,
          tags: this.input.tags,
          imageTagMutability: this.input.imageTagMutability,
          imageScanningConfiguration: {
            scanOnPush: this.input.imageScanningConfiguration?.scanOnPush,
          },
          encryptionConfiguration: {
            encryptionType: this.input.encryptionConfiguration?.encryptionType,
            kmsKey: this.input.encryptionConfiguration?.kmsKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repository.repositoryUri', props);
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
          repositoryName: this.input.repositoryName,
          tags: this.input.tags,
          imageTagMutability: this.input.imageTagMutability,
          imageScanningConfiguration: {
            scanOnPush: this.input.imageScanningConfiguration?.scanOnPush,
          },
          encryptionConfiguration: {
            encryptionType: this.input.encryptionConfiguration?.encryptionType,
            kmsKey: this.input.encryptionConfiguration?.kmsKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repository.createdAt', props);
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
          repositoryName: this.input.repositoryName,
          tags: this.input.tags,
          imageTagMutability: this.input.imageTagMutability,
          imageScanningConfiguration: {
            scanOnPush: this.input.imageScanningConfiguration?.scanOnPush,
          },
          encryptionConfiguration: {
            encryptionType: this.input.encryptionConfiguration?.encryptionType,
            kmsKey: this.input.encryptionConfiguration?.kmsKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repository.imageTagMutability', props);
    return resource.getResponseField('repository.imageTagMutability') as unknown as string;
  }

  public get imageScanningConfiguration(): ECRCreateRepositoryRepositoryImageScanningConfiguration {
    return new ECRCreateRepositoryRepositoryImageScanningConfiguration(this, 'ImageScanningConfiguration', this.__resources, this.input);
  }

  public get encryptionConfiguration(): ECRCreateRepositoryRepositoryEncryptionConfiguration {
    return new ECRCreateRepositoryRepositoryEncryptionConfiguration(this, 'EncryptionConfiguration', this.__resources, this.input);
  }

}

export class ECRCreateRepositoryRepositoryImageScanningConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrCreateRepositoryRequest) {
    super(scope, id);
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
          repositoryName: this.input.repositoryName,
          tags: this.input.tags,
          imageTagMutability: this.input.imageTagMutability,
          imageScanningConfiguration: {
            scanOnPush: this.input.imageScanningConfiguration?.scanOnPush,
          },
          encryptionConfiguration: {
            encryptionType: this.input.encryptionConfiguration?.encryptionType,
            kmsKey: this.input.encryptionConfiguration?.kmsKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repository.imageScanningConfiguration.scanOnPush', props);
    return resource.getResponseField('repository.imageScanningConfiguration.scanOnPush') as unknown as boolean;
  }

}

export class ECRCreateRepositoryRepositoryEncryptionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrCreateRepositoryRequest) {
    super(scope, id);
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
          repositoryName: this.input.repositoryName,
          tags: this.input.tags,
          imageTagMutability: this.input.imageTagMutability,
          imageScanningConfiguration: {
            scanOnPush: this.input.imageScanningConfiguration?.scanOnPush,
          },
          encryptionConfiguration: {
            encryptionType: this.input.encryptionConfiguration?.encryptionType,
            kmsKey: this.input.encryptionConfiguration?.kmsKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repository.encryptionConfiguration.encryptionType', props);
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
          repositoryName: this.input.repositoryName,
          tags: this.input.tags,
          imageTagMutability: this.input.imageTagMutability,
          imageScanningConfiguration: {
            scanOnPush: this.input.imageScanningConfiguration?.scanOnPush,
          },
          encryptionConfiguration: {
            encryptionType: this.input.encryptionConfiguration?.encryptionType,
            kmsKey: this.input.encryptionConfiguration?.kmsKey,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRepository.repository.encryptionConfiguration.kmsKey', props);
    return resource.getResponseField('repository.encryptionConfiguration.kmsKey') as unknown as string;
  }

}

export class ECRDeleteLifecyclePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrDeleteLifecyclePolicyRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLifecyclePolicy.registryId', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLifecyclePolicy.repositoryName', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLifecyclePolicy.lifecyclePolicyText', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteLifecyclePolicy.lastEvaluatedAt', props);
    return resource.getResponseField('lastEvaluatedAt') as unknown as string;
  }

}

export class ECRDeleteRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrDeleteRepositoryRequest) {
    super(scope, id);
  }

  public get repository(): ECRDeleteRepositoryRepository {
    return new ECRDeleteRepositoryRepository(this, 'Repository', this.__resources, this.input);
  }

}

export class ECRDeleteRepositoryRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrDeleteRepositoryRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepository.repository.repositoryArn', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepository.repository.registryId', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepository.repository.repositoryName', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepository.repository.repositoryUri', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepository.repository.createdAt', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepository.repository.imageTagMutability', props);
    return resource.getResponseField('repository.imageTagMutability') as unknown as string;
  }

  public get imageScanningConfiguration(): ECRDeleteRepositoryRepositoryImageScanningConfiguration {
    return new ECRDeleteRepositoryRepositoryImageScanningConfiguration(this, 'ImageScanningConfiguration', this.__resources, this.input);
  }

  public get encryptionConfiguration(): ECRDeleteRepositoryRepositoryEncryptionConfiguration {
    return new ECRDeleteRepositoryRepositoryEncryptionConfiguration(this, 'EncryptionConfiguration', this.__resources, this.input);
  }

}

export class ECRDeleteRepositoryRepositoryImageScanningConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrDeleteRepositoryRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepository.repository.imageScanningConfiguration.scanOnPush', props);
    return resource.getResponseField('repository.imageScanningConfiguration.scanOnPush') as unknown as boolean;
  }

}

export class ECRDeleteRepositoryRepositoryEncryptionConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrDeleteRepositoryRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepository.repository.encryptionConfiguration.encryptionType', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepository.repository.encryptionConfiguration.kmsKey', props);
    return resource.getResponseField('repository.encryptionConfiguration.kmsKey') as unknown as string;
  }

}

export class ECRDeleteRepositoryPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrDeleteRepositoryPolicyRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepositoryPolicy.registryId', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepositoryPolicy.repositoryName', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRepositoryPolicy.policyText', props);
    return resource.getResponseField('policyText') as unknown as string;
  }

}

export class ECRDescribeImageScanFindings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrDescribeImageScanFindingsRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageId: {
            imageDigest: this.input.imageId.imageDigest,
            imageTag: this.input.imageId.imageTag,
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageScanFindings.registryId', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageId: {
            imageDigest: this.input.imageId.imageDigest,
            imageTag: this.input.imageId.imageTag,
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageScanFindings.repositoryName', props);
    return resource.getResponseField('repositoryName') as unknown as string;
  }

  public get imageId(): ECRDescribeImageScanFindingsImageId {
    return new ECRDescribeImageScanFindingsImageId(this, 'ImageId', this.__resources, this.input);
  }

  public get imageScanStatus(): ECRDescribeImageScanFindingsImageScanStatus {
    return new ECRDescribeImageScanFindingsImageScanStatus(this, 'ImageScanStatus', this.__resources, this.input);
  }

  public get imageScanFindings(): ECRDescribeImageScanFindingsImageScanFindings {
    return new ECRDescribeImageScanFindingsImageScanFindings(this, 'ImageScanFindings', this.__resources, this.input);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageId: {
            imageDigest: this.input.imageId.imageDigest,
            imageTag: this.input.imageId.imageTag,
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageScanFindings.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECRDescribeImageScanFindingsImageId extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrDescribeImageScanFindingsRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageId: {
            imageDigest: this.input.imageId.imageDigest,
            imageTag: this.input.imageId.imageTag,
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageScanFindings.imageId.imageDigest', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageId: {
            imageDigest: this.input.imageId.imageDigest,
            imageTag: this.input.imageId.imageTag,
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageScanFindings.imageId.imageTag', props);
    return resource.getResponseField('imageId.imageTag') as unknown as string;
  }

}

export class ECRDescribeImageScanFindingsImageScanStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrDescribeImageScanFindingsRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageId: {
            imageDigest: this.input.imageId.imageDigest,
            imageTag: this.input.imageId.imageTag,
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageScanFindings.imageScanStatus.status', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageId: {
            imageDigest: this.input.imageId.imageDigest,
            imageTag: this.input.imageId.imageTag,
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageScanFindings.imageScanStatus.description', props);
    return resource.getResponseField('imageScanStatus.description') as unknown as string;
  }

}

export class ECRDescribeImageScanFindingsImageScanFindings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrDescribeImageScanFindingsRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageId: {
            imageDigest: this.input.imageId.imageDigest,
            imageTag: this.input.imageId.imageTag,
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageScanFindings.imageScanFindings.imageScanCompletedAt', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageId: {
            imageDigest: this.input.imageId.imageDigest,
            imageTag: this.input.imageId.imageTag,
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageScanFindings.imageScanFindings.vulnerabilitySourceUpdatedAt', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageId: {
            imageDigest: this.input.imageId.imageDigest,
            imageTag: this.input.imageId.imageTag,
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageScanFindings.imageScanFindings.findings', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageId: {
            imageDigest: this.input.imageId.imageDigest,
            imageTag: this.input.imageId.imageTag,
          },
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageScanFindings.imageScanFindings.findingSeverityCounts', props);
    return resource.getResponseField('imageScanFindings.findingSeverityCounts') as unknown as Record<string, number>;
  }

}

export class ECRDescribeImages extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrDescribeImagesRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageIds: this.input.imageIds,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filter: {
            tagStatus: this.input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImages.imageDetails', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageIds: this.input.imageIds,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filter: {
            tagStatus: this.input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImages.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECRDescribeRepositories extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrDescribeRepositoriesRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryNames: this.input.repositoryNames,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRepositories.repositories', props);
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
          registryId: this.input.registryId,
          repositoryNames: this.input.repositoryNames,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRepositories.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECRFetchAuthorizationToken extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrGetAuthorizationTokenRequest) {
    super(scope, id);
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
          registryIds: this.input.registryIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetAuthorizationToken.authorizationData', props);
    return resource.getResponseField('authorizationData') as unknown as shapes.EcrAuthorizationData[];
  }

}

export class ECRFetchDownloadUrlForLayer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrGetDownloadUrlForLayerRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          layerDigest: this.input.layerDigest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDownloadUrlForLayer.downloadUrl', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          layerDigest: this.input.layerDigest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDownloadUrlForLayer.layerDigest', props);
    return resource.getResponseField('layerDigest') as unknown as string;
  }

}

export class ECRFetchLifecyclePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrGetLifecyclePolicyRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicy.registryId', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicy.repositoryName', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicy.lifecyclePolicyText', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicy.lastEvaluatedAt', props);
    return resource.getResponseField('lastEvaluatedAt') as unknown as string;
  }

}

export class ECRFetchLifecyclePolicyPreview extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrGetLifecyclePolicyPreviewRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageIds: this.input.imageIds,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filter: {
            tagStatus: this.input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicyPreview.registryId', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageIds: this.input.imageIds,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filter: {
            tagStatus: this.input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicyPreview.repositoryName', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageIds: this.input.imageIds,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filter: {
            tagStatus: this.input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicyPreview.lifecyclePolicyText', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageIds: this.input.imageIds,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filter: {
            tagStatus: this.input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicyPreview.status', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageIds: this.input.imageIds,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filter: {
            tagStatus: this.input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicyPreview.nextToken', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageIds: this.input.imageIds,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filter: {
            tagStatus: this.input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicyPreview.previewResults', props);
    return resource.getResponseField('previewResults') as unknown as shapes.EcrLifecyclePolicyPreviewResult[];
  }

  public get summary(): ECRFetchLifecyclePolicyPreviewSummary {
    return new ECRFetchLifecyclePolicyPreviewSummary(this, 'Summary', this.__resources, this.input);
  }

}

export class ECRFetchLifecyclePolicyPreviewSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrGetLifecyclePolicyPreviewRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageIds: this.input.imageIds,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filter: {
            tagStatus: this.input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicyPreview.summary.expiringImageTotalCount', props);
    return resource.getResponseField('summary.expiringImageTotalCount') as unknown as number;
  }

}

export class ECRFetchRepositoryPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrGetRepositoryPolicyRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRepositoryPolicy.registryId', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRepositoryPolicy.repositoryName', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetRepositoryPolicy.policyText', props);
    return resource.getResponseField('policyText') as unknown as string;
  }

}

export class ECRInitiateLayerUpload extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrInitiateLayerUploadRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateLayerUpload.uploadId', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'InitiateLayerUpload.partSize', props);
    return resource.getResponseField('partSize') as unknown as number;
  }

}

export class ECRListImages extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrListImagesRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filter: {
            tagStatus: this.input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImages.imageIds', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filter: {
            tagStatus: this.input.filter?.tagStatus,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImages.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECRListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrListTagsForResourceRequest) {
    super(scope, id);
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
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.EcrTag[];
  }

}

export class ECRPutImage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrPutImageRequest) {
    super(scope, id);
  }

  public get image(): ECRPutImageImage {
    return new ECRPutImageImage(this, 'Image', this.__resources, this.input);
  }

}

export class ECRPutImageImage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrPutImageRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageManifest: this.input.imageManifest,
          imageManifestMediaType: this.input.imageManifestMediaType,
          imageTag: this.input.imageTag,
          imageDigest: this.input.imageDigest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutImage.image.registryId', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageManifest: this.input.imageManifest,
          imageManifestMediaType: this.input.imageManifestMediaType,
          imageTag: this.input.imageTag,
          imageDigest: this.input.imageDigest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutImage.image.repositoryName', props);
    return resource.getResponseField('image.repositoryName') as unknown as string;
  }

  public get imageId(): ECRPutImageImageImageId {
    return new ECRPutImageImageImageId(this, 'ImageId', this.__resources, this.input);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageManifest: this.input.imageManifest,
          imageManifestMediaType: this.input.imageManifestMediaType,
          imageTag: this.input.imageTag,
          imageDigest: this.input.imageDigest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutImage.image.imageManifest', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageManifest: this.input.imageManifest,
          imageManifestMediaType: this.input.imageManifestMediaType,
          imageTag: this.input.imageTag,
          imageDigest: this.input.imageDigest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutImage.image.imageManifestMediaType', props);
    return resource.getResponseField('image.imageManifestMediaType') as unknown as string;
  }

}

export class ECRPutImageImageImageId extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrPutImageRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageManifest: this.input.imageManifest,
          imageManifestMediaType: this.input.imageManifestMediaType,
          imageTag: this.input.imageTag,
          imageDigest: this.input.imageDigest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutImage.image.imageId.imageDigest', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageManifest: this.input.imageManifest,
          imageManifestMediaType: this.input.imageManifestMediaType,
          imageTag: this.input.imageTag,
          imageDigest: this.input.imageDigest,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutImage.image.imageId.imageTag', props);
    return resource.getResponseField('image.imageId.imageTag') as unknown as string;
  }

}

export class ECRPutImageScanningConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrPutImageScanningConfigurationRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageScanningConfiguration: {
            scanOnPush: this.input.imageScanningConfiguration.scanOnPush,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutImageScanningConfiguration.registryId', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageScanningConfiguration: {
            scanOnPush: this.input.imageScanningConfiguration.scanOnPush,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutImageScanningConfiguration.repositoryName', props);
    return resource.getResponseField('repositoryName') as unknown as string;
  }

  public get imageScanningConfiguration(): ECRPutImageScanningConfigurationImageScanningConfiguration {
    return new ECRPutImageScanningConfigurationImageScanningConfiguration(this, 'ImageScanningConfiguration', this.__resources, this.input);
  }

}

export class ECRPutImageScanningConfigurationImageScanningConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrPutImageScanningConfigurationRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageScanningConfiguration: {
            scanOnPush: this.input.imageScanningConfiguration.scanOnPush,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutImageScanningConfiguration.imageScanningConfiguration.scanOnPush', props);
    return resource.getResponseField('imageScanningConfiguration.scanOnPush') as unknown as boolean;
  }

}

export class ECRPutImageTagMutability extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrPutImageTagMutabilityRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageTagMutability: this.input.imageTagMutability,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutImageTagMutability.registryId', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageTagMutability: this.input.imageTagMutability,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutImageTagMutability.repositoryName', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageTagMutability: this.input.imageTagMutability,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutImageTagMutability.imageTagMutability', props);
    return resource.getResponseField('imageTagMutability') as unknown as string;
  }

}

export class ECRPutLifecyclePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrPutLifecyclePolicyRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          lifecyclePolicyText: this.input.lifecyclePolicyText,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutLifecyclePolicy.registryId', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          lifecyclePolicyText: this.input.lifecyclePolicyText,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutLifecyclePolicy.repositoryName', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          lifecyclePolicyText: this.input.lifecyclePolicyText,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PutLifecyclePolicy.lifecyclePolicyText', props);
    return resource.getResponseField('lifecyclePolicyText') as unknown as string;
  }

}

export class ECRSetRepositoryPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrSetRepositoryPolicyRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          policyText: this.input.policyText,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SetRepositoryPolicy.registryId', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          policyText: this.input.policyText,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SetRepositoryPolicy.repositoryName', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          policyText: this.input.policyText,
          force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SetRepositoryPolicy.policyText', props);
    return resource.getResponseField('policyText') as unknown as string;
  }

}

export class ECRStartImageScan extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrStartImageScanRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageId: {
            imageDigest: this.input.imageId.imageDigest,
            imageTag: this.input.imageId.imageTag,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageScan.registryId', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageId: {
            imageDigest: this.input.imageId.imageDigest,
            imageTag: this.input.imageId.imageTag,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageScan.repositoryName', props);
    return resource.getResponseField('repositoryName') as unknown as string;
  }

  public get imageId(): ECRStartImageScanImageId {
    return new ECRStartImageScanImageId(this, 'ImageId', this.__resources, this.input);
  }

  public get imageScanStatus(): ECRStartImageScanImageScanStatus {
    return new ECRStartImageScanImageScanStatus(this, 'ImageScanStatus', this.__resources, this.input);
  }

}

export class ECRStartImageScanImageId extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrStartImageScanRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageId: {
            imageDigest: this.input.imageId.imageDigest,
            imageTag: this.input.imageId.imageTag,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageScan.imageId.imageDigest', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageId: {
            imageDigest: this.input.imageId.imageDigest,
            imageTag: this.input.imageId.imageTag,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageScan.imageId.imageTag', props);
    return resource.getResponseField('imageId.imageTag') as unknown as string;
  }

}

export class ECRStartImageScanImageScanStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrStartImageScanRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageId: {
            imageDigest: this.input.imageId.imageDigest,
            imageTag: this.input.imageId.imageTag,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageScan.imageScanStatus.status', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          imageId: {
            imageDigest: this.input.imageId.imageDigest,
            imageTag: this.input.imageId.imageTag,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageScan.imageScanStatus.description', props);
    return resource.getResponseField('imageScanStatus.description') as unknown as string;
  }

}

export class ECRStartLifecyclePolicyPreview extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrStartLifecyclePolicyPreviewRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          lifecyclePolicyText: this.input.lifecyclePolicyText,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartLifecyclePolicyPreview.registryId', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          lifecyclePolicyText: this.input.lifecyclePolicyText,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartLifecyclePolicyPreview.repositoryName', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          lifecyclePolicyText: this.input.lifecyclePolicyText,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartLifecyclePolicyPreview.lifecyclePolicyText', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          lifecyclePolicyText: this.input.lifecyclePolicyText,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartLifecyclePolicyPreview.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

}

export class ECRUploadLayerPart extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EcrUploadLayerPartRequest) {
    super(scope, id);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          uploadId: this.input.uploadId,
          partFirstByte: this.input.partFirstByte,
          partLastByte: this.input.partLastByte,
          layerPartBlob: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadLayerPart.registryId', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          uploadId: this.input.uploadId,
          partFirstByte: this.input.partFirstByte,
          partLastByte: this.input.partLastByte,
          layerPartBlob: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadLayerPart.repositoryName', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          uploadId: this.input.uploadId,
          partFirstByte: this.input.partFirstByte,
          partLastByte: this.input.partLastByte,
          layerPartBlob: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadLayerPart.uploadId', props);
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
          registryId: this.input.registryId,
          repositoryName: this.input.repositoryName,
          uploadId: this.input.uploadId,
          partFirstByte: this.input.partFirstByte,
          partLastByte: this.input.partLastByte,
          layerPartBlob: {
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UploadLayerPart.lastByteReceived', props);
    return resource.getResponseField('lastByteReceived') as unknown as number;
  }

}

