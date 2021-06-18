import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ResourceGroupsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createGroup(input: shapes.ResourceGroupsCreateGroupInput): ResourceGroupsCreateGroup {
    return new ResourceGroupsCreateGroup(this, 'CreateGroup', this.__resources, input);
  }

  public deleteGroup(input: shapes.ResourceGroupsDeleteGroupInput): ResourceGroupsDeleteGroup {
    return new ResourceGroupsDeleteGroup(this, 'DeleteGroup', this.__resources, input);
  }

  public fetchGroup(input: shapes.ResourceGroupsGetGroupInput): ResourceGroupsFetchGroup {
    return new ResourceGroupsFetchGroup(this, 'FetchGroup', this.__resources, input);
  }

  public fetchGroupConfiguration(input: shapes.ResourceGroupsGetGroupConfigurationInput): ResourceGroupsFetchGroupConfiguration {
    return new ResourceGroupsFetchGroupConfiguration(this, 'FetchGroupConfiguration', this.__resources, input);
  }

  public fetchGroupQuery(input: shapes.ResourceGroupsGetGroupQueryInput): ResourceGroupsFetchGroupQuery {
    return new ResourceGroupsFetchGroupQuery(this, 'FetchGroupQuery', this.__resources, input);
  }

  public fetchTags(input: shapes.ResourceGroupsGetTagsInput): ResourceGroupsFetchTags {
    return new ResourceGroupsFetchTags(this, 'FetchTags', this.__resources, input);
  }

  public groupResources(input: shapes.ResourceGroupsGroupResourcesInput): ResourceGroupsGroupResources {
    return new ResourceGroupsGroupResources(this, 'GroupResources', this.__resources, input);
  }

  public listGroupResources(input: shapes.ResourceGroupsListGroupResourcesInput): ResourceGroupsListGroupResources {
    return new ResourceGroupsListGroupResources(this, 'ListGroupResources', this.__resources, input);
  }

  public listGroups(input: shapes.ResourceGroupsListGroupsInput): ResourceGroupsListGroups {
    return new ResourceGroupsListGroups(this, 'ListGroups', this.__resources, input);
  }

  public searchResources(input: shapes.ResourceGroupsSearchResourcesInput): ResourceGroupsSearchResources {
    return new ResourceGroupsSearchResources(this, 'SearchResources', this.__resources, input);
  }

  public tag(input: shapes.ResourceGroupsTagInput): ResourceGroupsTag {
    return new ResourceGroupsTag(this, 'Tag', this.__resources, input);
  }

  public ungroupResources(input: shapes.ResourceGroupsUngroupResourcesInput): ResourceGroupsUngroupResources {
    return new ResourceGroupsUngroupResources(this, 'UngroupResources', this.__resources, input);
  }

  public untag(input: shapes.ResourceGroupsUntagInput): ResourceGroupsUntag {
    return new ResourceGroupsUntag(this, 'Untag', this.__resources, input);
  }

  public updateGroup(input: shapes.ResourceGroupsUpdateGroupInput): ResourceGroupsUpdateGroup {
    return new ResourceGroupsUpdateGroup(this, 'UpdateGroup', this.__resources, input);
  }

  public updateGroupQuery(input: shapes.ResourceGroupsUpdateGroupQueryInput): ResourceGroupsUpdateGroupQuery {
    return new ResourceGroupsUpdateGroupQuery(this, 'UpdateGroupQuery', this.__resources, input);
  }

}

export class ResourceGroupsCreateGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsCreateGroupInput) {
    super(scope, id);
  }

  public get group(): ResourceGroupsCreateGroupGroup {
    return new ResourceGroupsCreateGroupGroup(this, 'Group', this.__resources, this.input);
  }

  public get resourceQuery(): ResourceGroupsCreateGroupResourceQuery {
    return new ResourceGroupsCreateGroupResourceQuery(this, 'ResourceQuery', this.__resources, this.input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.CreateGroup.Tags'),
        outputPath: 'Tags',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          ResourceQuery: {
            Type: this.input.resourceQuery?.type,
            Query: this.input.resourceQuery?.query,
          },
          Tags: this.input.tags,
          Configuration: this.input.configuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get groupConfiguration(): ResourceGroupsCreateGroupGroupConfiguration {
    return new ResourceGroupsCreateGroupGroupConfiguration(this, 'GroupConfiguration', this.__resources, this.input);
  }

}

export class ResourceGroupsCreateGroupGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsCreateGroupInput) {
    super(scope, id);
  }

  public get groupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.CreateGroup.Group.GroupArn'),
        outputPath: 'Group.GroupArn',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          ResourceQuery: {
            Type: this.input.resourceQuery?.type,
            Query: this.input.resourceQuery?.query,
          },
          Tags: this.input.tags,
          Configuration: this.input.configuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.GroupArn', props);
    return resource.getResponseField('Group.GroupArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.CreateGroup.Group.Name'),
        outputPath: 'Group.Name',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          ResourceQuery: {
            Type: this.input.resourceQuery?.type,
            Query: this.input.resourceQuery?.query,
          },
          Tags: this.input.tags,
          Configuration: this.input.configuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.Name', props);
    return resource.getResponseField('Group.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.CreateGroup.Group.Description'),
        outputPath: 'Group.Description',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          ResourceQuery: {
            Type: this.input.resourceQuery?.type,
            Query: this.input.resourceQuery?.query,
          },
          Tags: this.input.tags,
          Configuration: this.input.configuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.Group.Description', props);
    return resource.getResponseField('Group.Description') as unknown as string;
  }

}

export class ResourceGroupsCreateGroupResourceQuery extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsCreateGroupInput) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.CreateGroup.ResourceQuery.Type'),
        outputPath: 'ResourceQuery.Type',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          ResourceQuery: {
            Type: this.input.resourceQuery?.type,
            Query: this.input.resourceQuery?.query,
          },
          Tags: this.input.tags,
          Configuration: this.input.configuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.ResourceQuery.Type', props);
    return resource.getResponseField('ResourceQuery.Type') as unknown as string;
  }

  public get query(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.CreateGroup.ResourceQuery.Query'),
        outputPath: 'ResourceQuery.Query',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          ResourceQuery: {
            Type: this.input.resourceQuery?.type,
            Query: this.input.resourceQuery?.query,
          },
          Tags: this.input.tags,
          Configuration: this.input.configuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.ResourceQuery.Query', props);
    return resource.getResponseField('ResourceQuery.Query') as unknown as string;
  }

}

export class ResourceGroupsCreateGroupGroupConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsCreateGroupInput) {
    super(scope, id);
  }

  public get configuration(): shapes.ResourceGroupsGroupConfigurationItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.CreateGroup.GroupConfiguration.Configuration'),
        outputPath: 'GroupConfiguration.Configuration',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          ResourceQuery: {
            Type: this.input.resourceQuery?.type,
            Query: this.input.resourceQuery?.query,
          },
          Tags: this.input.tags,
          Configuration: this.input.configuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.GroupConfiguration.Configuration', props);
    return resource.getResponseField('GroupConfiguration.Configuration') as unknown as shapes.ResourceGroupsGroupConfigurationItem[];
  }

  public get proposedConfiguration(): shapes.ResourceGroupsGroupConfigurationItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.CreateGroup.GroupConfiguration.ProposedConfiguration'),
        outputPath: 'GroupConfiguration.ProposedConfiguration',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          ResourceQuery: {
            Type: this.input.resourceQuery?.type,
            Query: this.input.resourceQuery?.query,
          },
          Tags: this.input.tags,
          Configuration: this.input.configuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.GroupConfiguration.ProposedConfiguration', props);
    return resource.getResponseField('GroupConfiguration.ProposedConfiguration') as unknown as shapes.ResourceGroupsGroupConfigurationItem[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.CreateGroup.GroupConfiguration.Status'),
        outputPath: 'GroupConfiguration.Status',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          ResourceQuery: {
            Type: this.input.resourceQuery?.type,
            Query: this.input.resourceQuery?.query,
          },
          Tags: this.input.tags,
          Configuration: this.input.configuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.GroupConfiguration.Status', props);
    return resource.getResponseField('GroupConfiguration.Status') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGroup',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.CreateGroup.GroupConfiguration.FailureReason'),
        outputPath: 'GroupConfiguration.FailureReason',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          ResourceQuery: {
            Type: this.input.resourceQuery?.type,
            Query: this.input.resourceQuery?.query,
          },
          Tags: this.input.tags,
          Configuration: this.input.configuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGroup.GroupConfiguration.FailureReason', props);
    return resource.getResponseField('GroupConfiguration.FailureReason') as unknown as string;
  }

}

export class ResourceGroupsDeleteGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsDeleteGroupInput) {
    super(scope, id);
  }

  public get group(): ResourceGroupsDeleteGroupGroup {
    return new ResourceGroupsDeleteGroupGroup(this, 'Group', this.__resources, this.input);
  }

}

export class ResourceGroupsDeleteGroupGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsDeleteGroupInput) {
    super(scope, id);
  }

  public get groupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGroup',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.DeleteGroup.Group.GroupArn'),
        outputPath: 'Group.GroupArn',
        parameters: {
          GroupName: this.input.groupName,
          Group: this.input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGroup.Group.GroupArn', props);
    return resource.getResponseField('Group.GroupArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGroup',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.DeleteGroup.Group.Name'),
        outputPath: 'Group.Name',
        parameters: {
          GroupName: this.input.groupName,
          Group: this.input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGroup.Group.Name', props);
    return resource.getResponseField('Group.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGroup',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.DeleteGroup.Group.Description'),
        outputPath: 'Group.Description',
        parameters: {
          GroupName: this.input.groupName,
          Group: this.input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGroup.Group.Description', props);
    return resource.getResponseField('Group.Description') as unknown as string;
  }

}

export class ResourceGroupsFetchGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsGetGroupInput) {
    super(scope, id);
  }

  public get group(): ResourceGroupsFetchGroupGroup {
    return new ResourceGroupsFetchGroupGroup(this, 'Group', this.__resources, this.input);
  }

}

export class ResourceGroupsFetchGroupGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsGetGroupInput) {
    super(scope, id);
  }

  public get groupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.GetGroup.Group.GroupArn'),
        outputPath: 'Group.GroupArn',
        parameters: {
          GroupName: this.input.groupName,
          Group: this.input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Group.GroupArn', props);
    return resource.getResponseField('Group.GroupArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.GetGroup.Group.Name'),
        outputPath: 'Group.Name',
        parameters: {
          GroupName: this.input.groupName,
          Group: this.input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Group.Name', props);
    return resource.getResponseField('Group.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroup',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.GetGroup.Group.Description'),
        outputPath: 'Group.Description',
        parameters: {
          GroupName: this.input.groupName,
          Group: this.input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroup.Group.Description', props);
    return resource.getResponseField('Group.Description') as unknown as string;
  }

}

export class ResourceGroupsFetchGroupConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsGetGroupConfigurationInput) {
    super(scope, id);
  }

  public get groupConfiguration(): ResourceGroupsFetchGroupConfigurationGroupConfiguration {
    return new ResourceGroupsFetchGroupConfigurationGroupConfiguration(this, 'GroupConfiguration', this.__resources, this.input);
  }

}

export class ResourceGroupsFetchGroupConfigurationGroupConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsGetGroupConfigurationInput) {
    super(scope, id);
  }

  public get configuration(): shapes.ResourceGroupsGroupConfigurationItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupConfiguration',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.GetGroupConfiguration.GroupConfiguration.Configuration'),
        outputPath: 'GroupConfiguration.Configuration',
        parameters: {
          Group: this.input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupConfiguration.GroupConfiguration.Configuration', props);
    return resource.getResponseField('GroupConfiguration.Configuration') as unknown as shapes.ResourceGroupsGroupConfigurationItem[];
  }

  public get proposedConfiguration(): shapes.ResourceGroupsGroupConfigurationItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupConfiguration',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.GetGroupConfiguration.GroupConfiguration.ProposedConfiguration'),
        outputPath: 'GroupConfiguration.ProposedConfiguration',
        parameters: {
          Group: this.input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupConfiguration.GroupConfiguration.ProposedConfiguration', props);
    return resource.getResponseField('GroupConfiguration.ProposedConfiguration') as unknown as shapes.ResourceGroupsGroupConfigurationItem[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupConfiguration',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.GetGroupConfiguration.GroupConfiguration.Status'),
        outputPath: 'GroupConfiguration.Status',
        parameters: {
          Group: this.input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupConfiguration.GroupConfiguration.Status', props);
    return resource.getResponseField('GroupConfiguration.Status') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupConfiguration',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.GetGroupConfiguration.GroupConfiguration.FailureReason'),
        outputPath: 'GroupConfiguration.FailureReason',
        parameters: {
          Group: this.input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupConfiguration.GroupConfiguration.FailureReason', props);
    return resource.getResponseField('GroupConfiguration.FailureReason') as unknown as string;
  }

}

export class ResourceGroupsFetchGroupQuery extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsGetGroupQueryInput) {
    super(scope, id);
  }

  public get groupQuery(): ResourceGroupsFetchGroupQueryGroupQuery {
    return new ResourceGroupsFetchGroupQueryGroupQuery(this, 'GroupQuery', this.__resources, this.input);
  }

}

export class ResourceGroupsFetchGroupQueryGroupQuery extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsGetGroupQueryInput) {
    super(scope, id);
  }

  public get groupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupQuery',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.GetGroupQuery.GroupQuery.GroupName'),
        outputPath: 'GroupQuery.GroupName',
        parameters: {
          GroupName: this.input.groupName,
          Group: this.input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupQuery.GroupQuery.GroupName', props);
    return resource.getResponseField('GroupQuery.GroupName') as unknown as string;
  }

  public get resourceQuery(): ResourceGroupsFetchGroupQueryGroupQueryResourceQuery {
    return new ResourceGroupsFetchGroupQueryGroupQueryResourceQuery(this, 'ResourceQuery', this.__resources, this.input);
  }

}

export class ResourceGroupsFetchGroupQueryGroupQueryResourceQuery extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsGetGroupQueryInput) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupQuery',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.GetGroupQuery.GroupQuery.ResourceQuery.Type'),
        outputPath: 'GroupQuery.ResourceQuery.Type',
        parameters: {
          GroupName: this.input.groupName,
          Group: this.input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupQuery.GroupQuery.ResourceQuery.Type', props);
    return resource.getResponseField('GroupQuery.ResourceQuery.Type') as unknown as string;
  }

  public get query(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getGroupQuery',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.GetGroupQuery.GroupQuery.ResourceQuery.Query'),
        outputPath: 'GroupQuery.ResourceQuery.Query',
        parameters: {
          GroupName: this.input.groupName,
          Group: this.input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetGroupQuery.GroupQuery.ResourceQuery.Query', props);
    return resource.getResponseField('GroupQuery.ResourceQuery.Query') as unknown as string;
  }

}

export class ResourceGroupsFetchTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsGetTagsInput) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTags',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.GetTags.Arn'),
        outputPath: 'Arn',
        parameters: {
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTags.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTags',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.GetTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          Arn: this.input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class ResourceGroupsGroupResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsGroupResourcesInput) {
    super(scope, id);
  }

  public get succeeded(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'groupResources',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.GroupResources.Succeeded'),
        outputPath: 'Succeeded',
        parameters: {
          Group: this.input.group,
          ResourceArns: this.input.resourceArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GroupResources.Succeeded', props);
    return resource.getResponseField('Succeeded') as unknown as string[];
  }

  public get failed(): shapes.ResourceGroupsFailedResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'groupResources',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.GroupResources.Failed'),
        outputPath: 'Failed',
        parameters: {
          Group: this.input.group,
          ResourceArns: this.input.resourceArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GroupResources.Failed', props);
    return resource.getResponseField('Failed') as unknown as shapes.ResourceGroupsFailedResource[];
  }

}

export class ResourceGroupsListGroupResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsListGroupResourcesInput) {
    super(scope, id);
  }

  public get resourceIdentifiers(): shapes.ResourceGroupsResourceIdentifier[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroupResources',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.ListGroupResources.ResourceIdentifiers'),
        outputPath: 'ResourceIdentifiers',
        parameters: {
          GroupName: this.input.groupName,
          Group: this.input.group,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroupResources.ResourceIdentifiers', props);
    return resource.getResponseField('ResourceIdentifiers') as unknown as shapes.ResourceGroupsResourceIdentifier[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroupResources',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.ListGroupResources.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          GroupName: this.input.groupName,
          Group: this.input.group,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroupResources.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get queryErrors(): shapes.ResourceGroupsQueryError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroupResources',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.ListGroupResources.QueryErrors'),
        outputPath: 'QueryErrors',
        parameters: {
          GroupName: this.input.groupName,
          Group: this.input.group,
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroupResources.QueryErrors', props);
    return resource.getResponseField('QueryErrors') as unknown as shapes.ResourceGroupsQueryError[];
  }

}

export class ResourceGroupsListGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsListGroupsInput) {
    super(scope, id);
  }

  public get groupIdentifiers(): shapes.ResourceGroupsGroupIdentifier[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroups',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.ListGroups.GroupIdentifiers'),
        outputPath: 'GroupIdentifiers',
        parameters: {
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroups.GroupIdentifiers', props);
    return resource.getResponseField('GroupIdentifiers') as unknown as shapes.ResourceGroupsGroupIdentifier[];
  }

  public get groups(): shapes.ResourceGroupsGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroups',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.ListGroups.Groups'),
        outputPath: 'Groups',
        parameters: {
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroups.Groups', props);
    return resource.getResponseField('Groups') as unknown as shapes.ResourceGroupsGroup[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroups',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.ListGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Filters: this.input.filters,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ResourceGroupsSearchResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsSearchResourcesInput) {
    super(scope, id);
  }

  public get resourceIdentifiers(): shapes.ResourceGroupsResourceIdentifier[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchResources',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.SearchResources.ResourceIdentifiers'),
        outputPath: 'ResourceIdentifiers',
        parameters: {
          ResourceQuery: {
            Type: this.input.resourceQuery.type,
            Query: this.input.resourceQuery.query,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchResources.ResourceIdentifiers', props);
    return resource.getResponseField('ResourceIdentifiers') as unknown as shapes.ResourceGroupsResourceIdentifier[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchResources',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.SearchResources.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceQuery: {
            Type: this.input.resourceQuery.type,
            Query: this.input.resourceQuery.query,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchResources.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get queryErrors(): shapes.ResourceGroupsQueryError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'searchResources',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.SearchResources.QueryErrors'),
        outputPath: 'QueryErrors',
        parameters: {
          ResourceQuery: {
            Type: this.input.resourceQuery.type,
            Query: this.input.resourceQuery.query,
          },
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SearchResources.QueryErrors', props);
    return resource.getResponseField('QueryErrors') as unknown as shapes.ResourceGroupsQueryError[];
  }

}

export class ResourceGroupsTag extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsTagInput) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tag',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.Tag.Arn'),
        outputPath: 'Arn',
        parameters: {
          Arn: this.input.arn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Tag.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tag',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.Tag.Tags'),
        outputPath: 'Tags',
        parameters: {
          Arn: this.input.arn,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Tag.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class ResourceGroupsUngroupResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsUngroupResourcesInput) {
    super(scope, id);
  }

  public get succeeded(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'ungroupResources',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.UngroupResources.Succeeded'),
        outputPath: 'Succeeded',
        parameters: {
          Group: this.input.group,
          ResourceArns: this.input.resourceArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UngroupResources.Succeeded', props);
    return resource.getResponseField('Succeeded') as unknown as string[];
  }

  public get failed(): shapes.ResourceGroupsFailedResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'ungroupResources',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.UngroupResources.Failed'),
        outputPath: 'Failed',
        parameters: {
          Group: this.input.group,
          ResourceArns: this.input.resourceArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UngroupResources.Failed', props);
    return resource.getResponseField('Failed') as unknown as shapes.ResourceGroupsFailedResource[];
  }

}

export class ResourceGroupsUntag extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsUntagInput) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untag',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.Untag.Arn'),
        outputPath: 'Arn',
        parameters: {
          Arn: this.input.arn,
          Keys: this.input.keys,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Untag.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get keys(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untag',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.Untag.Keys'),
        outputPath: 'Keys',
        parameters: {
          Arn: this.input.arn,
          Keys: this.input.keys,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Untag.Keys', props);
    return resource.getResponseField('Keys') as unknown as string[];
  }

}

export class ResourceGroupsUpdateGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsUpdateGroupInput) {
    super(scope, id);
  }

  public get group(): ResourceGroupsUpdateGroupGroup {
    return new ResourceGroupsUpdateGroupGroup(this, 'Group', this.__resources, this.input);
  }

}

export class ResourceGroupsUpdateGroupGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsUpdateGroupInput) {
    super(scope, id);
  }

  public get groupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.UpdateGroup.Group.GroupArn'),
        outputPath: 'Group.GroupArn',
        parameters: {
          GroupName: this.input.groupName,
          Group: this.input.group,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroup.Group.GroupArn', props);
    return resource.getResponseField('Group.GroupArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.UpdateGroup.Group.Name'),
        outputPath: 'Group.Name',
        parameters: {
          GroupName: this.input.groupName,
          Group: this.input.group,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroup.Group.Name', props);
    return resource.getResponseField('Group.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroup',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.UpdateGroup.Group.Description'),
        outputPath: 'Group.Description',
        parameters: {
          GroupName: this.input.groupName,
          Group: this.input.group,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroup.Group.Description', props);
    return resource.getResponseField('Group.Description') as unknown as string;
  }

}

export class ResourceGroupsUpdateGroupQuery extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsUpdateGroupQueryInput) {
    super(scope, id);
  }

  public get groupQuery(): ResourceGroupsUpdateGroupQueryGroupQuery {
    return new ResourceGroupsUpdateGroupQueryGroupQuery(this, 'GroupQuery', this.__resources, this.input);
  }

}

export class ResourceGroupsUpdateGroupQueryGroupQuery extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsUpdateGroupQueryInput) {
    super(scope, id);
  }

  public get groupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroupQuery',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.UpdateGroupQuery.GroupQuery.GroupName'),
        outputPath: 'GroupQuery.GroupName',
        parameters: {
          GroupName: this.input.groupName,
          Group: this.input.group,
          ResourceQuery: {
            Type: this.input.resourceQuery.type,
            Query: this.input.resourceQuery.query,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroupQuery.GroupQuery.GroupName', props);
    return resource.getResponseField('GroupQuery.GroupName') as unknown as string;
  }

  public get resourceQuery(): ResourceGroupsUpdateGroupQueryGroupQueryResourceQuery {
    return new ResourceGroupsUpdateGroupQueryGroupQueryResourceQuery(this, 'ResourceQuery', this.__resources, this.input);
  }

}

export class ResourceGroupsUpdateGroupQueryGroupQueryResourceQuery extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ResourceGroupsUpdateGroupQueryInput) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroupQuery',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.UpdateGroupQuery.GroupQuery.ResourceQuery.Type'),
        outputPath: 'GroupQuery.ResourceQuery.Type',
        parameters: {
          GroupName: this.input.groupName,
          Group: this.input.group,
          ResourceQuery: {
            Type: this.input.resourceQuery.type,
            Query: this.input.resourceQuery.query,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroupQuery.GroupQuery.ResourceQuery.Type', props);
    return resource.getResponseField('GroupQuery.ResourceQuery.Type') as unknown as string;
  }

  public get query(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateGroupQuery',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.UpdateGroupQuery.GroupQuery.ResourceQuery.Query'),
        outputPath: 'GroupQuery.ResourceQuery.Query',
        parameters: {
          GroupName: this.input.groupName,
          Group: this.input.group,
          ResourceQuery: {
            Type: this.input.resourceQuery.type,
            Query: this.input.resourceQuery.query,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateGroupQuery.GroupQuery.ResourceQuery.Query', props);
    return resource.getResponseField('GroupQuery.ResourceQuery.Query') as unknown as string;
  }

}

