import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CodeGuruReviewerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateRepository(input: shapes.CodeGuruReviewerAssociateRepositoryRequest): CodeGuruReviewerAssociateRepository {
    return new CodeGuruReviewerAssociateRepository(this, 'AssociateRepository', this.__resources, input);
  }

  public createCodeReview(input: shapes.CodeGuruReviewerCreateCodeReviewRequest): CodeGuruReviewerCreateCodeReview {
    return new CodeGuruReviewerCreateCodeReview(this, 'CreateCodeReview', this.__resources, input);
  }

  public describeCodeReview(input: shapes.CodeGuruReviewerDescribeCodeReviewRequest): CodeGuruReviewerDescribeCodeReview {
    return new CodeGuruReviewerDescribeCodeReview(this, 'DescribeCodeReview', this.__resources, input);
  }

  public describeRecommendationFeedback(input: shapes.CodeGuruReviewerDescribeRecommendationFeedbackRequest): CodeGuruReviewerDescribeRecommendationFeedback {
    return new CodeGuruReviewerDescribeRecommendationFeedback(this, 'DescribeRecommendationFeedback', this.__resources, input);
  }

  public describeRepositoryAssociation(input: shapes.CodeGuruReviewerDescribeRepositoryAssociationRequest): CodeGuruReviewerDescribeRepositoryAssociation {
    return new CodeGuruReviewerDescribeRepositoryAssociation(this, 'DescribeRepositoryAssociation', this.__resources, input);
  }

  public disassociateRepository(input: shapes.CodeGuruReviewerDisassociateRepositoryRequest): CodeGuruReviewerDisassociateRepository {
    return new CodeGuruReviewerDisassociateRepository(this, 'DisassociateRepository', this.__resources, input);
  }

  public listCodeReviews(input: shapes.CodeGuruReviewerListCodeReviewsRequest): CodeGuruReviewerListCodeReviews {
    return new CodeGuruReviewerListCodeReviews(this, 'ListCodeReviews', this.__resources, input);
  }

  public listRecommendationFeedback(input: shapes.CodeGuruReviewerListRecommendationFeedbackRequest): CodeGuruReviewerListRecommendationFeedback {
    return new CodeGuruReviewerListRecommendationFeedback(this, 'ListRecommendationFeedback', this.__resources, input);
  }

  public listRecommendations(input: shapes.CodeGuruReviewerListRecommendationsRequest): CodeGuruReviewerListRecommendations {
    return new CodeGuruReviewerListRecommendations(this, 'ListRecommendations', this.__resources, input);
  }

  public listRepositoryAssociations(input: shapes.CodeGuruReviewerListRepositoryAssociationsRequest): CodeGuruReviewerListRepositoryAssociations {
    return new CodeGuruReviewerListRepositoryAssociations(this, 'ListRepositoryAssociations', this.__resources, input);
  }

  public listTagsForResource(input: shapes.CodeGuruReviewerListTagsForResourceRequest): CodeGuruReviewerListTagsForResource {
    return new CodeGuruReviewerListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
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

export class CodeGuruReviewerAssociateRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerAssociateRepositoryRequest) {
    super(scope, id);
  }

  public get repositoryAssociation(): CodeGuruReviewerAssociateRepositoryRepositoryAssociation {
    return new CodeGuruReviewerAssociateRepositoryRepositoryAssociation(this, 'RepositoryAssociation', this.__resources, this.input);
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
              Name: this.input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.input.repository.bitbucket?.name,
              ConnectionArn: this.input.repository.bitbucket?.connectionArn,
              Owner: this.input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.input.repository.gitHubEnterpriseServer?.owner,
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateRepository.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class CodeGuruReviewerAssociateRepositoryRepositoryAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerAssociateRepositoryRequest) {
    super(scope, id);
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
              Name: this.input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.input.repository.bitbucket?.name,
              ConnectionArn: this.input.repository.bitbucket?.connectionArn,
              Owner: this.input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.input.repository.gitHubEnterpriseServer?.owner,
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateRepository.RepositoryAssociation.AssociationId', props);
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
              Name: this.input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.input.repository.bitbucket?.name,
              ConnectionArn: this.input.repository.bitbucket?.connectionArn,
              Owner: this.input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.input.repository.gitHubEnterpriseServer?.owner,
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateRepository.RepositoryAssociation.AssociationArn', props);
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
              Name: this.input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.input.repository.bitbucket?.name,
              ConnectionArn: this.input.repository.bitbucket?.connectionArn,
              Owner: this.input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.input.repository.gitHubEnterpriseServer?.owner,
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateRepository.RepositoryAssociation.ConnectionArn', props);
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
              Name: this.input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.input.repository.bitbucket?.name,
              ConnectionArn: this.input.repository.bitbucket?.connectionArn,
              Owner: this.input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.input.repository.gitHubEnterpriseServer?.owner,
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateRepository.RepositoryAssociation.Name', props);
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
              Name: this.input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.input.repository.bitbucket?.name,
              ConnectionArn: this.input.repository.bitbucket?.connectionArn,
              Owner: this.input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.input.repository.gitHubEnterpriseServer?.owner,
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateRepository.RepositoryAssociation.Owner', props);
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
              Name: this.input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.input.repository.bitbucket?.name,
              ConnectionArn: this.input.repository.bitbucket?.connectionArn,
              Owner: this.input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.input.repository.gitHubEnterpriseServer?.owner,
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateRepository.RepositoryAssociation.ProviderType', props);
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
              Name: this.input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.input.repository.bitbucket?.name,
              ConnectionArn: this.input.repository.bitbucket?.connectionArn,
              Owner: this.input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.input.repository.gitHubEnterpriseServer?.owner,
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateRepository.RepositoryAssociation.State', props);
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
              Name: this.input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.input.repository.bitbucket?.name,
              ConnectionArn: this.input.repository.bitbucket?.connectionArn,
              Owner: this.input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.input.repository.gitHubEnterpriseServer?.owner,
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateRepository.RepositoryAssociation.StateReason', props);
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
              Name: this.input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.input.repository.bitbucket?.name,
              ConnectionArn: this.input.repository.bitbucket?.connectionArn,
              Owner: this.input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.input.repository.gitHubEnterpriseServer?.owner,
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateRepository.RepositoryAssociation.LastUpdatedTimeStamp', props);
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
              Name: this.input.repository.codeCommit?.name,
            },
            Bitbucket: {
              Name: this.input.repository.bitbucket?.name,
              ConnectionArn: this.input.repository.bitbucket?.connectionArn,
              Owner: this.input.repository.bitbucket?.owner,
            },
            GitHubEnterpriseServer: {
              Name: this.input.repository.gitHubEnterpriseServer?.name,
              ConnectionArn: this.input.repository.gitHubEnterpriseServer?.connectionArn,
              Owner: this.input.repository.gitHubEnterpriseServer?.owner,
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateRepository.RepositoryAssociation.CreatedTimeStamp', props);
    return resource.getResponseField('RepositoryAssociation.CreatedTimeStamp') as unknown as string;
  }

}

export class CodeGuruReviewerCreateCodeReview extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerCreateCodeReviewRequest) {
    super(scope, id);
  }

  public get codeReview(): CodeGuruReviewerCreateCodeReviewCodeReview {
    return new CodeGuruReviewerCreateCodeReviewCodeReview(this, 'CodeReview', this.__resources, this.input);
  }

}

export class CodeGuruReviewerCreateCodeReviewCodeReview extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerCreateCodeReviewRequest) {
    super(scope, id);
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
          Name: this.input.name,
          RepositoryAssociationArn: this.input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.input.type.repositoryAnalysis.repositoryHead.branchName,
              },
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeReview.CodeReview.Name', props);
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
          Name: this.input.name,
          RepositoryAssociationArn: this.input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.input.type.repositoryAnalysis.repositoryHead.branchName,
              },
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeReview.CodeReview.CodeReviewArn', props);
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
          Name: this.input.name,
          RepositoryAssociationArn: this.input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.input.type.repositoryAnalysis.repositoryHead.branchName,
              },
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeReview.CodeReview.RepositoryName', props);
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
          Name: this.input.name,
          RepositoryAssociationArn: this.input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.input.type.repositoryAnalysis.repositoryHead.branchName,
              },
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeReview.CodeReview.Owner', props);
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
          Name: this.input.name,
          RepositoryAssociationArn: this.input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.input.type.repositoryAnalysis.repositoryHead.branchName,
              },
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeReview.CodeReview.ProviderType', props);
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
          Name: this.input.name,
          RepositoryAssociationArn: this.input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.input.type.repositoryAnalysis.repositoryHead.branchName,
              },
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeReview.CodeReview.State', props);
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
          Name: this.input.name,
          RepositoryAssociationArn: this.input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.input.type.repositoryAnalysis.repositoryHead.branchName,
              },
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeReview.CodeReview.StateReason', props);
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
          Name: this.input.name,
          RepositoryAssociationArn: this.input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.input.type.repositoryAnalysis.repositoryHead.branchName,
              },
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeReview.CodeReview.CreatedTimeStamp', props);
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
          Name: this.input.name,
          RepositoryAssociationArn: this.input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.input.type.repositoryAnalysis.repositoryHead.branchName,
              },
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeReview.CodeReview.LastUpdatedTimeStamp', props);
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
          Name: this.input.name,
          RepositoryAssociationArn: this.input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.input.type.repositoryAnalysis.repositoryHead.branchName,
              },
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeReview.CodeReview.Type', props);
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
          Name: this.input.name,
          RepositoryAssociationArn: this.input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.input.type.repositoryAnalysis.repositoryHead.branchName,
              },
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeReview.CodeReview.PullRequestId', props);
    return resource.getResponseField('CodeReview.PullRequestId') as unknown as string;
  }

  public get sourceCodeType(): CodeGuruReviewerCreateCodeReviewCodeReviewSourceCodeType {
    return new CodeGuruReviewerCreateCodeReviewCodeReviewSourceCodeType(this, 'SourceCodeType', this.__resources, this.input);
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
          Name: this.input.name,
          RepositoryAssociationArn: this.input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.input.type.repositoryAnalysis.repositoryHead.branchName,
              },
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeReview.CodeReview.AssociationArn', props);
    return resource.getResponseField('CodeReview.AssociationArn') as unknown as string;
  }

  public get metrics(): CodeGuruReviewerCreateCodeReviewCodeReviewMetrics {
    return new CodeGuruReviewerCreateCodeReviewCodeReviewMetrics(this, 'Metrics', this.__resources, this.input);
  }

}

export class CodeGuruReviewerCreateCodeReviewCodeReviewSourceCodeType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerCreateCodeReviewRequest) {
    super(scope, id);
  }

  public get commitDiff(): CodeGuruReviewerCreateCodeReviewCodeReviewSourceCodeTypeCommitDiff {
    return new CodeGuruReviewerCreateCodeReviewCodeReviewSourceCodeTypeCommitDiff(this, 'CommitDiff', this.__resources, this.input);
  }

  public get repositoryHead(): CodeGuruReviewerCreateCodeReviewCodeReviewSourceCodeTypeRepositoryHead {
    return new CodeGuruReviewerCreateCodeReviewCodeReviewSourceCodeTypeRepositoryHead(this, 'RepositoryHead', this.__resources, this.input);
  }

}

export class CodeGuruReviewerCreateCodeReviewCodeReviewSourceCodeTypeCommitDiff extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerCreateCodeReviewRequest) {
    super(scope, id);
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
          Name: this.input.name,
          RepositoryAssociationArn: this.input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.input.type.repositoryAnalysis.repositoryHead.branchName,
              },
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeReview.CodeReview.SourceCodeType.CommitDiff.SourceCommit', props);
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
          Name: this.input.name,
          RepositoryAssociationArn: this.input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.input.type.repositoryAnalysis.repositoryHead.branchName,
              },
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeReview.CodeReview.SourceCodeType.CommitDiff.DestinationCommit', props);
    return resource.getResponseField('CodeReview.SourceCodeType.CommitDiff.DestinationCommit') as unknown as string;
  }

}

export class CodeGuruReviewerCreateCodeReviewCodeReviewSourceCodeTypeRepositoryHead extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerCreateCodeReviewRequest) {
    super(scope, id);
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
          Name: this.input.name,
          RepositoryAssociationArn: this.input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.input.type.repositoryAnalysis.repositoryHead.branchName,
              },
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeReview.CodeReview.SourceCodeType.RepositoryHead.BranchName', props);
    return resource.getResponseField('CodeReview.SourceCodeType.RepositoryHead.BranchName') as unknown as string;
  }

}

export class CodeGuruReviewerCreateCodeReviewCodeReviewMetrics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerCreateCodeReviewRequest) {
    super(scope, id);
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
          Name: this.input.name,
          RepositoryAssociationArn: this.input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.input.type.repositoryAnalysis.repositoryHead.branchName,
              },
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeReview.CodeReview.Metrics.MeteredLinesOfCodeCount', props);
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
          Name: this.input.name,
          RepositoryAssociationArn: this.input.repositoryAssociationArn,
          Type: {
            RepositoryAnalysis: {
              RepositoryHead: {
                BranchName: this.input.type.repositoryAnalysis.repositoryHead.branchName,
              },
            },
          },
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCodeReview.CodeReview.Metrics.FindingsCount', props);
    return resource.getResponseField('CodeReview.Metrics.FindingsCount') as unknown as number;
  }

}

export class CodeGuruReviewerDescribeCodeReview extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerDescribeCodeReviewRequest) {
    super(scope, id);
  }

  public get codeReview(): CodeGuruReviewerDescribeCodeReviewCodeReview {
    return new CodeGuruReviewerDescribeCodeReviewCodeReview(this, 'CodeReview', this.__resources, this.input);
  }

}

export class CodeGuruReviewerDescribeCodeReviewCodeReview extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerDescribeCodeReviewRequest) {
    super(scope, id);
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
          CodeReviewArn: this.input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeReview.CodeReview.Name', props);
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
          CodeReviewArn: this.input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeReview.CodeReview.CodeReviewArn', props);
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
          CodeReviewArn: this.input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeReview.CodeReview.RepositoryName', props);
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
          CodeReviewArn: this.input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeReview.CodeReview.Owner', props);
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
          CodeReviewArn: this.input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeReview.CodeReview.ProviderType', props);
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
          CodeReviewArn: this.input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeReview.CodeReview.State', props);
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
          CodeReviewArn: this.input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeReview.CodeReview.StateReason', props);
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
          CodeReviewArn: this.input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeReview.CodeReview.CreatedTimeStamp', props);
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
          CodeReviewArn: this.input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeReview.CodeReview.LastUpdatedTimeStamp', props);
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
          CodeReviewArn: this.input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeReview.CodeReview.Type', props);
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
          CodeReviewArn: this.input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeReview.CodeReview.PullRequestId', props);
    return resource.getResponseField('CodeReview.PullRequestId') as unknown as string;
  }

  public get sourceCodeType(): CodeGuruReviewerDescribeCodeReviewCodeReviewSourceCodeType {
    return new CodeGuruReviewerDescribeCodeReviewCodeReviewSourceCodeType(this, 'SourceCodeType', this.__resources, this.input);
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
          CodeReviewArn: this.input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeReview.CodeReview.AssociationArn', props);
    return resource.getResponseField('CodeReview.AssociationArn') as unknown as string;
  }

  public get metrics(): CodeGuruReviewerDescribeCodeReviewCodeReviewMetrics {
    return new CodeGuruReviewerDescribeCodeReviewCodeReviewMetrics(this, 'Metrics', this.__resources, this.input);
  }

}

export class CodeGuruReviewerDescribeCodeReviewCodeReviewSourceCodeType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerDescribeCodeReviewRequest) {
    super(scope, id);
  }

  public get commitDiff(): CodeGuruReviewerDescribeCodeReviewCodeReviewSourceCodeTypeCommitDiff {
    return new CodeGuruReviewerDescribeCodeReviewCodeReviewSourceCodeTypeCommitDiff(this, 'CommitDiff', this.__resources, this.input);
  }

  public get repositoryHead(): CodeGuruReviewerDescribeCodeReviewCodeReviewSourceCodeTypeRepositoryHead {
    return new CodeGuruReviewerDescribeCodeReviewCodeReviewSourceCodeTypeRepositoryHead(this, 'RepositoryHead', this.__resources, this.input);
  }

}

export class CodeGuruReviewerDescribeCodeReviewCodeReviewSourceCodeTypeCommitDiff extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerDescribeCodeReviewRequest) {
    super(scope, id);
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
          CodeReviewArn: this.input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeReview.CodeReview.SourceCodeType.CommitDiff.SourceCommit', props);
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
          CodeReviewArn: this.input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeReview.CodeReview.SourceCodeType.CommitDiff.DestinationCommit', props);
    return resource.getResponseField('CodeReview.SourceCodeType.CommitDiff.DestinationCommit') as unknown as string;
  }

}

export class CodeGuruReviewerDescribeCodeReviewCodeReviewSourceCodeTypeRepositoryHead extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerDescribeCodeReviewRequest) {
    super(scope, id);
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
          CodeReviewArn: this.input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeReview.CodeReview.SourceCodeType.RepositoryHead.BranchName', props);
    return resource.getResponseField('CodeReview.SourceCodeType.RepositoryHead.BranchName') as unknown as string;
  }

}

export class CodeGuruReviewerDescribeCodeReviewCodeReviewMetrics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerDescribeCodeReviewRequest) {
    super(scope, id);
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
          CodeReviewArn: this.input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeReview.CodeReview.Metrics.MeteredLinesOfCodeCount', props);
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
          CodeReviewArn: this.input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCodeReview.CodeReview.Metrics.FindingsCount', props);
    return resource.getResponseField('CodeReview.Metrics.FindingsCount') as unknown as number;
  }

}

export class CodeGuruReviewerDescribeRecommendationFeedback extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerDescribeRecommendationFeedbackRequest) {
    super(scope, id);
  }

  public get recommendationFeedback(): CodeGuruReviewerDescribeRecommendationFeedbackRecommendationFeedback {
    return new CodeGuruReviewerDescribeRecommendationFeedbackRecommendationFeedback(this, 'RecommendationFeedback', this.__resources, this.input);
  }

}

export class CodeGuruReviewerDescribeRecommendationFeedbackRecommendationFeedback extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerDescribeRecommendationFeedbackRequest) {
    super(scope, id);
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
          CodeReviewArn: this.input.codeReviewArn,
          RecommendationId: this.input.recommendationId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecommendationFeedback.RecommendationFeedback.CodeReviewArn', props);
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
          CodeReviewArn: this.input.codeReviewArn,
          RecommendationId: this.input.recommendationId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecommendationFeedback.RecommendationFeedback.RecommendationId', props);
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
          CodeReviewArn: this.input.codeReviewArn,
          RecommendationId: this.input.recommendationId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecommendationFeedback.RecommendationFeedback.Reactions', props);
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
          CodeReviewArn: this.input.codeReviewArn,
          RecommendationId: this.input.recommendationId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecommendationFeedback.RecommendationFeedback.UserId', props);
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
          CodeReviewArn: this.input.codeReviewArn,
          RecommendationId: this.input.recommendationId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecommendationFeedback.RecommendationFeedback.CreatedTimeStamp', props);
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
          CodeReviewArn: this.input.codeReviewArn,
          RecommendationId: this.input.recommendationId,
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRecommendationFeedback.RecommendationFeedback.LastUpdatedTimeStamp', props);
    return resource.getResponseField('RecommendationFeedback.LastUpdatedTimeStamp') as unknown as string;
  }

}

export class CodeGuruReviewerDescribeRepositoryAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerDescribeRepositoryAssociationRequest) {
    super(scope, id);
  }

  public get repositoryAssociation(): CodeGuruReviewerDescribeRepositoryAssociationRepositoryAssociation {
    return new CodeGuruReviewerDescribeRepositoryAssociationRepositoryAssociation(this, 'RepositoryAssociation', this.__resources, this.input);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRepositoryAssociation.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class CodeGuruReviewerDescribeRepositoryAssociationRepositoryAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerDescribeRepositoryAssociationRequest) {
    super(scope, id);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRepositoryAssociation.RepositoryAssociation.AssociationId', props);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRepositoryAssociation.RepositoryAssociation.AssociationArn', props);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRepositoryAssociation.RepositoryAssociation.ConnectionArn', props);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRepositoryAssociation.RepositoryAssociation.Name', props);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRepositoryAssociation.RepositoryAssociation.Owner', props);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRepositoryAssociation.RepositoryAssociation.ProviderType', props);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRepositoryAssociation.RepositoryAssociation.State', props);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRepositoryAssociation.RepositoryAssociation.StateReason', props);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRepositoryAssociation.RepositoryAssociation.LastUpdatedTimeStamp', props);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRepositoryAssociation.RepositoryAssociation.CreatedTimeStamp', props);
    return resource.getResponseField('RepositoryAssociation.CreatedTimeStamp') as unknown as string;
  }

}

export class CodeGuruReviewerDisassociateRepository extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerDisassociateRepositoryRequest) {
    super(scope, id);
  }

  public get repositoryAssociation(): CodeGuruReviewerDisassociateRepositoryRepositoryAssociation {
    return new CodeGuruReviewerDisassociateRepositoryRepositoryAssociation(this, 'RepositoryAssociation', this.__resources, this.input);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateRepository.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class CodeGuruReviewerDisassociateRepositoryRepositoryAssociation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerDisassociateRepositoryRequest) {
    super(scope, id);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateRepository.RepositoryAssociation.AssociationId', props);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateRepository.RepositoryAssociation.AssociationArn', props);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateRepository.RepositoryAssociation.ConnectionArn', props);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateRepository.RepositoryAssociation.Name', props);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateRepository.RepositoryAssociation.Owner', props);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateRepository.RepositoryAssociation.ProviderType', props);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateRepository.RepositoryAssociation.State', props);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateRepository.RepositoryAssociation.StateReason', props);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateRepository.RepositoryAssociation.LastUpdatedTimeStamp', props);
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
          AssociationArn: this.input.associationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateRepository.RepositoryAssociation.CreatedTimeStamp', props);
    return resource.getResponseField('RepositoryAssociation.CreatedTimeStamp') as unknown as string;
  }

}

export class CodeGuruReviewerListCodeReviews extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerListCodeReviewsRequest) {
    super(scope, id);
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
          ProviderTypes: this.input.providerTypes,
          States: this.input.states,
          RepositoryNames: this.input.repositoryNames,
          Type: this.input.type,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCodeReviews.CodeReviewSummaries', props);
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
          ProviderTypes: this.input.providerTypes,
          States: this.input.states,
          RepositoryNames: this.input.repositoryNames,
          Type: this.input.type,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListCodeReviews.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodeGuruReviewerListRecommendationFeedback extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerListRecommendationFeedbackRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          CodeReviewArn: this.input.codeReviewArn,
          UserIds: this.input.userIds,
          RecommendationIds: this.input.recommendationIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecommendationFeedback.RecommendationFeedbackSummaries', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          CodeReviewArn: this.input.codeReviewArn,
          UserIds: this.input.userIds,
          RecommendationIds: this.input.recommendationIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecommendationFeedback.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodeGuruReviewerListRecommendations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerListRecommendationsRequest) {
    super(scope, id);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          CodeReviewArn: this.input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecommendations.RecommendationSummaries', props);
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
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          CodeReviewArn: this.input.codeReviewArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRecommendations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodeGuruReviewerListRepositoryAssociations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerListRepositoryAssociationsRequest) {
    super(scope, id);
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
          ProviderTypes: this.input.providerTypes,
          States: this.input.states,
          Names: this.input.names,
          Owners: this.input.owners,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRepositoryAssociations.RepositoryAssociationSummaries', props);
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
          ProviderTypes: this.input.providerTypes,
          States: this.input.states,
          Names: this.input.names,
          Owners: this.input.owners,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRepositoryAssociations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodeGuruReviewerListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeGuruReviewerListTagsForResourceRequest) {
    super(scope, id);
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
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

