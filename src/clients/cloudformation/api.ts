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

  public createChangeSet(input: shapes.CloudFormationCreateChangeSetInput): CloudFormationResponsesCreateChangeSet {
    return new CloudFormationResponsesCreateChangeSet(this, this.__resources, input);
  }

  public createStack(input: shapes.CloudFormationCreateStackInput): CloudFormationResponsesCreateStack {
    return new CloudFormationResponsesCreateStack(this, this.__resources, input);
  }

  public createStackInstances(input: shapes.CloudFormationCreateStackInstancesInput): CloudFormationResponsesCreateStackInstances {
    return new CloudFormationResponsesCreateStackInstances(this, this.__resources, input);
  }

  public createStackSet(input: shapes.CloudFormationCreateStackSetInput): CloudFormationResponsesCreateStackSet {
    return new CloudFormationResponsesCreateStackSet(this, this.__resources, input);
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

  public deleteStackInstances(input: shapes.CloudFormationDeleteStackInstancesInput): CloudFormationResponsesDeleteStackInstances {
    return new CloudFormationResponsesDeleteStackInstances(this, this.__resources, input);
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

  public describeAccountLimits(input: shapes.CloudFormationDescribeAccountLimitsInput): CloudFormationResponsesDescribeAccountLimits {
    return new CloudFormationResponsesDescribeAccountLimits(this, this.__resources, input);
  }

  public describeChangeSet(input: shapes.CloudFormationDescribeChangeSetInput): CloudFormationResponsesDescribeChangeSet {
    return new CloudFormationResponsesDescribeChangeSet(this, this.__resources, input);
  }

  public describeStackDriftDetectionStatus(input: shapes.CloudFormationDescribeStackDriftDetectionStatusInput): CloudFormationResponsesDescribeStackDriftDetectionStatus {
    return new CloudFormationResponsesDescribeStackDriftDetectionStatus(this, this.__resources, input);
  }

  public describeStackEvents(input: shapes.CloudFormationDescribeStackEventsInput): CloudFormationResponsesDescribeStackEvents {
    return new CloudFormationResponsesDescribeStackEvents(this, this.__resources, input);
  }

  public describeStackInstance(input: shapes.CloudFormationDescribeStackInstanceInput): CloudFormationResponsesDescribeStackInstance {
    return new CloudFormationResponsesDescribeStackInstance(this, this.__resources, input);
  }

  public describeStackResource(input: shapes.CloudFormationDescribeStackResourceInput): CloudFormationResponsesDescribeStackResource {
    return new CloudFormationResponsesDescribeStackResource(this, this.__resources, input);
  }

  public describeStackResourceDrifts(input: shapes.CloudFormationDescribeStackResourceDriftsInput): CloudFormationResponsesDescribeStackResourceDrifts {
    return new CloudFormationResponsesDescribeStackResourceDrifts(this, this.__resources, input);
  }

  public describeStackResources(input: shapes.CloudFormationDescribeStackResourcesInput): CloudFormationResponsesDescribeStackResources {
    return new CloudFormationResponsesDescribeStackResources(this, this.__resources, input);
  }

  public describeStackSet(input: shapes.CloudFormationDescribeStackSetInput): CloudFormationResponsesDescribeStackSet {
    return new CloudFormationResponsesDescribeStackSet(this, this.__resources, input);
  }

  public describeStackSetOperation(input: shapes.CloudFormationDescribeStackSetOperationInput): CloudFormationResponsesDescribeStackSetOperation {
    return new CloudFormationResponsesDescribeStackSetOperation(this, this.__resources, input);
  }

  public describeStacks(input: shapes.CloudFormationDescribeStacksInput): CloudFormationResponsesDescribeStacks {
    return new CloudFormationResponsesDescribeStacks(this, this.__resources, input);
  }

  public describeType(input: shapes.CloudFormationDescribeTypeInput): CloudFormationResponsesDescribeType {
    return new CloudFormationResponsesDescribeType(this, this.__resources, input);
  }

  public describeTypeRegistration(input: shapes.CloudFormationDescribeTypeRegistrationInput): CloudFormationResponsesDescribeTypeRegistration {
    return new CloudFormationResponsesDescribeTypeRegistration(this, this.__resources, input);
  }

  public detectStackDrift(input: shapes.CloudFormationDetectStackDriftInput): CloudFormationResponsesDetectStackDrift {
    return new CloudFormationResponsesDetectStackDrift(this, this.__resources, input);
  }

  public detectStackResourceDrift(input: shapes.CloudFormationDetectStackResourceDriftInput): CloudFormationResponsesDetectStackResourceDrift {
    return new CloudFormationResponsesDetectStackResourceDrift(this, this.__resources, input);
  }

  public detectStackSetDrift(input: shapes.CloudFormationDetectStackSetDriftInput): CloudFormationResponsesDetectStackSetDrift {
    return new CloudFormationResponsesDetectStackSetDrift(this, this.__resources, input);
  }

  public estimateTemplateCost(input: shapes.CloudFormationEstimateTemplateCostInput): CloudFormationResponsesEstimateTemplateCost {
    return new CloudFormationResponsesEstimateTemplateCost(this, this.__resources, input);
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

  public fetchStackPolicy(input: shapes.CloudFormationGetStackPolicyInput): CloudFormationResponsesFetchStackPolicy {
    return new CloudFormationResponsesFetchStackPolicy(this, this.__resources, input);
  }

  public fetchTemplate(input: shapes.CloudFormationGetTemplateInput): CloudFormationResponsesFetchTemplate {
    return new CloudFormationResponsesFetchTemplate(this, this.__resources, input);
  }

  public fetchTemplateSummary(input: shapes.CloudFormationGetTemplateSummaryInput): CloudFormationResponsesFetchTemplateSummary {
    return new CloudFormationResponsesFetchTemplateSummary(this, this.__resources, input);
  }

  public listChangeSets(input: shapes.CloudFormationListChangeSetsInput): CloudFormationResponsesListChangeSets {
    return new CloudFormationResponsesListChangeSets(this, this.__resources, input);
  }

  public listExports(input: shapes.CloudFormationListExportsInput): CloudFormationResponsesListExports {
    return new CloudFormationResponsesListExports(this, this.__resources, input);
  }

  public listImports(input: shapes.CloudFormationListImportsInput): CloudFormationResponsesListImports {
    return new CloudFormationResponsesListImports(this, this.__resources, input);
  }

  public listStackInstances(input: shapes.CloudFormationListStackInstancesInput): CloudFormationResponsesListStackInstances {
    return new CloudFormationResponsesListStackInstances(this, this.__resources, input);
  }

  public listStackResources(input: shapes.CloudFormationListStackResourcesInput): CloudFormationResponsesListStackResources {
    return new CloudFormationResponsesListStackResources(this, this.__resources, input);
  }

  public listStackSetOperationResults(input: shapes.CloudFormationListStackSetOperationResultsInput): CloudFormationResponsesListStackSetOperationResults {
    return new CloudFormationResponsesListStackSetOperationResults(this, this.__resources, input);
  }

  public listStackSetOperations(input: shapes.CloudFormationListStackSetOperationsInput): CloudFormationResponsesListStackSetOperations {
    return new CloudFormationResponsesListStackSetOperations(this, this.__resources, input);
  }

  public listStackSets(input: shapes.CloudFormationListStackSetsInput): CloudFormationResponsesListStackSets {
    return new CloudFormationResponsesListStackSets(this, this.__resources, input);
  }

  public listStacks(input: shapes.CloudFormationListStacksInput): CloudFormationResponsesListStacks {
    return new CloudFormationResponsesListStacks(this, this.__resources, input);
  }

  public listTypeRegistrations(input: shapes.CloudFormationListTypeRegistrationsInput): CloudFormationResponsesListTypeRegistrations {
    return new CloudFormationResponsesListTypeRegistrations(this, this.__resources, input);
  }

  public listTypeVersions(input: shapes.CloudFormationListTypeVersionsInput): CloudFormationResponsesListTypeVersions {
    return new CloudFormationResponsesListTypeVersions(this, this.__resources, input);
  }

  public listTypes(input: shapes.CloudFormationListTypesInput): CloudFormationResponsesListTypes {
    return new CloudFormationResponsesListTypes(this, this.__resources, input);
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

  public registerType(input: shapes.CloudFormationRegisterTypeInput): CloudFormationResponsesRegisterType {
    return new CloudFormationResponsesRegisterType(this, this.__resources, input);
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

  public updateStack(input: shapes.CloudFormationUpdateStackInput): CloudFormationResponsesUpdateStack {
    return new CloudFormationResponsesUpdateStack(this, this.__resources, input);
  }

  public updateStackInstances(input: shapes.CloudFormationUpdateStackInstancesInput): CloudFormationResponsesUpdateStackInstances {
    return new CloudFormationResponsesUpdateStackInstances(this, this.__resources, input);
  }

  public updateStackSet(input: shapes.CloudFormationUpdateStackSetInput): CloudFormationResponsesUpdateStackSet {
    return new CloudFormationResponsesUpdateStackSet(this, this.__resources, input);
  }

  public updateTerminationProtection(input: shapes.CloudFormationUpdateTerminationProtectionInput): CloudFormationResponsesUpdateTerminationProtection {
    return new CloudFormationResponsesUpdateTerminationProtection(this, this.__resources, input);
  }

  public validateTemplate(input: shapes.CloudFormationValidateTemplateInput): CloudFormationResponsesValidateTemplate {
    return new CloudFormationResponsesValidateTemplate(this, this.__resources, input);
  }

}

export class CloudFormationResponsesCreateChangeSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationCreateChangeSetInput) {
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
          StackName: this.__input.stackName,
          TemplateBody: this.__input.templateBody,
          TemplateURL: this.__input.templateUrl,
          UsePreviousTemplate: this.__input.usePreviousTemplate,
          Parameters: this.__input.parameters,
          Capabilities: this.__input.capabilities,
          ResourceTypes: this.__input.resourceTypes,
          RoleARN: this.__input.roleArn,
          RollbackConfiguration: {
            RollbackTriggers: this.__input.rollbackConfiguration?.rollbackTriggers,
            MonitoringTimeInMinutes: this.__input.rollbackConfiguration?.monitoringTimeInMinutes,
          },
          NotificationARNs: this.__input.notificationArNs,
          Tags: this.__input.tags,
          ChangeSetName: this.__input.changeSetName,
          ClientToken: this.__input.clientToken,
          Description: this.__input.description,
          ChangeSetType: this.__input.changeSetType,
          ResourcesToImport: this.__input.resourcesToImport,
          IncludeNestedStacks: this.__input.includeNestedStacks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChangeSet.Id', props);
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
          StackName: this.__input.stackName,
          TemplateBody: this.__input.templateBody,
          TemplateURL: this.__input.templateUrl,
          UsePreviousTemplate: this.__input.usePreviousTemplate,
          Parameters: this.__input.parameters,
          Capabilities: this.__input.capabilities,
          ResourceTypes: this.__input.resourceTypes,
          RoleARN: this.__input.roleArn,
          RollbackConfiguration: {
            RollbackTriggers: this.__input.rollbackConfiguration?.rollbackTriggers,
            MonitoringTimeInMinutes: this.__input.rollbackConfiguration?.monitoringTimeInMinutes,
          },
          NotificationARNs: this.__input.notificationArNs,
          Tags: this.__input.tags,
          ChangeSetName: this.__input.changeSetName,
          ClientToken: this.__input.clientToken,
          Description: this.__input.description,
          ChangeSetType: this.__input.changeSetType,
          ResourcesToImport: this.__input.resourcesToImport,
          IncludeNestedStacks: this.__input.includeNestedStacks,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChangeSet.StackId', props);
    return resource.getResponseField('StackId') as unknown as string;
  }

}

export class CloudFormationResponsesCreateStack {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationCreateStackInput) {
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
          StackName: this.__input.stackName,
          TemplateBody: this.__input.templateBody,
          TemplateURL: this.__input.templateUrl,
          Parameters: this.__input.parameters,
          DisableRollback: this.__input.disableRollback,
          RollbackConfiguration: {
            RollbackTriggers: this.__input.rollbackConfiguration?.rollbackTriggers,
            MonitoringTimeInMinutes: this.__input.rollbackConfiguration?.monitoringTimeInMinutes,
          },
          TimeoutInMinutes: this.__input.timeoutInMinutes,
          NotificationARNs: this.__input.notificationArNs,
          Capabilities: this.__input.capabilities,
          ResourceTypes: this.__input.resourceTypes,
          RoleARN: this.__input.roleArn,
          OnFailure: this.__input.onFailure,
          StackPolicyBody: this.__input.stackPolicyBody,
          StackPolicyURL: this.__input.stackPolicyUrl,
          Tags: this.__input.tags,
          ClientRequestToken: this.__input.clientRequestToken,
          EnableTerminationProtection: this.__input.enableTerminationProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStack.StackId', props);
    return resource.getResponseField('StackId') as unknown as string;
  }

}

export class CloudFormationResponsesCreateStackInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationCreateStackInstancesInput) {
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
          StackSetName: this.__input.stackSetName,
          Accounts: this.__input.accounts,
          DeploymentTargets: {
            Accounts: this.__input.deploymentTargets?.accounts,
            OrganizationalUnitIds: this.__input.deploymentTargets?.organizationalUnitIds,
          },
          Regions: this.__input.regions,
          ParameterOverrides: this.__input.parameterOverrides,
          OperationPreferences: {
            RegionOrder: this.__input.operationPreferences?.regionOrder,
            FailureToleranceCount: this.__input.operationPreferences?.failureToleranceCount,
            FailureTolerancePercentage: this.__input.operationPreferences?.failureTolerancePercentage,
            MaxConcurrentCount: this.__input.operationPreferences?.maxConcurrentCount,
            MaxConcurrentPercentage: this.__input.operationPreferences?.maxConcurrentPercentage,
          },
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStackInstances.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class CloudFormationResponsesCreateStackSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationCreateStackSetInput) {
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
          StackSetName: this.__input.stackSetName,
          Description: this.__input.description,
          TemplateBody: this.__input.templateBody,
          TemplateURL: this.__input.templateUrl,
          Parameters: this.__input.parameters,
          Capabilities: this.__input.capabilities,
          Tags: this.__input.tags,
          AdministrationRoleARN: this.__input.administrationRoleArn,
          ExecutionRoleName: this.__input.executionRoleName,
          PermissionModel: this.__input.permissionModel,
          AutoDeployment: {
            Enabled: this.__input.autoDeployment?.enabled,
            RetainStacksOnAccountRemoval: this.__input.autoDeployment?.retainStacksOnAccountRemoval,
          },
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStackSet.StackSetId', props);
    return resource.getResponseField('StackSetId') as unknown as string;
  }

}

export class CloudFormationResponsesDeleteStackInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDeleteStackInstancesInput) {
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
          StackSetName: this.__input.stackSetName,
          Accounts: this.__input.accounts,
          DeploymentTargets: {
            Accounts: this.__input.deploymentTargets?.accounts,
            OrganizationalUnitIds: this.__input.deploymentTargets?.organizationalUnitIds,
          },
          Regions: this.__input.regions,
          OperationPreferences: {
            RegionOrder: this.__input.operationPreferences?.regionOrder,
            FailureToleranceCount: this.__input.operationPreferences?.failureToleranceCount,
            FailureTolerancePercentage: this.__input.operationPreferences?.failureTolerancePercentage,
            MaxConcurrentCount: this.__input.operationPreferences?.maxConcurrentCount,
            MaxConcurrentPercentage: this.__input.operationPreferences?.maxConcurrentPercentage,
          },
          RetainStacks: this.__input.retainStacks,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteStackInstances.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class CloudFormationResponsesDescribeAccountLimits {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeAccountLimitsInput) {
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
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountLimits.AccountLimits', props);
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
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountLimits.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationResponsesDescribeChangeSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeChangeSetInput) {
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
          ChangeSetName: this.__input.changeSetName,
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.ChangeSetName', props);
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
          ChangeSetName: this.__input.changeSetName,
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.ChangeSetId', props);
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
          ChangeSetName: this.__input.changeSetName,
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.StackId', props);
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
          ChangeSetName: this.__input.changeSetName,
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.StackName', props);
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
          ChangeSetName: this.__input.changeSetName,
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.Description', props);
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
          ChangeSetName: this.__input.changeSetName,
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.Parameters', props);
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
          ChangeSetName: this.__input.changeSetName,
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.CreationTime', props);
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
          ChangeSetName: this.__input.changeSetName,
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.ExecutionStatus', props);
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
          ChangeSetName: this.__input.changeSetName,
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.Status', props);
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
          ChangeSetName: this.__input.changeSetName,
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.StatusReason', props);
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
          ChangeSetName: this.__input.changeSetName,
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.NotificationARNs', props);
    return resource.getResponseField('NotificationARNs') as unknown as string[];
  }

  public get rollbackConfiguration(): CloudFormationResponsesDescribeChangeSetRollbackConfiguration {
    return new CloudFormationResponsesDescribeChangeSetRollbackConfiguration(this.__scope, this.__resources, this.__input);
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
          ChangeSetName: this.__input.changeSetName,
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.Capabilities', props);
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
          ChangeSetName: this.__input.changeSetName,
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.Tags', props);
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
          ChangeSetName: this.__input.changeSetName,
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.Changes', props);
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
          ChangeSetName: this.__input.changeSetName,
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.NextToken', props);
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
          ChangeSetName: this.__input.changeSetName,
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.IncludeNestedStacks', props);
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
          ChangeSetName: this.__input.changeSetName,
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.ParentChangeSetId', props);
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
          ChangeSetName: this.__input.changeSetName,
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.RootChangeSetId', props);
    return resource.getResponseField('RootChangeSetId') as unknown as string;
  }

}

export class CloudFormationResponsesDescribeChangeSetRollbackConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeChangeSetInput) {
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
          ChangeSetName: this.__input.changeSetName,
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.RollbackConfiguration.RollbackTriggers', props);
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
          ChangeSetName: this.__input.changeSetName,
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChangeSet.RollbackConfiguration.MonitoringTimeInMinutes', props);
    return resource.getResponseField('RollbackConfiguration.MonitoringTimeInMinutes') as unknown as number;
  }

}

export class CloudFormationResponsesDescribeStackDriftDetectionStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeStackDriftDetectionStatusInput) {
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
          StackDriftDetectionId: this.__input.stackDriftDetectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackDriftDetectionStatus.StackId', props);
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
          StackDriftDetectionId: this.__input.stackDriftDetectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackDriftDetectionStatus.StackDriftDetectionId', props);
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
          StackDriftDetectionId: this.__input.stackDriftDetectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackDriftDetectionStatus.StackDriftStatus', props);
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
          StackDriftDetectionId: this.__input.stackDriftDetectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackDriftDetectionStatus.DetectionStatus', props);
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
          StackDriftDetectionId: this.__input.stackDriftDetectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackDriftDetectionStatus.DetectionStatusReason', props);
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
          StackDriftDetectionId: this.__input.stackDriftDetectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackDriftDetectionStatus.DriftedStackResourceCount', props);
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
          StackDriftDetectionId: this.__input.stackDriftDetectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackDriftDetectionStatus.Timestamp', props);
    return resource.getResponseField('Timestamp') as unknown as string;
  }

}

export class CloudFormationResponsesDescribeStackEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeStackEventsInput) {
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
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackEvents.StackEvents', props);
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
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackEvents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationResponsesDescribeStackInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeStackInstanceInput) {
  }

  public get stackInstance(): CloudFormationResponsesDescribeStackInstanceStackInstance {
    return new CloudFormationResponsesDescribeStackInstanceStackInstance(this.__scope, this.__resources, this.__input);
  }

}

export class CloudFormationResponsesDescribeStackInstanceStackInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeStackInstanceInput) {
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
          StackSetName: this.__input.stackSetName,
          StackInstanceAccount: this.__input.stackInstanceAccount,
          StackInstanceRegion: this.__input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackInstance.StackInstance.StackSetId', props);
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
          StackSetName: this.__input.stackSetName,
          StackInstanceAccount: this.__input.stackInstanceAccount,
          StackInstanceRegion: this.__input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackInstance.StackInstance.Region', props);
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
          StackSetName: this.__input.stackSetName,
          StackInstanceAccount: this.__input.stackInstanceAccount,
          StackInstanceRegion: this.__input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackInstance.StackInstance.Account', props);
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
          StackSetName: this.__input.stackSetName,
          StackInstanceAccount: this.__input.stackInstanceAccount,
          StackInstanceRegion: this.__input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackInstance.StackInstance.StackId', props);
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
          StackSetName: this.__input.stackSetName,
          StackInstanceAccount: this.__input.stackInstanceAccount,
          StackInstanceRegion: this.__input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackInstance.StackInstance.ParameterOverrides', props);
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
          StackSetName: this.__input.stackSetName,
          StackInstanceAccount: this.__input.stackInstanceAccount,
          StackInstanceRegion: this.__input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackInstance.StackInstance.Status', props);
    return resource.getResponseField('StackInstance.Status') as unknown as string;
  }

  public get stackInstanceStatus(): CloudFormationResponsesDescribeStackInstanceStackInstanceStackInstanceStatus {
    return new CloudFormationResponsesDescribeStackInstanceStackInstanceStackInstanceStatus(this.__scope, this.__resources, this.__input);
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
          StackSetName: this.__input.stackSetName,
          StackInstanceAccount: this.__input.stackInstanceAccount,
          StackInstanceRegion: this.__input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackInstance.StackInstance.StatusReason', props);
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
          StackSetName: this.__input.stackSetName,
          StackInstanceAccount: this.__input.stackInstanceAccount,
          StackInstanceRegion: this.__input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackInstance.StackInstance.OrganizationalUnitId', props);
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
          StackSetName: this.__input.stackSetName,
          StackInstanceAccount: this.__input.stackInstanceAccount,
          StackInstanceRegion: this.__input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackInstance.StackInstance.DriftStatus', props);
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
          StackSetName: this.__input.stackSetName,
          StackInstanceAccount: this.__input.stackInstanceAccount,
          StackInstanceRegion: this.__input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackInstance.StackInstance.LastDriftCheckTimestamp', props);
    return resource.getResponseField('StackInstance.LastDriftCheckTimestamp') as unknown as string;
  }

}

export class CloudFormationResponsesDescribeStackInstanceStackInstanceStackInstanceStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeStackInstanceInput) {
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
          StackSetName: this.__input.stackSetName,
          StackInstanceAccount: this.__input.stackInstanceAccount,
          StackInstanceRegion: this.__input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackInstance.StackInstance.StackInstanceStatus.DetailedStatus', props);
    return resource.getResponseField('StackInstance.StackInstanceStatus.DetailedStatus') as unknown as string;
  }

}

export class CloudFormationResponsesDescribeStackResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeStackResourceInput) {
  }

  public get stackResourceDetail(): CloudFormationResponsesDescribeStackResourceStackResourceDetail {
    return new CloudFormationResponsesDescribeStackResourceStackResourceDetail(this.__scope, this.__resources, this.__input);
  }

}

export class CloudFormationResponsesDescribeStackResourceStackResourceDetail {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeStackResourceInput) {
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackResource.StackResourceDetail.StackName', props);
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackResource.StackResourceDetail.StackId', props);
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackResource.StackResourceDetail.LogicalResourceId', props);
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackResource.StackResourceDetail.PhysicalResourceId', props);
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackResource.StackResourceDetail.ResourceType', props);
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackResource.StackResourceDetail.LastUpdatedTimestamp', props);
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackResource.StackResourceDetail.ResourceStatus', props);
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackResource.StackResourceDetail.ResourceStatusReason', props);
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackResource.StackResourceDetail.Description', props);
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackResource.StackResourceDetail.Metadata', props);
    return resource.getResponseField('StackResourceDetail.Metadata') as unknown as string;
  }

  public get driftInformation(): CloudFormationResponsesDescribeStackResourceStackResourceDetailDriftInformation {
    return new CloudFormationResponsesDescribeStackResourceStackResourceDetailDriftInformation(this.__scope, this.__resources, this.__input);
  }

  public get moduleInfo(): CloudFormationResponsesDescribeStackResourceStackResourceDetailModuleInfo {
    return new CloudFormationResponsesDescribeStackResourceStackResourceDetailModuleInfo(this.__scope, this.__resources, this.__input);
  }

}

export class CloudFormationResponsesDescribeStackResourceStackResourceDetailDriftInformation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeStackResourceInput) {
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackResource.StackResourceDetail.DriftInformation.StackResourceDriftStatus', props);
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackResource.StackResourceDetail.DriftInformation.LastCheckTimestamp', props);
    return resource.getResponseField('StackResourceDetail.DriftInformation.LastCheckTimestamp') as unknown as string;
  }

}

export class CloudFormationResponsesDescribeStackResourceStackResourceDetailModuleInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeStackResourceInput) {
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackResource.StackResourceDetail.ModuleInfo.TypeHierarchy', props);
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackResource.StackResourceDetail.ModuleInfo.LogicalIdHierarchy', props);
    return resource.getResponseField('StackResourceDetail.ModuleInfo.LogicalIdHierarchy') as unknown as string;
  }

}

export class CloudFormationResponsesDescribeStackResourceDrifts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeStackResourceDriftsInput) {
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
          StackName: this.__input.stackName,
          StackResourceDriftStatusFilters: this.__input.stackResourceDriftStatusFilters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackResourceDrifts.StackResourceDrifts', props);
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
          StackName: this.__input.stackName,
          StackResourceDriftStatusFilters: this.__input.stackResourceDriftStatusFilters,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackResourceDrifts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationResponsesDescribeStackResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeStackResourcesInput) {
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
          PhysicalResourceId: this.__input.physicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackResources.StackResources', props);
    return resource.getResponseField('StackResources') as unknown as shapes.CloudFormationStackResource[];
  }

}

export class CloudFormationResponsesDescribeStackSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeStackSetInput) {
  }

  public get stackSet(): CloudFormationResponsesDescribeStackSetStackSet {
    return new CloudFormationResponsesDescribeStackSetStackSet(this.__scope, this.__resources, this.__input);
  }

}

export class CloudFormationResponsesDescribeStackSetStackSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeStackSetInput) {
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.StackSetName', props);
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.StackSetId', props);
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.Description', props);
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.Status', props);
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.TemplateBody', props);
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.Parameters', props);
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.Capabilities', props);
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.Tags', props);
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.StackSetARN', props);
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.AdministrationRoleARN', props);
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.ExecutionRoleName', props);
    return resource.getResponseField('StackSet.ExecutionRoleName') as unknown as string;
  }

  public get stackSetDriftDetectionDetails(): CloudFormationResponsesDescribeStackSetStackSetStackSetDriftDetectionDetails {
    return new CloudFormationResponsesDescribeStackSetStackSetStackSetDriftDetectionDetails(this.__scope, this.__resources, this.__input);
  }

  public get autoDeployment(): CloudFormationResponsesDescribeStackSetStackSetAutoDeployment {
    return new CloudFormationResponsesDescribeStackSetStackSetAutoDeployment(this.__scope, this.__resources, this.__input);
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.PermissionModel', props);
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.OrganizationalUnitIds', props);
    return resource.getResponseField('StackSet.OrganizationalUnitIds') as unknown as string[];
  }

}

export class CloudFormationResponsesDescribeStackSetStackSetStackSetDriftDetectionDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeStackSetInput) {
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.StackSetDriftDetectionDetails.DriftStatus', props);
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.StackSetDriftDetectionDetails.DriftDetectionStatus', props);
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.StackSetDriftDetectionDetails.LastDriftCheckTimestamp', props);
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.StackSetDriftDetectionDetails.TotalStackInstancesCount', props);
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.StackSetDriftDetectionDetails.DriftedStackInstancesCount', props);
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.StackSetDriftDetectionDetails.InSyncStackInstancesCount', props);
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.StackSetDriftDetectionDetails.InProgressStackInstancesCount', props);
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.StackSetDriftDetectionDetails.FailedStackInstancesCount', props);
    return resource.getResponseField('StackSet.StackSetDriftDetectionDetails.FailedStackInstancesCount') as unknown as number;
  }

}

export class CloudFormationResponsesDescribeStackSetStackSetAutoDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeStackSetInput) {
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.AutoDeployment.Enabled', props);
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
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSet.StackSet.AutoDeployment.RetainStacksOnAccountRemoval', props);
    return resource.getResponseField('StackSet.AutoDeployment.RetainStacksOnAccountRemoval') as unknown as boolean;
  }

}

export class CloudFormationResponsesDescribeStackSetOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeStackSetOperationInput) {
  }

  public get stackSetOperation(): CloudFormationResponsesDescribeStackSetOperationStackSetOperation {
    return new CloudFormationResponsesDescribeStackSetOperationStackSetOperation(this.__scope, this.__resources, this.__input);
  }

}

export class CloudFormationResponsesDescribeStackSetOperationStackSetOperation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeStackSetOperationInput) {
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.OperationId', props);
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.StackSetId', props);
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.Action', props);
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.Status', props);
    return resource.getResponseField('StackSetOperation.Status') as unknown as string;
  }

  public get operationPreferences(): CloudFormationResponsesDescribeStackSetOperationStackSetOperationOperationPreferences {
    return new CloudFormationResponsesDescribeStackSetOperationStackSetOperationOperationPreferences(this.__scope, this.__resources, this.__input);
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.RetainStacks', props);
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.AdministrationRoleARN', props);
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.ExecutionRoleName', props);
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.CreationTimestamp', props);
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.EndTimestamp', props);
    return resource.getResponseField('StackSetOperation.EndTimestamp') as unknown as string;
  }

  public get deploymentTargets(): CloudFormationResponsesDescribeStackSetOperationStackSetOperationDeploymentTargets {
    return new CloudFormationResponsesDescribeStackSetOperationStackSetOperationDeploymentTargets(this.__scope, this.__resources, this.__input);
  }

  public get stackSetDriftDetectionDetails(): CloudFormationResponsesDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails {
    return new CloudFormationResponsesDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails(this.__scope, this.__resources, this.__input);
  }

}

export class CloudFormationResponsesDescribeStackSetOperationStackSetOperationOperationPreferences {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeStackSetOperationInput) {
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.OperationPreferences.RegionOrder', props);
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.OperationPreferences.FailureToleranceCount', props);
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.OperationPreferences.FailureTolerancePercentage', props);
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.OperationPreferences.MaxConcurrentCount', props);
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.OperationPreferences.MaxConcurrentPercentage', props);
    return resource.getResponseField('StackSetOperation.OperationPreferences.MaxConcurrentPercentage') as unknown as number;
  }

}

export class CloudFormationResponsesDescribeStackSetOperationStackSetOperationDeploymentTargets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeStackSetOperationInput) {
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.DeploymentTargets.Accounts', props);
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.DeploymentTargets.OrganizationalUnitIds', props);
    return resource.getResponseField('StackSetOperation.DeploymentTargets.OrganizationalUnitIds') as unknown as string[];
  }

}

export class CloudFormationResponsesDescribeStackSetOperationStackSetOperationStackSetDriftDetectionDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeStackSetOperationInput) {
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.DriftStatus', props);
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.DriftDetectionStatus', props);
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.LastDriftCheckTimestamp', props);
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.TotalStackInstancesCount', props);
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.DriftedStackInstancesCount', props);
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.InSyncStackInstancesCount', props);
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.InProgressStackInstancesCount', props);
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSetOperation.StackSetOperation.StackSetDriftDetectionDetails.FailedStackInstancesCount', props);
    return resource.getResponseField('StackSetOperation.StackSetDriftDetectionDetails.FailedStackInstancesCount') as unknown as number;
  }

}

export class CloudFormationResponsesDescribeStacks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeStacksInput) {
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
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStacks.Stacks', props);
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
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStacks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationResponsesDescribeType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeTypeInput) {
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          Arn: this.__input.arn,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeType.Arn', props);
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          Arn: this.__input.arn,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeType.Type', props);
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          Arn: this.__input.arn,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeType.TypeName', props);
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          Arn: this.__input.arn,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeType.DefaultVersionId', props);
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          Arn: this.__input.arn,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeType.IsDefaultVersion', props);
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          Arn: this.__input.arn,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeType.Description', props);
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          Arn: this.__input.arn,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeType.Schema', props);
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          Arn: this.__input.arn,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeType.ProvisioningType', props);
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          Arn: this.__input.arn,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeType.DeprecatedStatus', props);
    return resource.getResponseField('DeprecatedStatus') as unknown as string;
  }

  public get loggingConfig(): CloudFormationResponsesDescribeTypeLoggingConfig {
    return new CloudFormationResponsesDescribeTypeLoggingConfig(this.__scope, this.__resources, this.__input);
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          Arn: this.__input.arn,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeType.ExecutionRoleArn', props);
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          Arn: this.__input.arn,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeType.Visibility', props);
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          Arn: this.__input.arn,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeType.SourceUrl', props);
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          Arn: this.__input.arn,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeType.DocumentationUrl', props);
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          Arn: this.__input.arn,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeType.LastUpdated', props);
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          Arn: this.__input.arn,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeType.TimeCreated', props);
    return resource.getResponseField('TimeCreated') as unknown as string;
  }

}

export class CloudFormationResponsesDescribeTypeLoggingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeTypeInput) {
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          Arn: this.__input.arn,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeType.LoggingConfig.LogRoleArn', props);
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          Arn: this.__input.arn,
          VersionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeType.LoggingConfig.LogGroupName', props);
    return resource.getResponseField('LoggingConfig.LogGroupName') as unknown as string;
  }

}

export class CloudFormationResponsesDescribeTypeRegistration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDescribeTypeRegistrationInput) {
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
          RegistrationToken: this.__input.registrationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTypeRegistration.ProgressStatus', props);
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
          RegistrationToken: this.__input.registrationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTypeRegistration.Description', props);
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
          RegistrationToken: this.__input.registrationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTypeRegistration.TypeArn', props);
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
          RegistrationToken: this.__input.registrationToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTypeRegistration.TypeVersionArn', props);
    return resource.getResponseField('TypeVersionArn') as unknown as string;
  }

}

export class CloudFormationResponsesDetectStackDrift {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDetectStackDriftInput) {
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
          StackName: this.__input.stackName,
          LogicalResourceIds: this.__input.logicalResourceIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectStackDrift.StackDriftDetectionId', props);
    return resource.getResponseField('StackDriftDetectionId') as unknown as string;
  }

}

export class CloudFormationResponsesDetectStackResourceDrift {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDetectStackResourceDriftInput) {
  }

  public get stackResourceDrift(): CloudFormationResponsesDetectStackResourceDriftStackResourceDrift {
    return new CloudFormationResponsesDetectStackResourceDriftStackResourceDrift(this.__scope, this.__resources, this.__input);
  }

}

export class CloudFormationResponsesDetectStackResourceDriftStackResourceDrift {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDetectStackResourceDriftInput) {
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectStackResourceDrift.StackResourceDrift.StackId', props);
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectStackResourceDrift.StackResourceDrift.LogicalResourceId', props);
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectStackResourceDrift.StackResourceDrift.PhysicalResourceId', props);
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectStackResourceDrift.StackResourceDrift.PhysicalResourceIdContext', props);
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectStackResourceDrift.StackResourceDrift.ResourceType', props);
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectStackResourceDrift.StackResourceDrift.ExpectedProperties', props);
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectStackResourceDrift.StackResourceDrift.ActualProperties', props);
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectStackResourceDrift.StackResourceDrift.PropertyDifferences', props);
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectStackResourceDrift.StackResourceDrift.StackResourceDriftStatus', props);
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectStackResourceDrift.StackResourceDrift.Timestamp', props);
    return resource.getResponseField('StackResourceDrift.Timestamp') as unknown as string;
  }

  public get moduleInfo(): CloudFormationResponsesDetectStackResourceDriftStackResourceDriftModuleInfo {
    return new CloudFormationResponsesDetectStackResourceDriftStackResourceDriftModuleInfo(this.__scope, this.__resources, this.__input);
  }

}

export class CloudFormationResponsesDetectStackResourceDriftStackResourceDriftModuleInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDetectStackResourceDriftInput) {
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectStackResourceDrift.StackResourceDrift.ModuleInfo.TypeHierarchy', props);
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
          StackName: this.__input.stackName,
          LogicalResourceId: this.__input.logicalResourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectStackResourceDrift.StackResourceDrift.ModuleInfo.LogicalIdHierarchy', props);
    return resource.getResponseField('StackResourceDrift.ModuleInfo.LogicalIdHierarchy') as unknown as string;
  }

}

export class CloudFormationResponsesDetectStackSetDrift {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationDetectStackSetDriftInput) {
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
          StackSetName: this.__input.stackSetName,
          OperationPreferences: {
            RegionOrder: this.__input.operationPreferences?.regionOrder,
            FailureToleranceCount: this.__input.operationPreferences?.failureToleranceCount,
            FailureTolerancePercentage: this.__input.operationPreferences?.failureTolerancePercentage,
            MaxConcurrentCount: this.__input.operationPreferences?.maxConcurrentCount,
            MaxConcurrentPercentage: this.__input.operationPreferences?.maxConcurrentPercentage,
          },
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DetectStackSetDrift.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class CloudFormationResponsesEstimateTemplateCost {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationEstimateTemplateCostInput) {
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
          TemplateBody: this.__input.templateBody,
          TemplateURL: this.__input.templateUrl,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'EstimateTemplateCost.Url', props);
    return resource.getResponseField('Url') as unknown as string;
  }

}

export class CloudFormationResponsesFetchStackPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationGetStackPolicyInput) {
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
          StackName: this.__input.stackName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetStackPolicy.StackPolicyBody', props);
    return resource.getResponseField('StackPolicyBody') as unknown as string;
  }

}

export class CloudFormationResponsesFetchTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationGetTemplateInput) {
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
          StackName: this.__input.stackName,
          ChangeSetName: this.__input.changeSetName,
          TemplateStage: this.__input.templateStage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTemplate.TemplateBody', props);
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
          StackName: this.__input.stackName,
          ChangeSetName: this.__input.changeSetName,
          TemplateStage: this.__input.templateStage,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTemplate.StagesAvailable', props);
    return resource.getResponseField('StagesAvailable') as unknown as string[];
  }

}

export class CloudFormationResponsesFetchTemplateSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationGetTemplateSummaryInput) {
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
          TemplateBody: this.__input.templateBody,
          TemplateURL: this.__input.templateUrl,
          StackName: this.__input.stackName,
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTemplateSummary.Parameters', props);
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
          TemplateBody: this.__input.templateBody,
          TemplateURL: this.__input.templateUrl,
          StackName: this.__input.stackName,
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTemplateSummary.Description', props);
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
          TemplateBody: this.__input.templateBody,
          TemplateURL: this.__input.templateUrl,
          StackName: this.__input.stackName,
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTemplateSummary.Capabilities', props);
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
          TemplateBody: this.__input.templateBody,
          TemplateURL: this.__input.templateUrl,
          StackName: this.__input.stackName,
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTemplateSummary.CapabilitiesReason', props);
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
          TemplateBody: this.__input.templateBody,
          TemplateURL: this.__input.templateUrl,
          StackName: this.__input.stackName,
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTemplateSummary.ResourceTypes', props);
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
          TemplateBody: this.__input.templateBody,
          TemplateURL: this.__input.templateUrl,
          StackName: this.__input.stackName,
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTemplateSummary.Version', props);
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
          TemplateBody: this.__input.templateBody,
          TemplateURL: this.__input.templateUrl,
          StackName: this.__input.stackName,
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTemplateSummary.Metadata', props);
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
          TemplateBody: this.__input.templateBody,
          TemplateURL: this.__input.templateUrl,
          StackName: this.__input.stackName,
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTemplateSummary.DeclaredTransforms', props);
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
          TemplateBody: this.__input.templateBody,
          TemplateURL: this.__input.templateUrl,
          StackName: this.__input.stackName,
          StackSetName: this.__input.stackSetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetTemplateSummary.ResourceIdentifierSummaries', props);
    return resource.getResponseField('ResourceIdentifierSummaries') as unknown as shapes.CloudFormationResourceIdentifierSummary[];
  }

}

export class CloudFormationResponsesListChangeSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationListChangeSetsInput) {
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
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChangeSets.Summaries', props);
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
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChangeSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationResponsesListExports {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationListExportsInput) {
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
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListExports.Exports', props);
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
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListExports.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationResponsesListImports {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationListImportsInput) {
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
          ExportName: this.__input.exportName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImports.Imports', props);
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
          ExportName: this.__input.exportName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListImports.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationResponsesListStackInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationListStackInstancesInput) {
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
          StackSetName: this.__input.stackSetName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          StackInstanceAccount: this.__input.stackInstanceAccount,
          StackInstanceRegion: this.__input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStackInstances.Summaries', props);
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
          StackSetName: this.__input.stackSetName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Filters: this.__input.filters,
          StackInstanceAccount: this.__input.stackInstanceAccount,
          StackInstanceRegion: this.__input.stackInstanceRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStackInstances.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationResponsesListStackResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationListStackResourcesInput) {
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
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStackResources.StackResourceSummaries', props);
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
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStackResources.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationResponsesListStackSetOperationResults {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationListStackSetOperationResultsInput) {
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStackSetOperationResults.Summaries', props);
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
          StackSetName: this.__input.stackSetName,
          OperationId: this.__input.operationId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStackSetOperationResults.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationResponsesListStackSetOperations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationListStackSetOperationsInput) {
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
          StackSetName: this.__input.stackSetName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStackSetOperations.Summaries', props);
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
          StackSetName: this.__input.stackSetName,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStackSetOperations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationResponsesListStackSets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationListStackSetsInput) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStackSets.Summaries', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
          Status: this.__input.status,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStackSets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationResponsesListStacks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationListStacksInput) {
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
          NextToken: this.__input.nextToken,
          StackStatusFilter: this.__input.stackStatusFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStacks.StackSummaries', props);
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
          NextToken: this.__input.nextToken,
          StackStatusFilter: this.__input.stackStatusFilter,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListStacks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationResponsesListTypeRegistrations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationListTypeRegistrationsInput) {
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          TypeArn: this.__input.typeArn,
          RegistrationStatusFilter: this.__input.registrationStatusFilter,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTypeRegistrations.RegistrationTokenList', props);
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          TypeArn: this.__input.typeArn,
          RegistrationStatusFilter: this.__input.registrationStatusFilter,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTypeRegistrations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationResponsesListTypeVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationListTypeVersionsInput) {
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          Arn: this.__input.arn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          DeprecatedStatus: this.__input.deprecatedStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTypeVersions.TypeVersionSummaries', props);
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          Arn: this.__input.arn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          DeprecatedStatus: this.__input.deprecatedStatus,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTypeVersions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationResponsesListTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationListTypesInput) {
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
          Visibility: this.__input.visibility,
          ProvisioningType: this.__input.provisioningType,
          DeprecatedStatus: this.__input.deprecatedStatus,
          Type: this.__input.type,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTypes.TypeSummaries', props);
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
          Visibility: this.__input.visibility,
          ProvisioningType: this.__input.provisioningType,
          DeprecatedStatus: this.__input.deprecatedStatus,
          Type: this.__input.type,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTypes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CloudFormationResponsesRegisterType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationRegisterTypeInput) {
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
          Type: this.__input.type,
          TypeName: this.__input.typeName,
          SchemaHandlerPackage: this.__input.schemaHandlerPackage,
          LoggingConfig: {
            LogRoleArn: this.__input.loggingConfig?.logRoleArn,
            LogGroupName: this.__input.loggingConfig?.logGroupName,
          },
          ExecutionRoleArn: this.__input.executionRoleArn,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterType.RegistrationToken', props);
    return resource.getResponseField('RegistrationToken') as unknown as string;
  }

}

export class CloudFormationResponsesUpdateStack {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationUpdateStackInput) {
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
          StackName: this.__input.stackName,
          TemplateBody: this.__input.templateBody,
          TemplateURL: this.__input.templateUrl,
          UsePreviousTemplate: this.__input.usePreviousTemplate,
          StackPolicyDuringUpdateBody: this.__input.stackPolicyDuringUpdateBody,
          StackPolicyDuringUpdateURL: this.__input.stackPolicyDuringUpdateUrl,
          Parameters: this.__input.parameters,
          Capabilities: this.__input.capabilities,
          ResourceTypes: this.__input.resourceTypes,
          RoleARN: this.__input.roleArn,
          RollbackConfiguration: {
            RollbackTriggers: this.__input.rollbackConfiguration?.rollbackTriggers,
            MonitoringTimeInMinutes: this.__input.rollbackConfiguration?.monitoringTimeInMinutes,
          },
          StackPolicyBody: this.__input.stackPolicyBody,
          StackPolicyURL: this.__input.stackPolicyUrl,
          NotificationARNs: this.__input.notificationArNs,
          Tags: this.__input.tags,
          ClientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStack.StackId', props);
    return resource.getResponseField('StackId') as unknown as string;
  }

}

export class CloudFormationResponsesUpdateStackInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationUpdateStackInstancesInput) {
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
          StackSetName: this.__input.stackSetName,
          Accounts: this.__input.accounts,
          DeploymentTargets: {
            Accounts: this.__input.deploymentTargets?.accounts,
            OrganizationalUnitIds: this.__input.deploymentTargets?.organizationalUnitIds,
          },
          Regions: this.__input.regions,
          ParameterOverrides: this.__input.parameterOverrides,
          OperationPreferences: {
            RegionOrder: this.__input.operationPreferences?.regionOrder,
            FailureToleranceCount: this.__input.operationPreferences?.failureToleranceCount,
            FailureTolerancePercentage: this.__input.operationPreferences?.failureTolerancePercentage,
            MaxConcurrentCount: this.__input.operationPreferences?.maxConcurrentCount,
            MaxConcurrentPercentage: this.__input.operationPreferences?.maxConcurrentPercentage,
          },
          OperationId: this.__input.operationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStackInstances.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class CloudFormationResponsesUpdateStackSet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationUpdateStackSetInput) {
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
          StackSetName: this.__input.stackSetName,
          Description: this.__input.description,
          TemplateBody: this.__input.templateBody,
          TemplateURL: this.__input.templateUrl,
          UsePreviousTemplate: this.__input.usePreviousTemplate,
          Parameters: this.__input.parameters,
          Capabilities: this.__input.capabilities,
          Tags: this.__input.tags,
          OperationPreferences: {
            RegionOrder: this.__input.operationPreferences?.regionOrder,
            FailureToleranceCount: this.__input.operationPreferences?.failureToleranceCount,
            FailureTolerancePercentage: this.__input.operationPreferences?.failureTolerancePercentage,
            MaxConcurrentCount: this.__input.operationPreferences?.maxConcurrentCount,
            MaxConcurrentPercentage: this.__input.operationPreferences?.maxConcurrentPercentage,
          },
          AdministrationRoleARN: this.__input.administrationRoleArn,
          ExecutionRoleName: this.__input.executionRoleName,
          DeploymentTargets: {
            Accounts: this.__input.deploymentTargets?.accounts,
            OrganizationalUnitIds: this.__input.deploymentTargets?.organizationalUnitIds,
          },
          PermissionModel: this.__input.permissionModel,
          AutoDeployment: {
            Enabled: this.__input.autoDeployment?.enabled,
            RetainStacksOnAccountRemoval: this.__input.autoDeployment?.retainStacksOnAccountRemoval,
          },
          OperationId: this.__input.operationId,
          Accounts: this.__input.accounts,
          Regions: this.__input.regions,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStackSet.OperationId', props);
    return resource.getResponseField('OperationId') as unknown as string;
  }

}

export class CloudFormationResponsesUpdateTerminationProtection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationUpdateTerminationProtectionInput) {
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
          EnableTerminationProtection: this.__input.enableTerminationProtection,
          StackName: this.__input.stackName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateTerminationProtection.StackId', props);
    return resource.getResponseField('StackId') as unknown as string;
  }

}

export class CloudFormationResponsesValidateTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CloudFormationValidateTemplateInput) {
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
          TemplateBody: this.__input.templateBody,
          TemplateURL: this.__input.templateUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ValidateTemplate.Parameters', props);
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
          TemplateBody: this.__input.templateBody,
          TemplateURL: this.__input.templateUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ValidateTemplate.Description', props);
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
          TemplateBody: this.__input.templateBody,
          TemplateURL: this.__input.templateUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ValidateTemplate.Capabilities', props);
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
          TemplateBody: this.__input.templateBody,
          TemplateURL: this.__input.templateUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ValidateTemplate.CapabilitiesReason', props);
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
          TemplateBody: this.__input.templateBody,
          TemplateURL: this.__input.templateUrl,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ValidateTemplate.DeclaredTransforms', props);
    return resource.getResponseField('DeclaredTransforms') as unknown as string[];
  }

}

