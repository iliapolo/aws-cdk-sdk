/**
 * @schema CloudFormationActivateTypeInput
 */
export interface CloudFormationActivateTypeInput {
  /**
   * @schema CloudFormationActivateTypeInput#Type
   */
  readonly type?: string;

  /**
   * @schema CloudFormationActivateTypeInput#PublicTypeArn
   */
  readonly publicTypeArn?: string;

  /**
   * @schema CloudFormationActivateTypeInput#PublisherId
   */
  readonly publisherId?: string;

  /**
   * @schema CloudFormationActivateTypeInput#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema CloudFormationActivateTypeInput#TypeNameAlias
   */
  readonly typeNameAlias?: string;

  /**
   * @schema CloudFormationActivateTypeInput#AutoUpdate
   */
  readonly autoUpdate?: boolean;

  /**
   * @schema CloudFormationActivateTypeInput#LoggingConfig
   */
  readonly loggingConfig?: CloudFormationLoggingConfig;

  /**
   * @schema CloudFormationActivateTypeInput#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema CloudFormationActivateTypeInput#VersionBump
   */
  readonly versionBump?: string;

  /**
   * @schema CloudFormationActivateTypeInput#MajorVersion
   */
  readonly majorVersion?: number;

}

/**
 * Converts an object of type 'CloudFormationActivateTypeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationActivateTypeInput(obj: CloudFormationActivateTypeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'PublicTypeArn': obj.publicTypeArn,
    'PublisherId': obj.publisherId,
    'TypeName': obj.typeName,
    'TypeNameAlias': obj.typeNameAlias,
    'AutoUpdate': obj.autoUpdate,
    'LoggingConfig': toJson_CloudFormationLoggingConfig(obj.loggingConfig),
    'ExecutionRoleArn': obj.executionRoleArn,
    'VersionBump': obj.versionBump,
    'MajorVersion': obj.majorVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationActivateTypeOutput
 */
export interface CloudFormationActivateTypeOutput {
  /**
   * @schema CloudFormationActivateTypeOutput#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'CloudFormationActivateTypeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationActivateTypeOutput(obj: CloudFormationActivateTypeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationBatchDescribeTypeConfigurationsInput
 */
export interface CloudFormationBatchDescribeTypeConfigurationsInput {
  /**
   * @schema CloudFormationBatchDescribeTypeConfigurationsInput#TypeConfigurationIdentifiers
   */
  readonly typeConfigurationIdentifiers?: CloudFormationTypeConfigurationIdentifier[];

}

/**
 * Converts an object of type 'CloudFormationBatchDescribeTypeConfigurationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationBatchDescribeTypeConfigurationsInput(obj: CloudFormationBatchDescribeTypeConfigurationsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypeConfigurationIdentifiers': obj.typeConfigurationIdentifiers?.map(y => toJson_CloudFormationTypeConfigurationIdentifier(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationBatchDescribeTypeConfigurationsOutput
 */
export interface CloudFormationBatchDescribeTypeConfigurationsOutput {
  /**
   * @schema CloudFormationBatchDescribeTypeConfigurationsOutput#Errors
   */
  readonly errors?: CloudFormationBatchDescribeTypeConfigurationsError[];

  /**
   * @schema CloudFormationBatchDescribeTypeConfigurationsOutput#UnprocessedTypeConfigurations
   */
  readonly unprocessedTypeConfigurations?: CloudFormationTypeConfigurationIdentifier[];

  /**
   * @schema CloudFormationBatchDescribeTypeConfigurationsOutput#TypeConfigurations
   */
  readonly typeConfigurations?: CloudFormationTypeConfigurationDetails[];

}

/**
 * Converts an object of type 'CloudFormationBatchDescribeTypeConfigurationsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationBatchDescribeTypeConfigurationsOutput(obj: CloudFormationBatchDescribeTypeConfigurationsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Errors': obj.errors?.map(y => toJson_CloudFormationBatchDescribeTypeConfigurationsError(y)),
    'UnprocessedTypeConfigurations': obj.unprocessedTypeConfigurations?.map(y => toJson_CloudFormationTypeConfigurationIdentifier(y)),
    'TypeConfigurations': obj.typeConfigurations?.map(y => toJson_CloudFormationTypeConfigurationDetails(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationCancelUpdateStackInput
 */
export interface CloudFormationCancelUpdateStackInput {
  /**
   * @schema CloudFormationCancelUpdateStackInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationCancelUpdateStackInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'CloudFormationCancelUpdateStackInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationCancelUpdateStackInput(obj: CloudFormationCancelUpdateStackInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationContinueUpdateRollbackInput
 */
export interface CloudFormationContinueUpdateRollbackInput {
  /**
   * @schema CloudFormationContinueUpdateRollbackInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationContinueUpdateRollbackInput#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema CloudFormationContinueUpdateRollbackInput#ResourcesToSkip
   */
  readonly resourcesToSkip?: string[];

  /**
   * @schema CloudFormationContinueUpdateRollbackInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'CloudFormationContinueUpdateRollbackInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationContinueUpdateRollbackInput(obj: CloudFormationContinueUpdateRollbackInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'RoleARN': obj.roleArn,
    'ResourcesToSkip': obj.resourcesToSkip?.map(y => y),
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationContinueUpdateRollbackOutput
 */
export interface CloudFormationContinueUpdateRollbackOutput {
}

/**
 * Converts an object of type 'CloudFormationContinueUpdateRollbackOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationContinueUpdateRollbackOutput(obj: CloudFormationContinueUpdateRollbackOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationCreateChangeSetInput
 */
export interface CloudFormationCreateChangeSetInput {
  /**
   * @schema CloudFormationCreateChangeSetInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationCreateChangeSetInput#TemplateBody
   */
  readonly templateBody?: string;

  /**
   * @schema CloudFormationCreateChangeSetInput#TemplateURL
   */
  readonly templateUrl?: string;

  /**
   * @schema CloudFormationCreateChangeSetInput#UsePreviousTemplate
   */
  readonly usePreviousTemplate?: boolean;

  /**
   * @schema CloudFormationCreateChangeSetInput#Parameters
   */
  readonly parameters?: CloudFormationParameter[];

  /**
   * @schema CloudFormationCreateChangeSetInput#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema CloudFormationCreateChangeSetInput#ResourceTypes
   */
  readonly resourceTypes?: string[];

  /**
   * @schema CloudFormationCreateChangeSetInput#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema CloudFormationCreateChangeSetInput#RollbackConfiguration
   */
  readonly rollbackConfiguration?: CloudFormationRollbackConfiguration;

  /**
   * @schema CloudFormationCreateChangeSetInput#NotificationARNs
   */
  readonly notificationArNs?: string[];

  /**
   * @schema CloudFormationCreateChangeSetInput#Tags
   */
  readonly tags?: CloudFormationTag[];

  /**
   * @schema CloudFormationCreateChangeSetInput#ChangeSetName
   */
  readonly changeSetName?: string;

  /**
   * @schema CloudFormationCreateChangeSetInput#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CloudFormationCreateChangeSetInput#Description
   */
  readonly description?: string;

  /**
   * @schema CloudFormationCreateChangeSetInput#ChangeSetType
   */
  readonly changeSetType?: string;

  /**
   * @schema CloudFormationCreateChangeSetInput#ResourcesToImport
   */
  readonly resourcesToImport?: CloudFormationResourceToImport[];

  /**
   * @schema CloudFormationCreateChangeSetInput#IncludeNestedStacks
   */
  readonly includeNestedStacks?: boolean;

}

/**
 * Converts an object of type 'CloudFormationCreateChangeSetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationCreateChangeSetInput(obj: CloudFormationCreateChangeSetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'TemplateBody': obj.templateBody,
    'TemplateURL': obj.templateUrl,
    'UsePreviousTemplate': obj.usePreviousTemplate,
    'Parameters': obj.parameters?.map(y => toJson_CloudFormationParameter(y)),
    'Capabilities': obj.capabilities?.map(y => y),
    'ResourceTypes': obj.resourceTypes?.map(y => y),
    'RoleARN': obj.roleArn,
    'RollbackConfiguration': toJson_CloudFormationRollbackConfiguration(obj.rollbackConfiguration),
    'NotificationARNs': obj.notificationArNs?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_CloudFormationTag(y)),
    'ChangeSetName': obj.changeSetName,
    'ClientToken': obj.clientToken,
    'Description': obj.description,
    'ChangeSetType': obj.changeSetType,
    'ResourcesToImport': obj.resourcesToImport?.map(y => toJson_CloudFormationResourceToImport(y)),
    'IncludeNestedStacks': obj.includeNestedStacks,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationCreateChangeSetOutput
 */
export interface CloudFormationCreateChangeSetOutput {
  /**
   * @schema CloudFormationCreateChangeSetOutput#Id
   */
  readonly id?: string;

  /**
   * @schema CloudFormationCreateChangeSetOutput#StackId
   */
  readonly stackId?: string;

}

/**
 * Converts an object of type 'CloudFormationCreateChangeSetOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationCreateChangeSetOutput(obj: CloudFormationCreateChangeSetOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Id': obj.id,
    'StackId': obj.stackId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationCreateStackInput
 */
export interface CloudFormationCreateStackInput {
  /**
   * @schema CloudFormationCreateStackInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationCreateStackInput#TemplateBody
   */
  readonly templateBody?: string;

  /**
   * @schema CloudFormationCreateStackInput#TemplateURL
   */
  readonly templateUrl?: string;

  /**
   * @schema CloudFormationCreateStackInput#Parameters
   */
  readonly parameters?: CloudFormationParameter[];

  /**
   * @schema CloudFormationCreateStackInput#DisableRollback
   */
  readonly disableRollback?: boolean;

  /**
   * @schema CloudFormationCreateStackInput#RollbackConfiguration
   */
  readonly rollbackConfiguration?: CloudFormationRollbackConfiguration;

  /**
   * @schema CloudFormationCreateStackInput#TimeoutInMinutes
   */
  readonly timeoutInMinutes?: number;

  /**
   * @schema CloudFormationCreateStackInput#NotificationARNs
   */
  readonly notificationArNs?: string[];

  /**
   * @schema CloudFormationCreateStackInput#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema CloudFormationCreateStackInput#ResourceTypes
   */
  readonly resourceTypes?: string[];

  /**
   * @schema CloudFormationCreateStackInput#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema CloudFormationCreateStackInput#OnFailure
   */
  readonly onFailure?: string;

  /**
   * @schema CloudFormationCreateStackInput#StackPolicyBody
   */
  readonly stackPolicyBody?: string;

  /**
   * @schema CloudFormationCreateStackInput#StackPolicyURL
   */
  readonly stackPolicyUrl?: string;

  /**
   * @schema CloudFormationCreateStackInput#Tags
   */
  readonly tags?: CloudFormationTag[];

  /**
   * @schema CloudFormationCreateStackInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CloudFormationCreateStackInput#EnableTerminationProtection
   */
  readonly enableTerminationProtection?: boolean;

}

/**
 * Converts an object of type 'CloudFormationCreateStackInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationCreateStackInput(obj: CloudFormationCreateStackInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'TemplateBody': obj.templateBody,
    'TemplateURL': obj.templateUrl,
    'Parameters': obj.parameters?.map(y => toJson_CloudFormationParameter(y)),
    'DisableRollback': obj.disableRollback,
    'RollbackConfiguration': toJson_CloudFormationRollbackConfiguration(obj.rollbackConfiguration),
    'TimeoutInMinutes': obj.timeoutInMinutes,
    'NotificationARNs': obj.notificationArNs?.map(y => y),
    'Capabilities': obj.capabilities?.map(y => y),
    'ResourceTypes': obj.resourceTypes?.map(y => y),
    'RoleARN': obj.roleArn,
    'OnFailure': obj.onFailure,
    'StackPolicyBody': obj.stackPolicyBody,
    'StackPolicyURL': obj.stackPolicyUrl,
    'Tags': obj.tags?.map(y => toJson_CloudFormationTag(y)),
    'ClientRequestToken': obj.clientRequestToken,
    'EnableTerminationProtection': obj.enableTerminationProtection,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationCreateStackOutput
 */
export interface CloudFormationCreateStackOutput {
  /**
   * @schema CloudFormationCreateStackOutput#StackId
   */
  readonly stackId?: string;

}

/**
 * Converts an object of type 'CloudFormationCreateStackOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationCreateStackOutput(obj: CloudFormationCreateStackOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationCreateStackInstancesInput
 */
export interface CloudFormationCreateStackInstancesInput {
  /**
   * @schema CloudFormationCreateStackInstancesInput#StackSetName
   */
  readonly stackSetName?: string;

  /**
   * @schema CloudFormationCreateStackInstancesInput#Accounts
   */
  readonly accounts?: string[];

  /**
   * @schema CloudFormationCreateStackInstancesInput#DeploymentTargets
   */
  readonly deploymentTargets?: CloudFormationDeploymentTargets;

  /**
   * @schema CloudFormationCreateStackInstancesInput#Regions
   */
  readonly regions?: string[];

  /**
   * @schema CloudFormationCreateStackInstancesInput#ParameterOverrides
   */
  readonly parameterOverrides?: CloudFormationParameter[];

  /**
   * @schema CloudFormationCreateStackInstancesInput#OperationPreferences
   */
  readonly operationPreferences?: CloudFormationStackSetOperationPreferences;

  /**
   * @schema CloudFormationCreateStackInstancesInput#OperationId
   */
  readonly operationId?: string;

  /**
   * @schema CloudFormationCreateStackInstancesInput#CallAs
   */
  readonly callAs?: string;

}

/**
 * Converts an object of type 'CloudFormationCreateStackInstancesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationCreateStackInstancesInput(obj: CloudFormationCreateStackInstancesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetName': obj.stackSetName,
    'Accounts': obj.accounts?.map(y => y),
    'DeploymentTargets': toJson_CloudFormationDeploymentTargets(obj.deploymentTargets),
    'Regions': obj.regions?.map(y => y),
    'ParameterOverrides': obj.parameterOverrides?.map(y => toJson_CloudFormationParameter(y)),
    'OperationPreferences': toJson_CloudFormationStackSetOperationPreferences(obj.operationPreferences),
    'OperationId': obj.operationId,
    'CallAs': obj.callAs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationCreateStackInstancesOutput
 */
export interface CloudFormationCreateStackInstancesOutput {
  /**
   * @schema CloudFormationCreateStackInstancesOutput#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'CloudFormationCreateStackInstancesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationCreateStackInstancesOutput(obj: CloudFormationCreateStackInstancesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationCreateStackSetInput
 */
export interface CloudFormationCreateStackSetInput {
  /**
   * @schema CloudFormationCreateStackSetInput#StackSetName
   */
  readonly stackSetName?: string;

  /**
   * @schema CloudFormationCreateStackSetInput#Description
   */
  readonly description?: string;

  /**
   * @schema CloudFormationCreateStackSetInput#TemplateBody
   */
  readonly templateBody?: string;

  /**
   * @schema CloudFormationCreateStackSetInput#TemplateURL
   */
  readonly templateUrl?: string;

  /**
   * @schema CloudFormationCreateStackSetInput#StackId
   */
  readonly stackId?: string;

  /**
   * @schema CloudFormationCreateStackSetInput#Parameters
   */
  readonly parameters?: CloudFormationParameter[];

  /**
   * @schema CloudFormationCreateStackSetInput#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema CloudFormationCreateStackSetInput#Tags
   */
  readonly tags?: CloudFormationTag[];

  /**
   * @schema CloudFormationCreateStackSetInput#AdministrationRoleARN
   */
  readonly administrationRoleArn?: string;

  /**
   * @schema CloudFormationCreateStackSetInput#ExecutionRoleName
   */
  readonly executionRoleName?: string;

  /**
   * @schema CloudFormationCreateStackSetInput#PermissionModel
   */
  readonly permissionModel?: string;

  /**
   * @schema CloudFormationCreateStackSetInput#AutoDeployment
   */
  readonly autoDeployment?: CloudFormationAutoDeployment;

  /**
   * @schema CloudFormationCreateStackSetInput#CallAs
   */
  readonly callAs?: string;

  /**
   * @schema CloudFormationCreateStackSetInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'CloudFormationCreateStackSetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationCreateStackSetInput(obj: CloudFormationCreateStackSetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetName': obj.stackSetName,
    'Description': obj.description,
    'TemplateBody': obj.templateBody,
    'TemplateURL': obj.templateUrl,
    'StackId': obj.stackId,
    'Parameters': obj.parameters?.map(y => toJson_CloudFormationParameter(y)),
    'Capabilities': obj.capabilities?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_CloudFormationTag(y)),
    'AdministrationRoleARN': obj.administrationRoleArn,
    'ExecutionRoleName': obj.executionRoleName,
    'PermissionModel': obj.permissionModel,
    'AutoDeployment': toJson_CloudFormationAutoDeployment(obj.autoDeployment),
    'CallAs': obj.callAs,
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationCreateStackSetOutput
 */
export interface CloudFormationCreateStackSetOutput {
  /**
   * @schema CloudFormationCreateStackSetOutput#StackSetId
   */
  readonly stackSetId?: string;

}

/**
 * Converts an object of type 'CloudFormationCreateStackSetOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationCreateStackSetOutput(obj: CloudFormationCreateStackSetOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetId': obj.stackSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDeactivateTypeInput
 */
export interface CloudFormationDeactivateTypeInput {
  /**
   * @schema CloudFormationDeactivateTypeInput#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema CloudFormationDeactivateTypeInput#Type
   */
  readonly type?: string;

  /**
   * @schema CloudFormationDeactivateTypeInput#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'CloudFormationDeactivateTypeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDeactivateTypeInput(obj: CloudFormationDeactivateTypeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypeName': obj.typeName,
    'Type': obj.type,
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDeactivateTypeOutput
 */
export interface CloudFormationDeactivateTypeOutput {
}

/**
 * Converts an object of type 'CloudFormationDeactivateTypeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDeactivateTypeOutput(obj: CloudFormationDeactivateTypeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDeleteChangeSetInput
 */
export interface CloudFormationDeleteChangeSetInput {
  /**
   * @schema CloudFormationDeleteChangeSetInput#ChangeSetName
   */
  readonly changeSetName?: string;

  /**
   * @schema CloudFormationDeleteChangeSetInput#StackName
   */
  readonly stackName?: string;

}

/**
 * Converts an object of type 'CloudFormationDeleteChangeSetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDeleteChangeSetInput(obj: CloudFormationDeleteChangeSetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeSetName': obj.changeSetName,
    'StackName': obj.stackName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDeleteChangeSetOutput
 */
export interface CloudFormationDeleteChangeSetOutput {
}

/**
 * Converts an object of type 'CloudFormationDeleteChangeSetOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDeleteChangeSetOutput(obj: CloudFormationDeleteChangeSetOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDeleteStackInput
 */
export interface CloudFormationDeleteStackInput {
  /**
   * @schema CloudFormationDeleteStackInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationDeleteStackInput#RetainResources
   */
  readonly retainResources?: string[];

  /**
   * @schema CloudFormationDeleteStackInput#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema CloudFormationDeleteStackInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'CloudFormationDeleteStackInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDeleteStackInput(obj: CloudFormationDeleteStackInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'RetainResources': obj.retainResources?.map(y => y),
    'RoleARN': obj.roleArn,
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDeleteStackInstancesInput
 */
export interface CloudFormationDeleteStackInstancesInput {
  /**
   * @schema CloudFormationDeleteStackInstancesInput#StackSetName
   */
  readonly stackSetName?: string;

  /**
   * @schema CloudFormationDeleteStackInstancesInput#Accounts
   */
  readonly accounts?: string[];

  /**
   * @schema CloudFormationDeleteStackInstancesInput#DeploymentTargets
   */
  readonly deploymentTargets?: CloudFormationDeploymentTargets;

  /**
   * @schema CloudFormationDeleteStackInstancesInput#Regions
   */
  readonly regions?: string[];

  /**
   * @schema CloudFormationDeleteStackInstancesInput#OperationPreferences
   */
  readonly operationPreferences?: CloudFormationStackSetOperationPreferences;

  /**
   * @schema CloudFormationDeleteStackInstancesInput#RetainStacks
   */
  readonly retainStacks?: boolean;

  /**
   * @schema CloudFormationDeleteStackInstancesInput#OperationId
   */
  readonly operationId?: string;

  /**
   * @schema CloudFormationDeleteStackInstancesInput#CallAs
   */
  readonly callAs?: string;

}

/**
 * Converts an object of type 'CloudFormationDeleteStackInstancesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDeleteStackInstancesInput(obj: CloudFormationDeleteStackInstancesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetName': obj.stackSetName,
    'Accounts': obj.accounts?.map(y => y),
    'DeploymentTargets': toJson_CloudFormationDeploymentTargets(obj.deploymentTargets),
    'Regions': obj.regions?.map(y => y),
    'OperationPreferences': toJson_CloudFormationStackSetOperationPreferences(obj.operationPreferences),
    'RetainStacks': obj.retainStacks,
    'OperationId': obj.operationId,
    'CallAs': obj.callAs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDeleteStackInstancesOutput
 */
export interface CloudFormationDeleteStackInstancesOutput {
  /**
   * @schema CloudFormationDeleteStackInstancesOutput#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'CloudFormationDeleteStackInstancesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDeleteStackInstancesOutput(obj: CloudFormationDeleteStackInstancesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDeleteStackSetInput
 */
export interface CloudFormationDeleteStackSetInput {
  /**
   * @schema CloudFormationDeleteStackSetInput#StackSetName
   */
  readonly stackSetName?: string;

  /**
   * @schema CloudFormationDeleteStackSetInput#CallAs
   */
  readonly callAs?: string;

}

/**
 * Converts an object of type 'CloudFormationDeleteStackSetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDeleteStackSetInput(obj: CloudFormationDeleteStackSetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetName': obj.stackSetName,
    'CallAs': obj.callAs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDeleteStackSetOutput
 */
export interface CloudFormationDeleteStackSetOutput {
}

/**
 * Converts an object of type 'CloudFormationDeleteStackSetOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDeleteStackSetOutput(obj: CloudFormationDeleteStackSetOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDeregisterTypeInput
 */
export interface CloudFormationDeregisterTypeInput {
  /**
   * @schema CloudFormationDeregisterTypeInput#Arn
   */
  readonly arn?: string;

  /**
   * @schema CloudFormationDeregisterTypeInput#Type
   */
  readonly type?: string;

  /**
   * @schema CloudFormationDeregisterTypeInput#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema CloudFormationDeregisterTypeInput#VersionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'CloudFormationDeregisterTypeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDeregisterTypeInput(obj: CloudFormationDeregisterTypeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Type': obj.type,
    'TypeName': obj.typeName,
    'VersionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDeregisterTypeOutput
 */
export interface CloudFormationDeregisterTypeOutput {
}

/**
 * Converts an object of type 'CloudFormationDeregisterTypeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDeregisterTypeOutput(obj: CloudFormationDeregisterTypeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeAccountLimitsInput
 */
export interface CloudFormationDescribeAccountLimitsInput {
  /**
   * @schema CloudFormationDescribeAccountLimitsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationDescribeAccountLimitsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeAccountLimitsInput(obj: CloudFormationDescribeAccountLimitsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeAccountLimitsOutput
 */
export interface CloudFormationDescribeAccountLimitsOutput {
  /**
   * @schema CloudFormationDescribeAccountLimitsOutput#AccountLimits
   */
  readonly accountLimits?: CloudFormationAccountLimit[];

  /**
   * @schema CloudFormationDescribeAccountLimitsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationDescribeAccountLimitsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeAccountLimitsOutput(obj: CloudFormationDescribeAccountLimitsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountLimits': obj.accountLimits?.map(y => toJson_CloudFormationAccountLimit(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeChangeSetInput
 */
export interface CloudFormationDescribeChangeSetInput {
  /**
   * @schema CloudFormationDescribeChangeSetInput#ChangeSetName
   */
  readonly changeSetName?: string;

  /**
   * @schema CloudFormationDescribeChangeSetInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationDescribeChangeSetInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationDescribeChangeSetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeChangeSetInput(obj: CloudFormationDescribeChangeSetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeSetName': obj.changeSetName,
    'StackName': obj.stackName,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeChangeSetOutput
 */
export interface CloudFormationDescribeChangeSetOutput {
  /**
   * @schema CloudFormationDescribeChangeSetOutput#ChangeSetName
   */
  readonly changeSetName?: string;

  /**
   * @schema CloudFormationDescribeChangeSetOutput#ChangeSetId
   */
  readonly changeSetId?: string;

  /**
   * @schema CloudFormationDescribeChangeSetOutput#StackId
   */
  readonly stackId?: string;

  /**
   * @schema CloudFormationDescribeChangeSetOutput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationDescribeChangeSetOutput#Description
   */
  readonly description?: string;

  /**
   * @schema CloudFormationDescribeChangeSetOutput#Parameters
   */
  readonly parameters?: CloudFormationParameter[];

  /**
   * @schema CloudFormationDescribeChangeSetOutput#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema CloudFormationDescribeChangeSetOutput#ExecutionStatus
   */
  readonly executionStatus?: string;

  /**
   * @schema CloudFormationDescribeChangeSetOutput#Status
   */
  readonly status?: string;

  /**
   * @schema CloudFormationDescribeChangeSetOutput#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema CloudFormationDescribeChangeSetOutput#NotificationARNs
   */
  readonly notificationArNs?: string[];

  /**
   * @schema CloudFormationDescribeChangeSetOutput#RollbackConfiguration
   */
  readonly rollbackConfiguration?: CloudFormationRollbackConfiguration;

  /**
   * @schema CloudFormationDescribeChangeSetOutput#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema CloudFormationDescribeChangeSetOutput#Tags
   */
  readonly tags?: CloudFormationTag[];

  /**
   * @schema CloudFormationDescribeChangeSetOutput#Changes
   */
  readonly changes?: CloudFormationChange[];

  /**
   * @schema CloudFormationDescribeChangeSetOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudFormationDescribeChangeSetOutput#IncludeNestedStacks
   */
  readonly includeNestedStacks?: boolean;

  /**
   * @schema CloudFormationDescribeChangeSetOutput#ParentChangeSetId
   */
  readonly parentChangeSetId?: string;

  /**
   * @schema CloudFormationDescribeChangeSetOutput#RootChangeSetId
   */
  readonly rootChangeSetId?: string;

}

/**
 * Converts an object of type 'CloudFormationDescribeChangeSetOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeChangeSetOutput(obj: CloudFormationDescribeChangeSetOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeSetName': obj.changeSetName,
    'ChangeSetId': obj.changeSetId,
    'StackId': obj.stackId,
    'StackName': obj.stackName,
    'Description': obj.description,
    'Parameters': obj.parameters?.map(y => toJson_CloudFormationParameter(y)),
    'CreationTime': obj.creationTime,
    'ExecutionStatus': obj.executionStatus,
    'Status': obj.status,
    'StatusReason': obj.statusReason,
    'NotificationARNs': obj.notificationArNs?.map(y => y),
    'RollbackConfiguration': toJson_CloudFormationRollbackConfiguration(obj.rollbackConfiguration),
    'Capabilities': obj.capabilities?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_CloudFormationTag(y)),
    'Changes': obj.changes?.map(y => toJson_CloudFormationChange(y)),
    'NextToken': obj.nextToken,
    'IncludeNestedStacks': obj.includeNestedStacks,
    'ParentChangeSetId': obj.parentChangeSetId,
    'RootChangeSetId': obj.rootChangeSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribePublisherInput
 */
export interface CloudFormationDescribePublisherInput {
  /**
   * @schema CloudFormationDescribePublisherInput#PublisherId
   */
  readonly publisherId?: string;

}

/**
 * Converts an object of type 'CloudFormationDescribePublisherInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribePublisherInput(obj: CloudFormationDescribePublisherInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublisherId': obj.publisherId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribePublisherOutput
 */
export interface CloudFormationDescribePublisherOutput {
  /**
   * @schema CloudFormationDescribePublisherOutput#PublisherId
   */
  readonly publisherId?: string;

  /**
   * @schema CloudFormationDescribePublisherOutput#PublisherStatus
   */
  readonly publisherStatus?: string;

  /**
   * @schema CloudFormationDescribePublisherOutput#IdentityProvider
   */
  readonly identityProvider?: string;

  /**
   * @schema CloudFormationDescribePublisherOutput#PublisherProfile
   */
  readonly publisherProfile?: string;

}

/**
 * Converts an object of type 'CloudFormationDescribePublisherOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribePublisherOutput(obj: CloudFormationDescribePublisherOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublisherId': obj.publisherId,
    'PublisherStatus': obj.publisherStatus,
    'IdentityProvider': obj.identityProvider,
    'PublisherProfile': obj.publisherProfile,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeStackDriftDetectionStatusInput
 */
export interface CloudFormationDescribeStackDriftDetectionStatusInput {
  /**
   * @schema CloudFormationDescribeStackDriftDetectionStatusInput#StackDriftDetectionId
   */
  readonly stackDriftDetectionId?: string;

}

/**
 * Converts an object of type 'CloudFormationDescribeStackDriftDetectionStatusInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeStackDriftDetectionStatusInput(obj: CloudFormationDescribeStackDriftDetectionStatusInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackDriftDetectionId': obj.stackDriftDetectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeStackDriftDetectionStatusOutput
 */
export interface CloudFormationDescribeStackDriftDetectionStatusOutput {
  /**
   * @schema CloudFormationDescribeStackDriftDetectionStatusOutput#StackId
   */
  readonly stackId?: string;

  /**
   * @schema CloudFormationDescribeStackDriftDetectionStatusOutput#StackDriftDetectionId
   */
  readonly stackDriftDetectionId?: string;

  /**
   * @schema CloudFormationDescribeStackDriftDetectionStatusOutput#StackDriftStatus
   */
  readonly stackDriftStatus?: string;

  /**
   * @schema CloudFormationDescribeStackDriftDetectionStatusOutput#DetectionStatus
   */
  readonly detectionStatus?: string;

  /**
   * @schema CloudFormationDescribeStackDriftDetectionStatusOutput#DetectionStatusReason
   */
  readonly detectionStatusReason?: string;

  /**
   * @schema CloudFormationDescribeStackDriftDetectionStatusOutput#DriftedStackResourceCount
   */
  readonly driftedStackResourceCount?: number;

  /**
   * @schema CloudFormationDescribeStackDriftDetectionStatusOutput#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * Converts an object of type 'CloudFormationDescribeStackDriftDetectionStatusOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeStackDriftDetectionStatusOutput(obj: CloudFormationDescribeStackDriftDetectionStatusOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'StackDriftDetectionId': obj.stackDriftDetectionId,
    'StackDriftStatus': obj.stackDriftStatus,
    'DetectionStatus': obj.detectionStatus,
    'DetectionStatusReason': obj.detectionStatusReason,
    'DriftedStackResourceCount': obj.driftedStackResourceCount,
    'Timestamp': obj.timestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeStackEventsInput
 */
export interface CloudFormationDescribeStackEventsInput {
  /**
   * @schema CloudFormationDescribeStackEventsInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationDescribeStackEventsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationDescribeStackEventsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeStackEventsInput(obj: CloudFormationDescribeStackEventsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeStackEventsOutput
 */
export interface CloudFormationDescribeStackEventsOutput {
  /**
   * @schema CloudFormationDescribeStackEventsOutput#StackEvents
   */
  readonly stackEvents?: CloudFormationStackEvent[];

  /**
   * @schema CloudFormationDescribeStackEventsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationDescribeStackEventsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeStackEventsOutput(obj: CloudFormationDescribeStackEventsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackEvents': obj.stackEvents?.map(y => toJson_CloudFormationStackEvent(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeStackInstanceInput
 */
export interface CloudFormationDescribeStackInstanceInput {
  /**
   * @schema CloudFormationDescribeStackInstanceInput#StackSetName
   */
  readonly stackSetName?: string;

  /**
   * @schema CloudFormationDescribeStackInstanceInput#StackInstanceAccount
   */
  readonly stackInstanceAccount?: string;

  /**
   * @schema CloudFormationDescribeStackInstanceInput#StackInstanceRegion
   */
  readonly stackInstanceRegion?: string;

  /**
   * @schema CloudFormationDescribeStackInstanceInput#CallAs
   */
  readonly callAs?: string;

}

/**
 * Converts an object of type 'CloudFormationDescribeStackInstanceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeStackInstanceInput(obj: CloudFormationDescribeStackInstanceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetName': obj.stackSetName,
    'StackInstanceAccount': obj.stackInstanceAccount,
    'StackInstanceRegion': obj.stackInstanceRegion,
    'CallAs': obj.callAs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeStackInstanceOutput
 */
export interface CloudFormationDescribeStackInstanceOutput {
  /**
   * @schema CloudFormationDescribeStackInstanceOutput#StackInstance
   */
  readonly stackInstance?: CloudFormationStackInstance;

}

/**
 * Converts an object of type 'CloudFormationDescribeStackInstanceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeStackInstanceOutput(obj: CloudFormationDescribeStackInstanceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackInstance': toJson_CloudFormationStackInstance(obj.stackInstance),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeStackResourceInput
 */
export interface CloudFormationDescribeStackResourceInput {
  /**
   * @schema CloudFormationDescribeStackResourceInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationDescribeStackResourceInput#LogicalResourceId
   */
  readonly logicalResourceId?: string;

}

/**
 * Converts an object of type 'CloudFormationDescribeStackResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeStackResourceInput(obj: CloudFormationDescribeStackResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'LogicalResourceId': obj.logicalResourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeStackResourceOutput
 */
export interface CloudFormationDescribeStackResourceOutput {
  /**
   * @schema CloudFormationDescribeStackResourceOutput#StackResourceDetail
   */
  readonly stackResourceDetail?: CloudFormationStackResourceDetail;

}

/**
 * Converts an object of type 'CloudFormationDescribeStackResourceOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeStackResourceOutput(obj: CloudFormationDescribeStackResourceOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackResourceDetail': toJson_CloudFormationStackResourceDetail(obj.stackResourceDetail),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeStackResourceDriftsInput
 */
export interface CloudFormationDescribeStackResourceDriftsInput {
  /**
   * @schema CloudFormationDescribeStackResourceDriftsInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationDescribeStackResourceDriftsInput#StackResourceDriftStatusFilters
   */
  readonly stackResourceDriftStatusFilters?: string[];

  /**
   * @schema CloudFormationDescribeStackResourceDriftsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudFormationDescribeStackResourceDriftsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CloudFormationDescribeStackResourceDriftsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeStackResourceDriftsInput(obj: CloudFormationDescribeStackResourceDriftsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'StackResourceDriftStatusFilters': obj.stackResourceDriftStatusFilters?.map(y => y),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeStackResourceDriftsOutput
 */
export interface CloudFormationDescribeStackResourceDriftsOutput {
  /**
   * @schema CloudFormationDescribeStackResourceDriftsOutput#StackResourceDrifts
   */
  readonly stackResourceDrifts?: CloudFormationStackResourceDrift[];

  /**
   * @schema CloudFormationDescribeStackResourceDriftsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationDescribeStackResourceDriftsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeStackResourceDriftsOutput(obj: CloudFormationDescribeStackResourceDriftsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackResourceDrifts': obj.stackResourceDrifts?.map(y => toJson_CloudFormationStackResourceDrift(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeStackResourcesInput
 */
export interface CloudFormationDescribeStackResourcesInput {
  /**
   * @schema CloudFormationDescribeStackResourcesInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationDescribeStackResourcesInput#LogicalResourceId
   */
  readonly logicalResourceId?: string;

  /**
   * @schema CloudFormationDescribeStackResourcesInput#PhysicalResourceId
   */
  readonly physicalResourceId?: string;

}

/**
 * Converts an object of type 'CloudFormationDescribeStackResourcesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeStackResourcesInput(obj: CloudFormationDescribeStackResourcesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'LogicalResourceId': obj.logicalResourceId,
    'PhysicalResourceId': obj.physicalResourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeStackResourcesOutput
 */
export interface CloudFormationDescribeStackResourcesOutput {
  /**
   * @schema CloudFormationDescribeStackResourcesOutput#StackResources
   */
  readonly stackResources?: CloudFormationStackResource[];

}

/**
 * Converts an object of type 'CloudFormationDescribeStackResourcesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeStackResourcesOutput(obj: CloudFormationDescribeStackResourcesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackResources': obj.stackResources?.map(y => toJson_CloudFormationStackResource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeStackSetInput
 */
export interface CloudFormationDescribeStackSetInput {
  /**
   * @schema CloudFormationDescribeStackSetInput#StackSetName
   */
  readonly stackSetName?: string;

  /**
   * @schema CloudFormationDescribeStackSetInput#CallAs
   */
  readonly callAs?: string;

}

/**
 * Converts an object of type 'CloudFormationDescribeStackSetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeStackSetInput(obj: CloudFormationDescribeStackSetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetName': obj.stackSetName,
    'CallAs': obj.callAs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeStackSetOutput
 */
export interface CloudFormationDescribeStackSetOutput {
  /**
   * @schema CloudFormationDescribeStackSetOutput#StackSet
   */
  readonly stackSet?: CloudFormationStackSet;

}

/**
 * Converts an object of type 'CloudFormationDescribeStackSetOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeStackSetOutput(obj: CloudFormationDescribeStackSetOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSet': toJson_CloudFormationStackSet(obj.stackSet),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeStackSetOperationInput
 */
export interface CloudFormationDescribeStackSetOperationInput {
  /**
   * @schema CloudFormationDescribeStackSetOperationInput#StackSetName
   */
  readonly stackSetName?: string;

  /**
   * @schema CloudFormationDescribeStackSetOperationInput#OperationId
   */
  readonly operationId?: string;

  /**
   * @schema CloudFormationDescribeStackSetOperationInput#CallAs
   */
  readonly callAs?: string;

}

/**
 * Converts an object of type 'CloudFormationDescribeStackSetOperationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeStackSetOperationInput(obj: CloudFormationDescribeStackSetOperationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetName': obj.stackSetName,
    'OperationId': obj.operationId,
    'CallAs': obj.callAs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeStackSetOperationOutput
 */
export interface CloudFormationDescribeStackSetOperationOutput {
  /**
   * @schema CloudFormationDescribeStackSetOperationOutput#StackSetOperation
   */
  readonly stackSetOperation?: CloudFormationStackSetOperation;

}

/**
 * Converts an object of type 'CloudFormationDescribeStackSetOperationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeStackSetOperationOutput(obj: CloudFormationDescribeStackSetOperationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetOperation': toJson_CloudFormationStackSetOperation(obj.stackSetOperation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeStacksInput
 */
export interface CloudFormationDescribeStacksInput {
  /**
   * @schema CloudFormationDescribeStacksInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationDescribeStacksInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationDescribeStacksInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeStacksInput(obj: CloudFormationDescribeStacksInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeStacksOutput
 */
export interface CloudFormationDescribeStacksOutput {
  /**
   * @schema CloudFormationDescribeStacksOutput#Stacks
   */
  readonly stacks?: CloudFormationStack[];

  /**
   * @schema CloudFormationDescribeStacksOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationDescribeStacksOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeStacksOutput(obj: CloudFormationDescribeStacksOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Stacks': obj.stacks?.map(y => toJson_CloudFormationStack(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeTypeInput
 */
export interface CloudFormationDescribeTypeInput {
  /**
   * @schema CloudFormationDescribeTypeInput#Type
   */
  readonly type?: string;

  /**
   * @schema CloudFormationDescribeTypeInput#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema CloudFormationDescribeTypeInput#Arn
   */
  readonly arn?: string;

  /**
   * @schema CloudFormationDescribeTypeInput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema CloudFormationDescribeTypeInput#PublisherId
   */
  readonly publisherId?: string;

  /**
   * @schema CloudFormationDescribeTypeInput#PublicVersionNumber
   */
  readonly publicVersionNumber?: string;

}

/**
 * Converts an object of type 'CloudFormationDescribeTypeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeTypeInput(obj: CloudFormationDescribeTypeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'TypeName': obj.typeName,
    'Arn': obj.arn,
    'VersionId': obj.versionId,
    'PublisherId': obj.publisherId,
    'PublicVersionNumber': obj.publicVersionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeTypeOutput
 */
export interface CloudFormationDescribeTypeOutput {
  /**
   * @schema CloudFormationDescribeTypeOutput#Arn
   */
  readonly arn?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#Type
   */
  readonly type?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#DefaultVersionId
   */
  readonly defaultVersionId?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#IsDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

  /**
   * @schema CloudFormationDescribeTypeOutput#TypeTestsStatus
   */
  readonly typeTestsStatus?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#TypeTestsStatusDescription
   */
  readonly typeTestsStatusDescription?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#Description
   */
  readonly description?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#Schema
   */
  readonly schema?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#ProvisioningType
   */
  readonly provisioningType?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#DeprecatedStatus
   */
  readonly deprecatedStatus?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#LoggingConfig
   */
  readonly loggingConfig?: CloudFormationLoggingConfig;

  /**
   * @schema CloudFormationDescribeTypeOutput#RequiredActivatedTypes
   */
  readonly requiredActivatedTypes?: CloudFormationRequiredActivatedType[];

  /**
   * @schema CloudFormationDescribeTypeOutput#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#Visibility
   */
  readonly visibility?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#SourceUrl
   */
  readonly sourceUrl?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#DocumentationUrl
   */
  readonly documentationUrl?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#TimeCreated
   */
  readonly timeCreated?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#ConfigurationSchema
   */
  readonly configurationSchema?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#PublisherId
   */
  readonly publisherId?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#OriginalTypeName
   */
  readonly originalTypeName?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#OriginalTypeArn
   */
  readonly originalTypeArn?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#PublicVersionNumber
   */
  readonly publicVersionNumber?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#LatestPublicVersion
   */
  readonly latestPublicVersion?: string;

  /**
   * @schema CloudFormationDescribeTypeOutput#IsActivated
   */
  readonly isActivated?: boolean;

  /**
   * @schema CloudFormationDescribeTypeOutput#AutoUpdate
   */
  readonly autoUpdate?: boolean;

}

/**
 * Converts an object of type 'CloudFormationDescribeTypeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeTypeOutput(obj: CloudFormationDescribeTypeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Type': obj.type,
    'TypeName': obj.typeName,
    'DefaultVersionId': obj.defaultVersionId,
    'IsDefaultVersion': obj.isDefaultVersion,
    'TypeTestsStatus': obj.typeTestsStatus,
    'TypeTestsStatusDescription': obj.typeTestsStatusDescription,
    'Description': obj.description,
    'Schema': obj.schema,
    'ProvisioningType': obj.provisioningType,
    'DeprecatedStatus': obj.deprecatedStatus,
    'LoggingConfig': toJson_CloudFormationLoggingConfig(obj.loggingConfig),
    'RequiredActivatedTypes': obj.requiredActivatedTypes?.map(y => toJson_CloudFormationRequiredActivatedType(y)),
    'ExecutionRoleArn': obj.executionRoleArn,
    'Visibility': obj.visibility,
    'SourceUrl': obj.sourceUrl,
    'DocumentationUrl': obj.documentationUrl,
    'LastUpdated': obj.lastUpdated,
    'TimeCreated': obj.timeCreated,
    'ConfigurationSchema': obj.configurationSchema,
    'PublisherId': obj.publisherId,
    'OriginalTypeName': obj.originalTypeName,
    'OriginalTypeArn': obj.originalTypeArn,
    'PublicVersionNumber': obj.publicVersionNumber,
    'LatestPublicVersion': obj.latestPublicVersion,
    'IsActivated': obj.isActivated,
    'AutoUpdate': obj.autoUpdate,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeTypeRegistrationInput
 */
export interface CloudFormationDescribeTypeRegistrationInput {
  /**
   * @schema CloudFormationDescribeTypeRegistrationInput#RegistrationToken
   */
  readonly registrationToken?: string;

}

/**
 * Converts an object of type 'CloudFormationDescribeTypeRegistrationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeTypeRegistrationInput(obj: CloudFormationDescribeTypeRegistrationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistrationToken': obj.registrationToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDescribeTypeRegistrationOutput
 */
export interface CloudFormationDescribeTypeRegistrationOutput {
  /**
   * @schema CloudFormationDescribeTypeRegistrationOutput#ProgressStatus
   */
  readonly progressStatus?: string;

  /**
   * @schema CloudFormationDescribeTypeRegistrationOutput#Description
   */
  readonly description?: string;

  /**
   * @schema CloudFormationDescribeTypeRegistrationOutput#TypeArn
   */
  readonly typeArn?: string;

  /**
   * @schema CloudFormationDescribeTypeRegistrationOutput#TypeVersionArn
   */
  readonly typeVersionArn?: string;

}

/**
 * Converts an object of type 'CloudFormationDescribeTypeRegistrationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDescribeTypeRegistrationOutput(obj: CloudFormationDescribeTypeRegistrationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ProgressStatus': obj.progressStatus,
    'Description': obj.description,
    'TypeArn': obj.typeArn,
    'TypeVersionArn': obj.typeVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDetectStackDriftInput
 */
export interface CloudFormationDetectStackDriftInput {
  /**
   * @schema CloudFormationDetectStackDriftInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationDetectStackDriftInput#LogicalResourceIds
   */
  readonly logicalResourceIds?: string[];

}

/**
 * Converts an object of type 'CloudFormationDetectStackDriftInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDetectStackDriftInput(obj: CloudFormationDetectStackDriftInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'LogicalResourceIds': obj.logicalResourceIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDetectStackDriftOutput
 */
export interface CloudFormationDetectStackDriftOutput {
  /**
   * @schema CloudFormationDetectStackDriftOutput#StackDriftDetectionId
   */
  readonly stackDriftDetectionId?: string;

}

/**
 * Converts an object of type 'CloudFormationDetectStackDriftOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDetectStackDriftOutput(obj: CloudFormationDetectStackDriftOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackDriftDetectionId': obj.stackDriftDetectionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDetectStackResourceDriftInput
 */
export interface CloudFormationDetectStackResourceDriftInput {
  /**
   * @schema CloudFormationDetectStackResourceDriftInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationDetectStackResourceDriftInput#LogicalResourceId
   */
  readonly logicalResourceId?: string;

}

/**
 * Converts an object of type 'CloudFormationDetectStackResourceDriftInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDetectStackResourceDriftInput(obj: CloudFormationDetectStackResourceDriftInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'LogicalResourceId': obj.logicalResourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDetectStackResourceDriftOutput
 */
export interface CloudFormationDetectStackResourceDriftOutput {
  /**
   * @schema CloudFormationDetectStackResourceDriftOutput#StackResourceDrift
   */
  readonly stackResourceDrift?: CloudFormationStackResourceDrift;

}

/**
 * Converts an object of type 'CloudFormationDetectStackResourceDriftOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDetectStackResourceDriftOutput(obj: CloudFormationDetectStackResourceDriftOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackResourceDrift': toJson_CloudFormationStackResourceDrift(obj.stackResourceDrift),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDetectStackSetDriftInput
 */
export interface CloudFormationDetectStackSetDriftInput {
  /**
   * @schema CloudFormationDetectStackSetDriftInput#StackSetName
   */
  readonly stackSetName?: string;

  /**
   * @schema CloudFormationDetectStackSetDriftInput#OperationPreferences
   */
  readonly operationPreferences?: CloudFormationStackSetOperationPreferences;

  /**
   * @schema CloudFormationDetectStackSetDriftInput#OperationId
   */
  readonly operationId?: string;

  /**
   * @schema CloudFormationDetectStackSetDriftInput#CallAs
   */
  readonly callAs?: string;

}

/**
 * Converts an object of type 'CloudFormationDetectStackSetDriftInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDetectStackSetDriftInput(obj: CloudFormationDetectStackSetDriftInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetName': obj.stackSetName,
    'OperationPreferences': toJson_CloudFormationStackSetOperationPreferences(obj.operationPreferences),
    'OperationId': obj.operationId,
    'CallAs': obj.callAs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDetectStackSetDriftOutput
 */
export interface CloudFormationDetectStackSetDriftOutput {
  /**
   * @schema CloudFormationDetectStackSetDriftOutput#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'CloudFormationDetectStackSetDriftOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDetectStackSetDriftOutput(obj: CloudFormationDetectStackSetDriftOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationEstimateTemplateCostInput
 */
export interface CloudFormationEstimateTemplateCostInput {
  /**
   * @schema CloudFormationEstimateTemplateCostInput#TemplateBody
   */
  readonly templateBody?: string;

  /**
   * @schema CloudFormationEstimateTemplateCostInput#TemplateURL
   */
  readonly templateUrl?: string;

  /**
   * @schema CloudFormationEstimateTemplateCostInput#Parameters
   */
  readonly parameters?: CloudFormationParameter[];

}

/**
 * Converts an object of type 'CloudFormationEstimateTemplateCostInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationEstimateTemplateCostInput(obj: CloudFormationEstimateTemplateCostInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateBody': obj.templateBody,
    'TemplateURL': obj.templateUrl,
    'Parameters': obj.parameters?.map(y => toJson_CloudFormationParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationEstimateTemplateCostOutput
 */
export interface CloudFormationEstimateTemplateCostOutput {
  /**
   * @schema CloudFormationEstimateTemplateCostOutput#Url
   */
  readonly url?: string;

}

/**
 * Converts an object of type 'CloudFormationEstimateTemplateCostOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationEstimateTemplateCostOutput(obj: CloudFormationEstimateTemplateCostOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Url': obj.url,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationExecuteChangeSetInput
 */
export interface CloudFormationExecuteChangeSetInput {
  /**
   * @schema CloudFormationExecuteChangeSetInput#ChangeSetName
   */
  readonly changeSetName?: string;

  /**
   * @schema CloudFormationExecuteChangeSetInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationExecuteChangeSetInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'CloudFormationExecuteChangeSetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationExecuteChangeSetInput(obj: CloudFormationExecuteChangeSetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ChangeSetName': obj.changeSetName,
    'StackName': obj.stackName,
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationExecuteChangeSetOutput
 */
export interface CloudFormationExecuteChangeSetOutput {
}

/**
 * Converts an object of type 'CloudFormationExecuteChangeSetOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationExecuteChangeSetOutput(obj: CloudFormationExecuteChangeSetOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationGetStackPolicyInput
 */
export interface CloudFormationGetStackPolicyInput {
  /**
   * @schema CloudFormationGetStackPolicyInput#StackName
   */
  readonly stackName?: string;

}

/**
 * Converts an object of type 'CloudFormationGetStackPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationGetStackPolicyInput(obj: CloudFormationGetStackPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationGetStackPolicyOutput
 */
export interface CloudFormationGetStackPolicyOutput {
  /**
   * @schema CloudFormationGetStackPolicyOutput#StackPolicyBody
   */
  readonly stackPolicyBody?: string;

}

/**
 * Converts an object of type 'CloudFormationGetStackPolicyOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationGetStackPolicyOutput(obj: CloudFormationGetStackPolicyOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackPolicyBody': obj.stackPolicyBody,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationGetTemplateInput
 */
export interface CloudFormationGetTemplateInput {
  /**
   * @schema CloudFormationGetTemplateInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationGetTemplateInput#ChangeSetName
   */
  readonly changeSetName?: string;

  /**
   * @schema CloudFormationGetTemplateInput#TemplateStage
   */
  readonly templateStage?: string;

}

/**
 * Converts an object of type 'CloudFormationGetTemplateInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationGetTemplateInput(obj: CloudFormationGetTemplateInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'ChangeSetName': obj.changeSetName,
    'TemplateStage': obj.templateStage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationGetTemplateOutput
 */
export interface CloudFormationGetTemplateOutput {
  /**
   * @schema CloudFormationGetTemplateOutput#TemplateBody
   */
  readonly templateBody?: string;

  /**
   * @schema CloudFormationGetTemplateOutput#StagesAvailable
   */
  readonly stagesAvailable?: string[];

}

/**
 * Converts an object of type 'CloudFormationGetTemplateOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationGetTemplateOutput(obj: CloudFormationGetTemplateOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateBody': obj.templateBody,
    'StagesAvailable': obj.stagesAvailable?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationGetTemplateSummaryInput
 */
export interface CloudFormationGetTemplateSummaryInput {
  /**
   * @schema CloudFormationGetTemplateSummaryInput#TemplateBody
   */
  readonly templateBody?: string;

  /**
   * @schema CloudFormationGetTemplateSummaryInput#TemplateURL
   */
  readonly templateUrl?: string;

  /**
   * @schema CloudFormationGetTemplateSummaryInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationGetTemplateSummaryInput#StackSetName
   */
  readonly stackSetName?: string;

  /**
   * @schema CloudFormationGetTemplateSummaryInput#CallAs
   */
  readonly callAs?: string;

}

/**
 * Converts an object of type 'CloudFormationGetTemplateSummaryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationGetTemplateSummaryInput(obj: CloudFormationGetTemplateSummaryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateBody': obj.templateBody,
    'TemplateURL': obj.templateUrl,
    'StackName': obj.stackName,
    'StackSetName': obj.stackSetName,
    'CallAs': obj.callAs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationGetTemplateSummaryOutput
 */
export interface CloudFormationGetTemplateSummaryOutput {
  /**
   * @schema CloudFormationGetTemplateSummaryOutput#Parameters
   */
  readonly parameters?: CloudFormationParameterDeclaration[];

  /**
   * @schema CloudFormationGetTemplateSummaryOutput#Description
   */
  readonly description?: string;

  /**
   * @schema CloudFormationGetTemplateSummaryOutput#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema CloudFormationGetTemplateSummaryOutput#CapabilitiesReason
   */
  readonly capabilitiesReason?: string;

  /**
   * @schema CloudFormationGetTemplateSummaryOutput#ResourceTypes
   */
  readonly resourceTypes?: string[];

  /**
   * @schema CloudFormationGetTemplateSummaryOutput#Version
   */
  readonly version?: string;

  /**
   * @schema CloudFormationGetTemplateSummaryOutput#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema CloudFormationGetTemplateSummaryOutput#DeclaredTransforms
   */
  readonly declaredTransforms?: string[];

  /**
   * @schema CloudFormationGetTemplateSummaryOutput#ResourceIdentifierSummaries
   */
  readonly resourceIdentifierSummaries?: CloudFormationResourceIdentifierSummary[];

}

/**
 * Converts an object of type 'CloudFormationGetTemplateSummaryOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationGetTemplateSummaryOutput(obj: CloudFormationGetTemplateSummaryOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Parameters': obj.parameters?.map(y => toJson_CloudFormationParameterDeclaration(y)),
    'Description': obj.description,
    'Capabilities': obj.capabilities?.map(y => y),
    'CapabilitiesReason': obj.capabilitiesReason,
    'ResourceTypes': obj.resourceTypes?.map(y => y),
    'Version': obj.version,
    'Metadata': obj.metadata,
    'DeclaredTransforms': obj.declaredTransforms?.map(y => y),
    'ResourceIdentifierSummaries': obj.resourceIdentifierSummaries?.map(y => toJson_CloudFormationResourceIdentifierSummary(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationImportStacksToStackSetInput
 */
export interface CloudFormationImportStacksToStackSetInput {
  /**
   * @schema CloudFormationImportStacksToStackSetInput#StackSetName
   */
  readonly stackSetName?: string;

  /**
   * @schema CloudFormationImportStacksToStackSetInput#StackIds
   */
  readonly stackIds?: string[];

  /**
   * @schema CloudFormationImportStacksToStackSetInput#OperationPreferences
   */
  readonly operationPreferences?: CloudFormationStackSetOperationPreferences;

  /**
   * @schema CloudFormationImportStacksToStackSetInput#OperationId
   */
  readonly operationId?: string;

  /**
   * @schema CloudFormationImportStacksToStackSetInput#CallAs
   */
  readonly callAs?: string;

}

/**
 * Converts an object of type 'CloudFormationImportStacksToStackSetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationImportStacksToStackSetInput(obj: CloudFormationImportStacksToStackSetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetName': obj.stackSetName,
    'StackIds': obj.stackIds?.map(y => y),
    'OperationPreferences': toJson_CloudFormationStackSetOperationPreferences(obj.operationPreferences),
    'OperationId': obj.operationId,
    'CallAs': obj.callAs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationImportStacksToStackSetOutput
 */
export interface CloudFormationImportStacksToStackSetOutput {
  /**
   * @schema CloudFormationImportStacksToStackSetOutput#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'CloudFormationImportStacksToStackSetOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationImportStacksToStackSetOutput(obj: CloudFormationImportStacksToStackSetOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListChangeSetsInput
 */
export interface CloudFormationListChangeSetsInput {
  /**
   * @schema CloudFormationListChangeSetsInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationListChangeSetsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationListChangeSetsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListChangeSetsInput(obj: CloudFormationListChangeSetsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListChangeSetsOutput
 */
export interface CloudFormationListChangeSetsOutput {
  /**
   * @schema CloudFormationListChangeSetsOutput#Summaries
   */
  readonly summaries?: CloudFormationChangeSetSummary[];

  /**
   * @schema CloudFormationListChangeSetsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationListChangeSetsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListChangeSetsOutput(obj: CloudFormationListChangeSetsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Summaries': obj.summaries?.map(y => toJson_CloudFormationChangeSetSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListExportsInput
 */
export interface CloudFormationListExportsInput {
  /**
   * @schema CloudFormationListExportsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationListExportsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListExportsInput(obj: CloudFormationListExportsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListExportsOutput
 */
export interface CloudFormationListExportsOutput {
  /**
   * @schema CloudFormationListExportsOutput#Exports
   */
  readonly exports?: CloudFormationExport[];

  /**
   * @schema CloudFormationListExportsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationListExportsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListExportsOutput(obj: CloudFormationListExportsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Exports': obj.exports?.map(y => toJson_CloudFormationExport(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListImportsInput
 */
export interface CloudFormationListImportsInput {
  /**
   * @schema CloudFormationListImportsInput#ExportName
   */
  readonly exportName?: string;

  /**
   * @schema CloudFormationListImportsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationListImportsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListImportsInput(obj: CloudFormationListImportsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExportName': obj.exportName,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListImportsOutput
 */
export interface CloudFormationListImportsOutput {
  /**
   * @schema CloudFormationListImportsOutput#Imports
   */
  readonly imports?: string[];

  /**
   * @schema CloudFormationListImportsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationListImportsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListImportsOutput(obj: CloudFormationListImportsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Imports': obj.imports?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListStackInstancesInput
 */
export interface CloudFormationListStackInstancesInput {
  /**
   * @schema CloudFormationListStackInstancesInput#StackSetName
   */
  readonly stackSetName?: string;

  /**
   * @schema CloudFormationListStackInstancesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudFormationListStackInstancesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudFormationListStackInstancesInput#Filters
   */
  readonly filters?: CloudFormationStackInstanceFilter[];

  /**
   * @schema CloudFormationListStackInstancesInput#StackInstanceAccount
   */
  readonly stackInstanceAccount?: string;

  /**
   * @schema CloudFormationListStackInstancesInput#StackInstanceRegion
   */
  readonly stackInstanceRegion?: string;

  /**
   * @schema CloudFormationListStackInstancesInput#CallAs
   */
  readonly callAs?: string;

}

/**
 * Converts an object of type 'CloudFormationListStackInstancesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListStackInstancesInput(obj: CloudFormationListStackInstancesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetName': obj.stackSetName,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Filters': obj.filters?.map(y => toJson_CloudFormationStackInstanceFilter(y)),
    'StackInstanceAccount': obj.stackInstanceAccount,
    'StackInstanceRegion': obj.stackInstanceRegion,
    'CallAs': obj.callAs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListStackInstancesOutput
 */
export interface CloudFormationListStackInstancesOutput {
  /**
   * @schema CloudFormationListStackInstancesOutput#Summaries
   */
  readonly summaries?: CloudFormationStackInstanceSummary[];

  /**
   * @schema CloudFormationListStackInstancesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationListStackInstancesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListStackInstancesOutput(obj: CloudFormationListStackInstancesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Summaries': obj.summaries?.map(y => toJson_CloudFormationStackInstanceSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListStackResourcesInput
 */
export interface CloudFormationListStackResourcesInput {
  /**
   * @schema CloudFormationListStackResourcesInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationListStackResourcesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationListStackResourcesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListStackResourcesInput(obj: CloudFormationListStackResourcesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListStackResourcesOutput
 */
export interface CloudFormationListStackResourcesOutput {
  /**
   * @schema CloudFormationListStackResourcesOutput#StackResourceSummaries
   */
  readonly stackResourceSummaries?: CloudFormationStackResourceSummary[];

  /**
   * @schema CloudFormationListStackResourcesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationListStackResourcesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListStackResourcesOutput(obj: CloudFormationListStackResourcesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackResourceSummaries': obj.stackResourceSummaries?.map(y => toJson_CloudFormationStackResourceSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListStackSetOperationResultsInput
 */
export interface CloudFormationListStackSetOperationResultsInput {
  /**
   * @schema CloudFormationListStackSetOperationResultsInput#StackSetName
   */
  readonly stackSetName?: string;

  /**
   * @schema CloudFormationListStackSetOperationResultsInput#OperationId
   */
  readonly operationId?: string;

  /**
   * @schema CloudFormationListStackSetOperationResultsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudFormationListStackSetOperationResultsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudFormationListStackSetOperationResultsInput#CallAs
   */
  readonly callAs?: string;

}

/**
 * Converts an object of type 'CloudFormationListStackSetOperationResultsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListStackSetOperationResultsInput(obj: CloudFormationListStackSetOperationResultsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetName': obj.stackSetName,
    'OperationId': obj.operationId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'CallAs': obj.callAs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListStackSetOperationResultsOutput
 */
export interface CloudFormationListStackSetOperationResultsOutput {
  /**
   * @schema CloudFormationListStackSetOperationResultsOutput#Summaries
   */
  readonly summaries?: CloudFormationStackSetOperationResultSummary[];

  /**
   * @schema CloudFormationListStackSetOperationResultsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationListStackSetOperationResultsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListStackSetOperationResultsOutput(obj: CloudFormationListStackSetOperationResultsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Summaries': obj.summaries?.map(y => toJson_CloudFormationStackSetOperationResultSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListStackSetOperationsInput
 */
export interface CloudFormationListStackSetOperationsInput {
  /**
   * @schema CloudFormationListStackSetOperationsInput#StackSetName
   */
  readonly stackSetName?: string;

  /**
   * @schema CloudFormationListStackSetOperationsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudFormationListStackSetOperationsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudFormationListStackSetOperationsInput#CallAs
   */
  readonly callAs?: string;

}

/**
 * Converts an object of type 'CloudFormationListStackSetOperationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListStackSetOperationsInput(obj: CloudFormationListStackSetOperationsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetName': obj.stackSetName,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'CallAs': obj.callAs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListStackSetOperationsOutput
 */
export interface CloudFormationListStackSetOperationsOutput {
  /**
   * @schema CloudFormationListStackSetOperationsOutput#Summaries
   */
  readonly summaries?: CloudFormationStackSetOperationSummary[];

  /**
   * @schema CloudFormationListStackSetOperationsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationListStackSetOperationsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListStackSetOperationsOutput(obj: CloudFormationListStackSetOperationsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Summaries': obj.summaries?.map(y => toJson_CloudFormationStackSetOperationSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListStackSetsInput
 */
export interface CloudFormationListStackSetsInput {
  /**
   * @schema CloudFormationListStackSetsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudFormationListStackSetsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudFormationListStackSetsInput#Status
   */
  readonly status?: string;

  /**
   * @schema CloudFormationListStackSetsInput#CallAs
   */
  readonly callAs?: string;

}

/**
 * Converts an object of type 'CloudFormationListStackSetsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListStackSetsInput(obj: CloudFormationListStackSetsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
    'Status': obj.status,
    'CallAs': obj.callAs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListStackSetsOutput
 */
export interface CloudFormationListStackSetsOutput {
  /**
   * @schema CloudFormationListStackSetsOutput#Summaries
   */
  readonly summaries?: CloudFormationStackSetSummary[];

  /**
   * @schema CloudFormationListStackSetsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationListStackSetsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListStackSetsOutput(obj: CloudFormationListStackSetsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Summaries': obj.summaries?.map(y => toJson_CloudFormationStackSetSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListStacksInput
 */
export interface CloudFormationListStacksInput {
  /**
   * @schema CloudFormationListStacksInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudFormationListStacksInput#StackStatusFilter
   */
  readonly stackStatusFilter?: string[];

}

/**
 * Converts an object of type 'CloudFormationListStacksInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListStacksInput(obj: CloudFormationListStacksInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
    'StackStatusFilter': obj.stackStatusFilter?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListStacksOutput
 */
export interface CloudFormationListStacksOutput {
  /**
   * @schema CloudFormationListStacksOutput#StackSummaries
   */
  readonly stackSummaries?: CloudFormationStackSummary[];

  /**
   * @schema CloudFormationListStacksOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationListStacksOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListStacksOutput(obj: CloudFormationListStacksOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSummaries': obj.stackSummaries?.map(y => toJson_CloudFormationStackSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListTypeRegistrationsInput
 */
export interface CloudFormationListTypeRegistrationsInput {
  /**
   * @schema CloudFormationListTypeRegistrationsInput#Type
   */
  readonly type?: string;

  /**
   * @schema CloudFormationListTypeRegistrationsInput#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema CloudFormationListTypeRegistrationsInput#TypeArn
   */
  readonly typeArn?: string;

  /**
   * @schema CloudFormationListTypeRegistrationsInput#RegistrationStatusFilter
   */
  readonly registrationStatusFilter?: string;

  /**
   * @schema CloudFormationListTypeRegistrationsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudFormationListTypeRegistrationsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationListTypeRegistrationsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListTypeRegistrationsInput(obj: CloudFormationListTypeRegistrationsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'TypeName': obj.typeName,
    'TypeArn': obj.typeArn,
    'RegistrationStatusFilter': obj.registrationStatusFilter,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListTypeRegistrationsOutput
 */
export interface CloudFormationListTypeRegistrationsOutput {
  /**
   * @schema CloudFormationListTypeRegistrationsOutput#RegistrationTokenList
   */
  readonly registrationTokenList?: string[];

  /**
   * @schema CloudFormationListTypeRegistrationsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationListTypeRegistrationsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListTypeRegistrationsOutput(obj: CloudFormationListTypeRegistrationsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistrationTokenList': obj.registrationTokenList?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListTypeVersionsInput
 */
export interface CloudFormationListTypeVersionsInput {
  /**
   * @schema CloudFormationListTypeVersionsInput#Type
   */
  readonly type?: string;

  /**
   * @schema CloudFormationListTypeVersionsInput#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema CloudFormationListTypeVersionsInput#Arn
   */
  readonly arn?: string;

  /**
   * @schema CloudFormationListTypeVersionsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudFormationListTypeVersionsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudFormationListTypeVersionsInput#DeprecatedStatus
   */
  readonly deprecatedStatus?: string;

  /**
   * @schema CloudFormationListTypeVersionsInput#PublisherId
   */
  readonly publisherId?: string;

}

/**
 * Converts an object of type 'CloudFormationListTypeVersionsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListTypeVersionsInput(obj: CloudFormationListTypeVersionsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'TypeName': obj.typeName,
    'Arn': obj.arn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
    'DeprecatedStatus': obj.deprecatedStatus,
    'PublisherId': obj.publisherId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListTypeVersionsOutput
 */
export interface CloudFormationListTypeVersionsOutput {
  /**
   * @schema CloudFormationListTypeVersionsOutput#TypeVersionSummaries
   */
  readonly typeVersionSummaries?: CloudFormationTypeVersionSummary[];

  /**
   * @schema CloudFormationListTypeVersionsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationListTypeVersionsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListTypeVersionsOutput(obj: CloudFormationListTypeVersionsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypeVersionSummaries': obj.typeVersionSummaries?.map(y => toJson_CloudFormationTypeVersionSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListTypesInput
 */
export interface CloudFormationListTypesInput {
  /**
   * @schema CloudFormationListTypesInput#Visibility
   */
  readonly visibility?: string;

  /**
   * @schema CloudFormationListTypesInput#ProvisioningType
   */
  readonly provisioningType?: string;

  /**
   * @schema CloudFormationListTypesInput#DeprecatedStatus
   */
  readonly deprecatedStatus?: string;

  /**
   * @schema CloudFormationListTypesInput#Type
   */
  readonly type?: string;

  /**
   * @schema CloudFormationListTypesInput#Filters
   */
  readonly filters?: CloudFormationTypeFilters;

  /**
   * @schema CloudFormationListTypesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudFormationListTypesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationListTypesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListTypesInput(obj: CloudFormationListTypesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Visibility': obj.visibility,
    'ProvisioningType': obj.provisioningType,
    'DeprecatedStatus': obj.deprecatedStatus,
    'Type': obj.type,
    'Filters': toJson_CloudFormationTypeFilters(obj.filters),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationListTypesOutput
 */
export interface CloudFormationListTypesOutput {
  /**
   * @schema CloudFormationListTypesOutput#TypeSummaries
   */
  readonly typeSummaries?: CloudFormationTypeSummary[];

  /**
   * @schema CloudFormationListTypesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CloudFormationListTypesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationListTypesOutput(obj: CloudFormationListTypesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypeSummaries': obj.typeSummaries?.map(y => toJson_CloudFormationTypeSummary(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationPublishTypeInput
 */
export interface CloudFormationPublishTypeInput {
  /**
   * @schema CloudFormationPublishTypeInput#Type
   */
  readonly type?: string;

  /**
   * @schema CloudFormationPublishTypeInput#Arn
   */
  readonly arn?: string;

  /**
   * @schema CloudFormationPublishTypeInput#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema CloudFormationPublishTypeInput#PublicVersionNumber
   */
  readonly publicVersionNumber?: string;

}

/**
 * Converts an object of type 'CloudFormationPublishTypeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationPublishTypeInput(obj: CloudFormationPublishTypeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Arn': obj.arn,
    'TypeName': obj.typeName,
    'PublicVersionNumber': obj.publicVersionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationPublishTypeOutput
 */
export interface CloudFormationPublishTypeOutput {
  /**
   * @schema CloudFormationPublishTypeOutput#PublicTypeArn
   */
  readonly publicTypeArn?: string;

}

/**
 * Converts an object of type 'CloudFormationPublishTypeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationPublishTypeOutput(obj: CloudFormationPublishTypeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublicTypeArn': obj.publicTypeArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationRecordHandlerProgressInput
 */
export interface CloudFormationRecordHandlerProgressInput {
  /**
   * @schema CloudFormationRecordHandlerProgressInput#BearerToken
   */
  readonly bearerToken?: string;

  /**
   * @schema CloudFormationRecordHandlerProgressInput#OperationStatus
   */
  readonly operationStatus?: string;

  /**
   * @schema CloudFormationRecordHandlerProgressInput#CurrentOperationStatus
   */
  readonly currentOperationStatus?: string;

  /**
   * @schema CloudFormationRecordHandlerProgressInput#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema CloudFormationRecordHandlerProgressInput#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema CloudFormationRecordHandlerProgressInput#ResourceModel
   */
  readonly resourceModel?: string;

  /**
   * @schema CloudFormationRecordHandlerProgressInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'CloudFormationRecordHandlerProgressInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationRecordHandlerProgressInput(obj: CloudFormationRecordHandlerProgressInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BearerToken': obj.bearerToken,
    'OperationStatus': obj.operationStatus,
    'CurrentOperationStatus': obj.currentOperationStatus,
    'StatusMessage': obj.statusMessage,
    'ErrorCode': obj.errorCode,
    'ResourceModel': obj.resourceModel,
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationRecordHandlerProgressOutput
 */
export interface CloudFormationRecordHandlerProgressOutput {
}

/**
 * Converts an object of type 'CloudFormationRecordHandlerProgressOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationRecordHandlerProgressOutput(obj: CloudFormationRecordHandlerProgressOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationRegisterPublisherInput
 */
export interface CloudFormationRegisterPublisherInput {
  /**
   * @schema CloudFormationRegisterPublisherInput#AcceptTermsAndConditions
   */
  readonly acceptTermsAndConditions?: boolean;

  /**
   * @schema CloudFormationRegisterPublisherInput#ConnectionArn
   */
  readonly connectionArn?: string;

}

/**
 * Converts an object of type 'CloudFormationRegisterPublisherInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationRegisterPublisherInput(obj: CloudFormationRegisterPublisherInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AcceptTermsAndConditions': obj.acceptTermsAndConditions,
    'ConnectionArn': obj.connectionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationRegisterPublisherOutput
 */
export interface CloudFormationRegisterPublisherOutput {
  /**
   * @schema CloudFormationRegisterPublisherOutput#PublisherId
   */
  readonly publisherId?: string;

}

/**
 * Converts an object of type 'CloudFormationRegisterPublisherOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationRegisterPublisherOutput(obj: CloudFormationRegisterPublisherOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PublisherId': obj.publisherId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationRegisterTypeInput
 */
export interface CloudFormationRegisterTypeInput {
  /**
   * @schema CloudFormationRegisterTypeInput#Type
   */
  readonly type?: string;

  /**
   * @schema CloudFormationRegisterTypeInput#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema CloudFormationRegisterTypeInput#SchemaHandlerPackage
   */
  readonly schemaHandlerPackage?: string;

  /**
   * @schema CloudFormationRegisterTypeInput#LoggingConfig
   */
  readonly loggingConfig?: CloudFormationLoggingConfig;

  /**
   * @schema CloudFormationRegisterTypeInput#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema CloudFormationRegisterTypeInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'CloudFormationRegisterTypeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationRegisterTypeInput(obj: CloudFormationRegisterTypeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'TypeName': obj.typeName,
    'SchemaHandlerPackage': obj.schemaHandlerPackage,
    'LoggingConfig': toJson_CloudFormationLoggingConfig(obj.loggingConfig),
    'ExecutionRoleArn': obj.executionRoleArn,
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationRegisterTypeOutput
 */
export interface CloudFormationRegisterTypeOutput {
  /**
   * @schema CloudFormationRegisterTypeOutput#RegistrationToken
   */
  readonly registrationToken?: string;

}

/**
 * Converts an object of type 'CloudFormationRegisterTypeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationRegisterTypeOutput(obj: CloudFormationRegisterTypeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegistrationToken': obj.registrationToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationSetStackPolicyInput
 */
export interface CloudFormationSetStackPolicyInput {
  /**
   * @schema CloudFormationSetStackPolicyInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationSetStackPolicyInput#StackPolicyBody
   */
  readonly stackPolicyBody?: string;

  /**
   * @schema CloudFormationSetStackPolicyInput#StackPolicyURL
   */
  readonly stackPolicyUrl?: string;

}

/**
 * Converts an object of type 'CloudFormationSetStackPolicyInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationSetStackPolicyInput(obj: CloudFormationSetStackPolicyInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'StackPolicyBody': obj.stackPolicyBody,
    'StackPolicyURL': obj.stackPolicyUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationSetTypeConfigurationInput
 */
export interface CloudFormationSetTypeConfigurationInput {
  /**
   * @schema CloudFormationSetTypeConfigurationInput#TypeArn
   */
  readonly typeArn?: string;

  /**
   * @schema CloudFormationSetTypeConfigurationInput#Configuration
   */
  readonly configuration?: string;

  /**
   * @schema CloudFormationSetTypeConfigurationInput#ConfigurationAlias
   */
  readonly configurationAlias?: string;

  /**
   * @schema CloudFormationSetTypeConfigurationInput#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema CloudFormationSetTypeConfigurationInput#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'CloudFormationSetTypeConfigurationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationSetTypeConfigurationInput(obj: CloudFormationSetTypeConfigurationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypeArn': obj.typeArn,
    'Configuration': obj.configuration,
    'ConfigurationAlias': obj.configurationAlias,
    'TypeName': obj.typeName,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationSetTypeConfigurationOutput
 */
export interface CloudFormationSetTypeConfigurationOutput {
  /**
   * @schema CloudFormationSetTypeConfigurationOutput#ConfigurationArn
   */
  readonly configurationArn?: string;

}

/**
 * Converts an object of type 'CloudFormationSetTypeConfigurationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationSetTypeConfigurationOutput(obj: CloudFormationSetTypeConfigurationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConfigurationArn': obj.configurationArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationSetTypeDefaultVersionInput
 */
export interface CloudFormationSetTypeDefaultVersionInput {
  /**
   * @schema CloudFormationSetTypeDefaultVersionInput#Arn
   */
  readonly arn?: string;

  /**
   * @schema CloudFormationSetTypeDefaultVersionInput#Type
   */
  readonly type?: string;

  /**
   * @schema CloudFormationSetTypeDefaultVersionInput#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema CloudFormationSetTypeDefaultVersionInput#VersionId
   */
  readonly versionId?: string;

}

/**
 * Converts an object of type 'CloudFormationSetTypeDefaultVersionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationSetTypeDefaultVersionInput(obj: CloudFormationSetTypeDefaultVersionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Type': obj.type,
    'TypeName': obj.typeName,
    'VersionId': obj.versionId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationSetTypeDefaultVersionOutput
 */
export interface CloudFormationSetTypeDefaultVersionOutput {
}

/**
 * Converts an object of type 'CloudFormationSetTypeDefaultVersionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationSetTypeDefaultVersionOutput(obj: CloudFormationSetTypeDefaultVersionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationSignalResourceInput
 */
export interface CloudFormationSignalResourceInput {
  /**
   * @schema CloudFormationSignalResourceInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationSignalResourceInput#LogicalResourceId
   */
  readonly logicalResourceId?: string;

  /**
   * @schema CloudFormationSignalResourceInput#UniqueId
   */
  readonly uniqueId?: string;

  /**
   * @schema CloudFormationSignalResourceInput#Status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'CloudFormationSignalResourceInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationSignalResourceInput(obj: CloudFormationSignalResourceInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'LogicalResourceId': obj.logicalResourceId,
    'UniqueId': obj.uniqueId,
    'Status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStopStackSetOperationInput
 */
export interface CloudFormationStopStackSetOperationInput {
  /**
   * @schema CloudFormationStopStackSetOperationInput#StackSetName
   */
  readonly stackSetName?: string;

  /**
   * @schema CloudFormationStopStackSetOperationInput#OperationId
   */
  readonly operationId?: string;

  /**
   * @schema CloudFormationStopStackSetOperationInput#CallAs
   */
  readonly callAs?: string;

}

/**
 * Converts an object of type 'CloudFormationStopStackSetOperationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStopStackSetOperationInput(obj: CloudFormationStopStackSetOperationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetName': obj.stackSetName,
    'OperationId': obj.operationId,
    'CallAs': obj.callAs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStopStackSetOperationOutput
 */
export interface CloudFormationStopStackSetOperationOutput {
}

/**
 * Converts an object of type 'CloudFormationStopStackSetOperationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStopStackSetOperationOutput(obj: CloudFormationStopStackSetOperationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationTestTypeInput
 */
export interface CloudFormationTestTypeInput {
  /**
   * @schema CloudFormationTestTypeInput#Arn
   */
  readonly arn?: string;

  /**
   * @schema CloudFormationTestTypeInput#Type
   */
  readonly type?: string;

  /**
   * @schema CloudFormationTestTypeInput#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema CloudFormationTestTypeInput#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema CloudFormationTestTypeInput#LogDeliveryBucket
   */
  readonly logDeliveryBucket?: string;

}

/**
 * Converts an object of type 'CloudFormationTestTypeInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationTestTypeInput(obj: CloudFormationTestTypeInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Type': obj.type,
    'TypeName': obj.typeName,
    'VersionId': obj.versionId,
    'LogDeliveryBucket': obj.logDeliveryBucket,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationTestTypeOutput
 */
export interface CloudFormationTestTypeOutput {
  /**
   * @schema CloudFormationTestTypeOutput#TypeVersionArn
   */
  readonly typeVersionArn?: string;

}

/**
 * Converts an object of type 'CloudFormationTestTypeOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationTestTypeOutput(obj: CloudFormationTestTypeOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypeVersionArn': obj.typeVersionArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationUpdateStackInput
 */
export interface CloudFormationUpdateStackInput {
  /**
   * @schema CloudFormationUpdateStackInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationUpdateStackInput#TemplateBody
   */
  readonly templateBody?: string;

  /**
   * @schema CloudFormationUpdateStackInput#TemplateURL
   */
  readonly templateUrl?: string;

  /**
   * @schema CloudFormationUpdateStackInput#UsePreviousTemplate
   */
  readonly usePreviousTemplate?: boolean;

  /**
   * @schema CloudFormationUpdateStackInput#StackPolicyDuringUpdateBody
   */
  readonly stackPolicyDuringUpdateBody?: string;

  /**
   * @schema CloudFormationUpdateStackInput#StackPolicyDuringUpdateURL
   */
  readonly stackPolicyDuringUpdateUrl?: string;

  /**
   * @schema CloudFormationUpdateStackInput#Parameters
   */
  readonly parameters?: CloudFormationParameter[];

  /**
   * @schema CloudFormationUpdateStackInput#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema CloudFormationUpdateStackInput#ResourceTypes
   */
  readonly resourceTypes?: string[];

  /**
   * @schema CloudFormationUpdateStackInput#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema CloudFormationUpdateStackInput#RollbackConfiguration
   */
  readonly rollbackConfiguration?: CloudFormationRollbackConfiguration;

  /**
   * @schema CloudFormationUpdateStackInput#StackPolicyBody
   */
  readonly stackPolicyBody?: string;

  /**
   * @schema CloudFormationUpdateStackInput#StackPolicyURL
   */
  readonly stackPolicyUrl?: string;

  /**
   * @schema CloudFormationUpdateStackInput#NotificationARNs
   */
  readonly notificationArNs?: string[];

  /**
   * @schema CloudFormationUpdateStackInput#Tags
   */
  readonly tags?: CloudFormationTag[];

  /**
   * @schema CloudFormationUpdateStackInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'CloudFormationUpdateStackInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationUpdateStackInput(obj: CloudFormationUpdateStackInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'TemplateBody': obj.templateBody,
    'TemplateURL': obj.templateUrl,
    'UsePreviousTemplate': obj.usePreviousTemplate,
    'StackPolicyDuringUpdateBody': obj.stackPolicyDuringUpdateBody,
    'StackPolicyDuringUpdateURL': obj.stackPolicyDuringUpdateUrl,
    'Parameters': obj.parameters?.map(y => toJson_CloudFormationParameter(y)),
    'Capabilities': obj.capabilities?.map(y => y),
    'ResourceTypes': obj.resourceTypes?.map(y => y),
    'RoleARN': obj.roleArn,
    'RollbackConfiguration': toJson_CloudFormationRollbackConfiguration(obj.rollbackConfiguration),
    'StackPolicyBody': obj.stackPolicyBody,
    'StackPolicyURL': obj.stackPolicyUrl,
    'NotificationARNs': obj.notificationArNs?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_CloudFormationTag(y)),
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationUpdateStackOutput
 */
export interface CloudFormationUpdateStackOutput {
  /**
   * @schema CloudFormationUpdateStackOutput#StackId
   */
  readonly stackId?: string;

}

/**
 * Converts an object of type 'CloudFormationUpdateStackOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationUpdateStackOutput(obj: CloudFormationUpdateStackOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationUpdateStackInstancesInput
 */
export interface CloudFormationUpdateStackInstancesInput {
  /**
   * @schema CloudFormationUpdateStackInstancesInput#StackSetName
   */
  readonly stackSetName?: string;

  /**
   * @schema CloudFormationUpdateStackInstancesInput#Accounts
   */
  readonly accounts?: string[];

  /**
   * @schema CloudFormationUpdateStackInstancesInput#DeploymentTargets
   */
  readonly deploymentTargets?: CloudFormationDeploymentTargets;

  /**
   * @schema CloudFormationUpdateStackInstancesInput#Regions
   */
  readonly regions?: string[];

  /**
   * @schema CloudFormationUpdateStackInstancesInput#ParameterOverrides
   */
  readonly parameterOverrides?: CloudFormationParameter[];

  /**
   * @schema CloudFormationUpdateStackInstancesInput#OperationPreferences
   */
  readonly operationPreferences?: CloudFormationStackSetOperationPreferences;

  /**
   * @schema CloudFormationUpdateStackInstancesInput#OperationId
   */
  readonly operationId?: string;

  /**
   * @schema CloudFormationUpdateStackInstancesInput#CallAs
   */
  readonly callAs?: string;

}

/**
 * Converts an object of type 'CloudFormationUpdateStackInstancesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationUpdateStackInstancesInput(obj: CloudFormationUpdateStackInstancesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetName': obj.stackSetName,
    'Accounts': obj.accounts?.map(y => y),
    'DeploymentTargets': toJson_CloudFormationDeploymentTargets(obj.deploymentTargets),
    'Regions': obj.regions?.map(y => y),
    'ParameterOverrides': obj.parameterOverrides?.map(y => toJson_CloudFormationParameter(y)),
    'OperationPreferences': toJson_CloudFormationStackSetOperationPreferences(obj.operationPreferences),
    'OperationId': obj.operationId,
    'CallAs': obj.callAs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationUpdateStackInstancesOutput
 */
export interface CloudFormationUpdateStackInstancesOutput {
  /**
   * @schema CloudFormationUpdateStackInstancesOutput#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'CloudFormationUpdateStackInstancesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationUpdateStackInstancesOutput(obj: CloudFormationUpdateStackInstancesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationUpdateStackSetInput
 */
export interface CloudFormationUpdateStackSetInput {
  /**
   * @schema CloudFormationUpdateStackSetInput#StackSetName
   */
  readonly stackSetName?: string;

  /**
   * @schema CloudFormationUpdateStackSetInput#Description
   */
  readonly description?: string;

  /**
   * @schema CloudFormationUpdateStackSetInput#TemplateBody
   */
  readonly templateBody?: string;

  /**
   * @schema CloudFormationUpdateStackSetInput#TemplateURL
   */
  readonly templateUrl?: string;

  /**
   * @schema CloudFormationUpdateStackSetInput#UsePreviousTemplate
   */
  readonly usePreviousTemplate?: boolean;

  /**
   * @schema CloudFormationUpdateStackSetInput#Parameters
   */
  readonly parameters?: CloudFormationParameter[];

  /**
   * @schema CloudFormationUpdateStackSetInput#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema CloudFormationUpdateStackSetInput#Tags
   */
  readonly tags?: CloudFormationTag[];

  /**
   * @schema CloudFormationUpdateStackSetInput#OperationPreferences
   */
  readonly operationPreferences?: CloudFormationStackSetOperationPreferences;

  /**
   * @schema CloudFormationUpdateStackSetInput#AdministrationRoleARN
   */
  readonly administrationRoleArn?: string;

  /**
   * @schema CloudFormationUpdateStackSetInput#ExecutionRoleName
   */
  readonly executionRoleName?: string;

  /**
   * @schema CloudFormationUpdateStackSetInput#DeploymentTargets
   */
  readonly deploymentTargets?: CloudFormationDeploymentTargets;

  /**
   * @schema CloudFormationUpdateStackSetInput#PermissionModel
   */
  readonly permissionModel?: string;

  /**
   * @schema CloudFormationUpdateStackSetInput#AutoDeployment
   */
  readonly autoDeployment?: CloudFormationAutoDeployment;

  /**
   * @schema CloudFormationUpdateStackSetInput#OperationId
   */
  readonly operationId?: string;

  /**
   * @schema CloudFormationUpdateStackSetInput#Accounts
   */
  readonly accounts?: string[];

  /**
   * @schema CloudFormationUpdateStackSetInput#Regions
   */
  readonly regions?: string[];

  /**
   * @schema CloudFormationUpdateStackSetInput#CallAs
   */
  readonly callAs?: string;

}

/**
 * Converts an object of type 'CloudFormationUpdateStackSetInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationUpdateStackSetInput(obj: CloudFormationUpdateStackSetInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetName': obj.stackSetName,
    'Description': obj.description,
    'TemplateBody': obj.templateBody,
    'TemplateURL': obj.templateUrl,
    'UsePreviousTemplate': obj.usePreviousTemplate,
    'Parameters': obj.parameters?.map(y => toJson_CloudFormationParameter(y)),
    'Capabilities': obj.capabilities?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_CloudFormationTag(y)),
    'OperationPreferences': toJson_CloudFormationStackSetOperationPreferences(obj.operationPreferences),
    'AdministrationRoleARN': obj.administrationRoleArn,
    'ExecutionRoleName': obj.executionRoleName,
    'DeploymentTargets': toJson_CloudFormationDeploymentTargets(obj.deploymentTargets),
    'PermissionModel': obj.permissionModel,
    'AutoDeployment': toJson_CloudFormationAutoDeployment(obj.autoDeployment),
    'OperationId': obj.operationId,
    'Accounts': obj.accounts?.map(y => y),
    'Regions': obj.regions?.map(y => y),
    'CallAs': obj.callAs,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationUpdateStackSetOutput
 */
export interface CloudFormationUpdateStackSetOutput {
  /**
   * @schema CloudFormationUpdateStackSetOutput#OperationId
   */
  readonly operationId?: string;

}

/**
 * Converts an object of type 'CloudFormationUpdateStackSetOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationUpdateStackSetOutput(obj: CloudFormationUpdateStackSetOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationUpdateTerminationProtectionInput
 */
export interface CloudFormationUpdateTerminationProtectionInput {
  /**
   * @schema CloudFormationUpdateTerminationProtectionInput#EnableTerminationProtection
   */
  readonly enableTerminationProtection?: boolean;

  /**
   * @schema CloudFormationUpdateTerminationProtectionInput#StackName
   */
  readonly stackName?: string;

}

/**
 * Converts an object of type 'CloudFormationUpdateTerminationProtectionInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationUpdateTerminationProtectionInput(obj: CloudFormationUpdateTerminationProtectionInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnableTerminationProtection': obj.enableTerminationProtection,
    'StackName': obj.stackName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationUpdateTerminationProtectionOutput
 */
export interface CloudFormationUpdateTerminationProtectionOutput {
  /**
   * @schema CloudFormationUpdateTerminationProtectionOutput#StackId
   */
  readonly stackId?: string;

}

/**
 * Converts an object of type 'CloudFormationUpdateTerminationProtectionOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationUpdateTerminationProtectionOutput(obj: CloudFormationUpdateTerminationProtectionOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationValidateTemplateInput
 */
export interface CloudFormationValidateTemplateInput {
  /**
   * @schema CloudFormationValidateTemplateInput#TemplateBody
   */
  readonly templateBody?: string;

  /**
   * @schema CloudFormationValidateTemplateInput#TemplateURL
   */
  readonly templateUrl?: string;

}

/**
 * Converts an object of type 'CloudFormationValidateTemplateInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationValidateTemplateInput(obj: CloudFormationValidateTemplateInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemplateBody': obj.templateBody,
    'TemplateURL': obj.templateUrl,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationValidateTemplateOutput
 */
export interface CloudFormationValidateTemplateOutput {
  /**
   * @schema CloudFormationValidateTemplateOutput#Parameters
   */
  readonly parameters?: CloudFormationTemplateParameter[];

  /**
   * @schema CloudFormationValidateTemplateOutput#Description
   */
  readonly description?: string;

  /**
   * @schema CloudFormationValidateTemplateOutput#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema CloudFormationValidateTemplateOutput#CapabilitiesReason
   */
  readonly capabilitiesReason?: string;

  /**
   * @schema CloudFormationValidateTemplateOutput#DeclaredTransforms
   */
  readonly declaredTransforms?: string[];

}

/**
 * Converts an object of type 'CloudFormationValidateTemplateOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationValidateTemplateOutput(obj: CloudFormationValidateTemplateOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Parameters': obj.parameters?.map(y => toJson_CloudFormationTemplateParameter(y)),
    'Description': obj.description,
    'Capabilities': obj.capabilities?.map(y => y),
    'CapabilitiesReason': obj.capabilitiesReason,
    'DeclaredTransforms': obj.declaredTransforms?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationLoggingConfig
 */
export interface CloudFormationLoggingConfig {
  /**
   * @schema CloudFormationLoggingConfig#LogRoleArn
   */
  readonly logRoleArn?: string;

  /**
   * @schema CloudFormationLoggingConfig#LogGroupName
   */
  readonly logGroupName?: string;

}

/**
 * Converts an object of type 'CloudFormationLoggingConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationLoggingConfig(obj: CloudFormationLoggingConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogRoleArn': obj.logRoleArn,
    'LogGroupName': obj.logGroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationTypeConfigurationIdentifier
 */
export interface CloudFormationTypeConfigurationIdentifier {
  /**
   * @schema CloudFormationTypeConfigurationIdentifier#TypeArn
   */
  readonly typeArn?: string;

  /**
   * @schema CloudFormationTypeConfigurationIdentifier#TypeConfigurationAlias
   */
  readonly typeConfigurationAlias?: string;

  /**
   * @schema CloudFormationTypeConfigurationIdentifier#TypeConfigurationArn
   */
  readonly typeConfigurationArn?: string;

  /**
   * @schema CloudFormationTypeConfigurationIdentifier#Type
   */
  readonly type?: string;

  /**
   * @schema CloudFormationTypeConfigurationIdentifier#TypeName
   */
  readonly typeName?: string;

}

/**
 * Converts an object of type 'CloudFormationTypeConfigurationIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationTypeConfigurationIdentifier(obj: CloudFormationTypeConfigurationIdentifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypeArn': obj.typeArn,
    'TypeConfigurationAlias': obj.typeConfigurationAlias,
    'TypeConfigurationArn': obj.typeConfigurationArn,
    'Type': obj.type,
    'TypeName': obj.typeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationBatchDescribeTypeConfigurationsError
 */
export interface CloudFormationBatchDescribeTypeConfigurationsError {
  /**
   * @schema CloudFormationBatchDescribeTypeConfigurationsError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema CloudFormationBatchDescribeTypeConfigurationsError#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema CloudFormationBatchDescribeTypeConfigurationsError#TypeConfigurationIdentifier
   */
  readonly typeConfigurationIdentifier?: CloudFormationTypeConfigurationIdentifier;

}

/**
 * Converts an object of type 'CloudFormationBatchDescribeTypeConfigurationsError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationBatchDescribeTypeConfigurationsError(obj: CloudFormationBatchDescribeTypeConfigurationsError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
    'TypeConfigurationIdentifier': toJson_CloudFormationTypeConfigurationIdentifier(obj.typeConfigurationIdentifier),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationTypeConfigurationDetails
 */
export interface CloudFormationTypeConfigurationDetails {
  /**
   * @schema CloudFormationTypeConfigurationDetails#Arn
   */
  readonly arn?: string;

  /**
   * @schema CloudFormationTypeConfigurationDetails#Alias
   */
  readonly alias?: string;

  /**
   * @schema CloudFormationTypeConfigurationDetails#Configuration
   */
  readonly configuration?: string;

  /**
   * @schema CloudFormationTypeConfigurationDetails#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema CloudFormationTypeConfigurationDetails#TypeArn
   */
  readonly typeArn?: string;

  /**
   * @schema CloudFormationTypeConfigurationDetails#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema CloudFormationTypeConfigurationDetails#IsDefaultConfiguration
   */
  readonly isDefaultConfiguration?: boolean;

}

/**
 * Converts an object of type 'CloudFormationTypeConfigurationDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationTypeConfigurationDetails(obj: CloudFormationTypeConfigurationDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Alias': obj.alias,
    'Configuration': obj.configuration,
    'LastUpdated': obj.lastUpdated,
    'TypeArn': obj.typeArn,
    'TypeName': obj.typeName,
    'IsDefaultConfiguration': obj.isDefaultConfiguration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationParameter
 */
export interface CloudFormationParameter {
  /**
   * @schema CloudFormationParameter#ParameterKey
   */
  readonly parameterKey?: string;

  /**
   * @schema CloudFormationParameter#ParameterValue
   */
  readonly parameterValue?: string;

  /**
   * @schema CloudFormationParameter#UsePreviousValue
   */
  readonly usePreviousValue?: boolean;

  /**
   * @schema CloudFormationParameter#ResolvedValue
   */
  readonly resolvedValue?: string;

}

/**
 * Converts an object of type 'CloudFormationParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationParameter(obj: CloudFormationParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterKey': obj.parameterKey,
    'ParameterValue': obj.parameterValue,
    'UsePreviousValue': obj.usePreviousValue,
    'ResolvedValue': obj.resolvedValue,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationRollbackConfiguration
 */
export interface CloudFormationRollbackConfiguration {
  /**
   * @schema CloudFormationRollbackConfiguration#RollbackTriggers
   */
  readonly rollbackTriggers?: CloudFormationRollbackTrigger[];

  /**
   * @schema CloudFormationRollbackConfiguration#MonitoringTimeInMinutes
   */
  readonly monitoringTimeInMinutes?: number;

}

/**
 * Converts an object of type 'CloudFormationRollbackConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationRollbackConfiguration(obj: CloudFormationRollbackConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RollbackTriggers': obj.rollbackTriggers?.map(y => toJson_CloudFormationRollbackTrigger(y)),
    'MonitoringTimeInMinutes': obj.monitoringTimeInMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationTag
 */
export interface CloudFormationTag {
  /**
   * @schema CloudFormationTag#Key
   */
  readonly key?: string;

  /**
   * @schema CloudFormationTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'CloudFormationTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationTag(obj: CloudFormationTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationResourceToImport
 */
export interface CloudFormationResourceToImport {
  /**
   * @schema CloudFormationResourceToImport#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema CloudFormationResourceToImport#LogicalResourceId
   */
  readonly logicalResourceId?: string;

  /**
   * @schema CloudFormationResourceToImport#ResourceIdentifier
   */
  readonly resourceIdentifier?: { [key: string]: string };

}

/**
 * Converts an object of type 'CloudFormationResourceToImport' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationResourceToImport(obj: CloudFormationResourceToImport | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceType': obj.resourceType,
    'LogicalResourceId': obj.logicalResourceId,
    'ResourceIdentifier': ((obj.resourceIdentifier) === undefined) ? undefined : (Object.entries(obj.resourceIdentifier).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationDeploymentTargets
 */
export interface CloudFormationDeploymentTargets {
  /**
   * @schema CloudFormationDeploymentTargets#Accounts
   */
  readonly accounts?: string[];

  /**
   * @schema CloudFormationDeploymentTargets#AccountsUrl
   */
  readonly accountsUrl?: string;

  /**
   * @schema CloudFormationDeploymentTargets#OrganizationalUnitIds
   */
  readonly organizationalUnitIds?: string[];

}

/**
 * Converts an object of type 'CloudFormationDeploymentTargets' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationDeploymentTargets(obj: CloudFormationDeploymentTargets | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Accounts': obj.accounts?.map(y => y),
    'AccountsUrl': obj.accountsUrl,
    'OrganizationalUnitIds': obj.organizationalUnitIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStackSetOperationPreferences
 */
export interface CloudFormationStackSetOperationPreferences {
  /**
   * @schema CloudFormationStackSetOperationPreferences#RegionConcurrencyType
   */
  readonly regionConcurrencyType?: string;

  /**
   * @schema CloudFormationStackSetOperationPreferences#RegionOrder
   */
  readonly regionOrder?: string[];

  /**
   * @schema CloudFormationStackSetOperationPreferences#FailureToleranceCount
   */
  readonly failureToleranceCount?: number;

  /**
   * @schema CloudFormationStackSetOperationPreferences#FailureTolerancePercentage
   */
  readonly failureTolerancePercentage?: number;

  /**
   * @schema CloudFormationStackSetOperationPreferences#MaxConcurrentCount
   */
  readonly maxConcurrentCount?: number;

  /**
   * @schema CloudFormationStackSetOperationPreferences#MaxConcurrentPercentage
   */
  readonly maxConcurrentPercentage?: number;

}

/**
 * Converts an object of type 'CloudFormationStackSetOperationPreferences' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStackSetOperationPreferences(obj: CloudFormationStackSetOperationPreferences | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RegionConcurrencyType': obj.regionConcurrencyType,
    'RegionOrder': obj.regionOrder?.map(y => y),
    'FailureToleranceCount': obj.failureToleranceCount,
    'FailureTolerancePercentage': obj.failureTolerancePercentage,
    'MaxConcurrentCount': obj.maxConcurrentCount,
    'MaxConcurrentPercentage': obj.maxConcurrentPercentage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationAutoDeployment
 */
export interface CloudFormationAutoDeployment {
  /**
   * @schema CloudFormationAutoDeployment#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CloudFormationAutoDeployment#RetainStacksOnAccountRemoval
   */
  readonly retainStacksOnAccountRemoval?: boolean;

}

/**
 * Converts an object of type 'CloudFormationAutoDeployment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationAutoDeployment(obj: CloudFormationAutoDeployment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'RetainStacksOnAccountRemoval': obj.retainStacksOnAccountRemoval,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationAccountLimit
 */
export interface CloudFormationAccountLimit {
  /**
   * @schema CloudFormationAccountLimit#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFormationAccountLimit#Value
   */
  readonly value?: number;

}

/**
 * Converts an object of type 'CloudFormationAccountLimit' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationAccountLimit(obj: CloudFormationAccountLimit | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationChange
 */
export interface CloudFormationChange {
  /**
   * @schema CloudFormationChange#Type
   */
  readonly type?: string;

  /**
   * @schema CloudFormationChange#ResourceChange
   */
  readonly resourceChange?: CloudFormationResourceChange;

}

/**
 * Converts an object of type 'CloudFormationChange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationChange(obj: CloudFormationChange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'ResourceChange': toJson_CloudFormationResourceChange(obj.resourceChange),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStackEvent
 */
export interface CloudFormationStackEvent {
  /**
   * @schema CloudFormationStackEvent#StackId
   */
  readonly stackId?: string;

  /**
   * @schema CloudFormationStackEvent#EventId
   */
  readonly eventId?: string;

  /**
   * @schema CloudFormationStackEvent#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationStackEvent#LogicalResourceId
   */
  readonly logicalResourceId?: string;

  /**
   * @schema CloudFormationStackEvent#PhysicalResourceId
   */
  readonly physicalResourceId?: string;

  /**
   * @schema CloudFormationStackEvent#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema CloudFormationStackEvent#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema CloudFormationStackEvent#ResourceStatus
   */
  readonly resourceStatus?: string;

  /**
   * @schema CloudFormationStackEvent#ResourceStatusReason
   */
  readonly resourceStatusReason?: string;

  /**
   * @schema CloudFormationStackEvent#ResourceProperties
   */
  readonly resourceProperties?: string;

  /**
   * @schema CloudFormationStackEvent#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'CloudFormationStackEvent' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStackEvent(obj: CloudFormationStackEvent | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'EventId': obj.eventId,
    'StackName': obj.stackName,
    'LogicalResourceId': obj.logicalResourceId,
    'PhysicalResourceId': obj.physicalResourceId,
    'ResourceType': obj.resourceType,
    'Timestamp': obj.timestamp,
    'ResourceStatus': obj.resourceStatus,
    'ResourceStatusReason': obj.resourceStatusReason,
    'ResourceProperties': obj.resourceProperties,
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStackInstance
 */
export interface CloudFormationStackInstance {
  /**
   * @schema CloudFormationStackInstance#StackSetId
   */
  readonly stackSetId?: string;

  /**
   * @schema CloudFormationStackInstance#Region
   */
  readonly region?: string;

  /**
   * @schema CloudFormationStackInstance#Account
   */
  readonly account?: string;

  /**
   * @schema CloudFormationStackInstance#StackId
   */
  readonly stackId?: string;

  /**
   * @schema CloudFormationStackInstance#ParameterOverrides
   */
  readonly parameterOverrides?: CloudFormationParameter[];

  /**
   * @schema CloudFormationStackInstance#Status
   */
  readonly status?: string;

  /**
   * @schema CloudFormationStackInstance#StackInstanceStatus
   */
  readonly stackInstanceStatus?: CloudFormationStackInstanceComprehensiveStatus;

  /**
   * @schema CloudFormationStackInstance#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema CloudFormationStackInstance#OrganizationalUnitId
   */
  readonly organizationalUnitId?: string;

  /**
   * @schema CloudFormationStackInstance#DriftStatus
   */
  readonly driftStatus?: string;

  /**
   * @schema CloudFormationStackInstance#LastDriftCheckTimestamp
   */
  readonly lastDriftCheckTimestamp?: string;

}

/**
 * Converts an object of type 'CloudFormationStackInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStackInstance(obj: CloudFormationStackInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetId': obj.stackSetId,
    'Region': obj.region,
    'Account': obj.account,
    'StackId': obj.stackId,
    'ParameterOverrides': obj.parameterOverrides?.map(y => toJson_CloudFormationParameter(y)),
    'Status': obj.status,
    'StackInstanceStatus': toJson_CloudFormationStackInstanceComprehensiveStatus(obj.stackInstanceStatus),
    'StatusReason': obj.statusReason,
    'OrganizationalUnitId': obj.organizationalUnitId,
    'DriftStatus': obj.driftStatus,
    'LastDriftCheckTimestamp': obj.lastDriftCheckTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStackResourceDetail
 */
export interface CloudFormationStackResourceDetail {
  /**
   * @schema CloudFormationStackResourceDetail#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationStackResourceDetail#StackId
   */
  readonly stackId?: string;

  /**
   * @schema CloudFormationStackResourceDetail#LogicalResourceId
   */
  readonly logicalResourceId?: string;

  /**
   * @schema CloudFormationStackResourceDetail#PhysicalResourceId
   */
  readonly physicalResourceId?: string;

  /**
   * @schema CloudFormationStackResourceDetail#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema CloudFormationStackResourceDetail#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema CloudFormationStackResourceDetail#ResourceStatus
   */
  readonly resourceStatus?: string;

  /**
   * @schema CloudFormationStackResourceDetail#ResourceStatusReason
   */
  readonly resourceStatusReason?: string;

  /**
   * @schema CloudFormationStackResourceDetail#Description
   */
  readonly description?: string;

  /**
   * @schema CloudFormationStackResourceDetail#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema CloudFormationStackResourceDetail#DriftInformation
   */
  readonly driftInformation?: CloudFormationStackResourceDriftInformation;

  /**
   * @schema CloudFormationStackResourceDetail#ModuleInfo
   */
  readonly moduleInfo?: CloudFormationModuleInfo;

}

/**
 * Converts an object of type 'CloudFormationStackResourceDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStackResourceDetail(obj: CloudFormationStackResourceDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'StackId': obj.stackId,
    'LogicalResourceId': obj.logicalResourceId,
    'PhysicalResourceId': obj.physicalResourceId,
    'ResourceType': obj.resourceType,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'ResourceStatus': obj.resourceStatus,
    'ResourceStatusReason': obj.resourceStatusReason,
    'Description': obj.description,
    'Metadata': obj.metadata,
    'DriftInformation': toJson_CloudFormationStackResourceDriftInformation(obj.driftInformation),
    'ModuleInfo': toJson_CloudFormationModuleInfo(obj.moduleInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStackResourceDrift
 */
export interface CloudFormationStackResourceDrift {
  /**
   * @schema CloudFormationStackResourceDrift#StackId
   */
  readonly stackId?: string;

  /**
   * @schema CloudFormationStackResourceDrift#LogicalResourceId
   */
  readonly logicalResourceId?: string;

  /**
   * @schema CloudFormationStackResourceDrift#PhysicalResourceId
   */
  readonly physicalResourceId?: string;

  /**
   * @schema CloudFormationStackResourceDrift#PhysicalResourceIdContext
   */
  readonly physicalResourceIdContext?: CloudFormationPhysicalResourceIdContextKeyValuePair[];

  /**
   * @schema CloudFormationStackResourceDrift#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema CloudFormationStackResourceDrift#ExpectedProperties
   */
  readonly expectedProperties?: string;

  /**
   * @schema CloudFormationStackResourceDrift#ActualProperties
   */
  readonly actualProperties?: string;

  /**
   * @schema CloudFormationStackResourceDrift#PropertyDifferences
   */
  readonly propertyDifferences?: CloudFormationPropertyDifference[];

  /**
   * @schema CloudFormationStackResourceDrift#StackResourceDriftStatus
   */
  readonly stackResourceDriftStatus?: string;

  /**
   * @schema CloudFormationStackResourceDrift#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema CloudFormationStackResourceDrift#ModuleInfo
   */
  readonly moduleInfo?: CloudFormationModuleInfo;

}

/**
 * Converts an object of type 'CloudFormationStackResourceDrift' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStackResourceDrift(obj: CloudFormationStackResourceDrift | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'LogicalResourceId': obj.logicalResourceId,
    'PhysicalResourceId': obj.physicalResourceId,
    'PhysicalResourceIdContext': obj.physicalResourceIdContext?.map(y => toJson_CloudFormationPhysicalResourceIdContextKeyValuePair(y)),
    'ResourceType': obj.resourceType,
    'ExpectedProperties': obj.expectedProperties,
    'ActualProperties': obj.actualProperties,
    'PropertyDifferences': obj.propertyDifferences?.map(y => toJson_CloudFormationPropertyDifference(y)),
    'StackResourceDriftStatus': obj.stackResourceDriftStatus,
    'Timestamp': obj.timestamp,
    'ModuleInfo': toJson_CloudFormationModuleInfo(obj.moduleInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStackResource
 */
export interface CloudFormationStackResource {
  /**
   * @schema CloudFormationStackResource#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationStackResource#StackId
   */
  readonly stackId?: string;

  /**
   * @schema CloudFormationStackResource#LogicalResourceId
   */
  readonly logicalResourceId?: string;

  /**
   * @schema CloudFormationStackResource#PhysicalResourceId
   */
  readonly physicalResourceId?: string;

  /**
   * @schema CloudFormationStackResource#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema CloudFormationStackResource#Timestamp
   */
  readonly timestamp?: string;

  /**
   * @schema CloudFormationStackResource#ResourceStatus
   */
  readonly resourceStatus?: string;

  /**
   * @schema CloudFormationStackResource#ResourceStatusReason
   */
  readonly resourceStatusReason?: string;

  /**
   * @schema CloudFormationStackResource#Description
   */
  readonly description?: string;

  /**
   * @schema CloudFormationStackResource#DriftInformation
   */
  readonly driftInformation?: CloudFormationStackResourceDriftInformation;

  /**
   * @schema CloudFormationStackResource#ModuleInfo
   */
  readonly moduleInfo?: CloudFormationModuleInfo;

}

/**
 * Converts an object of type 'CloudFormationStackResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStackResource(obj: CloudFormationStackResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackName': obj.stackName,
    'StackId': obj.stackId,
    'LogicalResourceId': obj.logicalResourceId,
    'PhysicalResourceId': obj.physicalResourceId,
    'ResourceType': obj.resourceType,
    'Timestamp': obj.timestamp,
    'ResourceStatus': obj.resourceStatus,
    'ResourceStatusReason': obj.resourceStatusReason,
    'Description': obj.description,
    'DriftInformation': toJson_CloudFormationStackResourceDriftInformation(obj.driftInformation),
    'ModuleInfo': toJson_CloudFormationModuleInfo(obj.moduleInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStackSet
 */
export interface CloudFormationStackSet {
  /**
   * @schema CloudFormationStackSet#StackSetName
   */
  readonly stackSetName?: string;

  /**
   * @schema CloudFormationStackSet#StackSetId
   */
  readonly stackSetId?: string;

  /**
   * @schema CloudFormationStackSet#Description
   */
  readonly description?: string;

  /**
   * @schema CloudFormationStackSet#Status
   */
  readonly status?: string;

  /**
   * @schema CloudFormationStackSet#TemplateBody
   */
  readonly templateBody?: string;

  /**
   * @schema CloudFormationStackSet#Parameters
   */
  readonly parameters?: CloudFormationParameter[];

  /**
   * @schema CloudFormationStackSet#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema CloudFormationStackSet#Tags
   */
  readonly tags?: CloudFormationTag[];

  /**
   * @schema CloudFormationStackSet#StackSetARN
   */
  readonly stackSetArn?: string;

  /**
   * @schema CloudFormationStackSet#AdministrationRoleARN
   */
  readonly administrationRoleArn?: string;

  /**
   * @schema CloudFormationStackSet#ExecutionRoleName
   */
  readonly executionRoleName?: string;

  /**
   * @schema CloudFormationStackSet#StackSetDriftDetectionDetails
   */
  readonly stackSetDriftDetectionDetails?: CloudFormationStackSetDriftDetectionDetails;

  /**
   * @schema CloudFormationStackSet#AutoDeployment
   */
  readonly autoDeployment?: CloudFormationAutoDeployment;

  /**
   * @schema CloudFormationStackSet#PermissionModel
   */
  readonly permissionModel?: string;

  /**
   * @schema CloudFormationStackSet#OrganizationalUnitIds
   */
  readonly organizationalUnitIds?: string[];

}

/**
 * Converts an object of type 'CloudFormationStackSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStackSet(obj: CloudFormationStackSet | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetName': obj.stackSetName,
    'StackSetId': obj.stackSetId,
    'Description': obj.description,
    'Status': obj.status,
    'TemplateBody': obj.templateBody,
    'Parameters': obj.parameters?.map(y => toJson_CloudFormationParameter(y)),
    'Capabilities': obj.capabilities?.map(y => y),
    'Tags': obj.tags?.map(y => toJson_CloudFormationTag(y)),
    'StackSetARN': obj.stackSetArn,
    'AdministrationRoleARN': obj.administrationRoleArn,
    'ExecutionRoleName': obj.executionRoleName,
    'StackSetDriftDetectionDetails': toJson_CloudFormationStackSetDriftDetectionDetails(obj.stackSetDriftDetectionDetails),
    'AutoDeployment': toJson_CloudFormationAutoDeployment(obj.autoDeployment),
    'PermissionModel': obj.permissionModel,
    'OrganizationalUnitIds': obj.organizationalUnitIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStackSetOperation
 */
export interface CloudFormationStackSetOperation {
  /**
   * @schema CloudFormationStackSetOperation#OperationId
   */
  readonly operationId?: string;

  /**
   * @schema CloudFormationStackSetOperation#StackSetId
   */
  readonly stackSetId?: string;

  /**
   * @schema CloudFormationStackSetOperation#Action
   */
  readonly action?: string;

  /**
   * @schema CloudFormationStackSetOperation#Status
   */
  readonly status?: string;

  /**
   * @schema CloudFormationStackSetOperation#OperationPreferences
   */
  readonly operationPreferences?: CloudFormationStackSetOperationPreferences;

  /**
   * @schema CloudFormationStackSetOperation#RetainStacks
   */
  readonly retainStacks?: boolean;

  /**
   * @schema CloudFormationStackSetOperation#AdministrationRoleARN
   */
  readonly administrationRoleArn?: string;

  /**
   * @schema CloudFormationStackSetOperation#ExecutionRoleName
   */
  readonly executionRoleName?: string;

  /**
   * @schema CloudFormationStackSetOperation#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema CloudFormationStackSetOperation#EndTimestamp
   */
  readonly endTimestamp?: string;

  /**
   * @schema CloudFormationStackSetOperation#DeploymentTargets
   */
  readonly deploymentTargets?: CloudFormationDeploymentTargets;

  /**
   * @schema CloudFormationStackSetOperation#StackSetDriftDetectionDetails
   */
  readonly stackSetDriftDetectionDetails?: CloudFormationStackSetDriftDetectionDetails;

}

/**
 * Converts an object of type 'CloudFormationStackSetOperation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStackSetOperation(obj: CloudFormationStackSetOperation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
    'StackSetId': obj.stackSetId,
    'Action': obj.action,
    'Status': obj.status,
    'OperationPreferences': toJson_CloudFormationStackSetOperationPreferences(obj.operationPreferences),
    'RetainStacks': obj.retainStacks,
    'AdministrationRoleARN': obj.administrationRoleArn,
    'ExecutionRoleName': obj.executionRoleName,
    'CreationTimestamp': obj.creationTimestamp,
    'EndTimestamp': obj.endTimestamp,
    'DeploymentTargets': toJson_CloudFormationDeploymentTargets(obj.deploymentTargets),
    'StackSetDriftDetectionDetails': toJson_CloudFormationStackSetDriftDetectionDetails(obj.stackSetDriftDetectionDetails),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStack
 */
export interface CloudFormationStack {
  /**
   * @schema CloudFormationStack#StackId
   */
  readonly stackId?: string;

  /**
   * @schema CloudFormationStack#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationStack#ChangeSetId
   */
  readonly changeSetId?: string;

  /**
   * @schema CloudFormationStack#Description
   */
  readonly description?: string;

  /**
   * @schema CloudFormationStack#Parameters
   */
  readonly parameters?: CloudFormationParameter[];

  /**
   * @schema CloudFormationStack#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema CloudFormationStack#DeletionTime
   */
  readonly deletionTime?: string;

  /**
   * @schema CloudFormationStack#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema CloudFormationStack#RollbackConfiguration
   */
  readonly rollbackConfiguration?: CloudFormationRollbackConfiguration;

  /**
   * @schema CloudFormationStack#StackStatus
   */
  readonly stackStatus?: string;

  /**
   * @schema CloudFormationStack#StackStatusReason
   */
  readonly stackStatusReason?: string;

  /**
   * @schema CloudFormationStack#DisableRollback
   */
  readonly disableRollback?: boolean;

  /**
   * @schema CloudFormationStack#NotificationARNs
   */
  readonly notificationArNs?: string[];

  /**
   * @schema CloudFormationStack#TimeoutInMinutes
   */
  readonly timeoutInMinutes?: number;

  /**
   * @schema CloudFormationStack#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema CloudFormationStack#Outputs
   */
  readonly outputs?: CloudFormationOutput[];

  /**
   * @schema CloudFormationStack#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema CloudFormationStack#Tags
   */
  readonly tags?: CloudFormationTag[];

  /**
   * @schema CloudFormationStack#EnableTerminationProtection
   */
  readonly enableTerminationProtection?: boolean;

  /**
   * @schema CloudFormationStack#ParentId
   */
  readonly parentId?: string;

  /**
   * @schema CloudFormationStack#RootId
   */
  readonly rootId?: string;

  /**
   * @schema CloudFormationStack#DriftInformation
   */
  readonly driftInformation?: CloudFormationStackDriftInformation;

}

/**
 * Converts an object of type 'CloudFormationStack' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStack(obj: CloudFormationStack | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'StackName': obj.stackName,
    'ChangeSetId': obj.changeSetId,
    'Description': obj.description,
    'Parameters': obj.parameters?.map(y => toJson_CloudFormationParameter(y)),
    'CreationTime': obj.creationTime,
    'DeletionTime': obj.deletionTime,
    'LastUpdatedTime': obj.lastUpdatedTime,
    'RollbackConfiguration': toJson_CloudFormationRollbackConfiguration(obj.rollbackConfiguration),
    'StackStatus': obj.stackStatus,
    'StackStatusReason': obj.stackStatusReason,
    'DisableRollback': obj.disableRollback,
    'NotificationARNs': obj.notificationArNs?.map(y => y),
    'TimeoutInMinutes': obj.timeoutInMinutes,
    'Capabilities': obj.capabilities?.map(y => y),
    'Outputs': obj.outputs?.map(y => toJson_CloudFormationOutput(y)),
    'RoleARN': obj.roleArn,
    'Tags': obj.tags?.map(y => toJson_CloudFormationTag(y)),
    'EnableTerminationProtection': obj.enableTerminationProtection,
    'ParentId': obj.parentId,
    'RootId': obj.rootId,
    'DriftInformation': toJson_CloudFormationStackDriftInformation(obj.driftInformation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationRequiredActivatedType
 */
export interface CloudFormationRequiredActivatedType {
  /**
   * @schema CloudFormationRequiredActivatedType#TypeNameAlias
   */
  readonly typeNameAlias?: string;

  /**
   * @schema CloudFormationRequiredActivatedType#OriginalTypeName
   */
  readonly originalTypeName?: string;

  /**
   * @schema CloudFormationRequiredActivatedType#PublisherId
   */
  readonly publisherId?: string;

  /**
   * @schema CloudFormationRequiredActivatedType#SupportedMajorVersions
   */
  readonly supportedMajorVersions?: number[];

}

/**
 * Converts an object of type 'CloudFormationRequiredActivatedType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationRequiredActivatedType(obj: CloudFormationRequiredActivatedType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypeNameAlias': obj.typeNameAlias,
    'OriginalTypeName': obj.originalTypeName,
    'PublisherId': obj.publisherId,
    'SupportedMajorVersions': obj.supportedMajorVersions?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationParameterDeclaration
 */
export interface CloudFormationParameterDeclaration {
  /**
   * @schema CloudFormationParameterDeclaration#ParameterKey
   */
  readonly parameterKey?: string;

  /**
   * @schema CloudFormationParameterDeclaration#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema CloudFormationParameterDeclaration#ParameterType
   */
  readonly parameterType?: string;

  /**
   * @schema CloudFormationParameterDeclaration#NoEcho
   */
  readonly noEcho?: boolean;

  /**
   * @schema CloudFormationParameterDeclaration#Description
   */
  readonly description?: string;

  /**
   * @schema CloudFormationParameterDeclaration#ParameterConstraints
   */
  readonly parameterConstraints?: CloudFormationParameterConstraints;

}

/**
 * Converts an object of type 'CloudFormationParameterDeclaration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationParameterDeclaration(obj: CloudFormationParameterDeclaration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterKey': obj.parameterKey,
    'DefaultValue': obj.defaultValue,
    'ParameterType': obj.parameterType,
    'NoEcho': obj.noEcho,
    'Description': obj.description,
    'ParameterConstraints': toJson_CloudFormationParameterConstraints(obj.parameterConstraints),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationResourceIdentifierSummary
 */
export interface CloudFormationResourceIdentifierSummary {
  /**
   * @schema CloudFormationResourceIdentifierSummary#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema CloudFormationResourceIdentifierSummary#LogicalResourceIds
   */
  readonly logicalResourceIds?: string[];

  /**
   * @schema CloudFormationResourceIdentifierSummary#ResourceIdentifiers
   */
  readonly resourceIdentifiers?: string[];

}

/**
 * Converts an object of type 'CloudFormationResourceIdentifierSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationResourceIdentifierSummary(obj: CloudFormationResourceIdentifierSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceType': obj.resourceType,
    'LogicalResourceIds': obj.logicalResourceIds?.map(y => y),
    'ResourceIdentifiers': obj.resourceIdentifiers?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationChangeSetSummary
 */
export interface CloudFormationChangeSetSummary {
  /**
   * @schema CloudFormationChangeSetSummary#StackId
   */
  readonly stackId?: string;

  /**
   * @schema CloudFormationChangeSetSummary#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationChangeSetSummary#ChangeSetId
   */
  readonly changeSetId?: string;

  /**
   * @schema CloudFormationChangeSetSummary#ChangeSetName
   */
  readonly changeSetName?: string;

  /**
   * @schema CloudFormationChangeSetSummary#ExecutionStatus
   */
  readonly executionStatus?: string;

  /**
   * @schema CloudFormationChangeSetSummary#Status
   */
  readonly status?: string;

  /**
   * @schema CloudFormationChangeSetSummary#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema CloudFormationChangeSetSummary#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema CloudFormationChangeSetSummary#Description
   */
  readonly description?: string;

  /**
   * @schema CloudFormationChangeSetSummary#IncludeNestedStacks
   */
  readonly includeNestedStacks?: boolean;

  /**
   * @schema CloudFormationChangeSetSummary#ParentChangeSetId
   */
  readonly parentChangeSetId?: string;

  /**
   * @schema CloudFormationChangeSetSummary#RootChangeSetId
   */
  readonly rootChangeSetId?: string;

}

/**
 * Converts an object of type 'CloudFormationChangeSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationChangeSetSummary(obj: CloudFormationChangeSetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'StackName': obj.stackName,
    'ChangeSetId': obj.changeSetId,
    'ChangeSetName': obj.changeSetName,
    'ExecutionStatus': obj.executionStatus,
    'Status': obj.status,
    'StatusReason': obj.statusReason,
    'CreationTime': obj.creationTime,
    'Description': obj.description,
    'IncludeNestedStacks': obj.includeNestedStacks,
    'ParentChangeSetId': obj.parentChangeSetId,
    'RootChangeSetId': obj.rootChangeSetId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationExport
 */
export interface CloudFormationExport {
  /**
   * @schema CloudFormationExport#ExportingStackId
   */
  readonly exportingStackId?: string;

  /**
   * @schema CloudFormationExport#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFormationExport#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'CloudFormationExport' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationExport(obj: CloudFormationExport | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExportingStackId': obj.exportingStackId,
    'Name': obj.name,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStackInstanceFilter
 */
export interface CloudFormationStackInstanceFilter {
  /**
   * @schema CloudFormationStackInstanceFilter#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFormationStackInstanceFilter#Values
   */
  readonly values?: string;

}

/**
 * Converts an object of type 'CloudFormationStackInstanceFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStackInstanceFilter(obj: CloudFormationStackInstanceFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Values': obj.values,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStackInstanceSummary
 */
export interface CloudFormationStackInstanceSummary {
  /**
   * @schema CloudFormationStackInstanceSummary#StackSetId
   */
  readonly stackSetId?: string;

  /**
   * @schema CloudFormationStackInstanceSummary#Region
   */
  readonly region?: string;

  /**
   * @schema CloudFormationStackInstanceSummary#Account
   */
  readonly account?: string;

  /**
   * @schema CloudFormationStackInstanceSummary#StackId
   */
  readonly stackId?: string;

  /**
   * @schema CloudFormationStackInstanceSummary#Status
   */
  readonly status?: string;

  /**
   * @schema CloudFormationStackInstanceSummary#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema CloudFormationStackInstanceSummary#StackInstanceStatus
   */
  readonly stackInstanceStatus?: CloudFormationStackInstanceComprehensiveStatus;

  /**
   * @schema CloudFormationStackInstanceSummary#OrganizationalUnitId
   */
  readonly organizationalUnitId?: string;

  /**
   * @schema CloudFormationStackInstanceSummary#DriftStatus
   */
  readonly driftStatus?: string;

  /**
   * @schema CloudFormationStackInstanceSummary#LastDriftCheckTimestamp
   */
  readonly lastDriftCheckTimestamp?: string;

}

/**
 * Converts an object of type 'CloudFormationStackInstanceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStackInstanceSummary(obj: CloudFormationStackInstanceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetId': obj.stackSetId,
    'Region': obj.region,
    'Account': obj.account,
    'StackId': obj.stackId,
    'Status': obj.status,
    'StatusReason': obj.statusReason,
    'StackInstanceStatus': toJson_CloudFormationStackInstanceComprehensiveStatus(obj.stackInstanceStatus),
    'OrganizationalUnitId': obj.organizationalUnitId,
    'DriftStatus': obj.driftStatus,
    'LastDriftCheckTimestamp': obj.lastDriftCheckTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStackResourceSummary
 */
export interface CloudFormationStackResourceSummary {
  /**
   * @schema CloudFormationStackResourceSummary#LogicalResourceId
   */
  readonly logicalResourceId?: string;

  /**
   * @schema CloudFormationStackResourceSummary#PhysicalResourceId
   */
  readonly physicalResourceId?: string;

  /**
   * @schema CloudFormationStackResourceSummary#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema CloudFormationStackResourceSummary#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp?: string;

  /**
   * @schema CloudFormationStackResourceSummary#ResourceStatus
   */
  readonly resourceStatus?: string;

  /**
   * @schema CloudFormationStackResourceSummary#ResourceStatusReason
   */
  readonly resourceStatusReason?: string;

  /**
   * @schema CloudFormationStackResourceSummary#DriftInformation
   */
  readonly driftInformation?: CloudFormationStackResourceDriftInformationSummary;

  /**
   * @schema CloudFormationStackResourceSummary#ModuleInfo
   */
  readonly moduleInfo?: CloudFormationModuleInfo;

}

/**
 * Converts an object of type 'CloudFormationStackResourceSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStackResourceSummary(obj: CloudFormationStackResourceSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogicalResourceId': obj.logicalResourceId,
    'PhysicalResourceId': obj.physicalResourceId,
    'ResourceType': obj.resourceType,
    'LastUpdatedTimestamp': obj.lastUpdatedTimestamp,
    'ResourceStatus': obj.resourceStatus,
    'ResourceStatusReason': obj.resourceStatusReason,
    'DriftInformation': toJson_CloudFormationStackResourceDriftInformationSummary(obj.driftInformation),
    'ModuleInfo': toJson_CloudFormationModuleInfo(obj.moduleInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStackSetOperationResultSummary
 */
export interface CloudFormationStackSetOperationResultSummary {
  /**
   * @schema CloudFormationStackSetOperationResultSummary#Account
   */
  readonly account?: string;

  /**
   * @schema CloudFormationStackSetOperationResultSummary#Region
   */
  readonly region?: string;

  /**
   * @schema CloudFormationStackSetOperationResultSummary#Status
   */
  readonly status?: string;

  /**
   * @schema CloudFormationStackSetOperationResultSummary#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema CloudFormationStackSetOperationResultSummary#AccountGateResult
   */
  readonly accountGateResult?: CloudFormationAccountGateResult;

  /**
   * @schema CloudFormationStackSetOperationResultSummary#OrganizationalUnitId
   */
  readonly organizationalUnitId?: string;

}

/**
 * Converts an object of type 'CloudFormationStackSetOperationResultSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStackSetOperationResultSummary(obj: CloudFormationStackSetOperationResultSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Account': obj.account,
    'Region': obj.region,
    'Status': obj.status,
    'StatusReason': obj.statusReason,
    'AccountGateResult': toJson_CloudFormationAccountGateResult(obj.accountGateResult),
    'OrganizationalUnitId': obj.organizationalUnitId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStackSetOperationSummary
 */
export interface CloudFormationStackSetOperationSummary {
  /**
   * @schema CloudFormationStackSetOperationSummary#OperationId
   */
  readonly operationId?: string;

  /**
   * @schema CloudFormationStackSetOperationSummary#Action
   */
  readonly action?: string;

  /**
   * @schema CloudFormationStackSetOperationSummary#Status
   */
  readonly status?: string;

  /**
   * @schema CloudFormationStackSetOperationSummary#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema CloudFormationStackSetOperationSummary#EndTimestamp
   */
  readonly endTimestamp?: string;

}

/**
 * Converts an object of type 'CloudFormationStackSetOperationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStackSetOperationSummary(obj: CloudFormationStackSetOperationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperationId': obj.operationId,
    'Action': obj.action,
    'Status': obj.status,
    'CreationTimestamp': obj.creationTimestamp,
    'EndTimestamp': obj.endTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStackSetSummary
 */
export interface CloudFormationStackSetSummary {
  /**
   * @schema CloudFormationStackSetSummary#StackSetName
   */
  readonly stackSetName?: string;

  /**
   * @schema CloudFormationStackSetSummary#StackSetId
   */
  readonly stackSetId?: string;

  /**
   * @schema CloudFormationStackSetSummary#Description
   */
  readonly description?: string;

  /**
   * @schema CloudFormationStackSetSummary#Status
   */
  readonly status?: string;

  /**
   * @schema CloudFormationStackSetSummary#AutoDeployment
   */
  readonly autoDeployment?: CloudFormationAutoDeployment;

  /**
   * @schema CloudFormationStackSetSummary#PermissionModel
   */
  readonly permissionModel?: string;

  /**
   * @schema CloudFormationStackSetSummary#DriftStatus
   */
  readonly driftStatus?: string;

  /**
   * @schema CloudFormationStackSetSummary#LastDriftCheckTimestamp
   */
  readonly lastDriftCheckTimestamp?: string;

}

/**
 * Converts an object of type 'CloudFormationStackSetSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStackSetSummary(obj: CloudFormationStackSetSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSetName': obj.stackSetName,
    'StackSetId': obj.stackSetId,
    'Description': obj.description,
    'Status': obj.status,
    'AutoDeployment': toJson_CloudFormationAutoDeployment(obj.autoDeployment),
    'PermissionModel': obj.permissionModel,
    'DriftStatus': obj.driftStatus,
    'LastDriftCheckTimestamp': obj.lastDriftCheckTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStackSummary
 */
export interface CloudFormationStackSummary {
  /**
   * @schema CloudFormationStackSummary#StackId
   */
  readonly stackId?: string;

  /**
   * @schema CloudFormationStackSummary#StackName
   */
  readonly stackName?: string;

  /**
   * @schema CloudFormationStackSummary#TemplateDescription
   */
  readonly templateDescription?: string;

  /**
   * @schema CloudFormationStackSummary#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema CloudFormationStackSummary#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema CloudFormationStackSummary#DeletionTime
   */
  readonly deletionTime?: string;

  /**
   * @schema CloudFormationStackSummary#StackStatus
   */
  readonly stackStatus?: string;

  /**
   * @schema CloudFormationStackSummary#StackStatusReason
   */
  readonly stackStatusReason?: string;

  /**
   * @schema CloudFormationStackSummary#ParentId
   */
  readonly parentId?: string;

  /**
   * @schema CloudFormationStackSummary#RootId
   */
  readonly rootId?: string;

  /**
   * @schema CloudFormationStackSummary#DriftInformation
   */
  readonly driftInformation?: CloudFormationStackDriftInformationSummary;

}

/**
 * Converts an object of type 'CloudFormationStackSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStackSummary(obj: CloudFormationStackSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'StackName': obj.stackName,
    'TemplateDescription': obj.templateDescription,
    'CreationTime': obj.creationTime,
    'LastUpdatedTime': obj.lastUpdatedTime,
    'DeletionTime': obj.deletionTime,
    'StackStatus': obj.stackStatus,
    'StackStatusReason': obj.stackStatusReason,
    'ParentId': obj.parentId,
    'RootId': obj.rootId,
    'DriftInformation': toJson_CloudFormationStackDriftInformationSummary(obj.driftInformation),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationTypeVersionSummary
 */
export interface CloudFormationTypeVersionSummary {
  /**
   * @schema CloudFormationTypeVersionSummary#Type
   */
  readonly type?: string;

  /**
   * @schema CloudFormationTypeVersionSummary#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema CloudFormationTypeVersionSummary#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema CloudFormationTypeVersionSummary#IsDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

  /**
   * @schema CloudFormationTypeVersionSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema CloudFormationTypeVersionSummary#TimeCreated
   */
  readonly timeCreated?: string;

  /**
   * @schema CloudFormationTypeVersionSummary#Description
   */
  readonly description?: string;

  /**
   * @schema CloudFormationTypeVersionSummary#PublicVersionNumber
   */
  readonly publicVersionNumber?: string;

}

/**
 * Converts an object of type 'CloudFormationTypeVersionSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationTypeVersionSummary(obj: CloudFormationTypeVersionSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'TypeName': obj.typeName,
    'VersionId': obj.versionId,
    'IsDefaultVersion': obj.isDefaultVersion,
    'Arn': obj.arn,
    'TimeCreated': obj.timeCreated,
    'Description': obj.description,
    'PublicVersionNumber': obj.publicVersionNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationTypeFilters
 */
export interface CloudFormationTypeFilters {
  /**
   * @schema CloudFormationTypeFilters#Category
   */
  readonly category?: string;

  /**
   * @schema CloudFormationTypeFilters#PublisherId
   */
  readonly publisherId?: string;

  /**
   * @schema CloudFormationTypeFilters#TypeNamePrefix
   */
  readonly typeNamePrefix?: string;

}

/**
 * Converts an object of type 'CloudFormationTypeFilters' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationTypeFilters(obj: CloudFormationTypeFilters | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Category': obj.category,
    'PublisherId': obj.publisherId,
    'TypeNamePrefix': obj.typeNamePrefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationTypeSummary
 */
export interface CloudFormationTypeSummary {
  /**
   * @schema CloudFormationTypeSummary#Type
   */
  readonly type?: string;

  /**
   * @schema CloudFormationTypeSummary#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema CloudFormationTypeSummary#DefaultVersionId
   */
  readonly defaultVersionId?: string;

  /**
   * @schema CloudFormationTypeSummary#TypeArn
   */
  readonly typeArn?: string;

  /**
   * @schema CloudFormationTypeSummary#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema CloudFormationTypeSummary#Description
   */
  readonly description?: string;

  /**
   * @schema CloudFormationTypeSummary#PublisherId
   */
  readonly publisherId?: string;

  /**
   * @schema CloudFormationTypeSummary#OriginalTypeName
   */
  readonly originalTypeName?: string;

  /**
   * @schema CloudFormationTypeSummary#PublicVersionNumber
   */
  readonly publicVersionNumber?: string;

  /**
   * @schema CloudFormationTypeSummary#LatestPublicVersion
   */
  readonly latestPublicVersion?: string;

  /**
   * @schema CloudFormationTypeSummary#PublisherIdentity
   */
  readonly publisherIdentity?: string;

  /**
   * @schema CloudFormationTypeSummary#PublisherName
   */
  readonly publisherName?: string;

  /**
   * @schema CloudFormationTypeSummary#IsActivated
   */
  readonly isActivated?: boolean;

}

/**
 * Converts an object of type 'CloudFormationTypeSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationTypeSummary(obj: CloudFormationTypeSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'TypeName': obj.typeName,
    'DefaultVersionId': obj.defaultVersionId,
    'TypeArn': obj.typeArn,
    'LastUpdated': obj.lastUpdated,
    'Description': obj.description,
    'PublisherId': obj.publisherId,
    'OriginalTypeName': obj.originalTypeName,
    'PublicVersionNumber': obj.publicVersionNumber,
    'LatestPublicVersion': obj.latestPublicVersion,
    'PublisherIdentity': obj.publisherIdentity,
    'PublisherName': obj.publisherName,
    'IsActivated': obj.isActivated,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationTemplateParameter
 */
export interface CloudFormationTemplateParameter {
  /**
   * @schema CloudFormationTemplateParameter#ParameterKey
   */
  readonly parameterKey?: string;

  /**
   * @schema CloudFormationTemplateParameter#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema CloudFormationTemplateParameter#NoEcho
   */
  readonly noEcho?: boolean;

  /**
   * @schema CloudFormationTemplateParameter#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'CloudFormationTemplateParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationTemplateParameter(obj: CloudFormationTemplateParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ParameterKey': obj.parameterKey,
    'DefaultValue': obj.defaultValue,
    'NoEcho': obj.noEcho,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationRollbackTrigger
 */
export interface CloudFormationRollbackTrigger {
  /**
   * @schema CloudFormationRollbackTrigger#Arn
   */
  readonly arn?: string;

  /**
   * @schema CloudFormationRollbackTrigger#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'CloudFormationRollbackTrigger' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationRollbackTrigger(obj: CloudFormationRollbackTrigger | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationResourceChange
 */
export interface CloudFormationResourceChange {
  /**
   * @schema CloudFormationResourceChange#Action
   */
  readonly action?: string;

  /**
   * @schema CloudFormationResourceChange#LogicalResourceId
   */
  readonly logicalResourceId?: string;

  /**
   * @schema CloudFormationResourceChange#PhysicalResourceId
   */
  readonly physicalResourceId?: string;

  /**
   * @schema CloudFormationResourceChange#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema CloudFormationResourceChange#Replacement
   */
  readonly replacement?: string;

  /**
   * @schema CloudFormationResourceChange#Scope
   */
  readonly scope?: string[];

  /**
   * @schema CloudFormationResourceChange#Details
   */
  readonly details?: CloudFormationResourceChangeDetail[];

  /**
   * @schema CloudFormationResourceChange#ChangeSetId
   */
  readonly changeSetId?: string;

  /**
   * @schema CloudFormationResourceChange#ModuleInfo
   */
  readonly moduleInfo?: CloudFormationModuleInfo;

}

/**
 * Converts an object of type 'CloudFormationResourceChange' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationResourceChange(obj: CloudFormationResourceChange | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Action': obj.action,
    'LogicalResourceId': obj.logicalResourceId,
    'PhysicalResourceId': obj.physicalResourceId,
    'ResourceType': obj.resourceType,
    'Replacement': obj.replacement,
    'Scope': obj.scope?.map(y => y),
    'Details': obj.details?.map(y => toJson_CloudFormationResourceChangeDetail(y)),
    'ChangeSetId': obj.changeSetId,
    'ModuleInfo': toJson_CloudFormationModuleInfo(obj.moduleInfo),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStackInstanceComprehensiveStatus
 */
export interface CloudFormationStackInstanceComprehensiveStatus {
  /**
   * @schema CloudFormationStackInstanceComprehensiveStatus#DetailedStatus
   */
  readonly detailedStatus?: string;

}

/**
 * Converts an object of type 'CloudFormationStackInstanceComprehensiveStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStackInstanceComprehensiveStatus(obj: CloudFormationStackInstanceComprehensiveStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DetailedStatus': obj.detailedStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStackResourceDriftInformation
 */
export interface CloudFormationStackResourceDriftInformation {
  /**
   * @schema CloudFormationStackResourceDriftInformation#StackResourceDriftStatus
   */
  readonly stackResourceDriftStatus?: string;

  /**
   * @schema CloudFormationStackResourceDriftInformation#LastCheckTimestamp
   */
  readonly lastCheckTimestamp?: string;

}

/**
 * Converts an object of type 'CloudFormationStackResourceDriftInformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStackResourceDriftInformation(obj: CloudFormationStackResourceDriftInformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackResourceDriftStatus': obj.stackResourceDriftStatus,
    'LastCheckTimestamp': obj.lastCheckTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationModuleInfo
 */
export interface CloudFormationModuleInfo {
  /**
   * @schema CloudFormationModuleInfo#TypeHierarchy
   */
  readonly typeHierarchy?: string;

  /**
   * @schema CloudFormationModuleInfo#LogicalIdHierarchy
   */
  readonly logicalIdHierarchy?: string;

}

/**
 * Converts an object of type 'CloudFormationModuleInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationModuleInfo(obj: CloudFormationModuleInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TypeHierarchy': obj.typeHierarchy,
    'LogicalIdHierarchy': obj.logicalIdHierarchy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationPhysicalResourceIdContextKeyValuePair
 */
export interface CloudFormationPhysicalResourceIdContextKeyValuePair {
  /**
   * @schema CloudFormationPhysicalResourceIdContextKeyValuePair#Key
   */
  readonly key?: string;

  /**
   * @schema CloudFormationPhysicalResourceIdContextKeyValuePair#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'CloudFormationPhysicalResourceIdContextKeyValuePair' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationPhysicalResourceIdContextKeyValuePair(obj: CloudFormationPhysicalResourceIdContextKeyValuePair | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationPropertyDifference
 */
export interface CloudFormationPropertyDifference {
  /**
   * @schema CloudFormationPropertyDifference#PropertyPath
   */
  readonly propertyPath?: string;

  /**
   * @schema CloudFormationPropertyDifference#ExpectedValue
   */
  readonly expectedValue?: string;

  /**
   * @schema CloudFormationPropertyDifference#ActualValue
   */
  readonly actualValue?: string;

  /**
   * @schema CloudFormationPropertyDifference#DifferenceType
   */
  readonly differenceType?: string;

}

/**
 * Converts an object of type 'CloudFormationPropertyDifference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationPropertyDifference(obj: CloudFormationPropertyDifference | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PropertyPath': obj.propertyPath,
    'ExpectedValue': obj.expectedValue,
    'ActualValue': obj.actualValue,
    'DifferenceType': obj.differenceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStackSetDriftDetectionDetails
 */
export interface CloudFormationStackSetDriftDetectionDetails {
  /**
   * @schema CloudFormationStackSetDriftDetectionDetails#DriftStatus
   */
  readonly driftStatus?: string;

  /**
   * @schema CloudFormationStackSetDriftDetectionDetails#DriftDetectionStatus
   */
  readonly driftDetectionStatus?: string;

  /**
   * @schema CloudFormationStackSetDriftDetectionDetails#LastDriftCheckTimestamp
   */
  readonly lastDriftCheckTimestamp?: string;

  /**
   * @schema CloudFormationStackSetDriftDetectionDetails#TotalStackInstancesCount
   */
  readonly totalStackInstancesCount?: number;

  /**
   * @schema CloudFormationStackSetDriftDetectionDetails#DriftedStackInstancesCount
   */
  readonly driftedStackInstancesCount?: number;

  /**
   * @schema CloudFormationStackSetDriftDetectionDetails#InSyncStackInstancesCount
   */
  readonly inSyncStackInstancesCount?: number;

  /**
   * @schema CloudFormationStackSetDriftDetectionDetails#InProgressStackInstancesCount
   */
  readonly inProgressStackInstancesCount?: number;

  /**
   * @schema CloudFormationStackSetDriftDetectionDetails#FailedStackInstancesCount
   */
  readonly failedStackInstancesCount?: number;

}

/**
 * Converts an object of type 'CloudFormationStackSetDriftDetectionDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStackSetDriftDetectionDetails(obj: CloudFormationStackSetDriftDetectionDetails | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DriftStatus': obj.driftStatus,
    'DriftDetectionStatus': obj.driftDetectionStatus,
    'LastDriftCheckTimestamp': obj.lastDriftCheckTimestamp,
    'TotalStackInstancesCount': obj.totalStackInstancesCount,
    'DriftedStackInstancesCount': obj.driftedStackInstancesCount,
    'InSyncStackInstancesCount': obj.inSyncStackInstancesCount,
    'InProgressStackInstancesCount': obj.inProgressStackInstancesCount,
    'FailedStackInstancesCount': obj.failedStackInstancesCount,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationOutput
 */
export interface CloudFormationOutput {
  /**
   * @schema CloudFormationOutput#OutputKey
   */
  readonly outputKey?: string;

  /**
   * @schema CloudFormationOutput#OutputValue
   */
  readonly outputValue?: string;

  /**
   * @schema CloudFormationOutput#Description
   */
  readonly description?: string;

  /**
   * @schema CloudFormationOutput#ExportName
   */
  readonly exportName?: string;

}

/**
 * Converts an object of type 'CloudFormationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationOutput(obj: CloudFormationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OutputKey': obj.outputKey,
    'OutputValue': obj.outputValue,
    'Description': obj.description,
    'ExportName': obj.exportName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStackDriftInformation
 */
export interface CloudFormationStackDriftInformation {
  /**
   * @schema CloudFormationStackDriftInformation#StackDriftStatus
   */
  readonly stackDriftStatus?: string;

  /**
   * @schema CloudFormationStackDriftInformation#LastCheckTimestamp
   */
  readonly lastCheckTimestamp?: string;

}

/**
 * Converts an object of type 'CloudFormationStackDriftInformation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStackDriftInformation(obj: CloudFormationStackDriftInformation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackDriftStatus': obj.stackDriftStatus,
    'LastCheckTimestamp': obj.lastCheckTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationParameterConstraints
 */
export interface CloudFormationParameterConstraints {
  /**
   * @schema CloudFormationParameterConstraints#AllowedValues
   */
  readonly allowedValues?: string[];

}

/**
 * Converts an object of type 'CloudFormationParameterConstraints' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationParameterConstraints(obj: CloudFormationParameterConstraints | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AllowedValues': obj.allowedValues?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStackResourceDriftInformationSummary
 */
export interface CloudFormationStackResourceDriftInformationSummary {
  /**
   * @schema CloudFormationStackResourceDriftInformationSummary#StackResourceDriftStatus
   */
  readonly stackResourceDriftStatus?: string;

  /**
   * @schema CloudFormationStackResourceDriftInformationSummary#LastCheckTimestamp
   */
  readonly lastCheckTimestamp?: string;

}

/**
 * Converts an object of type 'CloudFormationStackResourceDriftInformationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStackResourceDriftInformationSummary(obj: CloudFormationStackResourceDriftInformationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackResourceDriftStatus': obj.stackResourceDriftStatus,
    'LastCheckTimestamp': obj.lastCheckTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationAccountGateResult
 */
export interface CloudFormationAccountGateResult {
  /**
   * @schema CloudFormationAccountGateResult#Status
   */
  readonly status?: string;

  /**
   * @schema CloudFormationAccountGateResult#StatusReason
   */
  readonly statusReason?: string;

}

/**
 * Converts an object of type 'CloudFormationAccountGateResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationAccountGateResult(obj: CloudFormationAccountGateResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'StatusReason': obj.statusReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationStackDriftInformationSummary
 */
export interface CloudFormationStackDriftInformationSummary {
  /**
   * @schema CloudFormationStackDriftInformationSummary#StackDriftStatus
   */
  readonly stackDriftStatus?: string;

  /**
   * @schema CloudFormationStackDriftInformationSummary#LastCheckTimestamp
   */
  readonly lastCheckTimestamp?: string;

}

/**
 * Converts an object of type 'CloudFormationStackDriftInformationSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationStackDriftInformationSummary(obj: CloudFormationStackDriftInformationSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackDriftStatus': obj.stackDriftStatus,
    'LastCheckTimestamp': obj.lastCheckTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationResourceChangeDetail
 */
export interface CloudFormationResourceChangeDetail {
  /**
   * @schema CloudFormationResourceChangeDetail#Target
   */
  readonly target?: CloudFormationResourceTargetDefinition;

  /**
   * @schema CloudFormationResourceChangeDetail#Evaluation
   */
  readonly evaluation?: string;

  /**
   * @schema CloudFormationResourceChangeDetail#ChangeSource
   */
  readonly changeSource?: string;

  /**
   * @schema CloudFormationResourceChangeDetail#CausingEntity
   */
  readonly causingEntity?: string;

}

/**
 * Converts an object of type 'CloudFormationResourceChangeDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationResourceChangeDetail(obj: CloudFormationResourceChangeDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Target': toJson_CloudFormationResourceTargetDefinition(obj.target),
    'Evaluation': obj.evaluation,
    'ChangeSource': obj.changeSource,
    'CausingEntity': obj.causingEntity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CloudFormationResourceTargetDefinition
 */
export interface CloudFormationResourceTargetDefinition {
  /**
   * @schema CloudFormationResourceTargetDefinition#Attribute
   */
  readonly attribute?: string;

  /**
   * @schema CloudFormationResourceTargetDefinition#Name
   */
  readonly name?: string;

  /**
   * @schema CloudFormationResourceTargetDefinition#RequiresRecreation
   */
  readonly requiresRecreation?: string;

}

/**
 * Converts an object of type 'CloudFormationResourceTargetDefinition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CloudFormationResourceTargetDefinition(obj: CloudFormationResourceTargetDefinition | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Attribute': obj.attribute,
    'Name': obj.name,
    'RequiresRecreation': obj.requiresRecreation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
