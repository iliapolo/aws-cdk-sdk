import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CodeStarClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateTeamMember(input: shapes.CodeStarAssociateTeamMemberRequest): CodeStarResponsesAssociateTeamMember {
    return new CodeStarResponsesAssociateTeamMember(this, this.__resources, input);
  }

  public createProject(input: shapes.CodeStarCreateProjectRequest): CodeStarResponsesCreateProject {
    return new CodeStarResponsesCreateProject(this, this.__resources, input);
  }

  public createUserProfile(input: shapes.CodeStarCreateUserProfileRequest): CodeStarResponsesCreateUserProfile {
    return new CodeStarResponsesCreateUserProfile(this, this.__resources, input);
  }

  public deleteProject(input: shapes.CodeStarDeleteProjectRequest): CodeStarResponsesDeleteProject {
    return new CodeStarResponsesDeleteProject(this, this.__resources, input);
  }

  public deleteUserProfile(input: shapes.CodeStarDeleteUserProfileRequest): CodeStarResponsesDeleteUserProfile {
    return new CodeStarResponsesDeleteUserProfile(this, this.__resources, input);
  }

  public describeProject(input: shapes.CodeStarDescribeProjectRequest): CodeStarResponsesDescribeProject {
    return new CodeStarResponsesDescribeProject(this, this.__resources, input);
  }

  public describeUserProfile(input: shapes.CodeStarDescribeUserProfileRequest): CodeStarResponsesDescribeUserProfile {
    return new CodeStarResponsesDescribeUserProfile(this, this.__resources, input);
  }

  public disassociateTeamMember(input: shapes.CodeStarDisassociateTeamMemberRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateTeamMember',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.DisassociateTeamMember'),
        parameters: {
          projectId: input.projectId,
          userArn: input.userArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateTeamMember', props);
  }

  public listProjects(input: shapes.CodeStarListProjectsRequest): CodeStarResponsesListProjects {
    return new CodeStarResponsesListProjects(this, this.__resources, input);
  }

  public listResources(input: shapes.CodeStarListResourcesRequest): CodeStarResponsesListResources {
    return new CodeStarResponsesListResources(this, this.__resources, input);
  }

  public listTagsForProject(input: shapes.CodeStarListTagsForProjectRequest): CodeStarResponsesListTagsForProject {
    return new CodeStarResponsesListTagsForProject(this, this.__resources, input);
  }

  public listTeamMembers(input: shapes.CodeStarListTeamMembersRequest): CodeStarResponsesListTeamMembers {
    return new CodeStarResponsesListTeamMembers(this, this.__resources, input);
  }

  public listUserProfiles(input: shapes.CodeStarListUserProfilesRequest): CodeStarResponsesListUserProfiles {
    return new CodeStarResponsesListUserProfiles(this, this.__resources, input);
  }

  public tagProject(input: shapes.CodeStarTagProjectRequest): CodeStarResponsesTagProject {
    return new CodeStarResponsesTagProject(this, this.__resources, input);
  }

  public untagProject(input: shapes.CodeStarUntagProjectRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagProject',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.UntagProject'),
        parameters: {
          id: input.id,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagProject', props);
  }

  public updateProject(input: shapes.CodeStarUpdateProjectRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateProject',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.UpdateProject'),
        parameters: {
          id: input.id,
          name: input.name,
          description: input.description,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateProject', props);
  }

  public updateTeamMember(input: shapes.CodeStarUpdateTeamMemberRequest): CodeStarResponsesUpdateTeamMember {
    return new CodeStarResponsesUpdateTeamMember(this, this.__resources, input);
  }

  public updateUserProfile(input: shapes.CodeStarUpdateUserProfileRequest): CodeStarResponsesUpdateUserProfile {
    return new CodeStarResponsesUpdateUserProfile(this, this.__resources, input);
  }

}

export class CodeStarResponsesAssociateTeamMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarAssociateTeamMemberRequest) {
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateTeamMember',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.AssociateTeamMember.clientRequestToken'),
        outputPath: 'clientRequestToken',
        parameters: {
          projectId: this.__input.projectId,
          clientRequestToken: this.__input.clientRequestToken,
          userArn: this.__input.userArn,
          projectRole: this.__input.projectRole,
          remoteAccessAllowed: this.__input.remoteAccessAllowed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateTeamMember.clientRequestToken', props);
    return resource.getResponseField('clientRequestToken') as unknown as string;
  }

}

export class CodeStarResponsesCreateProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarCreateProjectRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.CreateProject.id'),
        outputPath: 'id',
        parameters: {
          name: this.__input.name,
          id: this.__input.id,
          description: this.__input.description,
          clientRequestToken: this.__input.clientRequestToken,
          sourceCode: this.__input.sourceCode,
          toolchain: {
            source: {
              s3: {
                bucketName: this.__input.toolchain?.source.s3.bucketName,
                bucketKey: this.__input.toolchain?.source.s3.bucketKey,
              },
            },
            roleArn: this.__input.toolchain?.roleArn,
            stackParameters: this.__input.toolchain?.stackParameters,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.CreateProject.arn'),
        outputPath: 'arn',
        parameters: {
          name: this.__input.name,
          id: this.__input.id,
          description: this.__input.description,
          clientRequestToken: this.__input.clientRequestToken,
          sourceCode: this.__input.sourceCode,
          toolchain: {
            source: {
              s3: {
                bucketName: this.__input.toolchain?.source.s3.bucketName,
                bucketKey: this.__input.toolchain?.source.s3.bucketKey,
              },
            },
            roleArn: this.__input.toolchain?.roleArn,
            stackParameters: this.__input.toolchain?.stackParameters,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.CreateProject.clientRequestToken'),
        outputPath: 'clientRequestToken',
        parameters: {
          name: this.__input.name,
          id: this.__input.id,
          description: this.__input.description,
          clientRequestToken: this.__input.clientRequestToken,
          sourceCode: this.__input.sourceCode,
          toolchain: {
            source: {
              s3: {
                bucketName: this.__input.toolchain?.source.s3.bucketName,
                bucketKey: this.__input.toolchain?.source.s3.bucketKey,
              },
            },
            roleArn: this.__input.toolchain?.roleArn,
            stackParameters: this.__input.toolchain?.stackParameters,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.clientRequestToken', props);
    return resource.getResponseField('clientRequestToken') as unknown as string;
  }

  public get projectTemplateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createProject',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.CreateProject.projectTemplateId'),
        outputPath: 'projectTemplateId',
        parameters: {
          name: this.__input.name,
          id: this.__input.id,
          description: this.__input.description,
          clientRequestToken: this.__input.clientRequestToken,
          sourceCode: this.__input.sourceCode,
          toolchain: {
            source: {
              s3: {
                bucketName: this.__input.toolchain?.source.s3.bucketName,
                bucketKey: this.__input.toolchain?.source.s3.bucketKey,
              },
            },
            roleArn: this.__input.toolchain?.roleArn,
            stackParameters: this.__input.toolchain?.stackParameters,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateProject.projectTemplateId', props);
    return resource.getResponseField('projectTemplateId') as unknown as string;
  }

}

export class CodeStarResponsesCreateUserProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarCreateUserProfileRequest) {
  }

  public get userArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUserProfile',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.CreateUserProfile.userArn'),
        outputPath: 'userArn',
        parameters: {
          userArn: this.__input.userArn,
          displayName: this.__input.displayName,
          emailAddress: this.__input.emailAddress,
          sshPublicKey: this.__input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUserProfile.userArn', props);
    return resource.getResponseField('userArn') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUserProfile',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.CreateUserProfile.displayName'),
        outputPath: 'displayName',
        parameters: {
          userArn: this.__input.userArn,
          displayName: this.__input.displayName,
          emailAddress: this.__input.emailAddress,
          sshPublicKey: this.__input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUserProfile.displayName', props);
    return resource.getResponseField('displayName') as unknown as string;
  }

  public get emailAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUserProfile',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.CreateUserProfile.emailAddress'),
        outputPath: 'emailAddress',
        parameters: {
          userArn: this.__input.userArn,
          displayName: this.__input.displayName,
          emailAddress: this.__input.emailAddress,
          sshPublicKey: this.__input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUserProfile.emailAddress', props);
    return resource.getResponseField('emailAddress') as unknown as string;
  }

  public get sshPublicKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUserProfile',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.CreateUserProfile.sshPublicKey'),
        outputPath: 'sshPublicKey',
        parameters: {
          userArn: this.__input.userArn,
          displayName: this.__input.displayName,
          emailAddress: this.__input.emailAddress,
          sshPublicKey: this.__input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUserProfile.sshPublicKey', props);
    return resource.getResponseField('sshPublicKey') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUserProfile',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.CreateUserProfile.createdTimestamp'),
        outputPath: 'createdTimestamp',
        parameters: {
          userArn: this.__input.userArn,
          displayName: this.__input.displayName,
          emailAddress: this.__input.emailAddress,
          sshPublicKey: this.__input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUserProfile.createdTimestamp', props);
    return resource.getResponseField('createdTimestamp') as unknown as string;
  }

  public get lastModifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUserProfile',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.CreateUserProfile.lastModifiedTimestamp'),
        outputPath: 'lastModifiedTimestamp',
        parameters: {
          userArn: this.__input.userArn,
          displayName: this.__input.displayName,
          emailAddress: this.__input.emailAddress,
          sshPublicKey: this.__input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUserProfile.lastModifiedTimestamp', props);
    return resource.getResponseField('lastModifiedTimestamp') as unknown as string;
  }

}

export class CodeStarResponsesDeleteProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarDeleteProjectRequest) {
  }

  public get stackId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProject',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.DeleteProject.stackId'),
        outputPath: 'stackId',
        parameters: {
          id: this.__input.id,
          clientRequestToken: this.__input.clientRequestToken,
          deleteStack: this.__input.deleteStack,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteProject.stackId', props);
    return resource.getResponseField('stackId') as unknown as string;
  }

  public get projectArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteProject',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.DeleteProject.projectArn'),
        outputPath: 'projectArn',
        parameters: {
          id: this.__input.id,
          clientRequestToken: this.__input.clientRequestToken,
          deleteStack: this.__input.deleteStack,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteProject.projectArn', props);
    return resource.getResponseField('projectArn') as unknown as string;
  }

}

export class CodeStarResponsesDeleteUserProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarDeleteUserProfileRequest) {
  }

  public get userArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUserProfile',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.DeleteUserProfile.userArn'),
        outputPath: 'userArn',
        parameters: {
          userArn: this.__input.userArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUserProfile.userArn', props);
    return resource.getResponseField('userArn') as unknown as string;
  }

}

export class CodeStarResponsesDescribeProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarDescribeProjectRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.DescribeProject.name'),
        outputPath: 'name',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.DescribeProject.id'),
        outputPath: 'id',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.DescribeProject.arn'),
        outputPath: 'arn',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.DescribeProject.description'),
        outputPath: 'description',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.description', props);
    return resource.getResponseField('description') as unknown as string;
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.DescribeProject.clientRequestToken'),
        outputPath: 'clientRequestToken',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.clientRequestToken', props);
    return resource.getResponseField('clientRequestToken') as unknown as string;
  }

  public get createdTimeStamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.DescribeProject.createdTimeStamp'),
        outputPath: 'createdTimeStamp',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.createdTimeStamp', props);
    return resource.getResponseField('createdTimeStamp') as unknown as string;
  }

  public get stackId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.DescribeProject.stackId'),
        outputPath: 'stackId',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.stackId', props);
    return resource.getResponseField('stackId') as unknown as string;
  }

  public get projectTemplateId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.DescribeProject.projectTemplateId'),
        outputPath: 'projectTemplateId',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.projectTemplateId', props);
    return resource.getResponseField('projectTemplateId') as unknown as string;
  }

  public get status(): CodeStarResponsesDescribeProjectStatus {
    return new CodeStarResponsesDescribeProjectStatus(this.__scope, this.__resources, this.__input);
  }

}

export class CodeStarResponsesDescribeProjectStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarDescribeProjectRequest) {
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.DescribeProject.status.state'),
        outputPath: 'status.state',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.status.state', props);
    return resource.getResponseField('status.state') as unknown as string;
  }

  public get reason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeProject',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.DescribeProject.status.reason'),
        outputPath: 'status.reason',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeProject.status.reason', props);
    return resource.getResponseField('status.reason') as unknown as string;
  }

}

export class CodeStarResponsesDescribeUserProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarDescribeUserProfileRequest) {
  }

  public get userArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.DescribeUserProfile.userArn'),
        outputPath: 'userArn',
        parameters: {
          userArn: this.__input.userArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.userArn', props);
    return resource.getResponseField('userArn') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.DescribeUserProfile.displayName'),
        outputPath: 'displayName',
        parameters: {
          userArn: this.__input.userArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.displayName', props);
    return resource.getResponseField('displayName') as unknown as string;
  }

  public get emailAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.DescribeUserProfile.emailAddress'),
        outputPath: 'emailAddress',
        parameters: {
          userArn: this.__input.userArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.emailAddress', props);
    return resource.getResponseField('emailAddress') as unknown as string;
  }

  public get sshPublicKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.DescribeUserProfile.sshPublicKey'),
        outputPath: 'sshPublicKey',
        parameters: {
          userArn: this.__input.userArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.sshPublicKey', props);
    return resource.getResponseField('sshPublicKey') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.DescribeUserProfile.createdTimestamp'),
        outputPath: 'createdTimestamp',
        parameters: {
          userArn: this.__input.userArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.createdTimestamp', props);
    return resource.getResponseField('createdTimestamp') as unknown as string;
  }

  public get lastModifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfile',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.DescribeUserProfile.lastModifiedTimestamp'),
        outputPath: 'lastModifiedTimestamp',
        parameters: {
          userArn: this.__input.userArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfile.lastModifiedTimestamp', props);
    return resource.getResponseField('lastModifiedTimestamp') as unknown as string;
  }

}

export class CodeStarResponsesListProjects {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarListProjectsRequest) {
  }

  public get projects(): shapes.CodeStarProjectSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProjects',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.ListProjects.projects'),
        outputPath: 'projects',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProjects.projects', props);
    return resource.getResponseField('projects') as unknown as shapes.CodeStarProjectSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listProjects',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.ListProjects.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListProjects.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeStarResponsesListResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarListResourcesRequest) {
  }

  public get resources(): shapes.CodeStarResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResources',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.ListResources.resources'),
        outputPath: 'resources',
        parameters: {
          projectId: this.__input.projectId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResources.resources', props);
    return resource.getResponseField('resources') as unknown as shapes.CodeStarResource[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listResources',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.ListResources.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          projectId: this.__input.projectId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListResources.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeStarResponsesListTagsForProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarListTagsForProjectRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForProject',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.ListTagsForProject.tags'),
        outputPath: 'tags',
        parameters: {
          id: this.__input.id,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForProject.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForProject',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.ListTagsForProject.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          id: this.__input.id,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForProject.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeStarResponsesListTeamMembers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarListTeamMembersRequest) {
  }

  public get teamMembers(): shapes.CodeStarTeamMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTeamMembers',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.ListTeamMembers.teamMembers'),
        outputPath: 'teamMembers',
        parameters: {
          projectId: this.__input.projectId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTeamMembers.teamMembers', props);
    return resource.getResponseField('teamMembers') as unknown as shapes.CodeStarTeamMember[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTeamMembers',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.ListTeamMembers.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          projectId: this.__input.projectId,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTeamMembers.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeStarResponsesListUserProfiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarListUserProfilesRequest) {
  }

  public get userProfiles(): shapes.CodeStarUserProfileSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUserProfiles',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.ListUserProfiles.userProfiles'),
        outputPath: 'userProfiles',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUserProfiles.userProfiles', props);
    return resource.getResponseField('userProfiles') as unknown as shapes.CodeStarUserProfileSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUserProfiles',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.ListUserProfiles.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUserProfiles.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeStarResponsesTagProject {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarTagProjectRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagProject',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.TagProject.tags'),
        outputPath: 'tags',
        parameters: {
          id: this.__input.id,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TagProject.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class CodeStarResponsesUpdateTeamMember {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarUpdateTeamMemberRequest) {
  }

  public get userArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTeamMember',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.UpdateTeamMember.userArn'),
        outputPath: 'userArn',
        parameters: {
          projectId: this.__input.projectId,
          userArn: this.__input.userArn,
          projectRole: this.__input.projectRole,
          remoteAccessAllowed: this.__input.remoteAccessAllowed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTeamMember.userArn', props);
    return resource.getResponseField('userArn') as unknown as string;
  }

  public get projectRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTeamMember',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.UpdateTeamMember.projectRole'),
        outputPath: 'projectRole',
        parameters: {
          projectId: this.__input.projectId,
          userArn: this.__input.userArn,
          projectRole: this.__input.projectRole,
          remoteAccessAllowed: this.__input.remoteAccessAllowed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTeamMember.projectRole', props);
    return resource.getResponseField('projectRole') as unknown as string;
  }

  public get remoteAccessAllowed(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTeamMember',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.UpdateTeamMember.remoteAccessAllowed'),
        outputPath: 'remoteAccessAllowed',
        parameters: {
          projectId: this.__input.projectId,
          userArn: this.__input.userArn,
          projectRole: this.__input.projectRole,
          remoteAccessAllowed: this.__input.remoteAccessAllowed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTeamMember.remoteAccessAllowed', props);
    return resource.getResponseField('remoteAccessAllowed') as unknown as boolean;
  }

}

export class CodeStarResponsesUpdateUserProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarUpdateUserProfileRequest) {
  }

  public get userArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUserProfile',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.UpdateUserProfile.userArn'),
        outputPath: 'userArn',
        parameters: {
          userArn: this.__input.userArn,
          displayName: this.__input.displayName,
          emailAddress: this.__input.emailAddress,
          sshPublicKey: this.__input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUserProfile.userArn', props);
    return resource.getResponseField('userArn') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUserProfile',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.UpdateUserProfile.displayName'),
        outputPath: 'displayName',
        parameters: {
          userArn: this.__input.userArn,
          displayName: this.__input.displayName,
          emailAddress: this.__input.emailAddress,
          sshPublicKey: this.__input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUserProfile.displayName', props);
    return resource.getResponseField('displayName') as unknown as string;
  }

  public get emailAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUserProfile',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.UpdateUserProfile.emailAddress'),
        outputPath: 'emailAddress',
        parameters: {
          userArn: this.__input.userArn,
          displayName: this.__input.displayName,
          emailAddress: this.__input.emailAddress,
          sshPublicKey: this.__input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUserProfile.emailAddress', props);
    return resource.getResponseField('emailAddress') as unknown as string;
  }

  public get sshPublicKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUserProfile',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.UpdateUserProfile.sshPublicKey'),
        outputPath: 'sshPublicKey',
        parameters: {
          userArn: this.__input.userArn,
          displayName: this.__input.displayName,
          emailAddress: this.__input.emailAddress,
          sshPublicKey: this.__input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUserProfile.sshPublicKey', props);
    return resource.getResponseField('sshPublicKey') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUserProfile',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.UpdateUserProfile.createdTimestamp'),
        outputPath: 'createdTimestamp',
        parameters: {
          userArn: this.__input.userArn,
          displayName: this.__input.displayName,
          emailAddress: this.__input.emailAddress,
          sshPublicKey: this.__input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUserProfile.createdTimestamp', props);
    return resource.getResponseField('createdTimestamp') as unknown as string;
  }

  public get lastModifiedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUserProfile',
        service: 'CodeStar',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStar.UpdateUserProfile.lastModifiedTimestamp'),
        outputPath: 'lastModifiedTimestamp',
        parameters: {
          userArn: this.__input.userArn,
          displayName: this.__input.displayName,
          emailAddress: this.__input.emailAddress,
          sshPublicKey: this.__input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUserProfile.lastModifiedTimestamp', props);
    return resource.getResponseField('lastModifiedTimestamp') as unknown as string;
  }

}

