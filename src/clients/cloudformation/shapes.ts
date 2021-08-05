/**
 * @schema CloudFormationCancelUpdateStackInput
 */
export interface CloudFormationCancelUpdateStackInput {
  /**
   * @schema CloudFormationCancelUpdateStackInput#StackName
   */
  readonly stackName: string;

  /**
   * @schema CloudFormationCancelUpdateStackInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema CloudFormationContinueUpdateRollbackInput
 */
export interface CloudFormationContinueUpdateRollbackInput {
  /**
   * @schema CloudFormationContinueUpdateRollbackInput#StackName
   */
  readonly stackName: string;

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
 * @schema CloudFormationContinueUpdateRollbackOutput
 */
export interface CloudFormationContinueUpdateRollbackOutput {
}

/**
 * @schema CloudFormationCreateChangeSetInput
 */
export interface CloudFormationCreateChangeSetInput {
  /**
   * @schema CloudFormationCreateChangeSetInput#StackName
   */
  readonly stackName: string;

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
  readonly changeSetName: string;

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
 * @schema CloudFormationCreateStackInput
 */
export interface CloudFormationCreateStackInput {
  /**
   * @schema CloudFormationCreateStackInput#StackName
   */
  readonly stackName: string;

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
 * @schema CloudFormationCreateStackOutput
 */
export interface CloudFormationCreateStackOutput {
  /**
   * @schema CloudFormationCreateStackOutput#StackId
   */
  readonly stackId?: string;

}

/**
 * @schema CloudFormationCreateStackInstancesInput
 */
export interface CloudFormationCreateStackInstancesInput {
  /**
   * @schema CloudFormationCreateStackInstancesInput#StackSetName
   */
  readonly stackSetName: string;

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
  readonly regions: string[];

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

}

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
 * @schema CloudFormationCreateStackSetInput
 */
export interface CloudFormationCreateStackSetInput {
  /**
   * @schema CloudFormationCreateStackSetInput#StackSetName
   */
  readonly stackSetName: string;

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
   * @schema CloudFormationCreateStackSetInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

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
 * @schema CloudFormationDeleteChangeSetInput
 */
export interface CloudFormationDeleteChangeSetInput {
  /**
   * @schema CloudFormationDeleteChangeSetInput#ChangeSetName
   */
  readonly changeSetName: string;

  /**
   * @schema CloudFormationDeleteChangeSetInput#StackName
   */
  readonly stackName?: string;

}

/**
 * @schema CloudFormationDeleteChangeSetOutput
 */
export interface CloudFormationDeleteChangeSetOutput {
}

/**
 * @schema CloudFormationDeleteStackInput
 */
export interface CloudFormationDeleteStackInput {
  /**
   * @schema CloudFormationDeleteStackInput#StackName
   */
  readonly stackName: string;

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
 * @schema CloudFormationDeleteStackInstancesInput
 */
export interface CloudFormationDeleteStackInstancesInput {
  /**
   * @schema CloudFormationDeleteStackInstancesInput#StackSetName
   */
  readonly stackSetName: string;

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
  readonly regions: string[];

  /**
   * @schema CloudFormationDeleteStackInstancesInput#OperationPreferences
   */
  readonly operationPreferences?: CloudFormationStackSetOperationPreferences;

  /**
   * @schema CloudFormationDeleteStackInstancesInput#RetainStacks
   */
  readonly retainStacks: boolean;

  /**
   * @schema CloudFormationDeleteStackInstancesInput#OperationId
   */
  readonly operationId?: string;

}

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
 * @schema CloudFormationDeleteStackSetInput
 */
export interface CloudFormationDeleteStackSetInput {
  /**
   * @schema CloudFormationDeleteStackSetInput#StackSetName
   */
  readonly stackSetName: string;

}

/**
 * @schema CloudFormationDeleteStackSetOutput
 */
export interface CloudFormationDeleteStackSetOutput {
}

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
 * @schema CloudFormationDeregisterTypeOutput
 */
export interface CloudFormationDeregisterTypeOutput {
}

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
 * @schema CloudFormationDescribeChangeSetInput
 */
export interface CloudFormationDescribeChangeSetInput {
  /**
   * @schema CloudFormationDescribeChangeSetInput#ChangeSetName
   */
  readonly changeSetName: string;

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
 * @schema CloudFormationDescribeStackDriftDetectionStatusInput
 */
export interface CloudFormationDescribeStackDriftDetectionStatusInput {
  /**
   * @schema CloudFormationDescribeStackDriftDetectionStatusInput#StackDriftDetectionId
   */
  readonly stackDriftDetectionId: string;

}

/**
 * @schema CloudFormationDescribeStackDriftDetectionStatusOutput
 */
export interface CloudFormationDescribeStackDriftDetectionStatusOutput {
  /**
   * @schema CloudFormationDescribeStackDriftDetectionStatusOutput#StackId
   */
  readonly stackId: string;

  /**
   * @schema CloudFormationDescribeStackDriftDetectionStatusOutput#StackDriftDetectionId
   */
  readonly stackDriftDetectionId: string;

  /**
   * @schema CloudFormationDescribeStackDriftDetectionStatusOutput#StackDriftStatus
   */
  readonly stackDriftStatus?: string;

  /**
   * @schema CloudFormationDescribeStackDriftDetectionStatusOutput#DetectionStatus
   */
  readonly detectionStatus: string;

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
  readonly timestamp: string;

}

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
 * @schema CloudFormationDescribeStackInstanceInput
 */
export interface CloudFormationDescribeStackInstanceInput {
  /**
   * @schema CloudFormationDescribeStackInstanceInput#StackSetName
   */
  readonly stackSetName: string;

  /**
   * @schema CloudFormationDescribeStackInstanceInput#StackInstanceAccount
   */
  readonly stackInstanceAccount: string;

  /**
   * @schema CloudFormationDescribeStackInstanceInput#StackInstanceRegion
   */
  readonly stackInstanceRegion: string;

}

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
 * @schema CloudFormationDescribeStackResourceInput
 */
export interface CloudFormationDescribeStackResourceInput {
  /**
   * @schema CloudFormationDescribeStackResourceInput#StackName
   */
  readonly stackName: string;

  /**
   * @schema CloudFormationDescribeStackResourceInput#LogicalResourceId
   */
  readonly logicalResourceId: string;

}

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
 * @schema CloudFormationDescribeStackResourceDriftsInput
 */
export interface CloudFormationDescribeStackResourceDriftsInput {
  /**
   * @schema CloudFormationDescribeStackResourceDriftsInput#StackName
   */
  readonly stackName: string;

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
 * @schema CloudFormationDescribeStackResourceDriftsOutput
 */
export interface CloudFormationDescribeStackResourceDriftsOutput {
  /**
   * @schema CloudFormationDescribeStackResourceDriftsOutput#StackResourceDrifts
   */
  readonly stackResourceDrifts: CloudFormationStackResourceDrift[];

  /**
   * @schema CloudFormationDescribeStackResourceDriftsOutput#NextToken
   */
  readonly nextToken?: string;

}

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
 * @schema CloudFormationDescribeStackResourcesOutput
 */
export interface CloudFormationDescribeStackResourcesOutput {
  /**
   * @schema CloudFormationDescribeStackResourcesOutput#StackResources
   */
  readonly stackResources?: CloudFormationStackResource[];

}

/**
 * @schema CloudFormationDescribeStackSetInput
 */
export interface CloudFormationDescribeStackSetInput {
  /**
   * @schema CloudFormationDescribeStackSetInput#StackSetName
   */
  readonly stackSetName: string;

}

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
 * @schema CloudFormationDescribeStackSetOperationInput
 */
export interface CloudFormationDescribeStackSetOperationInput {
  /**
   * @schema CloudFormationDescribeStackSetOperationInput#StackSetName
   */
  readonly stackSetName: string;

  /**
   * @schema CloudFormationDescribeStackSetOperationInput#OperationId
   */
  readonly operationId: string;

}

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

}

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

}

/**
 * @schema CloudFormationDescribeTypeRegistrationInput
 */
export interface CloudFormationDescribeTypeRegistrationInput {
  /**
   * @schema CloudFormationDescribeTypeRegistrationInput#RegistrationToken
   */
  readonly registrationToken: string;

}

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
 * @schema CloudFormationDetectStackDriftInput
 */
export interface CloudFormationDetectStackDriftInput {
  /**
   * @schema CloudFormationDetectStackDriftInput#StackName
   */
  readonly stackName: string;

  /**
   * @schema CloudFormationDetectStackDriftInput#LogicalResourceIds
   */
  readonly logicalResourceIds?: string[];

}

/**
 * @schema CloudFormationDetectStackDriftOutput
 */
export interface CloudFormationDetectStackDriftOutput {
  /**
   * @schema CloudFormationDetectStackDriftOutput#StackDriftDetectionId
   */
  readonly stackDriftDetectionId: string;

}

/**
 * @schema CloudFormationDetectStackResourceDriftInput
 */
export interface CloudFormationDetectStackResourceDriftInput {
  /**
   * @schema CloudFormationDetectStackResourceDriftInput#StackName
   */
  readonly stackName: string;

  /**
   * @schema CloudFormationDetectStackResourceDriftInput#LogicalResourceId
   */
  readonly logicalResourceId: string;

}

/**
 * @schema CloudFormationDetectStackResourceDriftOutput
 */
export interface CloudFormationDetectStackResourceDriftOutput {
  /**
   * @schema CloudFormationDetectStackResourceDriftOutput#StackResourceDrift
   */
  readonly stackResourceDrift: CloudFormationStackResourceDrift;

}

/**
 * @schema CloudFormationDetectStackSetDriftInput
 */
export interface CloudFormationDetectStackSetDriftInput {
  /**
   * @schema CloudFormationDetectStackSetDriftInput#StackSetName
   */
  readonly stackSetName: string;

  /**
   * @schema CloudFormationDetectStackSetDriftInput#OperationPreferences
   */
  readonly operationPreferences?: CloudFormationStackSetOperationPreferences;

  /**
   * @schema CloudFormationDetectStackSetDriftInput#OperationId
   */
  readonly operationId?: string;

}

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
 * @schema CloudFormationEstimateTemplateCostOutput
 */
export interface CloudFormationEstimateTemplateCostOutput {
  /**
   * @schema CloudFormationEstimateTemplateCostOutput#Url
   */
  readonly url?: string;

}

/**
 * @schema CloudFormationExecuteChangeSetInput
 */
export interface CloudFormationExecuteChangeSetInput {
  /**
   * @schema CloudFormationExecuteChangeSetInput#ChangeSetName
   */
  readonly changeSetName: string;

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
 * @schema CloudFormationExecuteChangeSetOutput
 */
export interface CloudFormationExecuteChangeSetOutput {
}

/**
 * @schema CloudFormationGetStackPolicyInput
 */
export interface CloudFormationGetStackPolicyInput {
  /**
   * @schema CloudFormationGetStackPolicyInput#StackName
   */
  readonly stackName: string;

}

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

}

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
 * @schema CloudFormationListChangeSetsInput
 */
export interface CloudFormationListChangeSetsInput {
  /**
   * @schema CloudFormationListChangeSetsInput#StackName
   */
  readonly stackName: string;

  /**
   * @schema CloudFormationListChangeSetsInput#NextToken
   */
  readonly nextToken?: string;

}

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
 * @schema CloudFormationListExportsInput
 */
export interface CloudFormationListExportsInput {
  /**
   * @schema CloudFormationListExportsInput#NextToken
   */
  readonly nextToken?: string;

}

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
 * @schema CloudFormationListImportsInput
 */
export interface CloudFormationListImportsInput {
  /**
   * @schema CloudFormationListImportsInput#ExportName
   */
  readonly exportName: string;

  /**
   * @schema CloudFormationListImportsInput#NextToken
   */
  readonly nextToken?: string;

}

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
 * @schema CloudFormationListStackInstancesInput
 */
export interface CloudFormationListStackInstancesInput {
  /**
   * @schema CloudFormationListStackInstancesInput#StackSetName
   */
  readonly stackSetName: string;

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

}

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
 * @schema CloudFormationListStackResourcesInput
 */
export interface CloudFormationListStackResourcesInput {
  /**
   * @schema CloudFormationListStackResourcesInput#StackName
   */
  readonly stackName: string;

  /**
   * @schema CloudFormationListStackResourcesInput#NextToken
   */
  readonly nextToken?: string;

}

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
 * @schema CloudFormationListStackSetOperationResultsInput
 */
export interface CloudFormationListStackSetOperationResultsInput {
  /**
   * @schema CloudFormationListStackSetOperationResultsInput#StackSetName
   */
  readonly stackSetName: string;

  /**
   * @schema CloudFormationListStackSetOperationResultsInput#OperationId
   */
  readonly operationId: string;

  /**
   * @schema CloudFormationListStackSetOperationResultsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudFormationListStackSetOperationResultsInput#MaxResults
   */
  readonly maxResults?: number;

}

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
 * @schema CloudFormationListStackSetOperationsInput
 */
export interface CloudFormationListStackSetOperationsInput {
  /**
   * @schema CloudFormationListStackSetOperationsInput#StackSetName
   */
  readonly stackSetName: string;

  /**
   * @schema CloudFormationListStackSetOperationsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CloudFormationListStackSetOperationsInput#MaxResults
   */
  readonly maxResults?: number;

}

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

}

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

}

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
   * @schema CloudFormationListTypesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema CloudFormationListTypesInput#NextToken
   */
  readonly nextToken?: string;

}

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
 * @schema CloudFormationRecordHandlerProgressInput
 */
export interface CloudFormationRecordHandlerProgressInput {
  /**
   * @schema CloudFormationRecordHandlerProgressInput#BearerToken
   */
  readonly bearerToken: string;

  /**
   * @schema CloudFormationRecordHandlerProgressInput#OperationStatus
   */
  readonly operationStatus: string;

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
 * @schema CloudFormationRecordHandlerProgressOutput
 */
export interface CloudFormationRecordHandlerProgressOutput {
}

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
  readonly typeName: string;

  /**
   * @schema CloudFormationRegisterTypeInput#SchemaHandlerPackage
   */
  readonly schemaHandlerPackage: string;

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
 * @schema CloudFormationRegisterTypeOutput
 */
export interface CloudFormationRegisterTypeOutput {
  /**
   * @schema CloudFormationRegisterTypeOutput#RegistrationToken
   */
  readonly registrationToken?: string;

}

/**
 * @schema CloudFormationSetStackPolicyInput
 */
export interface CloudFormationSetStackPolicyInput {
  /**
   * @schema CloudFormationSetStackPolicyInput#StackName
   */
  readonly stackName: string;

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
 * @schema CloudFormationSetTypeDefaultVersionOutput
 */
export interface CloudFormationSetTypeDefaultVersionOutput {
}

/**
 * @schema CloudFormationSignalResourceInput
 */
export interface CloudFormationSignalResourceInput {
  /**
   * @schema CloudFormationSignalResourceInput#StackName
   */
  readonly stackName: string;

  /**
   * @schema CloudFormationSignalResourceInput#LogicalResourceId
   */
  readonly logicalResourceId: string;

  /**
   * @schema CloudFormationSignalResourceInput#UniqueId
   */
  readonly uniqueId: string;

  /**
   * @schema CloudFormationSignalResourceInput#Status
   */
  readonly status: string;

}

/**
 * @schema CloudFormationStopStackSetOperationInput
 */
export interface CloudFormationStopStackSetOperationInput {
  /**
   * @schema CloudFormationStopStackSetOperationInput#StackSetName
   */
  readonly stackSetName: string;

  /**
   * @schema CloudFormationStopStackSetOperationInput#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema CloudFormationStopStackSetOperationOutput
 */
export interface CloudFormationStopStackSetOperationOutput {
}

/**
 * @schema CloudFormationUpdateStackInput
 */
export interface CloudFormationUpdateStackInput {
  /**
   * @schema CloudFormationUpdateStackInput#StackName
   */
  readonly stackName: string;

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
 * @schema CloudFormationUpdateStackOutput
 */
export interface CloudFormationUpdateStackOutput {
  /**
   * @schema CloudFormationUpdateStackOutput#StackId
   */
  readonly stackId?: string;

}

/**
 * @schema CloudFormationUpdateStackInstancesInput
 */
export interface CloudFormationUpdateStackInstancesInput {
  /**
   * @schema CloudFormationUpdateStackInstancesInput#StackSetName
   */
  readonly stackSetName: string;

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
  readonly regions: string[];

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

}

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
 * @schema CloudFormationUpdateStackSetInput
 */
export interface CloudFormationUpdateStackSetInput {
  /**
   * @schema CloudFormationUpdateStackSetInput#StackSetName
   */
  readonly stackSetName: string;

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

}

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
 * @schema CloudFormationUpdateTerminationProtectionInput
 */
export interface CloudFormationUpdateTerminationProtectionInput {
  /**
   * @schema CloudFormationUpdateTerminationProtectionInput#EnableTerminationProtection
   */
  readonly enableTerminationProtection: boolean;

  /**
   * @schema CloudFormationUpdateTerminationProtectionInput#StackName
   */
  readonly stackName: string;

}

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
 * @schema CloudFormationTag
 */
export interface CloudFormationTag {
  /**
   * @schema CloudFormationTag#Key
   */
  readonly key: string;

  /**
   * @schema CloudFormationTag#Value
   */
  readonly value: string;

}

/**
 * @schema CloudFormationResourceToImport
 */
export interface CloudFormationResourceToImport {
  /**
   * @schema CloudFormationResourceToImport#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema CloudFormationResourceToImport#LogicalResourceId
   */
  readonly logicalResourceId: string;

  /**
   * @schema CloudFormationResourceToImport#ResourceIdentifier
   */
  readonly resourceIdentifier: { [key: string]: string };

}

/**
 * @schema CloudFormationDeploymentTargets
 */
export interface CloudFormationDeploymentTargets {
  /**
   * @schema CloudFormationDeploymentTargets#Accounts
   */
  readonly accounts?: string[];

  /**
   * @schema CloudFormationDeploymentTargets#OrganizationalUnitIds
   */
  readonly organizationalUnitIds?: string[];

}

/**
 * @schema CloudFormationStackSetOperationPreferences
 */
export interface CloudFormationStackSetOperationPreferences {
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
 * @schema CloudFormationStackEvent
 */
export interface CloudFormationStackEvent {
  /**
   * @schema CloudFormationStackEvent#StackId
   */
  readonly stackId: string;

  /**
   * @schema CloudFormationStackEvent#EventId
   */
  readonly eventId: string;

  /**
   * @schema CloudFormationStackEvent#StackName
   */
  readonly stackName: string;

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
  readonly timestamp: string;

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
  readonly logicalResourceId: string;

  /**
   * @schema CloudFormationStackResourceDetail#PhysicalResourceId
   */
  readonly physicalResourceId?: string;

  /**
   * @schema CloudFormationStackResourceDetail#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema CloudFormationStackResourceDetail#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp: string;

  /**
   * @schema CloudFormationStackResourceDetail#ResourceStatus
   */
  readonly resourceStatus: string;

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
 * @schema CloudFormationStackResourceDrift
 */
export interface CloudFormationStackResourceDrift {
  /**
   * @schema CloudFormationStackResourceDrift#StackId
   */
  readonly stackId: string;

  /**
   * @schema CloudFormationStackResourceDrift#LogicalResourceId
   */
  readonly logicalResourceId: string;

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
  readonly resourceType: string;

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
  readonly stackResourceDriftStatus: string;

  /**
   * @schema CloudFormationStackResourceDrift#Timestamp
   */
  readonly timestamp: string;

  /**
   * @schema CloudFormationStackResourceDrift#ModuleInfo
   */
  readonly moduleInfo?: CloudFormationModuleInfo;

}

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
  readonly logicalResourceId: string;

  /**
   * @schema CloudFormationStackResource#PhysicalResourceId
   */
  readonly physicalResourceId?: string;

  /**
   * @schema CloudFormationStackResource#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema CloudFormationStackResource#Timestamp
   */
  readonly timestamp: string;

  /**
   * @schema CloudFormationStackResource#ResourceStatus
   */
  readonly resourceStatus: string;

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
  readonly stackName: string;

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
  readonly creationTime: string;

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
  readonly stackStatus: string;

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
 * @schema CloudFormationLoggingConfig
 */
export interface CloudFormationLoggingConfig {
  /**
   * @schema CloudFormationLoggingConfig#LogRoleArn
   */
  readonly logRoleArn: string;

  /**
   * @schema CloudFormationLoggingConfig#LogGroupName
   */
  readonly logGroupName: string;

}

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
 * @schema CloudFormationStackResourceSummary
 */
export interface CloudFormationStackResourceSummary {
  /**
   * @schema CloudFormationStackResourceSummary#LogicalResourceId
   */
  readonly logicalResourceId: string;

  /**
   * @schema CloudFormationStackResourceSummary#PhysicalResourceId
   */
  readonly physicalResourceId?: string;

  /**
   * @schema CloudFormationStackResourceSummary#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema CloudFormationStackResourceSummary#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp: string;

  /**
   * @schema CloudFormationStackResourceSummary#ResourceStatus
   */
  readonly resourceStatus: string;

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
  readonly stackName: string;

  /**
   * @schema CloudFormationStackSummary#TemplateDescription
   */
  readonly templateDescription?: string;

  /**
   * @schema CloudFormationStackSummary#CreationTime
   */
  readonly creationTime: string;

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
  readonly stackStatus: string;

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

}

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

}

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
 * @schema CloudFormationRollbackTrigger
 */
export interface CloudFormationRollbackTrigger {
  /**
   * @schema CloudFormationRollbackTrigger#Arn
   */
  readonly arn: string;

  /**
   * @schema CloudFormationRollbackTrigger#Type
   */
  readonly type: string;

}

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
 * @schema CloudFormationStackInstanceComprehensiveStatus
 */
export interface CloudFormationStackInstanceComprehensiveStatus {
  /**
   * @schema CloudFormationStackInstanceComprehensiveStatus#DetailedStatus
   */
  readonly detailedStatus?: string;

}

/**
 * @schema CloudFormationStackResourceDriftInformation
 */
export interface CloudFormationStackResourceDriftInformation {
  /**
   * @schema CloudFormationStackResourceDriftInformation#StackResourceDriftStatus
   */
  readonly stackResourceDriftStatus: string;

  /**
   * @schema CloudFormationStackResourceDriftInformation#LastCheckTimestamp
   */
  readonly lastCheckTimestamp?: string;

}

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
 * @schema CloudFormationPhysicalResourceIdContextKeyValuePair
 */
export interface CloudFormationPhysicalResourceIdContextKeyValuePair {
  /**
   * @schema CloudFormationPhysicalResourceIdContextKeyValuePair#Key
   */
  readonly key: string;

  /**
   * @schema CloudFormationPhysicalResourceIdContextKeyValuePair#Value
   */
  readonly value: string;

}

/**
 * @schema CloudFormationPropertyDifference
 */
export interface CloudFormationPropertyDifference {
  /**
   * @schema CloudFormationPropertyDifference#PropertyPath
   */
  readonly propertyPath: string;

  /**
   * @schema CloudFormationPropertyDifference#ExpectedValue
   */
  readonly expectedValue: string;

  /**
   * @schema CloudFormationPropertyDifference#ActualValue
   */
  readonly actualValue: string;

  /**
   * @schema CloudFormationPropertyDifference#DifferenceType
   */
  readonly differenceType: string;

}

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
 * @schema CloudFormationStackDriftInformation
 */
export interface CloudFormationStackDriftInformation {
  /**
   * @schema CloudFormationStackDriftInformation#StackDriftStatus
   */
  readonly stackDriftStatus: string;

  /**
   * @schema CloudFormationStackDriftInformation#LastCheckTimestamp
   */
  readonly lastCheckTimestamp?: string;

}

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
 * @schema CloudFormationStackResourceDriftInformationSummary
 */
export interface CloudFormationStackResourceDriftInformationSummary {
  /**
   * @schema CloudFormationStackResourceDriftInformationSummary#StackResourceDriftStatus
   */
  readonly stackResourceDriftStatus: string;

  /**
   * @schema CloudFormationStackResourceDriftInformationSummary#LastCheckTimestamp
   */
  readonly lastCheckTimestamp?: string;

}

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
 * @schema CloudFormationStackDriftInformationSummary
 */
export interface CloudFormationStackDriftInformationSummary {
  /**
   * @schema CloudFormationStackDriftInformationSummary#StackDriftStatus
   */
  readonly stackDriftStatus: string;

  /**
   * @schema CloudFormationStackDriftInformationSummary#LastCheckTimestamp
   */
  readonly lastCheckTimestamp?: string;

}

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
