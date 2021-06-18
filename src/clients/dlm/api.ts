import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class DlmClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createLifecyclePolicy(input: shapes.DlmCreateLifecyclePolicyRequest): DLMCreateLifecyclePolicy {
    return new DLMCreateLifecyclePolicy(this, 'CreateLifecyclePolicy', this.__resources, input);
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

  public fetchLifecyclePolicies(input: shapes.DlmGetLifecyclePoliciesRequest): DLMFetchLifecyclePolicies {
    return new DLMFetchLifecyclePolicies(this, 'FetchLifecyclePolicies', this.__resources, input);
  }

  public fetchLifecyclePolicy(input: shapes.DlmGetLifecyclePolicyRequest): DLMFetchLifecyclePolicy {
    return new DLMFetchLifecyclePolicy(this, 'FetchLifecyclePolicy', this.__resources, input);
  }

  public listTagsForResource(input: shapes.DlmListTagsForResourceRequest): DLMListTagsForResource {
    return new DLMListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
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

export class DLMCreateLifecyclePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DlmCreateLifecyclePolicyRequest) {
    super(scope, id);
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
          ExecutionRoleArn: this.input.executionRoleArn,
          Description: this.input.description,
          State: this.input.state,
          PolicyDetails: {
            PolicyType: this.input.policyDetails.policyType,
            ResourceTypes: this.input.policyDetails.resourceTypes,
            TargetTags: this.input.policyDetails.targetTags,
            Schedules: this.input.policyDetails.schedules,
            Parameters: {
              ExcludeBootVolume: this.input.policyDetails.parameters?.excludeBootVolume,
              NoReboot: this.input.policyDetails.parameters?.noReboot,
            },
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLifecyclePolicy.PolicyId', props);
    return resource.getResponseField('PolicyId') as unknown as string;
  }

}

export class DLMFetchLifecyclePolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DlmGetLifecyclePoliciesRequest) {
    super(scope, id);
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
          PolicyIds: this.input.policyIds,
          State: this.input.state,
          ResourceTypes: this.input.resourceTypes,
          TargetTags: this.input.targetTags,
          TagsToAdd: this.input.tagsToAdd,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicies.Policies', props);
    return resource.getResponseField('Policies') as unknown as shapes.DlmLifecyclePolicySummary[];
  }

}

export class DLMFetchLifecyclePolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DlmGetLifecyclePolicyRequest) {
    super(scope, id);
  }

  public get policy(): DLMFetchLifecyclePolicyPolicy {
    return new DLMFetchLifecyclePolicyPolicy(this, 'Policy', this.__resources, this.input);
  }

}

export class DLMFetchLifecyclePolicyPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DlmGetLifecyclePolicyRequest) {
    super(scope, id);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicy.Policy.PolicyId', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicy.Policy.Description', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicy.Policy.State', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicy.Policy.StatusMessage', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicy.Policy.ExecutionRoleArn', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicy.Policy.DateCreated', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicy.Policy.DateModified', props);
    return resource.getResponseField('Policy.DateModified') as unknown as string;
  }

  public get policyDetails(): DLMFetchLifecyclePolicyPolicyPolicyDetails {
    return new DLMFetchLifecyclePolicyPolicyPolicyDetails(this, 'PolicyDetails', this.__resources, this.input);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicy.Policy.Tags', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicy.Policy.PolicyArn', props);
    return resource.getResponseField('Policy.PolicyArn') as unknown as string;
  }

}

export class DLMFetchLifecyclePolicyPolicyPolicyDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DlmGetLifecyclePolicyRequest) {
    super(scope, id);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicy.Policy.PolicyDetails.PolicyType', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicy.Policy.PolicyDetails.ResourceTypes', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicy.Policy.PolicyDetails.TargetTags', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicy.Policy.PolicyDetails.Schedules', props);
    return resource.getResponseField('Policy.PolicyDetails.Schedules') as unknown as shapes.DlmSchedule[];
  }

  public get parameters(): DLMFetchLifecyclePolicyPolicyPolicyDetailsParameters {
    return new DLMFetchLifecyclePolicyPolicyPolicyDetailsParameters(this, 'Parameters', this.__resources, this.input);
  }

}

export class DLMFetchLifecyclePolicyPolicyPolicyDetailsParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DlmGetLifecyclePolicyRequest) {
    super(scope, id);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicy.Policy.PolicyDetails.Parameters.ExcludeBootVolume', props);
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
          PolicyId: this.input.policyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetLifecyclePolicy.Policy.PolicyDetails.Parameters.NoReboot', props);
    return resource.getResponseField('Policy.PolicyDetails.Parameters.NoReboot') as unknown as boolean;
  }

}

export class DLMListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DlmListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

