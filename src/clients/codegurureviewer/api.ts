import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CodeGuruReviewerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateRepository(input: shapes.CodeGuruReviewerAssociateRepositoryRequest): CodeGuruReviewerResponsesAssociateRepository {
    return new CodeGuruReviewerResponsesAssociateRepository(this, this.__resources, input);
  }

  public createCodeReview(input: shapes.CodeGuruReviewerCreateCodeReviewRequest): CodeGuruReviewerResponsesCreateCodeReview {
    return new CodeGuruReviewerResponsesCreateCodeReview(this, this.__resources, input);
  }

  public describeCodeReview(input: shapes.CodeGuruReviewerDescribeCodeReviewRequest): CodeGuruReviewerResponsesDescribeCodeReview {
    return new CodeGuruReviewerResponsesDescribeCodeReview(this, this.__resources, input);
  }

  public describeRecommendationFeedback(input: shapes.CodeGuruReviewerDescribeRecommendationFeedbackRequest): CodeGuruReviewerResponsesDescribeRecommendationFeedback {
    return new CodeGuruReviewerResponsesDescribeRecommendationFeedback(this, this.__resources, input);
  }

  public describeRepositoryAssociation(input: shapes.CodeGuruReviewerDescribeRepositoryAssociationRequest): CodeGuruReviewerResponsesDescribeRepositoryAssociation {
    return new CodeGuruReviewerResponsesDescribeRepositoryAssociation(this, this.__resources, input);
  }

  public disassociateRepository(input: shapes.CodeGuruReviewerDisassociateRepositoryRequest): CodeGuruReviewerResponsesDisassociateRepository {
    return new CodeGuruReviewerResponsesDisassociateRepository(this, this.__resources, input);
  }

  public listCodeReviews(input: shapes.CodeGuruReviewerListCodeReviewsRequest): CodeGuruReviewerResponsesListCodeReviews {
    return new CodeGuruReviewerResponsesListCodeReviews(this, this.__resources, input);
  }

  public listRecommendationFeedback(input: shapes.CodeGuruReviewerListRecommendationFeedbackRequest): CodeGuruReviewerResponsesListRecommendationFeedback {
    return new CodeGuruReviewerResponsesListRecommendationFeedback(this, this.__resources, input);
  }

  public listRecommendations(input: shapes.CodeGuruReviewerListRecommendationsRequest): CodeGuruReviewerResponsesListRecommendations {
    return new CodeGuruReviewerResponsesListRecommendations(this, this.__resources, input);
  }

  public listRepositoryAssociations(input: shapes.CodeGuruReviewerListRepositoryAssociationsRequest): CodeGuruReviewerResponsesListRepositoryAssociations {
    return new CodeGuruReviewerResponsesListRepositoryAssociations(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.CodeGuruReviewerListTagsForResourceRequest): CodeGuruReviewerResponsesListTagsForResource {
    return new CodeGuruReviewerResponsesListTagsForResource(this, this.__resources, input);
  }

  public putRecommendationFeedback(input: shapes.CodeGuruReviewerPutRecommendationFeedbackRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putRecommendationFeedback',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.PutRecommendationFeedback'),
        parameters: {
          CodeReviewArn: input.codeReviewArn,
          RecommendationId: input.recommendationId,
          Reactions: input.reactions,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutRecommendationFeedback', props);
  }

  public tagResource(input: shapes.CodeGuruReviewerTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.CodeGuruReviewerUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

}

export class CodeGuruReviewerResponsesAssociateRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerAssociateRepositoryRequest) {
  }

  public get repositoryAssociation(): CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation {
    return new CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation(this.__scope, this.__resources, this.__input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.AssociateRepository.Tags'),
        outputPath: 'Tags',
        parameters: {
          Repository: {
            CodeCommit: {
              Name: this.__input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.__input.repository.bitbucket?.name,
              ConnectionArn: this.__input.repository.bitbucket?.connectionArn,
              Owner: this.__input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.__input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.__input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.__input.repository.gitHubEnterpriseServer?.owner,
            },
            S3Bucket: {
              Name: this.__input.repository.s3Bucket?.name,
              BucketName: this.__input.repository.s3Bucket?.bucketName,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
          KMSKeyDetails: {
            KMSKeyId: this.__input.kmsKeyDetails?.kmsKeyId,
            EncryptionOption: this.__input.kmsKeyDetails?.encryptionOption,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateRepository.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerAssociateRepositoryRequest) {
  }

  public get associationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.AssociateRepository.RepositoryAssociation.AssociationId'),
        outputPath: 'RepositoryAssociation.AssociationId',
        parameters: {
          Repository: {
            CodeCommit: {
              Name: this.__input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.__input.repository.bitbucket?.name,
              ConnectionArn: this.__input.repository.bitbucket?.connectionArn,
              Owner: this.__input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.__input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.__input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.__input.repository.gitHubEnterpriseServer?.owner,
            },
            S3Bucket: {
              Name: this.__input.repository.s3Bucket?.name,
              BucketName: this.__input.repository.s3Bucket?.bucketName,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
          KMSKeyDetails: {
            KMSKeyId: this.__input.kmsKeyDetails?.kmsKeyId,
            EncryptionOption: this.__input.kmsKeyDetails?.encryptionOption,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateRepository.RepositoryAssociation.AssociationId', props);
    return resource.getResponseField('RepositoryAssociation.AssociationId') as unknown as string;
  }

  public get associationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.AssociateRepository.RepositoryAssociation.AssociationArn'),
        outputPath: 'RepositoryAssociation.AssociationArn',
        parameters: {
          Repository: {
            CodeCommit: {
              Name: this.__input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.__input.repository.bitbucket?.name,
              ConnectionArn: this.__input.repository.bitbucket?.connectionArn,
              Owner: this.__input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.__input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.__input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.__input.repository.gitHubEnterpriseServer?.owner,
            },
            S3Bucket: {
              Name: this.__input.repository.s3Bucket?.name,
              BucketName: this.__input.repository.s3Bucket?.bucketName,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
          KMSKeyDetails: {
            KMSKeyId: this.__input.kmsKeyDetails?.kmsKeyId,
            EncryptionOption: this.__input.kmsKeyDetails?.encryptionOption,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateRepository.RepositoryAssociation.AssociationArn', props);
    return resource.getResponseField('RepositoryAssociation.AssociationArn') as unknown as string;
  }

  public get connectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.AssociateRepository.RepositoryAssociation.ConnectionArn'),
        outputPath: 'RepositoryAssociation.ConnectionArn',
        parameters: {
          Repository: {
            CodeCommit: {
              Name: this.__input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.__input.repository.bitbucket?.name,
              ConnectionArn: this.__input.repository.bitbucket?.connectionArn,
              Owner: this.__input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.__input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.__input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.__input.repository.gitHubEnterpriseServer?.owner,
            },
            S3Bucket: {
              Name: this.__input.repository.s3Bucket?.name,
              BucketName: this.__input.repository.s3Bucket?.bucketName,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
          KMSKeyDetails: {
            KMSKeyId: this.__input.kmsKeyDetails?.kmsKeyId,
            EncryptionOption: this.__input.kmsKeyDetails?.encryptionOption,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateRepository.RepositoryAssociation.ConnectionArn', props);
    return resource.getResponseField('RepositoryAssociation.ConnectionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.AssociateRepository.RepositoryAssociation.Name'),
        outputPath: 'RepositoryAssociation.Name',
        parameters: {
          Repository: {
            CodeCommit: {
              Name: this.__input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.__input.repository.bitbucket?.name,
              ConnectionArn: this.__input.repository.bitbucket?.connectionArn,
              Owner: this.__input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.__input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.__input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.__input.repository.gitHubEnterpriseServer?.owner,
            },
            S3Bucket: {
              Name: this.__input.repository.s3Bucket?.name,
              BucketName: this.__input.repository.s3Bucket?.bucketName,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
          KMSKeyDetails: {
            KMSKeyId: this.__input.kmsKeyDetails?.kmsKeyId,
            EncryptionOption: this.__input.kmsKeyDetails?.encryptionOption,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateRepository.RepositoryAssociation.Name', props);
    return resource.getResponseField('RepositoryAssociation.Name') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.AssociateRepository.RepositoryAssociation.Owner'),
        outputPath: 'RepositoryAssociation.Owner',
        parameters: {
          Repository: {
            CodeCommit: {
              Name: this.__input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.__input.repository.bitbucket?.name,
              ConnectionArn: this.__input.repository.bitbucket?.connectionArn,
              Owner: this.__input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.__input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.__input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.__input.repository.gitHubEnterpriseServer?.owner,
            },
            S3Bucket: {
              Name: this.__input.repository.s3Bucket?.name,
              BucketName: this.__input.repository.s3Bucket?.bucketName,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
          KMSKeyDetails: {
            KMSKeyId: this.__input.kmsKeyDetails?.kmsKeyId,
            EncryptionOption: this.__input.kmsKeyDetails?.encryptionOption,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateRepository.RepositoryAssociation.Owner', props);
    return resource.getResponseField('RepositoryAssociation.Owner') as unknown as string;
  }

  public get providerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.AssociateRepository.RepositoryAssociation.ProviderType'),
        outputPath: 'RepositoryAssociation.ProviderType',
        parameters: {
          Repository: {
            CodeCommit: {
              Name: this.__input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.__input.repository.bitbucket?.name,
              ConnectionArn: this.__input.repository.bitbucket?.connectionArn,
              Owner: this.__input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.__input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.__input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.__input.repository.gitHubEnterpriseServer?.owner,
            },
            S3Bucket: {
              Name: this.__input.repository.s3Bucket?.name,
              BucketName: this.__input.repository.s3Bucket?.bucketName,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
          KMSKeyDetails: {
            KMSKeyId: this.__input.kmsKeyDetails?.kmsKeyId,
            EncryptionOption: this.__input.kmsKeyDetails?.encryptionOption,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateRepository.RepositoryAssociation.ProviderType', props);
    return resource.getResponseField('RepositoryAssociation.ProviderType') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.AssociateRepository.RepositoryAssociation.State'),
        outputPath: 'RepositoryAssociation.State',
        parameters: {
          Repository: {
            CodeCommit: {
              Name: this.__input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.__input.repository.bitbucket?.name,
              ConnectionArn: this.__input.repository.bitbucket?.connectionArn,
              Owner: this.__input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.__input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.__input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.__input.repository.gitHubEnterpriseServer?.owner,
            },
            S3Bucket: {
              Name: this.__input.repository.s3Bucket?.name,
              BucketName: this.__input.repository.s3Bucket?.bucketName,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
          KMSKeyDetails: {
            KMSKeyId: this.__input.kmsKeyDetails?.kmsKeyId,
            EncryptionOption: this.__input.kmsKeyDetails?.encryptionOption,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateRepository.RepositoryAssociation.State', props);
    return resource.getResponseField('RepositoryAssociation.State') as unknown as string;
  }

  public get stateReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.AssociateRepository.RepositoryAssociation.StateReason'),
        outputPath: 'RepositoryAssociation.StateReason',
        parameters: {
          Repository: {
            CodeCommit: {
              Name: this.__input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.__input.repository.bitbucket?.name,
              ConnectionArn: this.__input.repository.bitbucket?.connectionArn,
              Owner: this.__input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.__input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.__input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.__input.repository.gitHubEnterpriseServer?.owner,
            },
            S3Bucket: {
              Name: this.__input.repository.s3Bucket?.name,
              BucketName: this.__input.repository.s3Bucket?.bucketName,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
          KMSKeyDetails: {
            KMSKeyId: this.__input.kmsKeyDetails?.kmsKeyId,
            EncryptionOption: this.__input.kmsKeyDetails?.encryptionOption,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateRepository.RepositoryAssociation.StateReason', props);
    return resource.getResponseField('RepositoryAssociation.StateReason') as unknown as string;
  }

  public get lastUpdatedTimeStamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.AssociateRepository.RepositoryAssociation.LastUpdatedTimeStamp'),
        outputPath: 'RepositoryAssociation.LastUpdatedTimeStamp',
        parameters: {
          Repository: {
            CodeCommit: {
              Name: this.__input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.__input.repository.bitbucket?.name,
              ConnectionArn: this.__input.repository.bitbucket?.connectionArn,
              Owner: this.__input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.__input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.__input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.__input.repository.gitHubEnterpriseServer?.owner,
            },
            S3Bucket: {
              Name: this.__input.repository.s3Bucket?.name,
              BucketName: this.__input.repository.s3Bucket?.bucketName,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
          KMSKeyDetails: {
            KMSKeyId: this.__input.kmsKeyDetails?.kmsKeyId,
            EncryptionOption: this.__input.kmsKeyDetails?.encryptionOption,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateRepository.RepositoryAssociation.LastUpdatedTimeStamp', props);
    return resource.getResponseField('RepositoryAssociation.LastUpdatedTimeStamp') as unknown as string;
  }

  public get createdTimeStamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.AssociateRepository.RepositoryAssociation.CreatedTimeStamp'),
        outputPath: 'RepositoryAssociation.CreatedTimeStamp',
        parameters: {
          Repository: {
            CodeCommit: {
              Name: this.__input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.__input.repository.bitbucket?.name,
              ConnectionArn: this.__input.repository.bitbucket?.connectionArn,
              Owner: this.__input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.__input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.__input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.__input.repository.gitHubEnterpriseServer?.owner,
            },
            S3Bucket: {
              Name: this.__input.repository.s3Bucket?.name,
              BucketName: this.__input.repository.s3Bucket?.bucketName,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
          KMSKeyDetails: {
            KMSKeyId: this.__input.kmsKeyDetails?.kmsKeyId,
            EncryptionOption: this.__input.kmsKeyDetails?.encryptionOption,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateRepository.RepositoryAssociation.CreatedTimeStamp', props);
    return resource.getResponseField('RepositoryAssociation.CreatedTimeStamp') as unknown as string;
  }

  public get kmsKeyDetails(): CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociationKmsKeyDetails {
    return new CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociationKmsKeyDetails(this.__scope, this.__resources, this.__input);
  }

  public get s3RepositoryDetails(): CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociationS3RepositoryDetails {
    return new CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociationS3RepositoryDetails(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociationKmsKeyDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerAssociateRepositoryRequest) {
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.AssociateRepository.RepositoryAssociation.KMSKeyDetails.KMSKeyId'),
        outputPath: 'RepositoryAssociation.KMSKeyDetails.KMSKeyId',
        parameters: {
          Repository: {
            CodeCommit: {
              Name: this.__input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.__input.repository.bitbucket?.name,
              ConnectionArn: this.__input.repository.bitbucket?.connectionArn,
              Owner: this.__input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.__input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.__input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.__input.repository.gitHubEnterpriseServer?.owner,
            },
            S3Bucket: {
              Name: this.__input.repository.s3Bucket?.name,
              BucketName: this.__input.repository.s3Bucket?.bucketName,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
          KMSKeyDetails: {
            KMSKeyId: this.__input.kmsKeyDetails?.kmsKeyId,
            EncryptionOption: this.__input.kmsKeyDetails?.encryptionOption,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateRepository.RepositoryAssociation.KMSKeyDetails.KMSKeyId', props);
    return resource.getResponseField('RepositoryAssociation.KMSKeyDetails.KMSKeyId') as unknown as string;
  }

  public get encryptionOption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.AssociateRepository.RepositoryAssociation.KMSKeyDetails.EncryptionOption'),
        outputPath: 'RepositoryAssociation.KMSKeyDetails.EncryptionOption',
        parameters: {
          Repository: {
            CodeCommit: {
              Name: this.__input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.__input.repository.bitbucket?.name,
              ConnectionArn: this.__input.repository.bitbucket?.connectionArn,
              Owner: this.__input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.__input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.__input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.__input.repository.gitHubEnterpriseServer?.owner,
            },
            S3Bucket: {
              Name: this.__input.repository.s3Bucket?.name,
              BucketName: this.__input.repository.s3Bucket?.bucketName,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
          KMSKeyDetails: {
            KMSKeyId: this.__input.kmsKeyDetails?.kmsKeyId,
            EncryptionOption: this.__input.kmsKeyDetails?.encryptionOption,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateRepository.RepositoryAssociation.KMSKeyDetails.EncryptionOption', props);
    return resource.getResponseField('RepositoryAssociation.KMSKeyDetails.EncryptionOption') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociationS3RepositoryDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerAssociateRepositoryRequest) {
  }

  public get bucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.AssociateRepository.RepositoryAssociation.S3RepositoryDetails.BucketName'),
        outputPath: 'RepositoryAssociation.S3RepositoryDetails.BucketName',
        parameters: {
          Repository: {
            CodeCommit: {
              Name: this.__input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.__input.repository.bitbucket?.name,
              ConnectionArn: this.__input.repository.bitbucket?.connectionArn,
              Owner: this.__input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.__input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.__input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.__input.repository.gitHubEnterpriseServer?.owner,
            },
            S3Bucket: {
              Name: this.__input.repository.s3Bucket?.name,
              BucketName: this.__input.repository.s3Bucket?.bucketName,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
          KMSKeyDetails: {
            KMSKeyId: this.__input.kmsKeyDetails?.kmsKeyId,
            EncryptionOption: this.__input.kmsKeyDetails?.encryptionOption,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateRepository.RepositoryAssociation.S3RepositoryDetails.BucketName', props);
    return resource.getResponseField('RepositoryAssociation.S3RepositoryDetails.BucketName') as unknown as string;
  }

  public get codeArtifacts(): CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociationS3RepositoryDetailsCodeArtifacts {
    return new CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociationS3RepositoryDetailsCodeArtifacts(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruReviewerResponsesAssociateRepositoryRepositoryAssociationS3RepositoryDetailsCodeArtifacts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerAssociateRepositoryRequest) {
  }

  public get sourceCodeArtifactsObjectKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.AssociateRepository.RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.SourceCodeArtifactsObjectKey'),
        outputPath: 'RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.SourceCodeArtifactsObjectKey',
        parameters: {
          Repository: {
            CodeCommit: {
              Name: this.__input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.__input.repository.bitbucket?.name,
              ConnectionArn: this.__input.repository.bitbucket?.connectionArn,
              Owner: this.__input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.__input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.__input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.__input.repository.gitHubEnterpriseServer?.owner,
            },
            S3Bucket: {
              Name: this.__input.repository.s3Bucket?.name,
              BucketName: this.__input.repository.s3Bucket?.bucketName,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
          KMSKeyDetails: {
            KMSKeyId: this.__input.kmsKeyDetails?.kmsKeyId,
            EncryptionOption: this.__input.kmsKeyDetails?.encryptionOption,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateRepository.RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.SourceCodeArtifactsObjectKey', props);
    return resource.getResponseField('RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.SourceCodeArtifactsObjectKey') as unknown as string;
  }

  public get buildArtifactsObjectKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.AssociateRepository.RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.BuildArtifactsObjectKey'),
        outputPath: 'RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.BuildArtifactsObjectKey',
        parameters: {
          Repository: {
            CodeCommit: {
              Name: this.__input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.__input.repository.bitbucket?.name,
              ConnectionArn: this.__input.repository.bitbucket?.connectionArn,
              Owner: this.__input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.__input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.__input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.__input.repository.gitHubEnterpriseServer?.owner,
            },
            S3Bucket: {
              Name: this.__input.repository.s3Bucket?.name,
              BucketName: this.__input.repository.s3Bucket?.bucketName,
            },
          },
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
          KMSKeyDetails: {
            KMSKeyId: this.__input.kmsKeyDetails?.kmsKeyId,
            EncryptionOption: this.__input.kmsKeyDetails?.encryptionOption,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateRepository.RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.BuildArtifactsObjectKey', props);
    return resource.getResponseField('RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.BuildArtifactsObjectKey') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesCreateCodeReview {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerCreateCodeReviewRequest) {
  }

  public get codeReview(): CodeGuruReviewerResponsesCreateCodeReviewCodeReview {
    return new CodeGuruReviewerResponsesCreateCodeReviewCodeReview(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruReviewerResponsesCreateCodeReviewCodeReview {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerCreateCodeReviewRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.Name'),
        outputPath: 'CodeReview.Name',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.Name', props);
    return resource.getResponseField('CodeReview.Name') as unknown as string;
  }

  public get codeReviewArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.CodeReviewArn'),
        outputPath: 'CodeReview.CodeReviewArn',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.CodeReviewArn', props);
    return resource.getResponseField('CodeReview.CodeReviewArn') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.RepositoryName'),
        outputPath: 'CodeReview.RepositoryName',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.RepositoryName', props);
    return resource.getResponseField('CodeReview.RepositoryName') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.Owner'),
        outputPath: 'CodeReview.Owner',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.Owner', props);
    return resource.getResponseField('CodeReview.Owner') as unknown as string;
  }

  public get providerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.ProviderType'),
        outputPath: 'CodeReview.ProviderType',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.ProviderType', props);
    return resource.getResponseField('CodeReview.ProviderType') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.State'),
        outputPath: 'CodeReview.State',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.State', props);
    return resource.getResponseField('CodeReview.State') as unknown as string;
  }

  public get stateReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.StateReason'),
        outputPath: 'CodeReview.StateReason',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.StateReason', props);
    return resource.getResponseField('CodeReview.StateReason') as unknown as string;
  }

  public get createdTimeStamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.CreatedTimeStamp'),
        outputPath: 'CodeReview.CreatedTimeStamp',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.CreatedTimeStamp', props);
    return resource.getResponseField('CodeReview.CreatedTimeStamp') as unknown as string;
  }

  public get lastUpdatedTimeStamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.LastUpdatedTimeStamp'),
        outputPath: 'CodeReview.LastUpdatedTimeStamp',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.LastUpdatedTimeStamp', props);
    return resource.getResponseField('CodeReview.LastUpdatedTimeStamp') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.Type'),
        outputPath: 'CodeReview.Type',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.Type', props);
    return resource.getResponseField('CodeReview.Type') as unknown as string;
  }

  public get pullRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.PullRequestId'),
        outputPath: 'CodeReview.PullRequestId',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.PullRequestId', props);
    return resource.getResponseField('CodeReview.PullRequestId') as unknown as string;
  }

  public get sourceCodeType(): CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeType {
    return new CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeType(this.__scope, this.__resources, this.__input);
  }

  public get associationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.AssociationArn'),
        outputPath: 'CodeReview.AssociationArn',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.AssociationArn', props);
    return resource.getResponseField('CodeReview.AssociationArn') as unknown as string;
  }

  public get metrics(): CodeGuruReviewerResponsesCreateCodeReviewCodeReviewMetrics {
    return new CodeGuruReviewerResponsesCreateCodeReviewCodeReviewMetrics(this.__scope, this.__resources, this.__input);
  }

  public get analysisTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.AnalysisTypes'),
        outputPath: 'CodeReview.AnalysisTypes',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.AnalysisTypes', props);
    return resource.getResponseField('CodeReview.AnalysisTypes') as unknown as string[];
  }

}

export class CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerCreateCodeReviewRequest) {
  }

  public get commitDiff(): CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeCommitDiff {
    return new CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeCommitDiff(this.__scope, this.__resources, this.__input);
  }

  public get repositoryHead(): CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeRepositoryHead {
    return new CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeRepositoryHead(this.__scope, this.__resources, this.__input);
  }

  public get branchDiff(): CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeBranchDiff {
    return new CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeBranchDiff(this.__scope, this.__resources, this.__input);
  }

  public get s3BucketRepository(): CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeS3BucketRepository {
    return new CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeS3BucketRepository(this.__scope, this.__resources, this.__input);
  }

  public get requestMetadata(): CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeRequestMetadata {
    return new CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeRequestMetadata(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeCommitDiff {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerCreateCodeReviewRequest) {
  }

  public get sourceCommit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.SourceCodeType.CommitDiff.SourceCommit'),
        outputPath: 'CodeReview.SourceCodeType.CommitDiff.SourceCommit',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.SourceCodeType.CommitDiff.SourceCommit', props);
    return resource.getResponseField('CodeReview.SourceCodeType.CommitDiff.SourceCommit') as unknown as string;
  }

  public get destinationCommit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.SourceCodeType.CommitDiff.DestinationCommit'),
        outputPath: 'CodeReview.SourceCodeType.CommitDiff.DestinationCommit',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.SourceCodeType.CommitDiff.DestinationCommit', props);
    return resource.getResponseField('CodeReview.SourceCodeType.CommitDiff.DestinationCommit') as unknown as string;
  }

  public get mergeBaseCommit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.SourceCodeType.CommitDiff.MergeBaseCommit'),
        outputPath: 'CodeReview.SourceCodeType.CommitDiff.MergeBaseCommit',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.SourceCodeType.CommitDiff.MergeBaseCommit', props);
    return resource.getResponseField('CodeReview.SourceCodeType.CommitDiff.MergeBaseCommit') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeRepositoryHead {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerCreateCodeReviewRequest) {
  }

  public get branchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.SourceCodeType.RepositoryHead.BranchName'),
        outputPath: 'CodeReview.SourceCodeType.RepositoryHead.BranchName',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.SourceCodeType.RepositoryHead.BranchName', props);
    return resource.getResponseField('CodeReview.SourceCodeType.RepositoryHead.BranchName') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeBranchDiff {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerCreateCodeReviewRequest) {
  }

  public get sourceBranchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.SourceCodeType.BranchDiff.SourceBranchName'),
        outputPath: 'CodeReview.SourceCodeType.BranchDiff.SourceBranchName',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.SourceCodeType.BranchDiff.SourceBranchName', props);
    return resource.getResponseField('CodeReview.SourceCodeType.BranchDiff.SourceBranchName') as unknown as string;
  }

  public get destinationBranchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.SourceCodeType.BranchDiff.DestinationBranchName'),
        outputPath: 'CodeReview.SourceCodeType.BranchDiff.DestinationBranchName',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.SourceCodeType.BranchDiff.DestinationBranchName', props);
    return resource.getResponseField('CodeReview.SourceCodeType.BranchDiff.DestinationBranchName') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeS3BucketRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerCreateCodeReviewRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.SourceCodeType.S3BucketRepository.Name'),
        outputPath: 'CodeReview.SourceCodeType.S3BucketRepository.Name',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.SourceCodeType.S3BucketRepository.Name', props);
    return resource.getResponseField('CodeReview.SourceCodeType.S3BucketRepository.Name') as unknown as string;
  }

  public get details(): CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeS3BucketRepositoryDetails {
    return new CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeS3BucketRepositoryDetails(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeS3BucketRepositoryDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerCreateCodeReviewRequest) {
  }

  public get bucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.SourceCodeType.S3BucketRepository.Details.BucketName'),
        outputPath: 'CodeReview.SourceCodeType.S3BucketRepository.Details.BucketName',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.SourceCodeType.S3BucketRepository.Details.BucketName', props);
    return resource.getResponseField('CodeReview.SourceCodeType.S3BucketRepository.Details.BucketName') as unknown as string;
  }

  public get codeArtifacts(): CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeS3BucketRepositoryDetailsCodeArtifacts {
    return new CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeS3BucketRepositoryDetailsCodeArtifacts(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeS3BucketRepositoryDetailsCodeArtifacts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerCreateCodeReviewRequest) {
  }

  public get sourceCodeArtifactsObjectKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.SourceCodeType.S3BucketRepository.Details.CodeArtifacts.SourceCodeArtifactsObjectKey'),
        outputPath: 'CodeReview.SourceCodeType.S3BucketRepository.Details.CodeArtifacts.SourceCodeArtifactsObjectKey',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.SourceCodeType.S3BucketRepository.Details.CodeArtifacts.SourceCodeArtifactsObjectKey', props);
    return resource.getResponseField('CodeReview.SourceCodeType.S3BucketRepository.Details.CodeArtifacts.SourceCodeArtifactsObjectKey') as unknown as string;
  }

  public get buildArtifactsObjectKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.SourceCodeType.S3BucketRepository.Details.CodeArtifacts.BuildArtifactsObjectKey'),
        outputPath: 'CodeReview.SourceCodeType.S3BucketRepository.Details.CodeArtifacts.BuildArtifactsObjectKey',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.SourceCodeType.S3BucketRepository.Details.CodeArtifacts.BuildArtifactsObjectKey', props);
    return resource.getResponseField('CodeReview.SourceCodeType.S3BucketRepository.Details.CodeArtifacts.BuildArtifactsObjectKey') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeRequestMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerCreateCodeReviewRequest) {
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.SourceCodeType.RequestMetadata.RequestId'),
        outputPath: 'CodeReview.SourceCodeType.RequestMetadata.RequestId',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.SourceCodeType.RequestMetadata.RequestId', props);
    return resource.getResponseField('CodeReview.SourceCodeType.RequestMetadata.RequestId') as unknown as string;
  }

  public get requester(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.SourceCodeType.RequestMetadata.Requester'),
        outputPath: 'CodeReview.SourceCodeType.RequestMetadata.Requester',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.SourceCodeType.RequestMetadata.Requester', props);
    return resource.getResponseField('CodeReview.SourceCodeType.RequestMetadata.Requester') as unknown as string;
  }

  public get eventInfo(): CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeRequestMetadataEventInfo {
    return new CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeRequestMetadataEventInfo(this.__scope, this.__resources, this.__input);
  }

  public get vendorName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.SourceCodeType.RequestMetadata.VendorName'),
        outputPath: 'CodeReview.SourceCodeType.RequestMetadata.VendorName',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.SourceCodeType.RequestMetadata.VendorName', props);
    return resource.getResponseField('CodeReview.SourceCodeType.RequestMetadata.VendorName') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesCreateCodeReviewCodeReviewSourceCodeTypeRequestMetadataEventInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerCreateCodeReviewRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.SourceCodeType.RequestMetadata.EventInfo.Name'),
        outputPath: 'CodeReview.SourceCodeType.RequestMetadata.EventInfo.Name',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.SourceCodeType.RequestMetadata.EventInfo.Name', props);
    return resource.getResponseField('CodeReview.SourceCodeType.RequestMetadata.EventInfo.Name') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.SourceCodeType.RequestMetadata.EventInfo.State'),
        outputPath: 'CodeReview.SourceCodeType.RequestMetadata.EventInfo.State',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.SourceCodeType.RequestMetadata.EventInfo.State', props);
    return resource.getResponseField('CodeReview.SourceCodeType.RequestMetadata.EventInfo.State') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesCreateCodeReviewCodeReviewMetrics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerCreateCodeReviewRequest) {
  }

  public get meteredLinesOfCodeCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.Metrics.MeteredLinesOfCodeCount'),
        outputPath: 'CodeReview.Metrics.MeteredLinesOfCodeCount',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.Metrics.MeteredLinesOfCodeCount', props);
    return resource.getResponseField('CodeReview.Metrics.MeteredLinesOfCodeCount') as unknown as number;
  }

  public get findingsCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.CreateCodeReview.CodeReview.Metrics.FindingsCount'),
        outputPath: 'CodeReview.Metrics.FindingsCount',
        parameters: {
          Name: this.__input.name,
          RepositoryAssociationArn: this.__input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.__input.type.repositoryAnalysis.repositoryHead?.branchName,
              },
              SourceCodeType: {
                CommitDiff: {
                  SourceCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.sourceCommit,
                  DestinationCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.destinationCommit,
                  MergeBaseCommit: this.__input.type.repositoryAnalysis.sourceCodeType?.commitDiff?.mergeBaseCommit,
                },
                RepositoryHead: {
                  BranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.repositoryHead?.branchName,
                },
                BranchDiff: {
                  SourceBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.sourceBranchName,
                  DestinationBranchName: this.__input.type.repositoryAnalysis.sourceCodeType?.branchDiff?.destinationBranchName,
                },
                S3BucketRepository: {
                  Name: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.name,
                  Details: {
                    BucketName: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.bucketName,
                    CodeArtifacts: {
                      SourceCodeArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.sourceCodeArtifactsObjectKey,
                      BuildArtifactsObjectKey: this.__input.type.repositoryAnalysis.sourceCodeType?.s3BucketRepository?.details?.codeArtifacts?.buildArtifactsObjectKey,
                    },
                  },
                },
                RequestMetadata: {
                  RequestId: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requestId,
                  Requester: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.requester,
                  EventInfo: {
                    Name: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.name,
                    State: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.eventInfo?.state,
                  },
                  VendorName: this.__input.type.repositoryAnalysis.sourceCodeType?.requestMetadata?.vendorName,
                },
              },
            },
            AnalysisTypes: this.__input.type.analysisTypes,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCodeReview.CodeReview.Metrics.FindingsCount', props);
    return resource.getResponseField('CodeReview.Metrics.FindingsCount') as unknown as number;
  }

}

export class CodeGuruReviewerResponsesDescribeCodeReview {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDescribeCodeReviewRequest) {
  }

  public get codeReview(): CodeGuruReviewerResponsesDescribeCodeReviewCodeReview {
    return new CodeGuruReviewerResponsesDescribeCodeReviewCodeReview(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruReviewerResponsesDescribeCodeReviewCodeReview {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDescribeCodeReviewRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.Name'),
        outputPath: 'CodeReview.Name',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.Name', props);
    return resource.getResponseField('CodeReview.Name') as unknown as string;
  }

  public get codeReviewArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.CodeReviewArn'),
        outputPath: 'CodeReview.CodeReviewArn',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.CodeReviewArn', props);
    return resource.getResponseField('CodeReview.CodeReviewArn') as unknown as string;
  }

  public get repositoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.RepositoryName'),
        outputPath: 'CodeReview.RepositoryName',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.RepositoryName', props);
    return resource.getResponseField('CodeReview.RepositoryName') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.Owner'),
        outputPath: 'CodeReview.Owner',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.Owner', props);
    return resource.getResponseField('CodeReview.Owner') as unknown as string;
  }

  public get providerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.ProviderType'),
        outputPath: 'CodeReview.ProviderType',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.ProviderType', props);
    return resource.getResponseField('CodeReview.ProviderType') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.State'),
        outputPath: 'CodeReview.State',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.State', props);
    return resource.getResponseField('CodeReview.State') as unknown as string;
  }

  public get stateReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.StateReason'),
        outputPath: 'CodeReview.StateReason',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.StateReason', props);
    return resource.getResponseField('CodeReview.StateReason') as unknown as string;
  }

  public get createdTimeStamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.CreatedTimeStamp'),
        outputPath: 'CodeReview.CreatedTimeStamp',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.CreatedTimeStamp', props);
    return resource.getResponseField('CodeReview.CreatedTimeStamp') as unknown as string;
  }

  public get lastUpdatedTimeStamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.LastUpdatedTimeStamp'),
        outputPath: 'CodeReview.LastUpdatedTimeStamp',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.LastUpdatedTimeStamp', props);
    return resource.getResponseField('CodeReview.LastUpdatedTimeStamp') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.Type'),
        outputPath: 'CodeReview.Type',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.Type', props);
    return resource.getResponseField('CodeReview.Type') as unknown as string;
  }

  public get pullRequestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.PullRequestId'),
        outputPath: 'CodeReview.PullRequestId',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.PullRequestId', props);
    return resource.getResponseField('CodeReview.PullRequestId') as unknown as string;
  }

  public get sourceCodeType(): CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeType {
    return new CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeType(this.__scope, this.__resources, this.__input);
  }

  public get associationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.AssociationArn'),
        outputPath: 'CodeReview.AssociationArn',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.AssociationArn', props);
    return resource.getResponseField('CodeReview.AssociationArn') as unknown as string;
  }

  public get metrics(): CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewMetrics {
    return new CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewMetrics(this.__scope, this.__resources, this.__input);
  }

  public get analysisTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.AnalysisTypes'),
        outputPath: 'CodeReview.AnalysisTypes',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.AnalysisTypes', props);
    return resource.getResponseField('CodeReview.AnalysisTypes') as unknown as string[];
  }

}

export class CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDescribeCodeReviewRequest) {
  }

  public get commitDiff(): CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeCommitDiff {
    return new CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeCommitDiff(this.__scope, this.__resources, this.__input);
  }

  public get repositoryHead(): CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeRepositoryHead {
    return new CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeRepositoryHead(this.__scope, this.__resources, this.__input);
  }

  public get branchDiff(): CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeBranchDiff {
    return new CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeBranchDiff(this.__scope, this.__resources, this.__input);
  }

  public get s3BucketRepository(): CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeS3BucketRepository {
    return new CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeS3BucketRepository(this.__scope, this.__resources, this.__input);
  }

  public get requestMetadata(): CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeRequestMetadata {
    return new CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeRequestMetadata(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeCommitDiff {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDescribeCodeReviewRequest) {
  }

  public get sourceCommit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.SourceCodeType.CommitDiff.SourceCommit'),
        outputPath: 'CodeReview.SourceCodeType.CommitDiff.SourceCommit',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.SourceCodeType.CommitDiff.SourceCommit', props);
    return resource.getResponseField('CodeReview.SourceCodeType.CommitDiff.SourceCommit') as unknown as string;
  }

  public get destinationCommit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.SourceCodeType.CommitDiff.DestinationCommit'),
        outputPath: 'CodeReview.SourceCodeType.CommitDiff.DestinationCommit',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.SourceCodeType.CommitDiff.DestinationCommit', props);
    return resource.getResponseField('CodeReview.SourceCodeType.CommitDiff.DestinationCommit') as unknown as string;
  }

  public get mergeBaseCommit(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.SourceCodeType.CommitDiff.MergeBaseCommit'),
        outputPath: 'CodeReview.SourceCodeType.CommitDiff.MergeBaseCommit',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.SourceCodeType.CommitDiff.MergeBaseCommit', props);
    return resource.getResponseField('CodeReview.SourceCodeType.CommitDiff.MergeBaseCommit') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeRepositoryHead {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDescribeCodeReviewRequest) {
  }

  public get branchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.SourceCodeType.RepositoryHead.BranchName'),
        outputPath: 'CodeReview.SourceCodeType.RepositoryHead.BranchName',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.SourceCodeType.RepositoryHead.BranchName', props);
    return resource.getResponseField('CodeReview.SourceCodeType.RepositoryHead.BranchName') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeBranchDiff {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDescribeCodeReviewRequest) {
  }

  public get sourceBranchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.SourceCodeType.BranchDiff.SourceBranchName'),
        outputPath: 'CodeReview.SourceCodeType.BranchDiff.SourceBranchName',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.SourceCodeType.BranchDiff.SourceBranchName', props);
    return resource.getResponseField('CodeReview.SourceCodeType.BranchDiff.SourceBranchName') as unknown as string;
  }

  public get destinationBranchName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.SourceCodeType.BranchDiff.DestinationBranchName'),
        outputPath: 'CodeReview.SourceCodeType.BranchDiff.DestinationBranchName',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.SourceCodeType.BranchDiff.DestinationBranchName', props);
    return resource.getResponseField('CodeReview.SourceCodeType.BranchDiff.DestinationBranchName') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeS3BucketRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDescribeCodeReviewRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.SourceCodeType.S3BucketRepository.Name'),
        outputPath: 'CodeReview.SourceCodeType.S3BucketRepository.Name',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.SourceCodeType.S3BucketRepository.Name', props);
    return resource.getResponseField('CodeReview.SourceCodeType.S3BucketRepository.Name') as unknown as string;
  }

  public get details(): CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeS3BucketRepositoryDetails {
    return new CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeS3BucketRepositoryDetails(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeS3BucketRepositoryDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDescribeCodeReviewRequest) {
  }

  public get bucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.SourceCodeType.S3BucketRepository.Details.BucketName'),
        outputPath: 'CodeReview.SourceCodeType.S3BucketRepository.Details.BucketName',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.SourceCodeType.S3BucketRepository.Details.BucketName', props);
    return resource.getResponseField('CodeReview.SourceCodeType.S3BucketRepository.Details.BucketName') as unknown as string;
  }

  public get codeArtifacts(): CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeS3BucketRepositoryDetailsCodeArtifacts {
    return new CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeS3BucketRepositoryDetailsCodeArtifacts(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeS3BucketRepositoryDetailsCodeArtifacts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDescribeCodeReviewRequest) {
  }

  public get sourceCodeArtifactsObjectKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.SourceCodeType.S3BucketRepository.Details.CodeArtifacts.SourceCodeArtifactsObjectKey'),
        outputPath: 'CodeReview.SourceCodeType.S3BucketRepository.Details.CodeArtifacts.SourceCodeArtifactsObjectKey',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.SourceCodeType.S3BucketRepository.Details.CodeArtifacts.SourceCodeArtifactsObjectKey', props);
    return resource.getResponseField('CodeReview.SourceCodeType.S3BucketRepository.Details.CodeArtifacts.SourceCodeArtifactsObjectKey') as unknown as string;
  }

  public get buildArtifactsObjectKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.SourceCodeType.S3BucketRepository.Details.CodeArtifacts.BuildArtifactsObjectKey'),
        outputPath: 'CodeReview.SourceCodeType.S3BucketRepository.Details.CodeArtifacts.BuildArtifactsObjectKey',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.SourceCodeType.S3BucketRepository.Details.CodeArtifacts.BuildArtifactsObjectKey', props);
    return resource.getResponseField('CodeReview.SourceCodeType.S3BucketRepository.Details.CodeArtifacts.BuildArtifactsObjectKey') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeRequestMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDescribeCodeReviewRequest) {
  }

  public get requestId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.SourceCodeType.RequestMetadata.RequestId'),
        outputPath: 'CodeReview.SourceCodeType.RequestMetadata.RequestId',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.SourceCodeType.RequestMetadata.RequestId', props);
    return resource.getResponseField('CodeReview.SourceCodeType.RequestMetadata.RequestId') as unknown as string;
  }

  public get requester(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.SourceCodeType.RequestMetadata.Requester'),
        outputPath: 'CodeReview.SourceCodeType.RequestMetadata.Requester',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.SourceCodeType.RequestMetadata.Requester', props);
    return resource.getResponseField('CodeReview.SourceCodeType.RequestMetadata.Requester') as unknown as string;
  }

  public get eventInfo(): CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeRequestMetadataEventInfo {
    return new CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeRequestMetadataEventInfo(this.__scope, this.__resources, this.__input);
  }

  public get vendorName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.SourceCodeType.RequestMetadata.VendorName'),
        outputPath: 'CodeReview.SourceCodeType.RequestMetadata.VendorName',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.SourceCodeType.RequestMetadata.VendorName', props);
    return resource.getResponseField('CodeReview.SourceCodeType.RequestMetadata.VendorName') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewSourceCodeTypeRequestMetadataEventInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDescribeCodeReviewRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.SourceCodeType.RequestMetadata.EventInfo.Name'),
        outputPath: 'CodeReview.SourceCodeType.RequestMetadata.EventInfo.Name',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.SourceCodeType.RequestMetadata.EventInfo.Name', props);
    return resource.getResponseField('CodeReview.SourceCodeType.RequestMetadata.EventInfo.Name') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.SourceCodeType.RequestMetadata.EventInfo.State'),
        outputPath: 'CodeReview.SourceCodeType.RequestMetadata.EventInfo.State',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.SourceCodeType.RequestMetadata.EventInfo.State', props);
    return resource.getResponseField('CodeReview.SourceCodeType.RequestMetadata.EventInfo.State') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesDescribeCodeReviewCodeReviewMetrics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDescribeCodeReviewRequest) {
  }

  public get meteredLinesOfCodeCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.Metrics.MeteredLinesOfCodeCount'),
        outputPath: 'CodeReview.Metrics.MeteredLinesOfCodeCount',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.Metrics.MeteredLinesOfCodeCount', props);
    return resource.getResponseField('CodeReview.Metrics.MeteredLinesOfCodeCount') as unknown as number;
  }

  public get findingsCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCodeReview',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeCodeReview.CodeReview.Metrics.FindingsCount'),
        outputPath: 'CodeReview.Metrics.FindingsCount',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCodeReview.CodeReview.Metrics.FindingsCount', props);
    return resource.getResponseField('CodeReview.Metrics.FindingsCount') as unknown as number;
  }

}

export class CodeGuruReviewerResponsesDescribeRecommendationFeedback {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDescribeRecommendationFeedbackRequest) {
  }

  public get recommendationFeedback(): CodeGuruReviewerResponsesDescribeRecommendationFeedbackRecommendationFeedback {
    return new CodeGuruReviewerResponsesDescribeRecommendationFeedbackRecommendationFeedback(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruReviewerResponsesDescribeRecommendationFeedbackRecommendationFeedback {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDescribeRecommendationFeedbackRequest) {
  }

  public get codeReviewArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecommendationFeedback',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRecommendationFeedback.RecommendationFeedback.CodeReviewArn'),
        outputPath: 'RecommendationFeedback.CodeReviewArn',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
          RecommendationId: this.__input.recommendationId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecommendationFeedback.RecommendationFeedback.CodeReviewArn', props);
    return resource.getResponseField('RecommendationFeedback.CodeReviewArn') as unknown as string;
  }

  public get recommendationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecommendationFeedback',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRecommendationFeedback.RecommendationFeedback.RecommendationId'),
        outputPath: 'RecommendationFeedback.RecommendationId',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
          RecommendationId: this.__input.recommendationId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecommendationFeedback.RecommendationFeedback.RecommendationId', props);
    return resource.getResponseField('RecommendationFeedback.RecommendationId') as unknown as string;
  }

  public get reactions(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecommendationFeedback',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRecommendationFeedback.RecommendationFeedback.Reactions'),
        outputPath: 'RecommendationFeedback.Reactions',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
          RecommendationId: this.__input.recommendationId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecommendationFeedback.RecommendationFeedback.Reactions', props);
    return resource.getResponseField('RecommendationFeedback.Reactions') as unknown as string[];
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecommendationFeedback',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRecommendationFeedback.RecommendationFeedback.UserId'),
        outputPath: 'RecommendationFeedback.UserId',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
          RecommendationId: this.__input.recommendationId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecommendationFeedback.RecommendationFeedback.UserId', props);
    return resource.getResponseField('RecommendationFeedback.UserId') as unknown as string;
  }

  public get createdTimeStamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecommendationFeedback',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRecommendationFeedback.RecommendationFeedback.CreatedTimeStamp'),
        outputPath: 'RecommendationFeedback.CreatedTimeStamp',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
          RecommendationId: this.__input.recommendationId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecommendationFeedback.RecommendationFeedback.CreatedTimeStamp', props);
    return resource.getResponseField('RecommendationFeedback.CreatedTimeStamp') as unknown as string;
  }

  public get lastUpdatedTimeStamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRecommendationFeedback',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRecommendationFeedback.RecommendationFeedback.LastUpdatedTimeStamp'),
        outputPath: 'RecommendationFeedback.LastUpdatedTimeStamp',
        parameters: {
          CodeReviewArn: this.__input.codeReviewArn,
          RecommendationId: this.__input.recommendationId,
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRecommendationFeedback.RecommendationFeedback.LastUpdatedTimeStamp', props);
    return resource.getResponseField('RecommendationFeedback.LastUpdatedTimeStamp') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesDescribeRepositoryAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDescribeRepositoryAssociationRequest) {
  }

  public get repositoryAssociation(): CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation {
    return new CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation(this.__scope, this.__resources, this.__input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepositoryAssociation',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRepositoryAssociation.Tags'),
        outputPath: 'Tags',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepositoryAssociation.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDescribeRepositoryAssociationRequest) {
  }

  public get associationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepositoryAssociation',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRepositoryAssociation.RepositoryAssociation.AssociationId'),
        outputPath: 'RepositoryAssociation.AssociationId',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepositoryAssociation.RepositoryAssociation.AssociationId', props);
    return resource.getResponseField('RepositoryAssociation.AssociationId') as unknown as string;
  }

  public get associationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepositoryAssociation',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRepositoryAssociation.RepositoryAssociation.AssociationArn'),
        outputPath: 'RepositoryAssociation.AssociationArn',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepositoryAssociation.RepositoryAssociation.AssociationArn', props);
    return resource.getResponseField('RepositoryAssociation.AssociationArn') as unknown as string;
  }

  public get connectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepositoryAssociation',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRepositoryAssociation.RepositoryAssociation.ConnectionArn'),
        outputPath: 'RepositoryAssociation.ConnectionArn',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepositoryAssociation.RepositoryAssociation.ConnectionArn', props);
    return resource.getResponseField('RepositoryAssociation.ConnectionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepositoryAssociation',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRepositoryAssociation.RepositoryAssociation.Name'),
        outputPath: 'RepositoryAssociation.Name',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepositoryAssociation.RepositoryAssociation.Name', props);
    return resource.getResponseField('RepositoryAssociation.Name') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepositoryAssociation',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRepositoryAssociation.RepositoryAssociation.Owner'),
        outputPath: 'RepositoryAssociation.Owner',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepositoryAssociation.RepositoryAssociation.Owner', props);
    return resource.getResponseField('RepositoryAssociation.Owner') as unknown as string;
  }

  public get providerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepositoryAssociation',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRepositoryAssociation.RepositoryAssociation.ProviderType'),
        outputPath: 'RepositoryAssociation.ProviderType',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepositoryAssociation.RepositoryAssociation.ProviderType', props);
    return resource.getResponseField('RepositoryAssociation.ProviderType') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepositoryAssociation',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRepositoryAssociation.RepositoryAssociation.State'),
        outputPath: 'RepositoryAssociation.State',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepositoryAssociation.RepositoryAssociation.State', props);
    return resource.getResponseField('RepositoryAssociation.State') as unknown as string;
  }

  public get stateReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepositoryAssociation',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRepositoryAssociation.RepositoryAssociation.StateReason'),
        outputPath: 'RepositoryAssociation.StateReason',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepositoryAssociation.RepositoryAssociation.StateReason', props);
    return resource.getResponseField('RepositoryAssociation.StateReason') as unknown as string;
  }

  public get lastUpdatedTimeStamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepositoryAssociation',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRepositoryAssociation.RepositoryAssociation.LastUpdatedTimeStamp'),
        outputPath: 'RepositoryAssociation.LastUpdatedTimeStamp',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepositoryAssociation.RepositoryAssociation.LastUpdatedTimeStamp', props);
    return resource.getResponseField('RepositoryAssociation.LastUpdatedTimeStamp') as unknown as string;
  }

  public get createdTimeStamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepositoryAssociation',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRepositoryAssociation.RepositoryAssociation.CreatedTimeStamp'),
        outputPath: 'RepositoryAssociation.CreatedTimeStamp',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepositoryAssociation.RepositoryAssociation.CreatedTimeStamp', props);
    return resource.getResponseField('RepositoryAssociation.CreatedTimeStamp') as unknown as string;
  }

  public get kmsKeyDetails(): CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociationKmsKeyDetails {
    return new CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociationKmsKeyDetails(this.__scope, this.__resources, this.__input);
  }

  public get s3RepositoryDetails(): CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociationS3RepositoryDetails {
    return new CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociationS3RepositoryDetails(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociationKmsKeyDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDescribeRepositoryAssociationRequest) {
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepositoryAssociation',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRepositoryAssociation.RepositoryAssociation.KMSKeyDetails.KMSKeyId'),
        outputPath: 'RepositoryAssociation.KMSKeyDetails.KMSKeyId',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepositoryAssociation.RepositoryAssociation.KMSKeyDetails.KMSKeyId', props);
    return resource.getResponseField('RepositoryAssociation.KMSKeyDetails.KMSKeyId') as unknown as string;
  }

  public get encryptionOption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepositoryAssociation',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRepositoryAssociation.RepositoryAssociation.KMSKeyDetails.EncryptionOption'),
        outputPath: 'RepositoryAssociation.KMSKeyDetails.EncryptionOption',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepositoryAssociation.RepositoryAssociation.KMSKeyDetails.EncryptionOption', props);
    return resource.getResponseField('RepositoryAssociation.KMSKeyDetails.EncryptionOption') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociationS3RepositoryDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDescribeRepositoryAssociationRequest) {
  }

  public get bucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepositoryAssociation',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRepositoryAssociation.RepositoryAssociation.S3RepositoryDetails.BucketName'),
        outputPath: 'RepositoryAssociation.S3RepositoryDetails.BucketName',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepositoryAssociation.RepositoryAssociation.S3RepositoryDetails.BucketName', props);
    return resource.getResponseField('RepositoryAssociation.S3RepositoryDetails.BucketName') as unknown as string;
  }

  public get codeArtifacts(): CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociationS3RepositoryDetailsCodeArtifacts {
    return new CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociationS3RepositoryDetailsCodeArtifacts(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruReviewerResponsesDescribeRepositoryAssociationRepositoryAssociationS3RepositoryDetailsCodeArtifacts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDescribeRepositoryAssociationRequest) {
  }

  public get sourceCodeArtifactsObjectKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepositoryAssociation',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRepositoryAssociation.RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.SourceCodeArtifactsObjectKey'),
        outputPath: 'RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.SourceCodeArtifactsObjectKey',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepositoryAssociation.RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.SourceCodeArtifactsObjectKey', props);
    return resource.getResponseField('RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.SourceCodeArtifactsObjectKey') as unknown as string;
  }

  public get buildArtifactsObjectKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRepositoryAssociation',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DescribeRepositoryAssociation.RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.BuildArtifactsObjectKey'),
        outputPath: 'RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.BuildArtifactsObjectKey',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRepositoryAssociation.RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.BuildArtifactsObjectKey', props);
    return resource.getResponseField('RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.BuildArtifactsObjectKey') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesDisassociateRepository {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDisassociateRepositoryRequest) {
  }

  public get repositoryAssociation(): CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation {
    return new CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation(this.__scope, this.__resources, this.__input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DisassociateRepository.Tags'),
        outputPath: 'Tags',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateRepository.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDisassociateRepositoryRequest) {
  }

  public get associationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DisassociateRepository.RepositoryAssociation.AssociationId'),
        outputPath: 'RepositoryAssociation.AssociationId',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateRepository.RepositoryAssociation.AssociationId', props);
    return resource.getResponseField('RepositoryAssociation.AssociationId') as unknown as string;
  }

  public get associationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DisassociateRepository.RepositoryAssociation.AssociationArn'),
        outputPath: 'RepositoryAssociation.AssociationArn',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateRepository.RepositoryAssociation.AssociationArn', props);
    return resource.getResponseField('RepositoryAssociation.AssociationArn') as unknown as string;
  }

  public get connectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DisassociateRepository.RepositoryAssociation.ConnectionArn'),
        outputPath: 'RepositoryAssociation.ConnectionArn',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateRepository.RepositoryAssociation.ConnectionArn', props);
    return resource.getResponseField('RepositoryAssociation.ConnectionArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DisassociateRepository.RepositoryAssociation.Name'),
        outputPath: 'RepositoryAssociation.Name',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateRepository.RepositoryAssociation.Name', props);
    return resource.getResponseField('RepositoryAssociation.Name') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DisassociateRepository.RepositoryAssociation.Owner'),
        outputPath: 'RepositoryAssociation.Owner',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateRepository.RepositoryAssociation.Owner', props);
    return resource.getResponseField('RepositoryAssociation.Owner') as unknown as string;
  }

  public get providerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DisassociateRepository.RepositoryAssociation.ProviderType'),
        outputPath: 'RepositoryAssociation.ProviderType',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateRepository.RepositoryAssociation.ProviderType', props);
    return resource.getResponseField('RepositoryAssociation.ProviderType') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DisassociateRepository.RepositoryAssociation.State'),
        outputPath: 'RepositoryAssociation.State',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateRepository.RepositoryAssociation.State', props);
    return resource.getResponseField('RepositoryAssociation.State') as unknown as string;
  }

  public get stateReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DisassociateRepository.RepositoryAssociation.StateReason'),
        outputPath: 'RepositoryAssociation.StateReason',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateRepository.RepositoryAssociation.StateReason', props);
    return resource.getResponseField('RepositoryAssociation.StateReason') as unknown as string;
  }

  public get lastUpdatedTimeStamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DisassociateRepository.RepositoryAssociation.LastUpdatedTimeStamp'),
        outputPath: 'RepositoryAssociation.LastUpdatedTimeStamp',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateRepository.RepositoryAssociation.LastUpdatedTimeStamp', props);
    return resource.getResponseField('RepositoryAssociation.LastUpdatedTimeStamp') as unknown as string;
  }

  public get createdTimeStamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DisassociateRepository.RepositoryAssociation.CreatedTimeStamp'),
        outputPath: 'RepositoryAssociation.CreatedTimeStamp',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateRepository.RepositoryAssociation.CreatedTimeStamp', props);
    return resource.getResponseField('RepositoryAssociation.CreatedTimeStamp') as unknown as string;
  }

  public get kmsKeyDetails(): CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociationKmsKeyDetails {
    return new CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociationKmsKeyDetails(this.__scope, this.__resources, this.__input);
  }

  public get s3RepositoryDetails(): CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociationS3RepositoryDetails {
    return new CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociationS3RepositoryDetails(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociationKmsKeyDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDisassociateRepositoryRequest) {
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DisassociateRepository.RepositoryAssociation.KMSKeyDetails.KMSKeyId'),
        outputPath: 'RepositoryAssociation.KMSKeyDetails.KMSKeyId',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateRepository.RepositoryAssociation.KMSKeyDetails.KMSKeyId', props);
    return resource.getResponseField('RepositoryAssociation.KMSKeyDetails.KMSKeyId') as unknown as string;
  }

  public get encryptionOption(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DisassociateRepository.RepositoryAssociation.KMSKeyDetails.EncryptionOption'),
        outputPath: 'RepositoryAssociation.KMSKeyDetails.EncryptionOption',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateRepository.RepositoryAssociation.KMSKeyDetails.EncryptionOption', props);
    return resource.getResponseField('RepositoryAssociation.KMSKeyDetails.EncryptionOption') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociationS3RepositoryDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDisassociateRepositoryRequest) {
  }

  public get bucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DisassociateRepository.RepositoryAssociation.S3RepositoryDetails.BucketName'),
        outputPath: 'RepositoryAssociation.S3RepositoryDetails.BucketName',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateRepository.RepositoryAssociation.S3RepositoryDetails.BucketName', props);
    return resource.getResponseField('RepositoryAssociation.S3RepositoryDetails.BucketName') as unknown as string;
  }

  public get codeArtifacts(): CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociationS3RepositoryDetailsCodeArtifacts {
    return new CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociationS3RepositoryDetailsCodeArtifacts(this.__scope, this.__resources, this.__input);
  }

}

export class CodeGuruReviewerResponsesDisassociateRepositoryRepositoryAssociationS3RepositoryDetailsCodeArtifacts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerDisassociateRepositoryRequest) {
  }

  public get sourceCodeArtifactsObjectKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DisassociateRepository.RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.SourceCodeArtifactsObjectKey'),
        outputPath: 'RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.SourceCodeArtifactsObjectKey',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateRepository.RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.SourceCodeArtifactsObjectKey', props);
    return resource.getResponseField('RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.SourceCodeArtifactsObjectKey') as unknown as string;
  }

  public get buildArtifactsObjectKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateRepository',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.DisassociateRepository.RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.BuildArtifactsObjectKey'),
        outputPath: 'RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.BuildArtifactsObjectKey',
        parameters: {
          AssociationArn: this.__input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateRepository.RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.BuildArtifactsObjectKey', props);
    return resource.getResponseField('RepositoryAssociation.S3RepositoryDetails.CodeArtifacts.BuildArtifactsObjectKey') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesListCodeReviews {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerListCodeReviewsRequest) {
  }

  public get codeReviewSummaries(): shapes.CodeGuruReviewerCodeReviewSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCodeReviews',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.ListCodeReviews.CodeReviewSummaries'),
        outputPath: 'CodeReviewSummaries',
        parameters: {
          ProviderTypes: this.__input.providerTypes,
          States: this.__input.states,
          RepositoryNames: this.__input.repositoryNames,
          Type: this.__input.type,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCodeReviews.CodeReviewSummaries', props);
    return resource.getResponseField('CodeReviewSummaries') as unknown as shapes.CodeGuruReviewerCodeReviewSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listCodeReviews',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.ListCodeReviews.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ProviderTypes: this.__input.providerTypes,
          States: this.__input.states,
          RepositoryNames: this.__input.repositoryNames,
          Type: this.__input.type,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListCodeReviews.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesListRecommendationFeedback {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerListRecommendationFeedbackRequest) {
  }

  public get recommendationFeedbackSummaries(): shapes.CodeGuruReviewerRecommendationFeedbackSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecommendationFeedback',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.ListRecommendationFeedback.RecommendationFeedbackSummaries'),
        outputPath: 'RecommendationFeedbackSummaries',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          CodeReviewArn: this.__input.codeReviewArn,
          UserIds: this.__input.userIds,
          RecommendationIds: this.__input.recommendationIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecommendationFeedback.RecommendationFeedbackSummaries', props);
    return resource.getResponseField('RecommendationFeedbackSummaries') as unknown as shapes.CodeGuruReviewerRecommendationFeedbackSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecommendationFeedback',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.ListRecommendationFeedback.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          CodeReviewArn: this.__input.codeReviewArn,
          UserIds: this.__input.userIds,
          RecommendationIds: this.__input.recommendationIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecommendationFeedback.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesListRecommendations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerListRecommendationsRequest) {
  }

  public get recommendationSummaries(): shapes.CodeGuruReviewerRecommendationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecommendations',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.ListRecommendations.RecommendationSummaries'),
        outputPath: 'RecommendationSummaries',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecommendations.RecommendationSummaries', props);
    return resource.getResponseField('RecommendationSummaries') as unknown as shapes.CodeGuruReviewerRecommendationSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRecommendations',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.ListRecommendations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          CodeReviewArn: this.__input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRecommendations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesListRepositoryAssociations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerListRepositoryAssociationsRequest) {
  }

  public get repositoryAssociationSummaries(): shapes.CodeGuruReviewerRepositoryAssociationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRepositoryAssociations',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.ListRepositoryAssociations.RepositoryAssociationSummaries'),
        outputPath: 'RepositoryAssociationSummaries',
        parameters: {
          ProviderTypes: this.__input.providerTypes,
          States: this.__input.states,
          Names: this.__input.names,
          Owners: this.__input.owners,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRepositoryAssociations.RepositoryAssociationSummaries', props);
    return resource.getResponseField('RepositoryAssociationSummaries') as unknown as shapes.CodeGuruReviewerRepositoryAssociationSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRepositoryAssociations',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.ListRepositoryAssociations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ProviderTypes: this.__input.providerTypes,
          States: this.__input.states,
          Names: this.__input.names,
          Owners: this.__input.owners,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRepositoryAssociations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodeGuruReviewerResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeGuruReviewerListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'CodeGuruReviewer',
        physicalResourceId: cr.PhysicalResourceId.of('CodeGuruReviewer.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

