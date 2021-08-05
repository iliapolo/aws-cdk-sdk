/**
 * @schema SageMakerAddTagsInput
 */
export interface SageMakerAddTagsInput {
  /**
   * @schema SageMakerAddTagsInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SageMakerAddTagsInput#Tags
   */
  readonly tags: SageMakerTag[];

}

/**
 * @schema SageMakerAddTagsOutput
 */
export interface SageMakerAddTagsOutput {
  /**
   * @schema SageMakerAddTagsOutput#Tags
   */
  readonly tags?: SageMakerTag[];

}

/**
 * @schema SageMakerAssociateTrialComponentRequest
 */
export interface SageMakerAssociateTrialComponentRequest {
  /**
   * @schema SageMakerAssociateTrialComponentRequest#TrialComponentName
   */
  readonly trialComponentName: string;

  /**
   * @schema SageMakerAssociateTrialComponentRequest#TrialName
   */
  readonly trialName: string;

}

/**
 * @schema SageMakerAssociateTrialComponentResponse
 */
export interface SageMakerAssociateTrialComponentResponse {
  /**
   * @schema SageMakerAssociateTrialComponentResponse#TrialComponentArn
   */
  readonly trialComponentArn?: string;

  /**
   * @schema SageMakerAssociateTrialComponentResponse#TrialArn
   */
  readonly trialArn?: string;

}

/**
 * @schema SageMakerCreateAlgorithmInput
 */
export interface SageMakerCreateAlgorithmInput {
  /**
   * @schema SageMakerCreateAlgorithmInput#AlgorithmName
   */
  readonly algorithmName: string;

  /**
   * @schema SageMakerCreateAlgorithmInput#AlgorithmDescription
   */
  readonly algorithmDescription?: string;

  /**
   * @schema SageMakerCreateAlgorithmInput#TrainingSpecification
   */
  readonly trainingSpecification: SageMakerTrainingSpecification;

  /**
   * @schema SageMakerCreateAlgorithmInput#InferenceSpecification
   */
  readonly inferenceSpecification?: SageMakerInferenceSpecification;

  /**
   * @schema SageMakerCreateAlgorithmInput#ValidationSpecification
   */
  readonly validationSpecification?: SageMakerAlgorithmValidationSpecification;

  /**
   * @schema SageMakerCreateAlgorithmInput#CertifyForMarketplace
   */
  readonly certifyForMarketplace?: boolean;

}

/**
 * @schema SageMakerCreateAlgorithmOutput
 */
export interface SageMakerCreateAlgorithmOutput {
  /**
   * @schema SageMakerCreateAlgorithmOutput#AlgorithmArn
   */
  readonly algorithmArn: string;

}

/**
 * @schema SageMakerCreateAppRequest
 */
export interface SageMakerCreateAppRequest {
  /**
   * @schema SageMakerCreateAppRequest#DomainId
   */
  readonly domainId: string;

  /**
   * @schema SageMakerCreateAppRequest#UserProfileName
   */
  readonly userProfileName: string;

  /**
   * @schema SageMakerCreateAppRequest#AppType
   */
  readonly appType: string;

  /**
   * @schema SageMakerCreateAppRequest#AppName
   */
  readonly appName: string;

  /**
   * @schema SageMakerCreateAppRequest#Tags
   */
  readonly tags?: SageMakerTag[];

  /**
   * @schema SageMakerCreateAppRequest#ResourceSpec
   */
  readonly resourceSpec?: SageMakerResourceSpec;

}

/**
 * @schema SageMakerCreateAppResponse
 */
export interface SageMakerCreateAppResponse {
  /**
   * @schema SageMakerCreateAppResponse#AppArn
   */
  readonly appArn?: string;

}

/**
 * @schema SageMakerCreateAppImageConfigRequest
 */
export interface SageMakerCreateAppImageConfigRequest {
  /**
   * @schema SageMakerCreateAppImageConfigRequest#AppImageConfigName
   */
  readonly appImageConfigName: string;

  /**
   * @schema SageMakerCreateAppImageConfigRequest#Tags
   */
  readonly tags?: SageMakerTag[];

  /**
   * @schema SageMakerCreateAppImageConfigRequest#KernelGatewayImageConfig
   */
  readonly kernelGatewayImageConfig?: SageMakerKernelGatewayImageConfig;

}

/**
 * @schema SageMakerCreateAppImageConfigResponse
 */
export interface SageMakerCreateAppImageConfigResponse {
  /**
   * @schema SageMakerCreateAppImageConfigResponse#AppImageConfigArn
   */
  readonly appImageConfigArn?: string;

}

/**
 * @schema SageMakerCreateAutoMlJobRequest
 */
export interface SageMakerCreateAutoMlJobRequest {
  /**
   * @schema SageMakerCreateAutoMlJobRequest#AutoMLJobName
   */
  readonly autoMlJobName: string;

  /**
   * @schema SageMakerCreateAutoMlJobRequest#InputDataConfig
   */
  readonly inputDataConfig: SageMakerAutoMlChannel[];

  /**
   * @schema SageMakerCreateAutoMlJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: SageMakerAutoMlOutputDataConfig;

  /**
   * @schema SageMakerCreateAutoMlJobRequest#ProblemType
   */
  readonly problemType?: string;

  /**
   * @schema SageMakerCreateAutoMlJobRequest#AutoMLJobObjective
   */
  readonly autoMlJobObjective?: SageMakerAutoMlJobObjective;

  /**
   * @schema SageMakerCreateAutoMlJobRequest#AutoMLJobConfig
   */
  readonly autoMlJobConfig?: SageMakerAutoMlJobConfig;

  /**
   * @schema SageMakerCreateAutoMlJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema SageMakerCreateAutoMlJobRequest#GenerateCandidateDefinitionsOnly
   */
  readonly generateCandidateDefinitionsOnly?: boolean;

  /**
   * @schema SageMakerCreateAutoMlJobRequest#Tags
   */
  readonly tags?: SageMakerTag[];

}

/**
 * @schema SageMakerCreateAutoMlJobResponse
 */
export interface SageMakerCreateAutoMlJobResponse {
  /**
   * @schema SageMakerCreateAutoMlJobResponse#AutoMLJobArn
   */
  readonly autoMlJobArn: string;

}

/**
 * @schema SageMakerCreateCodeRepositoryInput
 */
export interface SageMakerCreateCodeRepositoryInput {
  /**
   * @schema SageMakerCreateCodeRepositoryInput#CodeRepositoryName
   */
  readonly codeRepositoryName: string;

  /**
   * @schema SageMakerCreateCodeRepositoryInput#GitConfig
   */
  readonly gitConfig: SageMakerGitConfig;

}

/**
 * @schema SageMakerCreateCodeRepositoryOutput
 */
export interface SageMakerCreateCodeRepositoryOutput {
  /**
   * @schema SageMakerCreateCodeRepositoryOutput#CodeRepositoryArn
   */
  readonly codeRepositoryArn: string;

}

/**
 * @schema SageMakerCreateCompilationJobRequest
 */
export interface SageMakerCreateCompilationJobRequest {
  /**
   * @schema SageMakerCreateCompilationJobRequest#CompilationJobName
   */
  readonly compilationJobName: string;

  /**
   * @schema SageMakerCreateCompilationJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema SageMakerCreateCompilationJobRequest#InputConfig
   */
  readonly inputConfig: SageMakerInputConfig;

  /**
   * @schema SageMakerCreateCompilationJobRequest#OutputConfig
   */
  readonly outputConfig: SageMakerOutputConfig;

  /**
   * @schema SageMakerCreateCompilationJobRequest#StoppingCondition
   */
  readonly stoppingCondition: SageMakerStoppingCondition;

  /**
   * @schema SageMakerCreateCompilationJobRequest#Tags
   */
  readonly tags?: SageMakerTag[];

}

/**
 * @schema SageMakerCreateCompilationJobResponse
 */
export interface SageMakerCreateCompilationJobResponse {
  /**
   * @schema SageMakerCreateCompilationJobResponse#CompilationJobArn
   */
  readonly compilationJobArn: string;

}

/**
 * @schema SageMakerCreateDomainRequest
 */
export interface SageMakerCreateDomainRequest {
  /**
   * @schema SageMakerCreateDomainRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema SageMakerCreateDomainRequest#AuthMode
   */
  readonly authMode: string;

  /**
   * @schema SageMakerCreateDomainRequest#DefaultUserSettings
   */
  readonly defaultUserSettings: SageMakerUserSettings;

  /**
   * @schema SageMakerCreateDomainRequest#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema SageMakerCreateDomainRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema SageMakerCreateDomainRequest#Tags
   */
  readonly tags?: SageMakerTag[];

  /**
   * @schema SageMakerCreateDomainRequest#AppNetworkAccessType
   */
  readonly appNetworkAccessType?: string;

  /**
   * @schema SageMakerCreateDomainRequest#HomeEfsFileSystemKmsKeyId
   */
  readonly homeEfsFileSystemKmsKeyId?: string;

  /**
   * @schema SageMakerCreateDomainRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema SageMakerCreateDomainResponse
 */
export interface SageMakerCreateDomainResponse {
  /**
   * @schema SageMakerCreateDomainResponse#DomainArn
   */
  readonly domainArn?: string;

  /**
   * @schema SageMakerCreateDomainResponse#Url
   */
  readonly url?: string;

}

/**
 * @schema SageMakerCreateEndpointInput
 */
export interface SageMakerCreateEndpointInput {
  /**
   * @schema SageMakerCreateEndpointInput#EndpointName
   */
  readonly endpointName: string;

  /**
   * @schema SageMakerCreateEndpointInput#EndpointConfigName
   */
  readonly endpointConfigName: string;

  /**
   * @schema SageMakerCreateEndpointInput#Tags
   */
  readonly tags?: SageMakerTag[];

}

/**
 * @schema SageMakerCreateEndpointOutput
 */
export interface SageMakerCreateEndpointOutput {
  /**
   * @schema SageMakerCreateEndpointOutput#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema SageMakerCreateEndpointConfigInput
 */
export interface SageMakerCreateEndpointConfigInput {
  /**
   * @schema SageMakerCreateEndpointConfigInput#EndpointConfigName
   */
  readonly endpointConfigName: string;

  /**
   * @schema SageMakerCreateEndpointConfigInput#ProductionVariants
   */
  readonly productionVariants: SageMakerProductionVariant[];

  /**
   * @schema SageMakerCreateEndpointConfigInput#DataCaptureConfig
   */
  readonly dataCaptureConfig?: SageMakerDataCaptureConfig;

  /**
   * @schema SageMakerCreateEndpointConfigInput#Tags
   */
  readonly tags?: SageMakerTag[];

  /**
   * @schema SageMakerCreateEndpointConfigInput#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema SageMakerCreateEndpointConfigOutput
 */
export interface SageMakerCreateEndpointConfigOutput {
  /**
   * @schema SageMakerCreateEndpointConfigOutput#EndpointConfigArn
   */
  readonly endpointConfigArn: string;

}

/**
 * @schema SageMakerCreateExperimentRequest
 */
export interface SageMakerCreateExperimentRequest {
  /**
   * @schema SageMakerCreateExperimentRequest#ExperimentName
   */
  readonly experimentName: string;

  /**
   * @schema SageMakerCreateExperimentRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SageMakerCreateExperimentRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SageMakerCreateExperimentRequest#Tags
   */
  readonly tags?: SageMakerTag[];

}

/**
 * @schema SageMakerCreateExperimentResponse
 */
export interface SageMakerCreateExperimentResponse {
  /**
   * @schema SageMakerCreateExperimentResponse#ExperimentArn
   */
  readonly experimentArn?: string;

}

/**
 * @schema SageMakerCreateFlowDefinitionRequest
 */
export interface SageMakerCreateFlowDefinitionRequest {
  /**
   * @schema SageMakerCreateFlowDefinitionRequest#FlowDefinitionName
   */
  readonly flowDefinitionName: string;

  /**
   * @schema SageMakerCreateFlowDefinitionRequest#HumanLoopRequestSource
   */
  readonly humanLoopRequestSource?: SageMakerHumanLoopRequestSource;

  /**
   * @schema SageMakerCreateFlowDefinitionRequest#HumanLoopActivationConfig
   */
  readonly humanLoopActivationConfig?: SageMakerHumanLoopActivationConfig;

  /**
   * @schema SageMakerCreateFlowDefinitionRequest#HumanLoopConfig
   */
  readonly humanLoopConfig: SageMakerHumanLoopConfig;

  /**
   * @schema SageMakerCreateFlowDefinitionRequest#OutputConfig
   */
  readonly outputConfig: SageMakerFlowDefinitionOutputConfig;

  /**
   * @schema SageMakerCreateFlowDefinitionRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema SageMakerCreateFlowDefinitionRequest#Tags
   */
  readonly tags?: SageMakerTag[];

}

/**
 * @schema SageMakerCreateFlowDefinitionResponse
 */
export interface SageMakerCreateFlowDefinitionResponse {
  /**
   * @schema SageMakerCreateFlowDefinitionResponse#FlowDefinitionArn
   */
  readonly flowDefinitionArn: string;

}

/**
 * @schema SageMakerCreateHumanTaskUiRequest
 */
export interface SageMakerCreateHumanTaskUiRequest {
  /**
   * @schema SageMakerCreateHumanTaskUiRequest#HumanTaskUiName
   */
  readonly humanTaskUiName: string;

  /**
   * @schema SageMakerCreateHumanTaskUiRequest#UiTemplate
   */
  readonly uiTemplate: SageMakerUiTemplate;

  /**
   * @schema SageMakerCreateHumanTaskUiRequest#Tags
   */
  readonly tags?: SageMakerTag[];

}

/**
 * @schema SageMakerCreateHumanTaskUiResponse
 */
export interface SageMakerCreateHumanTaskUiResponse {
  /**
   * @schema SageMakerCreateHumanTaskUiResponse#HumanTaskUiArn
   */
  readonly humanTaskUiArn: string;

}

/**
 * @schema SageMakerCreateHyperParameterTuningJobRequest
 */
export interface SageMakerCreateHyperParameterTuningJobRequest {
  /**
   * @schema SageMakerCreateHyperParameterTuningJobRequest#HyperParameterTuningJobName
   */
  readonly hyperParameterTuningJobName: string;

  /**
   * @schema SageMakerCreateHyperParameterTuningJobRequest#HyperParameterTuningJobConfig
   */
  readonly hyperParameterTuningJobConfig: SageMakerHyperParameterTuningJobConfig;

  /**
   * @schema SageMakerCreateHyperParameterTuningJobRequest#TrainingJobDefinition
   */
  readonly trainingJobDefinition?: SageMakerHyperParameterTrainingJobDefinition;

  /**
   * @schema SageMakerCreateHyperParameterTuningJobRequest#TrainingJobDefinitions
   */
  readonly trainingJobDefinitions?: SageMakerHyperParameterTrainingJobDefinition[];

  /**
   * @schema SageMakerCreateHyperParameterTuningJobRequest#WarmStartConfig
   */
  readonly warmStartConfig?: SageMakerHyperParameterTuningJobWarmStartConfig;

  /**
   * @schema SageMakerCreateHyperParameterTuningJobRequest#Tags
   */
  readonly tags?: SageMakerTag[];

}

/**
 * @schema SageMakerCreateHyperParameterTuningJobResponse
 */
export interface SageMakerCreateHyperParameterTuningJobResponse {
  /**
   * @schema SageMakerCreateHyperParameterTuningJobResponse#HyperParameterTuningJobArn
   */
  readonly hyperParameterTuningJobArn: string;

}

/**
 * @schema SageMakerCreateImageRequest
 */
export interface SageMakerCreateImageRequest {
  /**
   * @schema SageMakerCreateImageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SageMakerCreateImageRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SageMakerCreateImageRequest#ImageName
   */
  readonly imageName: string;

  /**
   * @schema SageMakerCreateImageRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema SageMakerCreateImageRequest#Tags
   */
  readonly tags?: SageMakerTag[];

}

/**
 * @schema SageMakerCreateImageResponse
 */
export interface SageMakerCreateImageResponse {
  /**
   * @schema SageMakerCreateImageResponse#ImageArn
   */
  readonly imageArn?: string;

}

/**
 * @schema SageMakerCreateImageVersionRequest
 */
export interface SageMakerCreateImageVersionRequest {
  /**
   * @schema SageMakerCreateImageVersionRequest#BaseImage
   */
  readonly baseImage: string;

  /**
   * @schema SageMakerCreateImageVersionRequest#ClientToken
   */
  readonly clientToken: string;

  /**
   * @schema SageMakerCreateImageVersionRequest#ImageName
   */
  readonly imageName: string;

}

/**
 * @schema SageMakerCreateImageVersionResponse
 */
export interface SageMakerCreateImageVersionResponse {
  /**
   * @schema SageMakerCreateImageVersionResponse#ImageVersionArn
   */
  readonly imageVersionArn?: string;

}

/**
 * @schema SageMakerCreateLabelingJobRequest
 */
export interface SageMakerCreateLabelingJobRequest {
  /**
   * @schema SageMakerCreateLabelingJobRequest#LabelingJobName
   */
  readonly labelingJobName: string;

  /**
   * @schema SageMakerCreateLabelingJobRequest#LabelAttributeName
   */
  readonly labelAttributeName: string;

  /**
   * @schema SageMakerCreateLabelingJobRequest#InputConfig
   */
  readonly inputConfig: SageMakerLabelingJobInputConfig;

  /**
   * @schema SageMakerCreateLabelingJobRequest#OutputConfig
   */
  readonly outputConfig: SageMakerLabelingJobOutputConfig;

  /**
   * @schema SageMakerCreateLabelingJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema SageMakerCreateLabelingJobRequest#LabelCategoryConfigS3Uri
   */
  readonly labelCategoryConfigS3Uri?: string;

  /**
   * @schema SageMakerCreateLabelingJobRequest#StoppingConditions
   */
  readonly stoppingConditions?: SageMakerLabelingJobStoppingConditions;

  /**
   * @schema SageMakerCreateLabelingJobRequest#LabelingJobAlgorithmsConfig
   */
  readonly labelingJobAlgorithmsConfig?: SageMakerLabelingJobAlgorithmsConfig;

  /**
   * @schema SageMakerCreateLabelingJobRequest#HumanTaskConfig
   */
  readonly humanTaskConfig: SageMakerHumanTaskConfig;

  /**
   * @schema SageMakerCreateLabelingJobRequest#Tags
   */
  readonly tags?: SageMakerTag[];

}

/**
 * @schema SageMakerCreateLabelingJobResponse
 */
export interface SageMakerCreateLabelingJobResponse {
  /**
   * @schema SageMakerCreateLabelingJobResponse#LabelingJobArn
   */
  readonly labelingJobArn: string;

}

/**
 * @schema SageMakerCreateModelInput
 */
export interface SageMakerCreateModelInput {
  /**
   * @schema SageMakerCreateModelInput#ModelName
   */
  readonly modelName: string;

  /**
   * @schema SageMakerCreateModelInput#PrimaryContainer
   */
  readonly primaryContainer?: SageMakerContainerDefinition;

  /**
   * @schema SageMakerCreateModelInput#Containers
   */
  readonly containers?: SageMakerContainerDefinition[];

  /**
   * @schema SageMakerCreateModelInput#ExecutionRoleArn
   */
  readonly executionRoleArn: string;

  /**
   * @schema SageMakerCreateModelInput#Tags
   */
  readonly tags?: SageMakerTag[];

  /**
   * @schema SageMakerCreateModelInput#VpcConfig
   */
  readonly vpcConfig?: SageMakerVpcConfig;

  /**
   * @schema SageMakerCreateModelInput#EnableNetworkIsolation
   */
  readonly enableNetworkIsolation?: boolean;

}

/**
 * @schema SageMakerCreateModelOutput
 */
export interface SageMakerCreateModelOutput {
  /**
   * @schema SageMakerCreateModelOutput#ModelArn
   */
  readonly modelArn: string;

}

/**
 * @schema SageMakerCreateModelPackageInput
 */
export interface SageMakerCreateModelPackageInput {
  /**
   * @schema SageMakerCreateModelPackageInput#ModelPackageName
   */
  readonly modelPackageName?: string;

  /**
   * @schema SageMakerCreateModelPackageInput#ModelPackageDescription
   */
  readonly modelPackageDescription?: string;

  /**
   * @schema SageMakerCreateModelPackageInput#InferenceSpecification
   */
  readonly inferenceSpecification?: SageMakerInferenceSpecification;

  /**
   * @schema SageMakerCreateModelPackageInput#ValidationSpecification
   */
  readonly validationSpecification?: SageMakerModelPackageValidationSpecification;

  /**
   * @schema SageMakerCreateModelPackageInput#SourceAlgorithmSpecification
   */
  readonly sourceAlgorithmSpecification?: SageMakerSourceAlgorithmSpecification;

  /**
   * @schema SageMakerCreateModelPackageInput#CertifyForMarketplace
   */
  readonly certifyForMarketplace?: boolean;

}

/**
 * @schema SageMakerCreateModelPackageOutput
 */
export interface SageMakerCreateModelPackageOutput {
  /**
   * @schema SageMakerCreateModelPackageOutput#ModelPackageArn
   */
  readonly modelPackageArn: string;

}

/**
 * @schema SageMakerCreateMonitoringScheduleRequest
 */
export interface SageMakerCreateMonitoringScheduleRequest {
  /**
   * @schema SageMakerCreateMonitoringScheduleRequest#MonitoringScheduleName
   */
  readonly monitoringScheduleName: string;

  /**
   * @schema SageMakerCreateMonitoringScheduleRequest#MonitoringScheduleConfig
   */
  readonly monitoringScheduleConfig: SageMakerMonitoringScheduleConfig;

  /**
   * @schema SageMakerCreateMonitoringScheduleRequest#Tags
   */
  readonly tags?: SageMakerTag[];

}

/**
 * @schema SageMakerCreateMonitoringScheduleResponse
 */
export interface SageMakerCreateMonitoringScheduleResponse {
  /**
   * @schema SageMakerCreateMonitoringScheduleResponse#MonitoringScheduleArn
   */
  readonly monitoringScheduleArn: string;

}

/**
 * @schema SageMakerCreateNotebookInstanceInput
 */
export interface SageMakerCreateNotebookInstanceInput {
  /**
   * @schema SageMakerCreateNotebookInstanceInput#NotebookInstanceName
   */
  readonly notebookInstanceName: string;

  /**
   * @schema SageMakerCreateNotebookInstanceInput#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema SageMakerCreateNotebookInstanceInput#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema SageMakerCreateNotebookInstanceInput#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema SageMakerCreateNotebookInstanceInput#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema SageMakerCreateNotebookInstanceInput#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SageMakerCreateNotebookInstanceInput#Tags
   */
  readonly tags?: SageMakerTag[];

  /**
   * @schema SageMakerCreateNotebookInstanceInput#LifecycleConfigName
   */
  readonly lifecycleConfigName?: string;

  /**
   * @schema SageMakerCreateNotebookInstanceInput#DirectInternetAccess
   */
  readonly directInternetAccess?: string;

  /**
   * @schema SageMakerCreateNotebookInstanceInput#VolumeSizeInGB
   */
  readonly volumeSizeInGb?: number;

  /**
   * @schema SageMakerCreateNotebookInstanceInput#AcceleratorTypes
   */
  readonly acceleratorTypes?: string[];

  /**
   * @schema SageMakerCreateNotebookInstanceInput#DefaultCodeRepository
   */
  readonly defaultCodeRepository?: string;

  /**
   * @schema SageMakerCreateNotebookInstanceInput#AdditionalCodeRepositories
   */
  readonly additionalCodeRepositories?: string[];

  /**
   * @schema SageMakerCreateNotebookInstanceInput#RootAccess
   */
  readonly rootAccess?: string;

}

/**
 * @schema SageMakerCreateNotebookInstanceOutput
 */
export interface SageMakerCreateNotebookInstanceOutput {
  /**
   * @schema SageMakerCreateNotebookInstanceOutput#NotebookInstanceArn
   */
  readonly notebookInstanceArn?: string;

}

/**
 * @schema SageMakerCreateNotebookInstanceLifecycleConfigInput
 */
export interface SageMakerCreateNotebookInstanceLifecycleConfigInput {
  /**
   * @schema SageMakerCreateNotebookInstanceLifecycleConfigInput#NotebookInstanceLifecycleConfigName
   */
  readonly notebookInstanceLifecycleConfigName: string;

  /**
   * @schema SageMakerCreateNotebookInstanceLifecycleConfigInput#OnCreate
   */
  readonly onCreate?: SageMakerNotebookInstanceLifecycleHook[];

  /**
   * @schema SageMakerCreateNotebookInstanceLifecycleConfigInput#OnStart
   */
  readonly onStart?: SageMakerNotebookInstanceLifecycleHook[];

}

/**
 * @schema SageMakerCreateNotebookInstanceLifecycleConfigOutput
 */
export interface SageMakerCreateNotebookInstanceLifecycleConfigOutput {
  /**
   * @schema SageMakerCreateNotebookInstanceLifecycleConfigOutput#NotebookInstanceLifecycleConfigArn
   */
  readonly notebookInstanceLifecycleConfigArn?: string;

}

/**
 * @schema SageMakerCreatePresignedDomainUrlRequest
 */
export interface SageMakerCreatePresignedDomainUrlRequest {
  /**
   * @schema SageMakerCreatePresignedDomainUrlRequest#DomainId
   */
  readonly domainId: string;

  /**
   * @schema SageMakerCreatePresignedDomainUrlRequest#UserProfileName
   */
  readonly userProfileName: string;

  /**
   * @schema SageMakerCreatePresignedDomainUrlRequest#SessionExpirationDurationInSeconds
   */
  readonly sessionExpirationDurationInSeconds?: number;

}

/**
 * @schema SageMakerCreatePresignedDomainUrlResponse
 */
export interface SageMakerCreatePresignedDomainUrlResponse {
  /**
   * @schema SageMakerCreatePresignedDomainUrlResponse#AuthorizedUrl
   */
  readonly authorizedUrl?: string;

}

/**
 * @schema SageMakerCreatePresignedNotebookInstanceUrlInput
 */
export interface SageMakerCreatePresignedNotebookInstanceUrlInput {
  /**
   * @schema SageMakerCreatePresignedNotebookInstanceUrlInput#NotebookInstanceName
   */
  readonly notebookInstanceName: string;

  /**
   * @schema SageMakerCreatePresignedNotebookInstanceUrlInput#SessionExpirationDurationInSeconds
   */
  readonly sessionExpirationDurationInSeconds?: number;

}

/**
 * @schema SageMakerCreatePresignedNotebookInstanceUrlOutput
 */
export interface SageMakerCreatePresignedNotebookInstanceUrlOutput {
  /**
   * @schema SageMakerCreatePresignedNotebookInstanceUrlOutput#AuthorizedUrl
   */
  readonly authorizedUrl?: string;

}

/**
 * @schema SageMakerCreateProcessingJobRequest
 */
export interface SageMakerCreateProcessingJobRequest {
  /**
   * @schema SageMakerCreateProcessingJobRequest#ProcessingInputs
   */
  readonly processingInputs?: SageMakerProcessingInput[];

  /**
   * @schema SageMakerCreateProcessingJobRequest#ProcessingOutputConfig
   */
  readonly processingOutputConfig?: SageMakerProcessingOutputConfig;

  /**
   * @schema SageMakerCreateProcessingJobRequest#ProcessingJobName
   */
  readonly processingJobName: string;

  /**
   * @schema SageMakerCreateProcessingJobRequest#ProcessingResources
   */
  readonly processingResources: SageMakerProcessingResources;

  /**
   * @schema SageMakerCreateProcessingJobRequest#StoppingCondition
   */
  readonly stoppingCondition?: SageMakerProcessingStoppingCondition;

  /**
   * @schema SageMakerCreateProcessingJobRequest#AppSpecification
   */
  readonly appSpecification: SageMakerAppSpecification;

  /**
   * @schema SageMakerCreateProcessingJobRequest#Environment
   */
  readonly environment?: { [key: string]: string };

  /**
   * @schema SageMakerCreateProcessingJobRequest#NetworkConfig
   */
  readonly networkConfig?: SageMakerNetworkConfig;

  /**
   * @schema SageMakerCreateProcessingJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema SageMakerCreateProcessingJobRequest#Tags
   */
  readonly tags?: SageMakerTag[];

  /**
   * @schema SageMakerCreateProcessingJobRequest#ExperimentConfig
   */
  readonly experimentConfig?: SageMakerExperimentConfig;

}

/**
 * @schema SageMakerCreateProcessingJobResponse
 */
export interface SageMakerCreateProcessingJobResponse {
  /**
   * @schema SageMakerCreateProcessingJobResponse#ProcessingJobArn
   */
  readonly processingJobArn: string;

}

/**
 * @schema SageMakerCreateTrainingJobRequest
 */
export interface SageMakerCreateTrainingJobRequest {
  /**
   * @schema SageMakerCreateTrainingJobRequest#TrainingJobName
   */
  readonly trainingJobName: string;

  /**
   * @schema SageMakerCreateTrainingJobRequest#HyperParameters
   */
  readonly hyperParameters?: { [key: string]: string };

  /**
   * @schema SageMakerCreateTrainingJobRequest#AlgorithmSpecification
   */
  readonly algorithmSpecification: SageMakerAlgorithmSpecification;

  /**
   * @schema SageMakerCreateTrainingJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema SageMakerCreateTrainingJobRequest#InputDataConfig
   */
  readonly inputDataConfig?: SageMakerChannel[];

  /**
   * @schema SageMakerCreateTrainingJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: SageMakerOutputDataConfig;

  /**
   * @schema SageMakerCreateTrainingJobRequest#ResourceConfig
   */
  readonly resourceConfig: SageMakerResourceConfig;

  /**
   * @schema SageMakerCreateTrainingJobRequest#VpcConfig
   */
  readonly vpcConfig?: SageMakerVpcConfig;

  /**
   * @schema SageMakerCreateTrainingJobRequest#StoppingCondition
   */
  readonly stoppingCondition: SageMakerStoppingCondition;

  /**
   * @schema SageMakerCreateTrainingJobRequest#Tags
   */
  readonly tags?: SageMakerTag[];

  /**
   * @schema SageMakerCreateTrainingJobRequest#EnableNetworkIsolation
   */
  readonly enableNetworkIsolation?: boolean;

  /**
   * @schema SageMakerCreateTrainingJobRequest#EnableInterContainerTrafficEncryption
   */
  readonly enableInterContainerTrafficEncryption?: boolean;

  /**
   * @schema SageMakerCreateTrainingJobRequest#EnableManagedSpotTraining
   */
  readonly enableManagedSpotTraining?: boolean;

  /**
   * @schema SageMakerCreateTrainingJobRequest#CheckpointConfig
   */
  readonly checkpointConfig?: SageMakerCheckpointConfig;

  /**
   * @schema SageMakerCreateTrainingJobRequest#DebugHookConfig
   */
  readonly debugHookConfig?: SageMakerDebugHookConfig;

  /**
   * @schema SageMakerCreateTrainingJobRequest#DebugRuleConfigurations
   */
  readonly debugRuleConfigurations?: SageMakerDebugRuleConfiguration[];

  /**
   * @schema SageMakerCreateTrainingJobRequest#TensorBoardOutputConfig
   */
  readonly tensorBoardOutputConfig?: SageMakerTensorBoardOutputConfig;

  /**
   * @schema SageMakerCreateTrainingJobRequest#ExperimentConfig
   */
  readonly experimentConfig?: SageMakerExperimentConfig;

}

/**
 * @schema SageMakerCreateTrainingJobResponse
 */
export interface SageMakerCreateTrainingJobResponse {
  /**
   * @schema SageMakerCreateTrainingJobResponse#TrainingJobArn
   */
  readonly trainingJobArn: string;

}

/**
 * @schema SageMakerCreateTransformJobRequest
 */
export interface SageMakerCreateTransformJobRequest {
  /**
   * @schema SageMakerCreateTransformJobRequest#TransformJobName
   */
  readonly transformJobName: string;

  /**
   * @schema SageMakerCreateTransformJobRequest#ModelName
   */
  readonly modelName: string;

  /**
   * @schema SageMakerCreateTransformJobRequest#MaxConcurrentTransforms
   */
  readonly maxConcurrentTransforms?: number;

  /**
   * @schema SageMakerCreateTransformJobRequest#ModelClientConfig
   */
  readonly modelClientConfig?: SageMakerModelClientConfig;

  /**
   * @schema SageMakerCreateTransformJobRequest#MaxPayloadInMB
   */
  readonly maxPayloadInMb?: number;

  /**
   * @schema SageMakerCreateTransformJobRequest#BatchStrategy
   */
  readonly batchStrategy?: string;

  /**
   * @schema SageMakerCreateTransformJobRequest#Environment
   */
  readonly environment?: { [key: string]: string };

  /**
   * @schema SageMakerCreateTransformJobRequest#TransformInput
   */
  readonly transformInput: SageMakerTransformInput;

  /**
   * @schema SageMakerCreateTransformJobRequest#TransformOutput
   */
  readonly transformOutput: SageMakerTransformOutput;

  /**
   * @schema SageMakerCreateTransformJobRequest#TransformResources
   */
  readonly transformResources: SageMakerTransformResources;

  /**
   * @schema SageMakerCreateTransformJobRequest#DataProcessing
   */
  readonly dataProcessing?: SageMakerDataProcessing;

  /**
   * @schema SageMakerCreateTransformJobRequest#Tags
   */
  readonly tags?: SageMakerTag[];

  /**
   * @schema SageMakerCreateTransformJobRequest#ExperimentConfig
   */
  readonly experimentConfig?: SageMakerExperimentConfig;

}

/**
 * @schema SageMakerCreateTransformJobResponse
 */
export interface SageMakerCreateTransformJobResponse {
  /**
   * @schema SageMakerCreateTransformJobResponse#TransformJobArn
   */
  readonly transformJobArn: string;

}

/**
 * @schema SageMakerCreateTrialRequest
 */
export interface SageMakerCreateTrialRequest {
  /**
   * @schema SageMakerCreateTrialRequest#TrialName
   */
  readonly trialName: string;

  /**
   * @schema SageMakerCreateTrialRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SageMakerCreateTrialRequest#ExperimentName
   */
  readonly experimentName: string;

  /**
   * @schema SageMakerCreateTrialRequest#Tags
   */
  readonly tags?: SageMakerTag[];

}

/**
 * @schema SageMakerCreateTrialResponse
 */
export interface SageMakerCreateTrialResponse {
  /**
   * @schema SageMakerCreateTrialResponse#TrialArn
   */
  readonly trialArn?: string;

}

/**
 * @schema SageMakerCreateTrialComponentRequest
 */
export interface SageMakerCreateTrialComponentRequest {
  /**
   * @schema SageMakerCreateTrialComponentRequest#TrialComponentName
   */
  readonly trialComponentName: string;

  /**
   * @schema SageMakerCreateTrialComponentRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SageMakerCreateTrialComponentRequest#Status
   */
  readonly status?: SageMakerTrialComponentStatus;

  /**
   * @schema SageMakerCreateTrialComponentRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema SageMakerCreateTrialComponentRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema SageMakerCreateTrialComponentRequest#Parameters
   */
  readonly parameters?: { [key: string]: SageMakerTrialComponentParameterValue };

  /**
   * @schema SageMakerCreateTrialComponentRequest#InputArtifacts
   */
  readonly inputArtifacts?: { [key: string]: SageMakerTrialComponentArtifact };

  /**
   * @schema SageMakerCreateTrialComponentRequest#OutputArtifacts
   */
  readonly outputArtifacts?: { [key: string]: SageMakerTrialComponentArtifact };

  /**
   * @schema SageMakerCreateTrialComponentRequest#Tags
   */
  readonly tags?: SageMakerTag[];

}

/**
 * @schema SageMakerCreateTrialComponentResponse
 */
export interface SageMakerCreateTrialComponentResponse {
  /**
   * @schema SageMakerCreateTrialComponentResponse#TrialComponentArn
   */
  readonly trialComponentArn?: string;

}

/**
 * @schema SageMakerCreateUserProfileRequest
 */
export interface SageMakerCreateUserProfileRequest {
  /**
   * @schema SageMakerCreateUserProfileRequest#DomainId
   */
  readonly domainId: string;

  /**
   * @schema SageMakerCreateUserProfileRequest#UserProfileName
   */
  readonly userProfileName: string;

  /**
   * @schema SageMakerCreateUserProfileRequest#SingleSignOnUserIdentifier
   */
  readonly singleSignOnUserIdentifier?: string;

  /**
   * @schema SageMakerCreateUserProfileRequest#SingleSignOnUserValue
   */
  readonly singleSignOnUserValue?: string;

  /**
   * @schema SageMakerCreateUserProfileRequest#Tags
   */
  readonly tags?: SageMakerTag[];

  /**
   * @schema SageMakerCreateUserProfileRequest#UserSettings
   */
  readonly userSettings?: SageMakerUserSettings;

}

/**
 * @schema SageMakerCreateUserProfileResponse
 */
export interface SageMakerCreateUserProfileResponse {
  /**
   * @schema SageMakerCreateUserProfileResponse#UserProfileArn
   */
  readonly userProfileArn?: string;

}

/**
 * @schema SageMakerCreateWorkforceRequest
 */
export interface SageMakerCreateWorkforceRequest {
  /**
   * @schema SageMakerCreateWorkforceRequest#CognitoConfig
   */
  readonly cognitoConfig?: SageMakerCognitoConfig;

  /**
   * @schema SageMakerCreateWorkforceRequest#OidcConfig
   */
  readonly oidcConfig?: SageMakerOidcConfig;

  /**
   * @schema SageMakerCreateWorkforceRequest#SourceIpConfig
   */
  readonly sourceIpConfig?: SageMakerSourceIpConfig;

  /**
   * @schema SageMakerCreateWorkforceRequest#WorkforceName
   */
  readonly workforceName: string;

  /**
   * @schema SageMakerCreateWorkforceRequest#Tags
   */
  readonly tags?: SageMakerTag[];

}

/**
 * @schema SageMakerCreateWorkforceResponse
 */
export interface SageMakerCreateWorkforceResponse {
  /**
   * @schema SageMakerCreateWorkforceResponse#WorkforceArn
   */
  readonly workforceArn: string;

}

/**
 * @schema SageMakerCreateWorkteamRequest
 */
export interface SageMakerCreateWorkteamRequest {
  /**
   * @schema SageMakerCreateWorkteamRequest#WorkteamName
   */
  readonly workteamName: string;

  /**
   * @schema SageMakerCreateWorkteamRequest#WorkforceName
   */
  readonly workforceName?: string;

  /**
   * @schema SageMakerCreateWorkteamRequest#MemberDefinitions
   */
  readonly memberDefinitions: SageMakerMemberDefinition[];

  /**
   * @schema SageMakerCreateWorkteamRequest#Description
   */
  readonly description: string;

  /**
   * @schema SageMakerCreateWorkteamRequest#NotificationConfiguration
   */
  readonly notificationConfiguration?: SageMakerNotificationConfiguration;

  /**
   * @schema SageMakerCreateWorkteamRequest#Tags
   */
  readonly tags?: SageMakerTag[];

}

/**
 * @schema SageMakerCreateWorkteamResponse
 */
export interface SageMakerCreateWorkteamResponse {
  /**
   * @schema SageMakerCreateWorkteamResponse#WorkteamArn
   */
  readonly workteamArn?: string;

}

/**
 * @schema SageMakerDeleteAlgorithmInput
 */
export interface SageMakerDeleteAlgorithmInput {
  /**
   * @schema SageMakerDeleteAlgorithmInput#AlgorithmName
   */
  readonly algorithmName: string;

}

/**
 * @schema SageMakerDeleteAppRequest
 */
export interface SageMakerDeleteAppRequest {
  /**
   * @schema SageMakerDeleteAppRequest#DomainId
   */
  readonly domainId: string;

  /**
   * @schema SageMakerDeleteAppRequest#UserProfileName
   */
  readonly userProfileName: string;

  /**
   * @schema SageMakerDeleteAppRequest#AppType
   */
  readonly appType: string;

  /**
   * @schema SageMakerDeleteAppRequest#AppName
   */
  readonly appName: string;

}

/**
 * @schema SageMakerDeleteAppImageConfigRequest
 */
export interface SageMakerDeleteAppImageConfigRequest {
  /**
   * @schema SageMakerDeleteAppImageConfigRequest#AppImageConfigName
   */
  readonly appImageConfigName: string;

}

/**
 * @schema SageMakerDeleteCodeRepositoryInput
 */
export interface SageMakerDeleteCodeRepositoryInput {
  /**
   * @schema SageMakerDeleteCodeRepositoryInput#CodeRepositoryName
   */
  readonly codeRepositoryName: string;

}

/**
 * @schema SageMakerDeleteDomainRequest
 */
export interface SageMakerDeleteDomainRequest {
  /**
   * @schema SageMakerDeleteDomainRequest#DomainId
   */
  readonly domainId: string;

  /**
   * @schema SageMakerDeleteDomainRequest#RetentionPolicy
   */
  readonly retentionPolicy?: SageMakerRetentionPolicy;

}

/**
 * @schema SageMakerDeleteEndpointInput
 */
export interface SageMakerDeleteEndpointInput {
  /**
   * @schema SageMakerDeleteEndpointInput#EndpointName
   */
  readonly endpointName: string;

}

/**
 * @schema SageMakerDeleteEndpointConfigInput
 */
export interface SageMakerDeleteEndpointConfigInput {
  /**
   * @schema SageMakerDeleteEndpointConfigInput#EndpointConfigName
   */
  readonly endpointConfigName: string;

}

/**
 * @schema SageMakerDeleteExperimentRequest
 */
export interface SageMakerDeleteExperimentRequest {
  /**
   * @schema SageMakerDeleteExperimentRequest#ExperimentName
   */
  readonly experimentName: string;

}

/**
 * @schema SageMakerDeleteExperimentResponse
 */
export interface SageMakerDeleteExperimentResponse {
  /**
   * @schema SageMakerDeleteExperimentResponse#ExperimentArn
   */
  readonly experimentArn?: string;

}

/**
 * @schema SageMakerDeleteFlowDefinitionRequest
 */
export interface SageMakerDeleteFlowDefinitionRequest {
  /**
   * @schema SageMakerDeleteFlowDefinitionRequest#FlowDefinitionName
   */
  readonly flowDefinitionName: string;

}

/**
 * @schema SageMakerDeleteFlowDefinitionResponse
 */
export interface SageMakerDeleteFlowDefinitionResponse {
}

/**
 * @schema SageMakerDeleteHumanTaskUiRequest
 */
export interface SageMakerDeleteHumanTaskUiRequest {
  /**
   * @schema SageMakerDeleteHumanTaskUiRequest#HumanTaskUiName
   */
  readonly humanTaskUiName: string;

}

/**
 * @schema SageMakerDeleteHumanTaskUiResponse
 */
export interface SageMakerDeleteHumanTaskUiResponse {
}

/**
 * @schema SageMakerDeleteImageRequest
 */
export interface SageMakerDeleteImageRequest {
  /**
   * @schema SageMakerDeleteImageRequest#ImageName
   */
  readonly imageName: string;

}

/**
 * @schema SageMakerDeleteImageResponse
 */
export interface SageMakerDeleteImageResponse {
}

/**
 * @schema SageMakerDeleteImageVersionRequest
 */
export interface SageMakerDeleteImageVersionRequest {
  /**
   * @schema SageMakerDeleteImageVersionRequest#ImageName
   */
  readonly imageName: string;

  /**
   * @schema SageMakerDeleteImageVersionRequest#Version
   */
  readonly version: number;

}

/**
 * @schema SageMakerDeleteImageVersionResponse
 */
export interface SageMakerDeleteImageVersionResponse {
}

/**
 * @schema SageMakerDeleteModelInput
 */
export interface SageMakerDeleteModelInput {
  /**
   * @schema SageMakerDeleteModelInput#ModelName
   */
  readonly modelName: string;

}

/**
 * @schema SageMakerDeleteModelPackageInput
 */
export interface SageMakerDeleteModelPackageInput {
  /**
   * @schema SageMakerDeleteModelPackageInput#ModelPackageName
   */
  readonly modelPackageName: string;

}

/**
 * @schema SageMakerDeleteMonitoringScheduleRequest
 */
export interface SageMakerDeleteMonitoringScheduleRequest {
  /**
   * @schema SageMakerDeleteMonitoringScheduleRequest#MonitoringScheduleName
   */
  readonly monitoringScheduleName: string;

}

/**
 * @schema SageMakerDeleteNotebookInstanceInput
 */
export interface SageMakerDeleteNotebookInstanceInput {
  /**
   * @schema SageMakerDeleteNotebookInstanceInput#NotebookInstanceName
   */
  readonly notebookInstanceName: string;

}

/**
 * @schema SageMakerDeleteNotebookInstanceLifecycleConfigInput
 */
export interface SageMakerDeleteNotebookInstanceLifecycleConfigInput {
  /**
   * @schema SageMakerDeleteNotebookInstanceLifecycleConfigInput#NotebookInstanceLifecycleConfigName
   */
  readonly notebookInstanceLifecycleConfigName: string;

}

/**
 * @schema SageMakerDeleteTagsInput
 */
export interface SageMakerDeleteTagsInput {
  /**
   * @schema SageMakerDeleteTagsInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SageMakerDeleteTagsInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema SageMakerDeleteTagsOutput
 */
export interface SageMakerDeleteTagsOutput {
}

/**
 * @schema SageMakerDeleteTrialRequest
 */
export interface SageMakerDeleteTrialRequest {
  /**
   * @schema SageMakerDeleteTrialRequest#TrialName
   */
  readonly trialName: string;

}

/**
 * @schema SageMakerDeleteTrialResponse
 */
export interface SageMakerDeleteTrialResponse {
  /**
   * @schema SageMakerDeleteTrialResponse#TrialArn
   */
  readonly trialArn?: string;

}

/**
 * @schema SageMakerDeleteTrialComponentRequest
 */
export interface SageMakerDeleteTrialComponentRequest {
  /**
   * @schema SageMakerDeleteTrialComponentRequest#TrialComponentName
   */
  readonly trialComponentName: string;

}

/**
 * @schema SageMakerDeleteTrialComponentResponse
 */
export interface SageMakerDeleteTrialComponentResponse {
  /**
   * @schema SageMakerDeleteTrialComponentResponse#TrialComponentArn
   */
  readonly trialComponentArn?: string;

}

/**
 * @schema SageMakerDeleteUserProfileRequest
 */
export interface SageMakerDeleteUserProfileRequest {
  /**
   * @schema SageMakerDeleteUserProfileRequest#DomainId
   */
  readonly domainId: string;

  /**
   * @schema SageMakerDeleteUserProfileRequest#UserProfileName
   */
  readonly userProfileName: string;

}

/**
 * @schema SageMakerDeleteWorkforceRequest
 */
export interface SageMakerDeleteWorkforceRequest {
  /**
   * @schema SageMakerDeleteWorkforceRequest#WorkforceName
   */
  readonly workforceName: string;

}

/**
 * @schema SageMakerDeleteWorkforceResponse
 */
export interface SageMakerDeleteWorkforceResponse {
}

/**
 * @schema SageMakerDeleteWorkteamRequest
 */
export interface SageMakerDeleteWorkteamRequest {
  /**
   * @schema SageMakerDeleteWorkteamRequest#WorkteamName
   */
  readonly workteamName: string;

}

/**
 * @schema SageMakerDeleteWorkteamResponse
 */
export interface SageMakerDeleteWorkteamResponse {
  /**
   * @schema SageMakerDeleteWorkteamResponse#Success
   */
  readonly success: boolean;

}

/**
 * @schema SageMakerDescribeAlgorithmInput
 */
export interface SageMakerDescribeAlgorithmInput {
  /**
   * @schema SageMakerDescribeAlgorithmInput#AlgorithmName
   */
  readonly algorithmName: string;

}

/**
 * @schema SageMakerDescribeAlgorithmOutput
 */
export interface SageMakerDescribeAlgorithmOutput {
  /**
   * @schema SageMakerDescribeAlgorithmOutput#AlgorithmName
   */
  readonly algorithmName: string;

  /**
   * @schema SageMakerDescribeAlgorithmOutput#AlgorithmArn
   */
  readonly algorithmArn: string;

  /**
   * @schema SageMakerDescribeAlgorithmOutput#AlgorithmDescription
   */
  readonly algorithmDescription?: string;

  /**
   * @schema SageMakerDescribeAlgorithmOutput#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerDescribeAlgorithmOutput#TrainingSpecification
   */
  readonly trainingSpecification: SageMakerTrainingSpecification;

  /**
   * @schema SageMakerDescribeAlgorithmOutput#InferenceSpecification
   */
  readonly inferenceSpecification?: SageMakerInferenceSpecification;

  /**
   * @schema SageMakerDescribeAlgorithmOutput#ValidationSpecification
   */
  readonly validationSpecification?: SageMakerAlgorithmValidationSpecification;

  /**
   * @schema SageMakerDescribeAlgorithmOutput#AlgorithmStatus
   */
  readonly algorithmStatus: string;

  /**
   * @schema SageMakerDescribeAlgorithmOutput#AlgorithmStatusDetails
   */
  readonly algorithmStatusDetails: SageMakerAlgorithmStatusDetails;

  /**
   * @schema SageMakerDescribeAlgorithmOutput#ProductId
   */
  readonly productId?: string;

  /**
   * @schema SageMakerDescribeAlgorithmOutput#CertifyForMarketplace
   */
  readonly certifyForMarketplace?: boolean;

}

/**
 * @schema SageMakerDescribeAppRequest
 */
export interface SageMakerDescribeAppRequest {
  /**
   * @schema SageMakerDescribeAppRequest#DomainId
   */
  readonly domainId: string;

  /**
   * @schema SageMakerDescribeAppRequest#UserProfileName
   */
  readonly userProfileName: string;

  /**
   * @schema SageMakerDescribeAppRequest#AppType
   */
  readonly appType: string;

  /**
   * @schema SageMakerDescribeAppRequest#AppName
   */
  readonly appName: string;

}

/**
 * @schema SageMakerDescribeAppResponse
 */
export interface SageMakerDescribeAppResponse {
  /**
   * @schema SageMakerDescribeAppResponse#AppArn
   */
  readonly appArn?: string;

  /**
   * @schema SageMakerDescribeAppResponse#AppType
   */
  readonly appType?: string;

  /**
   * @schema SageMakerDescribeAppResponse#AppName
   */
  readonly appName?: string;

  /**
   * @schema SageMakerDescribeAppResponse#DomainId
   */
  readonly domainId?: string;

  /**
   * @schema SageMakerDescribeAppResponse#UserProfileName
   */
  readonly userProfileName?: string;

  /**
   * @schema SageMakerDescribeAppResponse#Status
   */
  readonly status?: string;

  /**
   * @schema SageMakerDescribeAppResponse#LastHealthCheckTimestamp
   */
  readonly lastHealthCheckTimestamp?: string;

  /**
   * @schema SageMakerDescribeAppResponse#LastUserActivityTimestamp
   */
  readonly lastUserActivityTimestamp?: string;

  /**
   * @schema SageMakerDescribeAppResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerDescribeAppResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SageMakerDescribeAppResponse#ResourceSpec
   */
  readonly resourceSpec?: SageMakerResourceSpec;

}

/**
 * @schema SageMakerDescribeAppImageConfigRequest
 */
export interface SageMakerDescribeAppImageConfigRequest {
  /**
   * @schema SageMakerDescribeAppImageConfigRequest#AppImageConfigName
   */
  readonly appImageConfigName: string;

}

/**
 * @schema SageMakerDescribeAppImageConfigResponse
 */
export interface SageMakerDescribeAppImageConfigResponse {
  /**
   * @schema SageMakerDescribeAppImageConfigResponse#AppImageConfigArn
   */
  readonly appImageConfigArn?: string;

  /**
   * @schema SageMakerDescribeAppImageConfigResponse#AppImageConfigName
   */
  readonly appImageConfigName?: string;

  /**
   * @schema SageMakerDescribeAppImageConfigResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerDescribeAppImageConfigResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerDescribeAppImageConfigResponse#KernelGatewayImageConfig
   */
  readonly kernelGatewayImageConfig?: SageMakerKernelGatewayImageConfig;

}

/**
 * @schema SageMakerDescribeAutoMlJobRequest
 */
export interface SageMakerDescribeAutoMlJobRequest {
  /**
   * @schema SageMakerDescribeAutoMlJobRequest#AutoMLJobName
   */
  readonly autoMlJobName: string;

}

/**
 * @schema SageMakerDescribeAutoMlJobResponse
 */
export interface SageMakerDescribeAutoMlJobResponse {
  /**
   * @schema SageMakerDescribeAutoMlJobResponse#AutoMLJobName
   */
  readonly autoMlJobName: string;

  /**
   * @schema SageMakerDescribeAutoMlJobResponse#AutoMLJobArn
   */
  readonly autoMlJobArn: string;

  /**
   * @schema SageMakerDescribeAutoMlJobResponse#InputDataConfig
   */
  readonly inputDataConfig: SageMakerAutoMlChannel[];

  /**
   * @schema SageMakerDescribeAutoMlJobResponse#OutputDataConfig
   */
  readonly outputDataConfig: SageMakerAutoMlOutputDataConfig;

  /**
   * @schema SageMakerDescribeAutoMlJobResponse#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema SageMakerDescribeAutoMlJobResponse#AutoMLJobObjective
   */
  readonly autoMlJobObjective?: SageMakerAutoMlJobObjective;

  /**
   * @schema SageMakerDescribeAutoMlJobResponse#ProblemType
   */
  readonly problemType?: string;

  /**
   * @schema SageMakerDescribeAutoMlJobResponse#AutoMLJobConfig
   */
  readonly autoMlJobConfig?: SageMakerAutoMlJobConfig;

  /**
   * @schema SageMakerDescribeAutoMlJobResponse#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerDescribeAutoMlJobResponse#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema SageMakerDescribeAutoMlJobResponse#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema SageMakerDescribeAutoMlJobResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SageMakerDescribeAutoMlJobResponse#BestCandidate
   */
  readonly bestCandidate?: SageMakerAutoMlCandidate;

  /**
   * @schema SageMakerDescribeAutoMlJobResponse#AutoMLJobStatus
   */
  readonly autoMlJobStatus: string;

  /**
   * @schema SageMakerDescribeAutoMlJobResponse#AutoMLJobSecondaryStatus
   */
  readonly autoMlJobSecondaryStatus: string;

  /**
   * @schema SageMakerDescribeAutoMlJobResponse#GenerateCandidateDefinitionsOnly
   */
  readonly generateCandidateDefinitionsOnly?: boolean;

  /**
   * @schema SageMakerDescribeAutoMlJobResponse#AutoMLJobArtifacts
   */
  readonly autoMlJobArtifacts?: SageMakerAutoMlJobArtifacts;

  /**
   * @schema SageMakerDescribeAutoMlJobResponse#ResolvedAttributes
   */
  readonly resolvedAttributes?: SageMakerResolvedAttributes;

}

/**
 * @schema SageMakerDescribeCodeRepositoryInput
 */
export interface SageMakerDescribeCodeRepositoryInput {
  /**
   * @schema SageMakerDescribeCodeRepositoryInput#CodeRepositoryName
   */
  readonly codeRepositoryName: string;

}

/**
 * @schema SageMakerDescribeCodeRepositoryOutput
 */
export interface SageMakerDescribeCodeRepositoryOutput {
  /**
   * @schema SageMakerDescribeCodeRepositoryOutput#CodeRepositoryName
   */
  readonly codeRepositoryName: string;

  /**
   * @schema SageMakerDescribeCodeRepositoryOutput#CodeRepositoryArn
   */
  readonly codeRepositoryArn: string;

  /**
   * @schema SageMakerDescribeCodeRepositoryOutput#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerDescribeCodeRepositoryOutput#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema SageMakerDescribeCodeRepositoryOutput#GitConfig
   */
  readonly gitConfig?: SageMakerGitConfig;

}

/**
 * @schema SageMakerDescribeCompilationJobRequest
 */
export interface SageMakerDescribeCompilationJobRequest {
  /**
   * @schema SageMakerDescribeCompilationJobRequest#CompilationJobName
   */
  readonly compilationJobName: string;

}

/**
 * @schema SageMakerDescribeCompilationJobResponse
 */
export interface SageMakerDescribeCompilationJobResponse {
  /**
   * @schema SageMakerDescribeCompilationJobResponse#CompilationJobName
   */
  readonly compilationJobName: string;

  /**
   * @schema SageMakerDescribeCompilationJobResponse#CompilationJobArn
   */
  readonly compilationJobArn: string;

  /**
   * @schema SageMakerDescribeCompilationJobResponse#CompilationJobStatus
   */
  readonly compilationJobStatus: string;

  /**
   * @schema SageMakerDescribeCompilationJobResponse#CompilationStartTime
   */
  readonly compilationStartTime?: string;

  /**
   * @schema SageMakerDescribeCompilationJobResponse#CompilationEndTime
   */
  readonly compilationEndTime?: string;

  /**
   * @schema SageMakerDescribeCompilationJobResponse#StoppingCondition
   */
  readonly stoppingCondition: SageMakerStoppingCondition;

  /**
   * @schema SageMakerDescribeCompilationJobResponse#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerDescribeCompilationJobResponse#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema SageMakerDescribeCompilationJobResponse#FailureReason
   */
  readonly failureReason: string;

  /**
   * @schema SageMakerDescribeCompilationJobResponse#ModelArtifacts
   */
  readonly modelArtifacts: SageMakerModelArtifacts;

  /**
   * @schema SageMakerDescribeCompilationJobResponse#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema SageMakerDescribeCompilationJobResponse#InputConfig
   */
  readonly inputConfig: SageMakerInputConfig;

  /**
   * @schema SageMakerDescribeCompilationJobResponse#OutputConfig
   */
  readonly outputConfig: SageMakerOutputConfig;

}

/**
 * @schema SageMakerDescribeDomainRequest
 */
export interface SageMakerDescribeDomainRequest {
  /**
   * @schema SageMakerDescribeDomainRequest#DomainId
   */
  readonly domainId: string;

}

/**
 * @schema SageMakerDescribeDomainResponse
 */
export interface SageMakerDescribeDomainResponse {
  /**
   * @schema SageMakerDescribeDomainResponse#DomainArn
   */
  readonly domainArn?: string;

  /**
   * @schema SageMakerDescribeDomainResponse#DomainId
   */
  readonly domainId?: string;

  /**
   * @schema SageMakerDescribeDomainResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema SageMakerDescribeDomainResponse#HomeEfsFileSystemId
   */
  readonly homeEfsFileSystemId?: string;

  /**
   * @schema SageMakerDescribeDomainResponse#SingleSignOnManagedApplicationInstanceId
   */
  readonly singleSignOnManagedApplicationInstanceId?: string;

  /**
   * @schema SageMakerDescribeDomainResponse#Status
   */
  readonly status?: string;

  /**
   * @schema SageMakerDescribeDomainResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerDescribeDomainResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerDescribeDomainResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SageMakerDescribeDomainResponse#AuthMode
   */
  readonly authMode?: string;

  /**
   * @schema SageMakerDescribeDomainResponse#DefaultUserSettings
   */
  readonly defaultUserSettings?: SageMakerUserSettings;

  /**
   * @schema SageMakerDescribeDomainResponse#AppNetworkAccessType
   */
  readonly appNetworkAccessType?: string;

  /**
   * @schema SageMakerDescribeDomainResponse#HomeEfsFileSystemKmsKeyId
   */
  readonly homeEfsFileSystemKmsKeyId?: string;

  /**
   * @schema SageMakerDescribeDomainResponse#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema SageMakerDescribeDomainResponse#Url
   */
  readonly url?: string;

  /**
   * @schema SageMakerDescribeDomainResponse#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema SageMakerDescribeDomainResponse#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema SageMakerDescribeEndpointInput
 */
export interface SageMakerDescribeEndpointInput {
  /**
   * @schema SageMakerDescribeEndpointInput#EndpointName
   */
  readonly endpointName: string;

}

/**
 * @schema SageMakerDescribeEndpointOutput
 */
export interface SageMakerDescribeEndpointOutput {
  /**
   * @schema SageMakerDescribeEndpointOutput#EndpointName
   */
  readonly endpointName: string;

  /**
   * @schema SageMakerDescribeEndpointOutput#EndpointArn
   */
  readonly endpointArn: string;

  /**
   * @schema SageMakerDescribeEndpointOutput#EndpointConfigName
   */
  readonly endpointConfigName: string;

  /**
   * @schema SageMakerDescribeEndpointOutput#ProductionVariants
   */
  readonly productionVariants?: SageMakerProductionVariantSummary[];

  /**
   * @schema SageMakerDescribeEndpointOutput#DataCaptureConfig
   */
  readonly dataCaptureConfig?: SageMakerDataCaptureConfigSummary;

  /**
   * @schema SageMakerDescribeEndpointOutput#EndpointStatus
   */
  readonly endpointStatus: string;

  /**
   * @schema SageMakerDescribeEndpointOutput#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SageMakerDescribeEndpointOutput#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerDescribeEndpointOutput#LastModifiedTime
   */
  readonly lastModifiedTime: string;

}

/**
 * @schema SageMakerDescribeEndpointConfigInput
 */
export interface SageMakerDescribeEndpointConfigInput {
  /**
   * @schema SageMakerDescribeEndpointConfigInput#EndpointConfigName
   */
  readonly endpointConfigName: string;

}

/**
 * @schema SageMakerDescribeEndpointConfigOutput
 */
export interface SageMakerDescribeEndpointConfigOutput {
  /**
   * @schema SageMakerDescribeEndpointConfigOutput#EndpointConfigName
   */
  readonly endpointConfigName: string;

  /**
   * @schema SageMakerDescribeEndpointConfigOutput#EndpointConfigArn
   */
  readonly endpointConfigArn: string;

  /**
   * @schema SageMakerDescribeEndpointConfigOutput#ProductionVariants
   */
  readonly productionVariants: SageMakerProductionVariant[];

  /**
   * @schema SageMakerDescribeEndpointConfigOutput#DataCaptureConfig
   */
  readonly dataCaptureConfig?: SageMakerDataCaptureConfig;

  /**
   * @schema SageMakerDescribeEndpointConfigOutput#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SageMakerDescribeEndpointConfigOutput#CreationTime
   */
  readonly creationTime: string;

}

/**
 * @schema SageMakerDescribeExperimentRequest
 */
export interface SageMakerDescribeExperimentRequest {
  /**
   * @schema SageMakerDescribeExperimentRequest#ExperimentName
   */
  readonly experimentName: string;

}

/**
 * @schema SageMakerDescribeExperimentResponse
 */
export interface SageMakerDescribeExperimentResponse {
  /**
   * @schema SageMakerDescribeExperimentResponse#ExperimentName
   */
  readonly experimentName?: string;

  /**
   * @schema SageMakerDescribeExperimentResponse#ExperimentArn
   */
  readonly experimentArn?: string;

  /**
   * @schema SageMakerDescribeExperimentResponse#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SageMakerDescribeExperimentResponse#Source
   */
  readonly source?: SageMakerExperimentSource;

  /**
   * @schema SageMakerDescribeExperimentResponse#Description
   */
  readonly description?: string;

  /**
   * @schema SageMakerDescribeExperimentResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerDescribeExperimentResponse#CreatedBy
   */
  readonly createdBy?: SageMakerUserContext;

  /**
   * @schema SageMakerDescribeExperimentResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerDescribeExperimentResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: SageMakerUserContext;

}

/**
 * @schema SageMakerDescribeFlowDefinitionRequest
 */
export interface SageMakerDescribeFlowDefinitionRequest {
  /**
   * @schema SageMakerDescribeFlowDefinitionRequest#FlowDefinitionName
   */
  readonly flowDefinitionName: string;

}

/**
 * @schema SageMakerDescribeFlowDefinitionResponse
 */
export interface SageMakerDescribeFlowDefinitionResponse {
  /**
   * @schema SageMakerDescribeFlowDefinitionResponse#FlowDefinitionArn
   */
  readonly flowDefinitionArn: string;

  /**
   * @schema SageMakerDescribeFlowDefinitionResponse#FlowDefinitionName
   */
  readonly flowDefinitionName: string;

  /**
   * @schema SageMakerDescribeFlowDefinitionResponse#FlowDefinitionStatus
   */
  readonly flowDefinitionStatus: string;

  /**
   * @schema SageMakerDescribeFlowDefinitionResponse#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerDescribeFlowDefinitionResponse#HumanLoopRequestSource
   */
  readonly humanLoopRequestSource?: SageMakerHumanLoopRequestSource;

  /**
   * @schema SageMakerDescribeFlowDefinitionResponse#HumanLoopActivationConfig
   */
  readonly humanLoopActivationConfig?: SageMakerHumanLoopActivationConfig;

  /**
   * @schema SageMakerDescribeFlowDefinitionResponse#HumanLoopConfig
   */
  readonly humanLoopConfig: SageMakerHumanLoopConfig;

  /**
   * @schema SageMakerDescribeFlowDefinitionResponse#OutputConfig
   */
  readonly outputConfig: SageMakerFlowDefinitionOutputConfig;

  /**
   * @schema SageMakerDescribeFlowDefinitionResponse#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema SageMakerDescribeFlowDefinitionResponse#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema SageMakerDescribeHumanTaskUiRequest
 */
export interface SageMakerDescribeHumanTaskUiRequest {
  /**
   * @schema SageMakerDescribeHumanTaskUiRequest#HumanTaskUiName
   */
  readonly humanTaskUiName: string;

}

/**
 * @schema SageMakerDescribeHumanTaskUiResponse
 */
export interface SageMakerDescribeHumanTaskUiResponse {
  /**
   * @schema SageMakerDescribeHumanTaskUiResponse#HumanTaskUiArn
   */
  readonly humanTaskUiArn: string;

  /**
   * @schema SageMakerDescribeHumanTaskUiResponse#HumanTaskUiName
   */
  readonly humanTaskUiName: string;

  /**
   * @schema SageMakerDescribeHumanTaskUiResponse#HumanTaskUiStatus
   */
  readonly humanTaskUiStatus?: string;

  /**
   * @schema SageMakerDescribeHumanTaskUiResponse#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerDescribeHumanTaskUiResponse#UiTemplate
   */
  readonly uiTemplate: SageMakerUiTemplateInfo;

}

/**
 * @schema SageMakerDescribeHyperParameterTuningJobRequest
 */
export interface SageMakerDescribeHyperParameterTuningJobRequest {
  /**
   * @schema SageMakerDescribeHyperParameterTuningJobRequest#HyperParameterTuningJobName
   */
  readonly hyperParameterTuningJobName: string;

}

/**
 * @schema SageMakerDescribeHyperParameterTuningJobResponse
 */
export interface SageMakerDescribeHyperParameterTuningJobResponse {
  /**
   * @schema SageMakerDescribeHyperParameterTuningJobResponse#HyperParameterTuningJobName
   */
  readonly hyperParameterTuningJobName: string;

  /**
   * @schema SageMakerDescribeHyperParameterTuningJobResponse#HyperParameterTuningJobArn
   */
  readonly hyperParameterTuningJobArn: string;

  /**
   * @schema SageMakerDescribeHyperParameterTuningJobResponse#HyperParameterTuningJobConfig
   */
  readonly hyperParameterTuningJobConfig: SageMakerHyperParameterTuningJobConfig;

  /**
   * @schema SageMakerDescribeHyperParameterTuningJobResponse#TrainingJobDefinition
   */
  readonly trainingJobDefinition?: SageMakerHyperParameterTrainingJobDefinition;

  /**
   * @schema SageMakerDescribeHyperParameterTuningJobResponse#TrainingJobDefinitions
   */
  readonly trainingJobDefinitions?: SageMakerHyperParameterTrainingJobDefinition[];

  /**
   * @schema SageMakerDescribeHyperParameterTuningJobResponse#HyperParameterTuningJobStatus
   */
  readonly hyperParameterTuningJobStatus: string;

  /**
   * @schema SageMakerDescribeHyperParameterTuningJobResponse#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerDescribeHyperParameterTuningJobResponse#HyperParameterTuningEndTime
   */
  readonly hyperParameterTuningEndTime?: string;

  /**
   * @schema SageMakerDescribeHyperParameterTuningJobResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerDescribeHyperParameterTuningJobResponse#TrainingJobStatusCounters
   */
  readonly trainingJobStatusCounters: SageMakerTrainingJobStatusCounters;

  /**
   * @schema SageMakerDescribeHyperParameterTuningJobResponse#ObjectiveStatusCounters
   */
  readonly objectiveStatusCounters: SageMakerObjectiveStatusCounters;

  /**
   * @schema SageMakerDescribeHyperParameterTuningJobResponse#BestTrainingJob
   */
  readonly bestTrainingJob?: SageMakerHyperParameterTrainingJobSummary;

  /**
   * @schema SageMakerDescribeHyperParameterTuningJobResponse#OverallBestTrainingJob
   */
  readonly overallBestTrainingJob?: SageMakerHyperParameterTrainingJobSummary;

  /**
   * @schema SageMakerDescribeHyperParameterTuningJobResponse#WarmStartConfig
   */
  readonly warmStartConfig?: SageMakerHyperParameterTuningJobWarmStartConfig;

  /**
   * @schema SageMakerDescribeHyperParameterTuningJobResponse#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema SageMakerDescribeImageRequest
 */
export interface SageMakerDescribeImageRequest {
  /**
   * @schema SageMakerDescribeImageRequest#ImageName
   */
  readonly imageName: string;

}

/**
 * @schema SageMakerDescribeImageResponse
 */
export interface SageMakerDescribeImageResponse {
  /**
   * @schema SageMakerDescribeImageResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerDescribeImageResponse#Description
   */
  readonly description?: string;

  /**
   * @schema SageMakerDescribeImageResponse#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SageMakerDescribeImageResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SageMakerDescribeImageResponse#ImageArn
   */
  readonly imageArn?: string;

  /**
   * @schema SageMakerDescribeImageResponse#ImageName
   */
  readonly imageName?: string;

  /**
   * @schema SageMakerDescribeImageResponse#ImageStatus
   */
  readonly imageStatus?: string;

  /**
   * @schema SageMakerDescribeImageResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerDescribeImageResponse#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema SageMakerDescribeImageVersionRequest
 */
export interface SageMakerDescribeImageVersionRequest {
  /**
   * @schema SageMakerDescribeImageVersionRequest#ImageName
   */
  readonly imageName: string;

  /**
   * @schema SageMakerDescribeImageVersionRequest#Version
   */
  readonly version?: number;

}

/**
 * @schema SageMakerDescribeImageVersionResponse
 */
export interface SageMakerDescribeImageVersionResponse {
  /**
   * @schema SageMakerDescribeImageVersionResponse#BaseImage
   */
  readonly baseImage?: string;

  /**
   * @schema SageMakerDescribeImageVersionResponse#ContainerImage
   */
  readonly containerImage?: string;

  /**
   * @schema SageMakerDescribeImageVersionResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerDescribeImageVersionResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SageMakerDescribeImageVersionResponse#ImageArn
   */
  readonly imageArn?: string;

  /**
   * @schema SageMakerDescribeImageVersionResponse#ImageVersionArn
   */
  readonly imageVersionArn?: string;

  /**
   * @schema SageMakerDescribeImageVersionResponse#ImageVersionStatus
   */
  readonly imageVersionStatus?: string;

  /**
   * @schema SageMakerDescribeImageVersionResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerDescribeImageVersionResponse#Version
   */
  readonly version?: number;

}

/**
 * @schema SageMakerDescribeLabelingJobRequest
 */
export interface SageMakerDescribeLabelingJobRequest {
  /**
   * @schema SageMakerDescribeLabelingJobRequest#LabelingJobName
   */
  readonly labelingJobName: string;

}

/**
 * @schema SageMakerDescribeLabelingJobResponse
 */
export interface SageMakerDescribeLabelingJobResponse {
  /**
   * @schema SageMakerDescribeLabelingJobResponse#LabelingJobStatus
   */
  readonly labelingJobStatus: string;

  /**
   * @schema SageMakerDescribeLabelingJobResponse#LabelCounters
   */
  readonly labelCounters: SageMakerLabelCounters;

  /**
   * @schema SageMakerDescribeLabelingJobResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SageMakerDescribeLabelingJobResponse#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerDescribeLabelingJobResponse#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema SageMakerDescribeLabelingJobResponse#JobReferenceCode
   */
  readonly jobReferenceCode: string;

  /**
   * @schema SageMakerDescribeLabelingJobResponse#LabelingJobName
   */
  readonly labelingJobName: string;

  /**
   * @schema SageMakerDescribeLabelingJobResponse#LabelingJobArn
   */
  readonly labelingJobArn: string;

  /**
   * @schema SageMakerDescribeLabelingJobResponse#LabelAttributeName
   */
  readonly labelAttributeName?: string;

  /**
   * @schema SageMakerDescribeLabelingJobResponse#InputConfig
   */
  readonly inputConfig: SageMakerLabelingJobInputConfig;

  /**
   * @schema SageMakerDescribeLabelingJobResponse#OutputConfig
   */
  readonly outputConfig: SageMakerLabelingJobOutputConfig;

  /**
   * @schema SageMakerDescribeLabelingJobResponse#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema SageMakerDescribeLabelingJobResponse#LabelCategoryConfigS3Uri
   */
  readonly labelCategoryConfigS3Uri?: string;

  /**
   * @schema SageMakerDescribeLabelingJobResponse#StoppingConditions
   */
  readonly stoppingConditions?: SageMakerLabelingJobStoppingConditions;

  /**
   * @schema SageMakerDescribeLabelingJobResponse#LabelingJobAlgorithmsConfig
   */
  readonly labelingJobAlgorithmsConfig?: SageMakerLabelingJobAlgorithmsConfig;

  /**
   * @schema SageMakerDescribeLabelingJobResponse#HumanTaskConfig
   */
  readonly humanTaskConfig: SageMakerHumanTaskConfig;

  /**
   * @schema SageMakerDescribeLabelingJobResponse#Tags
   */
  readonly tags?: SageMakerTag[];

  /**
   * @schema SageMakerDescribeLabelingJobResponse#LabelingJobOutput
   */
  readonly labelingJobOutput?: SageMakerLabelingJobOutput;

}

/**
 * @schema SageMakerDescribeModelInput
 */
export interface SageMakerDescribeModelInput {
  /**
   * @schema SageMakerDescribeModelInput#ModelName
   */
  readonly modelName: string;

}

/**
 * @schema SageMakerDescribeModelOutput
 */
export interface SageMakerDescribeModelOutput {
  /**
   * @schema SageMakerDescribeModelOutput#ModelName
   */
  readonly modelName: string;

  /**
   * @schema SageMakerDescribeModelOutput#PrimaryContainer
   */
  readonly primaryContainer?: SageMakerContainerDefinition;

  /**
   * @schema SageMakerDescribeModelOutput#Containers
   */
  readonly containers?: SageMakerContainerDefinition[];

  /**
   * @schema SageMakerDescribeModelOutput#ExecutionRoleArn
   */
  readonly executionRoleArn: string;

  /**
   * @schema SageMakerDescribeModelOutput#VpcConfig
   */
  readonly vpcConfig?: SageMakerVpcConfig;

  /**
   * @schema SageMakerDescribeModelOutput#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerDescribeModelOutput#ModelArn
   */
  readonly modelArn: string;

  /**
   * @schema SageMakerDescribeModelOutput#EnableNetworkIsolation
   */
  readonly enableNetworkIsolation?: boolean;

}

/**
 * @schema SageMakerDescribeModelPackageInput
 */
export interface SageMakerDescribeModelPackageInput {
  /**
   * @schema SageMakerDescribeModelPackageInput#ModelPackageName
   */
  readonly modelPackageName: string;

}

/**
 * @schema SageMakerDescribeModelPackageOutput
 */
export interface SageMakerDescribeModelPackageOutput {
  /**
   * @schema SageMakerDescribeModelPackageOutput#ModelPackageName
   */
  readonly modelPackageName: string;

  /**
   * @schema SageMakerDescribeModelPackageOutput#ModelPackageArn
   */
  readonly modelPackageArn: string;

  /**
   * @schema SageMakerDescribeModelPackageOutput#ModelPackageDescription
   */
  readonly modelPackageDescription?: string;

  /**
   * @schema SageMakerDescribeModelPackageOutput#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerDescribeModelPackageOutput#InferenceSpecification
   */
  readonly inferenceSpecification?: SageMakerInferenceSpecification;

  /**
   * @schema SageMakerDescribeModelPackageOutput#SourceAlgorithmSpecification
   */
  readonly sourceAlgorithmSpecification?: SageMakerSourceAlgorithmSpecification;

  /**
   * @schema SageMakerDescribeModelPackageOutput#ValidationSpecification
   */
  readonly validationSpecification?: SageMakerModelPackageValidationSpecification;

  /**
   * @schema SageMakerDescribeModelPackageOutput#ModelPackageStatus
   */
  readonly modelPackageStatus: string;

  /**
   * @schema SageMakerDescribeModelPackageOutput#ModelPackageStatusDetails
   */
  readonly modelPackageStatusDetails: SageMakerModelPackageStatusDetails;

  /**
   * @schema SageMakerDescribeModelPackageOutput#CertifyForMarketplace
   */
  readonly certifyForMarketplace?: boolean;

}

/**
 * @schema SageMakerDescribeMonitoringScheduleRequest
 */
export interface SageMakerDescribeMonitoringScheduleRequest {
  /**
   * @schema SageMakerDescribeMonitoringScheduleRequest#MonitoringScheduleName
   */
  readonly monitoringScheduleName: string;

}

/**
 * @schema SageMakerDescribeMonitoringScheduleResponse
 */
export interface SageMakerDescribeMonitoringScheduleResponse {
  /**
   * @schema SageMakerDescribeMonitoringScheduleResponse#MonitoringScheduleArn
   */
  readonly monitoringScheduleArn: string;

  /**
   * @schema SageMakerDescribeMonitoringScheduleResponse#MonitoringScheduleName
   */
  readonly monitoringScheduleName: string;

  /**
   * @schema SageMakerDescribeMonitoringScheduleResponse#MonitoringScheduleStatus
   */
  readonly monitoringScheduleStatus: string;

  /**
   * @schema SageMakerDescribeMonitoringScheduleResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SageMakerDescribeMonitoringScheduleResponse#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerDescribeMonitoringScheduleResponse#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema SageMakerDescribeMonitoringScheduleResponse#MonitoringScheduleConfig
   */
  readonly monitoringScheduleConfig: SageMakerMonitoringScheduleConfig;

  /**
   * @schema SageMakerDescribeMonitoringScheduleResponse#EndpointName
   */
  readonly endpointName?: string;

  /**
   * @schema SageMakerDescribeMonitoringScheduleResponse#LastMonitoringExecutionSummary
   */
  readonly lastMonitoringExecutionSummary?: SageMakerMonitoringExecutionSummary;

}

/**
 * @schema SageMakerDescribeNotebookInstanceInput
 */
export interface SageMakerDescribeNotebookInstanceInput {
  /**
   * @schema SageMakerDescribeNotebookInstanceInput#NotebookInstanceName
   */
  readonly notebookInstanceName: string;

}

/**
 * @schema SageMakerDescribeNotebookInstanceOutput
 */
export interface SageMakerDescribeNotebookInstanceOutput {
  /**
   * @schema SageMakerDescribeNotebookInstanceOutput#NotebookInstanceArn
   */
  readonly notebookInstanceArn?: string;

  /**
   * @schema SageMakerDescribeNotebookInstanceOutput#NotebookInstanceName
   */
  readonly notebookInstanceName?: string;

  /**
   * @schema SageMakerDescribeNotebookInstanceOutput#NotebookInstanceStatus
   */
  readonly notebookInstanceStatus?: string;

  /**
   * @schema SageMakerDescribeNotebookInstanceOutput#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SageMakerDescribeNotebookInstanceOutput#Url
   */
  readonly url?: string;

  /**
   * @schema SageMakerDescribeNotebookInstanceOutput#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema SageMakerDescribeNotebookInstanceOutput#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema SageMakerDescribeNotebookInstanceOutput#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema SageMakerDescribeNotebookInstanceOutput#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema SageMakerDescribeNotebookInstanceOutput#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SageMakerDescribeNotebookInstanceOutput#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema SageMakerDescribeNotebookInstanceOutput#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerDescribeNotebookInstanceOutput#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerDescribeNotebookInstanceOutput#NotebookInstanceLifecycleConfigName
   */
  readonly notebookInstanceLifecycleConfigName?: string;

  /**
   * @schema SageMakerDescribeNotebookInstanceOutput#DirectInternetAccess
   */
  readonly directInternetAccess?: string;

  /**
   * @schema SageMakerDescribeNotebookInstanceOutput#VolumeSizeInGB
   */
  readonly volumeSizeInGb?: number;

  /**
   * @schema SageMakerDescribeNotebookInstanceOutput#AcceleratorTypes
   */
  readonly acceleratorTypes?: string[];

  /**
   * @schema SageMakerDescribeNotebookInstanceOutput#DefaultCodeRepository
   */
  readonly defaultCodeRepository?: string;

  /**
   * @schema SageMakerDescribeNotebookInstanceOutput#AdditionalCodeRepositories
   */
  readonly additionalCodeRepositories?: string[];

  /**
   * @schema SageMakerDescribeNotebookInstanceOutput#RootAccess
   */
  readonly rootAccess?: string;

}

/**
 * @schema SageMakerDescribeNotebookInstanceLifecycleConfigInput
 */
export interface SageMakerDescribeNotebookInstanceLifecycleConfigInput {
  /**
   * @schema SageMakerDescribeNotebookInstanceLifecycleConfigInput#NotebookInstanceLifecycleConfigName
   */
  readonly notebookInstanceLifecycleConfigName: string;

}

/**
 * @schema SageMakerDescribeNotebookInstanceLifecycleConfigOutput
 */
export interface SageMakerDescribeNotebookInstanceLifecycleConfigOutput {
  /**
   * @schema SageMakerDescribeNotebookInstanceLifecycleConfigOutput#NotebookInstanceLifecycleConfigArn
   */
  readonly notebookInstanceLifecycleConfigArn?: string;

  /**
   * @schema SageMakerDescribeNotebookInstanceLifecycleConfigOutput#NotebookInstanceLifecycleConfigName
   */
  readonly notebookInstanceLifecycleConfigName?: string;

  /**
   * @schema SageMakerDescribeNotebookInstanceLifecycleConfigOutput#OnCreate
   */
  readonly onCreate?: SageMakerNotebookInstanceLifecycleHook[];

  /**
   * @schema SageMakerDescribeNotebookInstanceLifecycleConfigOutput#OnStart
   */
  readonly onStart?: SageMakerNotebookInstanceLifecycleHook[];

  /**
   * @schema SageMakerDescribeNotebookInstanceLifecycleConfigOutput#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerDescribeNotebookInstanceLifecycleConfigOutput#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema SageMakerDescribeProcessingJobRequest
 */
export interface SageMakerDescribeProcessingJobRequest {
  /**
   * @schema SageMakerDescribeProcessingJobRequest#ProcessingJobName
   */
  readonly processingJobName: string;

}

/**
 * @schema SageMakerDescribeProcessingJobResponse
 */
export interface SageMakerDescribeProcessingJobResponse {
  /**
   * @schema SageMakerDescribeProcessingJobResponse#ProcessingInputs
   */
  readonly processingInputs?: SageMakerProcessingInput[];

  /**
   * @schema SageMakerDescribeProcessingJobResponse#ProcessingOutputConfig
   */
  readonly processingOutputConfig?: SageMakerProcessingOutputConfig;

  /**
   * @schema SageMakerDescribeProcessingJobResponse#ProcessingJobName
   */
  readonly processingJobName: string;

  /**
   * @schema SageMakerDescribeProcessingJobResponse#ProcessingResources
   */
  readonly processingResources: SageMakerProcessingResources;

  /**
   * @schema SageMakerDescribeProcessingJobResponse#StoppingCondition
   */
  readonly stoppingCondition?: SageMakerProcessingStoppingCondition;

  /**
   * @schema SageMakerDescribeProcessingJobResponse#AppSpecification
   */
  readonly appSpecification: SageMakerAppSpecification;

  /**
   * @schema SageMakerDescribeProcessingJobResponse#Environment
   */
  readonly environment?: { [key: string]: string };

  /**
   * @schema SageMakerDescribeProcessingJobResponse#NetworkConfig
   */
  readonly networkConfig?: SageMakerNetworkConfig;

  /**
   * @schema SageMakerDescribeProcessingJobResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema SageMakerDescribeProcessingJobResponse#ExperimentConfig
   */
  readonly experimentConfig?: SageMakerExperimentConfig;

  /**
   * @schema SageMakerDescribeProcessingJobResponse#ProcessingJobArn
   */
  readonly processingJobArn: string;

  /**
   * @schema SageMakerDescribeProcessingJobResponse#ProcessingJobStatus
   */
  readonly processingJobStatus: string;

  /**
   * @schema SageMakerDescribeProcessingJobResponse#ExitMessage
   */
  readonly exitMessage?: string;

  /**
   * @schema SageMakerDescribeProcessingJobResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SageMakerDescribeProcessingJobResponse#ProcessingEndTime
   */
  readonly processingEndTime?: string;

  /**
   * @schema SageMakerDescribeProcessingJobResponse#ProcessingStartTime
   */
  readonly processingStartTime?: string;

  /**
   * @schema SageMakerDescribeProcessingJobResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerDescribeProcessingJobResponse#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerDescribeProcessingJobResponse#MonitoringScheduleArn
   */
  readonly monitoringScheduleArn?: string;

  /**
   * @schema SageMakerDescribeProcessingJobResponse#AutoMLJobArn
   */
  readonly autoMlJobArn?: string;

  /**
   * @schema SageMakerDescribeProcessingJobResponse#TrainingJobArn
   */
  readonly trainingJobArn?: string;

}

/**
 * @schema SageMakerDescribeSubscribedWorkteamRequest
 */
export interface SageMakerDescribeSubscribedWorkteamRequest {
  /**
   * @schema SageMakerDescribeSubscribedWorkteamRequest#WorkteamArn
   */
  readonly workteamArn: string;

}

/**
 * @schema SageMakerDescribeSubscribedWorkteamResponse
 */
export interface SageMakerDescribeSubscribedWorkteamResponse {
  /**
   * @schema SageMakerDescribeSubscribedWorkteamResponse#SubscribedWorkteam
   */
  readonly subscribedWorkteam: SageMakerSubscribedWorkteam;

}

/**
 * @schema SageMakerDescribeTrainingJobRequest
 */
export interface SageMakerDescribeTrainingJobRequest {
  /**
   * @schema SageMakerDescribeTrainingJobRequest#TrainingJobName
   */
  readonly trainingJobName: string;

}

/**
 * @schema SageMakerDescribeTrainingJobResponse
 */
export interface SageMakerDescribeTrainingJobResponse {
  /**
   * @schema SageMakerDescribeTrainingJobResponse#TrainingJobName
   */
  readonly trainingJobName: string;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#TrainingJobArn
   */
  readonly trainingJobArn: string;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#TuningJobArn
   */
  readonly tuningJobArn?: string;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#LabelingJobArn
   */
  readonly labelingJobArn?: string;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#AutoMLJobArn
   */
  readonly autoMlJobArn?: string;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#ModelArtifacts
   */
  readonly modelArtifacts: SageMakerModelArtifacts;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#TrainingJobStatus
   */
  readonly trainingJobStatus: string;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#SecondaryStatus
   */
  readonly secondaryStatus: string;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#HyperParameters
   */
  readonly hyperParameters?: { [key: string]: string };

  /**
   * @schema SageMakerDescribeTrainingJobResponse#AlgorithmSpecification
   */
  readonly algorithmSpecification: SageMakerAlgorithmSpecification;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#InputDataConfig
   */
  readonly inputDataConfig?: SageMakerChannel[];

  /**
   * @schema SageMakerDescribeTrainingJobResponse#OutputDataConfig
   */
  readonly outputDataConfig?: SageMakerOutputDataConfig;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#ResourceConfig
   */
  readonly resourceConfig: SageMakerResourceConfig;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#VpcConfig
   */
  readonly vpcConfig?: SageMakerVpcConfig;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#StoppingCondition
   */
  readonly stoppingCondition: SageMakerStoppingCondition;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#TrainingStartTime
   */
  readonly trainingStartTime?: string;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#TrainingEndTime
   */
  readonly trainingEndTime?: string;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#SecondaryStatusTransitions
   */
  readonly secondaryStatusTransitions?: SageMakerSecondaryStatusTransition[];

  /**
   * @schema SageMakerDescribeTrainingJobResponse#FinalMetricDataList
   */
  readonly finalMetricDataList?: SageMakerMetricData[];

  /**
   * @schema SageMakerDescribeTrainingJobResponse#EnableNetworkIsolation
   */
  readonly enableNetworkIsolation?: boolean;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#EnableInterContainerTrafficEncryption
   */
  readonly enableInterContainerTrafficEncryption?: boolean;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#EnableManagedSpotTraining
   */
  readonly enableManagedSpotTraining?: boolean;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#CheckpointConfig
   */
  readonly checkpointConfig?: SageMakerCheckpointConfig;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#TrainingTimeInSeconds
   */
  readonly trainingTimeInSeconds?: number;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#BillableTimeInSeconds
   */
  readonly billableTimeInSeconds?: number;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#DebugHookConfig
   */
  readonly debugHookConfig?: SageMakerDebugHookConfig;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#ExperimentConfig
   */
  readonly experimentConfig?: SageMakerExperimentConfig;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#DebugRuleConfigurations
   */
  readonly debugRuleConfigurations?: SageMakerDebugRuleConfiguration[];

  /**
   * @schema SageMakerDescribeTrainingJobResponse#TensorBoardOutputConfig
   */
  readonly tensorBoardOutputConfig?: SageMakerTensorBoardOutputConfig;

  /**
   * @schema SageMakerDescribeTrainingJobResponse#DebugRuleEvaluationStatuses
   */
  readonly debugRuleEvaluationStatuses?: SageMakerDebugRuleEvaluationStatus[];

}

/**
 * @schema SageMakerDescribeTransformJobRequest
 */
export interface SageMakerDescribeTransformJobRequest {
  /**
   * @schema SageMakerDescribeTransformJobRequest#TransformJobName
   */
  readonly transformJobName: string;

}

/**
 * @schema SageMakerDescribeTransformJobResponse
 */
export interface SageMakerDescribeTransformJobResponse {
  /**
   * @schema SageMakerDescribeTransformJobResponse#TransformJobName
   */
  readonly transformJobName: string;

  /**
   * @schema SageMakerDescribeTransformJobResponse#TransformJobArn
   */
  readonly transformJobArn: string;

  /**
   * @schema SageMakerDescribeTransformJobResponse#TransformJobStatus
   */
  readonly transformJobStatus: string;

  /**
   * @schema SageMakerDescribeTransformJobResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SageMakerDescribeTransformJobResponse#ModelName
   */
  readonly modelName: string;

  /**
   * @schema SageMakerDescribeTransformJobResponse#MaxConcurrentTransforms
   */
  readonly maxConcurrentTransforms?: number;

  /**
   * @schema SageMakerDescribeTransformJobResponse#ModelClientConfig
   */
  readonly modelClientConfig?: SageMakerModelClientConfig;

  /**
   * @schema SageMakerDescribeTransformJobResponse#MaxPayloadInMB
   */
  readonly maxPayloadInMb?: number;

  /**
   * @schema SageMakerDescribeTransformJobResponse#BatchStrategy
   */
  readonly batchStrategy?: string;

  /**
   * @schema SageMakerDescribeTransformJobResponse#Environment
   */
  readonly environment?: { [key: string]: string };

  /**
   * @schema SageMakerDescribeTransformJobResponse#TransformInput
   */
  readonly transformInput: SageMakerTransformInput;

  /**
   * @schema SageMakerDescribeTransformJobResponse#TransformOutput
   */
  readonly transformOutput?: SageMakerTransformOutput;

  /**
   * @schema SageMakerDescribeTransformJobResponse#TransformResources
   */
  readonly transformResources: SageMakerTransformResources;

  /**
   * @schema SageMakerDescribeTransformJobResponse#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerDescribeTransformJobResponse#TransformStartTime
   */
  readonly transformStartTime?: string;

  /**
   * @schema SageMakerDescribeTransformJobResponse#TransformEndTime
   */
  readonly transformEndTime?: string;

  /**
   * @schema SageMakerDescribeTransformJobResponse#LabelingJobArn
   */
  readonly labelingJobArn?: string;

  /**
   * @schema SageMakerDescribeTransformJobResponse#AutoMLJobArn
   */
  readonly autoMlJobArn?: string;

  /**
   * @schema SageMakerDescribeTransformJobResponse#DataProcessing
   */
  readonly dataProcessing?: SageMakerDataProcessing;

  /**
   * @schema SageMakerDescribeTransformJobResponse#ExperimentConfig
   */
  readonly experimentConfig?: SageMakerExperimentConfig;

}

/**
 * @schema SageMakerDescribeTrialRequest
 */
export interface SageMakerDescribeTrialRequest {
  /**
   * @schema SageMakerDescribeTrialRequest#TrialName
   */
  readonly trialName: string;

}

/**
 * @schema SageMakerDescribeTrialResponse
 */
export interface SageMakerDescribeTrialResponse {
  /**
   * @schema SageMakerDescribeTrialResponse#TrialName
   */
  readonly trialName?: string;

  /**
   * @schema SageMakerDescribeTrialResponse#TrialArn
   */
  readonly trialArn?: string;

  /**
   * @schema SageMakerDescribeTrialResponse#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SageMakerDescribeTrialResponse#ExperimentName
   */
  readonly experimentName?: string;

  /**
   * @schema SageMakerDescribeTrialResponse#Source
   */
  readonly source?: SageMakerTrialSource;

  /**
   * @schema SageMakerDescribeTrialResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerDescribeTrialResponse#CreatedBy
   */
  readonly createdBy?: SageMakerUserContext;

  /**
   * @schema SageMakerDescribeTrialResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerDescribeTrialResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: SageMakerUserContext;

}

/**
 * @schema SageMakerDescribeTrialComponentRequest
 */
export interface SageMakerDescribeTrialComponentRequest {
  /**
   * @schema SageMakerDescribeTrialComponentRequest#TrialComponentName
   */
  readonly trialComponentName: string;

}

/**
 * @schema SageMakerDescribeTrialComponentResponse
 */
export interface SageMakerDescribeTrialComponentResponse {
  /**
   * @schema SageMakerDescribeTrialComponentResponse#TrialComponentName
   */
  readonly trialComponentName?: string;

  /**
   * @schema SageMakerDescribeTrialComponentResponse#TrialComponentArn
   */
  readonly trialComponentArn?: string;

  /**
   * @schema SageMakerDescribeTrialComponentResponse#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SageMakerDescribeTrialComponentResponse#Source
   */
  readonly source?: SageMakerTrialComponentSource;

  /**
   * @schema SageMakerDescribeTrialComponentResponse#Status
   */
  readonly status?: SageMakerTrialComponentStatus;

  /**
   * @schema SageMakerDescribeTrialComponentResponse#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema SageMakerDescribeTrialComponentResponse#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema SageMakerDescribeTrialComponentResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerDescribeTrialComponentResponse#CreatedBy
   */
  readonly createdBy?: SageMakerUserContext;

  /**
   * @schema SageMakerDescribeTrialComponentResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerDescribeTrialComponentResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: SageMakerUserContext;

  /**
   * @schema SageMakerDescribeTrialComponentResponse#Parameters
   */
  readonly parameters?: { [key: string]: SageMakerTrialComponentParameterValue };

  /**
   * @schema SageMakerDescribeTrialComponentResponse#InputArtifacts
   */
  readonly inputArtifacts?: { [key: string]: SageMakerTrialComponentArtifact };

  /**
   * @schema SageMakerDescribeTrialComponentResponse#OutputArtifacts
   */
  readonly outputArtifacts?: { [key: string]: SageMakerTrialComponentArtifact };

  /**
   * @schema SageMakerDescribeTrialComponentResponse#Metrics
   */
  readonly metrics?: SageMakerTrialComponentMetricSummary[];

}

/**
 * @schema SageMakerDescribeUserProfileRequest
 */
export interface SageMakerDescribeUserProfileRequest {
  /**
   * @schema SageMakerDescribeUserProfileRequest#DomainId
   */
  readonly domainId: string;

  /**
   * @schema SageMakerDescribeUserProfileRequest#UserProfileName
   */
  readonly userProfileName: string;

}

/**
 * @schema SageMakerDescribeUserProfileResponse
 */
export interface SageMakerDescribeUserProfileResponse {
  /**
   * @schema SageMakerDescribeUserProfileResponse#DomainId
   */
  readonly domainId?: string;

  /**
   * @schema SageMakerDescribeUserProfileResponse#UserProfileArn
   */
  readonly userProfileArn?: string;

  /**
   * @schema SageMakerDescribeUserProfileResponse#UserProfileName
   */
  readonly userProfileName?: string;

  /**
   * @schema SageMakerDescribeUserProfileResponse#HomeEfsFileSystemUid
   */
  readonly homeEfsFileSystemUid?: string;

  /**
   * @schema SageMakerDescribeUserProfileResponse#Status
   */
  readonly status?: string;

  /**
   * @schema SageMakerDescribeUserProfileResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerDescribeUserProfileResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerDescribeUserProfileResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SageMakerDescribeUserProfileResponse#SingleSignOnUserIdentifier
   */
  readonly singleSignOnUserIdentifier?: string;

  /**
   * @schema SageMakerDescribeUserProfileResponse#SingleSignOnUserValue
   */
  readonly singleSignOnUserValue?: string;

  /**
   * @schema SageMakerDescribeUserProfileResponse#UserSettings
   */
  readonly userSettings?: SageMakerUserSettings;

}

/**
 * @schema SageMakerDescribeWorkforceRequest
 */
export interface SageMakerDescribeWorkforceRequest {
  /**
   * @schema SageMakerDescribeWorkforceRequest#WorkforceName
   */
  readonly workforceName: string;

}

/**
 * @schema SageMakerDescribeWorkforceResponse
 */
export interface SageMakerDescribeWorkforceResponse {
  /**
   * @schema SageMakerDescribeWorkforceResponse#Workforce
   */
  readonly workforce: SageMakerWorkforce;

}

/**
 * @schema SageMakerDescribeWorkteamRequest
 */
export interface SageMakerDescribeWorkteamRequest {
  /**
   * @schema SageMakerDescribeWorkteamRequest#WorkteamName
   */
  readonly workteamName: string;

}

/**
 * @schema SageMakerDescribeWorkteamResponse
 */
export interface SageMakerDescribeWorkteamResponse {
  /**
   * @schema SageMakerDescribeWorkteamResponse#Workteam
   */
  readonly workteam: SageMakerWorkteam;

}

/**
 * @schema SageMakerDisassociateTrialComponentRequest
 */
export interface SageMakerDisassociateTrialComponentRequest {
  /**
   * @schema SageMakerDisassociateTrialComponentRequest#TrialComponentName
   */
  readonly trialComponentName: string;

  /**
   * @schema SageMakerDisassociateTrialComponentRequest#TrialName
   */
  readonly trialName: string;

}

/**
 * @schema SageMakerDisassociateTrialComponentResponse
 */
export interface SageMakerDisassociateTrialComponentResponse {
  /**
   * @schema SageMakerDisassociateTrialComponentResponse#TrialComponentArn
   */
  readonly trialComponentArn?: string;

  /**
   * @schema SageMakerDisassociateTrialComponentResponse#TrialArn
   */
  readonly trialArn?: string;

}

/**
 * @schema SageMakerGetSearchSuggestionsRequest
 */
export interface SageMakerGetSearchSuggestionsRequest {
  /**
   * @schema SageMakerGetSearchSuggestionsRequest#Resource
   */
  readonly resource: string;

  /**
   * @schema SageMakerGetSearchSuggestionsRequest#SuggestionQuery
   */
  readonly suggestionQuery?: SageMakerSuggestionQuery;

}

/**
 * @schema SageMakerGetSearchSuggestionsResponse
 */
export interface SageMakerGetSearchSuggestionsResponse {
  /**
   * @schema SageMakerGetSearchSuggestionsResponse#PropertyNameSuggestions
   */
  readonly propertyNameSuggestions?: SageMakerPropertyNameSuggestion[];

}

/**
 * @schema SageMakerListAlgorithmsInput
 */
export interface SageMakerListAlgorithmsInput {
  /**
   * @schema SageMakerListAlgorithmsInput#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema SageMakerListAlgorithmsInput#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListAlgorithmsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListAlgorithmsInput#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema SageMakerListAlgorithmsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListAlgorithmsInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListAlgorithmsInput#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema SageMakerListAlgorithmsOutput
 */
export interface SageMakerListAlgorithmsOutput {
  /**
   * @schema SageMakerListAlgorithmsOutput#AlgorithmSummaryList
   */
  readonly algorithmSummaryList: SageMakerAlgorithmSummary[];

  /**
   * @schema SageMakerListAlgorithmsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListAppImageConfigsRequest
 */
export interface SageMakerListAppImageConfigsRequest {
  /**
   * @schema SageMakerListAppImageConfigsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListAppImageConfigsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListAppImageConfigsRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema SageMakerListAppImageConfigsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListAppImageConfigsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema SageMakerListAppImageConfigsRequest#ModifiedTimeBefore
   */
  readonly modifiedTimeBefore?: string;

  /**
   * @schema SageMakerListAppImageConfigsRequest#ModifiedTimeAfter
   */
  readonly modifiedTimeAfter?: string;

  /**
   * @schema SageMakerListAppImageConfigsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListAppImageConfigsRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema SageMakerListAppImageConfigsResponse
 */
export interface SageMakerListAppImageConfigsResponse {
  /**
   * @schema SageMakerListAppImageConfigsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListAppImageConfigsResponse#AppImageConfigs
   */
  readonly appImageConfigs?: SageMakerAppImageConfigDetails[];

}

/**
 * @schema SageMakerListAppsRequest
 */
export interface SageMakerListAppsRequest {
  /**
   * @schema SageMakerListAppsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListAppsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListAppsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListAppsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListAppsRequest#DomainIdEquals
   */
  readonly domainIdEquals?: string;

  /**
   * @schema SageMakerListAppsRequest#UserProfileNameEquals
   */
  readonly userProfileNameEquals?: string;

}

/**
 * @schema SageMakerListAppsResponse
 */
export interface SageMakerListAppsResponse {
  /**
   * @schema SageMakerListAppsResponse#Apps
   */
  readonly apps?: SageMakerAppDetails[];

  /**
   * @schema SageMakerListAppsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListAutoMlJobsRequest
 */
export interface SageMakerListAutoMlJobsRequest {
  /**
   * @schema SageMakerListAutoMlJobsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema SageMakerListAutoMlJobsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListAutoMlJobsRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema SageMakerListAutoMlJobsRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema SageMakerListAutoMlJobsRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema SageMakerListAutoMlJobsRequest#StatusEquals
   */
  readonly statusEquals?: string;

  /**
   * @schema SageMakerListAutoMlJobsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListAutoMlJobsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListAutoMlJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListAutoMlJobsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListAutoMlJobsResponse
 */
export interface SageMakerListAutoMlJobsResponse {
  /**
   * @schema SageMakerListAutoMlJobsResponse#AutoMLJobSummaries
   */
  readonly autoMlJobSummaries: SageMakerAutoMlJobSummary[];

  /**
   * @schema SageMakerListAutoMlJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListCandidatesForAutoMlJobRequest
 */
export interface SageMakerListCandidatesForAutoMlJobRequest {
  /**
   * @schema SageMakerListCandidatesForAutoMlJobRequest#AutoMLJobName
   */
  readonly autoMlJobName: string;

  /**
   * @schema SageMakerListCandidatesForAutoMlJobRequest#StatusEquals
   */
  readonly statusEquals?: string;

  /**
   * @schema SageMakerListCandidatesForAutoMlJobRequest#CandidateNameEquals
   */
  readonly candidateNameEquals?: string;

  /**
   * @schema SageMakerListCandidatesForAutoMlJobRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListCandidatesForAutoMlJobRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListCandidatesForAutoMlJobRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListCandidatesForAutoMlJobRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListCandidatesForAutoMlJobResponse
 */
export interface SageMakerListCandidatesForAutoMlJobResponse {
  /**
   * @schema SageMakerListCandidatesForAutoMlJobResponse#Candidates
   */
  readonly candidates: SageMakerAutoMlCandidate[];

  /**
   * @schema SageMakerListCandidatesForAutoMlJobResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListCodeRepositoriesInput
 */
export interface SageMakerListCodeRepositoriesInput {
  /**
   * @schema SageMakerListCodeRepositoriesInput#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema SageMakerListCodeRepositoriesInput#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListCodeRepositoriesInput#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema SageMakerListCodeRepositoriesInput#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema SageMakerListCodeRepositoriesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListCodeRepositoriesInput#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema SageMakerListCodeRepositoriesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListCodeRepositoriesInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListCodeRepositoriesInput#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema SageMakerListCodeRepositoriesOutput
 */
export interface SageMakerListCodeRepositoriesOutput {
  /**
   * @schema SageMakerListCodeRepositoriesOutput#CodeRepositorySummaryList
   */
  readonly codeRepositorySummaryList: SageMakerCodeRepositorySummary[];

  /**
   * @schema SageMakerListCodeRepositoriesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListCompilationJobsRequest
 */
export interface SageMakerListCompilationJobsRequest {
  /**
   * @schema SageMakerListCompilationJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListCompilationJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListCompilationJobsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema SageMakerListCompilationJobsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListCompilationJobsRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema SageMakerListCompilationJobsRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema SageMakerListCompilationJobsRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema SageMakerListCompilationJobsRequest#StatusEquals
   */
  readonly statusEquals?: string;

  /**
   * @schema SageMakerListCompilationJobsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListCompilationJobsRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema SageMakerListCompilationJobsResponse
 */
export interface SageMakerListCompilationJobsResponse {
  /**
   * @schema SageMakerListCompilationJobsResponse#CompilationJobSummaries
   */
  readonly compilationJobSummaries: SageMakerCompilationJobSummary[];

  /**
   * @schema SageMakerListCompilationJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListDomainsRequest
 */
export interface SageMakerListDomainsRequest {
  /**
   * @schema SageMakerListDomainsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListDomainsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SageMakerListDomainsResponse
 */
export interface SageMakerListDomainsResponse {
  /**
   * @schema SageMakerListDomainsResponse#Domains
   */
  readonly domains?: SageMakerDomainDetails[];

  /**
   * @schema SageMakerListDomainsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListEndpointConfigsInput
 */
export interface SageMakerListEndpointConfigsInput {
  /**
   * @schema SageMakerListEndpointConfigsInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListEndpointConfigsInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListEndpointConfigsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListEndpointConfigsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListEndpointConfigsInput#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema SageMakerListEndpointConfigsInput#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListEndpointConfigsInput#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

}

/**
 * @schema SageMakerListEndpointConfigsOutput
 */
export interface SageMakerListEndpointConfigsOutput {
  /**
   * @schema SageMakerListEndpointConfigsOutput#EndpointConfigs
   */
  readonly endpointConfigs: SageMakerEndpointConfigSummary[];

  /**
   * @schema SageMakerListEndpointConfigsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListEndpointsInput
 */
export interface SageMakerListEndpointsInput {
  /**
   * @schema SageMakerListEndpointsInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListEndpointsInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListEndpointsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListEndpointsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListEndpointsInput#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema SageMakerListEndpointsInput#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListEndpointsInput#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema SageMakerListEndpointsInput#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema SageMakerListEndpointsInput#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema SageMakerListEndpointsInput#StatusEquals
   */
  readonly statusEquals?: string;

}

/**
 * @schema SageMakerListEndpointsOutput
 */
export interface SageMakerListEndpointsOutput {
  /**
   * @schema SageMakerListEndpointsOutput#Endpoints
   */
  readonly endpoints: SageMakerEndpointSummary[];

  /**
   * @schema SageMakerListEndpointsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListExperimentsRequest
 */
export interface SageMakerListExperimentsRequest {
  /**
   * @schema SageMakerListExperimentsRequest#CreatedAfter
   */
  readonly createdAfter?: string;

  /**
   * @schema SageMakerListExperimentsRequest#CreatedBefore
   */
  readonly createdBefore?: string;

  /**
   * @schema SageMakerListExperimentsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListExperimentsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListExperimentsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListExperimentsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SageMakerListExperimentsResponse
 */
export interface SageMakerListExperimentsResponse {
  /**
   * @schema SageMakerListExperimentsResponse#ExperimentSummaries
   */
  readonly experimentSummaries?: SageMakerExperimentSummary[];

  /**
   * @schema SageMakerListExperimentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListFlowDefinitionsRequest
 */
export interface SageMakerListFlowDefinitionsRequest {
  /**
   * @schema SageMakerListFlowDefinitionsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema SageMakerListFlowDefinitionsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListFlowDefinitionsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListFlowDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListFlowDefinitionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SageMakerListFlowDefinitionsResponse
 */
export interface SageMakerListFlowDefinitionsResponse {
  /**
   * @schema SageMakerListFlowDefinitionsResponse#FlowDefinitionSummaries
   */
  readonly flowDefinitionSummaries: SageMakerFlowDefinitionSummary[];

  /**
   * @schema SageMakerListFlowDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListHumanTaskUisRequest
 */
export interface SageMakerListHumanTaskUisRequest {
  /**
   * @schema SageMakerListHumanTaskUisRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema SageMakerListHumanTaskUisRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListHumanTaskUisRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListHumanTaskUisRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListHumanTaskUisRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SageMakerListHumanTaskUisResponse
 */
export interface SageMakerListHumanTaskUisResponse {
  /**
   * @schema SageMakerListHumanTaskUisResponse#HumanTaskUiSummaries
   */
  readonly humanTaskUiSummaries: SageMakerHumanTaskUiSummary[];

  /**
   * @schema SageMakerListHumanTaskUisResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListHyperParameterTuningJobsRequest
 */
export interface SageMakerListHyperParameterTuningJobsRequest {
  /**
   * @schema SageMakerListHyperParameterTuningJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListHyperParameterTuningJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListHyperParameterTuningJobsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListHyperParameterTuningJobsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListHyperParameterTuningJobsRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema SageMakerListHyperParameterTuningJobsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema SageMakerListHyperParameterTuningJobsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListHyperParameterTuningJobsRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema SageMakerListHyperParameterTuningJobsRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema SageMakerListHyperParameterTuningJobsRequest#StatusEquals
   */
  readonly statusEquals?: string;

}

/**
 * @schema SageMakerListHyperParameterTuningJobsResponse
 */
export interface SageMakerListHyperParameterTuningJobsResponse {
  /**
   * @schema SageMakerListHyperParameterTuningJobsResponse#HyperParameterTuningJobSummaries
   */
  readonly hyperParameterTuningJobSummaries: SageMakerHyperParameterTuningJobSummary[];

  /**
   * @schema SageMakerListHyperParameterTuningJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListImageVersionsRequest
 */
export interface SageMakerListImageVersionsRequest {
  /**
   * @schema SageMakerListImageVersionsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema SageMakerListImageVersionsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListImageVersionsRequest#ImageName
   */
  readonly imageName: string;

  /**
   * @schema SageMakerListImageVersionsRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema SageMakerListImageVersionsRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema SageMakerListImageVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListImageVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListImageVersionsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListImageVersionsRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema SageMakerListImageVersionsResponse
 */
export interface SageMakerListImageVersionsResponse {
  /**
   * @schema SageMakerListImageVersionsResponse#ImageVersions
   */
  readonly imageVersions?: SageMakerImageVersion[];

  /**
   * @schema SageMakerListImageVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListImagesRequest
 */
export interface SageMakerListImagesRequest {
  /**
   * @schema SageMakerListImagesRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema SageMakerListImagesRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListImagesRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema SageMakerListImagesRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema SageMakerListImagesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListImagesRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema SageMakerListImagesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListImagesRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListImagesRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema SageMakerListImagesResponse
 */
export interface SageMakerListImagesResponse {
  /**
   * @schema SageMakerListImagesResponse#Images
   */
  readonly images?: SageMakerImage[];

  /**
   * @schema SageMakerListImagesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListLabelingJobsRequest
 */
export interface SageMakerListLabelingJobsRequest {
  /**
   * @schema SageMakerListLabelingJobsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema SageMakerListLabelingJobsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListLabelingJobsRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema SageMakerListLabelingJobsRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema SageMakerListLabelingJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListLabelingJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListLabelingJobsRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema SageMakerListLabelingJobsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListLabelingJobsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListLabelingJobsRequest#StatusEquals
   */
  readonly statusEquals?: string;

}

/**
 * @schema SageMakerListLabelingJobsResponse
 */
export interface SageMakerListLabelingJobsResponse {
  /**
   * @schema SageMakerListLabelingJobsResponse#LabelingJobSummaryList
   */
  readonly labelingJobSummaryList?: SageMakerLabelingJobSummary[];

  /**
   * @schema SageMakerListLabelingJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListLabelingJobsForWorkteamRequest
 */
export interface SageMakerListLabelingJobsForWorkteamRequest {
  /**
   * @schema SageMakerListLabelingJobsForWorkteamRequest#WorkteamArn
   */
  readonly workteamArn: string;

  /**
   * @schema SageMakerListLabelingJobsForWorkteamRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListLabelingJobsForWorkteamRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListLabelingJobsForWorkteamRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema SageMakerListLabelingJobsForWorkteamRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListLabelingJobsForWorkteamRequest#JobReferenceCodeContains
   */
  readonly jobReferenceCodeContains?: string;

  /**
   * @schema SageMakerListLabelingJobsForWorkteamRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListLabelingJobsForWorkteamRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema SageMakerListLabelingJobsForWorkteamResponse
 */
export interface SageMakerListLabelingJobsForWorkteamResponse {
  /**
   * @schema SageMakerListLabelingJobsForWorkteamResponse#LabelingJobSummaryList
   */
  readonly labelingJobSummaryList: SageMakerLabelingJobForWorkteamSummary[];

  /**
   * @schema SageMakerListLabelingJobsForWorkteamResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListModelPackagesInput
 */
export interface SageMakerListModelPackagesInput {
  /**
   * @schema SageMakerListModelPackagesInput#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema SageMakerListModelPackagesInput#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListModelPackagesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListModelPackagesInput#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema SageMakerListModelPackagesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListModelPackagesInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListModelPackagesInput#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema SageMakerListModelPackagesOutput
 */
export interface SageMakerListModelPackagesOutput {
  /**
   * @schema SageMakerListModelPackagesOutput#ModelPackageSummaryList
   */
  readonly modelPackageSummaryList: SageMakerModelPackageSummary[];

  /**
   * @schema SageMakerListModelPackagesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListModelsInput
 */
export interface SageMakerListModelsInput {
  /**
   * @schema SageMakerListModelsInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListModelsInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListModelsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListModelsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListModelsInput#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema SageMakerListModelsInput#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListModelsInput#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

}

/**
 * @schema SageMakerListModelsOutput
 */
export interface SageMakerListModelsOutput {
  /**
   * @schema SageMakerListModelsOutput#Models
   */
  readonly models: SageMakerModelSummary[];

  /**
   * @schema SageMakerListModelsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListMonitoringExecutionsRequest
 */
export interface SageMakerListMonitoringExecutionsRequest {
  /**
   * @schema SageMakerListMonitoringExecutionsRequest#MonitoringScheduleName
   */
  readonly monitoringScheduleName?: string;

  /**
   * @schema SageMakerListMonitoringExecutionsRequest#EndpointName
   */
  readonly endpointName?: string;

  /**
   * @schema SageMakerListMonitoringExecutionsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListMonitoringExecutionsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListMonitoringExecutionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListMonitoringExecutionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListMonitoringExecutionsRequest#ScheduledTimeBefore
   */
  readonly scheduledTimeBefore?: string;

  /**
   * @schema SageMakerListMonitoringExecutionsRequest#ScheduledTimeAfter
   */
  readonly scheduledTimeAfter?: string;

  /**
   * @schema SageMakerListMonitoringExecutionsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListMonitoringExecutionsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema SageMakerListMonitoringExecutionsRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema SageMakerListMonitoringExecutionsRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema SageMakerListMonitoringExecutionsRequest#StatusEquals
   */
  readonly statusEquals?: string;

}

/**
 * @schema SageMakerListMonitoringExecutionsResponse
 */
export interface SageMakerListMonitoringExecutionsResponse {
  /**
   * @schema SageMakerListMonitoringExecutionsResponse#MonitoringExecutionSummaries
   */
  readonly monitoringExecutionSummaries: SageMakerMonitoringExecutionSummary[];

  /**
   * @schema SageMakerListMonitoringExecutionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListMonitoringSchedulesRequest
 */
export interface SageMakerListMonitoringSchedulesRequest {
  /**
   * @schema SageMakerListMonitoringSchedulesRequest#EndpointName
   */
  readonly endpointName?: string;

  /**
   * @schema SageMakerListMonitoringSchedulesRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListMonitoringSchedulesRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListMonitoringSchedulesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListMonitoringSchedulesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListMonitoringSchedulesRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema SageMakerListMonitoringSchedulesRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListMonitoringSchedulesRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema SageMakerListMonitoringSchedulesRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema SageMakerListMonitoringSchedulesRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema SageMakerListMonitoringSchedulesRequest#StatusEquals
   */
  readonly statusEquals?: string;

}

/**
 * @schema SageMakerListMonitoringSchedulesResponse
 */
export interface SageMakerListMonitoringSchedulesResponse {
  /**
   * @schema SageMakerListMonitoringSchedulesResponse#MonitoringScheduleSummaries
   */
  readonly monitoringScheduleSummaries: SageMakerMonitoringScheduleSummary[];

  /**
   * @schema SageMakerListMonitoringSchedulesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListNotebookInstanceLifecycleConfigsInput
 */
export interface SageMakerListNotebookInstanceLifecycleConfigsInput {
  /**
   * @schema SageMakerListNotebookInstanceLifecycleConfigsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListNotebookInstanceLifecycleConfigsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListNotebookInstanceLifecycleConfigsInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListNotebookInstanceLifecycleConfigsInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListNotebookInstanceLifecycleConfigsInput#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema SageMakerListNotebookInstanceLifecycleConfigsInput#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListNotebookInstanceLifecycleConfigsInput#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema SageMakerListNotebookInstanceLifecycleConfigsInput#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema SageMakerListNotebookInstanceLifecycleConfigsInput#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

}

/**
 * @schema SageMakerListNotebookInstanceLifecycleConfigsOutput
 */
export interface SageMakerListNotebookInstanceLifecycleConfigsOutput {
  /**
   * @schema SageMakerListNotebookInstanceLifecycleConfigsOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListNotebookInstanceLifecycleConfigsOutput#NotebookInstanceLifecycleConfigs
   */
  readonly notebookInstanceLifecycleConfigs?: SageMakerNotebookInstanceLifecycleConfigSummary[];

}

/**
 * @schema SageMakerListNotebookInstancesInput
 */
export interface SageMakerListNotebookInstancesInput {
  /**
   * @schema SageMakerListNotebookInstancesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListNotebookInstancesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListNotebookInstancesInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListNotebookInstancesInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListNotebookInstancesInput#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema SageMakerListNotebookInstancesInput#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListNotebookInstancesInput#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema SageMakerListNotebookInstancesInput#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema SageMakerListNotebookInstancesInput#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema SageMakerListNotebookInstancesInput#StatusEquals
   */
  readonly statusEquals?: string;

  /**
   * @schema SageMakerListNotebookInstancesInput#NotebookInstanceLifecycleConfigNameContains
   */
  readonly notebookInstanceLifecycleConfigNameContains?: string;

  /**
   * @schema SageMakerListNotebookInstancesInput#DefaultCodeRepositoryContains
   */
  readonly defaultCodeRepositoryContains?: string;

  /**
   * @schema SageMakerListNotebookInstancesInput#AdditionalCodeRepositoryEquals
   */
  readonly additionalCodeRepositoryEquals?: string;

}

/**
 * @schema SageMakerListNotebookInstancesOutput
 */
export interface SageMakerListNotebookInstancesOutput {
  /**
   * @schema SageMakerListNotebookInstancesOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListNotebookInstancesOutput#NotebookInstances
   */
  readonly notebookInstances?: SageMakerNotebookInstanceSummary[];

}

/**
 * @schema SageMakerListProcessingJobsRequest
 */
export interface SageMakerListProcessingJobsRequest {
  /**
   * @schema SageMakerListProcessingJobsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema SageMakerListProcessingJobsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListProcessingJobsRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema SageMakerListProcessingJobsRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema SageMakerListProcessingJobsRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema SageMakerListProcessingJobsRequest#StatusEquals
   */
  readonly statusEquals?: string;

  /**
   * @schema SageMakerListProcessingJobsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListProcessingJobsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListProcessingJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListProcessingJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SageMakerListProcessingJobsResponse
 */
export interface SageMakerListProcessingJobsResponse {
  /**
   * @schema SageMakerListProcessingJobsResponse#ProcessingJobSummaries
   */
  readonly processingJobSummaries: SageMakerProcessingJobSummary[];

  /**
   * @schema SageMakerListProcessingJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListSubscribedWorkteamsRequest
 */
export interface SageMakerListSubscribedWorkteamsRequest {
  /**
   * @schema SageMakerListSubscribedWorkteamsRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema SageMakerListSubscribedWorkteamsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListSubscribedWorkteamsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SageMakerListSubscribedWorkteamsResponse
 */
export interface SageMakerListSubscribedWorkteamsResponse {
  /**
   * @schema SageMakerListSubscribedWorkteamsResponse#SubscribedWorkteams
   */
  readonly subscribedWorkteams: SageMakerSubscribedWorkteam[];

  /**
   * @schema SageMakerListSubscribedWorkteamsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListTagsInput
 */
export interface SageMakerListTagsInput {
  /**
   * @schema SageMakerListTagsInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema SageMakerListTagsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListTagsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SageMakerListTagsOutput
 */
export interface SageMakerListTagsOutput {
  /**
   * @schema SageMakerListTagsOutput#Tags
   */
  readonly tags?: SageMakerTag[];

  /**
   * @schema SageMakerListTagsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListTrainingJobsRequest
 */
export interface SageMakerListTrainingJobsRequest {
  /**
   * @schema SageMakerListTrainingJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListTrainingJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListTrainingJobsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema SageMakerListTrainingJobsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListTrainingJobsRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema SageMakerListTrainingJobsRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema SageMakerListTrainingJobsRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema SageMakerListTrainingJobsRequest#StatusEquals
   */
  readonly statusEquals?: string;

  /**
   * @schema SageMakerListTrainingJobsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListTrainingJobsRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema SageMakerListTrainingJobsResponse
 */
export interface SageMakerListTrainingJobsResponse {
  /**
   * @schema SageMakerListTrainingJobsResponse#TrainingJobSummaries
   */
  readonly trainingJobSummaries: SageMakerTrainingJobSummary[];

  /**
   * @schema SageMakerListTrainingJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListTrainingJobsForHyperParameterTuningJobRequest
 */
export interface SageMakerListTrainingJobsForHyperParameterTuningJobRequest {
  /**
   * @schema SageMakerListTrainingJobsForHyperParameterTuningJobRequest#HyperParameterTuningJobName
   */
  readonly hyperParameterTuningJobName: string;

  /**
   * @schema SageMakerListTrainingJobsForHyperParameterTuningJobRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListTrainingJobsForHyperParameterTuningJobRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListTrainingJobsForHyperParameterTuningJobRequest#StatusEquals
   */
  readonly statusEquals?: string;

  /**
   * @schema SageMakerListTrainingJobsForHyperParameterTuningJobRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListTrainingJobsForHyperParameterTuningJobRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema SageMakerListTrainingJobsForHyperParameterTuningJobResponse
 */
export interface SageMakerListTrainingJobsForHyperParameterTuningJobResponse {
  /**
   * @schema SageMakerListTrainingJobsForHyperParameterTuningJobResponse#TrainingJobSummaries
   */
  readonly trainingJobSummaries: SageMakerHyperParameterTrainingJobSummary[];

  /**
   * @schema SageMakerListTrainingJobsForHyperParameterTuningJobResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListTransformJobsRequest
 */
export interface SageMakerListTransformJobsRequest {
  /**
   * @schema SageMakerListTransformJobsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema SageMakerListTransformJobsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema SageMakerListTransformJobsRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema SageMakerListTransformJobsRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema SageMakerListTransformJobsRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema SageMakerListTransformJobsRequest#StatusEquals
   */
  readonly statusEquals?: string;

  /**
   * @schema SageMakerListTransformJobsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListTransformJobsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListTransformJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListTransformJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SageMakerListTransformJobsResponse
 */
export interface SageMakerListTransformJobsResponse {
  /**
   * @schema SageMakerListTransformJobsResponse#TransformJobSummaries
   */
  readonly transformJobSummaries: SageMakerTransformJobSummary[];

  /**
   * @schema SageMakerListTransformJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListTrialComponentsRequest
 */
export interface SageMakerListTrialComponentsRequest {
  /**
   * @schema SageMakerListTrialComponentsRequest#ExperimentName
   */
  readonly experimentName?: string;

  /**
   * @schema SageMakerListTrialComponentsRequest#TrialName
   */
  readonly trialName?: string;

  /**
   * @schema SageMakerListTrialComponentsRequest#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema SageMakerListTrialComponentsRequest#CreatedAfter
   */
  readonly createdAfter?: string;

  /**
   * @schema SageMakerListTrialComponentsRequest#CreatedBefore
   */
  readonly createdBefore?: string;

  /**
   * @schema SageMakerListTrialComponentsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListTrialComponentsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListTrialComponentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListTrialComponentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListTrialComponentsResponse
 */
export interface SageMakerListTrialComponentsResponse {
  /**
   * @schema SageMakerListTrialComponentsResponse#TrialComponentSummaries
   */
  readonly trialComponentSummaries?: SageMakerTrialComponentSummary[];

  /**
   * @schema SageMakerListTrialComponentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListTrialsRequest
 */
export interface SageMakerListTrialsRequest {
  /**
   * @schema SageMakerListTrialsRequest#ExperimentName
   */
  readonly experimentName?: string;

  /**
   * @schema SageMakerListTrialsRequest#TrialComponentName
   */
  readonly trialComponentName?: string;

  /**
   * @schema SageMakerListTrialsRequest#CreatedAfter
   */
  readonly createdAfter?: string;

  /**
   * @schema SageMakerListTrialsRequest#CreatedBefore
   */
  readonly createdBefore?: string;

  /**
   * @schema SageMakerListTrialsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListTrialsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListTrialsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListTrialsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListTrialsResponse
 */
export interface SageMakerListTrialsResponse {
  /**
   * @schema SageMakerListTrialsResponse#TrialSummaries
   */
  readonly trialSummaries?: SageMakerTrialSummary[];

  /**
   * @schema SageMakerListTrialsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListUserProfilesRequest
 */
export interface SageMakerListUserProfilesRequest {
  /**
   * @schema SageMakerListUserProfilesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListUserProfilesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SageMakerListUserProfilesRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListUserProfilesRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListUserProfilesRequest#DomainIdEquals
   */
  readonly domainIdEquals?: string;

  /**
   * @schema SageMakerListUserProfilesRequest#UserProfileNameContains
   */
  readonly userProfileNameContains?: string;

}

/**
 * @schema SageMakerListUserProfilesResponse
 */
export interface SageMakerListUserProfilesResponse {
  /**
   * @schema SageMakerListUserProfilesResponse#UserProfiles
   */
  readonly userProfiles?: SageMakerUserProfileDetails[];

  /**
   * @schema SageMakerListUserProfilesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListWorkforcesRequest
 */
export interface SageMakerListWorkforcesRequest {
  /**
   * @schema SageMakerListWorkforcesRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListWorkforcesRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListWorkforcesRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema SageMakerListWorkforcesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListWorkforcesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SageMakerListWorkforcesResponse
 */
export interface SageMakerListWorkforcesResponse {
  /**
   * @schema SageMakerListWorkforcesResponse#Workforces
   */
  readonly workforces: SageMakerWorkforce[];

  /**
   * @schema SageMakerListWorkforcesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerListWorkteamsRequest
 */
export interface SageMakerListWorkteamsRequest {
  /**
   * @schema SageMakerListWorkteamsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerListWorkteamsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerListWorkteamsRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema SageMakerListWorkteamsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerListWorkteamsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SageMakerListWorkteamsResponse
 */
export interface SageMakerListWorkteamsResponse {
  /**
   * @schema SageMakerListWorkteamsResponse#Workteams
   */
  readonly workteams: SageMakerWorkteam[];

  /**
   * @schema SageMakerListWorkteamsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerRenderUiTemplateRequest
 */
export interface SageMakerRenderUiTemplateRequest {
  /**
   * @schema SageMakerRenderUiTemplateRequest#UiTemplate
   */
  readonly uiTemplate?: SageMakerUiTemplate;

  /**
   * @schema SageMakerRenderUiTemplateRequest#Task
   */
  readonly task: SageMakerRenderableTask;

  /**
   * @schema SageMakerRenderUiTemplateRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema SageMakerRenderUiTemplateRequest#HumanTaskUiArn
   */
  readonly humanTaskUiArn?: string;

}

/**
 * @schema SageMakerRenderUiTemplateResponse
 */
export interface SageMakerRenderUiTemplateResponse {
  /**
   * @schema SageMakerRenderUiTemplateResponse#RenderedContent
   */
  readonly renderedContent: string;

  /**
   * @schema SageMakerRenderUiTemplateResponse#Errors
   */
  readonly errors: SageMakerRenderingError[];

}

/**
 * @schema SageMakerSearchRequest
 */
export interface SageMakerSearchRequest {
  /**
   * @schema SageMakerSearchRequest#Resource
   */
  readonly resource: string;

  /**
   * @schema SageMakerSearchRequest#SearchExpression
   */
  readonly searchExpression?: SageMakerSearchExpression;

  /**
   * @schema SageMakerSearchRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SageMakerSearchRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SageMakerSearchRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SageMakerSearchRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SageMakerSearchResponse
 */
export interface SageMakerSearchResponse {
  /**
   * @schema SageMakerSearchResponse#Results
   */
  readonly results?: SageMakerSearchRecord[];

  /**
   * @schema SageMakerSearchResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SageMakerStartMonitoringScheduleRequest
 */
export interface SageMakerStartMonitoringScheduleRequest {
  /**
   * @schema SageMakerStartMonitoringScheduleRequest#MonitoringScheduleName
   */
  readonly monitoringScheduleName: string;

}

/**
 * @schema SageMakerStartNotebookInstanceInput
 */
export interface SageMakerStartNotebookInstanceInput {
  /**
   * @schema SageMakerStartNotebookInstanceInput#NotebookInstanceName
   */
  readonly notebookInstanceName: string;

}

/**
 * @schema SageMakerStopAutoMlJobRequest
 */
export interface SageMakerStopAutoMlJobRequest {
  /**
   * @schema SageMakerStopAutoMlJobRequest#AutoMLJobName
   */
  readonly autoMlJobName: string;

}

/**
 * @schema SageMakerStopCompilationJobRequest
 */
export interface SageMakerStopCompilationJobRequest {
  /**
   * @schema SageMakerStopCompilationJobRequest#CompilationJobName
   */
  readonly compilationJobName: string;

}

/**
 * @schema SageMakerStopHyperParameterTuningJobRequest
 */
export interface SageMakerStopHyperParameterTuningJobRequest {
  /**
   * @schema SageMakerStopHyperParameterTuningJobRequest#HyperParameterTuningJobName
   */
  readonly hyperParameterTuningJobName: string;

}

/**
 * @schema SageMakerStopLabelingJobRequest
 */
export interface SageMakerStopLabelingJobRequest {
  /**
   * @schema SageMakerStopLabelingJobRequest#LabelingJobName
   */
  readonly labelingJobName: string;

}

/**
 * @schema SageMakerStopMonitoringScheduleRequest
 */
export interface SageMakerStopMonitoringScheduleRequest {
  /**
   * @schema SageMakerStopMonitoringScheduleRequest#MonitoringScheduleName
   */
  readonly monitoringScheduleName: string;

}

/**
 * @schema SageMakerStopNotebookInstanceInput
 */
export interface SageMakerStopNotebookInstanceInput {
  /**
   * @schema SageMakerStopNotebookInstanceInput#NotebookInstanceName
   */
  readonly notebookInstanceName: string;

}

/**
 * @schema SageMakerStopProcessingJobRequest
 */
export interface SageMakerStopProcessingJobRequest {
  /**
   * @schema SageMakerStopProcessingJobRequest#ProcessingJobName
   */
  readonly processingJobName: string;

}

/**
 * @schema SageMakerStopTrainingJobRequest
 */
export interface SageMakerStopTrainingJobRequest {
  /**
   * @schema SageMakerStopTrainingJobRequest#TrainingJobName
   */
  readonly trainingJobName: string;

}

/**
 * @schema SageMakerStopTransformJobRequest
 */
export interface SageMakerStopTransformJobRequest {
  /**
   * @schema SageMakerStopTransformJobRequest#TransformJobName
   */
  readonly transformJobName: string;

}

/**
 * @schema SageMakerUpdateAppImageConfigRequest
 */
export interface SageMakerUpdateAppImageConfigRequest {
  /**
   * @schema SageMakerUpdateAppImageConfigRequest#AppImageConfigName
   */
  readonly appImageConfigName: string;

  /**
   * @schema SageMakerUpdateAppImageConfigRequest#KernelGatewayImageConfig
   */
  readonly kernelGatewayImageConfig?: SageMakerKernelGatewayImageConfig;

}

/**
 * @schema SageMakerUpdateAppImageConfigResponse
 */
export interface SageMakerUpdateAppImageConfigResponse {
  /**
   * @schema SageMakerUpdateAppImageConfigResponse#AppImageConfigArn
   */
  readonly appImageConfigArn?: string;

}

/**
 * @schema SageMakerUpdateCodeRepositoryInput
 */
export interface SageMakerUpdateCodeRepositoryInput {
  /**
   * @schema SageMakerUpdateCodeRepositoryInput#CodeRepositoryName
   */
  readonly codeRepositoryName: string;

  /**
   * @schema SageMakerUpdateCodeRepositoryInput#GitConfig
   */
  readonly gitConfig?: SageMakerGitConfigForUpdate;

}

/**
 * @schema SageMakerUpdateCodeRepositoryOutput
 */
export interface SageMakerUpdateCodeRepositoryOutput {
  /**
   * @schema SageMakerUpdateCodeRepositoryOutput#CodeRepositoryArn
   */
  readonly codeRepositoryArn: string;

}

/**
 * @schema SageMakerUpdateDomainRequest
 */
export interface SageMakerUpdateDomainRequest {
  /**
   * @schema SageMakerUpdateDomainRequest#DomainId
   */
  readonly domainId: string;

  /**
   * @schema SageMakerUpdateDomainRequest#DefaultUserSettings
   */
  readonly defaultUserSettings?: SageMakerUserSettings;

}

/**
 * @schema SageMakerUpdateDomainResponse
 */
export interface SageMakerUpdateDomainResponse {
  /**
   * @schema SageMakerUpdateDomainResponse#DomainArn
   */
  readonly domainArn?: string;

}

/**
 * @schema SageMakerUpdateEndpointInput
 */
export interface SageMakerUpdateEndpointInput {
  /**
   * @schema SageMakerUpdateEndpointInput#EndpointName
   */
  readonly endpointName: string;

  /**
   * @schema SageMakerUpdateEndpointInput#EndpointConfigName
   */
  readonly endpointConfigName: string;

  /**
   * @schema SageMakerUpdateEndpointInput#RetainAllVariantProperties
   */
  readonly retainAllVariantProperties?: boolean;

  /**
   * @schema SageMakerUpdateEndpointInput#ExcludeRetainedVariantProperties
   */
  readonly excludeRetainedVariantProperties?: SageMakerVariantProperty[];

}

/**
 * @schema SageMakerUpdateEndpointOutput
 */
export interface SageMakerUpdateEndpointOutput {
  /**
   * @schema SageMakerUpdateEndpointOutput#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema SageMakerUpdateEndpointWeightsAndCapacitiesInput
 */
export interface SageMakerUpdateEndpointWeightsAndCapacitiesInput {
  /**
   * @schema SageMakerUpdateEndpointWeightsAndCapacitiesInput#EndpointName
   */
  readonly endpointName: string;

  /**
   * @schema SageMakerUpdateEndpointWeightsAndCapacitiesInput#DesiredWeightsAndCapacities
   */
  readonly desiredWeightsAndCapacities: SageMakerDesiredWeightAndCapacity[];

}

/**
 * @schema SageMakerUpdateEndpointWeightsAndCapacitiesOutput
 */
export interface SageMakerUpdateEndpointWeightsAndCapacitiesOutput {
  /**
   * @schema SageMakerUpdateEndpointWeightsAndCapacitiesOutput#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema SageMakerUpdateExperimentRequest
 */
export interface SageMakerUpdateExperimentRequest {
  /**
   * @schema SageMakerUpdateExperimentRequest#ExperimentName
   */
  readonly experimentName: string;

  /**
   * @schema SageMakerUpdateExperimentRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SageMakerUpdateExperimentRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema SageMakerUpdateExperimentResponse
 */
export interface SageMakerUpdateExperimentResponse {
  /**
   * @schema SageMakerUpdateExperimentResponse#ExperimentArn
   */
  readonly experimentArn?: string;

}

/**
 * @schema SageMakerUpdateImageRequest
 */
export interface SageMakerUpdateImageRequest {
  /**
   * @schema SageMakerUpdateImageRequest#DeleteProperties
   */
  readonly deleteProperties?: string[];

  /**
   * @schema SageMakerUpdateImageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SageMakerUpdateImageRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SageMakerUpdateImageRequest#ImageName
   */
  readonly imageName: string;

  /**
   * @schema SageMakerUpdateImageRequest#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema SageMakerUpdateImageResponse
 */
export interface SageMakerUpdateImageResponse {
  /**
   * @schema SageMakerUpdateImageResponse#ImageArn
   */
  readonly imageArn?: string;

}

/**
 * @schema SageMakerUpdateMonitoringScheduleRequest
 */
export interface SageMakerUpdateMonitoringScheduleRequest {
  /**
   * @schema SageMakerUpdateMonitoringScheduleRequest#MonitoringScheduleName
   */
  readonly monitoringScheduleName: string;

  /**
   * @schema SageMakerUpdateMonitoringScheduleRequest#MonitoringScheduleConfig
   */
  readonly monitoringScheduleConfig: SageMakerMonitoringScheduleConfig;

}

/**
 * @schema SageMakerUpdateMonitoringScheduleResponse
 */
export interface SageMakerUpdateMonitoringScheduleResponse {
  /**
   * @schema SageMakerUpdateMonitoringScheduleResponse#MonitoringScheduleArn
   */
  readonly monitoringScheduleArn: string;

}

/**
 * @schema SageMakerUpdateNotebookInstanceInput
 */
export interface SageMakerUpdateNotebookInstanceInput {
  /**
   * @schema SageMakerUpdateNotebookInstanceInput#NotebookInstanceName
   */
  readonly notebookInstanceName: string;

  /**
   * @schema SageMakerUpdateNotebookInstanceInput#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema SageMakerUpdateNotebookInstanceInput#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema SageMakerUpdateNotebookInstanceInput#LifecycleConfigName
   */
  readonly lifecycleConfigName?: string;

  /**
   * @schema SageMakerUpdateNotebookInstanceInput#DisassociateLifecycleConfig
   */
  readonly disassociateLifecycleConfig?: boolean;

  /**
   * @schema SageMakerUpdateNotebookInstanceInput#VolumeSizeInGB
   */
  readonly volumeSizeInGb?: number;

  /**
   * @schema SageMakerUpdateNotebookInstanceInput#DefaultCodeRepository
   */
  readonly defaultCodeRepository?: string;

  /**
   * @schema SageMakerUpdateNotebookInstanceInput#AdditionalCodeRepositories
   */
  readonly additionalCodeRepositories?: string[];

  /**
   * @schema SageMakerUpdateNotebookInstanceInput#AcceleratorTypes
   */
  readonly acceleratorTypes?: string[];

  /**
   * @schema SageMakerUpdateNotebookInstanceInput#DisassociateAcceleratorTypes
   */
  readonly disassociateAcceleratorTypes?: boolean;

  /**
   * @schema SageMakerUpdateNotebookInstanceInput#DisassociateDefaultCodeRepository
   */
  readonly disassociateDefaultCodeRepository?: boolean;

  /**
   * @schema SageMakerUpdateNotebookInstanceInput#DisassociateAdditionalCodeRepositories
   */
  readonly disassociateAdditionalCodeRepositories?: boolean;

  /**
   * @schema SageMakerUpdateNotebookInstanceInput#RootAccess
   */
  readonly rootAccess?: string;

}

/**
 * @schema SageMakerUpdateNotebookInstanceOutput
 */
export interface SageMakerUpdateNotebookInstanceOutput {
}

/**
 * @schema SageMakerUpdateNotebookInstanceLifecycleConfigInput
 */
export interface SageMakerUpdateNotebookInstanceLifecycleConfigInput {
  /**
   * @schema SageMakerUpdateNotebookInstanceLifecycleConfigInput#NotebookInstanceLifecycleConfigName
   */
  readonly notebookInstanceLifecycleConfigName: string;

  /**
   * @schema SageMakerUpdateNotebookInstanceLifecycleConfigInput#OnCreate
   */
  readonly onCreate?: SageMakerNotebookInstanceLifecycleHook[];

  /**
   * @schema SageMakerUpdateNotebookInstanceLifecycleConfigInput#OnStart
   */
  readonly onStart?: SageMakerNotebookInstanceLifecycleHook[];

}

/**
 * @schema SageMakerUpdateNotebookInstanceLifecycleConfigOutput
 */
export interface SageMakerUpdateNotebookInstanceLifecycleConfigOutput {
}

/**
 * @schema SageMakerUpdateTrialRequest
 */
export interface SageMakerUpdateTrialRequest {
  /**
   * @schema SageMakerUpdateTrialRequest#TrialName
   */
  readonly trialName: string;

  /**
   * @schema SageMakerUpdateTrialRequest#DisplayName
   */
  readonly displayName?: string;

}

/**
 * @schema SageMakerUpdateTrialResponse
 */
export interface SageMakerUpdateTrialResponse {
  /**
   * @schema SageMakerUpdateTrialResponse#TrialArn
   */
  readonly trialArn?: string;

}

/**
 * @schema SageMakerUpdateTrialComponentRequest
 */
export interface SageMakerUpdateTrialComponentRequest {
  /**
   * @schema SageMakerUpdateTrialComponentRequest#TrialComponentName
   */
  readonly trialComponentName: string;

  /**
   * @schema SageMakerUpdateTrialComponentRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SageMakerUpdateTrialComponentRequest#Status
   */
  readonly status?: SageMakerTrialComponentStatus;

  /**
   * @schema SageMakerUpdateTrialComponentRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema SageMakerUpdateTrialComponentRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema SageMakerUpdateTrialComponentRequest#Parameters
   */
  readonly parameters?: { [key: string]: SageMakerTrialComponentParameterValue };

  /**
   * @schema SageMakerUpdateTrialComponentRequest#ParametersToRemove
   */
  readonly parametersToRemove?: string[];

  /**
   * @schema SageMakerUpdateTrialComponentRequest#InputArtifacts
   */
  readonly inputArtifacts?: { [key: string]: SageMakerTrialComponentArtifact };

  /**
   * @schema SageMakerUpdateTrialComponentRequest#InputArtifactsToRemove
   */
  readonly inputArtifactsToRemove?: string[];

  /**
   * @schema SageMakerUpdateTrialComponentRequest#OutputArtifacts
   */
  readonly outputArtifacts?: { [key: string]: SageMakerTrialComponentArtifact };

  /**
   * @schema SageMakerUpdateTrialComponentRequest#OutputArtifactsToRemove
   */
  readonly outputArtifactsToRemove?: string[];

}

/**
 * @schema SageMakerUpdateTrialComponentResponse
 */
export interface SageMakerUpdateTrialComponentResponse {
  /**
   * @schema SageMakerUpdateTrialComponentResponse#TrialComponentArn
   */
  readonly trialComponentArn?: string;

}

/**
 * @schema SageMakerUpdateUserProfileRequest
 */
export interface SageMakerUpdateUserProfileRequest {
  /**
   * @schema SageMakerUpdateUserProfileRequest#DomainId
   */
  readonly domainId: string;

  /**
   * @schema SageMakerUpdateUserProfileRequest#UserProfileName
   */
  readonly userProfileName: string;

  /**
   * @schema SageMakerUpdateUserProfileRequest#UserSettings
   */
  readonly userSettings?: SageMakerUserSettings;

}

/**
 * @schema SageMakerUpdateUserProfileResponse
 */
export interface SageMakerUpdateUserProfileResponse {
  /**
   * @schema SageMakerUpdateUserProfileResponse#UserProfileArn
   */
  readonly userProfileArn?: string;

}

/**
 * @schema SageMakerUpdateWorkforceRequest
 */
export interface SageMakerUpdateWorkforceRequest {
  /**
   * @schema SageMakerUpdateWorkforceRequest#WorkforceName
   */
  readonly workforceName: string;

  /**
   * @schema SageMakerUpdateWorkforceRequest#SourceIpConfig
   */
  readonly sourceIpConfig?: SageMakerSourceIpConfig;

  /**
   * @schema SageMakerUpdateWorkforceRequest#OidcConfig
   */
  readonly oidcConfig?: SageMakerOidcConfig;

}

/**
 * @schema SageMakerUpdateWorkforceResponse
 */
export interface SageMakerUpdateWorkforceResponse {
  /**
   * @schema SageMakerUpdateWorkforceResponse#Workforce
   */
  readonly workforce: SageMakerWorkforce;

}

/**
 * @schema SageMakerUpdateWorkteamRequest
 */
export interface SageMakerUpdateWorkteamRequest {
  /**
   * @schema SageMakerUpdateWorkteamRequest#WorkteamName
   */
  readonly workteamName: string;

  /**
   * @schema SageMakerUpdateWorkteamRequest#MemberDefinitions
   */
  readonly memberDefinitions?: SageMakerMemberDefinition[];

  /**
   * @schema SageMakerUpdateWorkteamRequest#Description
   */
  readonly description?: string;

  /**
   * @schema SageMakerUpdateWorkteamRequest#NotificationConfiguration
   */
  readonly notificationConfiguration?: SageMakerNotificationConfiguration;

}

/**
 * @schema SageMakerUpdateWorkteamResponse
 */
export interface SageMakerUpdateWorkteamResponse {
  /**
   * @schema SageMakerUpdateWorkteamResponse#Workteam
   */
  readonly workteam: SageMakerWorkteam;

}

/**
 * @schema SageMakerTag
 */
export interface SageMakerTag {
  /**
   * @schema SageMakerTag#Key
   */
  readonly key: string;

  /**
   * @schema SageMakerTag#Value
   */
  readonly value: string;

}

/**
 * @schema SageMakerTrainingSpecification
 */
export interface SageMakerTrainingSpecification {
  /**
   * @schema SageMakerTrainingSpecification#TrainingImage
   */
  readonly trainingImage: string;

  /**
   * @schema SageMakerTrainingSpecification#TrainingImageDigest
   */
  readonly trainingImageDigest?: string;

  /**
   * @schema SageMakerTrainingSpecification#SupportedHyperParameters
   */
  readonly supportedHyperParameters?: SageMakerHyperParameterSpecification[];

  /**
   * @schema SageMakerTrainingSpecification#SupportedTrainingInstanceTypes
   */
  readonly supportedTrainingInstanceTypes: string[];

  /**
   * @schema SageMakerTrainingSpecification#SupportsDistributedTraining
   */
  readonly supportsDistributedTraining?: boolean;

  /**
   * @schema SageMakerTrainingSpecification#MetricDefinitions
   */
  readonly metricDefinitions?: SageMakerMetricDefinition[];

  /**
   * @schema SageMakerTrainingSpecification#TrainingChannels
   */
  readonly trainingChannels: SageMakerChannelSpecification[];

  /**
   * @schema SageMakerTrainingSpecification#SupportedTuningJobObjectiveMetrics
   */
  readonly supportedTuningJobObjectiveMetrics?: SageMakerHyperParameterTuningJobObjective[];

}

/**
 * @schema SageMakerInferenceSpecification
 */
export interface SageMakerInferenceSpecification {
  /**
   * @schema SageMakerInferenceSpecification#Containers
   */
  readonly containers: SageMakerModelPackageContainerDefinition[];

  /**
   * @schema SageMakerInferenceSpecification#SupportedTransformInstanceTypes
   */
  readonly supportedTransformInstanceTypes: string[];

  /**
   * @schema SageMakerInferenceSpecification#SupportedRealtimeInferenceInstanceTypes
   */
  readonly supportedRealtimeInferenceInstanceTypes: string[];

  /**
   * @schema SageMakerInferenceSpecification#SupportedContentTypes
   */
  readonly supportedContentTypes: string[];

  /**
   * @schema SageMakerInferenceSpecification#SupportedResponseMIMETypes
   */
  readonly supportedResponseMimeTypes: string[];

}

/**
 * @schema SageMakerAlgorithmValidationSpecification
 */
export interface SageMakerAlgorithmValidationSpecification {
  /**
   * @schema SageMakerAlgorithmValidationSpecification#ValidationRole
   */
  readonly validationRole: string;

  /**
   * @schema SageMakerAlgorithmValidationSpecification#ValidationProfiles
   */
  readonly validationProfiles: SageMakerAlgorithmValidationProfile[];

}

/**
 * @schema SageMakerResourceSpec
 */
export interface SageMakerResourceSpec {
  /**
   * @schema SageMakerResourceSpec#SageMakerImageArn
   */
  readonly sageMakerImageArn?: string;

  /**
   * @schema SageMakerResourceSpec#SageMakerImageVersionArn
   */
  readonly sageMakerImageVersionArn?: string;

  /**
   * @schema SageMakerResourceSpec#InstanceType
   */
  readonly instanceType?: string;

}

/**
 * @schema SageMakerKernelGatewayImageConfig
 */
export interface SageMakerKernelGatewayImageConfig {
  /**
   * @schema SageMakerKernelGatewayImageConfig#KernelSpecs
   */
  readonly kernelSpecs: SageMakerKernelSpec[];

  /**
   * @schema SageMakerKernelGatewayImageConfig#FileSystemConfig
   */
  readonly fileSystemConfig?: SageMakerFileSystemConfig;

}

/**
 * @schema SageMakerAutoMlChannel
 */
export interface SageMakerAutoMlChannel {
  /**
   * @schema SageMakerAutoMlChannel#DataSource
   */
  readonly dataSource: SageMakerAutoMlDataSource;

  /**
   * @schema SageMakerAutoMlChannel#CompressionType
   */
  readonly compressionType?: string;

  /**
   * @schema SageMakerAutoMlChannel#TargetAttributeName
   */
  readonly targetAttributeName: string;

}

/**
 * @schema SageMakerAutoMlOutputDataConfig
 */
export interface SageMakerAutoMlOutputDataConfig {
  /**
   * @schema SageMakerAutoMlOutputDataConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SageMakerAutoMlOutputDataConfig#S3OutputPath
   */
  readonly s3OutputPath: string;

}

/**
 * @schema SageMakerAutoMlJobObjective
 */
export interface SageMakerAutoMlJobObjective {
  /**
   * @schema SageMakerAutoMlJobObjective#MetricName
   */
  readonly metricName: string;

}

/**
 * @schema SageMakerAutoMlJobConfig
 */
export interface SageMakerAutoMlJobConfig {
  /**
   * @schema SageMakerAutoMlJobConfig#CompletionCriteria
   */
  readonly completionCriteria?: SageMakerAutoMlJobCompletionCriteria;

  /**
   * @schema SageMakerAutoMlJobConfig#SecurityConfig
   */
  readonly securityConfig?: SageMakerAutoMlSecurityConfig;

}

/**
 * @schema SageMakerGitConfig
 */
export interface SageMakerGitConfig {
  /**
   * @schema SageMakerGitConfig#RepositoryUrl
   */
  readonly repositoryUrl: string;

  /**
   * @schema SageMakerGitConfig#Branch
   */
  readonly branch?: string;

  /**
   * @schema SageMakerGitConfig#SecretArn
   */
  readonly secretArn?: string;

}

/**
 * @schema SageMakerInputConfig
 */
export interface SageMakerInputConfig {
  /**
   * @schema SageMakerInputConfig#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema SageMakerInputConfig#DataInputConfig
   */
  readonly dataInputConfig: string;

  /**
   * @schema SageMakerInputConfig#Framework
   */
  readonly framework: string;

}

/**
 * @schema SageMakerOutputConfig
 */
export interface SageMakerOutputConfig {
  /**
   * @schema SageMakerOutputConfig#S3OutputLocation
   */
  readonly s3OutputLocation: string;

  /**
   * @schema SageMakerOutputConfig#TargetDevice
   */
  readonly targetDevice?: string;

  /**
   * @schema SageMakerOutputConfig#TargetPlatform
   */
  readonly targetPlatform?: SageMakerTargetPlatform;

  /**
   * @schema SageMakerOutputConfig#CompilerOptions
   */
  readonly compilerOptions?: string;

}

/**
 * @schema SageMakerStoppingCondition
 */
export interface SageMakerStoppingCondition {
  /**
   * @schema SageMakerStoppingCondition#MaxRuntimeInSeconds
   */
  readonly maxRuntimeInSeconds?: number;

  /**
   * @schema SageMakerStoppingCondition#MaxWaitTimeInSeconds
   */
  readonly maxWaitTimeInSeconds?: number;

}

/**
 * @schema SageMakerUserSettings
 */
export interface SageMakerUserSettings {
  /**
   * @schema SageMakerUserSettings#ExecutionRole
   */
  readonly executionRole?: string;

  /**
   * @schema SageMakerUserSettings#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema SageMakerUserSettings#SharingSettings
   */
  readonly sharingSettings?: SageMakerSharingSettings;

  /**
   * @schema SageMakerUserSettings#JupyterServerAppSettings
   */
  readonly jupyterServerAppSettings?: SageMakerJupyterServerAppSettings;

  /**
   * @schema SageMakerUserSettings#KernelGatewayAppSettings
   */
  readonly kernelGatewayAppSettings?: SageMakerKernelGatewayAppSettings;

  /**
   * @schema SageMakerUserSettings#TensorBoardAppSettings
   */
  readonly tensorBoardAppSettings?: SageMakerTensorBoardAppSettings;

}

/**
 * @schema SageMakerProductionVariant
 */
export interface SageMakerProductionVariant {
  /**
   * @schema SageMakerProductionVariant#VariantName
   */
  readonly variantName: string;

  /**
   * @schema SageMakerProductionVariant#ModelName
   */
  readonly modelName: string;

  /**
   * @schema SageMakerProductionVariant#InitialInstanceCount
   */
  readonly initialInstanceCount: number;

  /**
   * @schema SageMakerProductionVariant#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema SageMakerProductionVariant#InitialVariantWeight
   */
  readonly initialVariantWeight?: number;

  /**
   * @schema SageMakerProductionVariant#AcceleratorType
   */
  readonly acceleratorType?: string;

}

/**
 * @schema SageMakerDataCaptureConfig
 */
export interface SageMakerDataCaptureConfig {
  /**
   * @schema SageMakerDataCaptureConfig#EnableCapture
   */
  readonly enableCapture?: boolean;

  /**
   * @schema SageMakerDataCaptureConfig#InitialSamplingPercentage
   */
  readonly initialSamplingPercentage: number;

  /**
   * @schema SageMakerDataCaptureConfig#DestinationS3Uri
   */
  readonly destinationS3Uri: string;

  /**
   * @schema SageMakerDataCaptureConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SageMakerDataCaptureConfig#CaptureOptions
   */
  readonly captureOptions: SageMakerCaptureOption[];

  /**
   * @schema SageMakerDataCaptureConfig#CaptureContentTypeHeader
   */
  readonly captureContentTypeHeader?: SageMakerCaptureContentTypeHeader;

}

/**
 * @schema SageMakerHumanLoopRequestSource
 */
export interface SageMakerHumanLoopRequestSource {
  /**
   * @schema SageMakerHumanLoopRequestSource#AwsManagedHumanLoopRequestSource
   */
  readonly awsManagedHumanLoopRequestSource: string;

}

/**
 * @schema SageMakerHumanLoopActivationConfig
 */
export interface SageMakerHumanLoopActivationConfig {
  /**
   * @schema SageMakerHumanLoopActivationConfig#HumanLoopActivationConditionsConfig
   */
  readonly humanLoopActivationConditionsConfig: SageMakerHumanLoopActivationConditionsConfig;

}

/**
 * @schema SageMakerHumanLoopConfig
 */
export interface SageMakerHumanLoopConfig {
  /**
   * @schema SageMakerHumanLoopConfig#WorkteamArn
   */
  readonly workteamArn: string;

  /**
   * @schema SageMakerHumanLoopConfig#HumanTaskUiArn
   */
  readonly humanTaskUiArn: string;

  /**
   * @schema SageMakerHumanLoopConfig#TaskTitle
   */
  readonly taskTitle: string;

  /**
   * @schema SageMakerHumanLoopConfig#TaskDescription
   */
  readonly taskDescription: string;

  /**
   * @schema SageMakerHumanLoopConfig#TaskCount
   */
  readonly taskCount: number;

  /**
   * @schema SageMakerHumanLoopConfig#TaskAvailabilityLifetimeInSeconds
   */
  readonly taskAvailabilityLifetimeInSeconds?: number;

  /**
   * @schema SageMakerHumanLoopConfig#TaskTimeLimitInSeconds
   */
  readonly taskTimeLimitInSeconds?: number;

  /**
   * @schema SageMakerHumanLoopConfig#TaskKeywords
   */
  readonly taskKeywords?: string[];

  /**
   * @schema SageMakerHumanLoopConfig#PublicWorkforceTaskPrice
   */
  readonly publicWorkforceTaskPrice?: SageMakerPublicWorkforceTaskPrice;

}

/**
 * @schema SageMakerFlowDefinitionOutputConfig
 */
export interface SageMakerFlowDefinitionOutputConfig {
  /**
   * @schema SageMakerFlowDefinitionOutputConfig#S3OutputPath
   */
  readonly s3OutputPath: string;

  /**
   * @schema SageMakerFlowDefinitionOutputConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema SageMakerUiTemplate
 */
export interface SageMakerUiTemplate {
  /**
   * @schema SageMakerUiTemplate#Content
   */
  readonly content: string;

}

/**
 * @schema SageMakerHyperParameterTuningJobConfig
 */
export interface SageMakerHyperParameterTuningJobConfig {
  /**
   * @schema SageMakerHyperParameterTuningJobConfig#Strategy
   */
  readonly strategy: string;

  /**
   * @schema SageMakerHyperParameterTuningJobConfig#HyperParameterTuningJobObjective
   */
  readonly hyperParameterTuningJobObjective?: SageMakerHyperParameterTuningJobObjective;

  /**
   * @schema SageMakerHyperParameterTuningJobConfig#ResourceLimits
   */
  readonly resourceLimits: SageMakerResourceLimits;

  /**
   * @schema SageMakerHyperParameterTuningJobConfig#ParameterRanges
   */
  readonly parameterRanges?: SageMakerParameterRanges;

  /**
   * @schema SageMakerHyperParameterTuningJobConfig#TrainingJobEarlyStoppingType
   */
  readonly trainingJobEarlyStoppingType?: string;

  /**
   * @schema SageMakerHyperParameterTuningJobConfig#TuningJobCompletionCriteria
   */
  readonly tuningJobCompletionCriteria?: SageMakerTuningJobCompletionCriteria;

}

/**
 * @schema SageMakerHyperParameterTrainingJobDefinition
 */
export interface SageMakerHyperParameterTrainingJobDefinition {
  /**
   * @schema SageMakerHyperParameterTrainingJobDefinition#DefinitionName
   */
  readonly definitionName?: string;

  /**
   * @schema SageMakerHyperParameterTrainingJobDefinition#TuningObjective
   */
  readonly tuningObjective?: SageMakerHyperParameterTuningJobObjective;

  /**
   * @schema SageMakerHyperParameterTrainingJobDefinition#HyperParameterRanges
   */
  readonly hyperParameterRanges?: SageMakerParameterRanges;

  /**
   * @schema SageMakerHyperParameterTrainingJobDefinition#StaticHyperParameters
   */
  readonly staticHyperParameters?: { [key: string]: string };

  /**
   * @schema SageMakerHyperParameterTrainingJobDefinition#AlgorithmSpecification
   */
  readonly algorithmSpecification: SageMakerHyperParameterAlgorithmSpecification;

  /**
   * @schema SageMakerHyperParameterTrainingJobDefinition#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema SageMakerHyperParameterTrainingJobDefinition#InputDataConfig
   */
  readonly inputDataConfig?: SageMakerChannel[];

  /**
   * @schema SageMakerHyperParameterTrainingJobDefinition#VpcConfig
   */
  readonly vpcConfig?: SageMakerVpcConfig;

  /**
   * @schema SageMakerHyperParameterTrainingJobDefinition#OutputDataConfig
   */
  readonly outputDataConfig: SageMakerOutputDataConfig;

  /**
   * @schema SageMakerHyperParameterTrainingJobDefinition#ResourceConfig
   */
  readonly resourceConfig: SageMakerResourceConfig;

  /**
   * @schema SageMakerHyperParameterTrainingJobDefinition#StoppingCondition
   */
  readonly stoppingCondition: SageMakerStoppingCondition;

  /**
   * @schema SageMakerHyperParameterTrainingJobDefinition#EnableNetworkIsolation
   */
  readonly enableNetworkIsolation?: boolean;

  /**
   * @schema SageMakerHyperParameterTrainingJobDefinition#EnableInterContainerTrafficEncryption
   */
  readonly enableInterContainerTrafficEncryption?: boolean;

  /**
   * @schema SageMakerHyperParameterTrainingJobDefinition#EnableManagedSpotTraining
   */
  readonly enableManagedSpotTraining?: boolean;

  /**
   * @schema SageMakerHyperParameterTrainingJobDefinition#CheckpointConfig
   */
  readonly checkpointConfig?: SageMakerCheckpointConfig;

}

/**
 * @schema SageMakerHyperParameterTuningJobWarmStartConfig
 */
export interface SageMakerHyperParameterTuningJobWarmStartConfig {
  /**
   * @schema SageMakerHyperParameterTuningJobWarmStartConfig#ParentHyperParameterTuningJobs
   */
  readonly parentHyperParameterTuningJobs: SageMakerParentHyperParameterTuningJob[];

  /**
   * @schema SageMakerHyperParameterTuningJobWarmStartConfig#WarmStartType
   */
  readonly warmStartType: string;

}

/**
 * @schema SageMakerLabelingJobInputConfig
 */
export interface SageMakerLabelingJobInputConfig {
  /**
   * @schema SageMakerLabelingJobInputConfig#DataSource
   */
  readonly dataSource: SageMakerLabelingJobDataSource;

  /**
   * @schema SageMakerLabelingJobInputConfig#DataAttributes
   */
  readonly dataAttributes?: SageMakerLabelingJobDataAttributes;

}

/**
 * @schema SageMakerLabelingJobOutputConfig
 */
export interface SageMakerLabelingJobOutputConfig {
  /**
   * @schema SageMakerLabelingJobOutputConfig#S3OutputPath
   */
  readonly s3OutputPath: string;

  /**
   * @schema SageMakerLabelingJobOutputConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SageMakerLabelingJobOutputConfig#SnsTopicArn
   */
  readonly snsTopicArn?: string;

}

/**
 * @schema SageMakerLabelingJobStoppingConditions
 */
export interface SageMakerLabelingJobStoppingConditions {
  /**
   * @schema SageMakerLabelingJobStoppingConditions#MaxHumanLabeledObjectCount
   */
  readonly maxHumanLabeledObjectCount?: number;

  /**
   * @schema SageMakerLabelingJobStoppingConditions#MaxPercentageOfInputDatasetLabeled
   */
  readonly maxPercentageOfInputDatasetLabeled?: number;

}

/**
 * @schema SageMakerLabelingJobAlgorithmsConfig
 */
export interface SageMakerLabelingJobAlgorithmsConfig {
  /**
   * @schema SageMakerLabelingJobAlgorithmsConfig#LabelingJobAlgorithmSpecificationArn
   */
  readonly labelingJobAlgorithmSpecificationArn: string;

  /**
   * @schema SageMakerLabelingJobAlgorithmsConfig#InitialActiveLearningModelArn
   */
  readonly initialActiveLearningModelArn?: string;

  /**
   * @schema SageMakerLabelingJobAlgorithmsConfig#LabelingJobResourceConfig
   */
  readonly labelingJobResourceConfig?: SageMakerLabelingJobResourceConfig;

}

/**
 * @schema SageMakerHumanTaskConfig
 */
export interface SageMakerHumanTaskConfig {
  /**
   * @schema SageMakerHumanTaskConfig#WorkteamArn
   */
  readonly workteamArn: string;

  /**
   * @schema SageMakerHumanTaskConfig#UiConfig
   */
  readonly uiConfig: SageMakerUiConfig;

  /**
   * @schema SageMakerHumanTaskConfig#PreHumanTaskLambdaArn
   */
  readonly preHumanTaskLambdaArn: string;

  /**
   * @schema SageMakerHumanTaskConfig#TaskKeywords
   */
  readonly taskKeywords?: string[];

  /**
   * @schema SageMakerHumanTaskConfig#TaskTitle
   */
  readonly taskTitle: string;

  /**
   * @schema SageMakerHumanTaskConfig#TaskDescription
   */
  readonly taskDescription: string;

  /**
   * @schema SageMakerHumanTaskConfig#NumberOfHumanWorkersPerDataObject
   */
  readonly numberOfHumanWorkersPerDataObject: number;

  /**
   * @schema SageMakerHumanTaskConfig#TaskTimeLimitInSeconds
   */
  readonly taskTimeLimitInSeconds: number;

  /**
   * @schema SageMakerHumanTaskConfig#TaskAvailabilityLifetimeInSeconds
   */
  readonly taskAvailabilityLifetimeInSeconds?: number;

  /**
   * @schema SageMakerHumanTaskConfig#MaxConcurrentTaskCount
   */
  readonly maxConcurrentTaskCount?: number;

  /**
   * @schema SageMakerHumanTaskConfig#AnnotationConsolidationConfig
   */
  readonly annotationConsolidationConfig: SageMakerAnnotationConsolidationConfig;

  /**
   * @schema SageMakerHumanTaskConfig#PublicWorkforceTaskPrice
   */
  readonly publicWorkforceTaskPrice?: SageMakerPublicWorkforceTaskPrice;

}

/**
 * @schema SageMakerContainerDefinition
 */
export interface SageMakerContainerDefinition {
  /**
   * @schema SageMakerContainerDefinition#ContainerHostname
   */
  readonly containerHostname?: string;

  /**
   * @schema SageMakerContainerDefinition#Image
   */
  readonly image?: string;

  /**
   * @schema SageMakerContainerDefinition#ImageConfig
   */
  readonly imageConfig?: SageMakerImageConfig;

  /**
   * @schema SageMakerContainerDefinition#Mode
   */
  readonly mode?: string;

  /**
   * @schema SageMakerContainerDefinition#ModelDataUrl
   */
  readonly modelDataUrl?: string;

  /**
   * @schema SageMakerContainerDefinition#Environment
   */
  readonly environment?: { [key: string]: string };

  /**
   * @schema SageMakerContainerDefinition#ModelPackageName
   */
  readonly modelPackageName?: string;

}

/**
 * @schema SageMakerVpcConfig
 */
export interface SageMakerVpcConfig {
  /**
   * @schema SageMakerVpcConfig#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

  /**
   * @schema SageMakerVpcConfig#Subnets
   */
  readonly subnets: string[];

}

/**
 * @schema SageMakerModelPackageValidationSpecification
 */
export interface SageMakerModelPackageValidationSpecification {
  /**
   * @schema SageMakerModelPackageValidationSpecification#ValidationRole
   */
  readonly validationRole: string;

  /**
   * @schema SageMakerModelPackageValidationSpecification#ValidationProfiles
   */
  readonly validationProfiles: SageMakerModelPackageValidationProfile[];

}

/**
 * @schema SageMakerSourceAlgorithmSpecification
 */
export interface SageMakerSourceAlgorithmSpecification {
  /**
   * @schema SageMakerSourceAlgorithmSpecification#SourceAlgorithms
   */
  readonly sourceAlgorithms: SageMakerSourceAlgorithm[];

}

/**
 * @schema SageMakerMonitoringScheduleConfig
 */
export interface SageMakerMonitoringScheduleConfig {
  /**
   * @schema SageMakerMonitoringScheduleConfig#ScheduleConfig
   */
  readonly scheduleConfig?: SageMakerScheduleConfig;

  /**
   * @schema SageMakerMonitoringScheduleConfig#MonitoringJobDefinition
   */
  readonly monitoringJobDefinition: SageMakerMonitoringJobDefinition;

}

/**
 * @schema SageMakerNotebookInstanceLifecycleHook
 */
export interface SageMakerNotebookInstanceLifecycleHook {
  /**
   * @schema SageMakerNotebookInstanceLifecycleHook#Content
   */
  readonly content?: string;

}

/**
 * @schema SageMakerProcessingInput
 */
export interface SageMakerProcessingInput {
  /**
   * @schema SageMakerProcessingInput#InputName
   */
  readonly inputName: string;

  /**
   * @schema SageMakerProcessingInput#S3Input
   */
  readonly s3Input: SageMakerProcessingS3Input;

}

/**
 * @schema SageMakerProcessingOutputConfig
 */
export interface SageMakerProcessingOutputConfig {
  /**
   * @schema SageMakerProcessingOutputConfig#Outputs
   */
  readonly outputs: SageMakerProcessingOutput[];

  /**
   * @schema SageMakerProcessingOutputConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema SageMakerProcessingResources
 */
export interface SageMakerProcessingResources {
  /**
   * @schema SageMakerProcessingResources#ClusterConfig
   */
  readonly clusterConfig: SageMakerProcessingClusterConfig;

}

/**
 * @schema SageMakerProcessingStoppingCondition
 */
export interface SageMakerProcessingStoppingCondition {
  /**
   * @schema SageMakerProcessingStoppingCondition#MaxRuntimeInSeconds
   */
  readonly maxRuntimeInSeconds: number;

}

/**
 * @schema SageMakerAppSpecification
 */
export interface SageMakerAppSpecification {
  /**
   * @schema SageMakerAppSpecification#ImageUri
   */
  readonly imageUri: string;

  /**
   * @schema SageMakerAppSpecification#ContainerEntrypoint
   */
  readonly containerEntrypoint?: string[];

  /**
   * @schema SageMakerAppSpecification#ContainerArguments
   */
  readonly containerArguments?: string[];

}

/**
 * @schema SageMakerNetworkConfig
 */
export interface SageMakerNetworkConfig {
  /**
   * @schema SageMakerNetworkConfig#EnableInterContainerTrafficEncryption
   */
  readonly enableInterContainerTrafficEncryption?: boolean;

  /**
   * @schema SageMakerNetworkConfig#EnableNetworkIsolation
   */
  readonly enableNetworkIsolation?: boolean;

  /**
   * @schema SageMakerNetworkConfig#VpcConfig
   */
  readonly vpcConfig?: SageMakerVpcConfig;

}

/**
 * @schema SageMakerExperimentConfig
 */
export interface SageMakerExperimentConfig {
  /**
   * @schema SageMakerExperimentConfig#ExperimentName
   */
  readonly experimentName?: string;

  /**
   * @schema SageMakerExperimentConfig#TrialName
   */
  readonly trialName?: string;

  /**
   * @schema SageMakerExperimentConfig#TrialComponentDisplayName
   */
  readonly trialComponentDisplayName?: string;

}

/**
 * @schema SageMakerAlgorithmSpecification
 */
export interface SageMakerAlgorithmSpecification {
  /**
   * @schema SageMakerAlgorithmSpecification#TrainingImage
   */
  readonly trainingImage?: string;

  /**
   * @schema SageMakerAlgorithmSpecification#AlgorithmName
   */
  readonly algorithmName?: string;

  /**
   * @schema SageMakerAlgorithmSpecification#TrainingInputMode
   */
  readonly trainingInputMode: string;

  /**
   * @schema SageMakerAlgorithmSpecification#MetricDefinitions
   */
  readonly metricDefinitions?: SageMakerMetricDefinition[];

  /**
   * @schema SageMakerAlgorithmSpecification#EnableSageMakerMetricsTimeSeries
   */
  readonly enableSageMakerMetricsTimeSeries?: boolean;

}

/**
 * @schema SageMakerChannel
 */
export interface SageMakerChannel {
  /**
   * @schema SageMakerChannel#ChannelName
   */
  readonly channelName: string;

  /**
   * @schema SageMakerChannel#DataSource
   */
  readonly dataSource: SageMakerDataSource;

  /**
   * @schema SageMakerChannel#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema SageMakerChannel#CompressionType
   */
  readonly compressionType?: string;

  /**
   * @schema SageMakerChannel#RecordWrapperType
   */
  readonly recordWrapperType?: string;

  /**
   * @schema SageMakerChannel#InputMode
   */
  readonly inputMode?: string;

  /**
   * @schema SageMakerChannel#ShuffleConfig
   */
  readonly shuffleConfig?: SageMakerShuffleConfig;

}

/**
 * @schema SageMakerOutputDataConfig
 */
export interface SageMakerOutputDataConfig {
  /**
   * @schema SageMakerOutputDataConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema SageMakerOutputDataConfig#S3OutputPath
   */
  readonly s3OutputPath: string;

}

/**
 * @schema SageMakerResourceConfig
 */
export interface SageMakerResourceConfig {
  /**
   * @schema SageMakerResourceConfig#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema SageMakerResourceConfig#InstanceCount
   */
  readonly instanceCount: number;

  /**
   * @schema SageMakerResourceConfig#VolumeSizeInGB
   */
  readonly volumeSizeInGb: number;

  /**
   * @schema SageMakerResourceConfig#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

}

/**
 * @schema SageMakerCheckpointConfig
 */
export interface SageMakerCheckpointConfig {
  /**
   * @schema SageMakerCheckpointConfig#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema SageMakerCheckpointConfig#LocalPath
   */
  readonly localPath?: string;

}

/**
 * @schema SageMakerDebugHookConfig
 */
export interface SageMakerDebugHookConfig {
  /**
   * @schema SageMakerDebugHookConfig#LocalPath
   */
  readonly localPath?: string;

  /**
   * @schema SageMakerDebugHookConfig#S3OutputPath
   */
  readonly s3OutputPath: string;

  /**
   * @schema SageMakerDebugHookConfig#HookParameters
   */
  readonly hookParameters?: { [key: string]: string };

  /**
   * @schema SageMakerDebugHookConfig#CollectionConfigurations
   */
  readonly collectionConfigurations?: SageMakerCollectionConfiguration[];

}

/**
 * @schema SageMakerDebugRuleConfiguration
 */
export interface SageMakerDebugRuleConfiguration {
  /**
   * @schema SageMakerDebugRuleConfiguration#RuleConfigurationName
   */
  readonly ruleConfigurationName: string;

  /**
   * @schema SageMakerDebugRuleConfiguration#LocalPath
   */
  readonly localPath?: string;

  /**
   * @schema SageMakerDebugRuleConfiguration#S3OutputPath
   */
  readonly s3OutputPath?: string;

  /**
   * @schema SageMakerDebugRuleConfiguration#RuleEvaluatorImage
   */
  readonly ruleEvaluatorImage: string;

  /**
   * @schema SageMakerDebugRuleConfiguration#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema SageMakerDebugRuleConfiguration#VolumeSizeInGB
   */
  readonly volumeSizeInGb?: number;

  /**
   * @schema SageMakerDebugRuleConfiguration#RuleParameters
   */
  readonly ruleParameters?: { [key: string]: string };

}

/**
 * @schema SageMakerTensorBoardOutputConfig
 */
export interface SageMakerTensorBoardOutputConfig {
  /**
   * @schema SageMakerTensorBoardOutputConfig#LocalPath
   */
  readonly localPath?: string;

  /**
   * @schema SageMakerTensorBoardOutputConfig#S3OutputPath
   */
  readonly s3OutputPath: string;

}

/**
 * @schema SageMakerModelClientConfig
 */
export interface SageMakerModelClientConfig {
  /**
   * @schema SageMakerModelClientConfig#InvocationsTimeoutInSeconds
   */
  readonly invocationsTimeoutInSeconds?: number;

  /**
   * @schema SageMakerModelClientConfig#InvocationsMaxRetries
   */
  readonly invocationsMaxRetries?: number;

}

/**
 * @schema SageMakerTransformInput
 */
export interface SageMakerTransformInput {
  /**
   * @schema SageMakerTransformInput#DataSource
   */
  readonly dataSource: SageMakerTransformDataSource;

  /**
   * @schema SageMakerTransformInput#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema SageMakerTransformInput#CompressionType
   */
  readonly compressionType?: string;

  /**
   * @schema SageMakerTransformInput#SplitType
   */
  readonly splitType?: string;

}

/**
 * @schema SageMakerTransformOutput
 */
export interface SageMakerTransformOutput {
  /**
   * @schema SageMakerTransformOutput#S3OutputPath
   */
  readonly s3OutputPath: string;

  /**
   * @schema SageMakerTransformOutput#Accept
   */
  readonly accept?: string;

  /**
   * @schema SageMakerTransformOutput#AssembleWith
   */
  readonly assembleWith?: string;

  /**
   * @schema SageMakerTransformOutput#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema SageMakerTransformResources
 */
export interface SageMakerTransformResources {
  /**
   * @schema SageMakerTransformResources#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema SageMakerTransformResources#InstanceCount
   */
  readonly instanceCount: number;

  /**
   * @schema SageMakerTransformResources#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

}

/**
 * @schema SageMakerDataProcessing
 */
export interface SageMakerDataProcessing {
  /**
   * @schema SageMakerDataProcessing#InputFilter
   */
  readonly inputFilter?: string;

  /**
   * @schema SageMakerDataProcessing#OutputFilter
   */
  readonly outputFilter?: string;

  /**
   * @schema SageMakerDataProcessing#JoinSource
   */
  readonly joinSource?: string;

}

/**
 * @schema SageMakerTrialComponentStatus
 */
export interface SageMakerTrialComponentStatus {
  /**
   * @schema SageMakerTrialComponentStatus#PrimaryStatus
   */
  readonly primaryStatus?: string;

  /**
   * @schema SageMakerTrialComponentStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema SageMakerTrialComponentParameterValue
 */
export interface SageMakerTrialComponentParameterValue {
  /**
   * @schema SageMakerTrialComponentParameterValue#StringValue
   */
  readonly stringValue?: string;

  /**
   * @schema SageMakerTrialComponentParameterValue#NumberValue
   */
  readonly numberValue?: number;

}

/**
 * @schema SageMakerTrialComponentArtifact
 */
export interface SageMakerTrialComponentArtifact {
  /**
   * @schema SageMakerTrialComponentArtifact#MediaType
   */
  readonly mediaType?: string;

  /**
   * @schema SageMakerTrialComponentArtifact#Value
   */
  readonly value: string;

}

/**
 * @schema SageMakerCognitoConfig
 */
export interface SageMakerCognitoConfig {
  /**
   * @schema SageMakerCognitoConfig#UserPool
   */
  readonly userPool: string;

  /**
   * @schema SageMakerCognitoConfig#ClientId
   */
  readonly clientId: string;

}

/**
 * @schema SageMakerOidcConfig
 */
export interface SageMakerOidcConfig {
  /**
   * @schema SageMakerOidcConfig#ClientId
   */
  readonly clientId: string;

  /**
   * @schema SageMakerOidcConfig#ClientSecret
   */
  readonly clientSecret: string;

  /**
   * @schema SageMakerOidcConfig#Issuer
   */
  readonly issuer: string;

  /**
   * @schema SageMakerOidcConfig#AuthorizationEndpoint
   */
  readonly authorizationEndpoint: string;

  /**
   * @schema SageMakerOidcConfig#TokenEndpoint
   */
  readonly tokenEndpoint: string;

  /**
   * @schema SageMakerOidcConfig#UserInfoEndpoint
   */
  readonly userInfoEndpoint: string;

  /**
   * @schema SageMakerOidcConfig#LogoutEndpoint
   */
  readonly logoutEndpoint: string;

  /**
   * @schema SageMakerOidcConfig#JwksUri
   */
  readonly jwksUri: string;

}

/**
 * @schema SageMakerSourceIpConfig
 */
export interface SageMakerSourceIpConfig {
  /**
   * @schema SageMakerSourceIpConfig#Cidrs
   */
  readonly cidrs: string[];

}

/**
 * @schema SageMakerMemberDefinition
 */
export interface SageMakerMemberDefinition {
  /**
   * @schema SageMakerMemberDefinition#CognitoMemberDefinition
   */
  readonly cognitoMemberDefinition?: SageMakerCognitoMemberDefinition;

  /**
   * @schema SageMakerMemberDefinition#OidcMemberDefinition
   */
  readonly oidcMemberDefinition?: SageMakerOidcMemberDefinition;

}

/**
 * @schema SageMakerNotificationConfiguration
 */
export interface SageMakerNotificationConfiguration {
  /**
   * @schema SageMakerNotificationConfiguration#NotificationTopicArn
   */
  readonly notificationTopicArn?: string;

}

/**
 * @schema SageMakerRetentionPolicy
 */
export interface SageMakerRetentionPolicy {
  /**
   * @schema SageMakerRetentionPolicy#HomeEfsFileSystem
   */
  readonly homeEfsFileSystem?: string;

}

/**
 * @schema SageMakerAlgorithmStatusDetails
 */
export interface SageMakerAlgorithmStatusDetails {
  /**
   * @schema SageMakerAlgorithmStatusDetails#ValidationStatuses
   */
  readonly validationStatuses?: SageMakerAlgorithmStatusItem[];

  /**
   * @schema SageMakerAlgorithmStatusDetails#ImageScanStatuses
   */
  readonly imageScanStatuses?: SageMakerAlgorithmStatusItem[];

}

/**
 * @schema SageMakerAutoMlCandidate
 */
export interface SageMakerAutoMlCandidate {
  /**
   * @schema SageMakerAutoMlCandidate#CandidateName
   */
  readonly candidateName: string;

  /**
   * @schema SageMakerAutoMlCandidate#FinalAutoMLJobObjectiveMetric
   */
  readonly finalAutoMlJobObjectiveMetric?: SageMakerFinalAutoMlJobObjectiveMetric;

  /**
   * @schema SageMakerAutoMlCandidate#ObjectiveStatus
   */
  readonly objectiveStatus: string;

  /**
   * @schema SageMakerAutoMlCandidate#CandidateSteps
   */
  readonly candidateSteps: SageMakerAutoMlCandidateStep[];

  /**
   * @schema SageMakerAutoMlCandidate#CandidateStatus
   */
  readonly candidateStatus: string;

  /**
   * @schema SageMakerAutoMlCandidate#InferenceContainers
   */
  readonly inferenceContainers?: SageMakerAutoMlContainerDefinition[];

  /**
   * @schema SageMakerAutoMlCandidate#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerAutoMlCandidate#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema SageMakerAutoMlCandidate#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema SageMakerAutoMlCandidate#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema SageMakerAutoMlJobArtifacts
 */
export interface SageMakerAutoMlJobArtifacts {
  /**
   * @schema SageMakerAutoMlJobArtifacts#CandidateDefinitionNotebookLocation
   */
  readonly candidateDefinitionNotebookLocation?: string;

  /**
   * @schema SageMakerAutoMlJobArtifacts#DataExplorationNotebookLocation
   */
  readonly dataExplorationNotebookLocation?: string;

}

/**
 * @schema SageMakerResolvedAttributes
 */
export interface SageMakerResolvedAttributes {
  /**
   * @schema SageMakerResolvedAttributes#AutoMLJobObjective
   */
  readonly autoMlJobObjective?: SageMakerAutoMlJobObjective;

  /**
   * @schema SageMakerResolvedAttributes#ProblemType
   */
  readonly problemType?: string;

  /**
   * @schema SageMakerResolvedAttributes#CompletionCriteria
   */
  readonly completionCriteria?: SageMakerAutoMlJobCompletionCriteria;

}

/**
 * @schema SageMakerModelArtifacts
 */
export interface SageMakerModelArtifacts {
  /**
   * @schema SageMakerModelArtifacts#S3ModelArtifacts
   */
  readonly s3ModelArtifacts: string;

}

/**
 * @schema SageMakerProductionVariantSummary
 */
export interface SageMakerProductionVariantSummary {
  /**
   * @schema SageMakerProductionVariantSummary#VariantName
   */
  readonly variantName: string;

  /**
   * @schema SageMakerProductionVariantSummary#DeployedImages
   */
  readonly deployedImages?: SageMakerDeployedImage[];

  /**
   * @schema SageMakerProductionVariantSummary#CurrentWeight
   */
  readonly currentWeight?: number;

  /**
   * @schema SageMakerProductionVariantSummary#DesiredWeight
   */
  readonly desiredWeight?: number;

  /**
   * @schema SageMakerProductionVariantSummary#CurrentInstanceCount
   */
  readonly currentInstanceCount?: number;

  /**
   * @schema SageMakerProductionVariantSummary#DesiredInstanceCount
   */
  readonly desiredInstanceCount?: number;

}

/**
 * @schema SageMakerDataCaptureConfigSummary
 */
export interface SageMakerDataCaptureConfigSummary {
  /**
   * @schema SageMakerDataCaptureConfigSummary#EnableCapture
   */
  readonly enableCapture: boolean;

  /**
   * @schema SageMakerDataCaptureConfigSummary#CaptureStatus
   */
  readonly captureStatus: string;

  /**
   * @schema SageMakerDataCaptureConfigSummary#CurrentSamplingPercentage
   */
  readonly currentSamplingPercentage: number;

  /**
   * @schema SageMakerDataCaptureConfigSummary#DestinationS3Uri
   */
  readonly destinationS3Uri: string;

  /**
   * @schema SageMakerDataCaptureConfigSummary#KmsKeyId
   */
  readonly kmsKeyId: string;

}

/**
 * @schema SageMakerExperimentSource
 */
export interface SageMakerExperimentSource {
  /**
   * @schema SageMakerExperimentSource#SourceArn
   */
  readonly sourceArn: string;

  /**
   * @schema SageMakerExperimentSource#SourceType
   */
  readonly sourceType?: string;

}

/**
 * @schema SageMakerUserContext
 */
export interface SageMakerUserContext {
  /**
   * @schema SageMakerUserContext#UserProfileArn
   */
  readonly userProfileArn?: string;

  /**
   * @schema SageMakerUserContext#UserProfileName
   */
  readonly userProfileName?: string;

  /**
   * @schema SageMakerUserContext#DomainId
   */
  readonly domainId?: string;

}

/**
 * @schema SageMakerUiTemplateInfo
 */
export interface SageMakerUiTemplateInfo {
  /**
   * @schema SageMakerUiTemplateInfo#Url
   */
  readonly url?: string;

  /**
   * @schema SageMakerUiTemplateInfo#ContentSha256
   */
  readonly contentSha256?: string;

}

/**
 * @schema SageMakerTrainingJobStatusCounters
 */
export interface SageMakerTrainingJobStatusCounters {
  /**
   * @schema SageMakerTrainingJobStatusCounters#Completed
   */
  readonly completed?: number;

  /**
   * @schema SageMakerTrainingJobStatusCounters#InProgress
   */
  readonly inProgress?: number;

  /**
   * @schema SageMakerTrainingJobStatusCounters#RetryableError
   */
  readonly retryableError?: number;

  /**
   * @schema SageMakerTrainingJobStatusCounters#NonRetryableError
   */
  readonly nonRetryableError?: number;

  /**
   * @schema SageMakerTrainingJobStatusCounters#Stopped
   */
  readonly stopped?: number;

}

/**
 * @schema SageMakerObjectiveStatusCounters
 */
export interface SageMakerObjectiveStatusCounters {
  /**
   * @schema SageMakerObjectiveStatusCounters#Succeeded
   */
  readonly succeeded?: number;

  /**
   * @schema SageMakerObjectiveStatusCounters#Pending
   */
  readonly pending?: number;

  /**
   * @schema SageMakerObjectiveStatusCounters#Failed
   */
  readonly failed?: number;

}

/**
 * @schema SageMakerHyperParameterTrainingJobSummary
 */
export interface SageMakerHyperParameterTrainingJobSummary {
  /**
   * @schema SageMakerHyperParameterTrainingJobSummary#TrainingJobDefinitionName
   */
  readonly trainingJobDefinitionName?: string;

  /**
   * @schema SageMakerHyperParameterTrainingJobSummary#TrainingJobName
   */
  readonly trainingJobName: string;

  /**
   * @schema SageMakerHyperParameterTrainingJobSummary#TrainingJobArn
   */
  readonly trainingJobArn: string;

  /**
   * @schema SageMakerHyperParameterTrainingJobSummary#TuningJobName
   */
  readonly tuningJobName?: string;

  /**
   * @schema SageMakerHyperParameterTrainingJobSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerHyperParameterTrainingJobSummary#TrainingStartTime
   */
  readonly trainingStartTime?: string;

  /**
   * @schema SageMakerHyperParameterTrainingJobSummary#TrainingEndTime
   */
  readonly trainingEndTime?: string;

  /**
   * @schema SageMakerHyperParameterTrainingJobSummary#TrainingJobStatus
   */
  readonly trainingJobStatus: string;

  /**
   * @schema SageMakerHyperParameterTrainingJobSummary#TunedHyperParameters
   */
  readonly tunedHyperParameters: { [key: string]: string };

  /**
   * @schema SageMakerHyperParameterTrainingJobSummary#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SageMakerHyperParameterTrainingJobSummary#FinalHyperParameterTuningJobObjectiveMetric
   */
  readonly finalHyperParameterTuningJobObjectiveMetric?: SageMakerFinalHyperParameterTuningJobObjectiveMetric;

  /**
   * @schema SageMakerHyperParameterTrainingJobSummary#ObjectiveStatus
   */
  readonly objectiveStatus?: string;

}

/**
 * @schema SageMakerLabelCounters
 */
export interface SageMakerLabelCounters {
  /**
   * @schema SageMakerLabelCounters#TotalLabeled
   */
  readonly totalLabeled?: number;

  /**
   * @schema SageMakerLabelCounters#HumanLabeled
   */
  readonly humanLabeled?: number;

  /**
   * @schema SageMakerLabelCounters#MachineLabeled
   */
  readonly machineLabeled?: number;

  /**
   * @schema SageMakerLabelCounters#FailedNonRetryableError
   */
  readonly failedNonRetryableError?: number;

  /**
   * @schema SageMakerLabelCounters#Unlabeled
   */
  readonly unlabeled?: number;

}

/**
 * @schema SageMakerLabelingJobOutput
 */
export interface SageMakerLabelingJobOutput {
  /**
   * @schema SageMakerLabelingJobOutput#OutputDatasetS3Uri
   */
  readonly outputDatasetS3Uri: string;

  /**
   * @schema SageMakerLabelingJobOutput#FinalActiveLearningModelArn
   */
  readonly finalActiveLearningModelArn?: string;

}

/**
 * @schema SageMakerModelPackageStatusDetails
 */
export interface SageMakerModelPackageStatusDetails {
  /**
   * @schema SageMakerModelPackageStatusDetails#ValidationStatuses
   */
  readonly validationStatuses: SageMakerModelPackageStatusItem[];

  /**
   * @schema SageMakerModelPackageStatusDetails#ImageScanStatuses
   */
  readonly imageScanStatuses?: SageMakerModelPackageStatusItem[];

}

/**
 * @schema SageMakerMonitoringExecutionSummary
 */
export interface SageMakerMonitoringExecutionSummary {
  /**
   * @schema SageMakerMonitoringExecutionSummary#MonitoringScheduleName
   */
  readonly monitoringScheduleName: string;

  /**
   * @schema SageMakerMonitoringExecutionSummary#ScheduledTime
   */
  readonly scheduledTime: string;

  /**
   * @schema SageMakerMonitoringExecutionSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerMonitoringExecutionSummary#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema SageMakerMonitoringExecutionSummary#MonitoringExecutionStatus
   */
  readonly monitoringExecutionStatus: string;

  /**
   * @schema SageMakerMonitoringExecutionSummary#ProcessingJobArn
   */
  readonly processingJobArn?: string;

  /**
   * @schema SageMakerMonitoringExecutionSummary#EndpointName
   */
  readonly endpointName?: string;

  /**
   * @schema SageMakerMonitoringExecutionSummary#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema SageMakerSubscribedWorkteam
 */
export interface SageMakerSubscribedWorkteam {
  /**
   * @schema SageMakerSubscribedWorkteam#WorkteamArn
   */
  readonly workteamArn: string;

  /**
   * @schema SageMakerSubscribedWorkteam#MarketplaceTitle
   */
  readonly marketplaceTitle?: string;

  /**
   * @schema SageMakerSubscribedWorkteam#SellerName
   */
  readonly sellerName?: string;

  /**
   * @schema SageMakerSubscribedWorkteam#MarketplaceDescription
   */
  readonly marketplaceDescription?: string;

  /**
   * @schema SageMakerSubscribedWorkteam#ListingId
   */
  readonly listingId?: string;

}

/**
 * @schema SageMakerSecondaryStatusTransition
 */
export interface SageMakerSecondaryStatusTransition {
  /**
   * @schema SageMakerSecondaryStatusTransition#Status
   */
  readonly status: string;

  /**
   * @schema SageMakerSecondaryStatusTransition#StartTime
   */
  readonly startTime: string;

  /**
   * @schema SageMakerSecondaryStatusTransition#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema SageMakerSecondaryStatusTransition#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * @schema SageMakerMetricData
 */
export interface SageMakerMetricData {
  /**
   * @schema SageMakerMetricData#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema SageMakerMetricData#Value
   */
  readonly value?: number;

  /**
   * @schema SageMakerMetricData#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema SageMakerDebugRuleEvaluationStatus
 */
export interface SageMakerDebugRuleEvaluationStatus {
  /**
   * @schema SageMakerDebugRuleEvaluationStatus#RuleConfigurationName
   */
  readonly ruleConfigurationName?: string;

  /**
   * @schema SageMakerDebugRuleEvaluationStatus#RuleEvaluationJobArn
   */
  readonly ruleEvaluationJobArn?: string;

  /**
   * @schema SageMakerDebugRuleEvaluationStatus#RuleEvaluationStatus
   */
  readonly ruleEvaluationStatus?: string;

  /**
   * @schema SageMakerDebugRuleEvaluationStatus#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema SageMakerDebugRuleEvaluationStatus#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * @schema SageMakerTrialSource
 */
export interface SageMakerTrialSource {
  /**
   * @schema SageMakerTrialSource#SourceArn
   */
  readonly sourceArn: string;

  /**
   * @schema SageMakerTrialSource#SourceType
   */
  readonly sourceType?: string;

}

/**
 * @schema SageMakerTrialComponentSource
 */
export interface SageMakerTrialComponentSource {
  /**
   * @schema SageMakerTrialComponentSource#SourceArn
   */
  readonly sourceArn: string;

  /**
   * @schema SageMakerTrialComponentSource#SourceType
   */
  readonly sourceType?: string;

}

/**
 * @schema SageMakerTrialComponentMetricSummary
 */
export interface SageMakerTrialComponentMetricSummary {
  /**
   * @schema SageMakerTrialComponentMetricSummary#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema SageMakerTrialComponentMetricSummary#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema SageMakerTrialComponentMetricSummary#TimeStamp
   */
  readonly timeStamp?: string;

  /**
   * @schema SageMakerTrialComponentMetricSummary#Max
   */
  readonly max?: number;

  /**
   * @schema SageMakerTrialComponentMetricSummary#Min
   */
  readonly min?: number;

  /**
   * @schema SageMakerTrialComponentMetricSummary#Last
   */
  readonly last?: number;

  /**
   * @schema SageMakerTrialComponentMetricSummary#Count
   */
  readonly count?: number;

  /**
   * @schema SageMakerTrialComponentMetricSummary#Avg
   */
  readonly avg?: number;

  /**
   * @schema SageMakerTrialComponentMetricSummary#StdDev
   */
  readonly stdDev?: number;

}

/**
 * @schema SageMakerWorkforce
 */
export interface SageMakerWorkforce {
  /**
   * @schema SageMakerWorkforce#WorkforceName
   */
  readonly workforceName: string;

  /**
   * @schema SageMakerWorkforce#WorkforceArn
   */
  readonly workforceArn: string;

  /**
   * @schema SageMakerWorkforce#LastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema SageMakerWorkforce#SourceIpConfig
   */
  readonly sourceIpConfig?: SageMakerSourceIpConfig;

  /**
   * @schema SageMakerWorkforce#SubDomain
   */
  readonly subDomain?: string;

  /**
   * @schema SageMakerWorkforce#CognitoConfig
   */
  readonly cognitoConfig?: SageMakerCognitoConfig;

  /**
   * @schema SageMakerWorkforce#OidcConfig
   */
  readonly oidcConfig?: SageMakerOidcConfigForResponse;

  /**
   * @schema SageMakerWorkforce#CreateDate
   */
  readonly createDate?: string;

}

/**
 * @schema SageMakerWorkteam
 */
export interface SageMakerWorkteam {
  /**
   * @schema SageMakerWorkteam#WorkteamName
   */
  readonly workteamName: string;

  /**
   * @schema SageMakerWorkteam#MemberDefinitions
   */
  readonly memberDefinitions: SageMakerMemberDefinition[];

  /**
   * @schema SageMakerWorkteam#WorkteamArn
   */
  readonly workteamArn: string;

  /**
   * @schema SageMakerWorkteam#WorkforceArn
   */
  readonly workforceArn?: string;

  /**
   * @schema SageMakerWorkteam#ProductListingIds
   */
  readonly productListingIds?: string[];

  /**
   * @schema SageMakerWorkteam#Description
   */
  readonly description: string;

  /**
   * @schema SageMakerWorkteam#SubDomain
   */
  readonly subDomain?: string;

  /**
   * @schema SageMakerWorkteam#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema SageMakerWorkteam#LastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema SageMakerWorkteam#NotificationConfiguration
   */
  readonly notificationConfiguration?: SageMakerNotificationConfiguration;

}

/**
 * @schema SageMakerSuggestionQuery
 */
export interface SageMakerSuggestionQuery {
  /**
   * @schema SageMakerSuggestionQuery#PropertyNameQuery
   */
  readonly propertyNameQuery?: SageMakerPropertyNameQuery;

}

/**
 * @schema SageMakerPropertyNameSuggestion
 */
export interface SageMakerPropertyNameSuggestion {
  /**
   * @schema SageMakerPropertyNameSuggestion#PropertyName
   */
  readonly propertyName?: string;

}

/**
 * @schema SageMakerAlgorithmSummary
 */
export interface SageMakerAlgorithmSummary {
  /**
   * @schema SageMakerAlgorithmSummary#AlgorithmName
   */
  readonly algorithmName: string;

  /**
   * @schema SageMakerAlgorithmSummary#AlgorithmArn
   */
  readonly algorithmArn: string;

  /**
   * @schema SageMakerAlgorithmSummary#AlgorithmDescription
   */
  readonly algorithmDescription?: string;

  /**
   * @schema SageMakerAlgorithmSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerAlgorithmSummary#AlgorithmStatus
   */
  readonly algorithmStatus: string;

}

/**
 * @schema SageMakerAppImageConfigDetails
 */
export interface SageMakerAppImageConfigDetails {
  /**
   * @schema SageMakerAppImageConfigDetails#AppImageConfigArn
   */
  readonly appImageConfigArn?: string;

  /**
   * @schema SageMakerAppImageConfigDetails#AppImageConfigName
   */
  readonly appImageConfigName?: string;

  /**
   * @schema SageMakerAppImageConfigDetails#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerAppImageConfigDetails#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerAppImageConfigDetails#KernelGatewayImageConfig
   */
  readonly kernelGatewayImageConfig?: SageMakerKernelGatewayImageConfig;

}

/**
 * @schema SageMakerAppDetails
 */
export interface SageMakerAppDetails {
  /**
   * @schema SageMakerAppDetails#DomainId
   */
  readonly domainId?: string;

  /**
   * @schema SageMakerAppDetails#UserProfileName
   */
  readonly userProfileName?: string;

  /**
   * @schema SageMakerAppDetails#AppType
   */
  readonly appType?: string;

  /**
   * @schema SageMakerAppDetails#AppName
   */
  readonly appName?: string;

  /**
   * @schema SageMakerAppDetails#Status
   */
  readonly status?: string;

  /**
   * @schema SageMakerAppDetails#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema SageMakerAutoMlJobSummary
 */
export interface SageMakerAutoMlJobSummary {
  /**
   * @schema SageMakerAutoMlJobSummary#AutoMLJobName
   */
  readonly autoMlJobName: string;

  /**
   * @schema SageMakerAutoMlJobSummary#AutoMLJobArn
   */
  readonly autoMlJobArn: string;

  /**
   * @schema SageMakerAutoMlJobSummary#AutoMLJobStatus
   */
  readonly autoMlJobStatus: string;

  /**
   * @schema SageMakerAutoMlJobSummary#AutoMLJobSecondaryStatus
   */
  readonly autoMlJobSecondaryStatus: string;

  /**
   * @schema SageMakerAutoMlJobSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerAutoMlJobSummary#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema SageMakerAutoMlJobSummary#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema SageMakerAutoMlJobSummary#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema SageMakerCodeRepositorySummary
 */
export interface SageMakerCodeRepositorySummary {
  /**
   * @schema SageMakerCodeRepositorySummary#CodeRepositoryName
   */
  readonly codeRepositoryName: string;

  /**
   * @schema SageMakerCodeRepositorySummary#CodeRepositoryArn
   */
  readonly codeRepositoryArn: string;

  /**
   * @schema SageMakerCodeRepositorySummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerCodeRepositorySummary#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema SageMakerCodeRepositorySummary#GitConfig
   */
  readonly gitConfig?: SageMakerGitConfig;

}

/**
 * @schema SageMakerCompilationJobSummary
 */
export interface SageMakerCompilationJobSummary {
  /**
   * @schema SageMakerCompilationJobSummary#CompilationJobName
   */
  readonly compilationJobName: string;

  /**
   * @schema SageMakerCompilationJobSummary#CompilationJobArn
   */
  readonly compilationJobArn: string;

  /**
   * @schema SageMakerCompilationJobSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerCompilationJobSummary#CompilationStartTime
   */
  readonly compilationStartTime?: string;

  /**
   * @schema SageMakerCompilationJobSummary#CompilationEndTime
   */
  readonly compilationEndTime?: string;

  /**
   * @schema SageMakerCompilationJobSummary#CompilationTargetDevice
   */
  readonly compilationTargetDevice?: string;

  /**
   * @schema SageMakerCompilationJobSummary#CompilationTargetPlatformOs
   */
  readonly compilationTargetPlatformOs?: string;

  /**
   * @schema SageMakerCompilationJobSummary#CompilationTargetPlatformArch
   */
  readonly compilationTargetPlatformArch?: string;

  /**
   * @schema SageMakerCompilationJobSummary#CompilationTargetPlatformAccelerator
   */
  readonly compilationTargetPlatformAccelerator?: string;

  /**
   * @schema SageMakerCompilationJobSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerCompilationJobSummary#CompilationJobStatus
   */
  readonly compilationJobStatus: string;

}

/**
 * @schema SageMakerDomainDetails
 */
export interface SageMakerDomainDetails {
  /**
   * @schema SageMakerDomainDetails#DomainArn
   */
  readonly domainArn?: string;

  /**
   * @schema SageMakerDomainDetails#DomainId
   */
  readonly domainId?: string;

  /**
   * @schema SageMakerDomainDetails#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema SageMakerDomainDetails#Status
   */
  readonly status?: string;

  /**
   * @schema SageMakerDomainDetails#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerDomainDetails#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerDomainDetails#Url
   */
  readonly url?: string;

}

/**
 * @schema SageMakerEndpointConfigSummary
 */
export interface SageMakerEndpointConfigSummary {
  /**
   * @schema SageMakerEndpointConfigSummary#EndpointConfigName
   */
  readonly endpointConfigName: string;

  /**
   * @schema SageMakerEndpointConfigSummary#EndpointConfigArn
   */
  readonly endpointConfigArn: string;

  /**
   * @schema SageMakerEndpointConfigSummary#CreationTime
   */
  readonly creationTime: string;

}

/**
 * @schema SageMakerEndpointSummary
 */
export interface SageMakerEndpointSummary {
  /**
   * @schema SageMakerEndpointSummary#EndpointName
   */
  readonly endpointName: string;

  /**
   * @schema SageMakerEndpointSummary#EndpointArn
   */
  readonly endpointArn: string;

  /**
   * @schema SageMakerEndpointSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerEndpointSummary#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema SageMakerEndpointSummary#EndpointStatus
   */
  readonly endpointStatus: string;

}

/**
 * @schema SageMakerExperimentSummary
 */
export interface SageMakerExperimentSummary {
  /**
   * @schema SageMakerExperimentSummary#ExperimentArn
   */
  readonly experimentArn?: string;

  /**
   * @schema SageMakerExperimentSummary#ExperimentName
   */
  readonly experimentName?: string;

  /**
   * @schema SageMakerExperimentSummary#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SageMakerExperimentSummary#ExperimentSource
   */
  readonly experimentSource?: SageMakerExperimentSource;

  /**
   * @schema SageMakerExperimentSummary#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerExperimentSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * @schema SageMakerFlowDefinitionSummary
 */
export interface SageMakerFlowDefinitionSummary {
  /**
   * @schema SageMakerFlowDefinitionSummary#FlowDefinitionName
   */
  readonly flowDefinitionName: string;

  /**
   * @schema SageMakerFlowDefinitionSummary#FlowDefinitionArn
   */
  readonly flowDefinitionArn: string;

  /**
   * @schema SageMakerFlowDefinitionSummary#FlowDefinitionStatus
   */
  readonly flowDefinitionStatus: string;

  /**
   * @schema SageMakerFlowDefinitionSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerFlowDefinitionSummary#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema SageMakerHumanTaskUiSummary
 */
export interface SageMakerHumanTaskUiSummary {
  /**
   * @schema SageMakerHumanTaskUiSummary#HumanTaskUiName
   */
  readonly humanTaskUiName: string;

  /**
   * @schema SageMakerHumanTaskUiSummary#HumanTaskUiArn
   */
  readonly humanTaskUiArn: string;

  /**
   * @schema SageMakerHumanTaskUiSummary#CreationTime
   */
  readonly creationTime: string;

}

/**
 * @schema SageMakerHyperParameterTuningJobSummary
 */
export interface SageMakerHyperParameterTuningJobSummary {
  /**
   * @schema SageMakerHyperParameterTuningJobSummary#HyperParameterTuningJobName
   */
  readonly hyperParameterTuningJobName: string;

  /**
   * @schema SageMakerHyperParameterTuningJobSummary#HyperParameterTuningJobArn
   */
  readonly hyperParameterTuningJobArn: string;

  /**
   * @schema SageMakerHyperParameterTuningJobSummary#HyperParameterTuningJobStatus
   */
  readonly hyperParameterTuningJobStatus: string;

  /**
   * @schema SageMakerHyperParameterTuningJobSummary#Strategy
   */
  readonly strategy: string;

  /**
   * @schema SageMakerHyperParameterTuningJobSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerHyperParameterTuningJobSummary#HyperParameterTuningEndTime
   */
  readonly hyperParameterTuningEndTime?: string;

  /**
   * @schema SageMakerHyperParameterTuningJobSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerHyperParameterTuningJobSummary#TrainingJobStatusCounters
   */
  readonly trainingJobStatusCounters: SageMakerTrainingJobStatusCounters;

  /**
   * @schema SageMakerHyperParameterTuningJobSummary#ObjectiveStatusCounters
   */
  readonly objectiveStatusCounters: SageMakerObjectiveStatusCounters;

  /**
   * @schema SageMakerHyperParameterTuningJobSummary#ResourceLimits
   */
  readonly resourceLimits?: SageMakerResourceLimits;

}

/**
 * @schema SageMakerImageVersion
 */
export interface SageMakerImageVersion {
  /**
   * @schema SageMakerImageVersion#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerImageVersion#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SageMakerImageVersion#ImageArn
   */
  readonly imageArn: string;

  /**
   * @schema SageMakerImageVersion#ImageVersionArn
   */
  readonly imageVersionArn: string;

  /**
   * @schema SageMakerImageVersion#ImageVersionStatus
   */
  readonly imageVersionStatus: string;

  /**
   * @schema SageMakerImageVersion#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema SageMakerImageVersion#Version
   */
  readonly version: number;

}

/**
 * @schema SageMakerImage
 */
export interface SageMakerImage {
  /**
   * @schema SageMakerImage#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerImage#Description
   */
  readonly description?: string;

  /**
   * @schema SageMakerImage#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SageMakerImage#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SageMakerImage#ImageArn
   */
  readonly imageArn: string;

  /**
   * @schema SageMakerImage#ImageName
   */
  readonly imageName: string;

  /**
   * @schema SageMakerImage#ImageStatus
   */
  readonly imageStatus: string;

  /**
   * @schema SageMakerImage#LastModifiedTime
   */
  readonly lastModifiedTime: string;

}

/**
 * @schema SageMakerLabelingJobSummary
 */
export interface SageMakerLabelingJobSummary {
  /**
   * @schema SageMakerLabelingJobSummary#LabelingJobName
   */
  readonly labelingJobName: string;

  /**
   * @schema SageMakerLabelingJobSummary#LabelingJobArn
   */
  readonly labelingJobArn: string;

  /**
   * @schema SageMakerLabelingJobSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerLabelingJobSummary#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema SageMakerLabelingJobSummary#LabelingJobStatus
   */
  readonly labelingJobStatus: string;

  /**
   * @schema SageMakerLabelingJobSummary#LabelCounters
   */
  readonly labelCounters: SageMakerLabelCounters;

  /**
   * @schema SageMakerLabelingJobSummary#WorkteamArn
   */
  readonly workteamArn: string;

  /**
   * @schema SageMakerLabelingJobSummary#PreHumanTaskLambdaArn
   */
  readonly preHumanTaskLambdaArn: string;

  /**
   * @schema SageMakerLabelingJobSummary#AnnotationConsolidationLambdaArn
   */
  readonly annotationConsolidationLambdaArn?: string;

  /**
   * @schema SageMakerLabelingJobSummary#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SageMakerLabelingJobSummary#LabelingJobOutput
   */
  readonly labelingJobOutput?: SageMakerLabelingJobOutput;

  /**
   * @schema SageMakerLabelingJobSummary#InputConfig
   */
  readonly inputConfig?: SageMakerLabelingJobInputConfig;

}

/**
 * @schema SageMakerLabelingJobForWorkteamSummary
 */
export interface SageMakerLabelingJobForWorkteamSummary {
  /**
   * @schema SageMakerLabelingJobForWorkteamSummary#LabelingJobName
   */
  readonly labelingJobName?: string;

  /**
   * @schema SageMakerLabelingJobForWorkteamSummary#JobReferenceCode
   */
  readonly jobReferenceCode: string;

  /**
   * @schema SageMakerLabelingJobForWorkteamSummary#WorkRequesterAccountId
   */
  readonly workRequesterAccountId: string;

  /**
   * @schema SageMakerLabelingJobForWorkteamSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerLabelingJobForWorkteamSummary#LabelCounters
   */
  readonly labelCounters?: SageMakerLabelCountersForWorkteam;

  /**
   * @schema SageMakerLabelingJobForWorkteamSummary#NumberOfHumanWorkersPerDataObject
   */
  readonly numberOfHumanWorkersPerDataObject?: number;

}

/**
 * @schema SageMakerModelPackageSummary
 */
export interface SageMakerModelPackageSummary {
  /**
   * @schema SageMakerModelPackageSummary#ModelPackageName
   */
  readonly modelPackageName: string;

  /**
   * @schema SageMakerModelPackageSummary#ModelPackageArn
   */
  readonly modelPackageArn: string;

  /**
   * @schema SageMakerModelPackageSummary#ModelPackageDescription
   */
  readonly modelPackageDescription?: string;

  /**
   * @schema SageMakerModelPackageSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerModelPackageSummary#ModelPackageStatus
   */
  readonly modelPackageStatus: string;

}

/**
 * @schema SageMakerModelSummary
 */
export interface SageMakerModelSummary {
  /**
   * @schema SageMakerModelSummary#ModelName
   */
  readonly modelName: string;

  /**
   * @schema SageMakerModelSummary#ModelArn
   */
  readonly modelArn: string;

  /**
   * @schema SageMakerModelSummary#CreationTime
   */
  readonly creationTime: string;

}

/**
 * @schema SageMakerMonitoringScheduleSummary
 */
export interface SageMakerMonitoringScheduleSummary {
  /**
   * @schema SageMakerMonitoringScheduleSummary#MonitoringScheduleName
   */
  readonly monitoringScheduleName: string;

  /**
   * @schema SageMakerMonitoringScheduleSummary#MonitoringScheduleArn
   */
  readonly monitoringScheduleArn: string;

  /**
   * @schema SageMakerMonitoringScheduleSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerMonitoringScheduleSummary#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema SageMakerMonitoringScheduleSummary#MonitoringScheduleStatus
   */
  readonly monitoringScheduleStatus: string;

  /**
   * @schema SageMakerMonitoringScheduleSummary#EndpointName
   */
  readonly endpointName?: string;

}

/**
 * @schema SageMakerNotebookInstanceLifecycleConfigSummary
 */
export interface SageMakerNotebookInstanceLifecycleConfigSummary {
  /**
   * @schema SageMakerNotebookInstanceLifecycleConfigSummary#NotebookInstanceLifecycleConfigName
   */
  readonly notebookInstanceLifecycleConfigName: string;

  /**
   * @schema SageMakerNotebookInstanceLifecycleConfigSummary#NotebookInstanceLifecycleConfigArn
   */
  readonly notebookInstanceLifecycleConfigArn: string;

  /**
   * @schema SageMakerNotebookInstanceLifecycleConfigSummary#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerNotebookInstanceLifecycleConfigSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * @schema SageMakerNotebookInstanceSummary
 */
export interface SageMakerNotebookInstanceSummary {
  /**
   * @schema SageMakerNotebookInstanceSummary#NotebookInstanceName
   */
  readonly notebookInstanceName: string;

  /**
   * @schema SageMakerNotebookInstanceSummary#NotebookInstanceArn
   */
  readonly notebookInstanceArn: string;

  /**
   * @schema SageMakerNotebookInstanceSummary#NotebookInstanceStatus
   */
  readonly notebookInstanceStatus?: string;

  /**
   * @schema SageMakerNotebookInstanceSummary#Url
   */
  readonly url?: string;

  /**
   * @schema SageMakerNotebookInstanceSummary#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema SageMakerNotebookInstanceSummary#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerNotebookInstanceSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerNotebookInstanceSummary#NotebookInstanceLifecycleConfigName
   */
  readonly notebookInstanceLifecycleConfigName?: string;

  /**
   * @schema SageMakerNotebookInstanceSummary#DefaultCodeRepository
   */
  readonly defaultCodeRepository?: string;

  /**
   * @schema SageMakerNotebookInstanceSummary#AdditionalCodeRepositories
   */
  readonly additionalCodeRepositories?: string[];

}

/**
 * @schema SageMakerProcessingJobSummary
 */
export interface SageMakerProcessingJobSummary {
  /**
   * @schema SageMakerProcessingJobSummary#ProcessingJobName
   */
  readonly processingJobName: string;

  /**
   * @schema SageMakerProcessingJobSummary#ProcessingJobArn
   */
  readonly processingJobArn: string;

  /**
   * @schema SageMakerProcessingJobSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerProcessingJobSummary#ProcessingEndTime
   */
  readonly processingEndTime?: string;

  /**
   * @schema SageMakerProcessingJobSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerProcessingJobSummary#ProcessingJobStatus
   */
  readonly processingJobStatus: string;

  /**
   * @schema SageMakerProcessingJobSummary#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SageMakerProcessingJobSummary#ExitMessage
   */
  readonly exitMessage?: string;

}

/**
 * @schema SageMakerTrainingJobSummary
 */
export interface SageMakerTrainingJobSummary {
  /**
   * @schema SageMakerTrainingJobSummary#TrainingJobName
   */
  readonly trainingJobName: string;

  /**
   * @schema SageMakerTrainingJobSummary#TrainingJobArn
   */
  readonly trainingJobArn: string;

  /**
   * @schema SageMakerTrainingJobSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerTrainingJobSummary#TrainingEndTime
   */
  readonly trainingEndTime?: string;

  /**
   * @schema SageMakerTrainingJobSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerTrainingJobSummary#TrainingJobStatus
   */
  readonly trainingJobStatus: string;

}

/**
 * @schema SageMakerTransformJobSummary
 */
export interface SageMakerTransformJobSummary {
  /**
   * @schema SageMakerTransformJobSummary#TransformJobName
   */
  readonly transformJobName: string;

  /**
   * @schema SageMakerTransformJobSummary#TransformJobArn
   */
  readonly transformJobArn: string;

  /**
   * @schema SageMakerTransformJobSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema SageMakerTransformJobSummary#TransformEndTime
   */
  readonly transformEndTime?: string;

  /**
   * @schema SageMakerTransformJobSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerTransformJobSummary#TransformJobStatus
   */
  readonly transformJobStatus: string;

  /**
   * @schema SageMakerTransformJobSummary#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema SageMakerTrialComponentSummary
 */
export interface SageMakerTrialComponentSummary {
  /**
   * @schema SageMakerTrialComponentSummary#TrialComponentName
   */
  readonly trialComponentName?: string;

  /**
   * @schema SageMakerTrialComponentSummary#TrialComponentArn
   */
  readonly trialComponentArn?: string;

  /**
   * @schema SageMakerTrialComponentSummary#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SageMakerTrialComponentSummary#TrialComponentSource
   */
  readonly trialComponentSource?: SageMakerTrialComponentSource;

  /**
   * @schema SageMakerTrialComponentSummary#Status
   */
  readonly status?: SageMakerTrialComponentStatus;

  /**
   * @schema SageMakerTrialComponentSummary#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema SageMakerTrialComponentSummary#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema SageMakerTrialComponentSummary#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerTrialComponentSummary#CreatedBy
   */
  readonly createdBy?: SageMakerUserContext;

  /**
   * @schema SageMakerTrialComponentSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerTrialComponentSummary#LastModifiedBy
   */
  readonly lastModifiedBy?: SageMakerUserContext;

}

/**
 * @schema SageMakerTrialSummary
 */
export interface SageMakerTrialSummary {
  /**
   * @schema SageMakerTrialSummary#TrialArn
   */
  readonly trialArn?: string;

  /**
   * @schema SageMakerTrialSummary#TrialName
   */
  readonly trialName?: string;

  /**
   * @schema SageMakerTrialSummary#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SageMakerTrialSummary#TrialSource
   */
  readonly trialSource?: SageMakerTrialSource;

  /**
   * @schema SageMakerTrialSummary#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerTrialSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * @schema SageMakerUserProfileDetails
 */
export interface SageMakerUserProfileDetails {
  /**
   * @schema SageMakerUserProfileDetails#DomainId
   */
  readonly domainId?: string;

  /**
   * @schema SageMakerUserProfileDetails#UserProfileName
   */
  readonly userProfileName?: string;

  /**
   * @schema SageMakerUserProfileDetails#Status
   */
  readonly status?: string;

  /**
   * @schema SageMakerUserProfileDetails#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerUserProfileDetails#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * @schema SageMakerRenderableTask
 */
export interface SageMakerRenderableTask {
  /**
   * @schema SageMakerRenderableTask#Input
   */
  readonly input: string;

}

/**
 * @schema SageMakerRenderingError
 */
export interface SageMakerRenderingError {
  /**
   * @schema SageMakerRenderingError#Code
   */
  readonly code: string;

  /**
   * @schema SageMakerRenderingError#Message
   */
  readonly message: string;

}

/**
 * @schema SageMakerSearchExpression
 */
export interface SageMakerSearchExpression {
  /**
   * @schema SageMakerSearchExpression#Filters
   */
  readonly filters?: SageMakerFilter[];

  /**
   * @schema SageMakerSearchExpression#NestedFilters
   */
  readonly nestedFilters?: SageMakerNestedFilters[];

  /**
   * @schema SageMakerSearchExpression#SubExpressions
   */
  readonly subExpressions?: SageMakerSearchExpression[];

  /**
   * @schema SageMakerSearchExpression#Operator
   */
  readonly operator?: string;

}

/**
 * @schema SageMakerSearchRecord
 */
export interface SageMakerSearchRecord {
  /**
   * @schema SageMakerSearchRecord#TrainingJob
   */
  readonly trainingJob?: SageMakerTrainingJob;

  /**
   * @schema SageMakerSearchRecord#Experiment
   */
  readonly experiment?: SageMakerExperiment;

  /**
   * @schema SageMakerSearchRecord#Trial
   */
  readonly trial?: SageMakerTrial;

  /**
   * @schema SageMakerSearchRecord#TrialComponent
   */
  readonly trialComponent?: SageMakerTrialComponent;

}

/**
 * @schema SageMakerGitConfigForUpdate
 */
export interface SageMakerGitConfigForUpdate {
  /**
   * @schema SageMakerGitConfigForUpdate#SecretArn
   */
  readonly secretArn?: string;

}

/**
 * @schema SageMakerVariantProperty
 */
export interface SageMakerVariantProperty {
  /**
   * @schema SageMakerVariantProperty#VariantPropertyType
   */
  readonly variantPropertyType: string;

}

/**
 * @schema SageMakerDesiredWeightAndCapacity
 */
export interface SageMakerDesiredWeightAndCapacity {
  /**
   * @schema SageMakerDesiredWeightAndCapacity#VariantName
   */
  readonly variantName: string;

  /**
   * @schema SageMakerDesiredWeightAndCapacity#DesiredWeight
   */
  readonly desiredWeight?: number;

  /**
   * @schema SageMakerDesiredWeightAndCapacity#DesiredInstanceCount
   */
  readonly desiredInstanceCount?: number;

}

/**
 * @schema SageMakerHyperParameterSpecification
 */
export interface SageMakerHyperParameterSpecification {
  /**
   * @schema SageMakerHyperParameterSpecification#Name
   */
  readonly name: string;

  /**
   * @schema SageMakerHyperParameterSpecification#Description
   */
  readonly description?: string;

  /**
   * @schema SageMakerHyperParameterSpecification#Type
   */
  readonly type: string;

  /**
   * @schema SageMakerHyperParameterSpecification#Range
   */
  readonly range?: SageMakerParameterRange;

  /**
   * @schema SageMakerHyperParameterSpecification#IsTunable
   */
  readonly isTunable?: boolean;

  /**
   * @schema SageMakerHyperParameterSpecification#IsRequired
   */
  readonly isRequired?: boolean;

  /**
   * @schema SageMakerHyperParameterSpecification#DefaultValue
   */
  readonly defaultValue?: string;

}

/**
 * @schema SageMakerMetricDefinition
 */
export interface SageMakerMetricDefinition {
  /**
   * @schema SageMakerMetricDefinition#Name
   */
  readonly name: string;

  /**
   * @schema SageMakerMetricDefinition#Regex
   */
  readonly regex: string;

}

/**
 * @schema SageMakerChannelSpecification
 */
export interface SageMakerChannelSpecification {
  /**
   * @schema SageMakerChannelSpecification#Name
   */
  readonly name: string;

  /**
   * @schema SageMakerChannelSpecification#Description
   */
  readonly description?: string;

  /**
   * @schema SageMakerChannelSpecification#IsRequired
   */
  readonly isRequired?: boolean;

  /**
   * @schema SageMakerChannelSpecification#SupportedContentTypes
   */
  readonly supportedContentTypes: string[];

  /**
   * @schema SageMakerChannelSpecification#SupportedCompressionTypes
   */
  readonly supportedCompressionTypes?: string[];

  /**
   * @schema SageMakerChannelSpecification#SupportedInputModes
   */
  readonly supportedInputModes: string[];

}

/**
 * @schema SageMakerHyperParameterTuningJobObjective
 */
export interface SageMakerHyperParameterTuningJobObjective {
  /**
   * @schema SageMakerHyperParameterTuningJobObjective#Type
   */
  readonly type: string;

  /**
   * @schema SageMakerHyperParameterTuningJobObjective#MetricName
   */
  readonly metricName: string;

}

/**
 * @schema SageMakerModelPackageContainerDefinition
 */
export interface SageMakerModelPackageContainerDefinition {
  /**
   * @schema SageMakerModelPackageContainerDefinition#ContainerHostname
   */
  readonly containerHostname?: string;

  /**
   * @schema SageMakerModelPackageContainerDefinition#Image
   */
  readonly image: string;

  /**
   * @schema SageMakerModelPackageContainerDefinition#ImageDigest
   */
  readonly imageDigest?: string;

  /**
   * @schema SageMakerModelPackageContainerDefinition#ModelDataUrl
   */
  readonly modelDataUrl?: string;

  /**
   * @schema SageMakerModelPackageContainerDefinition#ProductId
   */
  readonly productId?: string;

}

/**
 * @schema SageMakerAlgorithmValidationProfile
 */
export interface SageMakerAlgorithmValidationProfile {
  /**
   * @schema SageMakerAlgorithmValidationProfile#ProfileName
   */
  readonly profileName: string;

  /**
   * @schema SageMakerAlgorithmValidationProfile#TrainingJobDefinition
   */
  readonly trainingJobDefinition: SageMakerTrainingJobDefinition;

  /**
   * @schema SageMakerAlgorithmValidationProfile#TransformJobDefinition
   */
  readonly transformJobDefinition?: SageMakerTransformJobDefinition;

}

/**
 * @schema SageMakerKernelSpec
 */
export interface SageMakerKernelSpec {
  /**
   * @schema SageMakerKernelSpec#Name
   */
  readonly name: string;

  /**
   * @schema SageMakerKernelSpec#DisplayName
   */
  readonly displayName?: string;

}

/**
 * @schema SageMakerFileSystemConfig
 */
export interface SageMakerFileSystemConfig {
  /**
   * @schema SageMakerFileSystemConfig#MountPath
   */
  readonly mountPath?: string;

  /**
   * @schema SageMakerFileSystemConfig#DefaultUid
   */
  readonly defaultUid?: number;

  /**
   * @schema SageMakerFileSystemConfig#DefaultGid
   */
  readonly defaultGid?: number;

}

/**
 * @schema SageMakerAutoMlDataSource
 */
export interface SageMakerAutoMlDataSource {
  /**
   * @schema SageMakerAutoMlDataSource#S3DataSource
   */
  readonly s3DataSource: SageMakerAutoMls3DataSource;

}

/**
 * @schema SageMakerAutoMlJobCompletionCriteria
 */
export interface SageMakerAutoMlJobCompletionCriteria {
  /**
   * @schema SageMakerAutoMlJobCompletionCriteria#MaxCandidates
   */
  readonly maxCandidates?: number;

  /**
   * @schema SageMakerAutoMlJobCompletionCriteria#MaxRuntimePerTrainingJobInSeconds
   */
  readonly maxRuntimePerTrainingJobInSeconds?: number;

  /**
   * @schema SageMakerAutoMlJobCompletionCriteria#MaxAutoMLJobRuntimeInSeconds
   */
  readonly maxAutoMlJobRuntimeInSeconds?: number;

}

/**
 * @schema SageMakerAutoMlSecurityConfig
 */
export interface SageMakerAutoMlSecurityConfig {
  /**
   * @schema SageMakerAutoMlSecurityConfig#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema SageMakerAutoMlSecurityConfig#EnableInterContainerTrafficEncryption
   */
  readonly enableInterContainerTrafficEncryption?: boolean;

  /**
   * @schema SageMakerAutoMlSecurityConfig#VpcConfig
   */
  readonly vpcConfig?: SageMakerVpcConfig;

}

/**
 * @schema SageMakerTargetPlatform
 */
export interface SageMakerTargetPlatform {
  /**
   * @schema SageMakerTargetPlatform#Os
   */
  readonly os: string;

  /**
   * @schema SageMakerTargetPlatform#Arch
   */
  readonly arch: string;

  /**
   * @schema SageMakerTargetPlatform#Accelerator
   */
  readonly accelerator?: string;

}

/**
 * @schema SageMakerSharingSettings
 */
export interface SageMakerSharingSettings {
  /**
   * @schema SageMakerSharingSettings#NotebookOutputOption
   */
  readonly notebookOutputOption?: string;

  /**
   * @schema SageMakerSharingSettings#S3OutputPath
   */
  readonly s3OutputPath?: string;

  /**
   * @schema SageMakerSharingSettings#S3KmsKeyId
   */
  readonly s3KmsKeyId?: string;

}

/**
 * @schema SageMakerJupyterServerAppSettings
 */
export interface SageMakerJupyterServerAppSettings {
  /**
   * @schema SageMakerJupyterServerAppSettings#DefaultResourceSpec
   */
  readonly defaultResourceSpec?: SageMakerResourceSpec;

}

/**
 * @schema SageMakerKernelGatewayAppSettings
 */
export interface SageMakerKernelGatewayAppSettings {
  /**
   * @schema SageMakerKernelGatewayAppSettings#DefaultResourceSpec
   */
  readonly defaultResourceSpec?: SageMakerResourceSpec;

  /**
   * @schema SageMakerKernelGatewayAppSettings#CustomImages
   */
  readonly customImages?: SageMakerCustomImage[];

}

/**
 * @schema SageMakerTensorBoardAppSettings
 */
export interface SageMakerTensorBoardAppSettings {
  /**
   * @schema SageMakerTensorBoardAppSettings#DefaultResourceSpec
   */
  readonly defaultResourceSpec?: SageMakerResourceSpec;

}

/**
 * @schema SageMakerCaptureOption
 */
export interface SageMakerCaptureOption {
  /**
   * @schema SageMakerCaptureOption#CaptureMode
   */
  readonly captureMode: string;

}

/**
 * @schema SageMakerCaptureContentTypeHeader
 */
export interface SageMakerCaptureContentTypeHeader {
  /**
   * @schema SageMakerCaptureContentTypeHeader#CsvContentTypes
   */
  readonly csvContentTypes?: string[];

  /**
   * @schema SageMakerCaptureContentTypeHeader#JsonContentTypes
   */
  readonly jsonContentTypes?: string[];

}

/**
 * @schema SageMakerHumanLoopActivationConditionsConfig
 */
export interface SageMakerHumanLoopActivationConditionsConfig {
  /**
   * @schema SageMakerHumanLoopActivationConditionsConfig#HumanLoopActivationConditions
   */
  readonly humanLoopActivationConditions: string;

}

/**
 * @schema SageMakerPublicWorkforceTaskPrice
 */
export interface SageMakerPublicWorkforceTaskPrice {
  /**
   * @schema SageMakerPublicWorkforceTaskPrice#AmountInUsd
   */
  readonly amountInUsd?: SageMakerUsd;

}

/**
 * @schema SageMakerResourceLimits
 */
export interface SageMakerResourceLimits {
  /**
   * @schema SageMakerResourceLimits#MaxNumberOfTrainingJobs
   */
  readonly maxNumberOfTrainingJobs: number;

  /**
   * @schema SageMakerResourceLimits#MaxParallelTrainingJobs
   */
  readonly maxParallelTrainingJobs: number;

}

/**
 * @schema SageMakerParameterRanges
 */
export interface SageMakerParameterRanges {
  /**
   * @schema SageMakerParameterRanges#IntegerParameterRanges
   */
  readonly integerParameterRanges?: SageMakerIntegerParameterRange[];

  /**
   * @schema SageMakerParameterRanges#ContinuousParameterRanges
   */
  readonly continuousParameterRanges?: SageMakerContinuousParameterRange[];

  /**
   * @schema SageMakerParameterRanges#CategoricalParameterRanges
   */
  readonly categoricalParameterRanges?: SageMakerCategoricalParameterRange[];

}

/**
 * @schema SageMakerTuningJobCompletionCriteria
 */
export interface SageMakerTuningJobCompletionCriteria {
  /**
   * @schema SageMakerTuningJobCompletionCriteria#TargetObjectiveMetricValue
   */
  readonly targetObjectiveMetricValue: number;

}

/**
 * @schema SageMakerHyperParameterAlgorithmSpecification
 */
export interface SageMakerHyperParameterAlgorithmSpecification {
  /**
   * @schema SageMakerHyperParameterAlgorithmSpecification#TrainingImage
   */
  readonly trainingImage?: string;

  /**
   * @schema SageMakerHyperParameterAlgorithmSpecification#TrainingInputMode
   */
  readonly trainingInputMode: string;

  /**
   * @schema SageMakerHyperParameterAlgorithmSpecification#AlgorithmName
   */
  readonly algorithmName?: string;

  /**
   * @schema SageMakerHyperParameterAlgorithmSpecification#MetricDefinitions
   */
  readonly metricDefinitions?: SageMakerMetricDefinition[];

}

/**
 * @schema SageMakerParentHyperParameterTuningJob
 */
export interface SageMakerParentHyperParameterTuningJob {
  /**
   * @schema SageMakerParentHyperParameterTuningJob#HyperParameterTuningJobName
   */
  readonly hyperParameterTuningJobName?: string;

}

/**
 * @schema SageMakerLabelingJobDataSource
 */
export interface SageMakerLabelingJobDataSource {
  /**
   * @schema SageMakerLabelingJobDataSource#S3DataSource
   */
  readonly s3DataSource?: SageMakerLabelingJobS3DataSource;

  /**
   * @schema SageMakerLabelingJobDataSource#SnsDataSource
   */
  readonly snsDataSource?: SageMakerLabelingJobSnsDataSource;

}

/**
 * @schema SageMakerLabelingJobDataAttributes
 */
export interface SageMakerLabelingJobDataAttributes {
  /**
   * @schema SageMakerLabelingJobDataAttributes#ContentClassifiers
   */
  readonly contentClassifiers?: string[];

}

/**
 * @schema SageMakerLabelingJobResourceConfig
 */
export interface SageMakerLabelingJobResourceConfig {
  /**
   * @schema SageMakerLabelingJobResourceConfig#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

}

/**
 * @schema SageMakerUiConfig
 */
export interface SageMakerUiConfig {
  /**
   * @schema SageMakerUiConfig#UiTemplateS3Uri
   */
  readonly uiTemplateS3Uri?: string;

  /**
   * @schema SageMakerUiConfig#HumanTaskUiArn
   */
  readonly humanTaskUiArn?: string;

}

/**
 * @schema SageMakerAnnotationConsolidationConfig
 */
export interface SageMakerAnnotationConsolidationConfig {
  /**
   * @schema SageMakerAnnotationConsolidationConfig#AnnotationConsolidationLambdaArn
   */
  readonly annotationConsolidationLambdaArn: string;

}

/**
 * @schema SageMakerImageConfig
 */
export interface SageMakerImageConfig {
  /**
   * @schema SageMakerImageConfig#RepositoryAccessMode
   */
  readonly repositoryAccessMode: string;

}

/**
 * @schema SageMakerModelPackageValidationProfile
 */
export interface SageMakerModelPackageValidationProfile {
  /**
   * @schema SageMakerModelPackageValidationProfile#ProfileName
   */
  readonly profileName: string;

  /**
   * @schema SageMakerModelPackageValidationProfile#TransformJobDefinition
   */
  readonly transformJobDefinition: SageMakerTransformJobDefinition;

}

/**
 * @schema SageMakerSourceAlgorithm
 */
export interface SageMakerSourceAlgorithm {
  /**
   * @schema SageMakerSourceAlgorithm#ModelDataUrl
   */
  readonly modelDataUrl?: string;

  /**
   * @schema SageMakerSourceAlgorithm#AlgorithmName
   */
  readonly algorithmName: string;

}

/**
 * @schema SageMakerScheduleConfig
 */
export interface SageMakerScheduleConfig {
  /**
   * @schema SageMakerScheduleConfig#ScheduleExpression
   */
  readonly scheduleExpression: string;

}

/**
 * @schema SageMakerMonitoringJobDefinition
 */
export interface SageMakerMonitoringJobDefinition {
  /**
   * @schema SageMakerMonitoringJobDefinition#BaselineConfig
   */
  readonly baselineConfig?: SageMakerMonitoringBaselineConfig;

  /**
   * @schema SageMakerMonitoringJobDefinition#MonitoringInputs
   */
  readonly monitoringInputs: SageMakerMonitoringInput[];

  /**
   * @schema SageMakerMonitoringJobDefinition#MonitoringOutputConfig
   */
  readonly monitoringOutputConfig: SageMakerMonitoringOutputConfig;

  /**
   * @schema SageMakerMonitoringJobDefinition#MonitoringResources
   */
  readonly monitoringResources: SageMakerMonitoringResources;

  /**
   * @schema SageMakerMonitoringJobDefinition#MonitoringAppSpecification
   */
  readonly monitoringAppSpecification: SageMakerMonitoringAppSpecification;

  /**
   * @schema SageMakerMonitoringJobDefinition#StoppingCondition
   */
  readonly stoppingCondition?: SageMakerMonitoringStoppingCondition;

  /**
   * @schema SageMakerMonitoringJobDefinition#Environment
   */
  readonly environment?: { [key: string]: string };

  /**
   * @schema SageMakerMonitoringJobDefinition#NetworkConfig
   */
  readonly networkConfig?: SageMakerNetworkConfig;

  /**
   * @schema SageMakerMonitoringJobDefinition#RoleArn
   */
  readonly roleArn: string;

}

/**
 * @schema SageMakerProcessingS3Input
 */
export interface SageMakerProcessingS3Input {
  /**
   * @schema SageMakerProcessingS3Input#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema SageMakerProcessingS3Input#LocalPath
   */
  readonly localPath: string;

  /**
   * @schema SageMakerProcessingS3Input#S3DataType
   */
  readonly s3DataType: string;

  /**
   * @schema SageMakerProcessingS3Input#S3InputMode
   */
  readonly s3InputMode: string;

  /**
   * @schema SageMakerProcessingS3Input#S3DataDistributionType
   */
  readonly s3DataDistributionType?: string;

  /**
   * @schema SageMakerProcessingS3Input#S3CompressionType
   */
  readonly s3CompressionType?: string;

}

/**
 * @schema SageMakerProcessingOutput
 */
export interface SageMakerProcessingOutput {
  /**
   * @schema SageMakerProcessingOutput#OutputName
   */
  readonly outputName: string;

  /**
   * @schema SageMakerProcessingOutput#S3Output
   */
  readonly s3Output: SageMakerProcessingS3Output;

}

/**
 * @schema SageMakerProcessingClusterConfig
 */
export interface SageMakerProcessingClusterConfig {
  /**
   * @schema SageMakerProcessingClusterConfig#InstanceCount
   */
  readonly instanceCount: number;

  /**
   * @schema SageMakerProcessingClusterConfig#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema SageMakerProcessingClusterConfig#VolumeSizeInGB
   */
  readonly volumeSizeInGb: number;

  /**
   * @schema SageMakerProcessingClusterConfig#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

}

/**
 * @schema SageMakerDataSource
 */
export interface SageMakerDataSource {
  /**
   * @schema SageMakerDataSource#S3DataSource
   */
  readonly s3DataSource?: SageMakerS3DataSource;

  /**
   * @schema SageMakerDataSource#FileSystemDataSource
   */
  readonly fileSystemDataSource?: SageMakerFileSystemDataSource;

}

/**
 * @schema SageMakerShuffleConfig
 */
export interface SageMakerShuffleConfig {
  /**
   * @schema SageMakerShuffleConfig#Seed
   */
  readonly seed: number;

}

/**
 * @schema SageMakerCollectionConfiguration
 */
export interface SageMakerCollectionConfiguration {
  /**
   * @schema SageMakerCollectionConfiguration#CollectionName
   */
  readonly collectionName?: string;

  /**
   * @schema SageMakerCollectionConfiguration#CollectionParameters
   */
  readonly collectionParameters?: { [key: string]: string };

}

/**
 * @schema SageMakerTransformDataSource
 */
export interface SageMakerTransformDataSource {
  /**
   * @schema SageMakerTransformDataSource#S3DataSource
   */
  readonly s3DataSource: SageMakerTransformS3DataSource;

}

/**
 * @schema SageMakerCognitoMemberDefinition
 */
export interface SageMakerCognitoMemberDefinition {
  /**
   * @schema SageMakerCognitoMemberDefinition#UserPool
   */
  readonly userPool: string;

  /**
   * @schema SageMakerCognitoMemberDefinition#UserGroup
   */
  readonly userGroup: string;

  /**
   * @schema SageMakerCognitoMemberDefinition#ClientId
   */
  readonly clientId: string;

}

/**
 * @schema SageMakerOidcMemberDefinition
 */
export interface SageMakerOidcMemberDefinition {
  /**
   * @schema SageMakerOidcMemberDefinition#Groups
   */
  readonly groups: string[];

}

/**
 * @schema SageMakerAlgorithmStatusItem
 */
export interface SageMakerAlgorithmStatusItem {
  /**
   * @schema SageMakerAlgorithmStatusItem#Name
   */
  readonly name: string;

  /**
   * @schema SageMakerAlgorithmStatusItem#Status
   */
  readonly status: string;

  /**
   * @schema SageMakerAlgorithmStatusItem#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema SageMakerFinalAutoMlJobObjectiveMetric
 */
export interface SageMakerFinalAutoMlJobObjectiveMetric {
  /**
   * @schema SageMakerFinalAutoMlJobObjectiveMetric#Type
   */
  readonly type?: string;

  /**
   * @schema SageMakerFinalAutoMlJobObjectiveMetric#MetricName
   */
  readonly metricName: string;

  /**
   * @schema SageMakerFinalAutoMlJobObjectiveMetric#Value
   */
  readonly value: number;

}

/**
 * @schema SageMakerAutoMlCandidateStep
 */
export interface SageMakerAutoMlCandidateStep {
  /**
   * @schema SageMakerAutoMlCandidateStep#CandidateStepType
   */
  readonly candidateStepType: string;

  /**
   * @schema SageMakerAutoMlCandidateStep#CandidateStepArn
   */
  readonly candidateStepArn: string;

  /**
   * @schema SageMakerAutoMlCandidateStep#CandidateStepName
   */
  readonly candidateStepName: string;

}

/**
 * @schema SageMakerAutoMlContainerDefinition
 */
export interface SageMakerAutoMlContainerDefinition {
  /**
   * @schema SageMakerAutoMlContainerDefinition#Image
   */
  readonly image: string;

  /**
   * @schema SageMakerAutoMlContainerDefinition#ModelDataUrl
   */
  readonly modelDataUrl: string;

  /**
   * @schema SageMakerAutoMlContainerDefinition#Environment
   */
  readonly environment?: { [key: string]: string };

}

/**
 * @schema SageMakerDeployedImage
 */
export interface SageMakerDeployedImage {
  /**
   * @schema SageMakerDeployedImage#SpecifiedImage
   */
  readonly specifiedImage?: string;

  /**
   * @schema SageMakerDeployedImage#ResolvedImage
   */
  readonly resolvedImage?: string;

  /**
   * @schema SageMakerDeployedImage#ResolutionTime
   */
  readonly resolutionTime?: string;

}

/**
 * @schema SageMakerFinalHyperParameterTuningJobObjectiveMetric
 */
export interface SageMakerFinalHyperParameterTuningJobObjectiveMetric {
  /**
   * @schema SageMakerFinalHyperParameterTuningJobObjectiveMetric#Type
   */
  readonly type?: string;

  /**
   * @schema SageMakerFinalHyperParameterTuningJobObjectiveMetric#MetricName
   */
  readonly metricName: string;

  /**
   * @schema SageMakerFinalHyperParameterTuningJobObjectiveMetric#Value
   */
  readonly value: number;

}

/**
 * @schema SageMakerModelPackageStatusItem
 */
export interface SageMakerModelPackageStatusItem {
  /**
   * @schema SageMakerModelPackageStatusItem#Name
   */
  readonly name: string;

  /**
   * @schema SageMakerModelPackageStatusItem#Status
   */
  readonly status: string;

  /**
   * @schema SageMakerModelPackageStatusItem#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema SageMakerOidcConfigForResponse
 */
export interface SageMakerOidcConfigForResponse {
  /**
   * @schema SageMakerOidcConfigForResponse#ClientId
   */
  readonly clientId?: string;

  /**
   * @schema SageMakerOidcConfigForResponse#Issuer
   */
  readonly issuer?: string;

  /**
   * @schema SageMakerOidcConfigForResponse#AuthorizationEndpoint
   */
  readonly authorizationEndpoint?: string;

  /**
   * @schema SageMakerOidcConfigForResponse#TokenEndpoint
   */
  readonly tokenEndpoint?: string;

  /**
   * @schema SageMakerOidcConfigForResponse#UserInfoEndpoint
   */
  readonly userInfoEndpoint?: string;

  /**
   * @schema SageMakerOidcConfigForResponse#LogoutEndpoint
   */
  readonly logoutEndpoint?: string;

  /**
   * @schema SageMakerOidcConfigForResponse#JwksUri
   */
  readonly jwksUri?: string;

}

/**
 * @schema SageMakerPropertyNameQuery
 */
export interface SageMakerPropertyNameQuery {
  /**
   * @schema SageMakerPropertyNameQuery#PropertyNameHint
   */
  readonly propertyNameHint: string;

}

/**
 * @schema SageMakerLabelCountersForWorkteam
 */
export interface SageMakerLabelCountersForWorkteam {
  /**
   * @schema SageMakerLabelCountersForWorkteam#HumanLabeled
   */
  readonly humanLabeled?: number;

  /**
   * @schema SageMakerLabelCountersForWorkteam#PendingHuman
   */
  readonly pendingHuman?: number;

  /**
   * @schema SageMakerLabelCountersForWorkteam#Total
   */
  readonly total?: number;

}

/**
 * @schema SageMakerFilter
 */
export interface SageMakerFilter {
  /**
   * @schema SageMakerFilter#Name
   */
  readonly name: string;

  /**
   * @schema SageMakerFilter#Operator
   */
  readonly operator?: string;

  /**
   * @schema SageMakerFilter#Value
   */
  readonly value?: string;

}

/**
 * @schema SageMakerNestedFilters
 */
export interface SageMakerNestedFilters {
  /**
   * @schema SageMakerNestedFilters#NestedPropertyName
   */
  readonly nestedPropertyName: string;

  /**
   * @schema SageMakerNestedFilters#Filters
   */
  readonly filters: SageMakerFilter[];

}

/**
 * @schema SageMakerTrainingJob
 */
export interface SageMakerTrainingJob {
  /**
   * @schema SageMakerTrainingJob#TrainingJobName
   */
  readonly trainingJobName?: string;

  /**
   * @schema SageMakerTrainingJob#TrainingJobArn
   */
  readonly trainingJobArn?: string;

  /**
   * @schema SageMakerTrainingJob#TuningJobArn
   */
  readonly tuningJobArn?: string;

  /**
   * @schema SageMakerTrainingJob#LabelingJobArn
   */
  readonly labelingJobArn?: string;

  /**
   * @schema SageMakerTrainingJob#AutoMLJobArn
   */
  readonly autoMlJobArn?: string;

  /**
   * @schema SageMakerTrainingJob#ModelArtifacts
   */
  readonly modelArtifacts?: SageMakerModelArtifacts;

  /**
   * @schema SageMakerTrainingJob#TrainingJobStatus
   */
  readonly trainingJobStatus?: string;

  /**
   * @schema SageMakerTrainingJob#SecondaryStatus
   */
  readonly secondaryStatus?: string;

  /**
   * @schema SageMakerTrainingJob#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SageMakerTrainingJob#HyperParameters
   */
  readonly hyperParameters?: { [key: string]: string };

  /**
   * @schema SageMakerTrainingJob#AlgorithmSpecification
   */
  readonly algorithmSpecification?: SageMakerAlgorithmSpecification;

  /**
   * @schema SageMakerTrainingJob#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema SageMakerTrainingJob#InputDataConfig
   */
  readonly inputDataConfig?: SageMakerChannel[];

  /**
   * @schema SageMakerTrainingJob#OutputDataConfig
   */
  readonly outputDataConfig?: SageMakerOutputDataConfig;

  /**
   * @schema SageMakerTrainingJob#ResourceConfig
   */
  readonly resourceConfig?: SageMakerResourceConfig;

  /**
   * @schema SageMakerTrainingJob#VpcConfig
   */
  readonly vpcConfig?: SageMakerVpcConfig;

  /**
   * @schema SageMakerTrainingJob#StoppingCondition
   */
  readonly stoppingCondition?: SageMakerStoppingCondition;

  /**
   * @schema SageMakerTrainingJob#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerTrainingJob#TrainingStartTime
   */
  readonly trainingStartTime?: string;

  /**
   * @schema SageMakerTrainingJob#TrainingEndTime
   */
  readonly trainingEndTime?: string;

  /**
   * @schema SageMakerTrainingJob#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerTrainingJob#SecondaryStatusTransitions
   */
  readonly secondaryStatusTransitions?: SageMakerSecondaryStatusTransition[];

  /**
   * @schema SageMakerTrainingJob#FinalMetricDataList
   */
  readonly finalMetricDataList?: SageMakerMetricData[];

  /**
   * @schema SageMakerTrainingJob#EnableNetworkIsolation
   */
  readonly enableNetworkIsolation?: boolean;

  /**
   * @schema SageMakerTrainingJob#EnableInterContainerTrafficEncryption
   */
  readonly enableInterContainerTrafficEncryption?: boolean;

  /**
   * @schema SageMakerTrainingJob#EnableManagedSpotTraining
   */
  readonly enableManagedSpotTraining?: boolean;

  /**
   * @schema SageMakerTrainingJob#CheckpointConfig
   */
  readonly checkpointConfig?: SageMakerCheckpointConfig;

  /**
   * @schema SageMakerTrainingJob#TrainingTimeInSeconds
   */
  readonly trainingTimeInSeconds?: number;

  /**
   * @schema SageMakerTrainingJob#BillableTimeInSeconds
   */
  readonly billableTimeInSeconds?: number;

  /**
   * @schema SageMakerTrainingJob#DebugHookConfig
   */
  readonly debugHookConfig?: SageMakerDebugHookConfig;

  /**
   * @schema SageMakerTrainingJob#ExperimentConfig
   */
  readonly experimentConfig?: SageMakerExperimentConfig;

  /**
   * @schema SageMakerTrainingJob#DebugRuleConfigurations
   */
  readonly debugRuleConfigurations?: SageMakerDebugRuleConfiguration[];

  /**
   * @schema SageMakerTrainingJob#TensorBoardOutputConfig
   */
  readonly tensorBoardOutputConfig?: SageMakerTensorBoardOutputConfig;

  /**
   * @schema SageMakerTrainingJob#DebugRuleEvaluationStatuses
   */
  readonly debugRuleEvaluationStatuses?: SageMakerDebugRuleEvaluationStatus[];

  /**
   * @schema SageMakerTrainingJob#Tags
   */
  readonly tags?: SageMakerTag[];

}

/**
 * @schema SageMakerExperiment
 */
export interface SageMakerExperiment {
  /**
   * @schema SageMakerExperiment#ExperimentName
   */
  readonly experimentName?: string;

  /**
   * @schema SageMakerExperiment#ExperimentArn
   */
  readonly experimentArn?: string;

  /**
   * @schema SageMakerExperiment#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SageMakerExperiment#Source
   */
  readonly source?: SageMakerExperimentSource;

  /**
   * @schema SageMakerExperiment#Description
   */
  readonly description?: string;

  /**
   * @schema SageMakerExperiment#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerExperiment#CreatedBy
   */
  readonly createdBy?: SageMakerUserContext;

  /**
   * @schema SageMakerExperiment#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerExperiment#LastModifiedBy
   */
  readonly lastModifiedBy?: SageMakerUserContext;

  /**
   * @schema SageMakerExperiment#Tags
   */
  readonly tags?: SageMakerTag[];

}

/**
 * @schema SageMakerTrial
 */
export interface SageMakerTrial {
  /**
   * @schema SageMakerTrial#TrialName
   */
  readonly trialName?: string;

  /**
   * @schema SageMakerTrial#TrialArn
   */
  readonly trialArn?: string;

  /**
   * @schema SageMakerTrial#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SageMakerTrial#ExperimentName
   */
  readonly experimentName?: string;

  /**
   * @schema SageMakerTrial#Source
   */
  readonly source?: SageMakerTrialSource;

  /**
   * @schema SageMakerTrial#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerTrial#CreatedBy
   */
  readonly createdBy?: SageMakerUserContext;

  /**
   * @schema SageMakerTrial#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerTrial#LastModifiedBy
   */
  readonly lastModifiedBy?: SageMakerUserContext;

  /**
   * @schema SageMakerTrial#Tags
   */
  readonly tags?: SageMakerTag[];

  /**
   * @schema SageMakerTrial#TrialComponentSummaries
   */
  readonly trialComponentSummaries?: SageMakerTrialComponentSimpleSummary[];

}

/**
 * @schema SageMakerTrialComponent
 */
export interface SageMakerTrialComponent {
  /**
   * @schema SageMakerTrialComponent#TrialComponentName
   */
  readonly trialComponentName?: string;

  /**
   * @schema SageMakerTrialComponent#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema SageMakerTrialComponent#TrialComponentArn
   */
  readonly trialComponentArn?: string;

  /**
   * @schema SageMakerTrialComponent#Source
   */
  readonly source?: SageMakerTrialComponentSource;

  /**
   * @schema SageMakerTrialComponent#Status
   */
  readonly status?: SageMakerTrialComponentStatus;

  /**
   * @schema SageMakerTrialComponent#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema SageMakerTrialComponent#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema SageMakerTrialComponent#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerTrialComponent#CreatedBy
   */
  readonly createdBy?: SageMakerUserContext;

  /**
   * @schema SageMakerTrialComponent#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerTrialComponent#LastModifiedBy
   */
  readonly lastModifiedBy?: SageMakerUserContext;

  /**
   * @schema SageMakerTrialComponent#Parameters
   */
  readonly parameters?: { [key: string]: SageMakerTrialComponentParameterValue };

  /**
   * @schema SageMakerTrialComponent#InputArtifacts
   */
  readonly inputArtifacts?: { [key: string]: SageMakerTrialComponentArtifact };

  /**
   * @schema SageMakerTrialComponent#OutputArtifacts
   */
  readonly outputArtifacts?: { [key: string]: SageMakerTrialComponentArtifact };

  /**
   * @schema SageMakerTrialComponent#Metrics
   */
  readonly metrics?: SageMakerTrialComponentMetricSummary[];

  /**
   * @schema SageMakerTrialComponent#SourceDetail
   */
  readonly sourceDetail?: SageMakerTrialComponentSourceDetail;

  /**
   * @schema SageMakerTrialComponent#Tags
   */
  readonly tags?: SageMakerTag[];

  /**
   * @schema SageMakerTrialComponent#Parents
   */
  readonly parents?: SageMakerParent[];

}

/**
 * @schema SageMakerParameterRange
 */
export interface SageMakerParameterRange {
  /**
   * @schema SageMakerParameterRange#IntegerParameterRangeSpecification
   */
  readonly integerParameterRangeSpecification?: SageMakerIntegerParameterRangeSpecification;

  /**
   * @schema SageMakerParameterRange#ContinuousParameterRangeSpecification
   */
  readonly continuousParameterRangeSpecification?: SageMakerContinuousParameterRangeSpecification;

  /**
   * @schema SageMakerParameterRange#CategoricalParameterRangeSpecification
   */
  readonly categoricalParameterRangeSpecification?: SageMakerCategoricalParameterRangeSpecification;

}

/**
 * @schema SageMakerTrainingJobDefinition
 */
export interface SageMakerTrainingJobDefinition {
  /**
   * @schema SageMakerTrainingJobDefinition#TrainingInputMode
   */
  readonly trainingInputMode: string;

  /**
   * @schema SageMakerTrainingJobDefinition#HyperParameters
   */
  readonly hyperParameters?: { [key: string]: string };

  /**
   * @schema SageMakerTrainingJobDefinition#InputDataConfig
   */
  readonly inputDataConfig: SageMakerChannel[];

  /**
   * @schema SageMakerTrainingJobDefinition#OutputDataConfig
   */
  readonly outputDataConfig: SageMakerOutputDataConfig;

  /**
   * @schema SageMakerTrainingJobDefinition#ResourceConfig
   */
  readonly resourceConfig: SageMakerResourceConfig;

  /**
   * @schema SageMakerTrainingJobDefinition#StoppingCondition
   */
  readonly stoppingCondition: SageMakerStoppingCondition;

}

/**
 * @schema SageMakerTransformJobDefinition
 */
export interface SageMakerTransformJobDefinition {
  /**
   * @schema SageMakerTransformJobDefinition#MaxConcurrentTransforms
   */
  readonly maxConcurrentTransforms?: number;

  /**
   * @schema SageMakerTransformJobDefinition#MaxPayloadInMB
   */
  readonly maxPayloadInMb?: number;

  /**
   * @schema SageMakerTransformJobDefinition#BatchStrategy
   */
  readonly batchStrategy?: string;

  /**
   * @schema SageMakerTransformJobDefinition#Environment
   */
  readonly environment?: { [key: string]: string };

  /**
   * @schema SageMakerTransformJobDefinition#TransformInput
   */
  readonly transformInput: SageMakerTransformInput;

  /**
   * @schema SageMakerTransformJobDefinition#TransformOutput
   */
  readonly transformOutput: SageMakerTransformOutput;

  /**
   * @schema SageMakerTransformJobDefinition#TransformResources
   */
  readonly transformResources: SageMakerTransformResources;

}

/**
 * @schema SageMakerAutoMls3DataSource
 */
export interface SageMakerAutoMls3DataSource {
  /**
   * @schema SageMakerAutoMls3DataSource#S3DataType
   */
  readonly s3DataType: string;

  /**
   * @schema SageMakerAutoMls3DataSource#S3Uri
   */
  readonly s3Uri: string;

}

/**
 * @schema SageMakerCustomImage
 */
export interface SageMakerCustomImage {
  /**
   * @schema SageMakerCustomImage#ImageName
   */
  readonly imageName: string;

  /**
   * @schema SageMakerCustomImage#ImageVersionNumber
   */
  readonly imageVersionNumber?: number;

  /**
   * @schema SageMakerCustomImage#AppImageConfigName
   */
  readonly appImageConfigName: string;

}

/**
 * @schema SageMakerUsd
 */
export interface SageMakerUsd {
  /**
   * @schema SageMakerUsd#Dollars
   */
  readonly dollars?: number;

  /**
   * @schema SageMakerUsd#Cents
   */
  readonly cents?: number;

  /**
   * @schema SageMakerUsd#TenthFractionsOfACent
   */
  readonly tenthFractionsOfACent?: number;

}

/**
 * @schema SageMakerIntegerParameterRange
 */
export interface SageMakerIntegerParameterRange {
  /**
   * @schema SageMakerIntegerParameterRange#Name
   */
  readonly name: string;

  /**
   * @schema SageMakerIntegerParameterRange#MinValue
   */
  readonly minValue: string;

  /**
   * @schema SageMakerIntegerParameterRange#MaxValue
   */
  readonly maxValue: string;

  /**
   * @schema SageMakerIntegerParameterRange#ScalingType
   */
  readonly scalingType?: string;

}

/**
 * @schema SageMakerContinuousParameterRange
 */
export interface SageMakerContinuousParameterRange {
  /**
   * @schema SageMakerContinuousParameterRange#Name
   */
  readonly name: string;

  /**
   * @schema SageMakerContinuousParameterRange#MinValue
   */
  readonly minValue: string;

  /**
   * @schema SageMakerContinuousParameterRange#MaxValue
   */
  readonly maxValue: string;

  /**
   * @schema SageMakerContinuousParameterRange#ScalingType
   */
  readonly scalingType?: string;

}

/**
 * @schema SageMakerCategoricalParameterRange
 */
export interface SageMakerCategoricalParameterRange {
  /**
   * @schema SageMakerCategoricalParameterRange#Name
   */
  readonly name: string;

  /**
   * @schema SageMakerCategoricalParameterRange#Values
   */
  readonly values: string[];

}

/**
 * @schema SageMakerLabelingJobS3DataSource
 */
export interface SageMakerLabelingJobS3DataSource {
  /**
   * @schema SageMakerLabelingJobS3DataSource#ManifestS3Uri
   */
  readonly manifestS3Uri: string;

}

/**
 * @schema SageMakerLabelingJobSnsDataSource
 */
export interface SageMakerLabelingJobSnsDataSource {
  /**
   * @schema SageMakerLabelingJobSnsDataSource#SnsTopicArn
   */
  readonly snsTopicArn: string;

}

/**
 * @schema SageMakerMonitoringBaselineConfig
 */
export interface SageMakerMonitoringBaselineConfig {
  /**
   * @schema SageMakerMonitoringBaselineConfig#ConstraintsResource
   */
  readonly constraintsResource?: SageMakerMonitoringConstraintsResource;

  /**
   * @schema SageMakerMonitoringBaselineConfig#StatisticsResource
   */
  readonly statisticsResource?: SageMakerMonitoringStatisticsResource;

}

/**
 * @schema SageMakerMonitoringInput
 */
export interface SageMakerMonitoringInput {
  /**
   * @schema SageMakerMonitoringInput#EndpointInput
   */
  readonly endpointInput: SageMakerEndpointInput;

}

/**
 * @schema SageMakerMonitoringOutputConfig
 */
export interface SageMakerMonitoringOutputConfig {
  /**
   * @schema SageMakerMonitoringOutputConfig#MonitoringOutputs
   */
  readonly monitoringOutputs: SageMakerMonitoringOutput[];

  /**
   * @schema SageMakerMonitoringOutputConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema SageMakerMonitoringResources
 */
export interface SageMakerMonitoringResources {
  /**
   * @schema SageMakerMonitoringResources#ClusterConfig
   */
  readonly clusterConfig: SageMakerMonitoringClusterConfig;

}

/**
 * @schema SageMakerMonitoringAppSpecification
 */
export interface SageMakerMonitoringAppSpecification {
  /**
   * @schema SageMakerMonitoringAppSpecification#ImageUri
   */
  readonly imageUri: string;

  /**
   * @schema SageMakerMonitoringAppSpecification#ContainerEntrypoint
   */
  readonly containerEntrypoint?: string[];

  /**
   * @schema SageMakerMonitoringAppSpecification#ContainerArguments
   */
  readonly containerArguments?: string[];

  /**
   * @schema SageMakerMonitoringAppSpecification#RecordPreprocessorSourceUri
   */
  readonly recordPreprocessorSourceUri?: string;

  /**
   * @schema SageMakerMonitoringAppSpecification#PostAnalyticsProcessorSourceUri
   */
  readonly postAnalyticsProcessorSourceUri?: string;

}

/**
 * @schema SageMakerMonitoringStoppingCondition
 */
export interface SageMakerMonitoringStoppingCondition {
  /**
   * @schema SageMakerMonitoringStoppingCondition#MaxRuntimeInSeconds
   */
  readonly maxRuntimeInSeconds: number;

}

/**
 * @schema SageMakerProcessingS3Output
 */
export interface SageMakerProcessingS3Output {
  /**
   * @schema SageMakerProcessingS3Output#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema SageMakerProcessingS3Output#LocalPath
   */
  readonly localPath: string;

  /**
   * @schema SageMakerProcessingS3Output#S3UploadMode
   */
  readonly s3UploadMode: string;

}

/**
 * @schema SageMakerS3DataSource
 */
export interface SageMakerS3DataSource {
  /**
   * @schema SageMakerS3DataSource#S3DataType
   */
  readonly s3DataType: string;

  /**
   * @schema SageMakerS3DataSource#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema SageMakerS3DataSource#S3DataDistributionType
   */
  readonly s3DataDistributionType?: string;

  /**
   * @schema SageMakerS3DataSource#AttributeNames
   */
  readonly attributeNames?: string[];

}

/**
 * @schema SageMakerFileSystemDataSource
 */
export interface SageMakerFileSystemDataSource {
  /**
   * @schema SageMakerFileSystemDataSource#FileSystemId
   */
  readonly fileSystemId: string;

  /**
   * @schema SageMakerFileSystemDataSource#FileSystemAccessMode
   */
  readonly fileSystemAccessMode: string;

  /**
   * @schema SageMakerFileSystemDataSource#FileSystemType
   */
  readonly fileSystemType: string;

  /**
   * @schema SageMakerFileSystemDataSource#DirectoryPath
   */
  readonly directoryPath: string;

}

/**
 * @schema SageMakerTransformS3DataSource
 */
export interface SageMakerTransformS3DataSource {
  /**
   * @schema SageMakerTransformS3DataSource#S3DataType
   */
  readonly s3DataType: string;

  /**
   * @schema SageMakerTransformS3DataSource#S3Uri
   */
  readonly s3Uri: string;

}

/**
 * @schema SageMakerTrialComponentSimpleSummary
 */
export interface SageMakerTrialComponentSimpleSummary {
  /**
   * @schema SageMakerTrialComponentSimpleSummary#TrialComponentName
   */
  readonly trialComponentName?: string;

  /**
   * @schema SageMakerTrialComponentSimpleSummary#TrialComponentArn
   */
  readonly trialComponentArn?: string;

  /**
   * @schema SageMakerTrialComponentSimpleSummary#TrialComponentSource
   */
  readonly trialComponentSource?: SageMakerTrialComponentSource;

  /**
   * @schema SageMakerTrialComponentSimpleSummary#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerTrialComponentSimpleSummary#CreatedBy
   */
  readonly createdBy?: SageMakerUserContext;

}

/**
 * @schema SageMakerTrialComponentSourceDetail
 */
export interface SageMakerTrialComponentSourceDetail {
  /**
   * @schema SageMakerTrialComponentSourceDetail#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema SageMakerTrialComponentSourceDetail#TrainingJob
   */
  readonly trainingJob?: SageMakerTrainingJob;

  /**
   * @schema SageMakerTrialComponentSourceDetail#ProcessingJob
   */
  readonly processingJob?: SageMakerProcessingJob;

  /**
   * @schema SageMakerTrialComponentSourceDetail#TransformJob
   */
  readonly transformJob?: SageMakerTransformJob;

}

/**
 * @schema SageMakerParent
 */
export interface SageMakerParent {
  /**
   * @schema SageMakerParent#TrialName
   */
  readonly trialName?: string;

  /**
   * @schema SageMakerParent#ExperimentName
   */
  readonly experimentName?: string;

}

/**
 * @schema SageMakerIntegerParameterRangeSpecification
 */
export interface SageMakerIntegerParameterRangeSpecification {
  /**
   * @schema SageMakerIntegerParameterRangeSpecification#MinValue
   */
  readonly minValue: string;

  /**
   * @schema SageMakerIntegerParameterRangeSpecification#MaxValue
   */
  readonly maxValue: string;

}

/**
 * @schema SageMakerContinuousParameterRangeSpecification
 */
export interface SageMakerContinuousParameterRangeSpecification {
  /**
   * @schema SageMakerContinuousParameterRangeSpecification#MinValue
   */
  readonly minValue: string;

  /**
   * @schema SageMakerContinuousParameterRangeSpecification#MaxValue
   */
  readonly maxValue: string;

}

/**
 * @schema SageMakerCategoricalParameterRangeSpecification
 */
export interface SageMakerCategoricalParameterRangeSpecification {
  /**
   * @schema SageMakerCategoricalParameterRangeSpecification#Values
   */
  readonly values: string[];

}

/**
 * @schema SageMakerMonitoringConstraintsResource
 */
export interface SageMakerMonitoringConstraintsResource {
  /**
   * @schema SageMakerMonitoringConstraintsResource#S3Uri
   */
  readonly s3Uri?: string;

}

/**
 * @schema SageMakerMonitoringStatisticsResource
 */
export interface SageMakerMonitoringStatisticsResource {
  /**
   * @schema SageMakerMonitoringStatisticsResource#S3Uri
   */
  readonly s3Uri?: string;

}

/**
 * @schema SageMakerEndpointInput
 */
export interface SageMakerEndpointInput {
  /**
   * @schema SageMakerEndpointInput#EndpointName
   */
  readonly endpointName: string;

  /**
   * @schema SageMakerEndpointInput#LocalPath
   */
  readonly localPath: string;

  /**
   * @schema SageMakerEndpointInput#S3InputMode
   */
  readonly s3InputMode?: string;

  /**
   * @schema SageMakerEndpointInput#S3DataDistributionType
   */
  readonly s3DataDistributionType?: string;

}

/**
 * @schema SageMakerMonitoringOutput
 */
export interface SageMakerMonitoringOutput {
  /**
   * @schema SageMakerMonitoringOutput#S3Output
   */
  readonly s3Output: SageMakerMonitoringS3Output;

}

/**
 * @schema SageMakerMonitoringClusterConfig
 */
export interface SageMakerMonitoringClusterConfig {
  /**
   * @schema SageMakerMonitoringClusterConfig#InstanceCount
   */
  readonly instanceCount: number;

  /**
   * @schema SageMakerMonitoringClusterConfig#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema SageMakerMonitoringClusterConfig#VolumeSizeInGB
   */
  readonly volumeSizeInGb: number;

  /**
   * @schema SageMakerMonitoringClusterConfig#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

}

/**
 * @schema SageMakerProcessingJob
 */
export interface SageMakerProcessingJob {
  /**
   * @schema SageMakerProcessingJob#ProcessingInputs
   */
  readonly processingInputs?: SageMakerProcessingInput[];

  /**
   * @schema SageMakerProcessingJob#ProcessingOutputConfig
   */
  readonly processingOutputConfig?: SageMakerProcessingOutputConfig;

  /**
   * @schema SageMakerProcessingJob#ProcessingJobName
   */
  readonly processingJobName?: string;

  /**
   * @schema SageMakerProcessingJob#ProcessingResources
   */
  readonly processingResources?: SageMakerProcessingResources;

  /**
   * @schema SageMakerProcessingJob#StoppingCondition
   */
  readonly stoppingCondition?: SageMakerProcessingStoppingCondition;

  /**
   * @schema SageMakerProcessingJob#AppSpecification
   */
  readonly appSpecification?: SageMakerAppSpecification;

  /**
   * @schema SageMakerProcessingJob#Environment
   */
  readonly environment?: { [key: string]: string };

  /**
   * @schema SageMakerProcessingJob#NetworkConfig
   */
  readonly networkConfig?: SageMakerNetworkConfig;

  /**
   * @schema SageMakerProcessingJob#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema SageMakerProcessingJob#ExperimentConfig
   */
  readonly experimentConfig?: SageMakerExperimentConfig;

  /**
   * @schema SageMakerProcessingJob#ProcessingJobArn
   */
  readonly processingJobArn?: string;

  /**
   * @schema SageMakerProcessingJob#ProcessingJobStatus
   */
  readonly processingJobStatus?: string;

  /**
   * @schema SageMakerProcessingJob#ExitMessage
   */
  readonly exitMessage?: string;

  /**
   * @schema SageMakerProcessingJob#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SageMakerProcessingJob#ProcessingEndTime
   */
  readonly processingEndTime?: string;

  /**
   * @schema SageMakerProcessingJob#ProcessingStartTime
   */
  readonly processingStartTime?: string;

  /**
   * @schema SageMakerProcessingJob#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema SageMakerProcessingJob#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerProcessingJob#MonitoringScheduleArn
   */
  readonly monitoringScheduleArn?: string;

  /**
   * @schema SageMakerProcessingJob#AutoMLJobArn
   */
  readonly autoMlJobArn?: string;

  /**
   * @schema SageMakerProcessingJob#TrainingJobArn
   */
  readonly trainingJobArn?: string;

  /**
   * @schema SageMakerProcessingJob#Tags
   */
  readonly tags?: SageMakerTag[];

}

/**
 * @schema SageMakerTransformJob
 */
export interface SageMakerTransformJob {
  /**
   * @schema SageMakerTransformJob#TransformJobName
   */
  readonly transformJobName?: string;

  /**
   * @schema SageMakerTransformJob#TransformJobArn
   */
  readonly transformJobArn?: string;

  /**
   * @schema SageMakerTransformJob#TransformJobStatus
   */
  readonly transformJobStatus?: string;

  /**
   * @schema SageMakerTransformJob#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SageMakerTransformJob#ModelName
   */
  readonly modelName?: string;

  /**
   * @schema SageMakerTransformJob#MaxConcurrentTransforms
   */
  readonly maxConcurrentTransforms?: number;

  /**
   * @schema SageMakerTransformJob#ModelClientConfig
   */
  readonly modelClientConfig?: SageMakerModelClientConfig;

  /**
   * @schema SageMakerTransformJob#MaxPayloadInMB
   */
  readonly maxPayloadInMb?: number;

  /**
   * @schema SageMakerTransformJob#BatchStrategy
   */
  readonly batchStrategy?: string;

  /**
   * @schema SageMakerTransformJob#Environment
   */
  readonly environment?: { [key: string]: string };

  /**
   * @schema SageMakerTransformJob#TransformInput
   */
  readonly transformInput?: SageMakerTransformInput;

  /**
   * @schema SageMakerTransformJob#TransformOutput
   */
  readonly transformOutput?: SageMakerTransformOutput;

  /**
   * @schema SageMakerTransformJob#TransformResources
   */
  readonly transformResources?: SageMakerTransformResources;

  /**
   * @schema SageMakerTransformJob#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema SageMakerTransformJob#TransformStartTime
   */
  readonly transformStartTime?: string;

  /**
   * @schema SageMakerTransformJob#TransformEndTime
   */
  readonly transformEndTime?: string;

  /**
   * @schema SageMakerTransformJob#LabelingJobArn
   */
  readonly labelingJobArn?: string;

  /**
   * @schema SageMakerTransformJob#AutoMLJobArn
   */
  readonly autoMlJobArn?: string;

  /**
   * @schema SageMakerTransformJob#DataProcessing
   */
  readonly dataProcessing?: SageMakerDataProcessing;

  /**
   * @schema SageMakerTransformJob#ExperimentConfig
   */
  readonly experimentConfig?: SageMakerExperimentConfig;

  /**
   * @schema SageMakerTransformJob#Tags
   */
  readonly tags?: SageMakerTag[];

}

/**
 * @schema SageMakerMonitoringS3Output
 */
export interface SageMakerMonitoringS3Output {
  /**
   * @schema SageMakerMonitoringS3Output#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema SageMakerMonitoringS3Output#LocalPath
   */
  readonly localPath: string;

  /**
   * @schema SageMakerMonitoringS3Output#S3UploadMode
   */
  readonly s3UploadMode?: string;

}
