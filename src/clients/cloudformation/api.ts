import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CloudFormationClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelUpdateStack(input: shapes.CloudFormationCancelUpdateStackInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelUpdateStack',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.CancelUpdateStack'),
        parameters: {
          StackName: input.stackName,
          ClientRequestToken: input.clientRequestToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CancelUpdateStack', props);
  }

  public continueUpdateRollback(input: shapes.CloudFormationContinueUpdateRollbackInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'continueUpdateRollback',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ContinueUpdateRollback'),
        parameters: {
          StackName: input.stackName,
          RoleARN: input.roleArn,
          ResourcesToSkip: input.resourcesToSkip,
          ClientRequestToken: input.clientRequestToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ContinueUpdateRollback', props);
  }

  public createChangeSet(input: shapes.CloudFormationCreateChangeSetInput): CloudFormationCreateChangeSet {
    return new CloudFormationCreateChangeSet(this, 'CreateChangeSet', this.__resources, input);
  }

  public createStack(input: shapes.CloudFormationCreateStackInput): CloudFormationCreateStack {
    return new CloudFormationCreateStack(this, 'CreateStack', this.__resources, input);
  }

  public createStackInstances(input: shapes.CloudFormationCreateStackInstancesInput): CloudFormationCreateStackInstances {
    return new CloudFormationCreateStackInstances(this, 'CreateStackInstances', this.__resources, input);
  }

  public createStackSet(input: shapes.CloudFormationCreateStackSetInput): CloudFormationCreateStackSet {
    return new CloudFormationCreateStackSet(this, 'CreateStackSet', this.__resources, input);
  }

  public deleteChangeSet(input: shapes.CloudFormationDeleteChangeSetInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DeleteChangeSet'),
        parameters: {
          ChangeSetName: input.changeSetName,
          StackName: input.stackName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteChangeSet', props);
  }

  public deleteStack(input: shapes.CloudFormationDeleteStackInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStack',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DeleteStack'),
        parameters: {
          StackName: input.stackName,
          RetainResources: input.retainResources,
          RoleARN: input.roleArn,
          ClientRequestToken: input.clientRequestToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteStack', props);
  }

  public deleteStackInstances(input: shapes.CloudFormationDeleteStackInstancesInput): CloudFormationDeleteStackInstances {
    return new CloudFormationDeleteStackInstances(this, 'DeleteStackInstances', this.__resources, input);
  }

  public deleteStackSet(input: shapes.CloudFormationDeleteStackSetInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DeleteStackSet'),
        parameters: {
          StackSetName: input.stackSetName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteStackSet', props);
  }

  public deregisterType(input: shapes.CloudFormationDeregisterTypeInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterType',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DeregisterType'),
        parameters: {
          Arn: input.arn,
          Type: input.type,
          TypeName: input.typeName,
          VersionId: input.versionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeregisterType', props);
  }

  public describeAccountLimits(input: shapes.CloudFormationDescribeAccountLimitsInput): CloudFormationDescribeAccountLimits {
    return new CloudFormationDescribeAccountLimits(this, 'DescribeAccountLimits', this.__resources, input);
  }

  public describeChangeSet(input: shapes.CloudFormationDescribeChangeSetInput): CloudFormationDescribeChangeSet {
    return new CloudFormationDescribeChangeSet(this, 'DescribeChangeSet', this.__resources, input);
  }

  public describeStackDriftDetectionStatus(input: shapes.CloudFormationDescribeStackDriftDetectionStatusInput): CloudFormationDescribeStackDriftDetectionStatus {
    return new CloudFormationDescribeStackDriftDetectionStatus(this, 'DescribeStackDriftDetectionStatus', this.__resources, input);
  }

  public describeStackEvents(input: shapes.CloudFormationDescribeStackEventsInput): CloudFormationDescribeStackEvents {
    return new CloudFormationDescribeStackEvents(this, 'DescribeStackEvents', this.__resources, input);
  }

  public describeStackInstance(input: shapes.CloudFormationDescribeStackInstanceInput): CloudFormationDescribeStackInstance {
    return new CloudFormationDescribeStackInstance(this, 'DescribeStackInstance', this.__resources, input);
  }

  public describeStackResource(input: shapes.CloudFormationDescribeStackResourceInput): CloudFormationDescribeStackResource {
    return new CloudFormationDescribeStackResource(this, 'DescribeStackResource', this.__resources, input);
  }

  public describeStackResourceDrifts(input: shapes.CloudFormationDescribeStackResourceDriftsInput): CloudFormationDescribeStackResourceDrifts {
    return new CloudFormationDescribeStackResourceDrifts(this, 'DescribeStackResourceDrifts', this.__resources, input);
  }

  public describeStackResources(input: shapes.CloudFormationDescribeStackResourcesInput): CloudFormationDescribeStackResources {
    return new CloudFormationDescribeStackResources(this, 'DescribeStackResources', this.__resources, input);
  }

  public describeStackSet(input: shapes.CloudFormationDescribeStackSetInput): CloudFormationDescribeStackSet {
    return new CloudFormationDescribeStackSet(this, 'DescribeStackSet', this.__resources, input);
  }

  public describeStackSetOperation(input: shapes.CloudFormationDescribeStackSetOperationInput): CloudFormationDescribeStackSetOperation {
    return new CloudFormationDescribeStackSetOperation(this, 'DescribeStackSetOperation', this.__resources, input);
  }

  public describeStacks(input: shapes.CloudFormationDescribeStacksInput): CloudFormationDescribeStacks {
    return new CloudFormationDescribeStacks(this, 'DescribeStacks', this.__resources, input);
  }

  public describeType(input: shapes.CloudFormationDescribeTypeInput): CloudFormationDescribeType {
    return new CloudFormationDescribeType(this, 'DescribeType', this.__resources, input);
  }

  public describeTypeRegistration(input: shapes.CloudFormationDescribeTypeRegistrationInput): CloudFormationDescribeTypeRegistration {
    return new CloudFormationDescribeTypeRegistration(this, 'DescribeTypeRegistration', this.__resources, input);
  }

  public detectStackDrift(input: shapes.CloudFormationDetectStackDriftInput): CloudFormationDetectStackDrift {
    return new CloudFormationDetectStackDrift(this, 'DetectStackDrift', this.__resources, input);
  }

  public detectStackResourceDrift(input: shapes.CloudFormationDetectStackResourceDriftInput): CloudFormationDetectStackResourceDrift {
    return new CloudFormationDetectStackResourceDrift(this, 'DetectStackResourceDrift', this.__resources, input);
  }

  public detectStackSetDrift(input: shapes.CloudFormationDetectStackSetDriftInput): CloudFormationDetectStackSetDrift {
    return new CloudFormationDetectStackSetDrift(this, 'DetectStackSetDrift', this.__resources, input);
  }

  public estimateTemplateCost(input: shapes.CloudFormationEstimateTemplateCostInput): CloudFormationEstimateTemplateCost {
    return new CloudFormationEstimateTemplateCost(this, 'EstimateTemplateCost', this.__resources, input);
  }

  public executeChangeSet(input: shapes.CloudFormationExecuteChangeSetInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'executeChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ExecuteChangeSet'),
        parameters: {
          ChangeSetName: input.changeSetName,
          StackName: input.stackName,
          ClientRequestToken: input.clientRequestToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ExecuteChangeSet', props);
  }

  public fetchStackPolicy(input: shapes.CloudFormationGetStackPolicyInput): CloudFormationFetchStackPolicy {
    return new CloudFormationFetchStackPolicy(this, 'FetchStackPolicy', this.__resources, input);
  }

  public fetchTemplate(input: shapes.CloudFormationGetTemplateInput): CloudFormationFetchTemplate {
    return new CloudFormationFetchTemplate(this, 'FetchTemplate', this.__resources, input);
  }

  public fetchTemplateSummary(input: shapes.CloudFormationGetTemplateSummaryInput): CloudFormationFetchTemplateSummary {
    return new CloudFormationFetchTemplateSummary(this, 'FetchTemplateSummary', this.__resources, input);
  }

  public listChangeSets(input: shapes.CloudFormationListChangeSetsInput): CloudFormationListChangeSets {
    return new CloudFormationListChangeSets(this, 'ListChangeSets', this.__resources, input);
  }

  public listExports(input: shapes.CloudFormationListExportsInput): CloudFormationListExports {
    return new CloudFormationListExports(this, 'ListExports', this.__resources, input);
  }

  public listImports(input: shapes.CloudFormationListImportsInput): CloudFormationListImports {
    return new CloudFormationListImports(this, 'ListImports', this.__resources, input);
  }

  public listStackInstances(input: shapes.CloudFormationListStackInstancesInput): CloudFormationListStackInstances {
    return new CloudFormationListStackInstances(this, 'ListStackInstances', this.__resources, input);
  }

  public listStackResources(input: shapes.CloudFormationListStackResourcesInput): CloudFormationListStackResources {
    return new CloudFormationListStackResources(this, 'ListStackResources', this.__resources, input);
  }

  public listStackSetOperationResults(input: shapes.CloudFormationListStackSetOperationResultsInput): CloudFormationListStackSetOperationResults {
    return new CloudFormationListStackSetOperationResults(this, 'ListStackSetOperationResults', this.__resources, input);
  }

  public listStackSetOperations(input: shapes.CloudFormationListStackSetOperationsInput): CloudFormationListStackSetOperations {
    return new CloudFormationListStackSetOperations(this, 'ListStackSetOperations', this.__resources, input);
  }

  public listStackSets(input: shapes.CloudFormationListStackSetsInput): CloudFormationListStackSets {
    return new CloudFormationListStackSets(this, 'ListStackSets', this.__resources, input);
  }

  public listStacks(input: shapes.CloudFormationListStacksInput): CloudFormationListStacks {
    return new CloudFormationListStacks(this, 'ListStacks', this.__resources, input);
  }

  public listTypeRegistrations(input: shapes.CloudFormationListTypeRegistrationsInput): CloudFormationListTypeRegistrations {
    return new CloudFormationListTypeRegistrations(this, 'ListTypeRegistrations', this.__resources, input);
  }

  public listTypeVersions(input: shapes.CloudFormationListTypeVersionsInput): CloudFormationListTypeVersions {
    return new CloudFormationListTypeVersions(this, 'ListTypeVersions', this.__resources, input);
  }

  public listTypes(input: shapes.CloudFormationListTypesInput): CloudFormationListTypes {
    return new CloudFormationListTypes(this, 'ListTypes', this.__resources, input);
  }

  public recordHandlerProgress(input: shapes.CloudFormationRecordHandlerProgressInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'recordHandlerProgress',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.RecordHandlerProgress'),
        parameters: {
          BearerToken: input.bearerToken,
          OperationStatus: input.operationStatus,
          CurrentOperationStatus: input.currentOperationStatus,
          StatusMessage: input.statusMessage,
          ErrorCode: input.errorCode,
          ResourceModel: input.resourceModel,
          ClientRequestToken: input.clientRequestToken,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RecordHandlerProgress', props);
  }

  public registerType(input: shapes.CloudFormationRegisterTypeInput): CloudFormationRegisterType {
    return new CloudFormationRegisterType(this, 'RegisterType', this.__resources, input);
  }

  public setStackPolicy(input: shapes.CloudFormationSetStackPolicyInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setStackPolicy',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.SetStackPolicy'),
        parameters: {
          StackName: input.stackName,
          StackPolicyBody: input.stackPolicyBody,
          StackPolicyURL: input.stackPolicyUrl,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetStackPolicy', props);
  }

  public setTypeDefaultVersion(input: shapes.CloudFormationSetTypeDefaultVersionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setTypeDefaultVersion',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.SetTypeDefaultVersion'),
        parameters: {
          Arn: input.arn,
          Type: input.type,
          TypeName: input.typeName,
          VersionId: input.versionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetTypeDefaultVersion', props);
  }

  public signalResource(input: shapes.CloudFormationSignalResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'signalResource',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.SignalResource'),
        parameters: {
          StackName: input.stackName,
          LogicalResourceId: input.logicalResourceId,
          UniqueId: input.uniqueId,
          Status: input.status,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SignalResource', props);
  }

  public stopStackSetOperation(input: shapes.CloudFormationStopStackSetOperationInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.StopStackSetOperation'),
        parameters: {
          StackSetName: input.stackSetName,
          OperationId: input.operationId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopStackSetOperation', props);
  }

  public updateStack(input: shapes.CloudFormationUpdateStackInput): CloudFormationUpdateStack {
    return new CloudFormationUpdateStack(this, 'UpdateStack', this.__resources, input);
  }

  public updateStackInstances(input: shapes.CloudFormationUpdateStackInstancesInput): CloudFormationUpdateStackInstances {
    return new CloudFormationUpdateStackInstances(this, 'UpdateStackInstances', this.__resources, input);
  }

  public updateStackSet(input: shapes.CloudFormationUpdateStackSetInput): CloudFormationUpdateStackSet {
    return new CloudFormationUpdateStackSet(this, 'UpdateStackSet', this.__resources, input);
  }

  public updateTerminationProtection(input: shapes.CloudFormationUpdateTerminationProtectionInput): CloudFormationUpdateTerminationProtection {
    return new CloudFormationUpdateTerminationProtection(this, 'UpdateTerminationProtection', this.__resources, input);
  }

  public validateTemplate(input: shapes.CloudFormationValidateTemplateInput): CloudFormationValidateTemplate {
    return new CloudFormationValidateTemplate(this, 'ValidateTemplate', this.__resources, input);
  }

}

export class CloudFormationCreateChangeSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationCreateChangeSetInput) {
    super(scope, id);
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.CreateChangeSet.Id'),
        outputPath: 'Id',
        parameters: {
          StackName: this.input.stackName,
          TemplateBody: this.input.templateBody,
          TemplateURL: this.input.templateUrl,
          UsePreviousTemplate: this.input.usePreviousTemplate,
          Parameters: this.input.parameters,
          Capabilities: this.input.capabilities,
          ResourceTypes: this.input.resourceTypes,
          RoleARN: this.input.roleArn,
          RollbackConfiguration: {
            RollbackTriggers: this.input.rollbackConfiguration?.rollbackTriggers,
            MonitoringTimeInMinutes: this.input.rollbackConfiguration?.monitoringTimeInMinutes,
          },
          NotificationARNs: this.input.notificationArNs,
          Tags: this.input.tags,
          ChangeSetName: this.input.changeSetName,
          ClientToken: this.input.clientToken,
          Description: this.input.description,
          ChangeSetType: this.input.changeSetType,
          ResourcesToImport: this.input.resourcesToImport,
          IncludeNestedStacks: this.input.includeNestedStacks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChangeSet.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get stackId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.CreateChangeSet.StackId'),
        outputPath: 'StackId',
        parameters: {
          StackName: this.input.stackName,
          TemplateBody: this.input.templateBody,
          TemplateURL: this.input.templateUrl,
          UsePreviousTemplate: this.input.usePreviousTemplate,
          Parameters: this.input.parameters,
          Capabilities: this.input.capabilities,
          ResourceTypes: this.input.resourceTypes,
          RoleARN: this.input.roleArn,
          RollbackConfiguration: {
            RollbackTriggers: this.input.rollbackConfiguration?.rollbackTriggers,
            MonitoringTimeInMinutes: this.input.rollbackConfiguration?.monitoringTimeInMinutes,
          },
          NotificationARNs: this.input.notificationArNs,
          Tags: this.input.tags,
          ChangeSetName: this.input.changeSetName,
          ClientToken: this.input.clientToken,
          Description: this.input.description,
          ChangeSetType: this.input.changeSetType,
          ResourcesToImport: this.input.resourcesToImport,
          IncludeNestedStacks: this.input.includeNestedStacks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChangeSet.StackId', props);
    return resource.getResponseField('StackId') as unknown as string;
  }

}

export class CloudFormationCreateStack extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationCreateStackInput) {
    super(scope, id);
  }

  public get stackId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStack',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.CreateStack.StackId'),
        outputPath: 'StackId',
        parameters: {
          StackName: this.input.stackName,
          TemplateBody: this.input.templateBody,
          TemplateURL: this.input.templateUrl,
          Parameters: this.input.parameters,
          DisableRollback: this.input.disableRollback,
          RollbackConfiguration: {
            RollbackTriggers: this.input.rollbackConfiguration?.rollbackTriggers,
            MonitoringTimeInMinutes: this.input.rollbackConfiguration?.monitoringTimeInMinutes,
          },
          TimeoutInMinutes: this.input.timeoutInMinutes,
          NotificationARNs: this.input.notificationArNs,
          Capabilities: this.input.capabilities,
          ResourceTypes: this.input.resourceTypes,
          RoleARN: this.input.roleArn,
          OnFailure: this.input.onFailure,
          StackPolicyBody: this.input.stackPolicyBody,
          StackPolicyURL: this.input.stackPolicyUrl,
          Tags: this.input.tags,
          ClientRequestToken: this.input.clientRequestToken,
          EnableTerminationProtection: this.input.enableTerminationProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStack.StackId', props);
    return resource.getResponseField('StackId') as unknown as string;
  }

}

export class CloudFormationCreateStackInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationCreateStackInstancesInput) {
    super(scope, id);
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStackInstances',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.CreateStackInstances.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          StackSetName: this.input.stackSetName,
          Accounts: this.input.accounts,
          DeploymentTargets: {
            Accounts: this.input.deploymentTargets?.accounts,
            OrganizationalUnitIds: this.input.deploymentTargets?.organizationalUnitIds,
          },
          Regions: this.input.regions,
          ParameterOverrides: this.input.parameterOverrides,
          OperationPreferences: {
            RegionOrder: this.input.operationPreferences?.regionOrder,
            FailureToleranceCount: this.input.operationPreferences?.failureToleranceCount,
            FailureTolerancePercentage: this.input.operationPreferences?.failureTolerancePercentage,
            MaxConcurrentCount: this.input.operationPreferences?.maxConcurrentCount,
            MaxConcurrentPercentage: this.input.operationPreferences?.maxConcurrentPercentage,
          },
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStackInstances.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class CloudFormationCreateStackSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationCreateStackSetInput) {
    super(scope, id);
  }

  public get stackSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.CreateStackSet.StackSetId'),
        outputPath: 'StackSetId',
        parameters: {
          StackSetName: this.input.stackSetName,
          Description: this.input.description,
          TemplateBody: this.input.templateBody,
          TemplateURL: this.input.templateUrl,
          Parameters: this.input.parameters,
          Capabilities: this.input.capabilities,
          Tags: this.input.tags,
          AdministrationRoleARN: this.input.administrationRoleArn,
          ExecutionRoleName: this.input.executionRoleName,
          PermissionModel: this.input.permissionModel,
          AutoDeployment: {
            Enabled: this.input.autoDeployment?.enabled,
            RetainStacksOnAccountRemoval: this.input.autoDeployment?.retainStacksOnAccountRemoval,
          },
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStackSet.StackSetId', props);
    return resource.getResponseField('StackSetId') as unknown as string;
  }

}

export class CloudFormationDeleteStackInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDeleteStackInstancesInput) {
    super(scope, id);
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStackInstances',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DeleteStackInstances.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          StackSetName: this.input.stackSetName,
          Accounts: this.input.accounts,
          DeploymentTargets: {
            Accounts: this.input.deploymentTargets?.accounts,
            OrganizationalUnitIds: this.input.deploymentTargets?.organizationalUnitIds,
          },
          Regions: this.input.regions,
          OperationPreferences: {
            RegionOrder: this.input.operationPreferences?.regionOrder,
            FailureToleranceCount: this.input.operationPreferences?.failureToleranceCount,
            FailureTolerancePercentage: this.input.operationPreferences?.failureTolerancePercentage,
            MaxConcurrentCount: this.input.operationPreferences?.maxConcurrentCount,
            MaxConcurrentPercentage: this.input.operationPreferences?.maxConcurrentPercentage,
          },
          RetainStacks: this.input.retainStacks,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteStackInstances.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class CloudFormationDescribeAccountLimits extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeAccountLimitsInput) {
    super(scope, id);
  }

  public get accountLimits(): shapes.CloudFormationAccountLimit[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountLimits',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeAccountLimits.AccountLimits'),
        outputPath: 'AccountLimits',
        parameters: {
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountLimits.AccountLimits', props);
    return resource.getResponseField('AccountLimits') as unknown as shapes.CloudFormationAccountLimit[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountLimits',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeAccountLimits.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountLimits.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationDescribeChangeSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeChangeSetInput) {
    super(scope, id);
  }

  public get changeSetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeChangeSet.ChangeSetName'),
        outputPath: 'ChangeSetName',
        parameters: {
          ChangeSetName: this.input.changeSetName,
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.ChangeSetName', props);
    return resource.getResponseField('ChangeSetName') as unknown as string;
  }

  public get changeSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeChangeSet.ChangeSetId'),
        outputPath: 'ChangeSetId',
        parameters: {
          ChangeSetName: this.input.changeSetName,
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.ChangeSetId', props);
    return resource.getResponseField('ChangeSetId') as unknown as string;
  }

  public get stackId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeChangeSet.StackId'),
        outputPath: 'StackId',
        parameters: {
          ChangeSetName: this.input.changeSetName,
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.StackId', props);
    return resource.getResponseField('StackId') as unknown as string;
  }

  public get stackName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeChangeSet.StackName'),
        outputPath: 'StackName',
        parameters: {
          ChangeSetName: this.input.changeSetName,
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.StackName', props);
    return resource.getResponseField('StackName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeChangeSet.Description'),
        outputPath: 'Description',
        parameters: {
          ChangeSetName: this.input.changeSetName,
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get parameters(): shapes.CloudFormationParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeChangeSet.Parameters'),
        outputPath: 'Parameters',
        parameters: {
          ChangeSetName: this.input.changeSetName,
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.Parameters', props);
    return resource.getResponseField('Parameters') as unknown as shapes.CloudFormationParameter[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeChangeSet.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          ChangeSetName: this.input.changeSetName,
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get executionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeChangeSet.ExecutionStatus'),
        outputPath: 'ExecutionStatus',
        parameters: {
          ChangeSetName: this.input.changeSetName,
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.ExecutionStatus', props);
    return resource.getResponseField('ExecutionStatus') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeChangeSet.Status'),
        outputPath: 'Status',
        parameters: {
          ChangeSetName: this.input.changeSetName,
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeChangeSet.StatusReason'),
        outputPath: 'StatusReason',
        parameters: {
          ChangeSetName: this.input.changeSetName,
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.StatusReason', props);
    return resource.getResponseField('StatusReason') as unknown as string;
  }

  public get notificationArNs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeChangeSet.NotificationARNs'),
        outputPath: 'NotificationARNs',
        parameters: {
          ChangeSetName: this.input.changeSetName,
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.NotificationARNs', props);
    return resource.getResponseField('NotificationARNs') as unknown as string[];
  }

  public get rollbackConfiguration(): CloudFormationDescribeChangeSetRollbackConfiguration {
    return new CloudFormationDescribeChangeSetRollbackConfiguration(this, 'RollbackConfiguration', this.__resources, this.input);
  }

  public get capabilities(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeChangeSet.Capabilities'),
        outputPath: 'Capabilities',
        parameters: {
          ChangeSetName: this.input.changeSetName,
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.Capabilities', props);
    return resource.getResponseField('Capabilities') as unknown as string[];
  }

  public get tags(): shapes.CloudFormationTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeChangeSet.Tags'),
        outputPath: 'Tags',
        parameters: {
          ChangeSetName: this.input.changeSetName,
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.CloudFormationTag[];
  }

  public get changes(): shapes.CloudFormationChange[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeChangeSet.Changes'),
        outputPath: 'Changes',
        parameters: {
          ChangeSetName: this.input.changeSetName,
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.Changes', props);
    return resource.getResponseField('Changes') as unknown as shapes.CloudFormationChange[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeChangeSet.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ChangeSetName: this.input.changeSetName,
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get includeNestedStacks(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeChangeSet.IncludeNestedStacks'),
        outputPath: 'IncludeNestedStacks',
        parameters: {
          ChangeSetName: this.input.changeSetName,
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.IncludeNestedStacks', props);
    return resource.getResponseField('IncludeNestedStacks') as unknown as boolean;
  }

  public get parentChangeSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeChangeSet.ParentChangeSetId'),
        outputPath: 'ParentChangeSetId',
        parameters: {
          ChangeSetName: this.input.changeSetName,
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.ParentChangeSetId', props);
    return resource.getResponseField('ParentChangeSetId') as unknown as string;
  }

  public get rootChangeSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeChangeSet.RootChangeSetId'),
        outputPath: 'RootChangeSetId',
        parameters: {
          ChangeSetName: this.input.changeSetName,
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.RootChangeSetId', props);
    return resource.getResponseField('RootChangeSetId') as unknown as string;
  }

}

export class CloudFormationDescribeChangeSetRollbackConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeChangeSetInput) {
    super(scope, id);
  }

  public get rollbackTriggers(): shapes.CloudFormationRollbackTrigger[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeChangeSet.RollbackConfiguration.RollbackTriggers'),
        outputPath: 'RollbackConfiguration.RollbackTriggers',
        parameters: {
          ChangeSetName: this.input.changeSetName,
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.RollbackConfiguration.RollbackTriggers', props);
    return resource.getResponseField('RollbackConfiguration.RollbackTriggers') as unknown as shapes.CloudFormationRollbackTrigger[];
  }

  public get monitoringTimeInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChangeSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeChangeSet.RollbackConfiguration.MonitoringTimeInMinutes'),
        outputPath: 'RollbackConfiguration.MonitoringTimeInMinutes',
        parameters: {
          ChangeSetName: this.input.changeSetName,
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChangeSet.RollbackConfiguration.MonitoringTimeInMinutes', props);
    return resource.getResponseField('RollbackConfiguration.MonitoringTimeInMinutes') as unknown as number;
  }

}

export class CloudFormationDescribeStackDriftDetectionStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeStackDriftDetectionStatusInput) {
    super(scope, id);
  }

  public get stackId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackDriftDetectionStatus',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackDriftDetectionStatus.StackId'),
        outputPath: 'StackId',
        parameters: {
          StackDriftDetectionId: this.input.stackDriftDetectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackDriftDetectionStatus.StackId', props);
    return resource.getResponseField('StackId') as unknown as string;
  }

  public get stackDriftDetectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackDriftDetectionStatus',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackDriftDetectionStatus.StackDriftDetectionId'),
        outputPath: 'StackDriftDetectionId',
        parameters: {
          StackDriftDetectionId: this.input.stackDriftDetectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackDriftDetectionStatus.StackDriftDetectionId', props);
    return resource.getResponseField('StackDriftDetectionId') as unknown as string;
  }

  public get stackDriftStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackDriftDetectionStatus',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackDriftDetectionStatus.StackDriftStatus'),
        outputPath: 'StackDriftStatus',
        parameters: {
          StackDriftDetectionId: this.input.stackDriftDetectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackDriftDetectionStatus.StackDriftStatus', props);
    return resource.getResponseField('StackDriftStatus') as unknown as string;
  }

  public get detectionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackDriftDetectionStatus',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackDriftDetectionStatus.DetectionStatus'),
        outputPath: 'DetectionStatus',
        parameters: {
          StackDriftDetectionId: this.input.stackDriftDetectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackDriftDetectionStatus.DetectionStatus', props);
    return resource.getResponseField('DetectionStatus') as unknown as string;
  }

  public get detectionStatusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackDriftDetectionStatus',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackDriftDetectionStatus.DetectionStatusReason'),
        outputPath: 'DetectionStatusReason',
        parameters: {
          StackDriftDetectionId: this.input.stackDriftDetectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackDriftDetectionStatus.DetectionStatusReason', props);
    return resource.getResponseField('DetectionStatusReason') as unknown as string;
  }

  public get driftedStackResourceCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackDriftDetectionStatus',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackDriftDetectionStatus.DriftedStackResourceCount'),
        outputPath: 'DriftedStackResourceCount',
        parameters: {
          StackDriftDetectionId: this.input.stackDriftDetectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackDriftDetectionStatus.DriftedStackResourceCount', props);
    return resource.getResponseField('DriftedStackResourceCount') as unknown as number;
  }

  public get timestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackDriftDetectionStatus',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackDriftDetectionStatus.Timestamp'),
        outputPath: 'Timestamp',
        parameters: {
          StackDriftDetectionId: this.input.stackDriftDetectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackDriftDetectionStatus.Timestamp', props);
    return resource.getResponseField('Timestamp') as unknown as string;
  }

}

export class CloudFormationDescribeStackEvents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeStackEventsInput) {
    super(scope, id);
  }

  public get stackEvents(): shapes.CloudFormationStackEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackEvents',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackEvents.StackEvents'),
        outputPath: 'StackEvents',
        parameters: {
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackEvents.StackEvents', props);
    return resource.getResponseField('StackEvents') as unknown as shapes.CloudFormationStackEvent[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackEvents',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackEvents.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackEvents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationDescribeStackInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeStackInstanceInput) {
    super(scope, id);
  }

  public get stackInstance(): CloudFormationDescribeStackInstanceStackInstance {
    return new CloudFormationDescribeStackInstanceStackInstance(this, 'StackInstance', this.__resources, this.input);
  }

}

export class CloudFormationDescribeStackInstanceStackInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeStackInstanceInput) {
    super(scope, id);
  }

  public get stackSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackInstance',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackInstance.StackInstance.StackSetId'),
        outputPath: 'StackInstance.StackSetId',
        parameters: {
          StackSetName: this.input.stackSetName,
          StackInstanceAccount: this.input.stackInstanceAccount,
          StackInstanceRegion: this.input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackInstance.StackInstance.StackSetId', props);
    return resource.getResponseField('StackInstance.StackSetId') as unknown as string;
  }

  public get region(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackInstance',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackInstance.StackInstance.Region'),
        outputPath: 'StackInstance.Region',
        parameters: {
          StackSetName: this.input.stackSetName,
          StackInstanceAccount: this.input.stackInstanceAccount,
          StackInstanceRegion: this.input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackInstance.StackInstance.Region', props);
    return resource.getResponseField('StackInstance.Region') as unknown as string;
  }

  public get account(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackInstance',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackInstance.StackInstance.Account'),
        outputPath: 'StackInstance.Account',
        parameters: {
          StackSetName: this.input.stackSetName,
          StackInstanceAccount: this.input.stackInstanceAccount,
          StackInstanceRegion: this.input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackInstance.StackInstance.Account', props);
    return resource.getResponseField('StackInstance.Account') as unknown as string;
  }

  public get stackId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackInstance',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackInstance.StackInstance.StackId'),
        outputPath: 'StackInstance.StackId',
        parameters: {
          StackSetName: this.input.stackSetName,
          StackInstanceAccount: this.input.stackInstanceAccount,
          StackInstanceRegion: this.input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackInstance.StackInstance.StackId', props);
    return resource.getResponseField('StackInstance.StackId') as unknown as string;
  }

  public get parameterOverrides(): shapes.CloudFormationParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackInstance',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackInstance.StackInstance.ParameterOverrides'),
        outputPath: 'StackInstance.ParameterOverrides',
        parameters: {
          StackSetName: this.input.stackSetName,
          StackInstanceAccount: this.input.stackInstanceAccount,
          StackInstanceRegion: this.input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackInstance.StackInstance.ParameterOverrides', props);
    return resource.getResponseField('StackInstance.ParameterOverrides') as unknown as shapes.CloudFormationParameter[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackInstance',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackInstance.StackInstance.Status'),
        outputPath: 'StackInstance.Status',
        parameters: {
          StackSetName: this.input.stackSetName,
          StackInstanceAccount: this.input.stackInstanceAccount,
          StackInstanceRegion: this.input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackInstance.StackInstance.Status', props);
    return resource.getResponseField('StackInstance.Status') as unknown as string;
  }

  public get stackInstanceStatus(): CloudFormationDescribeStackInstanceStackInstanceStackInstanceStatus {
    return new CloudFormationDescribeStackInstanceStackInstanceStackInstanceStatus(this, 'StackInstanceStatus', this.__resources, this.input);
  }

  public get statusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackInstance',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackInstance.StackInstance.StatusReason'),
        outputPath: 'StackInstance.StatusReason',
        parameters: {
          StackSetName: this.input.stackSetName,
          StackInstanceAccount: this.input.stackInstanceAccount,
          StackInstanceRegion: this.input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackInstance.StackInstance.StatusReason', props);
    return resource.getResponseField('StackInstance.StatusReason') as unknown as string;
  }

  public get organizationalUnitId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackInstance',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackInstance.StackInstance.OrganizationalUnitId'),
        outputPath: 'StackInstance.OrganizationalUnitId',
        parameters: {
          StackSetName: this.input.stackSetName,
          StackInstanceAccount: this.input.stackInstanceAccount,
          StackInstanceRegion: this.input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackInstance.StackInstance.OrganizationalUnitId', props);
    return resource.getResponseField('StackInstance.OrganizationalUnitId') as unknown as string;
  }

  public get driftStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackInstance',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackInstance.StackInstance.DriftStatus'),
        outputPath: 'StackInstance.DriftStatus',
        parameters: {
          StackSetName: this.input.stackSetName,
          StackInstanceAccount: this.input.stackInstanceAccount,
          StackInstanceRegion: this.input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackInstance.StackInstance.DriftStatus', props);
    return resource.getResponseField('StackInstance.DriftStatus') as unknown as string;
  }

  public get lastDriftCheckTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackInstance',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackInstance.StackInstance.LastDriftCheckTimestamp'),
        outputPath: 'StackInstance.LastDriftCheckTimestamp',
        parameters: {
          StackSetName: this.input.stackSetName,
          StackInstanceAccount: this.input.stackInstanceAccount,
          StackInstanceRegion: this.input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackInstance.StackInstance.LastDriftCheckTimestamp', props);
    return resource.getResponseField('StackInstance.LastDriftCheckTimestamp') as unknown as string;
  }

}

export class CloudFormationDescribeStackInstanceStackInstanceStackInstanceStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeStackInstanceInput) {
    super(scope, id);
  }

  public get detailedStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackInstance',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackInstance.StackInstance.StackInstanceStatus.DetailedStatus'),
        outputPath: 'StackInstance.StackInstanceStatus.DetailedStatus',
        parameters: {
          StackSetName: this.input.stackSetName,
          StackInstanceAccount: this.input.stackInstanceAccount,
          StackInstanceRegion: this.input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackInstance.StackInstance.StackInstanceStatus.DetailedStatus', props);
    return resource.getResponseField('StackInstance.StackInstanceStatus.DetailedStatus') as unknown as string;
  }

}

export class CloudFormationDescribeStackResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeStackResourceInput) {
    super(scope, id);
  }

  public get stackResourceDetail(): CloudFormationDescribeStackResourceStackResourceDetail {
    return new CloudFormationDescribeStackResourceStackResourceDetail(this, 'StackResourceDetail', this.__resources, this.input);
  }

}

export class CloudFormationDescribeStackResourceStackResourceDetail extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeStackResourceInput) {
    super(scope, id);
  }

  public get stackName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackResource',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackResource.StackResourceDetail.StackName'),
        outputPath: 'StackResourceDetail.StackName',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackResource.StackResourceDetail.StackName', props);
    return resource.getResponseField('StackResourceDetail.StackName') as unknown as string;
  }

  public get stackId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackResource',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackResource.StackResourceDetail.StackId'),
        outputPath: 'StackResourceDetail.StackId',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackResource.StackResourceDetail.StackId', props);
    return resource.getResponseField('StackResourceDetail.StackId') as unknown as string;
  }

  public get logicalResourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackResource',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackResource.StackResourceDetail.LogicalResourceId'),
        outputPath: 'StackResourceDetail.LogicalResourceId',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackResource.StackResourceDetail.LogicalResourceId', props);
    return resource.getResponseField('StackResourceDetail.LogicalResourceId') as unknown as string;
  }

  public get physicalResourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackResource',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackResource.StackResourceDetail.PhysicalResourceId'),
        outputPath: 'StackResourceDetail.PhysicalResourceId',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackResource.StackResourceDetail.PhysicalResourceId', props);
    return resource.getResponseField('StackResourceDetail.PhysicalResourceId') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackResource',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackResource.StackResourceDetail.ResourceType'),
        outputPath: 'StackResourceDetail.ResourceType',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackResource.StackResourceDetail.ResourceType', props);
    return resource.getResponseField('StackResourceDetail.ResourceType') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackResource',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackResource.StackResourceDetail.LastUpdatedTimestamp'),
        outputPath: 'StackResourceDetail.LastUpdatedTimestamp',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackResource.StackResourceDetail.LastUpdatedTimestamp', props);
    return resource.getResponseField('StackResourceDetail.LastUpdatedTimestamp') as unknown as string;
  }

  public get resourceStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackResource',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackResource.StackResourceDetail.ResourceStatus'),
        outputPath: 'StackResourceDetail.ResourceStatus',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackResource.StackResourceDetail.ResourceStatus', props);
    return resource.getResponseField('StackResourceDetail.ResourceStatus') as unknown as string;
  }

  public get resourceStatusReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackResource',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackResource.StackResourceDetail.ResourceStatusReason'),
        outputPath: 'StackResourceDetail.ResourceStatusReason',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackResource.StackResourceDetail.ResourceStatusReason', props);
    return resource.getResponseField('StackResourceDetail.ResourceStatusReason') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackResource',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackResource.StackResourceDetail.Description'),
        outputPath: 'StackResourceDetail.Description',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackResource.StackResourceDetail.Description', props);
    return resource.getResponseField('StackResourceDetail.Description') as unknown as string;
  }

  public get metadata(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackResource',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackResource.StackResourceDetail.Metadata'),
        outputPath: 'StackResourceDetail.Metadata',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackResource.StackResourceDetail.Metadata', props);
    return resource.getResponseField('StackResourceDetail.Metadata') as unknown as string;
  }

  public get driftInformation(): CloudFormationDescribeStackResourceStackResourceDetailDriftInformation {
    return new CloudFormationDescribeStackResourceStackResourceDetailDriftInformation(this, 'DriftInformation', this.__resources, this.input);
  }

  public get moduleInfo(): CloudFormationDescribeStackResourceStackResourceDetailModuleInfo {
    return new CloudFormationDescribeStackResourceStackResourceDetailModuleInfo(this, 'ModuleInfo', this.__resources, this.input);
  }

}

export class CloudFormationDescribeStackResourceStackResourceDetailDriftInformation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeStackResourceInput) {
    super(scope, id);
  }

  public get stackResourceDriftStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackResource',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackResource.StackResourceDetail.DriftInformation.StackResourceDriftStatus'),
        outputPath: 'StackResourceDetail.DriftInformation.StackResourceDriftStatus',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackResource.StackResourceDetail.DriftInformation.StackResourceDriftStatus', props);
    return resource.getResponseField('StackResourceDetail.DriftInformation.StackResourceDriftStatus') as unknown as string;
  }

  public get lastCheckTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackResource',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackResource.StackResourceDetail.DriftInformation.LastCheckTimestamp'),
        outputPath: 'StackResourceDetail.DriftInformation.LastCheckTimestamp',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackResource.StackResourceDetail.DriftInformation.LastCheckTimestamp', props);
    return resource.getResponseField('StackResourceDetail.DriftInformation.LastCheckTimestamp') as unknown as string;
  }

}

export class CloudFormationDescribeStackResourceStackResourceDetailModuleInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeStackResourceInput) {
    super(scope, id);
  }

  public get typeHierarchy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackResource',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackResource.StackResourceDetail.ModuleInfo.TypeHierarchy'),
        outputPath: 'StackResourceDetail.ModuleInfo.TypeHierarchy',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackResource.StackResourceDetail.ModuleInfo.TypeHierarchy', props);
    return resource.getResponseField('StackResourceDetail.ModuleInfo.TypeHierarchy') as unknown as string;
  }

  public get logicalIdHierarchy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackResource',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackResource.StackResourceDetail.ModuleInfo.LogicalIdHierarchy'),
        outputPath: 'StackResourceDetail.ModuleInfo.LogicalIdHierarchy',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackResource.StackResourceDetail.ModuleInfo.LogicalIdHierarchy', props);
    return resource.getResponseField('StackResourceDetail.ModuleInfo.LogicalIdHierarchy') as unknown as string;
  }

}

export class CloudFormationDescribeStackResourceDrifts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeStackResourceDriftsInput) {
    super(scope, id);
  }

  public get stackResourceDrifts(): shapes.CloudFormationStackResourceDrift[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackResourceDrifts',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackResourceDrifts.StackResourceDrifts'),
        outputPath: 'StackResourceDrifts',
        parameters: {
          StackName: this.input.stackName,
          StackResourceDriftStatusFilters: this.input.stackResourceDriftStatusFilters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackResourceDrifts.StackResourceDrifts', props);
    return resource.getResponseField('StackResourceDrifts') as unknown as shapes.CloudFormationStackResourceDrift[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackResourceDrifts',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackResourceDrifts.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StackName: this.input.stackName,
          StackResourceDriftStatusFilters: this.input.stackResourceDriftStatusFilters,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackResourceDrifts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationDescribeStackResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeStackResourcesInput) {
    super(scope, id);
  }

  public get stackResources(): shapes.CloudFormationStackResource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackResources',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackResources.StackResources'),
        outputPath: 'StackResources',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
          PhysicalResourceId: this.input.physicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackResources.StackResources', props);
    return resource.getResponseField('StackResources') as unknown as shapes.CloudFormationStackResource[];
  }

}

export class CloudFormationDescribeStackSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeStackSetInput) {
    super(scope, id);
  }

  public get stackSet(): CloudFormationDescribeStackSetStackSet {
    return new CloudFormationDescribeStackSetStackSet(this, 'StackSet', this.__resources, this.input);
  }

}

export class CloudFormationDescribeStackSetStackSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeStackSetInput) {
    super(scope, id);
  }

  public get stackSetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.StackSetName'),
        outputPath: 'StackSet.StackSetName',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.StackSetName', props);
    return resource.getResponseField('StackSet.StackSetName') as unknown as string;
  }

  public get stackSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.StackSetId'),
        outputPath: 'StackSet.StackSetId',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.StackSetId', props);
    return resource.getResponseField('StackSet.StackSetId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.Description'),
        outputPath: 'StackSet.Description',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.Description', props);
    return resource.getResponseField('StackSet.Description') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.Status'),
        outputPath: 'StackSet.Status',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.Status', props);
    return resource.getResponseField('StackSet.Status') as unknown as string;
  }

  public get templateBody(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.TemplateBody'),
        outputPath: 'StackSet.TemplateBody',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.TemplateBody', props);
    return resource.getResponseField('StackSet.TemplateBody') as unknown as string;
  }

  public get parameters(): shapes.CloudFormationParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.Parameters'),
        outputPath: 'StackSet.Parameters',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.Parameters', props);
    return resource.getResponseField('StackSet.Parameters') as unknown as shapes.CloudFormationParameter[];
  }

  public get capabilities(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.Capabilities'),
        outputPath: 'StackSet.Capabilities',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.Capabilities', props);
    return resource.getResponseField('StackSet.Capabilities') as unknown as string[];
  }

  public get tags(): shapes.CloudFormationTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.Tags'),
        outputPath: 'StackSet.Tags',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.Tags', props);
    return resource.getResponseField('StackSet.Tags') as unknown as shapes.CloudFormationTag[];
  }

  public get stackSetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.StackSetARN'),
        outputPath: 'StackSet.StackSetARN',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.StackSetARN', props);
    return resource.getResponseField('StackSet.StackSetARN') as unknown as string;
  }

  public get administrationRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.AdministrationRoleARN'),
        outputPath: 'StackSet.AdministrationRoleARN',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.AdministrationRoleARN', props);
    return resource.getResponseField('StackSet.AdministrationRoleARN') as unknown as string;
  }

  public get executionRoleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.ExecutionRoleName'),
        outputPath: 'StackSet.ExecutionRoleName',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.ExecutionRoleName', props);
    return resource.getResponseField('StackSet.ExecutionRoleName') as unknown as string;
  }

  public get stackSetDriftDetectionDetails(): CloudFormationDescribeStackSetStackSetStackSetDriftDetectionDetails {
    return new CloudFormationDescribeStackSetStackSetStackSetDriftDetectionDetails(this, 'StackSetDriftDetectionDetails', this.__resources, this.input);
  }

  public get autoDeployment(): CloudFormationDescribeStackSetStackSetAutoDeployment {
    return new CloudFormationDescribeStackSetStackSetAutoDeployment(this, 'AutoDeployment', this.__resources, this.input);
  }

  public get permissionModel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.PermissionModel'),
        outputPath: 'StackSet.PermissionModel',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.PermissionModel', props);
    return resource.getResponseField('StackSet.PermissionModel') as unknown as string;
  }

  public get organizationalUnitIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.OrganizationalUnitIds'),
        outputPath: 'StackSet.OrganizationalUnitIds',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.OrganizationalUnitIds', props);
    return resource.getResponseField('StackSet.OrganizationalUnitIds') as unknown as string[];
  }

}

export class CloudFormationDescribeStackSetStackSetStackSetDriftDetectionDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeStackSetInput) {
    super(scope, id);
  }

  public get driftStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.StackSetDriftDetectionDetails.DriftStatus'),
        outputPath: 'StackSet.StackSetDriftDetectionDetails.DriftStatus',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.StackSetDriftDetectionDetails.DriftStatus', props);
    return resource.getResponseField('StackSet.StackSetDriftDetectionDetails.DriftStatus') as unknown as string;
  }

  public get driftDetectionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.StackSetDriftDetectionDetails.DriftDetectionStatus'),
        outputPath: 'StackSet.StackSetDriftDetectionDetails.DriftDetectionStatus',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.StackSetDriftDetectionDetails.DriftDetectionStatus', props);
    return resource.getResponseField('StackSet.StackSetDriftDetectionDetails.DriftDetectionStatus') as unknown as string;
  }

  public get lastDriftCheckTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.StackSetDriftDetectionDetails.LastDriftCheckTimestamp'),
        outputPath: 'StackSet.StackSetDriftDetectionDetails.LastDriftCheckTimestamp',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.StackSetDriftDetectionDetails.LastDriftCheckTimestamp', props);
    return resource.getResponseField('StackSet.StackSetDriftDetectionDetails.LastDriftCheckTimestamp') as unknown as string;
  }

  public get totalStackInstancesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.StackSetDriftDetectionDetails.TotalStackInstancesCount'),
        outputPath: 'StackSet.StackSetDriftDetectionDetails.TotalStackInstancesCount',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.StackSetDriftDetectionDetails.TotalStackInstancesCount', props);
    return resource.getResponseField('StackSet.StackSetDriftDetectionDetails.TotalStackInstancesCount') as unknown as number;
  }

  public get driftedStackInstancesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.StackSetDriftDetectionDetails.DriftedStackInstancesCount'),
        outputPath: 'StackSet.StackSetDriftDetectionDetails.DriftedStackInstancesCount',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.StackSetDriftDetectionDetails.DriftedStackInstancesCount', props);
    return resource.getResponseField('StackSet.StackSetDriftDetectionDetails.DriftedStackInstancesCount') as unknown as number;
  }

  public get inSyncStackInstancesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.StackSetDriftDetectionDetails.InSyncStackInstancesCount'),
        outputPath: 'StackSet.StackSetDriftDetectionDetails.InSyncStackInstancesCount',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.StackSetDriftDetectionDetails.InSyncStackInstancesCount', props);
    return resource.getResponseField('StackSet.StackSetDriftDetectionDetails.InSyncStackInstancesCount') as unknown as number;
  }

  public get inProgressStackInstancesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.StackSetDriftDetectionDetails.InProgressStackInstancesCount'),
        outputPath: 'StackSet.StackSetDriftDetectionDetails.InProgressStackInstancesCount',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.StackSetDriftDetectionDetails.InProgressStackInstancesCount', props);
    return resource.getResponseField('StackSet.StackSetDriftDetectionDetails.InProgressStackInstancesCount') as unknown as number;
  }

  public get failedStackInstancesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.StackSetDriftDetectionDetails.FailedStackInstancesCount'),
        outputPath: 'StackSet.StackSetDriftDetectionDetails.FailedStackInstancesCount',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.StackSetDriftDetectionDetails.FailedStackInstancesCount', props);
    return resource.getResponseField('StackSet.StackSetDriftDetectionDetails.FailedStackInstancesCount') as unknown as number;
  }

}

export class CloudFormationDescribeStackSetStackSetAutoDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeStackSetInput) {
    super(scope, id);
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.AutoDeployment.Enabled'),
        outputPath: 'StackSet.AutoDeployment.Enabled',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.AutoDeployment.Enabled', props);
    return resource.getResponseField('StackSet.AutoDeployment.Enabled') as unknown as boolean;
  }

  public get retainStacksOnAccountRemoval(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSet.StackSet.AutoDeployment.RetainStacksOnAccountRemoval'),
        outputPath: 'StackSet.AutoDeployment.RetainStacksOnAccountRemoval',
        parameters: {
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSet.StackSet.AutoDeployment.RetainStacksOnAccountRemoval', props);
    return resource.getResponseField('StackSet.AutoDeployment.RetainStacksOnAccountRemoval') as unknown as boolean;
  }

}

export class CloudFormationDescribeStackSetOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeStackSetOperationInput) {
    super(scope, id);
  }

  public get stackSetOperation(): CloudFormationDescribeStackSetOperationStackSetOperation {
    return new CloudFormationDescribeStackSetOperationStackSetOperation(this, 'StackSetOperation', this.__resources, this.input);
  }

}

export class CloudFormationDescribeStackSetOperationStackSetOperation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeStackSetOperationInput) {
    super(scope, id);
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.OperationId'),
        outputPath: 'StackSetOperation.OperationId',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.OperationId', props);
    return resource.getResponseField('StackSetOperation.OperationId') as unknown as string;
  }

  public get stackSetId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.StackSetId'),
        outputPath: 'StackSetOperation.StackSetId',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.StackSetId', props);
    return resource.getResponseField('StackSetOperation.StackSetId') as unknown as string;
  }

  public get action(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.Action'),
        outputPath: 'StackSetOperation.Action',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.Action', props);
    return resource.getResponseField('StackSetOperation.Action') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.Status'),
        outputPath: 'StackSetOperation.Status',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.Status', props);
    return resource.getResponseField('StackSetOperation.Status') as unknown as string;
  }

  public get operationPreferences(): CloudFormationDescribeStackSetOperationStackSetOperationOperationPreferences {
    return new CloudFormationDescribeStackSetOperationStackSetOperationOperationPreferences(this, 'OperationPreferences', this.__resources, this.input);
  }

  public get retainStacks(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.RetainStacks'),
        outputPath: 'StackSetOperation.RetainStacks',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.RetainStacks', props);
    return resource.getResponseField('StackSetOperation.RetainStacks') as unknown as boolean;
  }

  public get administrationRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.AdministrationRoleARN'),
        outputPath: 'StackSetOperation.AdministrationRoleARN',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.AdministrationRoleARN', props);
    return resource.getResponseField('StackSetOperation.AdministrationRoleARN') as unknown as string;
  }

  public get executionRoleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.ExecutionRoleName'),
        outputPath: 'StackSetOperation.ExecutionRoleName',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.ExecutionRoleName', props);
    return resource.getResponseField('StackSetOperation.ExecutionRoleName') as unknown as string;
  }

  public get creationTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.CreationTimestamp'),
        outputPath: 'StackSetOperation.CreationTimestamp',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.CreationTimestamp', props);
    return resource.getResponseField('StackSetOperation.CreationTimestamp') as unknown as string;
  }

  public get endTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.EndTimestamp'),
        outputPath: 'StackSetOperation.EndTimestamp',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.EndTimestamp', props);
    return resource.getResponseField('StackSetOperation.EndTimestamp') as unknown as string;
  }

  public get deploymentTargets(): CloudFormationDescribeStackSetOperationStackSetOperationDeploymentTargets {
    return new CloudFormationDescribeStackSetOperationStackSetOperationDeploymentTargets(this, 'DeploymentTargets', this.__resources, this.input);
  }

  public get stackSetDriftDetectionDetails(): CloudFormationDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails {
    return new CloudFormationDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails(this, 'StackSetDriftDetectionDetails', this.__resources, this.input);
  }

}

export class CloudFormationDescribeStackSetOperationStackSetOperationOperationPreferences extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeStackSetOperationInput) {
    super(scope, id);
  }

  public get regionOrder(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.OperationPreferences.RegionOrder'),
        outputPath: 'StackSetOperation.OperationPreferences.RegionOrder',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.OperationPreferences.RegionOrder', props);
    return resource.getResponseField('StackSetOperation.OperationPreferences.RegionOrder') as unknown as string[];
  }

  public get failureToleranceCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.OperationPreferences.FailureToleranceCount'),
        outputPath: 'StackSetOperation.OperationPreferences.FailureToleranceCount',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.OperationPreferences.FailureToleranceCount', props);
    return resource.getResponseField('StackSetOperation.OperationPreferences.FailureToleranceCount') as unknown as number;
  }

  public get failureTolerancePercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.OperationPreferences.FailureTolerancePercentage'),
        outputPath: 'StackSetOperation.OperationPreferences.FailureTolerancePercentage',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.OperationPreferences.FailureTolerancePercentage', props);
    return resource.getResponseField('StackSetOperation.OperationPreferences.FailureTolerancePercentage') as unknown as number;
  }

  public get maxConcurrentCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.OperationPreferences.MaxConcurrentCount'),
        outputPath: 'StackSetOperation.OperationPreferences.MaxConcurrentCount',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.OperationPreferences.MaxConcurrentCount', props);
    return resource.getResponseField('StackSetOperation.OperationPreferences.MaxConcurrentCount') as unknown as number;
  }

  public get maxConcurrentPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.OperationPreferences.MaxConcurrentPercentage'),
        outputPath: 'StackSetOperation.OperationPreferences.MaxConcurrentPercentage',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.OperationPreferences.MaxConcurrentPercentage', props);
    return resource.getResponseField('StackSetOperation.OperationPreferences.MaxConcurrentPercentage') as unknown as number;
  }

}

export class CloudFormationDescribeStackSetOperationStackSetOperationDeploymentTargets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeStackSetOperationInput) {
    super(scope, id);
  }

  public get accounts(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.DeploymentTargets.Accounts'),
        outputPath: 'StackSetOperation.DeploymentTargets.Accounts',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.DeploymentTargets.Accounts', props);
    return resource.getResponseField('StackSetOperation.DeploymentTargets.Accounts') as unknown as string[];
  }

  public get organizationalUnitIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.DeploymentTargets.OrganizationalUnitIds'),
        outputPath: 'StackSetOperation.DeploymentTargets.OrganizationalUnitIds',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.DeploymentTargets.OrganizationalUnitIds', props);
    return resource.getResponseField('StackSetOperation.DeploymentTargets.OrganizationalUnitIds') as unknown as string[];
  }

}

export class CloudFormationDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeStackSetOperationInput) {
    super(scope, id);
  }

  public get driftStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.DriftStatus'),
        outputPath: 'StackSetOperation.StackSetDriftDetectionDetails.DriftStatus',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.DriftStatus', props);
    return resource.getResponseField('StackSetOperation.StackSetDriftDetectionDetails.DriftStatus') as unknown as string;
  }

  public get driftDetectionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.DriftDetectionStatus'),
        outputPath: 'StackSetOperation.StackSetDriftDetectionDetails.DriftDetectionStatus',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.DriftDetectionStatus', props);
    return resource.getResponseField('StackSetOperation.StackSetDriftDetectionDetails.DriftDetectionStatus') as unknown as string;
  }

  public get lastDriftCheckTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.LastDriftCheckTimestamp'),
        outputPath: 'StackSetOperation.StackSetDriftDetectionDetails.LastDriftCheckTimestamp',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.LastDriftCheckTimestamp', props);
    return resource.getResponseField('StackSetOperation.StackSetDriftDetectionDetails.LastDriftCheckTimestamp') as unknown as string;
  }

  public get totalStackInstancesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.TotalStackInstancesCount'),
        outputPath: 'StackSetOperation.StackSetDriftDetectionDetails.TotalStackInstancesCount',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.TotalStackInstancesCount', props);
    return resource.getResponseField('StackSetOperation.StackSetDriftDetectionDetails.TotalStackInstancesCount') as unknown as number;
  }

  public get driftedStackInstancesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.DriftedStackInstancesCount'),
        outputPath: 'StackSetOperation.StackSetDriftDetectionDetails.DriftedStackInstancesCount',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.DriftedStackInstancesCount', props);
    return resource.getResponseField('StackSetOperation.StackSetDriftDetectionDetails.DriftedStackInstancesCount') as unknown as number;
  }

  public get inSyncStackInstancesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.InSyncStackInstancesCount'),
        outputPath: 'StackSetOperation.StackSetDriftDetectionDetails.InSyncStackInstancesCount',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.InSyncStackInstancesCount', props);
    return resource.getResponseField('StackSetOperation.StackSetDriftDetectionDetails.InSyncStackInstancesCount') as unknown as number;
  }

  public get inProgressStackInstancesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.InProgressStackInstancesCount'),
        outputPath: 'StackSetOperation.StackSetDriftDetectionDetails.InProgressStackInstancesCount',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.InProgressStackInstancesCount', props);
    return resource.getResponseField('StackSetOperation.StackSetDriftDetectionDetails.InProgressStackInstancesCount') as unknown as number;
  }

  public get failedStackInstancesCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSetOperation',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.FailedStackInstancesCount'),
        outputPath: 'StackSetOperation.StackSetDriftDetectionDetails.FailedStackInstancesCount',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.FailedStackInstancesCount', props);
    return resource.getResponseField('StackSetOperation.StackSetDriftDetectionDetails.FailedStackInstancesCount') as unknown as number;
  }

}

export class CloudFormationDescribeStacks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeStacksInput) {
    super(scope, id);
  }

  public get stacks(): shapes.CloudFormationStack[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStacks',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStacks.Stacks'),
        outputPath: 'Stacks',
        parameters: {
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStacks.Stacks', props);
    return resource.getResponseField('Stacks') as unknown as shapes.CloudFormationStack[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStacks',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeStacks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStacks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationDescribeType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeTypeInput) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeType',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeType.Arn'),
        outputPath: 'Arn',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          Arn: this.input.arn,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeType.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeType',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeType.Type'),
        outputPath: 'Type',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          Arn: this.input.arn,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeType.Type', props);
    return resource.getResponseField('Type') as unknown as string;
  }

  public get typeName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeType',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeType.TypeName'),
        outputPath: 'TypeName',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          Arn: this.input.arn,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeType.TypeName', props);
    return resource.getResponseField('TypeName') as unknown as string;
  }

  public get defaultVersionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeType',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeType.DefaultVersionId'),
        outputPath: 'DefaultVersionId',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          Arn: this.input.arn,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeType.DefaultVersionId', props);
    return resource.getResponseField('DefaultVersionId') as unknown as string;
  }

  public get isDefaultVersion(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeType',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeType.IsDefaultVersion'),
        outputPath: 'IsDefaultVersion',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          Arn: this.input.arn,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeType.IsDefaultVersion', props);
    return resource.getResponseField('IsDefaultVersion') as unknown as boolean;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeType',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeType.Description'),
        outputPath: 'Description',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          Arn: this.input.arn,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeType.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeType',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeType.Schema'),
        outputPath: 'Schema',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          Arn: this.input.arn,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeType.Schema', props);
    return resource.getResponseField('Schema') as unknown as string;
  }

  public get provisioningType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeType',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeType.ProvisioningType'),
        outputPath: 'ProvisioningType',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          Arn: this.input.arn,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeType.ProvisioningType', props);
    return resource.getResponseField('ProvisioningType') as unknown as string;
  }

  public get deprecatedStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeType',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeType.DeprecatedStatus'),
        outputPath: 'DeprecatedStatus',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          Arn: this.input.arn,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeType.DeprecatedStatus', props);
    return resource.getResponseField('DeprecatedStatus') as unknown as string;
  }

  public get loggingConfig(): CloudFormationDescribeTypeLoggingConfig {
    return new CloudFormationDescribeTypeLoggingConfig(this, 'LoggingConfig', this.__resources, this.input);
  }

  public get executionRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeType',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeType.ExecutionRoleArn'),
        outputPath: 'ExecutionRoleArn',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          Arn: this.input.arn,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeType.ExecutionRoleArn', props);
    return resource.getResponseField('ExecutionRoleArn') as unknown as string;
  }

  public get visibility(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeType',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeType.Visibility'),
        outputPath: 'Visibility',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          Arn: this.input.arn,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeType.Visibility', props);
    return resource.getResponseField('Visibility') as unknown as string;
  }

  public get sourceUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeType',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeType.SourceUrl'),
        outputPath: 'SourceUrl',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          Arn: this.input.arn,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeType.SourceUrl', props);
    return resource.getResponseField('SourceUrl') as unknown as string;
  }

  public get documentationUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeType',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeType.DocumentationUrl'),
        outputPath: 'DocumentationUrl',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          Arn: this.input.arn,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeType.DocumentationUrl', props);
    return resource.getResponseField('DocumentationUrl') as unknown as string;
  }

  public get lastUpdated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeType',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeType.LastUpdated'),
        outputPath: 'LastUpdated',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          Arn: this.input.arn,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeType.LastUpdated', props);
    return resource.getResponseField('LastUpdated') as unknown as string;
  }

  public get timeCreated(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeType',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeType.TimeCreated'),
        outputPath: 'TimeCreated',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          Arn: this.input.arn,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeType.TimeCreated', props);
    return resource.getResponseField('TimeCreated') as unknown as string;
  }

}

export class CloudFormationDescribeTypeLoggingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeTypeInput) {
    super(scope, id);
  }

  public get logRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeType',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeType.LoggingConfig.LogRoleArn'),
        outputPath: 'LoggingConfig.LogRoleArn',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          Arn: this.input.arn,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeType.LoggingConfig.LogRoleArn', props);
    return resource.getResponseField('LoggingConfig.LogRoleArn') as unknown as string;
  }

  public get logGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeType',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeType.LoggingConfig.LogGroupName'),
        outputPath: 'LoggingConfig.LogGroupName',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          Arn: this.input.arn,
          VersionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeType.LoggingConfig.LogGroupName', props);
    return resource.getResponseField('LoggingConfig.LogGroupName') as unknown as string;
  }

}

export class CloudFormationDescribeTypeRegistration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDescribeTypeRegistrationInput) {
    super(scope, id);
  }

  public get progressStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTypeRegistration',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeTypeRegistration.ProgressStatus'),
        outputPath: 'ProgressStatus',
        parameters: {
          RegistrationToken: this.input.registrationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTypeRegistration.ProgressStatus', props);
    return resource.getResponseField('ProgressStatus') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTypeRegistration',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeTypeRegistration.Description'),
        outputPath: 'Description',
        parameters: {
          RegistrationToken: this.input.registrationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTypeRegistration.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get typeArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTypeRegistration',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeTypeRegistration.TypeArn'),
        outputPath: 'TypeArn',
        parameters: {
          RegistrationToken: this.input.registrationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTypeRegistration.TypeArn', props);
    return resource.getResponseField('TypeArn') as unknown as string;
  }

  public get typeVersionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTypeRegistration',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DescribeTypeRegistration.TypeVersionArn'),
        outputPath: 'TypeVersionArn',
        parameters: {
          RegistrationToken: this.input.registrationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTypeRegistration.TypeVersionArn', props);
    return resource.getResponseField('TypeVersionArn') as unknown as string;
  }

}

export class CloudFormationDetectStackDrift extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDetectStackDriftInput) {
    super(scope, id);
  }

  public get stackDriftDetectionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectStackDrift',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DetectStackDrift.StackDriftDetectionId'),
        outputPath: 'StackDriftDetectionId',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceIds: this.input.logicalResourceIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectStackDrift.StackDriftDetectionId', props);
    return resource.getResponseField('StackDriftDetectionId') as unknown as string;
  }

}

export class CloudFormationDetectStackResourceDrift extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDetectStackResourceDriftInput) {
    super(scope, id);
  }

  public get stackResourceDrift(): CloudFormationDetectStackResourceDriftStackResourceDrift {
    return new CloudFormationDetectStackResourceDriftStackResourceDrift(this, 'StackResourceDrift', this.__resources, this.input);
  }

}

export class CloudFormationDetectStackResourceDriftStackResourceDrift extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDetectStackResourceDriftInput) {
    super(scope, id);
  }

  public get stackId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectStackResourceDrift',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DetectStackResourceDrift.StackResourceDrift.StackId'),
        outputPath: 'StackResourceDrift.StackId',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectStackResourceDrift.StackResourceDrift.StackId', props);
    return resource.getResponseField('StackResourceDrift.StackId') as unknown as string;
  }

  public get logicalResourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectStackResourceDrift',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DetectStackResourceDrift.StackResourceDrift.LogicalResourceId'),
        outputPath: 'StackResourceDrift.LogicalResourceId',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectStackResourceDrift.StackResourceDrift.LogicalResourceId', props);
    return resource.getResponseField('StackResourceDrift.LogicalResourceId') as unknown as string;
  }

  public get physicalResourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectStackResourceDrift',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DetectStackResourceDrift.StackResourceDrift.PhysicalResourceId'),
        outputPath: 'StackResourceDrift.PhysicalResourceId',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectStackResourceDrift.StackResourceDrift.PhysicalResourceId', props);
    return resource.getResponseField('StackResourceDrift.PhysicalResourceId') as unknown as string;
  }

  public get physicalResourceIdContext(): shapes.CloudFormationPhysicalResourceIdContextKeyValuePair[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectStackResourceDrift',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DetectStackResourceDrift.StackResourceDrift.PhysicalResourceIdContext'),
        outputPath: 'StackResourceDrift.PhysicalResourceIdContext',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectStackResourceDrift.StackResourceDrift.PhysicalResourceIdContext', props);
    return resource.getResponseField('StackResourceDrift.PhysicalResourceIdContext') as unknown as shapes.CloudFormationPhysicalResourceIdContextKeyValuePair[];
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectStackResourceDrift',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DetectStackResourceDrift.StackResourceDrift.ResourceType'),
        outputPath: 'StackResourceDrift.ResourceType',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectStackResourceDrift.StackResourceDrift.ResourceType', props);
    return resource.getResponseField('StackResourceDrift.ResourceType') as unknown as string;
  }

  public get expectedProperties(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectStackResourceDrift',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DetectStackResourceDrift.StackResourceDrift.ExpectedProperties'),
        outputPath: 'StackResourceDrift.ExpectedProperties',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectStackResourceDrift.StackResourceDrift.ExpectedProperties', props);
    return resource.getResponseField('StackResourceDrift.ExpectedProperties') as unknown as string;
  }

  public get actualProperties(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectStackResourceDrift',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DetectStackResourceDrift.StackResourceDrift.ActualProperties'),
        outputPath: 'StackResourceDrift.ActualProperties',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectStackResourceDrift.StackResourceDrift.ActualProperties', props);
    return resource.getResponseField('StackResourceDrift.ActualProperties') as unknown as string;
  }

  public get propertyDifferences(): shapes.CloudFormationPropertyDifference[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectStackResourceDrift',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DetectStackResourceDrift.StackResourceDrift.PropertyDifferences'),
        outputPath: 'StackResourceDrift.PropertyDifferences',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectStackResourceDrift.StackResourceDrift.PropertyDifferences', props);
    return resource.getResponseField('StackResourceDrift.PropertyDifferences') as unknown as shapes.CloudFormationPropertyDifference[];
  }

  public get stackResourceDriftStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectStackResourceDrift',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DetectStackResourceDrift.StackResourceDrift.StackResourceDriftStatus'),
        outputPath: 'StackResourceDrift.StackResourceDriftStatus',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectStackResourceDrift.StackResourceDrift.StackResourceDriftStatus', props);
    return resource.getResponseField('StackResourceDrift.StackResourceDriftStatus') as unknown as string;
  }

  public get timestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectStackResourceDrift',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DetectStackResourceDrift.StackResourceDrift.Timestamp'),
        outputPath: 'StackResourceDrift.Timestamp',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectStackResourceDrift.StackResourceDrift.Timestamp', props);
    return resource.getResponseField('StackResourceDrift.Timestamp') as unknown as string;
  }

  public get moduleInfo(): CloudFormationDetectStackResourceDriftStackResourceDriftModuleInfo {
    return new CloudFormationDetectStackResourceDriftStackResourceDriftModuleInfo(this, 'ModuleInfo', this.__resources, this.input);
  }

}

export class CloudFormationDetectStackResourceDriftStackResourceDriftModuleInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDetectStackResourceDriftInput) {
    super(scope, id);
  }

  public get typeHierarchy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectStackResourceDrift',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DetectStackResourceDrift.StackResourceDrift.ModuleInfo.TypeHierarchy'),
        outputPath: 'StackResourceDrift.ModuleInfo.TypeHierarchy',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectStackResourceDrift.StackResourceDrift.ModuleInfo.TypeHierarchy', props);
    return resource.getResponseField('StackResourceDrift.ModuleInfo.TypeHierarchy') as unknown as string;
  }

  public get logicalIdHierarchy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectStackResourceDrift',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DetectStackResourceDrift.StackResourceDrift.ModuleInfo.LogicalIdHierarchy'),
        outputPath: 'StackResourceDrift.ModuleInfo.LogicalIdHierarchy',
        parameters: {
          StackName: this.input.stackName,
          LogicalResourceId: this.input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectStackResourceDrift.StackResourceDrift.ModuleInfo.LogicalIdHierarchy', props);
    return resource.getResponseField('StackResourceDrift.ModuleInfo.LogicalIdHierarchy') as unknown as string;
  }

}

export class CloudFormationDetectStackSetDrift extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationDetectStackSetDriftInput) {
    super(scope, id);
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detectStackSetDrift',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.DetectStackSetDrift.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationPreferences: {
            RegionOrder: this.input.operationPreferences?.regionOrder,
            FailureToleranceCount: this.input.operationPreferences?.failureToleranceCount,
            FailureTolerancePercentage: this.input.operationPreferences?.failureTolerancePercentage,
            MaxConcurrentCount: this.input.operationPreferences?.maxConcurrentCount,
            MaxConcurrentPercentage: this.input.operationPreferences?.maxConcurrentPercentage,
          },
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DetectStackSetDrift.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class CloudFormationEstimateTemplateCost extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationEstimateTemplateCostInput) {
    super(scope, id);
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'estimateTemplateCost',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.EstimateTemplateCost.Url'),
        outputPath: 'Url',
        parameters: {
          TemplateBody: this.input.templateBody,
          TemplateURL: this.input.templateUrl,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'EstimateTemplateCost.Url', props);
    return resource.getResponseField('Url') as unknown as string;
  }

}

export class CloudFormationFetchStackPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationGetStackPolicyInput) {
    super(scope, id);
  }

  public get stackPolicyBody(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getStackPolicy',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.GetStackPolicy.StackPolicyBody'),
        outputPath: 'StackPolicyBody',
        parameters: {
          StackName: this.input.stackName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetStackPolicy.StackPolicyBody', props);
    return resource.getResponseField('StackPolicyBody') as unknown as string;
  }

}

export class CloudFormationFetchTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationGetTemplateInput) {
    super(scope, id);
  }

  public get templateBody(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTemplate',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.GetTemplate.TemplateBody'),
        outputPath: 'TemplateBody',
        parameters: {
          StackName: this.input.stackName,
          ChangeSetName: this.input.changeSetName,
          TemplateStage: this.input.templateStage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTemplate.TemplateBody', props);
    return resource.getResponseField('TemplateBody') as unknown as string;
  }

  public get stagesAvailable(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTemplate',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.GetTemplate.StagesAvailable'),
        outputPath: 'StagesAvailable',
        parameters: {
          StackName: this.input.stackName,
          ChangeSetName: this.input.changeSetName,
          TemplateStage: this.input.templateStage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTemplate.StagesAvailable', props);
    return resource.getResponseField('StagesAvailable') as unknown as string[];
  }

}

export class CloudFormationFetchTemplateSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationGetTemplateSummaryInput) {
    super(scope, id);
  }

  public get parameters(): shapes.CloudFormationParameterDeclaration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTemplateSummary',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.GetTemplateSummary.Parameters'),
        outputPath: 'Parameters',
        parameters: {
          TemplateBody: this.input.templateBody,
          TemplateURL: this.input.templateUrl,
          StackName: this.input.stackName,
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTemplateSummary.Parameters', props);
    return resource.getResponseField('Parameters') as unknown as shapes.CloudFormationParameterDeclaration[];
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTemplateSummary',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.GetTemplateSummary.Description'),
        outputPath: 'Description',
        parameters: {
          TemplateBody: this.input.templateBody,
          TemplateURL: this.input.templateUrl,
          StackName: this.input.stackName,
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTemplateSummary.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get capabilities(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTemplateSummary',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.GetTemplateSummary.Capabilities'),
        outputPath: 'Capabilities',
        parameters: {
          TemplateBody: this.input.templateBody,
          TemplateURL: this.input.templateUrl,
          StackName: this.input.stackName,
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTemplateSummary.Capabilities', props);
    return resource.getResponseField('Capabilities') as unknown as string[];
  }

  public get capabilitiesReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTemplateSummary',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.GetTemplateSummary.CapabilitiesReason'),
        outputPath: 'CapabilitiesReason',
        parameters: {
          TemplateBody: this.input.templateBody,
          TemplateURL: this.input.templateUrl,
          StackName: this.input.stackName,
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTemplateSummary.CapabilitiesReason', props);
    return resource.getResponseField('CapabilitiesReason') as unknown as string;
  }

  public get resourceTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTemplateSummary',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.GetTemplateSummary.ResourceTypes'),
        outputPath: 'ResourceTypes',
        parameters: {
          TemplateBody: this.input.templateBody,
          TemplateURL: this.input.templateUrl,
          StackName: this.input.stackName,
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTemplateSummary.ResourceTypes', props);
    return resource.getResponseField('ResourceTypes') as unknown as string[];
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTemplateSummary',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.GetTemplateSummary.Version'),
        outputPath: 'Version',
        parameters: {
          TemplateBody: this.input.templateBody,
          TemplateURL: this.input.templateUrl,
          StackName: this.input.stackName,
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTemplateSummary.Version', props);
    return resource.getResponseField('Version') as unknown as string;
  }

  public get metadata(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTemplateSummary',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.GetTemplateSummary.Metadata'),
        outputPath: 'Metadata',
        parameters: {
          TemplateBody: this.input.templateBody,
          TemplateURL: this.input.templateUrl,
          StackName: this.input.stackName,
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTemplateSummary.Metadata', props);
    return resource.getResponseField('Metadata') as unknown as string;
  }

  public get declaredTransforms(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTemplateSummary',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.GetTemplateSummary.DeclaredTransforms'),
        outputPath: 'DeclaredTransforms',
        parameters: {
          TemplateBody: this.input.templateBody,
          TemplateURL: this.input.templateUrl,
          StackName: this.input.stackName,
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTemplateSummary.DeclaredTransforms', props);
    return resource.getResponseField('DeclaredTransforms') as unknown as string[];
  }

  public get resourceIdentifierSummaries(): shapes.CloudFormationResourceIdentifierSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getTemplateSummary',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.GetTemplateSummary.ResourceIdentifierSummaries'),
        outputPath: 'ResourceIdentifierSummaries',
        parameters: {
          TemplateBody: this.input.templateBody,
          TemplateURL: this.input.templateUrl,
          StackName: this.input.stackName,
          StackSetName: this.input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetTemplateSummary.ResourceIdentifierSummaries', props);
    return resource.getResponseField('ResourceIdentifierSummaries') as unknown as shapes.CloudFormationResourceIdentifierSummary[];
  }

}

export class CloudFormationListChangeSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationListChangeSetsInput) {
    super(scope, id);
  }

  public get summaries(): shapes.CloudFormationChangeSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChangeSets',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListChangeSets.Summaries'),
        outputPath: 'Summaries',
        parameters: {
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChangeSets.Summaries', props);
    return resource.getResponseField('Summaries') as unknown as shapes.CloudFormationChangeSetSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChangeSets',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListChangeSets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChangeSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationListExports extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationListExportsInput) {
    super(scope, id);
  }

  public get exports(): shapes.CloudFormationExport[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listExports',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListExports.Exports'),
        outputPath: 'Exports',
        parameters: {
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListExports.Exports', props);
    return resource.getResponseField('Exports') as unknown as shapes.CloudFormationExport[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listExports',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListExports.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListExports.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationListImports extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationListImportsInput) {
    super(scope, id);
  }

  public get imports(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImports',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListImports.Imports'),
        outputPath: 'Imports',
        parameters: {
          ExportName: this.input.exportName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImports.Imports', props);
    return resource.getResponseField('Imports') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listImports',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListImports.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ExportName: this.input.exportName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListImports.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationListStackInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationListStackInstancesInput) {
    super(scope, id);
  }

  public get summaries(): shapes.CloudFormationStackInstanceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStackInstances',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListStackInstances.Summaries'),
        outputPath: 'Summaries',
        parameters: {
          StackSetName: this.input.stackSetName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Filters: this.input.filters,
          StackInstanceAccount: this.input.stackInstanceAccount,
          StackInstanceRegion: this.input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStackInstances.Summaries', props);
    return resource.getResponseField('Summaries') as unknown as shapes.CloudFormationStackInstanceSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStackInstances',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListStackInstances.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StackSetName: this.input.stackSetName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Filters: this.input.filters,
          StackInstanceAccount: this.input.stackInstanceAccount,
          StackInstanceRegion: this.input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStackInstances.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationListStackResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationListStackResourcesInput) {
    super(scope, id);
  }

  public get stackResourceSummaries(): shapes.CloudFormationStackResourceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStackResources',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListStackResources.StackResourceSummaries'),
        outputPath: 'StackResourceSummaries',
        parameters: {
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStackResources.StackResourceSummaries', props);
    return resource.getResponseField('StackResourceSummaries') as unknown as shapes.CloudFormationStackResourceSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStackResources',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListStackResources.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStackResources.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationListStackSetOperationResults extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationListStackSetOperationResultsInput) {
    super(scope, id);
  }

  public get summaries(): shapes.CloudFormationStackSetOperationResultSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStackSetOperationResults',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListStackSetOperationResults.Summaries'),
        outputPath: 'Summaries',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStackSetOperationResults.Summaries', props);
    return resource.getResponseField('Summaries') as unknown as shapes.CloudFormationStackSetOperationResultSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStackSetOperationResults',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListStackSetOperationResults.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StackSetName: this.input.stackSetName,
          OperationId: this.input.operationId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStackSetOperationResults.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationListStackSetOperations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationListStackSetOperationsInput) {
    super(scope, id);
  }

  public get summaries(): shapes.CloudFormationStackSetOperationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStackSetOperations',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListStackSetOperations.Summaries'),
        outputPath: 'Summaries',
        parameters: {
          StackSetName: this.input.stackSetName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStackSetOperations.Summaries', props);
    return resource.getResponseField('Summaries') as unknown as shapes.CloudFormationStackSetOperationSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStackSetOperations',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListStackSetOperations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StackSetName: this.input.stackSetName,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStackSetOperations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationListStackSets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationListStackSetsInput) {
    super(scope, id);
  }

  public get summaries(): shapes.CloudFormationStackSetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStackSets',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListStackSets.Summaries'),
        outputPath: 'Summaries',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStackSets.Summaries', props);
    return resource.getResponseField('Summaries') as unknown as shapes.CloudFormationStackSetSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStackSets',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListStackSets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
          Status: this.input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStackSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationListStacks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationListStacksInput) {
    super(scope, id);
  }

  public get stackSummaries(): shapes.CloudFormationStackSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStacks',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListStacks.StackSummaries'),
        outputPath: 'StackSummaries',
        parameters: {
          NextToken: this.input.nextToken,
          StackStatusFilter: this.input.stackStatusFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStacks.StackSummaries', props);
    return resource.getResponseField('StackSummaries') as unknown as shapes.CloudFormationStackSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listStacks',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListStacks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          StackStatusFilter: this.input.stackStatusFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListStacks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationListTypeRegistrations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationListTypeRegistrationsInput) {
    super(scope, id);
  }

  public get registrationTokenList(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTypeRegistrations',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListTypeRegistrations.RegistrationTokenList'),
        outputPath: 'RegistrationTokenList',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          TypeArn: this.input.typeArn,
          RegistrationStatusFilter: this.input.registrationStatusFilter,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTypeRegistrations.RegistrationTokenList', props);
    return resource.getResponseField('RegistrationTokenList') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTypeRegistrations',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListTypeRegistrations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          TypeArn: this.input.typeArn,
          RegistrationStatusFilter: this.input.registrationStatusFilter,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTypeRegistrations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationListTypeVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationListTypeVersionsInput) {
    super(scope, id);
  }

  public get typeVersionSummaries(): shapes.CloudFormationTypeVersionSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTypeVersions',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListTypeVersions.TypeVersionSummaries'),
        outputPath: 'TypeVersionSummaries',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          Arn: this.input.arn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          DeprecatedStatus: this.input.deprecatedStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTypeVersions.TypeVersionSummaries', props);
    return resource.getResponseField('TypeVersionSummaries') as unknown as shapes.CloudFormationTypeVersionSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTypeVersions',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListTypeVersions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          Arn: this.input.arn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          DeprecatedStatus: this.input.deprecatedStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTypeVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationListTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationListTypesInput) {
    super(scope, id);
  }

  public get typeSummaries(): shapes.CloudFormationTypeSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTypes',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListTypes.TypeSummaries'),
        outputPath: 'TypeSummaries',
        parameters: {
          Visibility: this.input.visibility,
          ProvisioningType: this.input.provisioningType,
          DeprecatedStatus: this.input.deprecatedStatus,
          Type: this.input.type,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTypes.TypeSummaries', props);
    return resource.getResponseField('TypeSummaries') as unknown as shapes.CloudFormationTypeSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTypes',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ListTypes.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Visibility: this.input.visibility,
          ProvisioningType: this.input.provisioningType,
          DeprecatedStatus: this.input.deprecatedStatus,
          Type: this.input.type,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTypes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationRegisterType extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationRegisterTypeInput) {
    super(scope, id);
  }

  public get registrationToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerType',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.RegisterType.RegistrationToken'),
        outputPath: 'RegistrationToken',
        parameters: {
          Type: this.input.type,
          TypeName: this.input.typeName,
          SchemaHandlerPackage: this.input.schemaHandlerPackage,
          LoggingConfig: {
            LogRoleArn: this.input.loggingConfig?.logRoleArn,
            LogGroupName: this.input.loggingConfig?.logGroupName,
          },
          ExecutionRoleArn: this.input.executionRoleArn,
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterType.RegistrationToken', props);
    return resource.getResponseField('RegistrationToken') as unknown as string;
  }

}

export class CloudFormationUpdateStack extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationUpdateStackInput) {
    super(scope, id);
  }

  public get stackId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStack',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.UpdateStack.StackId'),
        outputPath: 'StackId',
        parameters: {
          StackName: this.input.stackName,
          TemplateBody: this.input.templateBody,
          TemplateURL: this.input.templateUrl,
          UsePreviousTemplate: this.input.usePreviousTemplate,
          StackPolicyDuringUpdateBody: this.input.stackPolicyDuringUpdateBody,
          StackPolicyDuringUpdateURL: this.input.stackPolicyDuringUpdateUrl,
          Parameters: this.input.parameters,
          Capabilities: this.input.capabilities,
          ResourceTypes: this.input.resourceTypes,
          RoleARN: this.input.roleArn,
          RollbackConfiguration: {
            RollbackTriggers: this.input.rollbackConfiguration?.rollbackTriggers,
            MonitoringTimeInMinutes: this.input.rollbackConfiguration?.monitoringTimeInMinutes,
          },
          StackPolicyBody: this.input.stackPolicyBody,
          StackPolicyURL: this.input.stackPolicyUrl,
          NotificationARNs: this.input.notificationArNs,
          Tags: this.input.tags,
          ClientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStack.StackId', props);
    return resource.getResponseField('StackId') as unknown as string;
  }

}

export class CloudFormationUpdateStackInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationUpdateStackInstancesInput) {
    super(scope, id);
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStackInstances',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.UpdateStackInstances.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          StackSetName: this.input.stackSetName,
          Accounts: this.input.accounts,
          DeploymentTargets: {
            Accounts: this.input.deploymentTargets?.accounts,
            OrganizationalUnitIds: this.input.deploymentTargets?.organizationalUnitIds,
          },
          Regions: this.input.regions,
          ParameterOverrides: this.input.parameterOverrides,
          OperationPreferences: {
            RegionOrder: this.input.operationPreferences?.regionOrder,
            FailureToleranceCount: this.input.operationPreferences?.failureToleranceCount,
            FailureTolerancePercentage: this.input.operationPreferences?.failureTolerancePercentage,
            MaxConcurrentCount: this.input.operationPreferences?.maxConcurrentCount,
            MaxConcurrentPercentage: this.input.operationPreferences?.maxConcurrentPercentage,
          },
          OperationId: this.input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStackInstances.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class CloudFormationUpdateStackSet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationUpdateStackSetInput) {
    super(scope, id);
  }

  public get operationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStackSet',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.UpdateStackSet.OperationId'),
        outputPath: 'OperationId',
        parameters: {
          StackSetName: this.input.stackSetName,
          Description: this.input.description,
          TemplateBody: this.input.templateBody,
          TemplateURL: this.input.templateUrl,
          UsePreviousTemplate: this.input.usePreviousTemplate,
          Parameters: this.input.parameters,
          Capabilities: this.input.capabilities,
          Tags: this.input.tags,
          OperationPreferences: {
            RegionOrder: this.input.operationPreferences?.regionOrder,
            FailureToleranceCount: this.input.operationPreferences?.failureToleranceCount,
            FailureTolerancePercentage: this.input.operationPreferences?.failureTolerancePercentage,
            MaxConcurrentCount: this.input.operationPreferences?.maxConcurrentCount,
            MaxConcurrentPercentage: this.input.operationPreferences?.maxConcurrentPercentage,
          },
          AdministrationRoleARN: this.input.administrationRoleArn,
          ExecutionRoleName: this.input.executionRoleName,
          DeploymentTargets: {
            Accounts: this.input.deploymentTargets?.accounts,
            OrganizationalUnitIds: this.input.deploymentTargets?.organizationalUnitIds,
          },
          PermissionModel: this.input.permissionModel,
          AutoDeployment: {
            Enabled: this.input.autoDeployment?.enabled,
            RetainStacksOnAccountRemoval: this.input.autoDeployment?.retainStacksOnAccountRemoval,
          },
          OperationId: this.input.operationId,
          Accounts: this.input.accounts,
          Regions: this.input.regions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStackSet.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class CloudFormationUpdateTerminationProtection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationUpdateTerminationProtectionInput) {
    super(scope, id);
  }

  public get stackId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTerminationProtection',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.UpdateTerminationProtection.StackId'),
        outputPath: 'StackId',
        parameters: {
          EnableTerminationProtection: this.input.enableTerminationProtection,
          StackName: this.input.stackName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateTerminationProtection.StackId', props);
    return resource.getResponseField('StackId') as unknown as string;
  }

}

export class CloudFormationValidateTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CloudFormationValidateTemplateInput) {
    super(scope, id);
  }

  public get parameters(): shapes.CloudFormationTemplateParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validateTemplate',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ValidateTemplate.Parameters'),
        outputPath: 'Parameters',
        parameters: {
          TemplateBody: this.input.templateBody,
          TemplateURL: this.input.templateUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ValidateTemplate.Parameters', props);
    return resource.getResponseField('Parameters') as unknown as shapes.CloudFormationTemplateParameter[];
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validateTemplate',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ValidateTemplate.Description'),
        outputPath: 'Description',
        parameters: {
          TemplateBody: this.input.templateBody,
          TemplateURL: this.input.templateUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ValidateTemplate.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get capabilities(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validateTemplate',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ValidateTemplate.Capabilities'),
        outputPath: 'Capabilities',
        parameters: {
          TemplateBody: this.input.templateBody,
          TemplateURL: this.input.templateUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ValidateTemplate.Capabilities', props);
    return resource.getResponseField('Capabilities') as unknown as string[];
  }

  public get capabilitiesReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validateTemplate',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ValidateTemplate.CapabilitiesReason'),
        outputPath: 'CapabilitiesReason',
        parameters: {
          TemplateBody: this.input.templateBody,
          TemplateURL: this.input.templateUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ValidateTemplate.CapabilitiesReason', props);
    return resource.getResponseField('CapabilitiesReason') as unknown as string;
  }

  public get declaredTransforms(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'validateTemplate',
        service: 'CloudFormation',
        physicalResourceId: cr.PhysicalResourceId.of('CloudFormation.ValidateTemplate.DeclaredTransforms'),
        outputPath: 'DeclaredTransforms',
        parameters: {
          TemplateBody: this.input.templateBody,
          TemplateURL: this.input.templateUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ValidateTemplate.DeclaredTransforms', props);
    return resource.getResponseField('DeclaredTransforms') as unknown as string[];
  }

}

