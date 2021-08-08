import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ResourceGroupsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createGroup(input: shapes.ResourceGroupsCreateGroupInput): ResourceGroupsResponsesCreateGroup {
    return new ResourceGroupsResponsesCreateGroup(this, this.__resources, input);
  }

  public deleteGroup(input: shapes.ResourceGroupsDeleteGroupInput): ResourceGroupsResponsesDeleteGroup {
    return new ResourceGroupsResponsesDeleteGroup(this, this.__resources, input);
  }

  public fetchGroup(input: shapes.ResourceGroupsGetGroupInput): ResourceGroupsResponsesFetchGroup {
    return new ResourceGroupsResponsesFetchGroup(this, this.__resources, input);
  }

  public fetchGroupConfiguration(input: shapes.ResourceGroupsGetGroupConfigurationInput): ResourceGroupsResponsesFetchGroupConfiguration {
    return new ResourceGroupsResponsesFetchGroupConfiguration(this, this.__resources, input);
  }

  public fetchGroupQuery(input: shapes.ResourceGroupsGetGroupQueryInput): ResourceGroupsResponsesFetchGroupQuery {
    return new ResourceGroupsResponsesFetchGroupQuery(this, this.__resources, input);
  }

  public fetchTags(input: shapes.ResourceGroupsGetTagsInput): ResourceGroupsResponsesFetchTags {
    return new ResourceGroupsResponsesFetchTags(this, this.__resources, input);
  }

  public groupResources(input: shapes.ResourceGroupsGroupResourcesInput): ResourceGroupsResponsesGroupResources {
    return new ResourceGroupsResponsesGroupResources(this, this.__resources, input);
  }

  public listGroupResources(input: shapes.ResourceGroupsListGroupResourcesInput): ResourceGroupsResponsesListGroupResources {
    return new ResourceGroupsResponsesListGroupResources(this, this.__resources, input);
  }

  public listGroups(input: shapes.ResourceGroupsListGroupsInput): ResourceGroupsResponsesListGroups {
    return new ResourceGroupsResponsesListGroups(this, this.__resources, input);
  }

  public putGroupConfiguration(input: shapes.ResourceGroupsPutGroupConfigurationInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putGroupConfiguration',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.PutGroupConfiguration'),
        parameters: {
          Group: input.group,
          Configuration: input.configuration,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutGroupConfiguration', props);
  }

  public searchResources(input: shapes.ResourceGroupsSearchResourcesInput): ResourceGroupsResponsesSearchResources {
    return new ResourceGroupsResponsesSearchResources(this, this.__resources, input);
  }

  public tag(input: shapes.ResourceGroupsTagInput): ResourceGroupsResponsesTag {
    return new ResourceGroupsResponsesTag(this, this.__resources, input);
  }

  public ungroupResources(input: shapes.ResourceGroupsUngroupResourcesInput): ResourceGroupsResponsesUngroupResources {
    return new ResourceGroupsResponsesUngroupResources(this, this.__resources, input);
  }

  public untag(input: shapes.ResourceGroupsUntagInput): ResourceGroupsResponsesUntag {
    return new ResourceGroupsResponsesUntag(this, this.__resources, input);
  }

  public updateGroup(input: shapes.ResourceGroupsUpdateGroupInput): ResourceGroupsResponsesUpdateGroup {
    return new ResourceGroupsResponsesUpdateGroup(this, this.__resources, input);
  }

  public updateGroupQuery(input: shapes.ResourceGroupsUpdateGroupQueryInput): ResourceGroupsResponsesUpdateGroupQuery {
    return new ResourceGroupsResponsesUpdateGroupQuery(this, this.__resources, input);
  }

}

export class ResourceGroupsResponsesCreateGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsCreateGroupInput) {
  }

  public get group(): ResourceGroupsResponsesCreateGroupGroup {
    return new ResourceGroupsResponsesCreateGroupGroup(this.__scope, this.__resources, this.__input);
  }

  public get resourceQuery(): ResourceGroupsResponsesCreateGroupResourceQuery {
    return new ResourceGroupsResponsesCreateGroupResourceQuery(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          Description: this.__input.description,
          ResourceQuery: {
            Type: this.__input.resourceQuery?.type,
            Query: this.__input.resourceQuery?.query,
          },
          Tags: this.__input.tags,
          Configuration: this.__input.configuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get groupConfiguration(): ResourceGroupsResponsesCreateGroupGroupConfiguration {
    return new ResourceGroupsResponsesCreateGroupGroupConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ResourceGroupsResponsesCreateGroupGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsCreateGroupInput) {
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
          Name: this.__input.name,
          Description: this.__input.description,
          ResourceQuery: {
            Type: this.__input.resourceQuery?.type,
            Query: this.__input.resourceQuery?.query,
          },
          Tags: this.__input.tags,
          Configuration: this.__input.configuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Group.GroupArn', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          ResourceQuery: {
            Type: this.__input.resourceQuery?.type,
            Query: this.__input.resourceQuery?.query,
          },
          Tags: this.__input.tags,
          Configuration: this.__input.configuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Group.Name', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          ResourceQuery: {
            Type: this.__input.resourceQuery?.type,
            Query: this.__input.resourceQuery?.query,
          },
          Tags: this.__input.tags,
          Configuration: this.__input.configuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.Group.Description', props);
    return resource.getResponseField('Group.Description') as unknown as string;
  }

}

export class ResourceGroupsResponsesCreateGroupResourceQuery {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsCreateGroupInput) {
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
          Name: this.__input.name,
          Description: this.__input.description,
          ResourceQuery: {
            Type: this.__input.resourceQuery?.type,
            Query: this.__input.resourceQuery?.query,
          },
          Tags: this.__input.tags,
          Configuration: this.__input.configuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.ResourceQuery.Type', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          ResourceQuery: {
            Type: this.__input.resourceQuery?.type,
            Query: this.__input.resourceQuery?.query,
          },
          Tags: this.__input.tags,
          Configuration: this.__input.configuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.ResourceQuery.Query', props);
    return resource.getResponseField('ResourceQuery.Query') as unknown as string;
  }

}

export class ResourceGroupsResponsesCreateGroupGroupConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsCreateGroupInput) {
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
          Name: this.__input.name,
          Description: this.__input.description,
          ResourceQuery: {
            Type: this.__input.resourceQuery?.type,
            Query: this.__input.resourceQuery?.query,
          },
          Tags: this.__input.tags,
          Configuration: this.__input.configuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.GroupConfiguration.Configuration', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          ResourceQuery: {
            Type: this.__input.resourceQuery?.type,
            Query: this.__input.resourceQuery?.query,
          },
          Tags: this.__input.tags,
          Configuration: this.__input.configuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.GroupConfiguration.ProposedConfiguration', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          ResourceQuery: {
            Type: this.__input.resourceQuery?.type,
            Query: this.__input.resourceQuery?.query,
          },
          Tags: this.__input.tags,
          Configuration: this.__input.configuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.GroupConfiguration.Status', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          ResourceQuery: {
            Type: this.__input.resourceQuery?.type,
            Query: this.__input.resourceQuery?.query,
          },
          Tags: this.__input.tags,
          Configuration: this.__input.configuration,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGroup.GroupConfiguration.FailureReason', props);
    return resource.getResponseField('GroupConfiguration.FailureReason') as unknown as string;
  }

}

export class ResourceGroupsResponsesDeleteGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsDeleteGroupInput) {
  }

  public get group(): ResourceGroupsResponsesDeleteGroupGroup {
    return new ResourceGroupsResponsesDeleteGroupGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ResourceGroupsResponsesDeleteGroupGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsDeleteGroupInput) {
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
          GroupName: this.__input.groupName,
          Group: this.__input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGroup.Group.GroupArn', props);
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
          GroupName: this.__input.groupName,
          Group: this.__input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGroup.Group.Name', props);
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
          GroupName: this.__input.groupName,
          Group: this.__input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGroup.Group.Description', props);
    return resource.getResponseField('Group.Description') as unknown as string;
  }

}

export class ResourceGroupsResponsesFetchGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsGetGroupInput) {
  }

  public get group(): ResourceGroupsResponsesFetchGroupGroup {
    return new ResourceGroupsResponsesFetchGroupGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ResourceGroupsResponsesFetchGroupGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsGetGroupInput) {
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
          GroupName: this.__input.groupName,
          Group: this.__input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.Group.GroupArn', props);
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
          GroupName: this.__input.groupName,
          Group: this.__input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.Group.Name', props);
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
          GroupName: this.__input.groupName,
          Group: this.__input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroup.Group.Description', props);
    return resource.getResponseField('Group.Description') as unknown as string;
  }

}

export class ResourceGroupsResponsesFetchGroupConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsGetGroupConfigurationInput) {
  }

  public get groupConfiguration(): ResourceGroupsResponsesFetchGroupConfigurationGroupConfiguration {
    return new ResourceGroupsResponsesFetchGroupConfigurationGroupConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class ResourceGroupsResponsesFetchGroupConfigurationGroupConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsGetGroupConfigurationInput) {
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
          Group: this.__input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupConfiguration.GroupConfiguration.Configuration', props);
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
          Group: this.__input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupConfiguration.GroupConfiguration.ProposedConfiguration', props);
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
          Group: this.__input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupConfiguration.GroupConfiguration.Status', props);
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
          Group: this.__input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupConfiguration.GroupConfiguration.FailureReason', props);
    return resource.getResponseField('GroupConfiguration.FailureReason') as unknown as string;
  }

}

export class ResourceGroupsResponsesFetchGroupQuery {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsGetGroupQueryInput) {
  }

  public get groupQuery(): ResourceGroupsResponsesFetchGroupQueryGroupQuery {
    return new ResourceGroupsResponsesFetchGroupQueryGroupQuery(this.__scope, this.__resources, this.__input);
  }

}

export class ResourceGroupsResponsesFetchGroupQueryGroupQuery {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsGetGroupQueryInput) {
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
          GroupName: this.__input.groupName,
          Group: this.__input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupQuery.GroupQuery.GroupName', props);
    return resource.getResponseField('GroupQuery.GroupName') as unknown as string;
  }

  public get resourceQuery(): ResourceGroupsResponsesFetchGroupQueryGroupQueryResourceQuery {
    return new ResourceGroupsResponsesFetchGroupQueryGroupQueryResourceQuery(this.__scope, this.__resources, this.__input);
  }

}

export class ResourceGroupsResponsesFetchGroupQueryGroupQueryResourceQuery {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsGetGroupQueryInput) {
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
          GroupName: this.__input.groupName,
          Group: this.__input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupQuery.GroupQuery.ResourceQuery.Type', props);
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
          GroupName: this.__input.groupName,
          Group: this.__input.group,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetGroupQuery.GroupQuery.ResourceQuery.Query', props);
    return resource.getResponseField('GroupQuery.ResourceQuery.Query') as unknown as string;
  }

}

export class ResourceGroupsResponsesFetchTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsGetTagsInput) {
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
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTags.Arn', props);
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
          Arn: this.__input.arn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class ResourceGroupsResponsesGroupResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsGroupResourcesInput) {
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
          Group: this.__input.group,
          ResourceArns: this.__input.resourceArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GroupResources.Succeeded', props);
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
          Group: this.__input.group,
          ResourceArns: this.__input.resourceArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GroupResources.Failed', props);
    return resource.getResponseField('Failed') as unknown as shapes.ResourceGroupsFailedResource[];
  }

  public get pending(): shapes.ResourceGroupsPendingResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'groupResources',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.GroupResources.Pending'),
        outputPath: 'Pending',
        parameters: {
          Group: this.__input.group,
          ResourceArns: this.__input.resourceArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GroupResources.Pending', props);
    return resource.getResponseField('Pending') as unknown as shapes.ResourceGroupsPendingResource[];
  }

}

export class ResourceGroupsResponsesListGroupResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsListGroupResourcesInput) {
  }

  public get resources(): shapes.ResourceGroupsListGroupResourcesItem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listGroupResources',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.ListGroupResources.Resources'),
        outputPath: 'Resources',
        parameters: {
          GroupName: this.__input.groupName,
          Group: this.__input.group,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroupResources.Resources', props);
    return resource.getResponseField('Resources') as unknown as shapes.ResourceGroupsListGroupResourcesItem[];
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
          GroupName: this.__input.groupName,
          Group: this.__input.group,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroupResources.ResourceIdentifiers', props);
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
          GroupName: this.__input.groupName,
          Group: this.__input.group,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroupResources.NextToken', props);
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
          GroupName: this.__input.groupName,
          Group: this.__input.group,
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroupResources.QueryErrors', props);
    return resource.getResponseField('QueryErrors') as unknown as shapes.ResourceGroupsQueryError[];
  }

}

export class ResourceGroupsResponsesListGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsListGroupsInput) {
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
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroups.GroupIdentifiers', props);
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
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroups.Groups', props);
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
          Filters: this.__input.filters,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ResourceGroupsResponsesSearchResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsSearchResourcesInput) {
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
            Type: this.__input.resourceQuery.type,
            Query: this.__input.resourceQuery.query,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchResources.ResourceIdentifiers', props);
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
            Type: this.__input.resourceQuery.type,
            Query: this.__input.resourceQuery.query,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchResources.NextToken', props);
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
            Type: this.__input.resourceQuery.type,
            Query: this.__input.resourceQuery.query,
          },
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SearchResources.QueryErrors', props);
    return resource.getResponseField('QueryErrors') as unknown as shapes.ResourceGroupsQueryError[];
  }

}

export class ResourceGroupsResponsesTag {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsTagInput) {
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
          Arn: this.__input.arn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Tag.Arn', props);
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
          Arn: this.__input.arn,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Tag.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class ResourceGroupsResponsesUngroupResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsUngroupResourcesInput) {
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
          Group: this.__input.group,
          ResourceArns: this.__input.resourceArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UngroupResources.Succeeded', props);
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
          Group: this.__input.group,
          ResourceArns: this.__input.resourceArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UngroupResources.Failed', props);
    return resource.getResponseField('Failed') as unknown as shapes.ResourceGroupsFailedResource[];
  }

  public get pending(): shapes.ResourceGroupsPendingResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'ungroupResources',
        service: 'ResourceGroups',
        physicalResourceId: cr.PhysicalResourceId.of('ResourceGroups.UngroupResources.Pending'),
        outputPath: 'Pending',
        parameters: {
          Group: this.__input.group,
          ResourceArns: this.__input.resourceArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UngroupResources.Pending', props);
    return resource.getResponseField('Pending') as unknown as shapes.ResourceGroupsPendingResource[];
  }

}

export class ResourceGroupsResponsesUntag {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsUntagInput) {
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
          Arn: this.__input.arn,
          Keys: this.__input.keys,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Untag.Arn', props);
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
          Arn: this.__input.arn,
          Keys: this.__input.keys,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Untag.Keys', props);
    return resource.getResponseField('Keys') as unknown as string[];
  }

}

export class ResourceGroupsResponsesUpdateGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsUpdateGroupInput) {
  }

  public get group(): ResourceGroupsResponsesUpdateGroupGroup {
    return new ResourceGroupsResponsesUpdateGroupGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ResourceGroupsResponsesUpdateGroupGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsUpdateGroupInput) {
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
          GroupName: this.__input.groupName,
          Group: this.__input.group,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGroup.Group.GroupArn', props);
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
          GroupName: this.__input.groupName,
          Group: this.__input.group,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGroup.Group.Name', props);
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
          GroupName: this.__input.groupName,
          Group: this.__input.group,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGroup.Group.Description', props);
    return resource.getResponseField('Group.Description') as unknown as string;
  }

}

export class ResourceGroupsResponsesUpdateGroupQuery {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsUpdateGroupQueryInput) {
  }

  public get groupQuery(): ResourceGroupsResponsesUpdateGroupQueryGroupQuery {
    return new ResourceGroupsResponsesUpdateGroupQueryGroupQuery(this.__scope, this.__resources, this.__input);
  }

}

export class ResourceGroupsResponsesUpdateGroupQueryGroupQuery {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsUpdateGroupQueryInput) {
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
          GroupName: this.__input.groupName,
          Group: this.__input.group,
          ResourceQuery: {
            Type: this.__input.resourceQuery.type,
            Query: this.__input.resourceQuery.query,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGroupQuery.GroupQuery.GroupName', props);
    return resource.getResponseField('GroupQuery.GroupName') as unknown as string;
  }

  public get resourceQuery(): ResourceGroupsResponsesUpdateGroupQueryGroupQueryResourceQuery {
    return new ResourceGroupsResponsesUpdateGroupQueryGroupQueryResourceQuery(this.__scope, this.__resources, this.__input);
  }

}

export class ResourceGroupsResponsesUpdateGroupQueryGroupQueryResourceQuery {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ResourceGroupsUpdateGroupQueryInput) {
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
          GroupName: this.__input.groupName,
          Group: this.__input.group,
          ResourceQuery: {
            Type: this.__input.resourceQuery.type,
            Query: this.__input.resourceQuery.query,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGroupQuery.GroupQuery.ResourceQuery.Type', props);
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
          GroupName: this.__input.groupName,
          Group: this.__input.group,
          ResourceQuery: {
            Type: this.__input.resourceQuery.type,
            Query: this.__input.resourceQuery.query,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateGroupQuery.GroupQuery.ResourceQuery.Query', props);
    return resource.getResponseField('GroupQuery.ResourceQuery.Query') as unknown as string;
  }

}

