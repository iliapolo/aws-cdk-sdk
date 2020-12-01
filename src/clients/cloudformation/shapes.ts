/**
 * @schema CancelUpdateStackInput
 */
export interface CancelUpdateStackInput {
  /**
   * @schema CancelUpdateStackInput#StackName
   */
  readonly stackName: string;

  /**
   * @schema CancelUpdateStackInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema ContinueUpdateRollbackInput
 */
export interface ContinueUpdateRollbackInput {
  /**
   * @schema ContinueUpdateRollbackInput#StackName
   */
  readonly stackName: string;

  /**
   * @schema ContinueUpdateRollbackInput#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema ContinueUpdateRollbackInput#ResourcesToSkip
   */
  readonly resourcesToSkip?: string[];

  /**
   * @schema ContinueUpdateRollbackInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema ContinueUpdateRollbackOutput
 */
export interface ContinueUpdateRollbackOutput {
}

/**
 * @schema CreateChangeSetInput
 */
export interface CreateChangeSetInput {
  /**
   * @schema CreateChangeSetInput#StackName
   */
  readonly stackName: string;

  /**
   * @schema CreateChangeSetInput#TemplateBody
   */
  readonly templateBody?: string;

  /**
   * @schema CreateChangeSetInput#TemplateURL
   */
  readonly templateUrl?: string;

  /**
   * @schema CreateChangeSetInput#UsePreviousTemplate
   */
  readonly usePreviousTemplate?: boolean;

  /**
   * @schema CreateChangeSetInput#Parameters
   */
  readonly parameters?: Parameter[];

  /**
   * @schema CreateChangeSetInput#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema CreateChangeSetInput#ResourceTypes
   */
  readonly resourceTypes?: string[];

  /**
   * @schema CreateChangeSetInput#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema CreateChangeSetInput#RollbackConfiguration
   */
  readonly rollbackConfiguration?: RollbackConfiguration;

  /**
   * @schema CreateChangeSetInput#NotificationARNs
   */
  readonly notificationArNs?: string[];

  /**
   * @schema CreateChangeSetInput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateChangeSetInput#ChangeSetName
   */
  readonly changeSetName: string;

  /**
   * @schema CreateChangeSetInput#ClientToken
   */
  readonly clientToken?: string;

  /**
   * @schema CreateChangeSetInput#Description
   */
  readonly description?: string;

  /**
   * @schema CreateChangeSetInput#ChangeSetType
   */
  readonly changeSetType?: string;

  /**
   * @schema CreateChangeSetInput#ResourcesToImport
   */
  readonly resourcesToImport?: ResourceToImport[];

  /**
   * @schema CreateChangeSetInput#IncludeNestedStacks
   */
  readonly includeNestedStacks?: boolean;

}

/**
 * @schema CreateChangeSetOutput
 */
export interface CreateChangeSetOutput {
  /**
   * @schema CreateChangeSetOutput#Id
   */
  readonly id?: string;

  /**
   * @schema CreateChangeSetOutput#StackId
   */
  readonly stackId?: string;

}

/**
 * @schema CreateStackInput
 */
export interface CreateStackInput {
  /**
   * @schema CreateStackInput#StackName
   */
  readonly stackName: string;

  /**
   * @schema CreateStackInput#TemplateBody
   */
  readonly templateBody?: string;

  /**
   * @schema CreateStackInput#TemplateURL
   */
  readonly templateUrl?: string;

  /**
   * @schema CreateStackInput#Parameters
   */
  readonly parameters?: Parameter[];

  /**
   * @schema CreateStackInput#DisableRollback
   */
  readonly disableRollback?: boolean;

  /**
   * @schema CreateStackInput#RollbackConfiguration
   */
  readonly rollbackConfiguration?: RollbackConfiguration;

  /**
   * @schema CreateStackInput#TimeoutInMinutes
   */
  readonly timeoutInMinutes?: number;

  /**
   * @schema CreateStackInput#NotificationARNs
   */
  readonly notificationArNs?: string[];

  /**
   * @schema CreateStackInput#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema CreateStackInput#ResourceTypes
   */
  readonly resourceTypes?: string[];

  /**
   * @schema CreateStackInput#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema CreateStackInput#OnFailure
   */
  readonly onFailure?: string;

  /**
   * @schema CreateStackInput#StackPolicyBody
   */
  readonly stackPolicyBody?: string;

  /**
   * @schema CreateStackInput#StackPolicyURL
   */
  readonly stackPolicyUrl?: string;

  /**
   * @schema CreateStackInput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateStackInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateStackInput#EnableTerminationProtection
   */
  readonly enableTerminationProtection?: boolean;

}

/**
 * @schema CreateStackOutput
 */
export interface CreateStackOutput {
  /**
   * @schema CreateStackOutput#StackId
   */
  readonly stackId?: string;

}

/**
 * @schema CreateStackInstancesInput
 */
export interface CreateStackInstancesInput {
  /**
   * @schema CreateStackInstancesInput#StackSetName
   */
  readonly stackSetName: string;

  /**
   * @schema CreateStackInstancesInput#Accounts
   */
  readonly accounts?: string[];

  /**
   * @schema CreateStackInstancesInput#DeploymentTargets
   */
  readonly deploymentTargets?: DeploymentTargets;

  /**
   * @schema CreateStackInstancesInput#Regions
   */
  readonly regions: string[];

  /**
   * @schema CreateStackInstancesInput#ParameterOverrides
   */
  readonly parameterOverrides?: Parameter[];

  /**
   * @schema CreateStackInstancesInput#OperationPreferences
   */
  readonly operationPreferences?: StackSetOperationPreferences;

  /**
   * @schema CreateStackInstancesInput#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema CreateStackInstancesOutput
 */
export interface CreateStackInstancesOutput {
  /**
   * @schema CreateStackInstancesOutput#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema CreateStackSetInput
 */
export interface CreateStackSetInput {
  /**
   * @schema CreateStackSetInput#StackSetName
   */
  readonly stackSetName: string;

  /**
   * @schema CreateStackSetInput#Description
   */
  readonly description?: string;

  /**
   * @schema CreateStackSetInput#TemplateBody
   */
  readonly templateBody?: string;

  /**
   * @schema CreateStackSetInput#TemplateURL
   */
  readonly templateUrl?: string;

  /**
   * @schema CreateStackSetInput#Parameters
   */
  readonly parameters?: Parameter[];

  /**
   * @schema CreateStackSetInput#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema CreateStackSetInput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateStackSetInput#AdministrationRoleARN
   */
  readonly administrationRoleArn?: string;

  /**
   * @schema CreateStackSetInput#ExecutionRoleName
   */
  readonly executionRoleName?: string;

  /**
   * @schema CreateStackSetInput#PermissionModel
   */
  readonly permissionModel?: string;

  /**
   * @schema CreateStackSetInput#AutoDeployment
   */
  readonly autoDeployment?: AutoDeployment;

  /**
   * @schema CreateStackSetInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema CreateStackSetOutput
 */
export interface CreateStackSetOutput {
  /**
   * @schema CreateStackSetOutput#StackSetId
   */
  readonly stackSetId?: string;

}

/**
 * @schema DeleteChangeSetInput
 */
export interface DeleteChangeSetInput {
  /**
   * @schema DeleteChangeSetInput#ChangeSetName
   */
  readonly changeSetName: string;

  /**
   * @schema DeleteChangeSetInput#StackName
   */
  readonly stackName?: string;

}

/**
 * @schema DeleteChangeSetOutput
 */
export interface DeleteChangeSetOutput {
}

/**
 * @schema DeleteStackInput
 */
export interface DeleteStackInput {
  /**
   * @schema DeleteStackInput#StackName
   */
  readonly stackName: string;

  /**
   * @schema DeleteStackInput#RetainResources
   */
  readonly retainResources?: string[];

  /**
   * @schema DeleteStackInput#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema DeleteStackInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema DeleteStackInstancesInput
 */
export interface DeleteStackInstancesInput {
  /**
   * @schema DeleteStackInstancesInput#StackSetName
   */
  readonly stackSetName: string;

  /**
   * @schema DeleteStackInstancesInput#Accounts
   */
  readonly accounts?: string[];

  /**
   * @schema DeleteStackInstancesInput#DeploymentTargets
   */
  readonly deploymentTargets?: DeploymentTargets;

  /**
   * @schema DeleteStackInstancesInput#Regions
   */
  readonly regions: string[];

  /**
   * @schema DeleteStackInstancesInput#OperationPreferences
   */
  readonly operationPreferences?: StackSetOperationPreferences;

  /**
   * @schema DeleteStackInstancesInput#RetainStacks
   */
  readonly retainStacks: boolean;

  /**
   * @schema DeleteStackInstancesInput#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema DeleteStackInstancesOutput
 */
export interface DeleteStackInstancesOutput {
  /**
   * @schema DeleteStackInstancesOutput#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema DeleteStackSetInput
 */
export interface DeleteStackSetInput {
  /**
   * @schema DeleteStackSetInput#StackSetName
   */
  readonly stackSetName: string;

}

/**
 * @schema DeleteStackSetOutput
 */
export interface DeleteStackSetOutput {
}

/**
 * @schema DeregisterTypeInput
 */
export interface DeregisterTypeInput {
  /**
   * @schema DeregisterTypeInput#Arn
   */
  readonly arn?: string;

  /**
   * @schema DeregisterTypeInput#Type
   */
  readonly type?: string;

  /**
   * @schema DeregisterTypeInput#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema DeregisterTypeInput#VersionId
   */
  readonly versionId?: string;

}

/**
 * @schema DeregisterTypeOutput
 */
export interface DeregisterTypeOutput {
}

/**
 * @schema DescribeAccountLimitsInput
 */
export interface DescribeAccountLimitsInput {
  /**
   * @schema DescribeAccountLimitsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeAccountLimitsOutput
 */
export interface DescribeAccountLimitsOutput {
  /**
   * @schema DescribeAccountLimitsOutput#AccountLimits
   */
  readonly accountLimits?: AccountLimit[];

  /**
   * @schema DescribeAccountLimitsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeChangeSetInput
 */
export interface DescribeChangeSetInput {
  /**
   * @schema DescribeChangeSetInput#ChangeSetName
   */
  readonly changeSetName: string;

  /**
   * @schema DescribeChangeSetInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema DescribeChangeSetInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeChangeSetOutput
 */
export interface DescribeChangeSetOutput {
  /**
   * @schema DescribeChangeSetOutput#ChangeSetName
   */
  readonly changeSetName?: string;

  /**
   * @schema DescribeChangeSetOutput#ChangeSetId
   */
  readonly changeSetId?: string;

  /**
   * @schema DescribeChangeSetOutput#StackId
   */
  readonly stackId?: string;

  /**
   * @schema DescribeChangeSetOutput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema DescribeChangeSetOutput#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeChangeSetOutput#Parameters
   */
  readonly parameters?: Parameter[];

  /**
   * @schema DescribeChangeSetOutput#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DescribeChangeSetOutput#ExecutionStatus
   */
  readonly executionStatus?: string;

  /**
   * @schema DescribeChangeSetOutput#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeChangeSetOutput#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema DescribeChangeSetOutput#NotificationARNs
   */
  readonly notificationArNs?: string[];

  /**
   * @schema DescribeChangeSetOutput#RollbackConfiguration
   */
  readonly rollbackConfiguration?: RollbackConfiguration;

  /**
   * @schema DescribeChangeSetOutput#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema DescribeChangeSetOutput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema DescribeChangeSetOutput#Changes
   */
  readonly changes?: Change[];

  /**
   * @schema DescribeChangeSetOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeChangeSetOutput#IncludeNestedStacks
   */
  readonly includeNestedStacks?: boolean;

  /**
   * @schema DescribeChangeSetOutput#ParentChangeSetId
   */
  readonly parentChangeSetId?: string;

  /**
   * @schema DescribeChangeSetOutput#RootChangeSetId
   */
  readonly rootChangeSetId?: string;

}

/**
 * @schema DescribeStackDriftDetectionStatusInput
 */
export interface DescribeStackDriftDetectionStatusInput {
  /**
   * @schema DescribeStackDriftDetectionStatusInput#StackDriftDetectionId
   */
  readonly stackDriftDetectionId: string;

}

/**
 * @schema DescribeStackDriftDetectionStatusOutput
 */
export interface DescribeStackDriftDetectionStatusOutput {
  /**
   * @schema DescribeStackDriftDetectionStatusOutput#StackId
   */
  readonly stackId: string;

  /**
   * @schema DescribeStackDriftDetectionStatusOutput#StackDriftDetectionId
   */
  readonly stackDriftDetectionId: string;

  /**
   * @schema DescribeStackDriftDetectionStatusOutput#StackDriftStatus
   */
  readonly stackDriftStatus?: string;

  /**
   * @schema DescribeStackDriftDetectionStatusOutput#DetectionStatus
   */
  readonly detectionStatus: string;

  /**
   * @schema DescribeStackDriftDetectionStatusOutput#DetectionStatusReason
   */
  readonly detectionStatusReason?: string;

  /**
   * @schema DescribeStackDriftDetectionStatusOutput#DriftedStackResourceCount
   */
  readonly driftedStackResourceCount?: number;

  /**
   * @schema DescribeStackDriftDetectionStatusOutput#Timestamp
   */
  readonly timestamp: string;

}

/**
 * @schema DescribeStackEventsInput
 */
export interface DescribeStackEventsInput {
  /**
   * @schema DescribeStackEventsInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema DescribeStackEventsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeStackEventsOutput
 */
export interface DescribeStackEventsOutput {
  /**
   * @schema DescribeStackEventsOutput#StackEvents
   */
  readonly stackEvents?: StackEvent[];

  /**
   * @schema DescribeStackEventsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeStackInstanceInput
 */
export interface DescribeStackInstanceInput {
  /**
   * @schema DescribeStackInstanceInput#StackSetName
   */
  readonly stackSetName: string;

  /**
   * @schema DescribeStackInstanceInput#StackInstanceAccount
   */
  readonly stackInstanceAccount: string;

  /**
   * @schema DescribeStackInstanceInput#StackInstanceRegion
   */
  readonly stackInstanceRegion: string;

}

/**
 * @schema DescribeStackInstanceOutput
 */
export interface DescribeStackInstanceOutput {
  /**
   * @schema DescribeStackInstanceOutput#StackInstance
   */
  readonly stackInstance?: StackInstance;

}

/**
 * @schema DescribeStackResourceInput
 */
export interface DescribeStackResourceInput {
  /**
   * @schema DescribeStackResourceInput#StackName
   */
  readonly stackName: string;

  /**
   * @schema DescribeStackResourceInput#LogicalResourceId
   */
  readonly logicalResourceId: string;

}

/**
 * @schema DescribeStackResourceOutput
 */
export interface DescribeStackResourceOutput {
  /**
   * @schema DescribeStackResourceOutput#StackResourceDetail
   */
  readonly stackResourceDetail?: StackResourceDetail;

}

/**
 * @schema DescribeStackResourceDriftsInput
 */
export interface DescribeStackResourceDriftsInput {
  /**
   * @schema DescribeStackResourceDriftsInput#StackName
   */
  readonly stackName: string;

  /**
   * @schema DescribeStackResourceDriftsInput#StackResourceDriftStatusFilters
   */
  readonly stackResourceDriftStatusFilters?: string[];

  /**
   * @schema DescribeStackResourceDriftsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeStackResourceDriftsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeStackResourceDriftsOutput
 */
export interface DescribeStackResourceDriftsOutput {
  /**
   * @schema DescribeStackResourceDriftsOutput#StackResourceDrifts
   */
  readonly stackResourceDrifts: StackResourceDrift[];

  /**
   * @schema DescribeStackResourceDriftsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeStackResourcesInput
 */
export interface DescribeStackResourcesInput {
  /**
   * @schema DescribeStackResourcesInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema DescribeStackResourcesInput#LogicalResourceId
   */
  readonly logicalResourceId?: string;

  /**
   * @schema DescribeStackResourcesInput#PhysicalResourceId
   */
  readonly physicalResourceId?: string;

}

/**
 * @schema DescribeStackResourcesOutput
 */
export interface DescribeStackResourcesOutput {
  /**
   * @schema DescribeStackResourcesOutput#StackResources
   */
  readonly stackResources?: StackResource[];

}

/**
 * @schema DescribeStackSetInput
 */
export interface DescribeStackSetInput {
  /**
   * @schema DescribeStackSetInput#StackSetName
   */
  readonly stackSetName: string;

}

/**
 * @schema DescribeStackSetOutput
 */
export interface DescribeStackSetOutput {
  /**
   * @schema DescribeStackSetOutput#StackSet
   */
  readonly stackSet?: StackSet;

}

/**
 * @schema DescribeStackSetOperationInput
 */
export interface DescribeStackSetOperationInput {
  /**
   * @schema DescribeStackSetOperationInput#StackSetName
   */
  readonly stackSetName: string;

  /**
   * @schema DescribeStackSetOperationInput#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema DescribeStackSetOperationOutput
 */
export interface DescribeStackSetOperationOutput {
  /**
   * @schema DescribeStackSetOperationOutput#StackSetOperation
   */
  readonly stackSetOperation?: StackSetOperation;

}

/**
 * @schema DescribeStacksInput
 */
export interface DescribeStacksInput {
  /**
   * @schema DescribeStacksInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema DescribeStacksInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeStacksOutput
 */
export interface DescribeStacksOutput {
  /**
   * @schema DescribeStacksOutput#Stacks
   */
  readonly stacks?: Stack[];

  /**
   * @schema DescribeStacksOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeTypeInput
 */
export interface DescribeTypeInput {
  /**
   * @schema DescribeTypeInput#Type
   */
  readonly type?: string;

  /**
   * @schema DescribeTypeInput#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema DescribeTypeInput#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeTypeInput#VersionId
   */
  readonly versionId?: string;

}

/**
 * @schema DescribeTypeOutput
 */
export interface DescribeTypeOutput {
  /**
   * @schema DescribeTypeOutput#Arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeTypeOutput#Type
   */
  readonly type?: string;

  /**
   * @schema DescribeTypeOutput#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema DescribeTypeOutput#DefaultVersionId
   */
  readonly defaultVersionId?: string;

  /**
   * @schema DescribeTypeOutput#IsDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

  /**
   * @schema DescribeTypeOutput#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeTypeOutput#Schema
   */
  readonly schema?: string;

  /**
   * @schema DescribeTypeOutput#ProvisioningType
   */
  readonly provisioningType?: string;

  /**
   * @schema DescribeTypeOutput#DeprecatedStatus
   */
  readonly deprecatedStatus?: string;

  /**
   * @schema DescribeTypeOutput#LoggingConfig
   */
  readonly loggingConfig?: LoggingConfig;

  /**
   * @schema DescribeTypeOutput#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema DescribeTypeOutput#Visibility
   */
  readonly visibility?: string;

  /**
   * @schema DescribeTypeOutput#SourceUrl
   */
  readonly sourceUrl?: string;

  /**
   * @schema DescribeTypeOutput#DocumentationUrl
   */
  readonly documentationUrl?: string;

  /**
   * @schema DescribeTypeOutput#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema DescribeTypeOutput#TimeCreated
   */
  readonly timeCreated?: string;

}

/**
 * @schema DescribeTypeRegistrationInput
 */
export interface DescribeTypeRegistrationInput {
  /**
   * @schema DescribeTypeRegistrationInput#RegistrationToken
   */
  readonly registrationToken: string;

}

/**
 * @schema DescribeTypeRegistrationOutput
 */
export interface DescribeTypeRegistrationOutput {
  /**
   * @schema DescribeTypeRegistrationOutput#ProgressStatus
   */
  readonly progressStatus?: string;

  /**
   * @schema DescribeTypeRegistrationOutput#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeTypeRegistrationOutput#TypeArn
   */
  readonly typeArn?: string;

  /**
   * @schema DescribeTypeRegistrationOutput#TypeVersionArn
   */
  readonly typeVersionArn?: string;

}

/**
 * @schema DetectStackDriftInput
 */
export interface DetectStackDriftInput {
  /**
   * @schema DetectStackDriftInput#StackName
   */
  readonly stackName: string;

  /**
   * @schema DetectStackDriftInput#LogicalResourceIds
   */
  readonly logicalResourceIds?: string[];

}

/**
 * @schema DetectStackDriftOutput
 */
export interface DetectStackDriftOutput {
  /**
   * @schema DetectStackDriftOutput#StackDriftDetectionId
   */
  readonly stackDriftDetectionId: string;

}

/**
 * @schema DetectStackResourceDriftInput
 */
export interface DetectStackResourceDriftInput {
  /**
   * @schema DetectStackResourceDriftInput#StackName
   */
  readonly stackName: string;

  /**
   * @schema DetectStackResourceDriftInput#LogicalResourceId
   */
  readonly logicalResourceId: string;

}

/**
 * @schema DetectStackResourceDriftOutput
 */
export interface DetectStackResourceDriftOutput {
  /**
   * @schema DetectStackResourceDriftOutput#StackResourceDrift
   */
  readonly stackResourceDrift: StackResourceDrift;

}

/**
 * @schema DetectStackSetDriftInput
 */
export interface DetectStackSetDriftInput {
  /**
   * @schema DetectStackSetDriftInput#StackSetName
   */
  readonly stackSetName: string;

  /**
   * @schema DetectStackSetDriftInput#OperationPreferences
   */
  readonly operationPreferences?: StackSetOperationPreferences;

  /**
   * @schema DetectStackSetDriftInput#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema DetectStackSetDriftOutput
 */
export interface DetectStackSetDriftOutput {
  /**
   * @schema DetectStackSetDriftOutput#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema EstimateTemplateCostInput
 */
export interface EstimateTemplateCostInput {
  /**
   * @schema EstimateTemplateCostInput#TemplateBody
   */
  readonly templateBody?: string;

  /**
   * @schema EstimateTemplateCostInput#TemplateURL
   */
  readonly templateUrl?: string;

  /**
   * @schema EstimateTemplateCostInput#Parameters
   */
  readonly parameters?: Parameter[];

}

/**
 * @schema EstimateTemplateCostOutput
 */
export interface EstimateTemplateCostOutput {
  /**
   * @schema EstimateTemplateCostOutput#Url
   */
  readonly url?: string;

}

/**
 * @schema ExecuteChangeSetInput
 */
export interface ExecuteChangeSetInput {
  /**
   * @schema ExecuteChangeSetInput#ChangeSetName
   */
  readonly changeSetName: string;

  /**
   * @schema ExecuteChangeSetInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema ExecuteChangeSetInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema ExecuteChangeSetOutput
 */
export interface ExecuteChangeSetOutput {
}

/**
 * @schema GetStackPolicyInput
 */
export interface GetStackPolicyInput {
  /**
   * @schema GetStackPolicyInput#StackName
   */
  readonly stackName: string;

}

/**
 * @schema GetStackPolicyOutput
 */
export interface GetStackPolicyOutput {
  /**
   * @schema GetStackPolicyOutput#StackPolicyBody
   */
  readonly stackPolicyBody?: string;

}

/**
 * @schema GetTemplateInput
 */
export interface GetTemplateInput {
  /**
   * @schema GetTemplateInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema GetTemplateInput#ChangeSetName
   */
  readonly changeSetName?: string;

  /**
   * @schema GetTemplateInput#TemplateStage
   */
  readonly templateStage?: string;

}

/**
 * @schema GetTemplateOutput
 */
export interface GetTemplateOutput {
  /**
   * @schema GetTemplateOutput#TemplateBody
   */
  readonly templateBody?: string;

  /**
   * @schema GetTemplateOutput#StagesAvailable
   */
  readonly stagesAvailable?: string[];

}

/**
 * @schema GetTemplateSummaryInput
 */
export interface GetTemplateSummaryInput {
  /**
   * @schema GetTemplateSummaryInput#TemplateBody
   */
  readonly templateBody?: string;

  /**
   * @schema GetTemplateSummaryInput#TemplateURL
   */
  readonly templateUrl?: string;

  /**
   * @schema GetTemplateSummaryInput#StackName
   */
  readonly stackName?: string;

  /**
   * @schema GetTemplateSummaryInput#StackSetName
   */
  readonly stackSetName?: string;

}

/**
 * @schema GetTemplateSummaryOutput
 */
export interface GetTemplateSummaryOutput {
  /**
   * @schema GetTemplateSummaryOutput#Parameters
   */
  readonly parameters?: ParameterDeclaration[];

  /**
   * @schema GetTemplateSummaryOutput#Description
   */
  readonly description?: string;

  /**
   * @schema GetTemplateSummaryOutput#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema GetTemplateSummaryOutput#CapabilitiesReason
   */
  readonly capabilitiesReason?: string;

  /**
   * @schema GetTemplateSummaryOutput#ResourceTypes
   */
  readonly resourceTypes?: string[];

  /**
   * @schema GetTemplateSummaryOutput#Version
   */
  readonly version?: string;

  /**
   * @schema GetTemplateSummaryOutput#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema GetTemplateSummaryOutput#DeclaredTransforms
   */
  readonly declaredTransforms?: string[];

  /**
   * @schema GetTemplateSummaryOutput#ResourceIdentifierSummaries
   */
  readonly resourceIdentifierSummaries?: ResourceIdentifierSummary[];

}

/**
 * @schema ListChangeSetsInput
 */
export interface ListChangeSetsInput {
  /**
   * @schema ListChangeSetsInput#StackName
   */
  readonly stackName: string;

  /**
   * @schema ListChangeSetsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListChangeSetsOutput
 */
export interface ListChangeSetsOutput {
  /**
   * @schema ListChangeSetsOutput#Summaries
   */
  readonly summaries?: ChangeSetSummary[];

  /**
   * @schema ListChangeSetsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListExportsInput
 */
export interface ListExportsInput {
  /**
   * @schema ListExportsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListExportsOutput
 */
export interface ListExportsOutput {
  /**
   * @schema ListExportsOutput#Exports
   */
  readonly exports?: Export[];

  /**
   * @schema ListExportsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListImportsInput
 */
export interface ListImportsInput {
  /**
   * @schema ListImportsInput#ExportName
   */
  readonly exportName: string;

  /**
   * @schema ListImportsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListImportsOutput
 */
export interface ListImportsOutput {
  /**
   * @schema ListImportsOutput#Imports
   */
  readonly imports?: string[];

  /**
   * @schema ListImportsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListStackInstancesInput
 */
export interface ListStackInstancesInput {
  /**
   * @schema ListStackInstancesInput#StackSetName
   */
  readonly stackSetName: string;

  /**
   * @schema ListStackInstancesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListStackInstancesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListStackInstancesInput#Filters
   */
  readonly filters?: StackInstanceFilter[];

  /**
   * @schema ListStackInstancesInput#StackInstanceAccount
   */
  readonly stackInstanceAccount?: string;

  /**
   * @schema ListStackInstancesInput#StackInstanceRegion
   */
  readonly stackInstanceRegion?: string;

}

/**
 * @schema ListStackInstancesOutput
 */
export interface ListStackInstancesOutput {
  /**
   * @schema ListStackInstancesOutput#Summaries
   */
  readonly summaries?: StackInstanceSummary[];

  /**
   * @schema ListStackInstancesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListStackResourcesInput
 */
export interface ListStackResourcesInput {
  /**
   * @schema ListStackResourcesInput#StackName
   */
  readonly stackName: string;

  /**
   * @schema ListStackResourcesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListStackResourcesOutput
 */
export interface ListStackResourcesOutput {
  /**
   * @schema ListStackResourcesOutput#StackResourceSummaries
   */
  readonly stackResourceSummaries?: StackResourceSummary[];

  /**
   * @schema ListStackResourcesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListStackSetOperationResultsInput
 */
export interface ListStackSetOperationResultsInput {
  /**
   * @schema ListStackSetOperationResultsInput#StackSetName
   */
  readonly stackSetName: string;

  /**
   * @schema ListStackSetOperationResultsInput#OperationId
   */
  readonly operationId: string;

  /**
   * @schema ListStackSetOperationResultsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListStackSetOperationResultsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListStackSetOperationResultsOutput
 */
export interface ListStackSetOperationResultsOutput {
  /**
   * @schema ListStackSetOperationResultsOutput#Summaries
   */
  readonly summaries?: StackSetOperationResultSummary[];

  /**
   * @schema ListStackSetOperationResultsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListStackSetOperationsInput
 */
export interface ListStackSetOperationsInput {
  /**
   * @schema ListStackSetOperationsInput#StackSetName
   */
  readonly stackSetName: string;

  /**
   * @schema ListStackSetOperationsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListStackSetOperationsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListStackSetOperationsOutput
 */
export interface ListStackSetOperationsOutput {
  /**
   * @schema ListStackSetOperationsOutput#Summaries
   */
  readonly summaries?: StackSetOperationSummary[];

  /**
   * @schema ListStackSetOperationsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListStackSetsInput
 */
export interface ListStackSetsInput {
  /**
   * @schema ListStackSetsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListStackSetsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListStackSetsInput#Status
   */
  readonly status?: string;

}

/**
 * @schema ListStackSetsOutput
 */
export interface ListStackSetsOutput {
  /**
   * @schema ListStackSetsOutput#Summaries
   */
  readonly summaries?: StackSetSummary[];

  /**
   * @schema ListStackSetsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListStacksInput
 */
export interface ListStacksInput {
  /**
   * @schema ListStacksInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListStacksInput#StackStatusFilter
   */
  readonly stackStatusFilter?: string[];

}

/**
 * @schema ListStacksOutput
 */
export interface ListStacksOutput {
  /**
   * @schema ListStacksOutput#StackSummaries
   */
  readonly stackSummaries?: StackSummary[];

  /**
   * @schema ListStacksOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTypeRegistrationsInput
 */
export interface ListTypeRegistrationsInput {
  /**
   * @schema ListTypeRegistrationsInput#Type
   */
  readonly type?: string;

  /**
   * @schema ListTypeRegistrationsInput#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema ListTypeRegistrationsInput#TypeArn
   */
  readonly typeArn?: string;

  /**
   * @schema ListTypeRegistrationsInput#RegistrationStatusFilter
   */
  readonly registrationStatusFilter?: string;

  /**
   * @schema ListTypeRegistrationsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTypeRegistrationsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTypeRegistrationsOutput
 */
export interface ListTypeRegistrationsOutput {
  /**
   * @schema ListTypeRegistrationsOutput#RegistrationTokenList
   */
  readonly registrationTokenList?: string[];

  /**
   * @schema ListTypeRegistrationsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTypeVersionsInput
 */
export interface ListTypeVersionsInput {
  /**
   * @schema ListTypeVersionsInput#Type
   */
  readonly type?: string;

  /**
   * @schema ListTypeVersionsInput#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema ListTypeVersionsInput#Arn
   */
  readonly arn?: string;

  /**
   * @schema ListTypeVersionsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTypeVersionsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTypeVersionsInput#DeprecatedStatus
   */
  readonly deprecatedStatus?: string;

}

/**
 * @schema ListTypeVersionsOutput
 */
export interface ListTypeVersionsOutput {
  /**
   * @schema ListTypeVersionsOutput#TypeVersionSummaries
   */
  readonly typeVersionSummaries?: TypeVersionSummary[];

  /**
   * @schema ListTypeVersionsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTypesInput
 */
export interface ListTypesInput {
  /**
   * @schema ListTypesInput#Visibility
   */
  readonly visibility?: string;

  /**
   * @schema ListTypesInput#ProvisioningType
   */
  readonly provisioningType?: string;

  /**
   * @schema ListTypesInput#DeprecatedStatus
   */
  readonly deprecatedStatus?: string;

  /**
   * @schema ListTypesInput#Type
   */
  readonly type?: string;

  /**
   * @schema ListTypesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTypesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTypesOutput
 */
export interface ListTypesOutput {
  /**
   * @schema ListTypesOutput#TypeSummaries
   */
  readonly typeSummaries?: TypeSummary[];

  /**
   * @schema ListTypesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RecordHandlerProgressInput
 */
export interface RecordHandlerProgressInput {
  /**
   * @schema RecordHandlerProgressInput#BearerToken
   */
  readonly bearerToken: string;

  /**
   * @schema RecordHandlerProgressInput#OperationStatus
   */
  readonly operationStatus: string;

  /**
   * @schema RecordHandlerProgressInput#CurrentOperationStatus
   */
  readonly currentOperationStatus?: string;

  /**
   * @schema RecordHandlerProgressInput#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RecordHandlerProgressInput#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema RecordHandlerProgressInput#ResourceModel
   */
  readonly resourceModel?: string;

  /**
   * @schema RecordHandlerProgressInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema RecordHandlerProgressOutput
 */
export interface RecordHandlerProgressOutput {
}

/**
 * @schema RegisterTypeInput
 */
export interface RegisterTypeInput {
  /**
   * @schema RegisterTypeInput#Type
   */
  readonly type?: string;

  /**
   * @schema RegisterTypeInput#TypeName
   */
  readonly typeName: string;

  /**
   * @schema RegisterTypeInput#SchemaHandlerPackage
   */
  readonly schemaHandlerPackage: string;

  /**
   * @schema RegisterTypeInput#LoggingConfig
   */
  readonly loggingConfig?: LoggingConfig;

  /**
   * @schema RegisterTypeInput#ExecutionRoleArn
   */
  readonly executionRoleArn?: string;

  /**
   * @schema RegisterTypeInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema RegisterTypeOutput
 */
export interface RegisterTypeOutput {
  /**
   * @schema RegisterTypeOutput#RegistrationToken
   */
  readonly registrationToken?: string;

}

/**
 * @schema SetStackPolicyInput
 */
export interface SetStackPolicyInput {
  /**
   * @schema SetStackPolicyInput#StackName
   */
  readonly stackName: string;

  /**
   * @schema SetStackPolicyInput#StackPolicyBody
   */
  readonly stackPolicyBody?: string;

  /**
   * @schema SetStackPolicyInput#StackPolicyURL
   */
  readonly stackPolicyUrl?: string;

}

/**
 * @schema SetTypeDefaultVersionInput
 */
export interface SetTypeDefaultVersionInput {
  /**
   * @schema SetTypeDefaultVersionInput#Arn
   */
  readonly arn?: string;

  /**
   * @schema SetTypeDefaultVersionInput#Type
   */
  readonly type?: string;

  /**
   * @schema SetTypeDefaultVersionInput#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema SetTypeDefaultVersionInput#VersionId
   */
  readonly versionId?: string;

}

/**
 * @schema SetTypeDefaultVersionOutput
 */
export interface SetTypeDefaultVersionOutput {
}

/**
 * @schema SignalResourceInput
 */
export interface SignalResourceInput {
  /**
   * @schema SignalResourceInput#StackName
   */
  readonly stackName: string;

  /**
   * @schema SignalResourceInput#LogicalResourceId
   */
  readonly logicalResourceId: string;

  /**
   * @schema SignalResourceInput#UniqueId
   */
  readonly uniqueId: string;

  /**
   * @schema SignalResourceInput#Status
   */
  readonly status: string;

}

/**
 * @schema StopStackSetOperationInput
 */
export interface StopStackSetOperationInput {
  /**
   * @schema StopStackSetOperationInput#StackSetName
   */
  readonly stackSetName: string;

  /**
   * @schema StopStackSetOperationInput#OperationId
   */
  readonly operationId: string;

}

/**
 * @schema StopStackSetOperationOutput
 */
export interface StopStackSetOperationOutput {
}

/**
 * @schema UpdateStackInput
 */
export interface UpdateStackInput {
  /**
   * @schema UpdateStackInput#StackName
   */
  readonly stackName: string;

  /**
   * @schema UpdateStackInput#TemplateBody
   */
  readonly templateBody?: string;

  /**
   * @schema UpdateStackInput#TemplateURL
   */
  readonly templateUrl?: string;

  /**
   * @schema UpdateStackInput#UsePreviousTemplate
   */
  readonly usePreviousTemplate?: boolean;

  /**
   * @schema UpdateStackInput#StackPolicyDuringUpdateBody
   */
  readonly stackPolicyDuringUpdateBody?: string;

  /**
   * @schema UpdateStackInput#StackPolicyDuringUpdateURL
   */
  readonly stackPolicyDuringUpdateUrl?: string;

  /**
   * @schema UpdateStackInput#Parameters
   */
  readonly parameters?: Parameter[];

  /**
   * @schema UpdateStackInput#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema UpdateStackInput#ResourceTypes
   */
  readonly resourceTypes?: string[];

  /**
   * @schema UpdateStackInput#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema UpdateStackInput#RollbackConfiguration
   */
  readonly rollbackConfiguration?: RollbackConfiguration;

  /**
   * @schema UpdateStackInput#StackPolicyBody
   */
  readonly stackPolicyBody?: string;

  /**
   * @schema UpdateStackInput#StackPolicyURL
   */
  readonly stackPolicyUrl?: string;

  /**
   * @schema UpdateStackInput#NotificationARNs
   */
  readonly notificationArNs?: string[];

  /**
   * @schema UpdateStackInput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema UpdateStackInput#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema UpdateStackOutput
 */
export interface UpdateStackOutput {
  /**
   * @schema UpdateStackOutput#StackId
   */
  readonly stackId?: string;

}

/**
 * @schema UpdateStackInstancesInput
 */
export interface UpdateStackInstancesInput {
  /**
   * @schema UpdateStackInstancesInput#StackSetName
   */
  readonly stackSetName: string;

  /**
   * @schema UpdateStackInstancesInput#Accounts
   */
  readonly accounts?: string[];

  /**
   * @schema UpdateStackInstancesInput#DeploymentTargets
   */
  readonly deploymentTargets?: DeploymentTargets;

  /**
   * @schema UpdateStackInstancesInput#Regions
   */
  readonly regions: string[];

  /**
   * @schema UpdateStackInstancesInput#ParameterOverrides
   */
  readonly parameterOverrides?: Parameter[];

  /**
   * @schema UpdateStackInstancesInput#OperationPreferences
   */
  readonly operationPreferences?: StackSetOperationPreferences;

  /**
   * @schema UpdateStackInstancesInput#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema UpdateStackInstancesOutput
 */
export interface UpdateStackInstancesOutput {
  /**
   * @schema UpdateStackInstancesOutput#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema UpdateStackSetInput
 */
export interface UpdateStackSetInput {
  /**
   * @schema UpdateStackSetInput#StackSetName
   */
  readonly stackSetName: string;

  /**
   * @schema UpdateStackSetInput#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateStackSetInput#TemplateBody
   */
  readonly templateBody?: string;

  /**
   * @schema UpdateStackSetInput#TemplateURL
   */
  readonly templateUrl?: string;

  /**
   * @schema UpdateStackSetInput#UsePreviousTemplate
   */
  readonly usePreviousTemplate?: boolean;

  /**
   * @schema UpdateStackSetInput#Parameters
   */
  readonly parameters?: Parameter[];

  /**
   * @schema UpdateStackSetInput#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema UpdateStackSetInput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema UpdateStackSetInput#OperationPreferences
   */
  readonly operationPreferences?: StackSetOperationPreferences;

  /**
   * @schema UpdateStackSetInput#AdministrationRoleARN
   */
  readonly administrationRoleArn?: string;

  /**
   * @schema UpdateStackSetInput#ExecutionRoleName
   */
  readonly executionRoleName?: string;

  /**
   * @schema UpdateStackSetInput#DeploymentTargets
   */
  readonly deploymentTargets?: DeploymentTargets;

  /**
   * @schema UpdateStackSetInput#PermissionModel
   */
  readonly permissionModel?: string;

  /**
   * @schema UpdateStackSetInput#AutoDeployment
   */
  readonly autoDeployment?: AutoDeployment;

  /**
   * @schema UpdateStackSetInput#OperationId
   */
  readonly operationId?: string;

  /**
   * @schema UpdateStackSetInput#Accounts
   */
  readonly accounts?: string[];

  /**
   * @schema UpdateStackSetInput#Regions
   */
  readonly regions?: string[];

}

/**
 * @schema UpdateStackSetOutput
 */
export interface UpdateStackSetOutput {
  /**
   * @schema UpdateStackSetOutput#OperationId
   */
  readonly operationId?: string;

}

/**
 * @schema UpdateTerminationProtectionInput
 */
export interface UpdateTerminationProtectionInput {
  /**
   * @schema UpdateTerminationProtectionInput#EnableTerminationProtection
   */
  readonly enableTerminationProtection: boolean;

  /**
   * @schema UpdateTerminationProtectionInput#StackName
   */
  readonly stackName: string;

}

/**
 * @schema UpdateTerminationProtectionOutput
 */
export interface UpdateTerminationProtectionOutput {
  /**
   * @schema UpdateTerminationProtectionOutput#StackId
   */
  readonly stackId?: string;

}

/**
 * @schema ValidateTemplateInput
 */
export interface ValidateTemplateInput {
  /**
   * @schema ValidateTemplateInput#TemplateBody
   */
  readonly templateBody?: string;

  /**
   * @schema ValidateTemplateInput#TemplateURL
   */
  readonly templateUrl?: string;

}

/**
 * @schema ValidateTemplateOutput
 */
export interface ValidateTemplateOutput {
  /**
   * @schema ValidateTemplateOutput#Parameters
   */
  readonly parameters?: TemplateParameter[];

  /**
   * @schema ValidateTemplateOutput#Description
   */
  readonly description?: string;

  /**
   * @schema ValidateTemplateOutput#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema ValidateTemplateOutput#CapabilitiesReason
   */
  readonly capabilitiesReason?: string;

  /**
   * @schema ValidateTemplateOutput#DeclaredTransforms
   */
  readonly declaredTransforms?: string[];

}

/**
 * @schema Parameter
 */
export interface Parameter {
  /**
   * @schema Parameter#ParameterKey
   */
  readonly parameterKey?: string;

  /**
   * @schema Parameter#ParameterValue
   */
  readonly parameterValue?: string;

  /**
   * @schema Parameter#UsePreviousValue
   */
  readonly usePreviousValue?: boolean;

  /**
   * @schema Parameter#ResolvedValue
   */
  readonly resolvedValue?: string;

}

/**
 * @schema RollbackConfiguration
 */
export interface RollbackConfiguration {
  /**
   * @schema RollbackConfiguration#RollbackTriggers
   */
  readonly rollbackTriggers?: RollbackTrigger[];

  /**
   * @schema RollbackConfiguration#MonitoringTimeInMinutes
   */
  readonly monitoringTimeInMinutes?: number;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key: string;

  /**
   * @schema Tag#Value
   */
  readonly value: string;

}

/**
 * @schema ResourceToImport
 */
export interface ResourceToImport {
  /**
   * @schema ResourceToImport#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema ResourceToImport#LogicalResourceId
   */
  readonly logicalResourceId: string;

  /**
   * @schema ResourceToImport#ResourceIdentifier
   */
  readonly resourceIdentifier: { [key: string]: string };

}

/**
 * @schema DeploymentTargets
 */
export interface DeploymentTargets {
  /**
   * @schema DeploymentTargets#Accounts
   */
  readonly accounts?: string[];

  /**
   * @schema DeploymentTargets#OrganizationalUnitIds
   */
  readonly organizationalUnitIds?: string[];

}

/**
 * @schema StackSetOperationPreferences
 */
export interface StackSetOperationPreferences {
  /**
   * @schema StackSetOperationPreferences#RegionOrder
   */
  readonly regionOrder?: string[];

  /**
   * @schema StackSetOperationPreferences#FailureToleranceCount
   */
  readonly failureToleranceCount?: number;

  /**
   * @schema StackSetOperationPreferences#FailureTolerancePercentage
   */
  readonly failureTolerancePercentage?: number;

  /**
   * @schema StackSetOperationPreferences#MaxConcurrentCount
   */
  readonly maxConcurrentCount?: number;

  /**
   * @schema StackSetOperationPreferences#MaxConcurrentPercentage
   */
  readonly maxConcurrentPercentage?: number;

}

/**
 * @schema AutoDeployment
 */
export interface AutoDeployment {
  /**
   * @schema AutoDeployment#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema AutoDeployment#RetainStacksOnAccountRemoval
   */
  readonly retainStacksOnAccountRemoval?: boolean;

}

/**
 * @schema AccountLimit
 */
export interface AccountLimit {
  /**
   * @schema AccountLimit#Name
   */
  readonly name?: string;

  /**
   * @schema AccountLimit#Value
   */
  readonly value?: number;

}

/**
 * @schema Change
 */
export interface Change {
  /**
   * @schema Change#Type
   */
  readonly type?: string;

  /**
   * @schema Change#ResourceChange
   */
  readonly resourceChange?: ResourceChange;

}

/**
 * @schema StackEvent
 */
export interface StackEvent {
  /**
   * @schema StackEvent#StackId
   */
  readonly stackId: string;

  /**
   * @schema StackEvent#EventId
   */
  readonly eventId: string;

  /**
   * @schema StackEvent#StackName
   */
  readonly stackName: string;

  /**
   * @schema StackEvent#LogicalResourceId
   */
  readonly logicalResourceId?: string;

  /**
   * @schema StackEvent#PhysicalResourceId
   */
  readonly physicalResourceId?: string;

  /**
   * @schema StackEvent#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema StackEvent#Timestamp
   */
  readonly timestamp: string;

  /**
   * @schema StackEvent#ResourceStatus
   */
  readonly resourceStatus?: string;

  /**
   * @schema StackEvent#ResourceStatusReason
   */
  readonly resourceStatusReason?: string;

  /**
   * @schema StackEvent#ResourceProperties
   */
  readonly resourceProperties?: string;

  /**
   * @schema StackEvent#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema StackInstance
 */
export interface StackInstance {
  /**
   * @schema StackInstance#StackSetId
   */
  readonly stackSetId?: string;

  /**
   * @schema StackInstance#Region
   */
  readonly region?: string;

  /**
   * @schema StackInstance#Account
   */
  readonly account?: string;

  /**
   * @schema StackInstance#StackId
   */
  readonly stackId?: string;

  /**
   * @schema StackInstance#ParameterOverrides
   */
  readonly parameterOverrides?: Parameter[];

  /**
   * @schema StackInstance#Status
   */
  readonly status?: string;

  /**
   * @schema StackInstance#StackInstanceStatus
   */
  readonly stackInstanceStatus?: StackInstanceComprehensiveStatus;

  /**
   * @schema StackInstance#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema StackInstance#OrganizationalUnitId
   */
  readonly organizationalUnitId?: string;

  /**
   * @schema StackInstance#DriftStatus
   */
  readonly driftStatus?: string;

  /**
   * @schema StackInstance#LastDriftCheckTimestamp
   */
  readonly lastDriftCheckTimestamp?: string;

}

/**
 * @schema StackResourceDetail
 */
export interface StackResourceDetail {
  /**
   * @schema StackResourceDetail#StackName
   */
  readonly stackName?: string;

  /**
   * @schema StackResourceDetail#StackId
   */
  readonly stackId?: string;

  /**
   * @schema StackResourceDetail#LogicalResourceId
   */
  readonly logicalResourceId: string;

  /**
   * @schema StackResourceDetail#PhysicalResourceId
   */
  readonly physicalResourceId?: string;

  /**
   * @schema StackResourceDetail#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema StackResourceDetail#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp: string;

  /**
   * @schema StackResourceDetail#ResourceStatus
   */
  readonly resourceStatus: string;

  /**
   * @schema StackResourceDetail#ResourceStatusReason
   */
  readonly resourceStatusReason?: string;

  /**
   * @schema StackResourceDetail#Description
   */
  readonly description?: string;

  /**
   * @schema StackResourceDetail#Metadata
   */
  readonly metadata?: string;

  /**
   * @schema StackResourceDetail#DriftInformation
   */
  readonly driftInformation?: StackResourceDriftInformation;

  /**
   * @schema StackResourceDetail#ModuleInfo
   */
  readonly moduleInfo?: ModuleInfo;

}

/**
 * @schema StackResourceDrift
 */
export interface StackResourceDrift {
  /**
   * @schema StackResourceDrift#StackId
   */
  readonly stackId: string;

  /**
   * @schema StackResourceDrift#LogicalResourceId
   */
  readonly logicalResourceId: string;

  /**
   * @schema StackResourceDrift#PhysicalResourceId
   */
  readonly physicalResourceId?: string;

  /**
   * @schema StackResourceDrift#PhysicalResourceIdContext
   */
  readonly physicalResourceIdContext?: PhysicalResourceIdContextKeyValuePair[];

  /**
   * @schema StackResourceDrift#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema StackResourceDrift#ExpectedProperties
   */
  readonly expectedProperties?: string;

  /**
   * @schema StackResourceDrift#ActualProperties
   */
  readonly actualProperties?: string;

  /**
   * @schema StackResourceDrift#PropertyDifferences
   */
  readonly propertyDifferences?: PropertyDifference[];

  /**
   * @schema StackResourceDrift#StackResourceDriftStatus
   */
  readonly stackResourceDriftStatus: string;

  /**
   * @schema StackResourceDrift#Timestamp
   */
  readonly timestamp: string;

  /**
   * @schema StackResourceDrift#ModuleInfo
   */
  readonly moduleInfo?: ModuleInfo;

}

/**
 * @schema StackResource
 */
export interface StackResource {
  /**
   * @schema StackResource#StackName
   */
  readonly stackName?: string;

  /**
   * @schema StackResource#StackId
   */
  readonly stackId?: string;

  /**
   * @schema StackResource#LogicalResourceId
   */
  readonly logicalResourceId: string;

  /**
   * @schema StackResource#PhysicalResourceId
   */
  readonly physicalResourceId?: string;

  /**
   * @schema StackResource#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema StackResource#Timestamp
   */
  readonly timestamp: string;

  /**
   * @schema StackResource#ResourceStatus
   */
  readonly resourceStatus: string;

  /**
   * @schema StackResource#ResourceStatusReason
   */
  readonly resourceStatusReason?: string;

  /**
   * @schema StackResource#Description
   */
  readonly description?: string;

  /**
   * @schema StackResource#DriftInformation
   */
  readonly driftInformation?: StackResourceDriftInformation;

  /**
   * @schema StackResource#ModuleInfo
   */
  readonly moduleInfo?: ModuleInfo;

}

/**
 * @schema StackSet
 */
export interface StackSet {
  /**
   * @schema StackSet#StackSetName
   */
  readonly stackSetName?: string;

  /**
   * @schema StackSet#StackSetId
   */
  readonly stackSetId?: string;

  /**
   * @schema StackSet#Description
   */
  readonly description?: string;

  /**
   * @schema StackSet#Status
   */
  readonly status?: string;

  /**
   * @schema StackSet#TemplateBody
   */
  readonly templateBody?: string;

  /**
   * @schema StackSet#Parameters
   */
  readonly parameters?: Parameter[];

  /**
   * @schema StackSet#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema StackSet#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema StackSet#StackSetARN
   */
  readonly stackSetArn?: string;

  /**
   * @schema StackSet#AdministrationRoleARN
   */
  readonly administrationRoleArn?: string;

  /**
   * @schema StackSet#ExecutionRoleName
   */
  readonly executionRoleName?: string;

  /**
   * @schema StackSet#StackSetDriftDetectionDetails
   */
  readonly stackSetDriftDetectionDetails?: StackSetDriftDetectionDetails;

  /**
   * @schema StackSet#AutoDeployment
   */
  readonly autoDeployment?: AutoDeployment;

  /**
   * @schema StackSet#PermissionModel
   */
  readonly permissionModel?: string;

  /**
   * @schema StackSet#OrganizationalUnitIds
   */
  readonly organizationalUnitIds?: string[];

}

/**
 * @schema StackSetOperation
 */
export interface StackSetOperation {
  /**
   * @schema StackSetOperation#OperationId
   */
  readonly operationId?: string;

  /**
   * @schema StackSetOperation#StackSetId
   */
  readonly stackSetId?: string;

  /**
   * @schema StackSetOperation#Action
   */
  readonly action?: string;

  /**
   * @schema StackSetOperation#Status
   */
  readonly status?: string;

  /**
   * @schema StackSetOperation#OperationPreferences
   */
  readonly operationPreferences?: StackSetOperationPreferences;

  /**
   * @schema StackSetOperation#RetainStacks
   */
  readonly retainStacks?: boolean;

  /**
   * @schema StackSetOperation#AdministrationRoleARN
   */
  readonly administrationRoleArn?: string;

  /**
   * @schema StackSetOperation#ExecutionRoleName
   */
  readonly executionRoleName?: string;

  /**
   * @schema StackSetOperation#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema StackSetOperation#EndTimestamp
   */
  readonly endTimestamp?: string;

  /**
   * @schema StackSetOperation#DeploymentTargets
   */
  readonly deploymentTargets?: DeploymentTargets;

  /**
   * @schema StackSetOperation#StackSetDriftDetectionDetails
   */
  readonly stackSetDriftDetectionDetails?: StackSetDriftDetectionDetails;

}

/**
 * @schema Stack
 */
export interface Stack {
  /**
   * @schema Stack#StackId
   */
  readonly stackId?: string;

  /**
   * @schema Stack#StackName
   */
  readonly stackName: string;

  /**
   * @schema Stack#ChangeSetId
   */
  readonly changeSetId?: string;

  /**
   * @schema Stack#Description
   */
  readonly description?: string;

  /**
   * @schema Stack#Parameters
   */
  readonly parameters?: Parameter[];

  /**
   * @schema Stack#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema Stack#DeletionTime
   */
  readonly deletionTime?: string;

  /**
   * @schema Stack#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema Stack#RollbackConfiguration
   */
  readonly rollbackConfiguration?: RollbackConfiguration;

  /**
   * @schema Stack#StackStatus
   */
  readonly stackStatus: string;

  /**
   * @schema Stack#StackStatusReason
   */
  readonly stackStatusReason?: string;

  /**
   * @schema Stack#DisableRollback
   */
  readonly disableRollback?: boolean;

  /**
   * @schema Stack#NotificationARNs
   */
  readonly notificationArNs?: string[];

  /**
   * @schema Stack#TimeoutInMinutes
   */
  readonly timeoutInMinutes?: number;

  /**
   * @schema Stack#Capabilities
   */
  readonly capabilities?: string[];

  /**
   * @schema Stack#Outputs
   */
  readonly outputs?: Output[];

  /**
   * @schema Stack#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema Stack#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Stack#EnableTerminationProtection
   */
  readonly enableTerminationProtection?: boolean;

  /**
   * @schema Stack#ParentId
   */
  readonly parentId?: string;

  /**
   * @schema Stack#RootId
   */
  readonly rootId?: string;

  /**
   * @schema Stack#DriftInformation
   */
  readonly driftInformation?: StackDriftInformation;

}

/**
 * @schema LoggingConfig
 */
export interface LoggingConfig {
  /**
   * @schema LoggingConfig#LogRoleArn
   */
  readonly logRoleArn: string;

  /**
   * @schema LoggingConfig#LogGroupName
   */
  readonly logGroupName: string;

}

/**
 * @schema ParameterDeclaration
 */
export interface ParameterDeclaration {
  /**
   * @schema ParameterDeclaration#ParameterKey
   */
  readonly parameterKey?: string;

  /**
   * @schema ParameterDeclaration#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema ParameterDeclaration#ParameterType
   */
  readonly parameterType?: string;

  /**
   * @schema ParameterDeclaration#NoEcho
   */
  readonly noEcho?: boolean;

  /**
   * @schema ParameterDeclaration#Description
   */
  readonly description?: string;

  /**
   * @schema ParameterDeclaration#ParameterConstraints
   */
  readonly parameterConstraints?: ParameterConstraints;

}

/**
 * @schema ResourceIdentifierSummary
 */
export interface ResourceIdentifierSummary {
  /**
   * @schema ResourceIdentifierSummary#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ResourceIdentifierSummary#LogicalResourceIds
   */
  readonly logicalResourceIds?: string[];

  /**
   * @schema ResourceIdentifierSummary#ResourceIdentifiers
   */
  readonly resourceIdentifiers?: string[];

}

/**
 * @schema ChangeSetSummary
 */
export interface ChangeSetSummary {
  /**
   * @schema ChangeSetSummary#StackId
   */
  readonly stackId?: string;

  /**
   * @schema ChangeSetSummary#StackName
   */
  readonly stackName?: string;

  /**
   * @schema ChangeSetSummary#ChangeSetId
   */
  readonly changeSetId?: string;

  /**
   * @schema ChangeSetSummary#ChangeSetName
   */
  readonly changeSetName?: string;

  /**
   * @schema ChangeSetSummary#ExecutionStatus
   */
  readonly executionStatus?: string;

  /**
   * @schema ChangeSetSummary#Status
   */
  readonly status?: string;

  /**
   * @schema ChangeSetSummary#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema ChangeSetSummary#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ChangeSetSummary#Description
   */
  readonly description?: string;

  /**
   * @schema ChangeSetSummary#IncludeNestedStacks
   */
  readonly includeNestedStacks?: boolean;

  /**
   * @schema ChangeSetSummary#ParentChangeSetId
   */
  readonly parentChangeSetId?: string;

  /**
   * @schema ChangeSetSummary#RootChangeSetId
   */
  readonly rootChangeSetId?: string;

}

/**
 * @schema Export
 */
export interface Export {
  /**
   * @schema Export#ExportingStackId
   */
  readonly exportingStackId?: string;

  /**
   * @schema Export#Name
   */
  readonly name?: string;

  /**
   * @schema Export#Value
   */
  readonly value?: string;

}

/**
 * @schema StackInstanceFilter
 */
export interface StackInstanceFilter {
  /**
   * @schema StackInstanceFilter#Name
   */
  readonly name?: string;

  /**
   * @schema StackInstanceFilter#Values
   */
  readonly values?: string;

}

/**
 * @schema StackInstanceSummary
 */
export interface StackInstanceSummary {
  /**
   * @schema StackInstanceSummary#StackSetId
   */
  readonly stackSetId?: string;

  /**
   * @schema StackInstanceSummary#Region
   */
  readonly region?: string;

  /**
   * @schema StackInstanceSummary#Account
   */
  readonly account?: string;

  /**
   * @schema StackInstanceSummary#StackId
   */
  readonly stackId?: string;

  /**
   * @schema StackInstanceSummary#Status
   */
  readonly status?: string;

  /**
   * @schema StackInstanceSummary#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema StackInstanceSummary#StackInstanceStatus
   */
  readonly stackInstanceStatus?: StackInstanceComprehensiveStatus;

  /**
   * @schema StackInstanceSummary#OrganizationalUnitId
   */
  readonly organizationalUnitId?: string;

  /**
   * @schema StackInstanceSummary#DriftStatus
   */
  readonly driftStatus?: string;

  /**
   * @schema StackInstanceSummary#LastDriftCheckTimestamp
   */
  readonly lastDriftCheckTimestamp?: string;

}

/**
 * @schema StackResourceSummary
 */
export interface StackResourceSummary {
  /**
   * @schema StackResourceSummary#LogicalResourceId
   */
  readonly logicalResourceId: string;

  /**
   * @schema StackResourceSummary#PhysicalResourceId
   */
  readonly physicalResourceId?: string;

  /**
   * @schema StackResourceSummary#ResourceType
   */
  readonly resourceType: string;

  /**
   * @schema StackResourceSummary#LastUpdatedTimestamp
   */
  readonly lastUpdatedTimestamp: string;

  /**
   * @schema StackResourceSummary#ResourceStatus
   */
  readonly resourceStatus: string;

  /**
   * @schema StackResourceSummary#ResourceStatusReason
   */
  readonly resourceStatusReason?: string;

  /**
   * @schema StackResourceSummary#DriftInformation
   */
  readonly driftInformation?: StackResourceDriftInformationSummary;

  /**
   * @schema StackResourceSummary#ModuleInfo
   */
  readonly moduleInfo?: ModuleInfo;

}

/**
 * @schema StackSetOperationResultSummary
 */
export interface StackSetOperationResultSummary {
  /**
   * @schema StackSetOperationResultSummary#Account
   */
  readonly account?: string;

  /**
   * @schema StackSetOperationResultSummary#Region
   */
  readonly region?: string;

  /**
   * @schema StackSetOperationResultSummary#Status
   */
  readonly status?: string;

  /**
   * @schema StackSetOperationResultSummary#StatusReason
   */
  readonly statusReason?: string;

  /**
   * @schema StackSetOperationResultSummary#AccountGateResult
   */
  readonly accountGateResult?: AccountGateResult;

  /**
   * @schema StackSetOperationResultSummary#OrganizationalUnitId
   */
  readonly organizationalUnitId?: string;

}

/**
 * @schema StackSetOperationSummary
 */
export interface StackSetOperationSummary {
  /**
   * @schema StackSetOperationSummary#OperationId
   */
  readonly operationId?: string;

  /**
   * @schema StackSetOperationSummary#Action
   */
  readonly action?: string;

  /**
   * @schema StackSetOperationSummary#Status
   */
  readonly status?: string;

  /**
   * @schema StackSetOperationSummary#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema StackSetOperationSummary#EndTimestamp
   */
  readonly endTimestamp?: string;

}

/**
 * @schema StackSetSummary
 */
export interface StackSetSummary {
  /**
   * @schema StackSetSummary#StackSetName
   */
  readonly stackSetName?: string;

  /**
   * @schema StackSetSummary#StackSetId
   */
  readonly stackSetId?: string;

  /**
   * @schema StackSetSummary#Description
   */
  readonly description?: string;

  /**
   * @schema StackSetSummary#Status
   */
  readonly status?: string;

  /**
   * @schema StackSetSummary#AutoDeployment
   */
  readonly autoDeployment?: AutoDeployment;

  /**
   * @schema StackSetSummary#PermissionModel
   */
  readonly permissionModel?: string;

  /**
   * @schema StackSetSummary#DriftStatus
   */
  readonly driftStatus?: string;

  /**
   * @schema StackSetSummary#LastDriftCheckTimestamp
   */
  readonly lastDriftCheckTimestamp?: string;

}

/**
 * @schema StackSummary
 */
export interface StackSummary {
  /**
   * @schema StackSummary#StackId
   */
  readonly stackId?: string;

  /**
   * @schema StackSummary#StackName
   */
  readonly stackName: string;

  /**
   * @schema StackSummary#TemplateDescription
   */
  readonly templateDescription?: string;

  /**
   * @schema StackSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema StackSummary#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema StackSummary#DeletionTime
   */
  readonly deletionTime?: string;

  /**
   * @schema StackSummary#StackStatus
   */
  readonly stackStatus: string;

  /**
   * @schema StackSummary#StackStatusReason
   */
  readonly stackStatusReason?: string;

  /**
   * @schema StackSummary#ParentId
   */
  readonly parentId?: string;

  /**
   * @schema StackSummary#RootId
   */
  readonly rootId?: string;

  /**
   * @schema StackSummary#DriftInformation
   */
  readonly driftInformation?: StackDriftInformationSummary;

}

/**
 * @schema TypeVersionSummary
 */
export interface TypeVersionSummary {
  /**
   * @schema TypeVersionSummary#Type
   */
  readonly type?: string;

  /**
   * @schema TypeVersionSummary#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema TypeVersionSummary#VersionId
   */
  readonly versionId?: string;

  /**
   * @schema TypeVersionSummary#IsDefaultVersion
   */
  readonly isDefaultVersion?: boolean;

  /**
   * @schema TypeVersionSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema TypeVersionSummary#TimeCreated
   */
  readonly timeCreated?: string;

  /**
   * @schema TypeVersionSummary#Description
   */
  readonly description?: string;

}

/**
 * @schema TypeSummary
 */
export interface TypeSummary {
  /**
   * @schema TypeSummary#Type
   */
  readonly type?: string;

  /**
   * @schema TypeSummary#TypeName
   */
  readonly typeName?: string;

  /**
   * @schema TypeSummary#DefaultVersionId
   */
  readonly defaultVersionId?: string;

  /**
   * @schema TypeSummary#TypeArn
   */
  readonly typeArn?: string;

  /**
   * @schema TypeSummary#LastUpdated
   */
  readonly lastUpdated?: string;

  /**
   * @schema TypeSummary#Description
   */
  readonly description?: string;

}

/**
 * @schema TemplateParameter
 */
export interface TemplateParameter {
  /**
   * @schema TemplateParameter#ParameterKey
   */
  readonly parameterKey?: string;

  /**
   * @schema TemplateParameter#DefaultValue
   */
  readonly defaultValue?: string;

  /**
   * @schema TemplateParameter#NoEcho
   */
  readonly noEcho?: boolean;

  /**
   * @schema TemplateParameter#Description
   */
  readonly description?: string;

}

/**
 * @schema RollbackTrigger
 */
export interface RollbackTrigger {
  /**
   * @schema RollbackTrigger#Arn
   */
  readonly arn: string;

  /**
   * @schema RollbackTrigger#Type
   */
  readonly type: string;

}

/**
 * @schema ResourceChange
 */
export interface ResourceChange {
  /**
   * @schema ResourceChange#Action
   */
  readonly action?: string;

  /**
   * @schema ResourceChange#LogicalResourceId
   */
  readonly logicalResourceId?: string;

  /**
   * @schema ResourceChange#PhysicalResourceId
   */
  readonly physicalResourceId?: string;

  /**
   * @schema ResourceChange#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema ResourceChange#Replacement
   */
  readonly replacement?: string;

  /**
   * @schema ResourceChange#Scope
   */
  readonly scope?: string[];

  /**
   * @schema ResourceChange#Details
   */
  readonly details?: ResourceChangeDetail[];

  /**
   * @schema ResourceChange#ChangeSetId
   */
  readonly changeSetId?: string;

  /**
   * @schema ResourceChange#ModuleInfo
   */
  readonly moduleInfo?: ModuleInfo;

}

/**
 * @schema StackInstanceComprehensiveStatus
 */
export interface StackInstanceComprehensiveStatus {
  /**
   * @schema StackInstanceComprehensiveStatus#DetailedStatus
   */
  readonly detailedStatus?: string;

}

/**
 * @schema StackResourceDriftInformation
 */
export interface StackResourceDriftInformation {
  /**
   * @schema StackResourceDriftInformation#StackResourceDriftStatus
   */
  readonly stackResourceDriftStatus: string;

  /**
   * @schema StackResourceDriftInformation#LastCheckTimestamp
   */
  readonly lastCheckTimestamp?: string;

}

/**
 * @schema ModuleInfo
 */
export interface ModuleInfo {
  /**
   * @schema ModuleInfo#TypeHierarchy
   */
  readonly typeHierarchy?: string;

  /**
   * @schema ModuleInfo#LogicalIdHierarchy
   */
  readonly logicalIdHierarchy?: string;

}

/**
 * @schema PhysicalResourceIdContextKeyValuePair
 */
export interface PhysicalResourceIdContextKeyValuePair {
  /**
   * @schema PhysicalResourceIdContextKeyValuePair#Key
   */
  readonly key: string;

  /**
   * @schema PhysicalResourceIdContextKeyValuePair#Value
   */
  readonly value: string;

}

/**
 * @schema PropertyDifference
 */
export interface PropertyDifference {
  /**
   * @schema PropertyDifference#PropertyPath
   */
  readonly propertyPath: string;

  /**
   * @schema PropertyDifference#ExpectedValue
   */
  readonly expectedValue: string;

  /**
   * @schema PropertyDifference#ActualValue
   */
  readonly actualValue: string;

  /**
   * @schema PropertyDifference#DifferenceType
   */
  readonly differenceType: string;

}

/**
 * @schema StackSetDriftDetectionDetails
 */
export interface StackSetDriftDetectionDetails {
  /**
   * @schema StackSetDriftDetectionDetails#DriftStatus
   */
  readonly driftStatus?: string;

  /**
   * @schema StackSetDriftDetectionDetails#DriftDetectionStatus
   */
  readonly driftDetectionStatus?: string;

  /**
   * @schema StackSetDriftDetectionDetails#LastDriftCheckTimestamp
   */
  readonly lastDriftCheckTimestamp?: string;

  /**
   * @schema StackSetDriftDetectionDetails#TotalStackInstancesCount
   */
  readonly totalStackInstancesCount?: number;

  /**
   * @schema StackSetDriftDetectionDetails#DriftedStackInstancesCount
   */
  readonly driftedStackInstancesCount?: number;

  /**
   * @schema StackSetDriftDetectionDetails#InSyncStackInstancesCount
   */
  readonly inSyncStackInstancesCount?: number;

  /**
   * @schema StackSetDriftDetectionDetails#InProgressStackInstancesCount
   */
  readonly inProgressStackInstancesCount?: number;

  /**
   * @schema StackSetDriftDetectionDetails#FailedStackInstancesCount
   */
  readonly failedStackInstancesCount?: number;

}

/**
 * @schema Output
 */
export interface Output {
  /**
   * @schema Output#OutputKey
   */
  readonly outputKey?: string;

  /**
   * @schema Output#OutputValue
   */
  readonly outputValue?: string;

  /**
   * @schema Output#Description
   */
  readonly description?: string;

  /**
   * @schema Output#ExportName
   */
  readonly exportName?: string;

}

/**
 * @schema StackDriftInformation
 */
export interface StackDriftInformation {
  /**
   * @schema StackDriftInformation#StackDriftStatus
   */
  readonly stackDriftStatus: string;

  /**
   * @schema StackDriftInformation#LastCheckTimestamp
   */
  readonly lastCheckTimestamp?: string;

}

/**
 * @schema ParameterConstraints
 */
export interface ParameterConstraints {
  /**
   * @schema ParameterConstraints#AllowedValues
   */
  readonly allowedValues?: string[];

}

/**
 * @schema StackResourceDriftInformationSummary
 */
export interface StackResourceDriftInformationSummary {
  /**
   * @schema StackResourceDriftInformationSummary#StackResourceDriftStatus
   */
  readonly stackResourceDriftStatus: string;

  /**
   * @schema StackResourceDriftInformationSummary#LastCheckTimestamp
   */
  readonly lastCheckTimestamp?: string;

}

/**
 * @schema AccountGateResult
 */
export interface AccountGateResult {
  /**
   * @schema AccountGateResult#Status
   */
  readonly status?: string;

  /**
   * @schema AccountGateResult#StatusReason
   */
  readonly statusReason?: string;

}

/**
 * @schema StackDriftInformationSummary
 */
export interface StackDriftInformationSummary {
  /**
   * @schema StackDriftInformationSummary#StackDriftStatus
   */
  readonly stackDriftStatus: string;

  /**
   * @schema StackDriftInformationSummary#LastCheckTimestamp
   */
  readonly lastCheckTimestamp?: string;

}

/**
 * @schema ResourceChangeDetail
 */
export interface ResourceChangeDetail {
  /**
   * @schema ResourceChangeDetail#Target
   */
  readonly target?: ResourceTargetDefinition;

  /**
   * @schema ResourceChangeDetail#Evaluation
   */
  readonly evaluation?: string;

  /**
   * @schema ResourceChangeDetail#ChangeSource
   */
  readonly changeSource?: string;

  /**
   * @schema ResourceChangeDetail#CausingEntity
   */
  readonly causingEntity?: string;

}

/**
 * @schema ResourceTargetDefinition
 */
export interface ResourceTargetDefinition {
  /**
   * @schema ResourceTargetDefinition#Attribute
   */
  readonly attribute?: string;

  /**
   * @schema ResourceTargetDefinition#Name
   */
  readonly name?: string;

  /**
   * @schema ResourceTargetDefinition#RequiresRecreation
   */
  readonly requiresRecreation?: string;

}
