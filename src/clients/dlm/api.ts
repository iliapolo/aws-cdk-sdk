import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class DlmClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createLifecyclePolicy(input: shapes.DlmCreateLifecyclePolicyRequest): DLMResponsesCreateLifecyclePolicy {
    return new DLMResponsesCreateLifecyclePolicy(this, this.__resources, input);
  }

  public deleteLifecyclePolicy(input: shapes.DlmDeleteLifecyclePolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLifecyclePolicy',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.DeleteLifecyclePolicy'),
        parameters: {
          PolicyId: input.policyId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteLifecyclePolicy', props);
  }

  public fetchLifecyclePolicies(input: shapes.DlmGetLifecyclePoliciesRequest): DLMResponsesFetchLifecyclePolicies {
    return new DLMResponsesFetchLifecyclePolicies(this, this.__resources, input);
  }

  public fetchLifecyclePolicy(input: shapes.DlmGetLifecyclePolicyRequest): DLMResponsesFetchLifecyclePolicy {
    return new DLMResponsesFetchLifecyclePolicy(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.DlmListTagsForResourceRequest): DLMResponsesListTagsForResource {
    return new DLMResponsesListTagsForResource(this, this.__resources, input);
  }

  public tagResource(input: shapes.DlmTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.DlmUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateLifecyclePolicy(input: shapes.DlmUpdateLifecyclePolicyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLifecyclePolicy',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.UpdateLifecyclePolicy'),
        parameters: {
          PolicyId: input.policyId,
          ExecutionRoleArn: input.executionRoleArn,
          State: input.state,
          Description: input.description,
          PolicyDetails: {
            PolicyType: input.policyDetails?.policyType,
            ResourceTypes: input.policyDetails?.resourceTypes,
            TargetTags: input.policyDetails?.targetTags,
            Schedules: input.policyDetails?.schedules,
            Parameters: {
              ExcludeBootVolume: input.policyDetails?.parameters?.excludeBootVolume,
              NoReboot: input.policyDetails?.parameters?.noReboot,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateLifecyclePolicy', props);
  }

}

export class DLMResponsesCreateLifecyclePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DlmCreateLifecyclePolicyRequest) {
  }

  public get policyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLifecyclePolicy',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.CreateLifecyclePolicy.PolicyId'),
        outputPath: 'PolicyId',
        parameters: {
          ExecutionRoleArn: this.__input.executionRoleArn,
          Description: this.__input.description,
          State: this.__input.state,
          PolicyDetails: {
            PolicyType: this.__input.policyDetails.policyType,
            ResourceTypes: this.__input.policyDetails.resourceTypes,
            TargetTags: this.__input.policyDetails.targetTags,
            Schedules: this.__input.policyDetails.schedules,
            Parameters: {
              ExcludeBootVolume: this.__input.policyDetails.parameters?.excludeBootVolume,
              NoReboot: this.__input.policyDetails.parameters?.noReboot,
            },
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLifecyclePolicy.PolicyId', props);
    return resource.getResponseField('PolicyId') as unknown as string;
  }

}

export class DLMResponsesFetchLifecyclePolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DlmGetLifecyclePoliciesRequest) {
  }

  public get policies(): shapes.DlmLifecyclePolicySummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicies',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.GetLifecyclePolicies.Policies'),
        outputPath: 'Policies',
        parameters: {
          PolicyIds: this.__input.policyIds,
          State: this.__input.state,
          ResourceTypes: this.__input.resourceTypes,
          TargetTags: this.__input.targetTags,
          TagsToAdd: this.__input.tagsToAdd,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicies.Policies', props);
    return resource.getResponseField('Policies') as unknown as shapes.DlmLifecyclePolicySummary[];
  }

}

export class DLMResponsesFetchLifecyclePolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DlmGetLifecyclePolicyRequest) {
  }

  public get policy(): DLMResponsesFetchLifecyclePolicyPolicy {
    return new DLMResponsesFetchLifecyclePolicyPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class DLMResponsesFetchLifecyclePolicyPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DlmGetLifecyclePolicyRequest) {
  }

  public get policyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicy',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.GetLifecyclePolicy.Policy.PolicyId'),
        outputPath: 'Policy.PolicyId',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicy.Policy.PolicyId', props);
    return resource.getResponseField('Policy.PolicyId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicy',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.GetLifecyclePolicy.Policy.Description'),
        outputPath: 'Policy.Description',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicy.Policy.Description', props);
    return resource.getResponseField('Policy.Description') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicy',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.GetLifecyclePolicy.Policy.State'),
        outputPath: 'Policy.State',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicy.Policy.State', props);
    return resource.getResponseField('Policy.State') as unknown as string;
  }

  public get statusMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicy',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.GetLifecyclePolicy.Policy.StatusMessage'),
        outputPath: 'Policy.StatusMessage',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicy.Policy.StatusMessage', props);
    return resource.getResponseField('Policy.StatusMessage') as unknown as string;
  }

  public get executionRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicy',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.GetLifecyclePolicy.Policy.ExecutionRoleArn'),
        outputPath: 'Policy.ExecutionRoleArn',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicy.Policy.ExecutionRoleArn', props);
    return resource.getResponseField('Policy.ExecutionRoleArn') as unknown as string;
  }

  public get dateCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicy',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.GetLifecyclePolicy.Policy.DateCreated'),
        outputPath: 'Policy.DateCreated',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicy.Policy.DateCreated', props);
    return resource.getResponseField('Policy.DateCreated') as unknown as string;
  }

  public get dateModified(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicy',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.GetLifecyclePolicy.Policy.DateModified'),
        outputPath: 'Policy.DateModified',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicy.Policy.DateModified', props);
    return resource.getResponseField('Policy.DateModified') as unknown as string;
  }

  public get policyDetails(): DLMResponsesFetchLifecyclePolicyPolicyPolicyDetails {
    return new DLMResponsesFetchLifecyclePolicyPolicyPolicyDetails(this.__scope, this.__resources, this.__input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicy',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.GetLifecyclePolicy.Policy.Tags'),
        outputPath: 'Policy.Tags',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicy.Policy.Tags', props);
    return resource.getResponseField('Policy.Tags') as unknown as Record<string, string>;
  }

  public get policyArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicy',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.GetLifecyclePolicy.Policy.PolicyArn'),
        outputPath: 'Policy.PolicyArn',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicy.Policy.PolicyArn', props);
    return resource.getResponseField('Policy.PolicyArn') as unknown as string;
  }

}

export class DLMResponsesFetchLifecyclePolicyPolicyPolicyDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DlmGetLifecyclePolicyRequest) {
  }

  public get policyType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicy',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.GetLifecyclePolicy.Policy.PolicyDetails.PolicyType'),
        outputPath: 'Policy.PolicyDetails.PolicyType',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicy.Policy.PolicyDetails.PolicyType', props);
    return resource.getResponseField('Policy.PolicyDetails.PolicyType') as unknown as string;
  }

  public get resourceTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicy',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.GetLifecyclePolicy.Policy.PolicyDetails.ResourceTypes'),
        outputPath: 'Policy.PolicyDetails.ResourceTypes',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicy.Policy.PolicyDetails.ResourceTypes', props);
    return resource.getResponseField('Policy.PolicyDetails.ResourceTypes') as unknown as string[];
  }

  public get targetTags(): shapes.DlmTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicy',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.GetLifecyclePolicy.Policy.PolicyDetails.TargetTags'),
        outputPath: 'Policy.PolicyDetails.TargetTags',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicy.Policy.PolicyDetails.TargetTags', props);
    return resource.getResponseField('Policy.PolicyDetails.TargetTags') as unknown as shapes.DlmTag[];
  }

  public get schedules(): shapes.DlmSchedule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicy',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.GetLifecyclePolicy.Policy.PolicyDetails.Schedules'),
        outputPath: 'Policy.PolicyDetails.Schedules',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicy.Policy.PolicyDetails.Schedules', props);
    return resource.getResponseField('Policy.PolicyDetails.Schedules') as unknown as shapes.DlmSchedule[];
  }

  public get parameters(): DLMResponsesFetchLifecyclePolicyPolicyPolicyDetailsParameters {
    return new DLMResponsesFetchLifecyclePolicyPolicyPolicyDetailsParameters(this.__scope, this.__resources, this.__input);
  }

}

export class DLMResponsesFetchLifecyclePolicyPolicyPolicyDetailsParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DlmGetLifecyclePolicyRequest) {
  }

  public get excludeBootVolume(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicy',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.GetLifecyclePolicy.Policy.PolicyDetails.Parameters.ExcludeBootVolume'),
        outputPath: 'Policy.PolicyDetails.Parameters.ExcludeBootVolume',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicy.Policy.PolicyDetails.Parameters.ExcludeBootVolume', props);
    return resource.getResponseField('Policy.PolicyDetails.Parameters.ExcludeBootVolume') as unknown as boolean;
  }

  public get noReboot(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getLifecyclePolicy',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.GetLifecyclePolicy.Policy.PolicyDetails.Parameters.NoReboot'),
        outputPath: 'Policy.PolicyDetails.Parameters.NoReboot',
        parameters: {
          PolicyId: this.__input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetLifecyclePolicy.Policy.PolicyDetails.Parameters.NoReboot', props);
    return resource.getResponseField('Policy.PolicyDetails.Parameters.NoReboot') as unknown as boolean;
  }

}

export class DLMResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DlmListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'DLM',
        physicalResourceId: cr.PhysicalResourceId.of('DLM.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

