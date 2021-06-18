import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CodeStarClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateTeamMember(input: shapes.CodeStarAssociateTeamMemberRequest): CodeStarAssociateTeamMember {
    return new CodeStarAssociateTeamMember(this, 'AssociateTeamMember', this.__resources, input);
  }

  public createProject(input: shapes.CodeStarCreateProjectRequest): CodeStarCreateProject {
    return new CodeStarCreateProject(this, 'CreateProject', this.__resources, input);
  }

  public createUserProfile(input: shapes.CodeStarCreateUserProfileRequest): CodeStarCreateUserProfile {
    return new CodeStarCreateUserProfile(this, 'CreateUserProfile', this.__resources, input);
  }

  public deleteProject(input: shapes.CodeStarDeleteProjectRequest): CodeStarDeleteProject {
    return new CodeStarDeleteProject(this, 'DeleteProject', this.__resources, input);
  }

  public deleteUserProfile(input: shapes.CodeStarDeleteUserProfileRequest): CodeStarDeleteUserProfile {
    return new CodeStarDeleteUserProfile(this, 'DeleteUserProfile', this.__resources, input);
  }

  public describeProject(input: shapes.CodeStarDescribeProjectRequest): CodeStarDescribeProject {
    return new CodeStarDescribeProject(this, 'DescribeProject', this.__resources, input);
  }

  public describeUserProfile(input: shapes.CodeStarDescribeUserProfileRequest): CodeStarDescribeUserProfile {
    return new CodeStarDescribeUserProfile(this, 'DescribeUserProfile', this.__resources, input);
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

  public listProjects(input: shapes.CodeStarListProjectsRequest): CodeStarListProjects {
    return new CodeStarListProjects(this, 'ListProjects', this.__resources, input);
  }

  public listResources(input: shapes.CodeStarListResourcesRequest): CodeStarListResources {
    return new CodeStarListResources(this, 'ListResources', this.__resources, input);
  }

  public listTagsForProject(input: shapes.CodeStarListTagsForProjectRequest): CodeStarListTagsForProject {
    return new CodeStarListTagsForProject(this, 'ListTagsForProject', this.__resources, input);
  }

  public listTeamMembers(input: shapes.CodeStarListTeamMembersRequest): CodeStarListTeamMembers {
    return new CodeStarListTeamMembers(this, 'ListTeamMembers', this.__resources, input);
  }

  public listUserProfiles(input: shapes.CodeStarListUserProfilesRequest): CodeStarListUserProfiles {
    return new CodeStarListUserProfiles(this, 'ListUserProfiles', this.__resources, input);
  }

  public tagProject(input: shapes.CodeStarTagProjectRequest): CodeStarTagProject {
    return new CodeStarTagProject(this, 'TagProject', this.__resources, input);
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

  public updateTeamMember(input: shapes.CodeStarUpdateTeamMemberRequest): CodeStarUpdateTeamMember {
    return new CodeStarUpdateTeamMember(this, 'UpdateTeamMember', this.__resources, input);
  }

  public updateUserProfile(input: shapes.CodeStarUpdateUserProfileRequest): CodeStarUpdateUserProfile {
    return new CodeStarUpdateUserProfile(this, 'UpdateUserProfile', this.__resources, input);
  }

}

export class CodeStarAssociateTeamMember extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarAssociateTeamMemberRequest) {
    super(scope, id);
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
          projectId: this.input.projectId,
          clientRequestToken: this.input.clientRequestToken,
          userArn: this.input.userArn,
          projectRole: this.input.projectRole,
          remoteAccessAllowed: this.input.remoteAccessAllowed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateTeamMember.clientRequestToken', props);
    return resource.getResponseField('clientRequestToken') as unknown as string;
  }

}

export class CodeStarCreateProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarCreateProjectRequest) {
    super(scope, id);
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
          name: this.input.name,
          id: this.input.id,
          description: this.input.description,
          clientRequestToken: this.input.clientRequestToken,
          sourceCode: this.input.sourceCode,
          toolchain: {
            source: {
              s3: {
                bucketName: this.input.toolchain?.source.s3.bucketName,
                bucketKey: this.input.toolchain?.source.s3.bucketKey,
              },
            },
            roleArn: this.input.toolchain?.roleArn,
            stackParameters: this.input.toolchain?.stackParameters,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProject.id', props);
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
          name: this.input.name,
          id: this.input.id,
          description: this.input.description,
          clientRequestToken: this.input.clientRequestToken,
          sourceCode: this.input.sourceCode,
          toolchain: {
            source: {
              s3: {
                bucketName: this.input.toolchain?.source.s3.bucketName,
                bucketKey: this.input.toolchain?.source.s3.bucketKey,
              },
            },
            roleArn: this.input.toolchain?.roleArn,
            stackParameters: this.input.toolchain?.stackParameters,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProject.arn', props);
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
          name: this.input.name,
          id: this.input.id,
          description: this.input.description,
          clientRequestToken: this.input.clientRequestToken,
          sourceCode: this.input.sourceCode,
          toolchain: {
            source: {
              s3: {
                bucketName: this.input.toolchain?.source.s3.bucketName,
                bucketKey: this.input.toolchain?.source.s3.bucketKey,
              },
            },
            roleArn: this.input.toolchain?.roleArn,
            stackParameters: this.input.toolchain?.stackParameters,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProject.clientRequestToken', props);
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
          name: this.input.name,
          id: this.input.id,
          description: this.input.description,
          clientRequestToken: this.input.clientRequestToken,
          sourceCode: this.input.sourceCode,
          toolchain: {
            source: {
              s3: {
                bucketName: this.input.toolchain?.source.s3.bucketName,
                bucketKey: this.input.toolchain?.source.s3.bucketKey,
              },
            },
            roleArn: this.input.toolchain?.roleArn,
            stackParameters: this.input.toolchain?.stackParameters,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateProject.projectTemplateId', props);
    return resource.getResponseField('projectTemplateId') as unknown as string;
  }

}

export class CodeStarCreateUserProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarCreateUserProfileRequest) {
    super(scope, id);
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
          userArn: this.input.userArn,
          displayName: this.input.displayName,
          emailAddress: this.input.emailAddress,
          sshPublicKey: this.input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUserProfile.userArn', props);
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
          userArn: this.input.userArn,
          displayName: this.input.displayName,
          emailAddress: this.input.emailAddress,
          sshPublicKey: this.input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUserProfile.displayName', props);
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
          userArn: this.input.userArn,
          displayName: this.input.displayName,
          emailAddress: this.input.emailAddress,
          sshPublicKey: this.input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUserProfile.emailAddress', props);
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
          userArn: this.input.userArn,
          displayName: this.input.displayName,
          emailAddress: this.input.emailAddress,
          sshPublicKey: this.input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUserProfile.sshPublicKey', props);
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
          userArn: this.input.userArn,
          displayName: this.input.displayName,
          emailAddress: this.input.emailAddress,
          sshPublicKey: this.input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUserProfile.createdTimestamp', props);
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
          userArn: this.input.userArn,
          displayName: this.input.displayName,
          emailAddress: this.input.emailAddress,
          sshPublicKey: this.input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUserProfile.lastModifiedTimestamp', props);
    return resource.getResponseField('lastModifiedTimestamp') as unknown as string;
  }

}

export class CodeStarDeleteProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarDeleteProjectRequest) {
    super(scope, id);
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
          id: this.input.id,
          clientRequestToken: this.input.clientRequestToken,
          deleteStack: this.input.deleteStack,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteProject.stackId', props);
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
          id: this.input.id,
          clientRequestToken: this.input.clientRequestToken,
          deleteStack: this.input.deleteStack,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteProject.projectArn', props);
    return resource.getResponseField('projectArn') as unknown as string;
  }

}

export class CodeStarDeleteUserProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarDeleteUserProfileRequest) {
    super(scope, id);
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
          userArn: this.input.userArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUserProfile.userArn', props);
    return resource.getResponseField('userArn') as unknown as string;
  }

}

export class CodeStarDescribeProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarDescribeProjectRequest) {
    super(scope, id);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.name', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.id', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.arn', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.description', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.clientRequestToken', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.createdTimeStamp', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.stackId', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.projectTemplateId', props);
    return resource.getResponseField('projectTemplateId') as unknown as string;
  }

  public get status(): CodeStarDescribeProjectStatus {
    return new CodeStarDescribeProjectStatus(this, 'Status', this.__resources, this.input);
  }

}

export class CodeStarDescribeProjectStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarDescribeProjectRequest) {
    super(scope, id);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.status.state', props);
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
          id: this.input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeProject.status.reason', props);
    return resource.getResponseField('status.reason') as unknown as string;
  }

}

export class CodeStarDescribeUserProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarDescribeUserProfileRequest) {
    super(scope, id);
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
          userArn: this.input.userArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.userArn', props);
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
          userArn: this.input.userArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.displayName', props);
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
          userArn: this.input.userArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.emailAddress', props);
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
          userArn: this.input.userArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.sshPublicKey', props);
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
          userArn: this.input.userArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.createdTimestamp', props);
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
          userArn: this.input.userArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfile.lastModifiedTimestamp', props);
    return resource.getResponseField('lastModifiedTimestamp') as unknown as string;
  }

}

export class CodeStarListProjects extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarListProjectsRequest) {
    super(scope, id);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProjects.projects', props);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListProjects.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeStarListResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarListResourcesRequest) {
    super(scope, id);
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
          projectId: this.input.projectId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResources.resources', props);
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
          projectId: this.input.projectId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListResources.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeStarListTagsForProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarListTagsForProjectRequest) {
    super(scope, id);
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
          id: this.input.id,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForProject.tags', props);
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
          id: this.input.id,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForProject.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeStarListTeamMembers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarListTeamMembersRequest) {
    super(scope, id);
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
          projectId: this.input.projectId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTeamMembers.teamMembers', props);
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
          projectId: this.input.projectId,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTeamMembers.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeStarListUserProfiles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarListUserProfilesRequest) {
    super(scope, id);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUserProfiles.userProfiles', props);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUserProfiles.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class CodeStarTagProject extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarTagProjectRequest) {
    super(scope, id);
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
          id: this.input.id,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TagProject.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class CodeStarUpdateTeamMember extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarUpdateTeamMemberRequest) {
    super(scope, id);
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
          projectId: this.input.projectId,
          userArn: this.input.userArn,
          projectRole: this.input.projectRole,
          remoteAccessAllowed: this.input.remoteAccessAllowed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTeamMember.userArn', props);
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
          projectId: this.input.projectId,
          userArn: this.input.userArn,
          projectRole: this.input.projectRole,
          remoteAccessAllowed: this.input.remoteAccessAllowed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTeamMember.projectRole', props);
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
          projectId: this.input.projectId,
          userArn: this.input.userArn,
          projectRole: this.input.projectRole,
          remoteAccessAllowed: this.input.remoteAccessAllowed,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTeamMember.remoteAccessAllowed', props);
    return resource.getResponseField('remoteAccessAllowed') as unknown as boolean;
  }

}

export class CodeStarUpdateUserProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarUpdateUserProfileRequest) {
    super(scope, id);
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
          userArn: this.input.userArn,
          displayName: this.input.displayName,
          emailAddress: this.input.emailAddress,
          sshPublicKey: this.input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUserProfile.userArn', props);
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
          userArn: this.input.userArn,
          displayName: this.input.displayName,
          emailAddress: this.input.emailAddress,
          sshPublicKey: this.input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUserProfile.displayName', props);
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
          userArn: this.input.userArn,
          displayName: this.input.displayName,
          emailAddress: this.input.emailAddress,
          sshPublicKey: this.input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUserProfile.emailAddress', props);
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
          userArn: this.input.userArn,
          displayName: this.input.displayName,
          emailAddress: this.input.emailAddress,
          sshPublicKey: this.input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUserProfile.sshPublicKey', props);
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
          userArn: this.input.userArn,
          displayName: this.input.displayName,
          emailAddress: this.input.emailAddress,
          sshPublicKey: this.input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUserProfile.createdTimestamp', props);
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
          userArn: this.input.userArn,
          displayName: this.input.displayName,
          emailAddress: this.input.emailAddress,
          sshPublicKey: this.input.sshPublicKey,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUserProfile.lastModifiedTimestamp', props);
    return resource.getResponseField('lastModifiedTimestamp') as unknown as string;
  }

}

