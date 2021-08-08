import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class EcrpublicClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchCheckLayerAvailability(input: shapes.EcrpublicBatchCheckLayerAvailabilityRequest): ECRPUBLICResponsesBatchCheckLayerAvailability {
    return new ECRPUBLICResponsesBatchCheckLayerAvailability(this, this.__resources, input);
  }

  public batchDeleteImage(input: shapes.EcrpublicBatchDeleteImageRequest): ECRPUBLICResponsesBatchDeleteImage {
    return new ECRPUBLICResponsesBatchDeleteImage(this, this.__resources, input);
  }

  public completeLayerUpload(input: shapes.EcrpublicCompleteLayerUploadRequest): ECRPUBLICResponsesCompleteLayerUpload {
    return new ECRPUBLICResponsesCompleteLayerUpload(this, this.__resources, input);
  }

  public createRepository(input: shapes.EcrpublicCreateRepositoryRequest): ECRPUBLICResponsesCreateRepository {
    return new ECRPUBLICResponsesCreateRepository(this, this.__resources, input);
  }

  public deleteRepository(input: shapes.EcrpublicDeleteRepositoryRequest): ECRPUBLICResponsesDeleteRepository {
    return new ECRPUBLICResponsesDeleteRepository(this, this.__resources, input);
  }

  public deleteRepositoryPolicy(input: shapes.EcrpublicDeleteRepositoryPolicyRequest): ECRPUBLICResponsesDeleteRepositoryPolicy {
    return new ECRPUBLICResponsesDeleteRepositoryPolicy(this, this.__resources, input);
  }

  public describeImageTags(input: shapes.EcrpublicDescribeImageTagsRequest): ECRPUBLICResponsesDescribeImageTags {
    return new ECRPUBLICResponsesDescribeImageTags(this, this.__resources, input);
  }

  public describeImages(input: shapes.EcrpublicDescribeImagesRequest): ECRPUBLICResponsesDescribeImages {
    return new ECRPUBLICResponsesDescribeImages(this, this.__resources, input);
  }

  public describeRegistries(input: shapes.EcrpublicDescribeRegistriesRequest): ECRPUBLICResponsesDescribeRegistries {
    return new ECRPUBLICResponsesDescribeRegistries(this, this.__resources, input);
  }

  public describeRepositories(input: shapes.EcrpublicDescribeRepositoriesRequest): ECRPUBLICResponsesDescribeRepositories {
    return new ECRPUBLICResponsesDescribeRepositories(this, this.__resources, input);
  }

  public fetchAuthorizationToken(): ECRPUBLICResponsesFetchAuthorizationToken {
    return new ECRPUBLICResponsesFetchAuthorizationToken(this, this.__resources);
  }

  public fetchRegistryCatalogData(): ECRPUBLICResponsesFetchRegistryCatalogData {
    return new ECRPUBLICResponsesFetchRegistryCatalogData(this, this.__resources);
  }

  public fetchRepositoryCatalogData(input: shapes.EcrpublicGetRepositoryCatalogDataRequest): ECRPUBLICResponsesFetchRepositoryCatalogData {
    return new ECRPUBLICResponsesFetchRepositoryCatalogData(this, this.__resources, input);
  }

  public fetchRepositoryPolicy(input: shapes.EcrpublicGetRepositoryPolicyRequest): ECRPUBLICResponsesFetchRepositoryPolicy {
    return new ECRPUBLICResponsesFetchRepositoryPolicy(this, this.__resources, input);
  }

  public initiateLayerUpload(input: shapes.EcrpublicInitiateLayerUploadRequest): ECRPUBLICResponsesInitiateLayerUpload {
    return new ECRPUBLICResponsesInitiateLayerUpload(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.EcrpublicListTagsForResourceRequest): ECRPUBLICResponsesListTagsForResource {
    return new ECRPUBLICResponsesListTagsForResource(this, this.__resources, input);
  }

  public putImage(input: shapes.EcrpublicPutImageRequest): ECRPUBLICResponsesPutImage {
    return new ECRPUBLICResponsesPutImage(this, this.__resources, input);
  }

  public putRegistryCatalogData(input: shapes.EcrpublicPutRegistryCatalogDataRequest): ECRPUBLICResponsesPutRegistryCatalogData {
    return new ECRPUBLICResponsesPutRegistryCatalogData(this, this.__resources, input);
  }

  public putRepositoryCatalogData(input: shapes.EcrpublicPutRepositoryCatalogDataRequest): ECRPUBLICResponsesPutRepositoryCatalogData {
    return new ECRPUBLICResponsesPutRepositoryCatalogData(this, this.__resources, input);
  }

  public putRepositoryPolicy(input: shapes.EcrpublicSetRepositoryPolicyRequest): ECRPUBLICResponsesPutRepositoryPolicy {
    return new ECRPUBLICResponsesPutRepositoryPolicy(this, this.__resources, input);
  }

  public tagResource(input: shapes.EcrpublicTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.EcrpublicUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public uploadLayerPart(input: shapes.EcrpublicUploadLayerPartRequest): ECRPUBLICResponsesUploadLayerPart {
    return new ECRPUBLICResponsesUploadLayerPart(this, this.__resources, input);
  }

}

export class ECRPUBLICResponsesBatchCheckLayerAvailability {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicBatchCheckLayerAvailabilityRequest) {
  }

  public get layers(): shapes.EcrpublicLayer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchCheckLayerAvailability',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.BatchCheckLayerAvailability.layers'),
        outputPath: 'layers',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          layerDigests: this.__input.layerDigests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchCheckLayerAvailability.layers', props);
    return resource.getResponseField('layers') as unknown as shapes.EcrpublicLayer[];
  }

  public get failures(): shapes.EcrpublicLayerFailure[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchCheckLayerAvailability',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.BatchCheckLayerAvailability.failures'),
        outputPath: 'failures',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          layerDigests: this.__input.layerDigests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchCheckLayerAvailability.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcrpublicLayerFailure[];
  }

}

export class ECRPUBLICResponsesBatchDeleteImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicBatchDeleteImageRequest) {
  }

  public get imageIds(): shapes.EcrpublicImageIdentifier[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteImage',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.BatchDeleteImage.imageIds'),
        outputPath: 'imageIds',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageIds: this.__input.imageIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDeleteImage.imageIds', props);
    return resource.getResponseField('imageIds') as unknown as shapes.EcrpublicImageIdentifier[];
  }

  public get failures(): shapes.EcrpublicImageFailure[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteImage',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.BatchDeleteImage.failures'),
        outputPath: 'failures',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageIds: this.__input.imageIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDeleteImage.failures', props);
    return resource.getResponseField('failures') as unknown as shapes.EcrpublicImageFailure[];
  }

}

export class ECRPUBLICResponsesCompleteLayerUpload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicCompleteLayerUploadRequest) {
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeLayerUpload',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.CompleteLayerUpload.registryId'),
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.CompleteLayerUpload.repositoryName'),
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.CompleteLayerUpload.uploadId'),
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.CompleteLayerUpload.layerDigest'),
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

export class ECRPUBLICResponsesCreateRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicCreateRepositoryRequest) {
  }

  public get repository(): ECRPUBLICResponsesCreateRepositoryRepository {
    return new ECRPUBLICResponsesCreateRepositoryRepository(this.__scope, this.__resources, this.__input);
  }

  public get catalogData(): ECRPUBLICResponsesCreateRepositoryCatalogData {
    return new ECRPUBLICResponsesCreateRepositoryCatalogData(this.__scope, this.__resources, this.__input);
  }

}

export class ECRPUBLICResponsesCreateRepositoryRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicCreateRepositoryRequest) {
  }

  public get repositoryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.CreateRepository.repository.repositoryArn'),
        outputPath: 'repository.repositoryArn',
        parameters: {
          repositoryName: this.__input.repositoryName,
          catalogData: {
            description: this.__input.catalogData?.description,
            architectures: this.__input.catalogData?.architectures,
            operatingSystems: this.__input.catalogData?.operatingSystems,
            logoImageBlob: {
            },
            aboutText: this.__input.catalogData?.aboutText,
            usageText: this.__input.catalogData?.usageText,
          },
          tags: this.__input.tags,
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.CreateRepository.repository.registryId'),
        outputPath: 'repository.registryId',
        parameters: {
          repositoryName: this.__input.repositoryName,
          catalogData: {
            description: this.__input.catalogData?.description,
            architectures: this.__input.catalogData?.architectures,
            operatingSystems: this.__input.catalogData?.operatingSystems,
            logoImageBlob: {
            },
            aboutText: this.__input.catalogData?.aboutText,
            usageText: this.__input.catalogData?.usageText,
          },
          tags: this.__input.tags,
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.CreateRepository.repository.repositoryName'),
        outputPath: 'repository.repositoryName',
        parameters: {
          repositoryName: this.__input.repositoryName,
          catalogData: {
            description: this.__input.catalogData?.description,
            architectures: this.__input.catalogData?.architectures,
            operatingSystems: this.__input.catalogData?.operatingSystems,
            logoImageBlob: {
            },
            aboutText: this.__input.catalogData?.aboutText,
            usageText: this.__input.catalogData?.usageText,
          },
          tags: this.__input.tags,
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.CreateRepository.repository.repositoryUri'),
        outputPath: 'repository.repositoryUri',
        parameters: {
          repositoryName: this.__input.repositoryName,
          catalogData: {
            description: this.__input.catalogData?.description,
            architectures: this.__input.catalogData?.architectures,
            operatingSystems: this.__input.catalogData?.operatingSystems,
            logoImageBlob: {
            },
            aboutText: this.__input.catalogData?.aboutText,
            usageText: this.__input.catalogData?.usageText,
          },
          tags: this.__input.tags,
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.CreateRepository.repository.createdAt'),
        outputPath: 'repository.createdAt',
        parameters: {
          repositoryName: this.__input.repositoryName,
          catalogData: {
            description: this.__input.catalogData?.description,
            architectures: this.__input.catalogData?.architectures,
            operatingSystems: this.__input.catalogData?.operatingSystems,
            logoImageBlob: {
            },
            aboutText: this.__input.catalogData?.aboutText,
            usageText: this.__input.catalogData?.usageText,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.repository.createdAt', props);
    return resource.getResponseField('repository.createdAt') as unknown as string;
  }

}

export class ECRPUBLICResponsesCreateRepositoryCatalogData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicCreateRepositoryRequest) {
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.CreateRepository.catalogData.description'),
        outputPath: 'catalogData.description',
        parameters: {
          repositoryName: this.__input.repositoryName,
          catalogData: {
            description: this.__input.catalogData?.description,
            architectures: this.__input.catalogData?.architectures,
            operatingSystems: this.__input.catalogData?.operatingSystems,
            logoImageBlob: {
            },
            aboutText: this.__input.catalogData?.aboutText,
            usageText: this.__input.catalogData?.usageText,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.catalogData.description', props);
    return resource.getResponseField('catalogData.description') as unknown as string;
  }

  public get architectures(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.CreateRepository.catalogData.architectures'),
        outputPath: 'catalogData.architectures',
        parameters: {
          repositoryName: this.__input.repositoryName,
          catalogData: {
            description: this.__input.catalogData?.description,
            architectures: this.__input.catalogData?.architectures,
            operatingSystems: this.__input.catalogData?.operatingSystems,
            logoImageBlob: {
            },
            aboutText: this.__input.catalogData?.aboutText,
            usageText: this.__input.catalogData?.usageText,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.catalogData.architectures', props);
    return resource.getResponseField('catalogData.architectures') as unknown as string[];
  }

  public get operatingSystems(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.CreateRepository.catalogData.operatingSystems'),
        outputPath: 'catalogData.operatingSystems',
        parameters: {
          repositoryName: this.__input.repositoryName,
          catalogData: {
            description: this.__input.catalogData?.description,
            architectures: this.__input.catalogData?.architectures,
            operatingSystems: this.__input.catalogData?.operatingSystems,
            logoImageBlob: {
            },
            aboutText: this.__input.catalogData?.aboutText,
            usageText: this.__input.catalogData?.usageText,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.catalogData.operatingSystems', props);
    return resource.getResponseField('catalogData.operatingSystems') as unknown as string[];
  }

  public get logoUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.CreateRepository.catalogData.logoUrl'),
        outputPath: 'catalogData.logoUrl',
        parameters: {
          repositoryName: this.__input.repositoryName,
          catalogData: {
            description: this.__input.catalogData?.description,
            architectures: this.__input.catalogData?.architectures,
            operatingSystems: this.__input.catalogData?.operatingSystems,
            logoImageBlob: {
            },
            aboutText: this.__input.catalogData?.aboutText,
            usageText: this.__input.catalogData?.usageText,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.catalogData.logoUrl', props);
    return resource.getResponseField('catalogData.logoUrl') as unknown as string;
  }

  public get aboutText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.CreateRepository.catalogData.aboutText'),
        outputPath: 'catalogData.aboutText',
        parameters: {
          repositoryName: this.__input.repositoryName,
          catalogData: {
            description: this.__input.catalogData?.description,
            architectures: this.__input.catalogData?.architectures,
            operatingSystems: this.__input.catalogData?.operatingSystems,
            logoImageBlob: {
            },
            aboutText: this.__input.catalogData?.aboutText,
            usageText: this.__input.catalogData?.usageText,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.catalogData.aboutText', props);
    return resource.getResponseField('catalogData.aboutText') as unknown as string;
  }

  public get usageText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.CreateRepository.catalogData.usageText'),
        outputPath: 'catalogData.usageText',
        parameters: {
          repositoryName: this.__input.repositoryName,
          catalogData: {
            description: this.__input.catalogData?.description,
            architectures: this.__input.catalogData?.architectures,
            operatingSystems: this.__input.catalogData?.operatingSystems,
            logoImageBlob: {
            },
            aboutText: this.__input.catalogData?.aboutText,
            usageText: this.__input.catalogData?.usageText,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.catalogData.usageText', props);
    return resource.getResponseField('catalogData.usageText') as unknown as string;
  }

  public get marketplaceCertified(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRepository',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.CreateRepository.catalogData.marketplaceCertified'),
        outputPath: 'catalogData.marketplaceCertified',
        parameters: {
          repositoryName: this.__input.repositoryName,
          catalogData: {
            description: this.__input.catalogData?.description,
            architectures: this.__input.catalogData?.architectures,
            operatingSystems: this.__input.catalogData?.operatingSystems,
            logoImageBlob: {
            },
            aboutText: this.__input.catalogData?.aboutText,
            usageText: this.__input.catalogData?.usageText,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRepository.catalogData.marketplaceCertified', props);
    return resource.getResponseField('catalogData.marketplaceCertified') as unknown as boolean;
  }

}

export class ECRPUBLICResponsesDeleteRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicDeleteRepositoryRequest) {
  }

  public get repository(): ECRPUBLICResponsesDeleteRepositoryRepository {
    return new ECRPUBLICResponsesDeleteRepositoryRepository(this.__scope, this.__resources, this.__input);
  }

}

export class ECRPUBLICResponsesDeleteRepositoryRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicDeleteRepositoryRequest) {
  }

  public get repositoryArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepository',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.DeleteRepository.repository.repositoryArn'),
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.DeleteRepository.repository.registryId'),
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.DeleteRepository.repository.repositoryName'),
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.DeleteRepository.repository.repositoryUri'),
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.DeleteRepository.repository.createdAt'),
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

}

export class ECRPUBLICResponsesDeleteRepositoryPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicDeleteRepositoryPolicyRequest) {
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRepositoryPolicy',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.DeleteRepositoryPolicy.registryId'),
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.DeleteRepositoryPolicy.repositoryName'),
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.DeleteRepositoryPolicy.policyText'),
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

export class ECRPUBLICResponsesDescribeImageTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicDescribeImageTagsRequest) {
  }

  public get imageTagDetails(): shapes.EcrpublicImageTagDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageTags',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.DescribeImageTags.imageTagDetails'),
        outputPath: 'imageTagDetails',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageTags.imageTagDetails', props);
    return resource.getResponseField('imageTagDetails') as unknown as shapes.EcrpublicImageTagDetail[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageTags',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.DescribeImageTags.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageTags.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECRPUBLICResponsesDescribeImages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicDescribeImagesRequest) {
  }

  public get imageDetails(): shapes.EcrpublicImageDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImages',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.DescribeImages.imageDetails'),
        outputPath: 'imageDetails',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageIds: this.__input.imageIds,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImages.imageDetails', props);
    return resource.getResponseField('imageDetails') as unknown as shapes.EcrpublicImageDetail[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImages',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.DescribeImages.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          imageIds: this.__input.imageIds,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImages.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECRPUBLICResponsesDescribeRegistries {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicDescribeRegistriesRequest) {
  }

  public get registries(): shapes.EcrpublicRegistry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRegistries',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.DescribeRegistries.registries'),
        outputPath: 'registries',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRegistries.registries', props);
    return resource.getResponseField('registries') as unknown as shapes.EcrpublicRegistry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRegistries',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.DescribeRegistries.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRegistries.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class ECRPUBLICResponsesDescribeRepositories {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicDescribeRepositoriesRequest) {
  }

  public get repositories(): shapes.EcrpublicRepository[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepositories',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.DescribeRepositories.repositories'),
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
    return resource.getResponseField('repositories') as unknown as shapes.EcrpublicRepository[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepositories',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.DescribeRepositories.nextToken'),
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

export class ECRPUBLICResponsesFetchAuthorizationToken {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get authorizationData(): ECRPUBLICResponsesFetchAuthorizationTokenAuthorizationData {
    return new ECRPUBLICResponsesFetchAuthorizationTokenAuthorizationData(this.__scope, this.__resources);
  }

}

export class ECRPUBLICResponsesFetchAuthorizationTokenAuthorizationData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get authorizationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizationToken',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.GetAuthorizationToken.authorizationData.authorizationToken'),
        outputPath: 'authorizationData.authorizationToken',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizationToken.authorizationData.authorizationToken', props);
    return resource.getResponseField('authorizationData.authorizationToken') as unknown as string;
  }

  public get expiresAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAuthorizationToken',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.GetAuthorizationToken.authorizationData.expiresAt'),
        outputPath: 'authorizationData.expiresAt',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAuthorizationToken.authorizationData.expiresAt', props);
    return resource.getResponseField('authorizationData.expiresAt') as unknown as string;
  }

}

export class ECRPUBLICResponsesFetchRegistryCatalogData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get registryCatalogData(): ECRPUBLICResponsesFetchRegistryCatalogDataRegistryCatalogData {
    return new ECRPUBLICResponsesFetchRegistryCatalogDataRegistryCatalogData(this.__scope, this.__resources);
  }

}

export class ECRPUBLICResponsesFetchRegistryCatalogDataRegistryCatalogData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRegistryCatalogData',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.GetRegistryCatalogData.registryCatalogData.displayName'),
        outputPath: 'registryCatalogData.displayName',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRegistryCatalogData.registryCatalogData.displayName', props);
    return resource.getResponseField('registryCatalogData.displayName') as unknown as string;
  }

}

export class ECRPUBLICResponsesFetchRepositoryCatalogData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicGetRepositoryCatalogDataRequest) {
  }

  public get catalogData(): ECRPUBLICResponsesFetchRepositoryCatalogDataCatalogData {
    return new ECRPUBLICResponsesFetchRepositoryCatalogDataCatalogData(this.__scope, this.__resources, this.__input);
  }

}

export class ECRPUBLICResponsesFetchRepositoryCatalogDataCatalogData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicGetRepositoryCatalogDataRequest) {
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepositoryCatalogData',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.GetRepositoryCatalogData.catalogData.description'),
        outputPath: 'catalogData.description',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepositoryCatalogData.catalogData.description', props);
    return resource.getResponseField('catalogData.description') as unknown as string;
  }

  public get architectures(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepositoryCatalogData',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.GetRepositoryCatalogData.catalogData.architectures'),
        outputPath: 'catalogData.architectures',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepositoryCatalogData.catalogData.architectures', props);
    return resource.getResponseField('catalogData.architectures') as unknown as string[];
  }

  public get operatingSystems(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepositoryCatalogData',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.GetRepositoryCatalogData.catalogData.operatingSystems'),
        outputPath: 'catalogData.operatingSystems',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepositoryCatalogData.catalogData.operatingSystems', props);
    return resource.getResponseField('catalogData.operatingSystems') as unknown as string[];
  }

  public get logoUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepositoryCatalogData',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.GetRepositoryCatalogData.catalogData.logoUrl'),
        outputPath: 'catalogData.logoUrl',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepositoryCatalogData.catalogData.logoUrl', props);
    return resource.getResponseField('catalogData.logoUrl') as unknown as string;
  }

  public get aboutText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepositoryCatalogData',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.GetRepositoryCatalogData.catalogData.aboutText'),
        outputPath: 'catalogData.aboutText',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepositoryCatalogData.catalogData.aboutText', props);
    return resource.getResponseField('catalogData.aboutText') as unknown as string;
  }

  public get usageText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepositoryCatalogData',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.GetRepositoryCatalogData.catalogData.usageText'),
        outputPath: 'catalogData.usageText',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepositoryCatalogData.catalogData.usageText', props);
    return resource.getResponseField('catalogData.usageText') as unknown as string;
  }

  public get marketplaceCertified(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepositoryCatalogData',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.GetRepositoryCatalogData.catalogData.marketplaceCertified'),
        outputPath: 'catalogData.marketplaceCertified',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetRepositoryCatalogData.catalogData.marketplaceCertified', props);
    return resource.getResponseField('catalogData.marketplaceCertified') as unknown as boolean;
  }

}

export class ECRPUBLICResponsesFetchRepositoryPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicGetRepositoryPolicyRequest) {
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getRepositoryPolicy',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.GetRepositoryPolicy.registryId'),
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.GetRepositoryPolicy.repositoryName'),
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.GetRepositoryPolicy.policyText'),
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

export class ECRPUBLICResponsesInitiateLayerUpload {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicInitiateLayerUploadRequest) {
  }

  public get uploadId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'initiateLayerUpload',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.InitiateLayerUpload.uploadId'),
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.InitiateLayerUpload.partSize'),
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

export class ECRPUBLICResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicListTagsForResourceRequest) {
  }

  public get tags(): shapes.EcrpublicTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.EcrpublicTag[];
  }

}

export class ECRPUBLICResponsesPutImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicPutImageRequest) {
  }

  public get image(): ECRPUBLICResponsesPutImageImage {
    return new ECRPUBLICResponsesPutImageImage(this.__scope, this.__resources, this.__input);
  }

}

export class ECRPUBLICResponsesPutImageImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicPutImageRequest) {
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putImage',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.PutImage.image.registryId'),
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.PutImage.image.repositoryName'),
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

  public get imageId(): ECRPUBLICResponsesPutImageImageImageId {
    return new ECRPUBLICResponsesPutImageImageImageId(this.__scope, this.__resources, this.__input);
  }

  public get imageManifest(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putImage',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.PutImage.image.imageManifest'),
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.PutImage.image.imageManifestMediaType'),
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

export class ECRPUBLICResponsesPutImageImageImageId {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicPutImageRequest) {
  }

  public get imageDigest(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putImage',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.PutImage.image.imageId.imageDigest'),
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.PutImage.image.imageId.imageTag'),
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

export class ECRPUBLICResponsesPutRegistryCatalogData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicPutRegistryCatalogDataRequest) {
  }

  public get registryCatalogData(): ECRPUBLICResponsesPutRegistryCatalogDataRegistryCatalogData {
    return new ECRPUBLICResponsesPutRegistryCatalogDataRegistryCatalogData(this.__scope, this.__resources, this.__input);
  }

}

export class ECRPUBLICResponsesPutRegistryCatalogDataRegistryCatalogData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicPutRegistryCatalogDataRequest) {
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRegistryCatalogData',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.PutRegistryCatalogData.registryCatalogData.displayName'),
        outputPath: 'registryCatalogData.displayName',
        parameters: {
          displayName: this.__input.displayName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRegistryCatalogData.registryCatalogData.displayName', props);
    return resource.getResponseField('registryCatalogData.displayName') as unknown as string;
  }

}

export class ECRPUBLICResponsesPutRepositoryCatalogData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicPutRepositoryCatalogDataRequest) {
  }

  public get catalogData(): ECRPUBLICResponsesPutRepositoryCatalogDataCatalogData {
    return new ECRPUBLICResponsesPutRepositoryCatalogDataCatalogData(this.__scope, this.__resources, this.__input);
  }

}

export class ECRPUBLICResponsesPutRepositoryCatalogDataCatalogData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicPutRepositoryCatalogDataRequest) {
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRepositoryCatalogData',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.PutRepositoryCatalogData.catalogData.description'),
        outputPath: 'catalogData.description',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          catalogData: {
            description: this.__input.catalogData.description,
            architectures: this.__input.catalogData.architectures,
            operatingSystems: this.__input.catalogData.operatingSystems,
            logoImageBlob: {
            },
            aboutText: this.__input.catalogData.aboutText,
            usageText: this.__input.catalogData.usageText,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRepositoryCatalogData.catalogData.description', props);
    return resource.getResponseField('catalogData.description') as unknown as string;
  }

  public get architectures(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRepositoryCatalogData',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.PutRepositoryCatalogData.catalogData.architectures'),
        outputPath: 'catalogData.architectures',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          catalogData: {
            description: this.__input.catalogData.description,
            architectures: this.__input.catalogData.architectures,
            operatingSystems: this.__input.catalogData.operatingSystems,
            logoImageBlob: {
            },
            aboutText: this.__input.catalogData.aboutText,
            usageText: this.__input.catalogData.usageText,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRepositoryCatalogData.catalogData.architectures', props);
    return resource.getResponseField('catalogData.architectures') as unknown as string[];
  }

  public get operatingSystems(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRepositoryCatalogData',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.PutRepositoryCatalogData.catalogData.operatingSystems'),
        outputPath: 'catalogData.operatingSystems',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          catalogData: {
            description: this.__input.catalogData.description,
            architectures: this.__input.catalogData.architectures,
            operatingSystems: this.__input.catalogData.operatingSystems,
            logoImageBlob: {
            },
            aboutText: this.__input.catalogData.aboutText,
            usageText: this.__input.catalogData.usageText,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRepositoryCatalogData.catalogData.operatingSystems', props);
    return resource.getResponseField('catalogData.operatingSystems') as unknown as string[];
  }

  public get logoUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRepositoryCatalogData',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.PutRepositoryCatalogData.catalogData.logoUrl'),
        outputPath: 'catalogData.logoUrl',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          catalogData: {
            description: this.__input.catalogData.description,
            architectures: this.__input.catalogData.architectures,
            operatingSystems: this.__input.catalogData.operatingSystems,
            logoImageBlob: {
            },
            aboutText: this.__input.catalogData.aboutText,
            usageText: this.__input.catalogData.usageText,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRepositoryCatalogData.catalogData.logoUrl', props);
    return resource.getResponseField('catalogData.logoUrl') as unknown as string;
  }

  public get aboutText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRepositoryCatalogData',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.PutRepositoryCatalogData.catalogData.aboutText'),
        outputPath: 'catalogData.aboutText',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          catalogData: {
            description: this.__input.catalogData.description,
            architectures: this.__input.catalogData.architectures,
            operatingSystems: this.__input.catalogData.operatingSystems,
            logoImageBlob: {
            },
            aboutText: this.__input.catalogData.aboutText,
            usageText: this.__input.catalogData.usageText,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRepositoryCatalogData.catalogData.aboutText', props);
    return resource.getResponseField('catalogData.aboutText') as unknown as string;
  }

  public get usageText(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRepositoryCatalogData',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.PutRepositoryCatalogData.catalogData.usageText'),
        outputPath: 'catalogData.usageText',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          catalogData: {
            description: this.__input.catalogData.description,
            architectures: this.__input.catalogData.architectures,
            operatingSystems: this.__input.catalogData.operatingSystems,
            logoImageBlob: {
            },
            aboutText: this.__input.catalogData.aboutText,
            usageText: this.__input.catalogData.usageText,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRepositoryCatalogData.catalogData.usageText', props);
    return resource.getResponseField('catalogData.usageText') as unknown as string;
  }

  public get marketplaceCertified(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRepositoryCatalogData',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.PutRepositoryCatalogData.catalogData.marketplaceCertified'),
        outputPath: 'catalogData.marketplaceCertified',
        parameters: {
          registryId: this.__input.registryId,
          repositoryName: this.__input.repositoryName,
          catalogData: {
            description: this.__input.catalogData.description,
            architectures: this.__input.catalogData.architectures,
            operatingSystems: this.__input.catalogData.operatingSystems,
            logoImageBlob: {
            },
            aboutText: this.__input.catalogData.aboutText,
            usageText: this.__input.catalogData.usageText,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutRepositoryCatalogData.catalogData.marketplaceCertified', props);
    return resource.getResponseField('catalogData.marketplaceCertified') as unknown as boolean;
  }

}

export class ECRPUBLICResponsesPutRepositoryPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicSetRepositoryPolicyRequest) {
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setRepositoryPolicy',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.SetRepositoryPolicy.registryId'),
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.SetRepositoryPolicy.repositoryName'),
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.SetRepositoryPolicy.policyText'),
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

export class ECRPUBLICResponsesUploadLayerPart {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EcrpublicUploadLayerPartRequest) {
  }

  public get registryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'uploadLayerPart',
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.UploadLayerPart.registryId'),
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.UploadLayerPart.repositoryName'),
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.UploadLayerPart.uploadId'),
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
        service: 'ECRPUBLIC',
        physicalResourceId: cr.PhysicalResourceId.of('ECRPUBLIC.UploadLayerPart.lastByteReceived'),
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

