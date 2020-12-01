/**
 * @schema AddTagsInput
 */
export interface AddTagsInput {
  /**
   * @schema AddTagsInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema AddTagsInput#Tags
   */
  readonly tags: Tag[];

}

/**
 * @schema AddTagsOutput
 */
export interface AddTagsOutput {
  /**
   * @schema AddTagsOutput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema AssociateTrialComponentRequest
 */
export interface AssociateTrialComponentRequest {
  /**
   * @schema AssociateTrialComponentRequest#TrialComponentName
   */
  readonly trialComponentName: string;

  /**
   * @schema AssociateTrialComponentRequest#TrialName
   */
  readonly trialName: string;

}

/**
 * @schema AssociateTrialComponentResponse
 */
export interface AssociateTrialComponentResponse {
  /**
   * @schema AssociateTrialComponentResponse#TrialComponentArn
   */
  readonly trialComponentArn?: string;

  /**
   * @schema AssociateTrialComponentResponse#TrialArn
   */
  readonly trialArn?: string;

}

/**
 * @schema CreateAlgorithmInput
 */
export interface CreateAlgorithmInput {
  /**
   * @schema CreateAlgorithmInput#AlgorithmName
   */
  readonly algorithmName: string;

  /**
   * @schema CreateAlgorithmInput#AlgorithmDescription
   */
  readonly algorithmDescription?: string;

  /**
   * @schema CreateAlgorithmInput#TrainingSpecification
   */
  readonly trainingSpecification: TrainingSpecification;

  /**
   * @schema CreateAlgorithmInput#InferenceSpecification
   */
  readonly inferenceSpecification?: InferenceSpecification;

  /**
   * @schema CreateAlgorithmInput#ValidationSpecification
   */
  readonly validationSpecification?: AlgorithmValidationSpecification;

  /**
   * @schema CreateAlgorithmInput#CertifyForMarketplace
   */
  readonly certifyForMarketplace?: boolean;

}

/**
 * @schema CreateAlgorithmOutput
 */
export interface CreateAlgorithmOutput {
  /**
   * @schema CreateAlgorithmOutput#AlgorithmArn
   */
  readonly algorithmArn: string;

}

/**
 * @schema CreateAppRequest
 */
export interface CreateAppRequest {
  /**
   * @schema CreateAppRequest#DomainId
   */
  readonly domainId: string;

  /**
   * @schema CreateAppRequest#UserProfileName
   */
  readonly userProfileName: string;

  /**
   * @schema CreateAppRequest#AppType
   */
  readonly appType: string;

  /**
   * @schema CreateAppRequest#AppName
   */
  readonly appName: string;

  /**
   * @schema CreateAppRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateAppRequest#ResourceSpec
   */
  readonly resourceSpec?: ResourceSpec;

}

/**
 * @schema CreateAppResponse
 */
export interface CreateAppResponse {
  /**
   * @schema CreateAppResponse#AppArn
   */
  readonly appArn?: string;

}

/**
 * @schema CreateAppImageConfigRequest
 */
export interface CreateAppImageConfigRequest {
  /**
   * @schema CreateAppImageConfigRequest#AppImageConfigName
   */
  readonly appImageConfigName: string;

  /**
   * @schema CreateAppImageConfigRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateAppImageConfigRequest#KernelGatewayImageConfig
   */
  readonly kernelGatewayImageConfig?: KernelGatewayImageConfig;

}

/**
 * @schema CreateAppImageConfigResponse
 */
export interface CreateAppImageConfigResponse {
  /**
   * @schema CreateAppImageConfigResponse#AppImageConfigArn
   */
  readonly appImageConfigArn?: string;

}

/**
 * @schema CreateAutoMlJobRequest
 */
export interface CreateAutoMlJobRequest {
  /**
   * @schema CreateAutoMlJobRequest#AutoMLJobName
   */
  readonly autoMlJobName: string;

  /**
   * @schema CreateAutoMlJobRequest#InputDataConfig
   */
  readonly inputDataConfig: AutoMlChannel[];

  /**
   * @schema CreateAutoMlJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: AutoMlOutputDataConfig;

  /**
   * @schema CreateAutoMlJobRequest#ProblemType
   */
  readonly problemType?: string;

  /**
   * @schema CreateAutoMlJobRequest#AutoMLJobObjective
   */
  readonly autoMlJobObjective?: AutoMlJobObjective;

  /**
   * @schema CreateAutoMlJobRequest#AutoMLJobConfig
   */
  readonly autoMlJobConfig?: AutoMlJobConfig;

  /**
   * @schema CreateAutoMlJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateAutoMlJobRequest#GenerateCandidateDefinitionsOnly
   */
  readonly generateCandidateDefinitionsOnly?: boolean;

  /**
   * @schema CreateAutoMlJobRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateAutoMlJobResponse
 */
export interface CreateAutoMlJobResponse {
  /**
   * @schema CreateAutoMlJobResponse#AutoMLJobArn
   */
  readonly autoMlJobArn: string;

}

/**
 * @schema CreateCodeRepositoryInput
 */
export interface CreateCodeRepositoryInput {
  /**
   * @schema CreateCodeRepositoryInput#CodeRepositoryName
   */
  readonly codeRepositoryName: string;

  /**
   * @schema CreateCodeRepositoryInput#GitConfig
   */
  readonly gitConfig: GitConfig;

}

/**
 * @schema CreateCodeRepositoryOutput
 */
export interface CreateCodeRepositoryOutput {
  /**
   * @schema CreateCodeRepositoryOutput#CodeRepositoryArn
   */
  readonly codeRepositoryArn: string;

}

/**
 * @schema CreateCompilationJobRequest
 */
export interface CreateCompilationJobRequest {
  /**
   * @schema CreateCompilationJobRequest#CompilationJobName
   */
  readonly compilationJobName: string;

  /**
   * @schema CreateCompilationJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateCompilationJobRequest#InputConfig
   */
  readonly inputConfig: InputConfig;

  /**
   * @schema CreateCompilationJobRequest#OutputConfig
   */
  readonly outputConfig: OutputConfig;

  /**
   * @schema CreateCompilationJobRequest#StoppingCondition
   */
  readonly stoppingCondition: StoppingCondition;

  /**
   * @schema CreateCompilationJobRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateCompilationJobResponse
 */
export interface CreateCompilationJobResponse {
  /**
   * @schema CreateCompilationJobResponse#CompilationJobArn
   */
  readonly compilationJobArn: string;

}

/**
 * @schema CreateDomainRequest
 */
export interface CreateDomainRequest {
  /**
   * @schema CreateDomainRequest#DomainName
   */
  readonly domainName: string;

  /**
   * @schema CreateDomainRequest#AuthMode
   */
  readonly authMode: string;

  /**
   * @schema CreateDomainRequest#DefaultUserSettings
   */
  readonly defaultUserSettings: UserSettings;

  /**
   * @schema CreateDomainRequest#SubnetIds
   */
  readonly subnetIds: string[];

  /**
   * @schema CreateDomainRequest#VpcId
   */
  readonly vpcId: string;

  /**
   * @schema CreateDomainRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateDomainRequest#AppNetworkAccessType
   */
  readonly appNetworkAccessType?: string;

  /**
   * @schema CreateDomainRequest#HomeEfsFileSystemKmsKeyId
   */
  readonly homeEfsFileSystemKmsKeyId?: string;

  /**
   * @schema CreateDomainRequest#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema CreateDomainResponse
 */
export interface CreateDomainResponse {
  /**
   * @schema CreateDomainResponse#DomainArn
   */
  readonly domainArn?: string;

  /**
   * @schema CreateDomainResponse#Url
   */
  readonly url?: string;

}

/**
 * @schema CreateEndpointInput
 */
export interface CreateEndpointInput {
  /**
   * @schema CreateEndpointInput#EndpointName
   */
  readonly endpointName: string;

  /**
   * @schema CreateEndpointInput#EndpointConfigName
   */
  readonly endpointConfigName: string;

  /**
   * @schema CreateEndpointInput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateEndpointOutput
 */
export interface CreateEndpointOutput {
  /**
   * @schema CreateEndpointOutput#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema CreateEndpointConfigInput
 */
export interface CreateEndpointConfigInput {
  /**
   * @schema CreateEndpointConfigInput#EndpointConfigName
   */
  readonly endpointConfigName: string;

  /**
   * @schema CreateEndpointConfigInput#ProductionVariants
   */
  readonly productionVariants: ProductionVariant[];

  /**
   * @schema CreateEndpointConfigInput#DataCaptureConfig
   */
  readonly dataCaptureConfig?: DataCaptureConfig;

  /**
   * @schema CreateEndpointConfigInput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateEndpointConfigInput#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema CreateEndpointConfigOutput
 */
export interface CreateEndpointConfigOutput {
  /**
   * @schema CreateEndpointConfigOutput#EndpointConfigArn
   */
  readonly endpointConfigArn: string;

}

/**
 * @schema CreateExperimentRequest
 */
export interface CreateExperimentRequest {
  /**
   * @schema CreateExperimentRequest#ExperimentName
   */
  readonly experimentName: string;

  /**
   * @schema CreateExperimentRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema CreateExperimentRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateExperimentRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateExperimentResponse
 */
export interface CreateExperimentResponse {
  /**
   * @schema CreateExperimentResponse#ExperimentArn
   */
  readonly experimentArn?: string;

}

/**
 * @schema CreateFlowDefinitionRequest
 */
export interface CreateFlowDefinitionRequest {
  /**
   * @schema CreateFlowDefinitionRequest#FlowDefinitionName
   */
  readonly flowDefinitionName: string;

  /**
   * @schema CreateFlowDefinitionRequest#HumanLoopRequestSource
   */
  readonly humanLoopRequestSource?: HumanLoopRequestSource;

  /**
   * @schema CreateFlowDefinitionRequest#HumanLoopActivationConfig
   */
  readonly humanLoopActivationConfig?: HumanLoopActivationConfig;

  /**
   * @schema CreateFlowDefinitionRequest#HumanLoopConfig
   */
  readonly humanLoopConfig: HumanLoopConfig;

  /**
   * @schema CreateFlowDefinitionRequest#OutputConfig
   */
  readonly outputConfig: FlowDefinitionOutputConfig;

  /**
   * @schema CreateFlowDefinitionRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateFlowDefinitionRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateFlowDefinitionResponse
 */
export interface CreateFlowDefinitionResponse {
  /**
   * @schema CreateFlowDefinitionResponse#FlowDefinitionArn
   */
  readonly flowDefinitionArn: string;

}

/**
 * @schema CreateHumanTaskUiRequest
 */
export interface CreateHumanTaskUiRequest {
  /**
   * @schema CreateHumanTaskUiRequest#HumanTaskUiName
   */
  readonly humanTaskUiName: string;

  /**
   * @schema CreateHumanTaskUiRequest#UiTemplate
   */
  readonly uiTemplate: UiTemplate;

  /**
   * @schema CreateHumanTaskUiRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateHumanTaskUiResponse
 */
export interface CreateHumanTaskUiResponse {
  /**
   * @schema CreateHumanTaskUiResponse#HumanTaskUiArn
   */
  readonly humanTaskUiArn: string;

}

/**
 * @schema CreateHyperParameterTuningJobRequest
 */
export interface CreateHyperParameterTuningJobRequest {
  /**
   * @schema CreateHyperParameterTuningJobRequest#HyperParameterTuningJobName
   */
  readonly hyperParameterTuningJobName: string;

  /**
   * @schema CreateHyperParameterTuningJobRequest#HyperParameterTuningJobConfig
   */
  readonly hyperParameterTuningJobConfig: HyperParameterTuningJobConfig;

  /**
   * @schema CreateHyperParameterTuningJobRequest#TrainingJobDefinition
   */
  readonly trainingJobDefinition?: HyperParameterTrainingJobDefinition;

  /**
   * @schema CreateHyperParameterTuningJobRequest#TrainingJobDefinitions
   */
  readonly trainingJobDefinitions?: HyperParameterTrainingJobDefinition[];

  /**
   * @schema CreateHyperParameterTuningJobRequest#WarmStartConfig
   */
  readonly warmStartConfig?: HyperParameterTuningJobWarmStartConfig;

  /**
   * @schema CreateHyperParameterTuningJobRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateHyperParameterTuningJobResponse
 */
export interface CreateHyperParameterTuningJobResponse {
  /**
   * @schema CreateHyperParameterTuningJobResponse#HyperParameterTuningJobArn
   */
  readonly hyperParameterTuningJobArn: string;

}

/**
 * @schema CreateImageRequest
 */
export interface CreateImageRequest {
  /**
   * @schema CreateImageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateImageRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema CreateImageRequest#ImageName
   */
  readonly imageName: string;

  /**
   * @schema CreateImageRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateImageRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateImageResponse
 */
export interface CreateImageResponse {
  /**
   * @schema CreateImageResponse#ImageArn
   */
  readonly imageArn?: string;

}

/**
 * @schema CreateImageVersionRequest
 */
export interface CreateImageVersionRequest {
  /**
   * @schema CreateImageVersionRequest#BaseImage
   */
  readonly baseImage: string;

  /**
   * @schema CreateImageVersionRequest#ClientToken
   */
  readonly clientToken: string;

  /**
   * @schema CreateImageVersionRequest#ImageName
   */
  readonly imageName: string;

}

/**
 * @schema CreateImageVersionResponse
 */
export interface CreateImageVersionResponse {
  /**
   * @schema CreateImageVersionResponse#ImageVersionArn
   */
  readonly imageVersionArn?: string;

}

/**
 * @schema CreateLabelingJobRequest
 */
export interface CreateLabelingJobRequest {
  /**
   * @schema CreateLabelingJobRequest#LabelingJobName
   */
  readonly labelingJobName: string;

  /**
   * @schema CreateLabelingJobRequest#LabelAttributeName
   */
  readonly labelAttributeName: string;

  /**
   * @schema CreateLabelingJobRequest#InputConfig
   */
  readonly inputConfig: LabelingJobInputConfig;

  /**
   * @schema CreateLabelingJobRequest#OutputConfig
   */
  readonly outputConfig: LabelingJobOutputConfig;

  /**
   * @schema CreateLabelingJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateLabelingJobRequest#LabelCategoryConfigS3Uri
   */
  readonly labelCategoryConfigS3Uri?: string;

  /**
   * @schema CreateLabelingJobRequest#StoppingConditions
   */
  readonly stoppingConditions?: LabelingJobStoppingConditions;

  /**
   * @schema CreateLabelingJobRequest#LabelingJobAlgorithmsConfig
   */
  readonly labelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;

  /**
   * @schema CreateLabelingJobRequest#HumanTaskConfig
   */
  readonly humanTaskConfig: HumanTaskConfig;

  /**
   * @schema CreateLabelingJobRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateLabelingJobResponse
 */
export interface CreateLabelingJobResponse {
  /**
   * @schema CreateLabelingJobResponse#LabelingJobArn
   */
  readonly labelingJobArn: string;

}

/**
 * @schema CreateModelInput
 */
export interface CreateModelInput {
  /**
   * @schema CreateModelInput#ModelName
   */
  readonly modelName: string;

  /**
   * @schema CreateModelInput#PrimaryContainer
   */
  readonly primaryContainer?: ContainerDefinition;

  /**
   * @schema CreateModelInput#Containers
   */
  readonly containers?: ContainerDefinition[];

  /**
   * @schema CreateModelInput#ExecutionRoleArn
   */
  readonly executionRoleArn: string;

  /**
   * @schema CreateModelInput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateModelInput#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema CreateModelInput#EnableNetworkIsolation
   */
  readonly enableNetworkIsolation?: boolean;

}

/**
 * @schema CreateModelOutput
 */
export interface CreateModelOutput {
  /**
   * @schema CreateModelOutput#ModelArn
   */
  readonly modelArn: string;

}

/**
 * @schema CreateModelPackageInput
 */
export interface CreateModelPackageInput {
  /**
   * @schema CreateModelPackageInput#ModelPackageName
   */
  readonly modelPackageName?: string;

  /**
   * @schema CreateModelPackageInput#ModelPackageDescription
   */
  readonly modelPackageDescription?: string;

  /**
   * @schema CreateModelPackageInput#InferenceSpecification
   */
  readonly inferenceSpecification?: InferenceSpecification;

  /**
   * @schema CreateModelPackageInput#ValidationSpecification
   */
  readonly validationSpecification?: ModelPackageValidationSpecification;

  /**
   * @schema CreateModelPackageInput#SourceAlgorithmSpecification
   */
  readonly sourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  /**
   * @schema CreateModelPackageInput#CertifyForMarketplace
   */
  readonly certifyForMarketplace?: boolean;

}

/**
 * @schema CreateModelPackageOutput
 */
export interface CreateModelPackageOutput {
  /**
   * @schema CreateModelPackageOutput#ModelPackageArn
   */
  readonly modelPackageArn: string;

}

/**
 * @schema CreateMonitoringScheduleRequest
 */
export interface CreateMonitoringScheduleRequest {
  /**
   * @schema CreateMonitoringScheduleRequest#MonitoringScheduleName
   */
  readonly monitoringScheduleName: string;

  /**
   * @schema CreateMonitoringScheduleRequest#MonitoringScheduleConfig
   */
  readonly monitoringScheduleConfig: MonitoringScheduleConfig;

  /**
   * @schema CreateMonitoringScheduleRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateMonitoringScheduleResponse
 */
export interface CreateMonitoringScheduleResponse {
  /**
   * @schema CreateMonitoringScheduleResponse#MonitoringScheduleArn
   */
  readonly monitoringScheduleArn: string;

}

/**
 * @schema CreateNotebookInstanceInput
 */
export interface CreateNotebookInstanceInput {
  /**
   * @schema CreateNotebookInstanceInput#NotebookInstanceName
   */
  readonly notebookInstanceName: string;

  /**
   * @schema CreateNotebookInstanceInput#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema CreateNotebookInstanceInput#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema CreateNotebookInstanceInput#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema CreateNotebookInstanceInput#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateNotebookInstanceInput#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema CreateNotebookInstanceInput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateNotebookInstanceInput#LifecycleConfigName
   */
  readonly lifecycleConfigName?: string;

  /**
   * @schema CreateNotebookInstanceInput#DirectInternetAccess
   */
  readonly directInternetAccess?: string;

  /**
   * @schema CreateNotebookInstanceInput#VolumeSizeInGB
   */
  readonly volumeSizeInGb?: number;

  /**
   * @schema CreateNotebookInstanceInput#AcceleratorTypes
   */
  readonly acceleratorTypes?: string[];

  /**
   * @schema CreateNotebookInstanceInput#DefaultCodeRepository
   */
  readonly defaultCodeRepository?: string;

  /**
   * @schema CreateNotebookInstanceInput#AdditionalCodeRepositories
   */
  readonly additionalCodeRepositories?: string[];

  /**
   * @schema CreateNotebookInstanceInput#RootAccess
   */
  readonly rootAccess?: string;

}

/**
 * @schema CreateNotebookInstanceOutput
 */
export interface CreateNotebookInstanceOutput {
  /**
   * @schema CreateNotebookInstanceOutput#NotebookInstanceArn
   */
  readonly notebookInstanceArn?: string;

}

/**
 * @schema CreateNotebookInstanceLifecycleConfigInput
 */
export interface CreateNotebookInstanceLifecycleConfigInput {
  /**
   * @schema CreateNotebookInstanceLifecycleConfigInput#NotebookInstanceLifecycleConfigName
   */
  readonly notebookInstanceLifecycleConfigName: string;

  /**
   * @schema CreateNotebookInstanceLifecycleConfigInput#OnCreate
   */
  readonly onCreate?: NotebookInstanceLifecycleHook[];

  /**
   * @schema CreateNotebookInstanceLifecycleConfigInput#OnStart
   */
  readonly onStart?: NotebookInstanceLifecycleHook[];

}

/**
 * @schema CreateNotebookInstanceLifecycleConfigOutput
 */
export interface CreateNotebookInstanceLifecycleConfigOutput {
  /**
   * @schema CreateNotebookInstanceLifecycleConfigOutput#NotebookInstanceLifecycleConfigArn
   */
  readonly notebookInstanceLifecycleConfigArn?: string;

}

/**
 * @schema CreatePresignedDomainUrlRequest
 */
export interface CreatePresignedDomainUrlRequest {
  /**
   * @schema CreatePresignedDomainUrlRequest#DomainId
   */
  readonly domainId: string;

  /**
   * @schema CreatePresignedDomainUrlRequest#UserProfileName
   */
  readonly userProfileName: string;

  /**
   * @schema CreatePresignedDomainUrlRequest#SessionExpirationDurationInSeconds
   */
  readonly sessionExpirationDurationInSeconds?: number;

}

/**
 * @schema CreatePresignedDomainUrlResponse
 */
export interface CreatePresignedDomainUrlResponse {
  /**
   * @schema CreatePresignedDomainUrlResponse#AuthorizedUrl
   */
  readonly authorizedUrl?: string;

}

/**
 * @schema CreatePresignedNotebookInstanceUrlInput
 */
export interface CreatePresignedNotebookInstanceUrlInput {
  /**
   * @schema CreatePresignedNotebookInstanceUrlInput#NotebookInstanceName
   */
  readonly notebookInstanceName: string;

  /**
   * @schema CreatePresignedNotebookInstanceUrlInput#SessionExpirationDurationInSeconds
   */
  readonly sessionExpirationDurationInSeconds?: number;

}

/**
 * @schema CreatePresignedNotebookInstanceUrlOutput
 */
export interface CreatePresignedNotebookInstanceUrlOutput {
  /**
   * @schema CreatePresignedNotebookInstanceUrlOutput#AuthorizedUrl
   */
  readonly authorizedUrl?: string;

}

/**
 * @schema CreateProcessingJobRequest
 */
export interface CreateProcessingJobRequest {
  /**
   * @schema CreateProcessingJobRequest#ProcessingInputs
   */
  readonly processingInputs?: ProcessingInput[];

  /**
   * @schema CreateProcessingJobRequest#ProcessingOutputConfig
   */
  readonly processingOutputConfig?: ProcessingOutputConfig;

  /**
   * @schema CreateProcessingJobRequest#ProcessingJobName
   */
  readonly processingJobName: string;

  /**
   * @schema CreateProcessingJobRequest#ProcessingResources
   */
  readonly processingResources: ProcessingResources;

  /**
   * @schema CreateProcessingJobRequest#StoppingCondition
   */
  readonly stoppingCondition?: ProcessingStoppingCondition;

  /**
   * @schema CreateProcessingJobRequest#AppSpecification
   */
  readonly appSpecification: AppSpecification;

  /**
   * @schema CreateProcessingJobRequest#Environment
   */
  readonly environment?: { [key: string]: string };

  /**
   * @schema CreateProcessingJobRequest#NetworkConfig
   */
  readonly networkConfig?: NetworkConfig;

  /**
   * @schema CreateProcessingJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateProcessingJobRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateProcessingJobRequest#ExperimentConfig
   */
  readonly experimentConfig?: ExperimentConfig;

}

/**
 * @schema CreateProcessingJobResponse
 */
export interface CreateProcessingJobResponse {
  /**
   * @schema CreateProcessingJobResponse#ProcessingJobArn
   */
  readonly processingJobArn: string;

}

/**
 * @schema CreateTrainingJobRequest
 */
export interface CreateTrainingJobRequest {
  /**
   * @schema CreateTrainingJobRequest#TrainingJobName
   */
  readonly trainingJobName: string;

  /**
   * @schema CreateTrainingJobRequest#HyperParameters
   */
  readonly hyperParameters?: { [key: string]: string };

  /**
   * @schema CreateTrainingJobRequest#AlgorithmSpecification
   */
  readonly algorithmSpecification: AlgorithmSpecification;

  /**
   * @schema CreateTrainingJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateTrainingJobRequest#InputDataConfig
   */
  readonly inputDataConfig?: Channel[];

  /**
   * @schema CreateTrainingJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: OutputDataConfig;

  /**
   * @schema CreateTrainingJobRequest#ResourceConfig
   */
  readonly resourceConfig: ResourceConfig;

  /**
   * @schema CreateTrainingJobRequest#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema CreateTrainingJobRequest#StoppingCondition
   */
  readonly stoppingCondition: StoppingCondition;

  /**
   * @schema CreateTrainingJobRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateTrainingJobRequest#EnableNetworkIsolation
   */
  readonly enableNetworkIsolation?: boolean;

  /**
   * @schema CreateTrainingJobRequest#EnableInterContainerTrafficEncryption
   */
  readonly enableInterContainerTrafficEncryption?: boolean;

  /**
   * @schema CreateTrainingJobRequest#EnableManagedSpotTraining
   */
  readonly enableManagedSpotTraining?: boolean;

  /**
   * @schema CreateTrainingJobRequest#CheckpointConfig
   */
  readonly checkpointConfig?: CheckpointConfig;

  /**
   * @schema CreateTrainingJobRequest#DebugHookConfig
   */
  readonly debugHookConfig?: DebugHookConfig;

  /**
   * @schema CreateTrainingJobRequest#DebugRuleConfigurations
   */
  readonly debugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * @schema CreateTrainingJobRequest#TensorBoardOutputConfig
   */
  readonly tensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * @schema CreateTrainingJobRequest#ExperimentConfig
   */
  readonly experimentConfig?: ExperimentConfig;

}

/**
 * @schema CreateTrainingJobResponse
 */
export interface CreateTrainingJobResponse {
  /**
   * @schema CreateTrainingJobResponse#TrainingJobArn
   */
  readonly trainingJobArn: string;

}

/**
 * @schema CreateTransformJobRequest
 */
export interface CreateTransformJobRequest {
  /**
   * @schema CreateTransformJobRequest#TransformJobName
   */
  readonly transformJobName: string;

  /**
   * @schema CreateTransformJobRequest#ModelName
   */
  readonly modelName: string;

  /**
   * @schema CreateTransformJobRequest#MaxConcurrentTransforms
   */
  readonly maxConcurrentTransforms?: number;

  /**
   * @schema CreateTransformJobRequest#ModelClientConfig
   */
  readonly modelClientConfig?: ModelClientConfig;

  /**
   * @schema CreateTransformJobRequest#MaxPayloadInMB
   */
  readonly maxPayloadInMb?: number;

  /**
   * @schema CreateTransformJobRequest#BatchStrategy
   */
  readonly batchStrategy?: string;

  /**
   * @schema CreateTransformJobRequest#Environment
   */
  readonly environment?: { [key: string]: string };

  /**
   * @schema CreateTransformJobRequest#TransformInput
   */
  readonly transformInput: TransformInput;

  /**
   * @schema CreateTransformJobRequest#TransformOutput
   */
  readonly transformOutput: TransformOutput;

  /**
   * @schema CreateTransformJobRequest#TransformResources
   */
  readonly transformResources: TransformResources;

  /**
   * @schema CreateTransformJobRequest#DataProcessing
   */
  readonly dataProcessing?: DataProcessing;

  /**
   * @schema CreateTransformJobRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateTransformJobRequest#ExperimentConfig
   */
  readonly experimentConfig?: ExperimentConfig;

}

/**
 * @schema CreateTransformJobResponse
 */
export interface CreateTransformJobResponse {
  /**
   * @schema CreateTransformJobResponse#TransformJobArn
   */
  readonly transformJobArn: string;

}

/**
 * @schema CreateTrialRequest
 */
export interface CreateTrialRequest {
  /**
   * @schema CreateTrialRequest#TrialName
   */
  readonly trialName: string;

  /**
   * @schema CreateTrialRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema CreateTrialRequest#ExperimentName
   */
  readonly experimentName: string;

  /**
   * @schema CreateTrialRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateTrialResponse
 */
export interface CreateTrialResponse {
  /**
   * @schema CreateTrialResponse#TrialArn
   */
  readonly trialArn?: string;

}

/**
 * @schema CreateTrialComponentRequest
 */
export interface CreateTrialComponentRequest {
  /**
   * @schema CreateTrialComponentRequest#TrialComponentName
   */
  readonly trialComponentName: string;

  /**
   * @schema CreateTrialComponentRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema CreateTrialComponentRequest#Status
   */
  readonly status?: TrialComponentStatus;

  /**
   * @schema CreateTrialComponentRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema CreateTrialComponentRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema CreateTrialComponentRequest#Parameters
   */
  readonly parameters?: { [key: string]: TrialComponentParameterValue };

  /**
   * @schema CreateTrialComponentRequest#InputArtifacts
   */
  readonly inputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * @schema CreateTrialComponentRequest#OutputArtifacts
   */
  readonly outputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * @schema CreateTrialComponentRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateTrialComponentResponse
 */
export interface CreateTrialComponentResponse {
  /**
   * @schema CreateTrialComponentResponse#TrialComponentArn
   */
  readonly trialComponentArn?: string;

}

/**
 * @schema CreateUserProfileRequest
 */
export interface CreateUserProfileRequest {
  /**
   * @schema CreateUserProfileRequest#DomainId
   */
  readonly domainId: string;

  /**
   * @schema CreateUserProfileRequest#UserProfileName
   */
  readonly userProfileName: string;

  /**
   * @schema CreateUserProfileRequest#SingleSignOnUserIdentifier
   */
  readonly singleSignOnUserIdentifier?: string;

  /**
   * @schema CreateUserProfileRequest#SingleSignOnUserValue
   */
  readonly singleSignOnUserValue?: string;

  /**
   * @schema CreateUserProfileRequest#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateUserProfileRequest#UserSettings
   */
  readonly userSettings?: UserSettings;

}

/**
 * @schema CreateUserProfileResponse
 */
export interface CreateUserProfileResponse {
  /**
   * @schema CreateUserProfileResponse#UserProfileArn
   */
  readonly userProfileArn?: string;

}

/**
 * @schema CreateWorkforceRequest
 */
export interface CreateWorkforceRequest {
  /**
   * @schema CreateWorkforceRequest#CognitoConfig
   */
  readonly cognitoConfig?: CognitoConfig;

  /**
   * @schema CreateWorkforceRequest#OidcConfig
   */
  readonly oidcConfig?: OidcConfig;

  /**
   * @schema CreateWorkforceRequest#SourceIpConfig
   */
  readonly sourceIpConfig?: SourceIpConfig;

  /**
   * @schema CreateWorkforceRequest#WorkforceName
   */
  readonly workforceName: string;

  /**
   * @schema CreateWorkforceRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateWorkforceResponse
 */
export interface CreateWorkforceResponse {
  /**
   * @schema CreateWorkforceResponse#WorkforceArn
   */
  readonly workforceArn: string;

}

/**
 * @schema CreateWorkteamRequest
 */
export interface CreateWorkteamRequest {
  /**
   * @schema CreateWorkteamRequest#WorkteamName
   */
  readonly workteamName: string;

  /**
   * @schema CreateWorkteamRequest#WorkforceName
   */
  readonly workforceName?: string;

  /**
   * @schema CreateWorkteamRequest#MemberDefinitions
   */
  readonly memberDefinitions: MemberDefinition[];

  /**
   * @schema CreateWorkteamRequest#Description
   */
  readonly description: string;

  /**
   * @schema CreateWorkteamRequest#NotificationConfiguration
   */
  readonly notificationConfiguration?: NotificationConfiguration;

  /**
   * @schema CreateWorkteamRequest#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateWorkteamResponse
 */
export interface CreateWorkteamResponse {
  /**
   * @schema CreateWorkteamResponse#WorkteamArn
   */
  readonly workteamArn?: string;

}

/**
 * @schema DeleteAlgorithmInput
 */
export interface DeleteAlgorithmInput {
  /**
   * @schema DeleteAlgorithmInput#AlgorithmName
   */
  readonly algorithmName: string;

}

/**
 * @schema DeleteAppRequest
 */
export interface DeleteAppRequest {
  /**
   * @schema DeleteAppRequest#DomainId
   */
  readonly domainId: string;

  /**
   * @schema DeleteAppRequest#UserProfileName
   */
  readonly userProfileName: string;

  /**
   * @schema DeleteAppRequest#AppType
   */
  readonly appType: string;

  /**
   * @schema DeleteAppRequest#AppName
   */
  readonly appName: string;

}

/**
 * @schema DeleteAppImageConfigRequest
 */
export interface DeleteAppImageConfigRequest {
  /**
   * @schema DeleteAppImageConfigRequest#AppImageConfigName
   */
  readonly appImageConfigName: string;

}

/**
 * @schema DeleteCodeRepositoryInput
 */
export interface DeleteCodeRepositoryInput {
  /**
   * @schema DeleteCodeRepositoryInput#CodeRepositoryName
   */
  readonly codeRepositoryName: string;

}

/**
 * @schema DeleteDomainRequest
 */
export interface DeleteDomainRequest {
  /**
   * @schema DeleteDomainRequest#DomainId
   */
  readonly domainId: string;

  /**
   * @schema DeleteDomainRequest#RetentionPolicy
   */
  readonly retentionPolicy?: RetentionPolicy;

}

/**
 * @schema DeleteEndpointInput
 */
export interface DeleteEndpointInput {
  /**
   * @schema DeleteEndpointInput#EndpointName
   */
  readonly endpointName: string;

}

/**
 * @schema DeleteEndpointConfigInput
 */
export interface DeleteEndpointConfigInput {
  /**
   * @schema DeleteEndpointConfigInput#EndpointConfigName
   */
  readonly endpointConfigName: string;

}

/**
 * @schema DeleteExperimentRequest
 */
export interface DeleteExperimentRequest {
  /**
   * @schema DeleteExperimentRequest#ExperimentName
   */
  readonly experimentName: string;

}

/**
 * @schema DeleteExperimentResponse
 */
export interface DeleteExperimentResponse {
  /**
   * @schema DeleteExperimentResponse#ExperimentArn
   */
  readonly experimentArn?: string;

}

/**
 * @schema DeleteFlowDefinitionRequest
 */
export interface DeleteFlowDefinitionRequest {
  /**
   * @schema DeleteFlowDefinitionRequest#FlowDefinitionName
   */
  readonly flowDefinitionName: string;

}

/**
 * @schema DeleteFlowDefinitionResponse
 */
export interface DeleteFlowDefinitionResponse {
}

/**
 * @schema DeleteHumanTaskUiRequest
 */
export interface DeleteHumanTaskUiRequest {
  /**
   * @schema DeleteHumanTaskUiRequest#HumanTaskUiName
   */
  readonly humanTaskUiName: string;

}

/**
 * @schema DeleteHumanTaskUiResponse
 */
export interface DeleteHumanTaskUiResponse {
}

/**
 * @schema DeleteImageRequest
 */
export interface DeleteImageRequest {
  /**
   * @schema DeleteImageRequest#ImageName
   */
  readonly imageName: string;

}

/**
 * @schema DeleteImageResponse
 */
export interface DeleteImageResponse {
}

/**
 * @schema DeleteImageVersionRequest
 */
export interface DeleteImageVersionRequest {
  /**
   * @schema DeleteImageVersionRequest#ImageName
   */
  readonly imageName: string;

  /**
   * @schema DeleteImageVersionRequest#Version
   */
  readonly version: number;

}

/**
 * @schema DeleteImageVersionResponse
 */
export interface DeleteImageVersionResponse {
}

/**
 * @schema DeleteModelInput
 */
export interface DeleteModelInput {
  /**
   * @schema DeleteModelInput#ModelName
   */
  readonly modelName: string;

}

/**
 * @schema DeleteModelPackageInput
 */
export interface DeleteModelPackageInput {
  /**
   * @schema DeleteModelPackageInput#ModelPackageName
   */
  readonly modelPackageName: string;

}

/**
 * @schema DeleteMonitoringScheduleRequest
 */
export interface DeleteMonitoringScheduleRequest {
  /**
   * @schema DeleteMonitoringScheduleRequest#MonitoringScheduleName
   */
  readonly monitoringScheduleName: string;

}

/**
 * @schema DeleteNotebookInstanceInput
 */
export interface DeleteNotebookInstanceInput {
  /**
   * @schema DeleteNotebookInstanceInput#NotebookInstanceName
   */
  readonly notebookInstanceName: string;

}

/**
 * @schema DeleteNotebookInstanceLifecycleConfigInput
 */
export interface DeleteNotebookInstanceLifecycleConfigInput {
  /**
   * @schema DeleteNotebookInstanceLifecycleConfigInput#NotebookInstanceLifecycleConfigName
   */
  readonly notebookInstanceLifecycleConfigName: string;

}

/**
 * @schema DeleteTagsInput
 */
export interface DeleteTagsInput {
  /**
   * @schema DeleteTagsInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema DeleteTagsInput#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema DeleteTagsOutput
 */
export interface DeleteTagsOutput {
}

/**
 * @schema DeleteTrialRequest
 */
export interface DeleteTrialRequest {
  /**
   * @schema DeleteTrialRequest#TrialName
   */
  readonly trialName: string;

}

/**
 * @schema DeleteTrialResponse
 */
export interface DeleteTrialResponse {
  /**
   * @schema DeleteTrialResponse#TrialArn
   */
  readonly trialArn?: string;

}

/**
 * @schema DeleteTrialComponentRequest
 */
export interface DeleteTrialComponentRequest {
  /**
   * @schema DeleteTrialComponentRequest#TrialComponentName
   */
  readonly trialComponentName: string;

}

/**
 * @schema DeleteTrialComponentResponse
 */
export interface DeleteTrialComponentResponse {
  /**
   * @schema DeleteTrialComponentResponse#TrialComponentArn
   */
  readonly trialComponentArn?: string;

}

/**
 * @schema DeleteUserProfileRequest
 */
export interface DeleteUserProfileRequest {
  /**
   * @schema DeleteUserProfileRequest#DomainId
   */
  readonly domainId: string;

  /**
   * @schema DeleteUserProfileRequest#UserProfileName
   */
  readonly userProfileName: string;

}

/**
 * @schema DeleteWorkforceRequest
 */
export interface DeleteWorkforceRequest {
  /**
   * @schema DeleteWorkforceRequest#WorkforceName
   */
  readonly workforceName: string;

}

/**
 * @schema DeleteWorkforceResponse
 */
export interface DeleteWorkforceResponse {
}

/**
 * @schema DeleteWorkteamRequest
 */
export interface DeleteWorkteamRequest {
  /**
   * @schema DeleteWorkteamRequest#WorkteamName
   */
  readonly workteamName: string;

}

/**
 * @schema DeleteWorkteamResponse
 */
export interface DeleteWorkteamResponse {
  /**
   * @schema DeleteWorkteamResponse#Success
   */
  readonly success: boolean;

}

/**
 * @schema DescribeAlgorithmInput
 */
export interface DescribeAlgorithmInput {
  /**
   * @schema DescribeAlgorithmInput#AlgorithmName
   */
  readonly algorithmName: string;

}

/**
 * @schema DescribeAlgorithmOutput
 */
export interface DescribeAlgorithmOutput {
  /**
   * @schema DescribeAlgorithmOutput#AlgorithmName
   */
  readonly algorithmName: string;

  /**
   * @schema DescribeAlgorithmOutput#AlgorithmArn
   */
  readonly algorithmArn: string;

  /**
   * @schema DescribeAlgorithmOutput#AlgorithmDescription
   */
  readonly algorithmDescription?: string;

  /**
   * @schema DescribeAlgorithmOutput#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema DescribeAlgorithmOutput#TrainingSpecification
   */
  readonly trainingSpecification: TrainingSpecification;

  /**
   * @schema DescribeAlgorithmOutput#InferenceSpecification
   */
  readonly inferenceSpecification?: InferenceSpecification;

  /**
   * @schema DescribeAlgorithmOutput#ValidationSpecification
   */
  readonly validationSpecification?: AlgorithmValidationSpecification;

  /**
   * @schema DescribeAlgorithmOutput#AlgorithmStatus
   */
  readonly algorithmStatus: string;

  /**
   * @schema DescribeAlgorithmOutput#AlgorithmStatusDetails
   */
  readonly algorithmStatusDetails: AlgorithmStatusDetails;

  /**
   * @schema DescribeAlgorithmOutput#ProductId
   */
  readonly productId?: string;

  /**
   * @schema DescribeAlgorithmOutput#CertifyForMarketplace
   */
  readonly certifyForMarketplace?: boolean;

}

/**
 * @schema DescribeAppRequest
 */
export interface DescribeAppRequest {
  /**
   * @schema DescribeAppRequest#DomainId
   */
  readonly domainId: string;

  /**
   * @schema DescribeAppRequest#UserProfileName
   */
  readonly userProfileName: string;

  /**
   * @schema DescribeAppRequest#AppType
   */
  readonly appType: string;

  /**
   * @schema DescribeAppRequest#AppName
   */
  readonly appName: string;

}

/**
 * @schema DescribeAppResponse
 */
export interface DescribeAppResponse {
  /**
   * @schema DescribeAppResponse#AppArn
   */
  readonly appArn?: string;

  /**
   * @schema DescribeAppResponse#AppType
   */
  readonly appType?: string;

  /**
   * @schema DescribeAppResponse#AppName
   */
  readonly appName?: string;

  /**
   * @schema DescribeAppResponse#DomainId
   */
  readonly domainId?: string;

  /**
   * @schema DescribeAppResponse#UserProfileName
   */
  readonly userProfileName?: string;

  /**
   * @schema DescribeAppResponse#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeAppResponse#LastHealthCheckTimestamp
   */
  readonly lastHealthCheckTimestamp?: string;

  /**
   * @schema DescribeAppResponse#LastUserActivityTimestamp
   */
  readonly lastUserActivityTimestamp?: string;

  /**
   * @schema DescribeAppResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DescribeAppResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema DescribeAppResponse#ResourceSpec
   */
  readonly resourceSpec?: ResourceSpec;

}

/**
 * @schema DescribeAppImageConfigRequest
 */
export interface DescribeAppImageConfigRequest {
  /**
   * @schema DescribeAppImageConfigRequest#AppImageConfigName
   */
  readonly appImageConfigName: string;

}

/**
 * @schema DescribeAppImageConfigResponse
 */
export interface DescribeAppImageConfigResponse {
  /**
   * @schema DescribeAppImageConfigResponse#AppImageConfigArn
   */
  readonly appImageConfigArn?: string;

  /**
   * @schema DescribeAppImageConfigResponse#AppImageConfigName
   */
  readonly appImageConfigName?: string;

  /**
   * @schema DescribeAppImageConfigResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DescribeAppImageConfigResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema DescribeAppImageConfigResponse#KernelGatewayImageConfig
   */
  readonly kernelGatewayImageConfig?: KernelGatewayImageConfig;

}

/**
 * @schema DescribeAutoMlJobRequest
 */
export interface DescribeAutoMlJobRequest {
  /**
   * @schema DescribeAutoMlJobRequest#AutoMLJobName
   */
  readonly autoMlJobName: string;

}

/**
 * @schema DescribeAutoMlJobResponse
 */
export interface DescribeAutoMlJobResponse {
  /**
   * @schema DescribeAutoMlJobResponse#AutoMLJobName
   */
  readonly autoMlJobName: string;

  /**
   * @schema DescribeAutoMlJobResponse#AutoMLJobArn
   */
  readonly autoMlJobArn: string;

  /**
   * @schema DescribeAutoMlJobResponse#InputDataConfig
   */
  readonly inputDataConfig: AutoMlChannel[];

  /**
   * @schema DescribeAutoMlJobResponse#OutputDataConfig
   */
  readonly outputDataConfig: AutoMlOutputDataConfig;

  /**
   * @schema DescribeAutoMlJobResponse#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema DescribeAutoMlJobResponse#AutoMLJobObjective
   */
  readonly autoMlJobObjective?: AutoMlJobObjective;

  /**
   * @schema DescribeAutoMlJobResponse#ProblemType
   */
  readonly problemType?: string;

  /**
   * @schema DescribeAutoMlJobResponse#AutoMLJobConfig
   */
  readonly autoMlJobConfig?: AutoMlJobConfig;

  /**
   * @schema DescribeAutoMlJobResponse#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema DescribeAutoMlJobResponse#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DescribeAutoMlJobResponse#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema DescribeAutoMlJobResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema DescribeAutoMlJobResponse#BestCandidate
   */
  readonly bestCandidate?: AutoMlCandidate;

  /**
   * @schema DescribeAutoMlJobResponse#AutoMLJobStatus
   */
  readonly autoMlJobStatus: string;

  /**
   * @schema DescribeAutoMlJobResponse#AutoMLJobSecondaryStatus
   */
  readonly autoMlJobSecondaryStatus: string;

  /**
   * @schema DescribeAutoMlJobResponse#GenerateCandidateDefinitionsOnly
   */
  readonly generateCandidateDefinitionsOnly?: boolean;

  /**
   * @schema DescribeAutoMlJobResponse#AutoMLJobArtifacts
   */
  readonly autoMlJobArtifacts?: AutoMlJobArtifacts;

  /**
   * @schema DescribeAutoMlJobResponse#ResolvedAttributes
   */
  readonly resolvedAttributes?: ResolvedAttributes;

}

/**
 * @schema DescribeCodeRepositoryInput
 */
export interface DescribeCodeRepositoryInput {
  /**
   * @schema DescribeCodeRepositoryInput#CodeRepositoryName
   */
  readonly codeRepositoryName: string;

}

/**
 * @schema DescribeCodeRepositoryOutput
 */
export interface DescribeCodeRepositoryOutput {
  /**
   * @schema DescribeCodeRepositoryOutput#CodeRepositoryName
   */
  readonly codeRepositoryName: string;

  /**
   * @schema DescribeCodeRepositoryOutput#CodeRepositoryArn
   */
  readonly codeRepositoryArn: string;

  /**
   * @schema DescribeCodeRepositoryOutput#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema DescribeCodeRepositoryOutput#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema DescribeCodeRepositoryOutput#GitConfig
   */
  readonly gitConfig?: GitConfig;

}

/**
 * @schema DescribeCompilationJobRequest
 */
export interface DescribeCompilationJobRequest {
  /**
   * @schema DescribeCompilationJobRequest#CompilationJobName
   */
  readonly compilationJobName: string;

}

/**
 * @schema DescribeCompilationJobResponse
 */
export interface DescribeCompilationJobResponse {
  /**
   * @schema DescribeCompilationJobResponse#CompilationJobName
   */
  readonly compilationJobName: string;

  /**
   * @schema DescribeCompilationJobResponse#CompilationJobArn
   */
  readonly compilationJobArn: string;

  /**
   * @schema DescribeCompilationJobResponse#CompilationJobStatus
   */
  readonly compilationJobStatus: string;

  /**
   * @schema DescribeCompilationJobResponse#CompilationStartTime
   */
  readonly compilationStartTime?: string;

  /**
   * @schema DescribeCompilationJobResponse#CompilationEndTime
   */
  readonly compilationEndTime?: string;

  /**
   * @schema DescribeCompilationJobResponse#StoppingCondition
   */
  readonly stoppingCondition: StoppingCondition;

  /**
   * @schema DescribeCompilationJobResponse#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema DescribeCompilationJobResponse#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema DescribeCompilationJobResponse#FailureReason
   */
  readonly failureReason: string;

  /**
   * @schema DescribeCompilationJobResponse#ModelArtifacts
   */
  readonly modelArtifacts: ModelArtifacts;

  /**
   * @schema DescribeCompilationJobResponse#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema DescribeCompilationJobResponse#InputConfig
   */
  readonly inputConfig: InputConfig;

  /**
   * @schema DescribeCompilationJobResponse#OutputConfig
   */
  readonly outputConfig: OutputConfig;

}

/**
 * @schema DescribeDomainRequest
 */
export interface DescribeDomainRequest {
  /**
   * @schema DescribeDomainRequest#DomainId
   */
  readonly domainId: string;

}

/**
 * @schema DescribeDomainResponse
 */
export interface DescribeDomainResponse {
  /**
   * @schema DescribeDomainResponse#DomainArn
   */
  readonly domainArn?: string;

  /**
   * @schema DescribeDomainResponse#DomainId
   */
  readonly domainId?: string;

  /**
   * @schema DescribeDomainResponse#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema DescribeDomainResponse#HomeEfsFileSystemId
   */
  readonly homeEfsFileSystemId?: string;

  /**
   * @schema DescribeDomainResponse#SingleSignOnManagedApplicationInstanceId
   */
  readonly singleSignOnManagedApplicationInstanceId?: string;

  /**
   * @schema DescribeDomainResponse#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeDomainResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DescribeDomainResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema DescribeDomainResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema DescribeDomainResponse#AuthMode
   */
  readonly authMode?: string;

  /**
   * @schema DescribeDomainResponse#DefaultUserSettings
   */
  readonly defaultUserSettings?: UserSettings;

  /**
   * @schema DescribeDomainResponse#AppNetworkAccessType
   */
  readonly appNetworkAccessType?: string;

  /**
   * @schema DescribeDomainResponse#HomeEfsFileSystemKmsKeyId
   */
  readonly homeEfsFileSystemKmsKeyId?: string;

  /**
   * @schema DescribeDomainResponse#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema DescribeDomainResponse#Url
   */
  readonly url?: string;

  /**
   * @schema DescribeDomainResponse#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema DescribeDomainResponse#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema DescribeEndpointInput
 */
export interface DescribeEndpointInput {
  /**
   * @schema DescribeEndpointInput#EndpointName
   */
  readonly endpointName: string;

}

/**
 * @schema DescribeEndpointOutput
 */
export interface DescribeEndpointOutput {
  /**
   * @schema DescribeEndpointOutput#EndpointName
   */
  readonly endpointName: string;

  /**
   * @schema DescribeEndpointOutput#EndpointArn
   */
  readonly endpointArn: string;

  /**
   * @schema DescribeEndpointOutput#EndpointConfigName
   */
  readonly endpointConfigName: string;

  /**
   * @schema DescribeEndpointOutput#ProductionVariants
   */
  readonly productionVariants?: ProductionVariantSummary[];

  /**
   * @schema DescribeEndpointOutput#DataCaptureConfig
   */
  readonly dataCaptureConfig?: DataCaptureConfigSummary;

  /**
   * @schema DescribeEndpointOutput#EndpointStatus
   */
  readonly endpointStatus: string;

  /**
   * @schema DescribeEndpointOutput#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema DescribeEndpointOutput#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema DescribeEndpointOutput#LastModifiedTime
   */
  readonly lastModifiedTime: string;

}

/**
 * @schema DescribeEndpointConfigInput
 */
export interface DescribeEndpointConfigInput {
  /**
   * @schema DescribeEndpointConfigInput#EndpointConfigName
   */
  readonly endpointConfigName: string;

}

/**
 * @schema DescribeEndpointConfigOutput
 */
export interface DescribeEndpointConfigOutput {
  /**
   * @schema DescribeEndpointConfigOutput#EndpointConfigName
   */
  readonly endpointConfigName: string;

  /**
   * @schema DescribeEndpointConfigOutput#EndpointConfigArn
   */
  readonly endpointConfigArn: string;

  /**
   * @schema DescribeEndpointConfigOutput#ProductionVariants
   */
  readonly productionVariants: ProductionVariant[];

  /**
   * @schema DescribeEndpointConfigOutput#DataCaptureConfig
   */
  readonly dataCaptureConfig?: DataCaptureConfig;

  /**
   * @schema DescribeEndpointConfigOutput#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DescribeEndpointConfigOutput#CreationTime
   */
  readonly creationTime: string;

}

/**
 * @schema DescribeExperimentRequest
 */
export interface DescribeExperimentRequest {
  /**
   * @schema DescribeExperimentRequest#ExperimentName
   */
  readonly experimentName: string;

}

/**
 * @schema DescribeExperimentResponse
 */
export interface DescribeExperimentResponse {
  /**
   * @schema DescribeExperimentResponse#ExperimentName
   */
  readonly experimentName?: string;

  /**
   * @schema DescribeExperimentResponse#ExperimentArn
   */
  readonly experimentArn?: string;

  /**
   * @schema DescribeExperimentResponse#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema DescribeExperimentResponse#Source
   */
  readonly source?: ExperimentSource;

  /**
   * @schema DescribeExperimentResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeExperimentResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DescribeExperimentResponse#CreatedBy
   */
  readonly createdBy?: UserContext;

  /**
   * @schema DescribeExperimentResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema DescribeExperimentResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: UserContext;

}

/**
 * @schema DescribeFlowDefinitionRequest
 */
export interface DescribeFlowDefinitionRequest {
  /**
   * @schema DescribeFlowDefinitionRequest#FlowDefinitionName
   */
  readonly flowDefinitionName: string;

}

/**
 * @schema DescribeFlowDefinitionResponse
 */
export interface DescribeFlowDefinitionResponse {
  /**
   * @schema DescribeFlowDefinitionResponse#FlowDefinitionArn
   */
  readonly flowDefinitionArn: string;

  /**
   * @schema DescribeFlowDefinitionResponse#FlowDefinitionName
   */
  readonly flowDefinitionName: string;

  /**
   * @schema DescribeFlowDefinitionResponse#FlowDefinitionStatus
   */
  readonly flowDefinitionStatus: string;

  /**
   * @schema DescribeFlowDefinitionResponse#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema DescribeFlowDefinitionResponse#HumanLoopRequestSource
   */
  readonly humanLoopRequestSource?: HumanLoopRequestSource;

  /**
   * @schema DescribeFlowDefinitionResponse#HumanLoopActivationConfig
   */
  readonly humanLoopActivationConfig?: HumanLoopActivationConfig;

  /**
   * @schema DescribeFlowDefinitionResponse#HumanLoopConfig
   */
  readonly humanLoopConfig: HumanLoopConfig;

  /**
   * @schema DescribeFlowDefinitionResponse#OutputConfig
   */
  readonly outputConfig: FlowDefinitionOutputConfig;

  /**
   * @schema DescribeFlowDefinitionResponse#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema DescribeFlowDefinitionResponse#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema DescribeHumanTaskUiRequest
 */
export interface DescribeHumanTaskUiRequest {
  /**
   * @schema DescribeHumanTaskUiRequest#HumanTaskUiName
   */
  readonly humanTaskUiName: string;

}

/**
 * @schema DescribeHumanTaskUiResponse
 */
export interface DescribeHumanTaskUiResponse {
  /**
   * @schema DescribeHumanTaskUiResponse#HumanTaskUiArn
   */
  readonly humanTaskUiArn: string;

  /**
   * @schema DescribeHumanTaskUiResponse#HumanTaskUiName
   */
  readonly humanTaskUiName: string;

  /**
   * @schema DescribeHumanTaskUiResponse#HumanTaskUiStatus
   */
  readonly humanTaskUiStatus?: string;

  /**
   * @schema DescribeHumanTaskUiResponse#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema DescribeHumanTaskUiResponse#UiTemplate
   */
  readonly uiTemplate: UiTemplateInfo;

}

/**
 * @schema DescribeHyperParameterTuningJobRequest
 */
export interface DescribeHyperParameterTuningJobRequest {
  /**
   * @schema DescribeHyperParameterTuningJobRequest#HyperParameterTuningJobName
   */
  readonly hyperParameterTuningJobName: string;

}

/**
 * @schema DescribeHyperParameterTuningJobResponse
 */
export interface DescribeHyperParameterTuningJobResponse {
  /**
   * @schema DescribeHyperParameterTuningJobResponse#HyperParameterTuningJobName
   */
  readonly hyperParameterTuningJobName: string;

  /**
   * @schema DescribeHyperParameterTuningJobResponse#HyperParameterTuningJobArn
   */
  readonly hyperParameterTuningJobArn: string;

  /**
   * @schema DescribeHyperParameterTuningJobResponse#HyperParameterTuningJobConfig
   */
  readonly hyperParameterTuningJobConfig: HyperParameterTuningJobConfig;

  /**
   * @schema DescribeHyperParameterTuningJobResponse#TrainingJobDefinition
   */
  readonly trainingJobDefinition?: HyperParameterTrainingJobDefinition;

  /**
   * @schema DescribeHyperParameterTuningJobResponse#TrainingJobDefinitions
   */
  readonly trainingJobDefinitions?: HyperParameterTrainingJobDefinition[];

  /**
   * @schema DescribeHyperParameterTuningJobResponse#HyperParameterTuningJobStatus
   */
  readonly hyperParameterTuningJobStatus: string;

  /**
   * @schema DescribeHyperParameterTuningJobResponse#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema DescribeHyperParameterTuningJobResponse#HyperParameterTuningEndTime
   */
  readonly hyperParameterTuningEndTime?: string;

  /**
   * @schema DescribeHyperParameterTuningJobResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema DescribeHyperParameterTuningJobResponse#TrainingJobStatusCounters
   */
  readonly trainingJobStatusCounters: TrainingJobStatusCounters;

  /**
   * @schema DescribeHyperParameterTuningJobResponse#ObjectiveStatusCounters
   */
  readonly objectiveStatusCounters: ObjectiveStatusCounters;

  /**
   * @schema DescribeHyperParameterTuningJobResponse#BestTrainingJob
   */
  readonly bestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * @schema DescribeHyperParameterTuningJobResponse#OverallBestTrainingJob
   */
  readonly overallBestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * @schema DescribeHyperParameterTuningJobResponse#WarmStartConfig
   */
  readonly warmStartConfig?: HyperParameterTuningJobWarmStartConfig;

  /**
   * @schema DescribeHyperParameterTuningJobResponse#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema DescribeImageRequest
 */
export interface DescribeImageRequest {
  /**
   * @schema DescribeImageRequest#ImageName
   */
  readonly imageName: string;

}

/**
 * @schema DescribeImageResponse
 */
export interface DescribeImageResponse {
  /**
   * @schema DescribeImageResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DescribeImageResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeImageResponse#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema DescribeImageResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema DescribeImageResponse#ImageArn
   */
  readonly imageArn?: string;

  /**
   * @schema DescribeImageResponse#ImageName
   */
  readonly imageName?: string;

  /**
   * @schema DescribeImageResponse#ImageStatus
   */
  readonly imageStatus?: string;

  /**
   * @schema DescribeImageResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema DescribeImageResponse#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema DescribeImageVersionRequest
 */
export interface DescribeImageVersionRequest {
  /**
   * @schema DescribeImageVersionRequest#ImageName
   */
  readonly imageName: string;

  /**
   * @schema DescribeImageVersionRequest#Version
   */
  readonly version?: number;

}

/**
 * @schema DescribeImageVersionResponse
 */
export interface DescribeImageVersionResponse {
  /**
   * @schema DescribeImageVersionResponse#BaseImage
   */
  readonly baseImage?: string;

  /**
   * @schema DescribeImageVersionResponse#ContainerImage
   */
  readonly containerImage?: string;

  /**
   * @schema DescribeImageVersionResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DescribeImageVersionResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema DescribeImageVersionResponse#ImageArn
   */
  readonly imageArn?: string;

  /**
   * @schema DescribeImageVersionResponse#ImageVersionArn
   */
  readonly imageVersionArn?: string;

  /**
   * @schema DescribeImageVersionResponse#ImageVersionStatus
   */
  readonly imageVersionStatus?: string;

  /**
   * @schema DescribeImageVersionResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema DescribeImageVersionResponse#Version
   */
  readonly version?: number;

}

/**
 * @schema DescribeLabelingJobRequest
 */
export interface DescribeLabelingJobRequest {
  /**
   * @schema DescribeLabelingJobRequest#LabelingJobName
   */
  readonly labelingJobName: string;

}

/**
 * @schema DescribeLabelingJobResponse
 */
export interface DescribeLabelingJobResponse {
  /**
   * @schema DescribeLabelingJobResponse#LabelingJobStatus
   */
  readonly labelingJobStatus: string;

  /**
   * @schema DescribeLabelingJobResponse#LabelCounters
   */
  readonly labelCounters: LabelCounters;

  /**
   * @schema DescribeLabelingJobResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema DescribeLabelingJobResponse#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema DescribeLabelingJobResponse#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema DescribeLabelingJobResponse#JobReferenceCode
   */
  readonly jobReferenceCode: string;

  /**
   * @schema DescribeLabelingJobResponse#LabelingJobName
   */
  readonly labelingJobName: string;

  /**
   * @schema DescribeLabelingJobResponse#LabelingJobArn
   */
  readonly labelingJobArn: string;

  /**
   * @schema DescribeLabelingJobResponse#LabelAttributeName
   */
  readonly labelAttributeName?: string;

  /**
   * @schema DescribeLabelingJobResponse#InputConfig
   */
  readonly inputConfig: LabelingJobInputConfig;

  /**
   * @schema DescribeLabelingJobResponse#OutputConfig
   */
  readonly outputConfig: LabelingJobOutputConfig;

  /**
   * @schema DescribeLabelingJobResponse#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema DescribeLabelingJobResponse#LabelCategoryConfigS3Uri
   */
  readonly labelCategoryConfigS3Uri?: string;

  /**
   * @schema DescribeLabelingJobResponse#StoppingConditions
   */
  readonly stoppingConditions?: LabelingJobStoppingConditions;

  /**
   * @schema DescribeLabelingJobResponse#LabelingJobAlgorithmsConfig
   */
  readonly labelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;

  /**
   * @schema DescribeLabelingJobResponse#HumanTaskConfig
   */
  readonly humanTaskConfig: HumanTaskConfig;

  /**
   * @schema DescribeLabelingJobResponse#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema DescribeLabelingJobResponse#LabelingJobOutput
   */
  readonly labelingJobOutput?: LabelingJobOutput;

}

/**
 * @schema DescribeModelInput
 */
export interface DescribeModelInput {
  /**
   * @schema DescribeModelInput#ModelName
   */
  readonly modelName: string;

}

/**
 * @schema DescribeModelOutput
 */
export interface DescribeModelOutput {
  /**
   * @schema DescribeModelOutput#ModelName
   */
  readonly modelName: string;

  /**
   * @schema DescribeModelOutput#PrimaryContainer
   */
  readonly primaryContainer?: ContainerDefinition;

  /**
   * @schema DescribeModelOutput#Containers
   */
  readonly containers?: ContainerDefinition[];

  /**
   * @schema DescribeModelOutput#ExecutionRoleArn
   */
  readonly executionRoleArn: string;

  /**
   * @schema DescribeModelOutput#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema DescribeModelOutput#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema DescribeModelOutput#ModelArn
   */
  readonly modelArn: string;

  /**
   * @schema DescribeModelOutput#EnableNetworkIsolation
   */
  readonly enableNetworkIsolation?: boolean;

}

/**
 * @schema DescribeModelPackageInput
 */
export interface DescribeModelPackageInput {
  /**
   * @schema DescribeModelPackageInput#ModelPackageName
   */
  readonly modelPackageName: string;

}

/**
 * @schema DescribeModelPackageOutput
 */
export interface DescribeModelPackageOutput {
  /**
   * @schema DescribeModelPackageOutput#ModelPackageName
   */
  readonly modelPackageName: string;

  /**
   * @schema DescribeModelPackageOutput#ModelPackageArn
   */
  readonly modelPackageArn: string;

  /**
   * @schema DescribeModelPackageOutput#ModelPackageDescription
   */
  readonly modelPackageDescription?: string;

  /**
   * @schema DescribeModelPackageOutput#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema DescribeModelPackageOutput#InferenceSpecification
   */
  readonly inferenceSpecification?: InferenceSpecification;

  /**
   * @schema DescribeModelPackageOutput#SourceAlgorithmSpecification
   */
  readonly sourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  /**
   * @schema DescribeModelPackageOutput#ValidationSpecification
   */
  readonly validationSpecification?: ModelPackageValidationSpecification;

  /**
   * @schema DescribeModelPackageOutput#ModelPackageStatus
   */
  readonly modelPackageStatus: string;

  /**
   * @schema DescribeModelPackageOutput#ModelPackageStatusDetails
   */
  readonly modelPackageStatusDetails: ModelPackageStatusDetails;

  /**
   * @schema DescribeModelPackageOutput#CertifyForMarketplace
   */
  readonly certifyForMarketplace?: boolean;

}

/**
 * @schema DescribeMonitoringScheduleRequest
 */
export interface DescribeMonitoringScheduleRequest {
  /**
   * @schema DescribeMonitoringScheduleRequest#MonitoringScheduleName
   */
  readonly monitoringScheduleName: string;

}

/**
 * @schema DescribeMonitoringScheduleResponse
 */
export interface DescribeMonitoringScheduleResponse {
  /**
   * @schema DescribeMonitoringScheduleResponse#MonitoringScheduleArn
   */
  readonly monitoringScheduleArn: string;

  /**
   * @schema DescribeMonitoringScheduleResponse#MonitoringScheduleName
   */
  readonly monitoringScheduleName: string;

  /**
   * @schema DescribeMonitoringScheduleResponse#MonitoringScheduleStatus
   */
  readonly monitoringScheduleStatus: string;

  /**
   * @schema DescribeMonitoringScheduleResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema DescribeMonitoringScheduleResponse#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema DescribeMonitoringScheduleResponse#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema DescribeMonitoringScheduleResponse#MonitoringScheduleConfig
   */
  readonly monitoringScheduleConfig: MonitoringScheduleConfig;

  /**
   * @schema DescribeMonitoringScheduleResponse#EndpointName
   */
  readonly endpointName?: string;

  /**
   * @schema DescribeMonitoringScheduleResponse#LastMonitoringExecutionSummary
   */
  readonly lastMonitoringExecutionSummary?: MonitoringExecutionSummary;

}

/**
 * @schema DescribeNotebookInstanceInput
 */
export interface DescribeNotebookInstanceInput {
  /**
   * @schema DescribeNotebookInstanceInput#NotebookInstanceName
   */
  readonly notebookInstanceName: string;

}

/**
 * @schema DescribeNotebookInstanceOutput
 */
export interface DescribeNotebookInstanceOutput {
  /**
   * @schema DescribeNotebookInstanceOutput#NotebookInstanceArn
   */
  readonly notebookInstanceArn?: string;

  /**
   * @schema DescribeNotebookInstanceOutput#NotebookInstanceName
   */
  readonly notebookInstanceName?: string;

  /**
   * @schema DescribeNotebookInstanceOutput#NotebookInstanceStatus
   */
  readonly notebookInstanceStatus?: string;

  /**
   * @schema DescribeNotebookInstanceOutput#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema DescribeNotebookInstanceOutput#Url
   */
  readonly url?: string;

  /**
   * @schema DescribeNotebookInstanceOutput#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema DescribeNotebookInstanceOutput#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema DescribeNotebookInstanceOutput#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema DescribeNotebookInstanceOutput#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DescribeNotebookInstanceOutput#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DescribeNotebookInstanceOutput#NetworkInterfaceId
   */
  readonly networkInterfaceId?: string;

  /**
   * @schema DescribeNotebookInstanceOutput#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema DescribeNotebookInstanceOutput#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DescribeNotebookInstanceOutput#NotebookInstanceLifecycleConfigName
   */
  readonly notebookInstanceLifecycleConfigName?: string;

  /**
   * @schema DescribeNotebookInstanceOutput#DirectInternetAccess
   */
  readonly directInternetAccess?: string;

  /**
   * @schema DescribeNotebookInstanceOutput#VolumeSizeInGB
   */
  readonly volumeSizeInGb?: number;

  /**
   * @schema DescribeNotebookInstanceOutput#AcceleratorTypes
   */
  readonly acceleratorTypes?: string[];

  /**
   * @schema DescribeNotebookInstanceOutput#DefaultCodeRepository
   */
  readonly defaultCodeRepository?: string;

  /**
   * @schema DescribeNotebookInstanceOutput#AdditionalCodeRepositories
   */
  readonly additionalCodeRepositories?: string[];

  /**
   * @schema DescribeNotebookInstanceOutput#RootAccess
   */
  readonly rootAccess?: string;

}

/**
 * @schema DescribeNotebookInstanceLifecycleConfigInput
 */
export interface DescribeNotebookInstanceLifecycleConfigInput {
  /**
   * @schema DescribeNotebookInstanceLifecycleConfigInput#NotebookInstanceLifecycleConfigName
   */
  readonly notebookInstanceLifecycleConfigName: string;

}

/**
 * @schema DescribeNotebookInstanceLifecycleConfigOutput
 */
export interface DescribeNotebookInstanceLifecycleConfigOutput {
  /**
   * @schema DescribeNotebookInstanceLifecycleConfigOutput#NotebookInstanceLifecycleConfigArn
   */
  readonly notebookInstanceLifecycleConfigArn?: string;

  /**
   * @schema DescribeNotebookInstanceLifecycleConfigOutput#NotebookInstanceLifecycleConfigName
   */
  readonly notebookInstanceLifecycleConfigName?: string;

  /**
   * @schema DescribeNotebookInstanceLifecycleConfigOutput#OnCreate
   */
  readonly onCreate?: NotebookInstanceLifecycleHook[];

  /**
   * @schema DescribeNotebookInstanceLifecycleConfigOutput#OnStart
   */
  readonly onStart?: NotebookInstanceLifecycleHook[];

  /**
   * @schema DescribeNotebookInstanceLifecycleConfigOutput#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema DescribeNotebookInstanceLifecycleConfigOutput#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema DescribeProcessingJobRequest
 */
export interface DescribeProcessingJobRequest {
  /**
   * @schema DescribeProcessingJobRequest#ProcessingJobName
   */
  readonly processingJobName: string;

}

/**
 * @schema DescribeProcessingJobResponse
 */
export interface DescribeProcessingJobResponse {
  /**
   * @schema DescribeProcessingJobResponse#ProcessingInputs
   */
  readonly processingInputs?: ProcessingInput[];

  /**
   * @schema DescribeProcessingJobResponse#ProcessingOutputConfig
   */
  readonly processingOutputConfig?: ProcessingOutputConfig;

  /**
   * @schema DescribeProcessingJobResponse#ProcessingJobName
   */
  readonly processingJobName: string;

  /**
   * @schema DescribeProcessingJobResponse#ProcessingResources
   */
  readonly processingResources: ProcessingResources;

  /**
   * @schema DescribeProcessingJobResponse#StoppingCondition
   */
  readonly stoppingCondition?: ProcessingStoppingCondition;

  /**
   * @schema DescribeProcessingJobResponse#AppSpecification
   */
  readonly appSpecification: AppSpecification;

  /**
   * @schema DescribeProcessingJobResponse#Environment
   */
  readonly environment?: { [key: string]: string };

  /**
   * @schema DescribeProcessingJobResponse#NetworkConfig
   */
  readonly networkConfig?: NetworkConfig;

  /**
   * @schema DescribeProcessingJobResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DescribeProcessingJobResponse#ExperimentConfig
   */
  readonly experimentConfig?: ExperimentConfig;

  /**
   * @schema DescribeProcessingJobResponse#ProcessingJobArn
   */
  readonly processingJobArn: string;

  /**
   * @schema DescribeProcessingJobResponse#ProcessingJobStatus
   */
  readonly processingJobStatus: string;

  /**
   * @schema DescribeProcessingJobResponse#ExitMessage
   */
  readonly exitMessage?: string;

  /**
   * @schema DescribeProcessingJobResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema DescribeProcessingJobResponse#ProcessingEndTime
   */
  readonly processingEndTime?: string;

  /**
   * @schema DescribeProcessingJobResponse#ProcessingStartTime
   */
  readonly processingStartTime?: string;

  /**
   * @schema DescribeProcessingJobResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema DescribeProcessingJobResponse#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema DescribeProcessingJobResponse#MonitoringScheduleArn
   */
  readonly monitoringScheduleArn?: string;

  /**
   * @schema DescribeProcessingJobResponse#AutoMLJobArn
   */
  readonly autoMlJobArn?: string;

  /**
   * @schema DescribeProcessingJobResponse#TrainingJobArn
   */
  readonly trainingJobArn?: string;

}

/**
 * @schema DescribeSubscribedWorkteamRequest
 */
export interface DescribeSubscribedWorkteamRequest {
  /**
   * @schema DescribeSubscribedWorkteamRequest#WorkteamArn
   */
  readonly workteamArn: string;

}

/**
 * @schema DescribeSubscribedWorkteamResponse
 */
export interface DescribeSubscribedWorkteamResponse {
  /**
   * @schema DescribeSubscribedWorkteamResponse#SubscribedWorkteam
   */
  readonly subscribedWorkteam: SubscribedWorkteam;

}

/**
 * @schema DescribeTrainingJobRequest
 */
export interface DescribeTrainingJobRequest {
  /**
   * @schema DescribeTrainingJobRequest#TrainingJobName
   */
  readonly trainingJobName: string;

}

/**
 * @schema DescribeTrainingJobResponse
 */
export interface DescribeTrainingJobResponse {
  /**
   * @schema DescribeTrainingJobResponse#TrainingJobName
   */
  readonly trainingJobName: string;

  /**
   * @schema DescribeTrainingJobResponse#TrainingJobArn
   */
  readonly trainingJobArn: string;

  /**
   * @schema DescribeTrainingJobResponse#TuningJobArn
   */
  readonly tuningJobArn?: string;

  /**
   * @schema DescribeTrainingJobResponse#LabelingJobArn
   */
  readonly labelingJobArn?: string;

  /**
   * @schema DescribeTrainingJobResponse#AutoMLJobArn
   */
  readonly autoMlJobArn?: string;

  /**
   * @schema DescribeTrainingJobResponse#ModelArtifacts
   */
  readonly modelArtifacts: ModelArtifacts;

  /**
   * @schema DescribeTrainingJobResponse#TrainingJobStatus
   */
  readonly trainingJobStatus: string;

  /**
   * @schema DescribeTrainingJobResponse#SecondaryStatus
   */
  readonly secondaryStatus: string;

  /**
   * @schema DescribeTrainingJobResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema DescribeTrainingJobResponse#HyperParameters
   */
  readonly hyperParameters?: { [key: string]: string };

  /**
   * @schema DescribeTrainingJobResponse#AlgorithmSpecification
   */
  readonly algorithmSpecification: AlgorithmSpecification;

  /**
   * @schema DescribeTrainingJobResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DescribeTrainingJobResponse#InputDataConfig
   */
  readonly inputDataConfig?: Channel[];

  /**
   * @schema DescribeTrainingJobResponse#OutputDataConfig
   */
  readonly outputDataConfig?: OutputDataConfig;

  /**
   * @schema DescribeTrainingJobResponse#ResourceConfig
   */
  readonly resourceConfig: ResourceConfig;

  /**
   * @schema DescribeTrainingJobResponse#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema DescribeTrainingJobResponse#StoppingCondition
   */
  readonly stoppingCondition: StoppingCondition;

  /**
   * @schema DescribeTrainingJobResponse#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema DescribeTrainingJobResponse#TrainingStartTime
   */
  readonly trainingStartTime?: string;

  /**
   * @schema DescribeTrainingJobResponse#TrainingEndTime
   */
  readonly trainingEndTime?: string;

  /**
   * @schema DescribeTrainingJobResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema DescribeTrainingJobResponse#SecondaryStatusTransitions
   */
  readonly secondaryStatusTransitions?: SecondaryStatusTransition[];

  /**
   * @schema DescribeTrainingJobResponse#FinalMetricDataList
   */
  readonly finalMetricDataList?: MetricData[];

  /**
   * @schema DescribeTrainingJobResponse#EnableNetworkIsolation
   */
  readonly enableNetworkIsolation?: boolean;

  /**
   * @schema DescribeTrainingJobResponse#EnableInterContainerTrafficEncryption
   */
  readonly enableInterContainerTrafficEncryption?: boolean;

  /**
   * @schema DescribeTrainingJobResponse#EnableManagedSpotTraining
   */
  readonly enableManagedSpotTraining?: boolean;

  /**
   * @schema DescribeTrainingJobResponse#CheckpointConfig
   */
  readonly checkpointConfig?: CheckpointConfig;

  /**
   * @schema DescribeTrainingJobResponse#TrainingTimeInSeconds
   */
  readonly trainingTimeInSeconds?: number;

  /**
   * @schema DescribeTrainingJobResponse#BillableTimeInSeconds
   */
  readonly billableTimeInSeconds?: number;

  /**
   * @schema DescribeTrainingJobResponse#DebugHookConfig
   */
  readonly debugHookConfig?: DebugHookConfig;

  /**
   * @schema DescribeTrainingJobResponse#ExperimentConfig
   */
  readonly experimentConfig?: ExperimentConfig;

  /**
   * @schema DescribeTrainingJobResponse#DebugRuleConfigurations
   */
  readonly debugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * @schema DescribeTrainingJobResponse#TensorBoardOutputConfig
   */
  readonly tensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * @schema DescribeTrainingJobResponse#DebugRuleEvaluationStatuses
   */
  readonly debugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[];

}

/**
 * @schema DescribeTransformJobRequest
 */
export interface DescribeTransformJobRequest {
  /**
   * @schema DescribeTransformJobRequest#TransformJobName
   */
  readonly transformJobName: string;

}

/**
 * @schema DescribeTransformJobResponse
 */
export interface DescribeTransformJobResponse {
  /**
   * @schema DescribeTransformJobResponse#TransformJobName
   */
  readonly transformJobName: string;

  /**
   * @schema DescribeTransformJobResponse#TransformJobArn
   */
  readonly transformJobArn: string;

  /**
   * @schema DescribeTransformJobResponse#TransformJobStatus
   */
  readonly transformJobStatus: string;

  /**
   * @schema DescribeTransformJobResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema DescribeTransformJobResponse#ModelName
   */
  readonly modelName: string;

  /**
   * @schema DescribeTransformJobResponse#MaxConcurrentTransforms
   */
  readonly maxConcurrentTransforms?: number;

  /**
   * @schema DescribeTransformJobResponse#ModelClientConfig
   */
  readonly modelClientConfig?: ModelClientConfig;

  /**
   * @schema DescribeTransformJobResponse#MaxPayloadInMB
   */
  readonly maxPayloadInMb?: number;

  /**
   * @schema DescribeTransformJobResponse#BatchStrategy
   */
  readonly batchStrategy?: string;

  /**
   * @schema DescribeTransformJobResponse#Environment
   */
  readonly environment?: { [key: string]: string };

  /**
   * @schema DescribeTransformJobResponse#TransformInput
   */
  readonly transformInput: TransformInput;

  /**
   * @schema DescribeTransformJobResponse#TransformOutput
   */
  readonly transformOutput?: TransformOutput;

  /**
   * @schema DescribeTransformJobResponse#TransformResources
   */
  readonly transformResources: TransformResources;

  /**
   * @schema DescribeTransformJobResponse#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema DescribeTransformJobResponse#TransformStartTime
   */
  readonly transformStartTime?: string;

  /**
   * @schema DescribeTransformJobResponse#TransformEndTime
   */
  readonly transformEndTime?: string;

  /**
   * @schema DescribeTransformJobResponse#LabelingJobArn
   */
  readonly labelingJobArn?: string;

  /**
   * @schema DescribeTransformJobResponse#AutoMLJobArn
   */
  readonly autoMlJobArn?: string;

  /**
   * @schema DescribeTransformJobResponse#DataProcessing
   */
  readonly dataProcessing?: DataProcessing;

  /**
   * @schema DescribeTransformJobResponse#ExperimentConfig
   */
  readonly experimentConfig?: ExperimentConfig;

}

/**
 * @schema DescribeTrialRequest
 */
export interface DescribeTrialRequest {
  /**
   * @schema DescribeTrialRequest#TrialName
   */
  readonly trialName: string;

}

/**
 * @schema DescribeTrialResponse
 */
export interface DescribeTrialResponse {
  /**
   * @schema DescribeTrialResponse#TrialName
   */
  readonly trialName?: string;

  /**
   * @schema DescribeTrialResponse#TrialArn
   */
  readonly trialArn?: string;

  /**
   * @schema DescribeTrialResponse#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema DescribeTrialResponse#ExperimentName
   */
  readonly experimentName?: string;

  /**
   * @schema DescribeTrialResponse#Source
   */
  readonly source?: TrialSource;

  /**
   * @schema DescribeTrialResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DescribeTrialResponse#CreatedBy
   */
  readonly createdBy?: UserContext;

  /**
   * @schema DescribeTrialResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema DescribeTrialResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: UserContext;

}

/**
 * @schema DescribeTrialComponentRequest
 */
export interface DescribeTrialComponentRequest {
  /**
   * @schema DescribeTrialComponentRequest#TrialComponentName
   */
  readonly trialComponentName: string;

}

/**
 * @schema DescribeTrialComponentResponse
 */
export interface DescribeTrialComponentResponse {
  /**
   * @schema DescribeTrialComponentResponse#TrialComponentName
   */
  readonly trialComponentName?: string;

  /**
   * @schema DescribeTrialComponentResponse#TrialComponentArn
   */
  readonly trialComponentArn?: string;

  /**
   * @schema DescribeTrialComponentResponse#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema DescribeTrialComponentResponse#Source
   */
  readonly source?: TrialComponentSource;

  /**
   * @schema DescribeTrialComponentResponse#Status
   */
  readonly status?: TrialComponentStatus;

  /**
   * @schema DescribeTrialComponentResponse#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema DescribeTrialComponentResponse#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema DescribeTrialComponentResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DescribeTrialComponentResponse#CreatedBy
   */
  readonly createdBy?: UserContext;

  /**
   * @schema DescribeTrialComponentResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema DescribeTrialComponentResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: UserContext;

  /**
   * @schema DescribeTrialComponentResponse#Parameters
   */
  readonly parameters?: { [key: string]: TrialComponentParameterValue };

  /**
   * @schema DescribeTrialComponentResponse#InputArtifacts
   */
  readonly inputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * @schema DescribeTrialComponentResponse#OutputArtifacts
   */
  readonly outputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * @schema DescribeTrialComponentResponse#Metrics
   */
  readonly metrics?: TrialComponentMetricSummary[];

}

/**
 * @schema DescribeUserProfileRequest
 */
export interface DescribeUserProfileRequest {
  /**
   * @schema DescribeUserProfileRequest#DomainId
   */
  readonly domainId: string;

  /**
   * @schema DescribeUserProfileRequest#UserProfileName
   */
  readonly userProfileName: string;

}

/**
 * @schema DescribeUserProfileResponse
 */
export interface DescribeUserProfileResponse {
  /**
   * @schema DescribeUserProfileResponse#DomainId
   */
  readonly domainId?: string;

  /**
   * @schema DescribeUserProfileResponse#UserProfileArn
   */
  readonly userProfileArn?: string;

  /**
   * @schema DescribeUserProfileResponse#UserProfileName
   */
  readonly userProfileName?: string;

  /**
   * @schema DescribeUserProfileResponse#HomeEfsFileSystemUid
   */
  readonly homeEfsFileSystemUid?: string;

  /**
   * @schema DescribeUserProfileResponse#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeUserProfileResponse#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema DescribeUserProfileResponse#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DescribeUserProfileResponse#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema DescribeUserProfileResponse#SingleSignOnUserIdentifier
   */
  readonly singleSignOnUserIdentifier?: string;

  /**
   * @schema DescribeUserProfileResponse#SingleSignOnUserValue
   */
  readonly singleSignOnUserValue?: string;

  /**
   * @schema DescribeUserProfileResponse#UserSettings
   */
  readonly userSettings?: UserSettings;

}

/**
 * @schema DescribeWorkforceRequest
 */
export interface DescribeWorkforceRequest {
  /**
   * @schema DescribeWorkforceRequest#WorkforceName
   */
  readonly workforceName: string;

}

/**
 * @schema DescribeWorkforceResponse
 */
export interface DescribeWorkforceResponse {
  /**
   * @schema DescribeWorkforceResponse#Workforce
   */
  readonly workforce: Workforce;

}

/**
 * @schema DescribeWorkteamRequest
 */
export interface DescribeWorkteamRequest {
  /**
   * @schema DescribeWorkteamRequest#WorkteamName
   */
  readonly workteamName: string;

}

/**
 * @schema DescribeWorkteamResponse
 */
export interface DescribeWorkteamResponse {
  /**
   * @schema DescribeWorkteamResponse#Workteam
   */
  readonly workteam: Workteam;

}

/**
 * @schema DisassociateTrialComponentRequest
 */
export interface DisassociateTrialComponentRequest {
  /**
   * @schema DisassociateTrialComponentRequest#TrialComponentName
   */
  readonly trialComponentName: string;

  /**
   * @schema DisassociateTrialComponentRequest#TrialName
   */
  readonly trialName: string;

}

/**
 * @schema DisassociateTrialComponentResponse
 */
export interface DisassociateTrialComponentResponse {
  /**
   * @schema DisassociateTrialComponentResponse#TrialComponentArn
   */
  readonly trialComponentArn?: string;

  /**
   * @schema DisassociateTrialComponentResponse#TrialArn
   */
  readonly trialArn?: string;

}

/**
 * @schema GetSearchSuggestionsRequest
 */
export interface GetSearchSuggestionsRequest {
  /**
   * @schema GetSearchSuggestionsRequest#Resource
   */
  readonly resource: string;

  /**
   * @schema GetSearchSuggestionsRequest#SuggestionQuery
   */
  readonly suggestionQuery?: SuggestionQuery;

}

/**
 * @schema GetSearchSuggestionsResponse
 */
export interface GetSearchSuggestionsResponse {
  /**
   * @schema GetSearchSuggestionsResponse#PropertyNameSuggestions
   */
  readonly propertyNameSuggestions?: PropertyNameSuggestion[];

}

/**
 * @schema ListAlgorithmsInput
 */
export interface ListAlgorithmsInput {
  /**
   * @schema ListAlgorithmsInput#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListAlgorithmsInput#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListAlgorithmsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAlgorithmsInput#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema ListAlgorithmsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAlgorithmsInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListAlgorithmsInput#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema ListAlgorithmsOutput
 */
export interface ListAlgorithmsOutput {
  /**
   * @schema ListAlgorithmsOutput#AlgorithmSummaryList
   */
  readonly algorithmSummaryList: AlgorithmSummary[];

  /**
   * @schema ListAlgorithmsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAppImageConfigsRequest
 */
export interface ListAppImageConfigsRequest {
  /**
   * @schema ListAppImageConfigsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAppImageConfigsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAppImageConfigsRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema ListAppImageConfigsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListAppImageConfigsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListAppImageConfigsRequest#ModifiedTimeBefore
   */
  readonly modifiedTimeBefore?: string;

  /**
   * @schema ListAppImageConfigsRequest#ModifiedTimeAfter
   */
  readonly modifiedTimeAfter?: string;

  /**
   * @schema ListAppImageConfigsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListAppImageConfigsRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema ListAppImageConfigsResponse
 */
export interface ListAppImageConfigsResponse {
  /**
   * @schema ListAppImageConfigsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAppImageConfigsResponse#AppImageConfigs
   */
  readonly appImageConfigs?: AppImageConfigDetails[];

}

/**
 * @schema ListAppsRequest
 */
export interface ListAppsRequest {
  /**
   * @schema ListAppsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListAppsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAppsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListAppsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListAppsRequest#DomainIdEquals
   */
  readonly domainIdEquals?: string;

  /**
   * @schema ListAppsRequest#UserProfileNameEquals
   */
  readonly userProfileNameEquals?: string;

}

/**
 * @schema ListAppsResponse
 */
export interface ListAppsResponse {
  /**
   * @schema ListAppsResponse#Apps
   */
  readonly apps?: AppDetails[];

  /**
   * @schema ListAppsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAutoMlJobsRequest
 */
export interface ListAutoMlJobsRequest {
  /**
   * @schema ListAutoMlJobsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListAutoMlJobsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListAutoMlJobsRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema ListAutoMlJobsRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema ListAutoMlJobsRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema ListAutoMlJobsRequest#StatusEquals
   */
  readonly statusEquals?: string;

  /**
   * @schema ListAutoMlJobsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListAutoMlJobsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListAutoMlJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListAutoMlJobsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListAutoMlJobsResponse
 */
export interface ListAutoMlJobsResponse {
  /**
   * @schema ListAutoMlJobsResponse#AutoMLJobSummaries
   */
  readonly autoMlJobSummaries: AutoMlJobSummary[];

  /**
   * @schema ListAutoMlJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListCandidatesForAutoMlJobRequest
 */
export interface ListCandidatesForAutoMlJobRequest {
  /**
   * @schema ListCandidatesForAutoMlJobRequest#AutoMLJobName
   */
  readonly autoMlJobName: string;

  /**
   * @schema ListCandidatesForAutoMlJobRequest#StatusEquals
   */
  readonly statusEquals?: string;

  /**
   * @schema ListCandidatesForAutoMlJobRequest#CandidateNameEquals
   */
  readonly candidateNameEquals?: string;

  /**
   * @schema ListCandidatesForAutoMlJobRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListCandidatesForAutoMlJobRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListCandidatesForAutoMlJobRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListCandidatesForAutoMlJobRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListCandidatesForAutoMlJobResponse
 */
export interface ListCandidatesForAutoMlJobResponse {
  /**
   * @schema ListCandidatesForAutoMlJobResponse#Candidates
   */
  readonly candidates: AutoMlCandidate[];

  /**
   * @schema ListCandidatesForAutoMlJobResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListCodeRepositoriesInput
 */
export interface ListCodeRepositoriesInput {
  /**
   * @schema ListCodeRepositoriesInput#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListCodeRepositoriesInput#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListCodeRepositoriesInput#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema ListCodeRepositoriesInput#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema ListCodeRepositoriesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListCodeRepositoriesInput#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema ListCodeRepositoriesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListCodeRepositoriesInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListCodeRepositoriesInput#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema ListCodeRepositoriesOutput
 */
export interface ListCodeRepositoriesOutput {
  /**
   * @schema ListCodeRepositoriesOutput#CodeRepositorySummaryList
   */
  readonly codeRepositorySummaryList: CodeRepositorySummary[];

  /**
   * @schema ListCodeRepositoriesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListCompilationJobsRequest
 */
export interface ListCompilationJobsRequest {
  /**
   * @schema ListCompilationJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListCompilationJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListCompilationJobsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListCompilationJobsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListCompilationJobsRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema ListCompilationJobsRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema ListCompilationJobsRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema ListCompilationJobsRequest#StatusEquals
   */
  readonly statusEquals?: string;

  /**
   * @schema ListCompilationJobsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListCompilationJobsRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema ListCompilationJobsResponse
 */
export interface ListCompilationJobsResponse {
  /**
   * @schema ListCompilationJobsResponse#CompilationJobSummaries
   */
  readonly compilationJobSummaries: CompilationJobSummary[];

  /**
   * @schema ListCompilationJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDomainsRequest
 */
export interface ListDomainsRequest {
  /**
   * @schema ListDomainsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDomainsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDomainsResponse
 */
export interface ListDomainsResponse {
  /**
   * @schema ListDomainsResponse#Domains
   */
  readonly domains?: DomainDetails[];

  /**
   * @schema ListDomainsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListEndpointConfigsInput
 */
export interface ListEndpointConfigsInput {
  /**
   * @schema ListEndpointConfigsInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListEndpointConfigsInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListEndpointConfigsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListEndpointConfigsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListEndpointConfigsInput#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema ListEndpointConfigsInput#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListEndpointConfigsInput#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

}

/**
 * @schema ListEndpointConfigsOutput
 */
export interface ListEndpointConfigsOutput {
  /**
   * @schema ListEndpointConfigsOutput#EndpointConfigs
   */
  readonly endpointConfigs: EndpointConfigSummary[];

  /**
   * @schema ListEndpointConfigsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListEndpointsInput
 */
export interface ListEndpointsInput {
  /**
   * @schema ListEndpointsInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListEndpointsInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListEndpointsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListEndpointsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListEndpointsInput#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema ListEndpointsInput#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListEndpointsInput#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListEndpointsInput#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema ListEndpointsInput#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema ListEndpointsInput#StatusEquals
   */
  readonly statusEquals?: string;

}

/**
 * @schema ListEndpointsOutput
 */
export interface ListEndpointsOutput {
  /**
   * @schema ListEndpointsOutput#Endpoints
   */
  readonly endpoints: EndpointSummary[];

  /**
   * @schema ListEndpointsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListExperimentsRequest
 */
export interface ListExperimentsRequest {
  /**
   * @schema ListExperimentsRequest#CreatedAfter
   */
  readonly createdAfter?: string;

  /**
   * @schema ListExperimentsRequest#CreatedBefore
   */
  readonly createdBefore?: string;

  /**
   * @schema ListExperimentsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListExperimentsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListExperimentsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListExperimentsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListExperimentsResponse
 */
export interface ListExperimentsResponse {
  /**
   * @schema ListExperimentsResponse#ExperimentSummaries
   */
  readonly experimentSummaries?: ExperimentSummary[];

  /**
   * @schema ListExperimentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFlowDefinitionsRequest
 */
export interface ListFlowDefinitionsRequest {
  /**
   * @schema ListFlowDefinitionsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListFlowDefinitionsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListFlowDefinitionsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListFlowDefinitionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFlowDefinitionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListFlowDefinitionsResponse
 */
export interface ListFlowDefinitionsResponse {
  /**
   * @schema ListFlowDefinitionsResponse#FlowDefinitionSummaries
   */
  readonly flowDefinitionSummaries: FlowDefinitionSummary[];

  /**
   * @schema ListFlowDefinitionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListHumanTaskUisRequest
 */
export interface ListHumanTaskUisRequest {
  /**
   * @schema ListHumanTaskUisRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListHumanTaskUisRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListHumanTaskUisRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListHumanTaskUisRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListHumanTaskUisRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListHumanTaskUisResponse
 */
export interface ListHumanTaskUisResponse {
  /**
   * @schema ListHumanTaskUisResponse#HumanTaskUiSummaries
   */
  readonly humanTaskUiSummaries: HumanTaskUiSummary[];

  /**
   * @schema ListHumanTaskUisResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListHyperParameterTuningJobsRequest
 */
export interface ListHyperParameterTuningJobsRequest {
  /**
   * @schema ListHyperParameterTuningJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListHyperParameterTuningJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListHyperParameterTuningJobsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListHyperParameterTuningJobsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListHyperParameterTuningJobsRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema ListHyperParameterTuningJobsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListHyperParameterTuningJobsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListHyperParameterTuningJobsRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema ListHyperParameterTuningJobsRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema ListHyperParameterTuningJobsRequest#StatusEquals
   */
  readonly statusEquals?: string;

}

/**
 * @schema ListHyperParameterTuningJobsResponse
 */
export interface ListHyperParameterTuningJobsResponse {
  /**
   * @schema ListHyperParameterTuningJobsResponse#HyperParameterTuningJobSummaries
   */
  readonly hyperParameterTuningJobSummaries: HyperParameterTuningJobSummary[];

  /**
   * @schema ListHyperParameterTuningJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListImageVersionsRequest
 */
export interface ListImageVersionsRequest {
  /**
   * @schema ListImageVersionsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListImageVersionsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListImageVersionsRequest#ImageName
   */
  readonly imageName: string;

  /**
   * @schema ListImageVersionsRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema ListImageVersionsRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema ListImageVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListImageVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListImageVersionsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListImageVersionsRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema ListImageVersionsResponse
 */
export interface ListImageVersionsResponse {
  /**
   * @schema ListImageVersionsResponse#ImageVersions
   */
  readonly imageVersions?: ImageVersion[];

  /**
   * @schema ListImageVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListImagesRequest
 */
export interface ListImagesRequest {
  /**
   * @schema ListImagesRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListImagesRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListImagesRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema ListImagesRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema ListImagesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListImagesRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema ListImagesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListImagesRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListImagesRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema ListImagesResponse
 */
export interface ListImagesResponse {
  /**
   * @schema ListImagesResponse#Images
   */
  readonly images?: Image[];

  /**
   * @schema ListImagesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListLabelingJobsRequest
 */
export interface ListLabelingJobsRequest {
  /**
   * @schema ListLabelingJobsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListLabelingJobsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListLabelingJobsRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema ListLabelingJobsRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema ListLabelingJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListLabelingJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListLabelingJobsRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema ListLabelingJobsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListLabelingJobsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListLabelingJobsRequest#StatusEquals
   */
  readonly statusEquals?: string;

}

/**
 * @schema ListLabelingJobsResponse
 */
export interface ListLabelingJobsResponse {
  /**
   * @schema ListLabelingJobsResponse#LabelingJobSummaryList
   */
  readonly labelingJobSummaryList?: LabelingJobSummary[];

  /**
   * @schema ListLabelingJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListLabelingJobsForWorkteamRequest
 */
export interface ListLabelingJobsForWorkteamRequest {
  /**
   * @schema ListLabelingJobsForWorkteamRequest#WorkteamArn
   */
  readonly workteamArn: string;

  /**
   * @schema ListLabelingJobsForWorkteamRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListLabelingJobsForWorkteamRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListLabelingJobsForWorkteamRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListLabelingJobsForWorkteamRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListLabelingJobsForWorkteamRequest#JobReferenceCodeContains
   */
  readonly jobReferenceCodeContains?: string;

  /**
   * @schema ListLabelingJobsForWorkteamRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListLabelingJobsForWorkteamRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema ListLabelingJobsForWorkteamResponse
 */
export interface ListLabelingJobsForWorkteamResponse {
  /**
   * @schema ListLabelingJobsForWorkteamResponse#LabelingJobSummaryList
   */
  readonly labelingJobSummaryList: LabelingJobForWorkteamSummary[];

  /**
   * @schema ListLabelingJobsForWorkteamResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListModelPackagesInput
 */
export interface ListModelPackagesInput {
  /**
   * @schema ListModelPackagesInput#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListModelPackagesInput#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListModelPackagesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListModelPackagesInput#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema ListModelPackagesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListModelPackagesInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListModelPackagesInput#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema ListModelPackagesOutput
 */
export interface ListModelPackagesOutput {
  /**
   * @schema ListModelPackagesOutput#ModelPackageSummaryList
   */
  readonly modelPackageSummaryList: ModelPackageSummary[];

  /**
   * @schema ListModelPackagesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListModelsInput
 */
export interface ListModelsInput {
  /**
   * @schema ListModelsInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListModelsInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListModelsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListModelsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListModelsInput#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema ListModelsInput#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListModelsInput#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

}

/**
 * @schema ListModelsOutput
 */
export interface ListModelsOutput {
  /**
   * @schema ListModelsOutput#Models
   */
  readonly models: ModelSummary[];

  /**
   * @schema ListModelsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMonitoringExecutionsRequest
 */
export interface ListMonitoringExecutionsRequest {
  /**
   * @schema ListMonitoringExecutionsRequest#MonitoringScheduleName
   */
  readonly monitoringScheduleName?: string;

  /**
   * @schema ListMonitoringExecutionsRequest#EndpointName
   */
  readonly endpointName?: string;

  /**
   * @schema ListMonitoringExecutionsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListMonitoringExecutionsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListMonitoringExecutionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListMonitoringExecutionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListMonitoringExecutionsRequest#ScheduledTimeBefore
   */
  readonly scheduledTimeBefore?: string;

  /**
   * @schema ListMonitoringExecutionsRequest#ScheduledTimeAfter
   */
  readonly scheduledTimeAfter?: string;

  /**
   * @schema ListMonitoringExecutionsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListMonitoringExecutionsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListMonitoringExecutionsRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema ListMonitoringExecutionsRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema ListMonitoringExecutionsRequest#StatusEquals
   */
  readonly statusEquals?: string;

}

/**
 * @schema ListMonitoringExecutionsResponse
 */
export interface ListMonitoringExecutionsResponse {
  /**
   * @schema ListMonitoringExecutionsResponse#MonitoringExecutionSummaries
   */
  readonly monitoringExecutionSummaries: MonitoringExecutionSummary[];

  /**
   * @schema ListMonitoringExecutionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListMonitoringSchedulesRequest
 */
export interface ListMonitoringSchedulesRequest {
  /**
   * @schema ListMonitoringSchedulesRequest#EndpointName
   */
  readonly endpointName?: string;

  /**
   * @schema ListMonitoringSchedulesRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListMonitoringSchedulesRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListMonitoringSchedulesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListMonitoringSchedulesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListMonitoringSchedulesRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema ListMonitoringSchedulesRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListMonitoringSchedulesRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListMonitoringSchedulesRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema ListMonitoringSchedulesRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema ListMonitoringSchedulesRequest#StatusEquals
   */
  readonly statusEquals?: string;

}

/**
 * @schema ListMonitoringSchedulesResponse
 */
export interface ListMonitoringSchedulesResponse {
  /**
   * @schema ListMonitoringSchedulesResponse#MonitoringScheduleSummaries
   */
  readonly monitoringScheduleSummaries: MonitoringScheduleSummary[];

  /**
   * @schema ListMonitoringSchedulesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListNotebookInstanceLifecycleConfigsInput
 */
export interface ListNotebookInstanceLifecycleConfigsInput {
  /**
   * @schema ListNotebookInstanceLifecycleConfigsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListNotebookInstanceLifecycleConfigsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListNotebookInstanceLifecycleConfigsInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListNotebookInstanceLifecycleConfigsInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListNotebookInstanceLifecycleConfigsInput#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema ListNotebookInstanceLifecycleConfigsInput#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListNotebookInstanceLifecycleConfigsInput#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListNotebookInstanceLifecycleConfigsInput#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema ListNotebookInstanceLifecycleConfigsInput#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

}

/**
 * @schema ListNotebookInstanceLifecycleConfigsOutput
 */
export interface ListNotebookInstanceLifecycleConfigsOutput {
  /**
   * @schema ListNotebookInstanceLifecycleConfigsOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListNotebookInstanceLifecycleConfigsOutput#NotebookInstanceLifecycleConfigs
   */
  readonly notebookInstanceLifecycleConfigs?: NotebookInstanceLifecycleConfigSummary[];

}

/**
 * @schema ListNotebookInstancesInput
 */
export interface ListNotebookInstancesInput {
  /**
   * @schema ListNotebookInstancesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListNotebookInstancesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListNotebookInstancesInput#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListNotebookInstancesInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListNotebookInstancesInput#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema ListNotebookInstancesInput#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListNotebookInstancesInput#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListNotebookInstancesInput#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema ListNotebookInstancesInput#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema ListNotebookInstancesInput#StatusEquals
   */
  readonly statusEquals?: string;

  /**
   * @schema ListNotebookInstancesInput#NotebookInstanceLifecycleConfigNameContains
   */
  readonly notebookInstanceLifecycleConfigNameContains?: string;

  /**
   * @schema ListNotebookInstancesInput#DefaultCodeRepositoryContains
   */
  readonly defaultCodeRepositoryContains?: string;

  /**
   * @schema ListNotebookInstancesInput#AdditionalCodeRepositoryEquals
   */
  readonly additionalCodeRepositoryEquals?: string;

}

/**
 * @schema ListNotebookInstancesOutput
 */
export interface ListNotebookInstancesOutput {
  /**
   * @schema ListNotebookInstancesOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListNotebookInstancesOutput#NotebookInstances
   */
  readonly notebookInstances?: NotebookInstanceSummary[];

}

/**
 * @schema ListProcessingJobsRequest
 */
export interface ListProcessingJobsRequest {
  /**
   * @schema ListProcessingJobsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListProcessingJobsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListProcessingJobsRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema ListProcessingJobsRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema ListProcessingJobsRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema ListProcessingJobsRequest#StatusEquals
   */
  readonly statusEquals?: string;

  /**
   * @schema ListProcessingJobsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListProcessingJobsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListProcessingJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListProcessingJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListProcessingJobsResponse
 */
export interface ListProcessingJobsResponse {
  /**
   * @schema ListProcessingJobsResponse#ProcessingJobSummaries
   */
  readonly processingJobSummaries: ProcessingJobSummary[];

  /**
   * @schema ListProcessingJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSubscribedWorkteamsRequest
 */
export interface ListSubscribedWorkteamsRequest {
  /**
   * @schema ListSubscribedWorkteamsRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema ListSubscribedWorkteamsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSubscribedWorkteamsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListSubscribedWorkteamsResponse
 */
export interface ListSubscribedWorkteamsResponse {
  /**
   * @schema ListSubscribedWorkteamsResponse#SubscribedWorkteams
   */
  readonly subscribedWorkteams: SubscribedWorkteam[];

  /**
   * @schema ListSubscribedWorkteamsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsInput
 */
export interface ListTagsInput {
  /**
   * @schema ListTagsInput#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ListTagsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsInput#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTagsOutput
 */
export interface ListTagsOutput {
  /**
   * @schema ListTagsOutput#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema ListTagsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTrainingJobsRequest
 */
export interface ListTrainingJobsRequest {
  /**
   * @schema ListTrainingJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTrainingJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTrainingJobsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListTrainingJobsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListTrainingJobsRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema ListTrainingJobsRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema ListTrainingJobsRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema ListTrainingJobsRequest#StatusEquals
   */
  readonly statusEquals?: string;

  /**
   * @schema ListTrainingJobsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListTrainingJobsRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema ListTrainingJobsResponse
 */
export interface ListTrainingJobsResponse {
  /**
   * @schema ListTrainingJobsResponse#TrainingJobSummaries
   */
  readonly trainingJobSummaries: TrainingJobSummary[];

  /**
   * @schema ListTrainingJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTrainingJobsForHyperParameterTuningJobRequest
 */
export interface ListTrainingJobsForHyperParameterTuningJobRequest {
  /**
   * @schema ListTrainingJobsForHyperParameterTuningJobRequest#HyperParameterTuningJobName
   */
  readonly hyperParameterTuningJobName: string;

  /**
   * @schema ListTrainingJobsForHyperParameterTuningJobRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTrainingJobsForHyperParameterTuningJobRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTrainingJobsForHyperParameterTuningJobRequest#StatusEquals
   */
  readonly statusEquals?: string;

  /**
   * @schema ListTrainingJobsForHyperParameterTuningJobRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListTrainingJobsForHyperParameterTuningJobRequest#SortOrder
   */
  readonly sortOrder?: string;

}

/**
 * @schema ListTrainingJobsForHyperParameterTuningJobResponse
 */
export interface ListTrainingJobsForHyperParameterTuningJobResponse {
  /**
   * @schema ListTrainingJobsForHyperParameterTuningJobResponse#TrainingJobSummaries
   */
  readonly trainingJobSummaries: HyperParameterTrainingJobSummary[];

  /**
   * @schema ListTrainingJobsForHyperParameterTuningJobResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTransformJobsRequest
 */
export interface ListTransformJobsRequest {
  /**
   * @schema ListTransformJobsRequest#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

  /**
   * @schema ListTransformJobsRequest#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ListTransformJobsRequest#LastModifiedTimeAfter
   */
  readonly lastModifiedTimeAfter?: string;

  /**
   * @schema ListTransformJobsRequest#LastModifiedTimeBefore
   */
  readonly lastModifiedTimeBefore?: string;

  /**
   * @schema ListTransformJobsRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema ListTransformJobsRequest#StatusEquals
   */
  readonly statusEquals?: string;

  /**
   * @schema ListTransformJobsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListTransformJobsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListTransformJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTransformJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTransformJobsResponse
 */
export interface ListTransformJobsResponse {
  /**
   * @schema ListTransformJobsResponse#TransformJobSummaries
   */
  readonly transformJobSummaries: TransformJobSummary[];

  /**
   * @schema ListTransformJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTrialComponentsRequest
 */
export interface ListTrialComponentsRequest {
  /**
   * @schema ListTrialComponentsRequest#ExperimentName
   */
  readonly experimentName?: string;

  /**
   * @schema ListTrialComponentsRequest#TrialName
   */
  readonly trialName?: string;

  /**
   * @schema ListTrialComponentsRequest#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema ListTrialComponentsRequest#CreatedAfter
   */
  readonly createdAfter?: string;

  /**
   * @schema ListTrialComponentsRequest#CreatedBefore
   */
  readonly createdBefore?: string;

  /**
   * @schema ListTrialComponentsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListTrialComponentsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListTrialComponentsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTrialComponentsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTrialComponentsResponse
 */
export interface ListTrialComponentsResponse {
  /**
   * @schema ListTrialComponentsResponse#TrialComponentSummaries
   */
  readonly trialComponentSummaries?: TrialComponentSummary[];

  /**
   * @schema ListTrialComponentsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTrialsRequest
 */
export interface ListTrialsRequest {
  /**
   * @schema ListTrialsRequest#ExperimentName
   */
  readonly experimentName?: string;

  /**
   * @schema ListTrialsRequest#TrialComponentName
   */
  readonly trialComponentName?: string;

  /**
   * @schema ListTrialsRequest#CreatedAfter
   */
  readonly createdAfter?: string;

  /**
   * @schema ListTrialsRequest#CreatedBefore
   */
  readonly createdBefore?: string;

  /**
   * @schema ListTrialsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListTrialsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListTrialsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTrialsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTrialsResponse
 */
export interface ListTrialsResponse {
  /**
   * @schema ListTrialsResponse#TrialSummaries
   */
  readonly trialSummaries?: TrialSummary[];

  /**
   * @schema ListTrialsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListUserProfilesRequest
 */
export interface ListUserProfilesRequest {
  /**
   * @schema ListUserProfilesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListUserProfilesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListUserProfilesRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListUserProfilesRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListUserProfilesRequest#DomainIdEquals
   */
  readonly domainIdEquals?: string;

  /**
   * @schema ListUserProfilesRequest#UserProfileNameContains
   */
  readonly userProfileNameContains?: string;

}

/**
 * @schema ListUserProfilesResponse
 */
export interface ListUserProfilesResponse {
  /**
   * @schema ListUserProfilesResponse#UserProfiles
   */
  readonly userProfiles?: UserProfileDetails[];

  /**
   * @schema ListUserProfilesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListWorkforcesRequest
 */
export interface ListWorkforcesRequest {
  /**
   * @schema ListWorkforcesRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListWorkforcesRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListWorkforcesRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema ListWorkforcesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListWorkforcesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListWorkforcesResponse
 */
export interface ListWorkforcesResponse {
  /**
   * @schema ListWorkforcesResponse#Workforces
   */
  readonly workforces: Workforce[];

  /**
   * @schema ListWorkforcesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListWorkteamsRequest
 */
export interface ListWorkteamsRequest {
  /**
   * @schema ListWorkteamsRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema ListWorkteamsRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema ListWorkteamsRequest#NameContains
   */
  readonly nameContains?: string;

  /**
   * @schema ListWorkteamsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListWorkteamsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListWorkteamsResponse
 */
export interface ListWorkteamsResponse {
  /**
   * @schema ListWorkteamsResponse#Workteams
   */
  readonly workteams: Workteam[];

  /**
   * @schema ListWorkteamsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RenderUiTemplateRequest
 */
export interface RenderUiTemplateRequest {
  /**
   * @schema RenderUiTemplateRequest#UiTemplate
   */
  readonly uiTemplate?: UiTemplate;

  /**
   * @schema RenderUiTemplateRequest#Task
   */
  readonly task: RenderableTask;

  /**
   * @schema RenderUiTemplateRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema RenderUiTemplateRequest#HumanTaskUiArn
   */
  readonly humanTaskUiArn?: string;

}

/**
 * @schema RenderUiTemplateResponse
 */
export interface RenderUiTemplateResponse {
  /**
   * @schema RenderUiTemplateResponse#RenderedContent
   */
  readonly renderedContent: string;

  /**
   * @schema RenderUiTemplateResponse#Errors
   */
  readonly errors: RenderingError[];

}

/**
 * @schema SearchRequest
 */
export interface SearchRequest {
  /**
   * @schema SearchRequest#Resource
   */
  readonly resource: string;

  /**
   * @schema SearchRequest#SearchExpression
   */
  readonly searchExpression?: SearchExpression;

  /**
   * @schema SearchRequest#SortBy
   */
  readonly sortBy?: string;

  /**
   * @schema SearchRequest#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema SearchRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema SearchResponse
 */
export interface SearchResponse {
  /**
   * @schema SearchResponse#Results
   */
  readonly results?: SearchRecord[];

  /**
   * @schema SearchResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema StartMonitoringScheduleRequest
 */
export interface StartMonitoringScheduleRequest {
  /**
   * @schema StartMonitoringScheduleRequest#MonitoringScheduleName
   */
  readonly monitoringScheduleName: string;

}

/**
 * @schema StartNotebookInstanceInput
 */
export interface StartNotebookInstanceInput {
  /**
   * @schema StartNotebookInstanceInput#NotebookInstanceName
   */
  readonly notebookInstanceName: string;

}

/**
 * @schema StopAutoMlJobRequest
 */
export interface StopAutoMlJobRequest {
  /**
   * @schema StopAutoMlJobRequest#AutoMLJobName
   */
  readonly autoMlJobName: string;

}

/**
 * @schema StopCompilationJobRequest
 */
export interface StopCompilationJobRequest {
  /**
   * @schema StopCompilationJobRequest#CompilationJobName
   */
  readonly compilationJobName: string;

}

/**
 * @schema StopHyperParameterTuningJobRequest
 */
export interface StopHyperParameterTuningJobRequest {
  /**
   * @schema StopHyperParameterTuningJobRequest#HyperParameterTuningJobName
   */
  readonly hyperParameterTuningJobName: string;

}

/**
 * @schema StopLabelingJobRequest
 */
export interface StopLabelingJobRequest {
  /**
   * @schema StopLabelingJobRequest#LabelingJobName
   */
  readonly labelingJobName: string;

}

/**
 * @schema StopMonitoringScheduleRequest
 */
export interface StopMonitoringScheduleRequest {
  /**
   * @schema StopMonitoringScheduleRequest#MonitoringScheduleName
   */
  readonly monitoringScheduleName: string;

}

/**
 * @schema StopNotebookInstanceInput
 */
export interface StopNotebookInstanceInput {
  /**
   * @schema StopNotebookInstanceInput#NotebookInstanceName
   */
  readonly notebookInstanceName: string;

}

/**
 * @schema StopProcessingJobRequest
 */
export interface StopProcessingJobRequest {
  /**
   * @schema StopProcessingJobRequest#ProcessingJobName
   */
  readonly processingJobName: string;

}

/**
 * @schema StopTrainingJobRequest
 */
export interface StopTrainingJobRequest {
  /**
   * @schema StopTrainingJobRequest#TrainingJobName
   */
  readonly trainingJobName: string;

}

/**
 * @schema StopTransformJobRequest
 */
export interface StopTransformJobRequest {
  /**
   * @schema StopTransformJobRequest#TransformJobName
   */
  readonly transformJobName: string;

}

/**
 * @schema UpdateAppImageConfigRequest
 */
export interface UpdateAppImageConfigRequest {
  /**
   * @schema UpdateAppImageConfigRequest#AppImageConfigName
   */
  readonly appImageConfigName: string;

  /**
   * @schema UpdateAppImageConfigRequest#KernelGatewayImageConfig
   */
  readonly kernelGatewayImageConfig?: KernelGatewayImageConfig;

}

/**
 * @schema UpdateAppImageConfigResponse
 */
export interface UpdateAppImageConfigResponse {
  /**
   * @schema UpdateAppImageConfigResponse#AppImageConfigArn
   */
  readonly appImageConfigArn?: string;

}

/**
 * @schema UpdateCodeRepositoryInput
 */
export interface UpdateCodeRepositoryInput {
  /**
   * @schema UpdateCodeRepositoryInput#CodeRepositoryName
   */
  readonly codeRepositoryName: string;

  /**
   * @schema UpdateCodeRepositoryInput#GitConfig
   */
  readonly gitConfig?: GitConfigForUpdate;

}

/**
 * @schema UpdateCodeRepositoryOutput
 */
export interface UpdateCodeRepositoryOutput {
  /**
   * @schema UpdateCodeRepositoryOutput#CodeRepositoryArn
   */
  readonly codeRepositoryArn: string;

}

/**
 * @schema UpdateDomainRequest
 */
export interface UpdateDomainRequest {
  /**
   * @schema UpdateDomainRequest#DomainId
   */
  readonly domainId: string;

  /**
   * @schema UpdateDomainRequest#DefaultUserSettings
   */
  readonly defaultUserSettings?: UserSettings;

}

/**
 * @schema UpdateDomainResponse
 */
export interface UpdateDomainResponse {
  /**
   * @schema UpdateDomainResponse#DomainArn
   */
  readonly domainArn?: string;

}

/**
 * @schema UpdateEndpointInput
 */
export interface UpdateEndpointInput {
  /**
   * @schema UpdateEndpointInput#EndpointName
   */
  readonly endpointName: string;

  /**
   * @schema UpdateEndpointInput#EndpointConfigName
   */
  readonly endpointConfigName: string;

  /**
   * @schema UpdateEndpointInput#RetainAllVariantProperties
   */
  readonly retainAllVariantProperties?: boolean;

  /**
   * @schema UpdateEndpointInput#ExcludeRetainedVariantProperties
   */
  readonly excludeRetainedVariantProperties?: VariantProperty[];

}

/**
 * @schema UpdateEndpointOutput
 */
export interface UpdateEndpointOutput {
  /**
   * @schema UpdateEndpointOutput#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema UpdateEndpointWeightsAndCapacitiesInput
 */
export interface UpdateEndpointWeightsAndCapacitiesInput {
  /**
   * @schema UpdateEndpointWeightsAndCapacitiesInput#EndpointName
   */
  readonly endpointName: string;

  /**
   * @schema UpdateEndpointWeightsAndCapacitiesInput#DesiredWeightsAndCapacities
   */
  readonly desiredWeightsAndCapacities: DesiredWeightAndCapacity[];

}

/**
 * @schema UpdateEndpointWeightsAndCapacitiesOutput
 */
export interface UpdateEndpointWeightsAndCapacitiesOutput {
  /**
   * @schema UpdateEndpointWeightsAndCapacitiesOutput#EndpointArn
   */
  readonly endpointArn: string;

}

/**
 * @schema UpdateExperimentRequest
 */
export interface UpdateExperimentRequest {
  /**
   * @schema UpdateExperimentRequest#ExperimentName
   */
  readonly experimentName: string;

  /**
   * @schema UpdateExperimentRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema UpdateExperimentRequest#Description
   */
  readonly description?: string;

}

/**
 * @schema UpdateExperimentResponse
 */
export interface UpdateExperimentResponse {
  /**
   * @schema UpdateExperimentResponse#ExperimentArn
   */
  readonly experimentArn?: string;

}

/**
 * @schema UpdateImageRequest
 */
export interface UpdateImageRequest {
  /**
   * @schema UpdateImageRequest#DeleteProperties
   */
  readonly deleteProperties?: string[];

  /**
   * @schema UpdateImageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateImageRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema UpdateImageRequest#ImageName
   */
  readonly imageName: string;

  /**
   * @schema UpdateImageRequest#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * @schema UpdateImageResponse
 */
export interface UpdateImageResponse {
  /**
   * @schema UpdateImageResponse#ImageArn
   */
  readonly imageArn?: string;

}

/**
 * @schema UpdateMonitoringScheduleRequest
 */
export interface UpdateMonitoringScheduleRequest {
  /**
   * @schema UpdateMonitoringScheduleRequest#MonitoringScheduleName
   */
  readonly monitoringScheduleName: string;

  /**
   * @schema UpdateMonitoringScheduleRequest#MonitoringScheduleConfig
   */
  readonly monitoringScheduleConfig: MonitoringScheduleConfig;

}

/**
 * @schema UpdateMonitoringScheduleResponse
 */
export interface UpdateMonitoringScheduleResponse {
  /**
   * @schema UpdateMonitoringScheduleResponse#MonitoringScheduleArn
   */
  readonly monitoringScheduleArn: string;

}

/**
 * @schema UpdateNotebookInstanceInput
 */
export interface UpdateNotebookInstanceInput {
  /**
   * @schema UpdateNotebookInstanceInput#NotebookInstanceName
   */
  readonly notebookInstanceName: string;

  /**
   * @schema UpdateNotebookInstanceInput#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema UpdateNotebookInstanceInput#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema UpdateNotebookInstanceInput#LifecycleConfigName
   */
  readonly lifecycleConfigName?: string;

  /**
   * @schema UpdateNotebookInstanceInput#DisassociateLifecycleConfig
   */
  readonly disassociateLifecycleConfig?: boolean;

  /**
   * @schema UpdateNotebookInstanceInput#VolumeSizeInGB
   */
  readonly volumeSizeInGb?: number;

  /**
   * @schema UpdateNotebookInstanceInput#DefaultCodeRepository
   */
  readonly defaultCodeRepository?: string;

  /**
   * @schema UpdateNotebookInstanceInput#AdditionalCodeRepositories
   */
  readonly additionalCodeRepositories?: string[];

  /**
   * @schema UpdateNotebookInstanceInput#AcceleratorTypes
   */
  readonly acceleratorTypes?: string[];

  /**
   * @schema UpdateNotebookInstanceInput#DisassociateAcceleratorTypes
   */
  readonly disassociateAcceleratorTypes?: boolean;

  /**
   * @schema UpdateNotebookInstanceInput#DisassociateDefaultCodeRepository
   */
  readonly disassociateDefaultCodeRepository?: boolean;

  /**
   * @schema UpdateNotebookInstanceInput#DisassociateAdditionalCodeRepositories
   */
  readonly disassociateAdditionalCodeRepositories?: boolean;

  /**
   * @schema UpdateNotebookInstanceInput#RootAccess
   */
  readonly rootAccess?: string;

}

/**
 * @schema UpdateNotebookInstanceOutput
 */
export interface UpdateNotebookInstanceOutput {
}

/**
 * @schema UpdateNotebookInstanceLifecycleConfigInput
 */
export interface UpdateNotebookInstanceLifecycleConfigInput {
  /**
   * @schema UpdateNotebookInstanceLifecycleConfigInput#NotebookInstanceLifecycleConfigName
   */
  readonly notebookInstanceLifecycleConfigName: string;

  /**
   * @schema UpdateNotebookInstanceLifecycleConfigInput#OnCreate
   */
  readonly onCreate?: NotebookInstanceLifecycleHook[];

  /**
   * @schema UpdateNotebookInstanceLifecycleConfigInput#OnStart
   */
  readonly onStart?: NotebookInstanceLifecycleHook[];

}

/**
 * @schema UpdateNotebookInstanceLifecycleConfigOutput
 */
export interface UpdateNotebookInstanceLifecycleConfigOutput {
}

/**
 * @schema UpdateTrialRequest
 */
export interface UpdateTrialRequest {
  /**
   * @schema UpdateTrialRequest#TrialName
   */
  readonly trialName: string;

  /**
   * @schema UpdateTrialRequest#DisplayName
   */
  readonly displayName?: string;

}

/**
 * @schema UpdateTrialResponse
 */
export interface UpdateTrialResponse {
  /**
   * @schema UpdateTrialResponse#TrialArn
   */
  readonly trialArn?: string;

}

/**
 * @schema UpdateTrialComponentRequest
 */
export interface UpdateTrialComponentRequest {
  /**
   * @schema UpdateTrialComponentRequest#TrialComponentName
   */
  readonly trialComponentName: string;

  /**
   * @schema UpdateTrialComponentRequest#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema UpdateTrialComponentRequest#Status
   */
  readonly status?: TrialComponentStatus;

  /**
   * @schema UpdateTrialComponentRequest#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema UpdateTrialComponentRequest#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema UpdateTrialComponentRequest#Parameters
   */
  readonly parameters?: { [key: string]: TrialComponentParameterValue };

  /**
   * @schema UpdateTrialComponentRequest#ParametersToRemove
   */
  readonly parametersToRemove?: string[];

  /**
   * @schema UpdateTrialComponentRequest#InputArtifacts
   */
  readonly inputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * @schema UpdateTrialComponentRequest#InputArtifactsToRemove
   */
  readonly inputArtifactsToRemove?: string[];

  /**
   * @schema UpdateTrialComponentRequest#OutputArtifacts
   */
  readonly outputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * @schema UpdateTrialComponentRequest#OutputArtifactsToRemove
   */
  readonly outputArtifactsToRemove?: string[];

}

/**
 * @schema UpdateTrialComponentResponse
 */
export interface UpdateTrialComponentResponse {
  /**
   * @schema UpdateTrialComponentResponse#TrialComponentArn
   */
  readonly trialComponentArn?: string;

}

/**
 * @schema UpdateUserProfileRequest
 */
export interface UpdateUserProfileRequest {
  /**
   * @schema UpdateUserProfileRequest#DomainId
   */
  readonly domainId: string;

  /**
   * @schema UpdateUserProfileRequest#UserProfileName
   */
  readonly userProfileName: string;

  /**
   * @schema UpdateUserProfileRequest#UserSettings
   */
  readonly userSettings?: UserSettings;

}

/**
 * @schema UpdateUserProfileResponse
 */
export interface UpdateUserProfileResponse {
  /**
   * @schema UpdateUserProfileResponse#UserProfileArn
   */
  readonly userProfileArn?: string;

}

/**
 * @schema UpdateWorkforceRequest
 */
export interface UpdateWorkforceRequest {
  /**
   * @schema UpdateWorkforceRequest#WorkforceName
   */
  readonly workforceName: string;

  /**
   * @schema UpdateWorkforceRequest#SourceIpConfig
   */
  readonly sourceIpConfig?: SourceIpConfig;

  /**
   * @schema UpdateWorkforceRequest#OidcConfig
   */
  readonly oidcConfig?: OidcConfig;

}

/**
 * @schema UpdateWorkforceResponse
 */
export interface UpdateWorkforceResponse {
  /**
   * @schema UpdateWorkforceResponse#Workforce
   */
  readonly workforce: Workforce;

}

/**
 * @schema UpdateWorkteamRequest
 */
export interface UpdateWorkteamRequest {
  /**
   * @schema UpdateWorkteamRequest#WorkteamName
   */
  readonly workteamName: string;

  /**
   * @schema UpdateWorkteamRequest#MemberDefinitions
   */
  readonly memberDefinitions?: MemberDefinition[];

  /**
   * @schema UpdateWorkteamRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateWorkteamRequest#NotificationConfiguration
   */
  readonly notificationConfiguration?: NotificationConfiguration;

}

/**
 * @schema UpdateWorkteamResponse
 */
export interface UpdateWorkteamResponse {
  /**
   * @schema UpdateWorkteamResponse#Workteam
   */
  readonly workteam: Workteam;

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
 * @schema TrainingSpecification
 */
export interface TrainingSpecification {
  /**
   * @schema TrainingSpecification#TrainingImage
   */
  readonly trainingImage: string;

  /**
   * @schema TrainingSpecification#TrainingImageDigest
   */
  readonly trainingImageDigest?: string;

  /**
   * @schema TrainingSpecification#SupportedHyperParameters
   */
  readonly supportedHyperParameters?: HyperParameterSpecification[];

  /**
   * @schema TrainingSpecification#SupportedTrainingInstanceTypes
   */
  readonly supportedTrainingInstanceTypes: string[];

  /**
   * @schema TrainingSpecification#SupportsDistributedTraining
   */
  readonly supportsDistributedTraining?: boolean;

  /**
   * @schema TrainingSpecification#MetricDefinitions
   */
  readonly metricDefinitions?: MetricDefinition[];

  /**
   * @schema TrainingSpecification#TrainingChannels
   */
  readonly trainingChannels: ChannelSpecification[];

  /**
   * @schema TrainingSpecification#SupportedTuningJobObjectiveMetrics
   */
  readonly supportedTuningJobObjectiveMetrics?: HyperParameterTuningJobObjective[];

}

/**
 * @schema InferenceSpecification
 */
export interface InferenceSpecification {
  /**
   * @schema InferenceSpecification#Containers
   */
  readonly containers: ModelPackageContainerDefinition[];

  /**
   * @schema InferenceSpecification#SupportedTransformInstanceTypes
   */
  readonly supportedTransformInstanceTypes: string[];

  /**
   * @schema InferenceSpecification#SupportedRealtimeInferenceInstanceTypes
   */
  readonly supportedRealtimeInferenceInstanceTypes: string[];

  /**
   * @schema InferenceSpecification#SupportedContentTypes
   */
  readonly supportedContentTypes: string[];

  /**
   * @schema InferenceSpecification#SupportedResponseMIMETypes
   */
  readonly supportedResponseMimeTypes: string[];

}

/**
 * @schema AlgorithmValidationSpecification
 */
export interface AlgorithmValidationSpecification {
  /**
   * @schema AlgorithmValidationSpecification#ValidationRole
   */
  readonly validationRole: string;

  /**
   * @schema AlgorithmValidationSpecification#ValidationProfiles
   */
  readonly validationProfiles: AlgorithmValidationProfile[];

}

/**
 * @schema ResourceSpec
 */
export interface ResourceSpec {
  /**
   * @schema ResourceSpec#SageMakerImageArn
   */
  readonly sageMakerImageArn?: string;

  /**
   * @schema ResourceSpec#SageMakerImageVersionArn
   */
  readonly sageMakerImageVersionArn?: string;

  /**
   * @schema ResourceSpec#InstanceType
   */
  readonly instanceType?: string;

}

/**
 * @schema KernelGatewayImageConfig
 */
export interface KernelGatewayImageConfig {
  /**
   * @schema KernelGatewayImageConfig#KernelSpecs
   */
  readonly kernelSpecs: KernelSpec[];

  /**
   * @schema KernelGatewayImageConfig#FileSystemConfig
   */
  readonly fileSystemConfig?: FileSystemConfig;

}

/**
 * @schema AutoMlChannel
 */
export interface AutoMlChannel {
  /**
   * @schema AutoMlChannel#DataSource
   */
  readonly dataSource: AutoMlDataSource;

  /**
   * @schema AutoMlChannel#CompressionType
   */
  readonly compressionType?: string;

  /**
   * @schema AutoMlChannel#TargetAttributeName
   */
  readonly targetAttributeName: string;

}

/**
 * @schema AutoMlOutputDataConfig
 */
export interface AutoMlOutputDataConfig {
  /**
   * @schema AutoMlOutputDataConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema AutoMlOutputDataConfig#S3OutputPath
   */
  readonly s3OutputPath: string;

}

/**
 * @schema AutoMlJobObjective
 */
export interface AutoMlJobObjective {
  /**
   * @schema AutoMlJobObjective#MetricName
   */
  readonly metricName: string;

}

/**
 * @schema AutoMlJobConfig
 */
export interface AutoMlJobConfig {
  /**
   * @schema AutoMlJobConfig#CompletionCriteria
   */
  readonly completionCriteria?: AutoMlJobCompletionCriteria;

  /**
   * @schema AutoMlJobConfig#SecurityConfig
   */
  readonly securityConfig?: AutoMlSecurityConfig;

}

/**
 * @schema GitConfig
 */
export interface GitConfig {
  /**
   * @schema GitConfig#RepositoryUrl
   */
  readonly repositoryUrl: string;

  /**
   * @schema GitConfig#Branch
   */
  readonly branch?: string;

  /**
   * @schema GitConfig#SecretArn
   */
  readonly secretArn?: string;

}

/**
 * @schema InputConfig
 */
export interface InputConfig {
  /**
   * @schema InputConfig#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema InputConfig#DataInputConfig
   */
  readonly dataInputConfig: string;

  /**
   * @schema InputConfig#Framework
   */
  readonly framework: string;

}

/**
 * @schema OutputConfig
 */
export interface OutputConfig {
  /**
   * @schema OutputConfig#S3OutputLocation
   */
  readonly s3OutputLocation: string;

  /**
   * @schema OutputConfig#TargetDevice
   */
  readonly targetDevice?: string;

  /**
   * @schema OutputConfig#TargetPlatform
   */
  readonly targetPlatform?: TargetPlatform;

  /**
   * @schema OutputConfig#CompilerOptions
   */
  readonly compilerOptions?: string;

}

/**
 * @schema StoppingCondition
 */
export interface StoppingCondition {
  /**
   * @schema StoppingCondition#MaxRuntimeInSeconds
   */
  readonly maxRuntimeInSeconds?: number;

  /**
   * @schema StoppingCondition#MaxWaitTimeInSeconds
   */
  readonly maxWaitTimeInSeconds?: number;

}

/**
 * @schema UserSettings
 */
export interface UserSettings {
  /**
   * @schema UserSettings#ExecutionRole
   */
  readonly executionRole?: string;

  /**
   * @schema UserSettings#SecurityGroups
   */
  readonly securityGroups?: string[];

  /**
   * @schema UserSettings#SharingSettings
   */
  readonly sharingSettings?: SharingSettings;

  /**
   * @schema UserSettings#JupyterServerAppSettings
   */
  readonly jupyterServerAppSettings?: JupyterServerAppSettings;

  /**
   * @schema UserSettings#KernelGatewayAppSettings
   */
  readonly kernelGatewayAppSettings?: KernelGatewayAppSettings;

  /**
   * @schema UserSettings#TensorBoardAppSettings
   */
  readonly tensorBoardAppSettings?: TensorBoardAppSettings;

}

/**
 * @schema ProductionVariant
 */
export interface ProductionVariant {
  /**
   * @schema ProductionVariant#VariantName
   */
  readonly variantName: string;

  /**
   * @schema ProductionVariant#ModelName
   */
  readonly modelName: string;

  /**
   * @schema ProductionVariant#InitialInstanceCount
   */
  readonly initialInstanceCount: number;

  /**
   * @schema ProductionVariant#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema ProductionVariant#InitialVariantWeight
   */
  readonly initialVariantWeight?: number;

  /**
   * @schema ProductionVariant#AcceleratorType
   */
  readonly acceleratorType?: string;

}

/**
 * @schema DataCaptureConfig
 */
export interface DataCaptureConfig {
  /**
   * @schema DataCaptureConfig#EnableCapture
   */
  readonly enableCapture?: boolean;

  /**
   * @schema DataCaptureConfig#InitialSamplingPercentage
   */
  readonly initialSamplingPercentage: number;

  /**
   * @schema DataCaptureConfig#DestinationS3Uri
   */
  readonly destinationS3Uri: string;

  /**
   * @schema DataCaptureConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema DataCaptureConfig#CaptureOptions
   */
  readonly captureOptions: CaptureOption[];

  /**
   * @schema DataCaptureConfig#CaptureContentTypeHeader
   */
  readonly captureContentTypeHeader?: CaptureContentTypeHeader;

}

/**
 * @schema HumanLoopRequestSource
 */
export interface HumanLoopRequestSource {
  /**
   * @schema HumanLoopRequestSource#AwsManagedHumanLoopRequestSource
   */
  readonly awsManagedHumanLoopRequestSource: string;

}

/**
 * @schema HumanLoopActivationConfig
 */
export interface HumanLoopActivationConfig {
  /**
   * @schema HumanLoopActivationConfig#HumanLoopActivationConditionsConfig
   */
  readonly humanLoopActivationConditionsConfig: HumanLoopActivationConditionsConfig;

}

/**
 * @schema HumanLoopConfig
 */
export interface HumanLoopConfig {
  /**
   * @schema HumanLoopConfig#WorkteamArn
   */
  readonly workteamArn: string;

  /**
   * @schema HumanLoopConfig#HumanTaskUiArn
   */
  readonly humanTaskUiArn: string;

  /**
   * @schema HumanLoopConfig#TaskTitle
   */
  readonly taskTitle: string;

  /**
   * @schema HumanLoopConfig#TaskDescription
   */
  readonly taskDescription: string;

  /**
   * @schema HumanLoopConfig#TaskCount
   */
  readonly taskCount: number;

  /**
   * @schema HumanLoopConfig#TaskAvailabilityLifetimeInSeconds
   */
  readonly taskAvailabilityLifetimeInSeconds?: number;

  /**
   * @schema HumanLoopConfig#TaskTimeLimitInSeconds
   */
  readonly taskTimeLimitInSeconds?: number;

  /**
   * @schema HumanLoopConfig#TaskKeywords
   */
  readonly taskKeywords?: string[];

  /**
   * @schema HumanLoopConfig#PublicWorkforceTaskPrice
   */
  readonly publicWorkforceTaskPrice?: PublicWorkforceTaskPrice;

}

/**
 * @schema FlowDefinitionOutputConfig
 */
export interface FlowDefinitionOutputConfig {
  /**
   * @schema FlowDefinitionOutputConfig#S3OutputPath
   */
  readonly s3OutputPath: string;

  /**
   * @schema FlowDefinitionOutputConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema UiTemplate
 */
export interface UiTemplate {
  /**
   * @schema UiTemplate#Content
   */
  readonly content: string;

}

/**
 * @schema HyperParameterTuningJobConfig
 */
export interface HyperParameterTuningJobConfig {
  /**
   * @schema HyperParameterTuningJobConfig#Strategy
   */
  readonly strategy: string;

  /**
   * @schema HyperParameterTuningJobConfig#HyperParameterTuningJobObjective
   */
  readonly hyperParameterTuningJobObjective?: HyperParameterTuningJobObjective;

  /**
   * @schema HyperParameterTuningJobConfig#ResourceLimits
   */
  readonly resourceLimits: ResourceLimits;

  /**
   * @schema HyperParameterTuningJobConfig#ParameterRanges
   */
  readonly parameterRanges?: ParameterRanges;

  /**
   * @schema HyperParameterTuningJobConfig#TrainingJobEarlyStoppingType
   */
  readonly trainingJobEarlyStoppingType?: string;

  /**
   * @schema HyperParameterTuningJobConfig#TuningJobCompletionCriteria
   */
  readonly tuningJobCompletionCriteria?: TuningJobCompletionCriteria;

}

/**
 * @schema HyperParameterTrainingJobDefinition
 */
export interface HyperParameterTrainingJobDefinition {
  /**
   * @schema HyperParameterTrainingJobDefinition#DefinitionName
   */
  readonly definitionName?: string;

  /**
   * @schema HyperParameterTrainingJobDefinition#TuningObjective
   */
  readonly tuningObjective?: HyperParameterTuningJobObjective;

  /**
   * @schema HyperParameterTrainingJobDefinition#HyperParameterRanges
   */
  readonly hyperParameterRanges?: ParameterRanges;

  /**
   * @schema HyperParameterTrainingJobDefinition#StaticHyperParameters
   */
  readonly staticHyperParameters?: { [key: string]: string };

  /**
   * @schema HyperParameterTrainingJobDefinition#AlgorithmSpecification
   */
  readonly algorithmSpecification: HyperParameterAlgorithmSpecification;

  /**
   * @schema HyperParameterTrainingJobDefinition#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema HyperParameterTrainingJobDefinition#InputDataConfig
   */
  readonly inputDataConfig?: Channel[];

  /**
   * @schema HyperParameterTrainingJobDefinition#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema HyperParameterTrainingJobDefinition#OutputDataConfig
   */
  readonly outputDataConfig: OutputDataConfig;

  /**
   * @schema HyperParameterTrainingJobDefinition#ResourceConfig
   */
  readonly resourceConfig: ResourceConfig;

  /**
   * @schema HyperParameterTrainingJobDefinition#StoppingCondition
   */
  readonly stoppingCondition: StoppingCondition;

  /**
   * @schema HyperParameterTrainingJobDefinition#EnableNetworkIsolation
   */
  readonly enableNetworkIsolation?: boolean;

  /**
   * @schema HyperParameterTrainingJobDefinition#EnableInterContainerTrafficEncryption
   */
  readonly enableInterContainerTrafficEncryption?: boolean;

  /**
   * @schema HyperParameterTrainingJobDefinition#EnableManagedSpotTraining
   */
  readonly enableManagedSpotTraining?: boolean;

  /**
   * @schema HyperParameterTrainingJobDefinition#CheckpointConfig
   */
  readonly checkpointConfig?: CheckpointConfig;

}

/**
 * @schema HyperParameterTuningJobWarmStartConfig
 */
export interface HyperParameterTuningJobWarmStartConfig {
  /**
   * @schema HyperParameterTuningJobWarmStartConfig#ParentHyperParameterTuningJobs
   */
  readonly parentHyperParameterTuningJobs: ParentHyperParameterTuningJob[];

  /**
   * @schema HyperParameterTuningJobWarmStartConfig#WarmStartType
   */
  readonly warmStartType: string;

}

/**
 * @schema LabelingJobInputConfig
 */
export interface LabelingJobInputConfig {
  /**
   * @schema LabelingJobInputConfig#DataSource
   */
  readonly dataSource: LabelingJobDataSource;

  /**
   * @schema LabelingJobInputConfig#DataAttributes
   */
  readonly dataAttributes?: LabelingJobDataAttributes;

}

/**
 * @schema LabelingJobOutputConfig
 */
export interface LabelingJobOutputConfig {
  /**
   * @schema LabelingJobOutputConfig#S3OutputPath
   */
  readonly s3OutputPath: string;

  /**
   * @schema LabelingJobOutputConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema LabelingJobOutputConfig#SnsTopicArn
   */
  readonly snsTopicArn?: string;

}

/**
 * @schema LabelingJobStoppingConditions
 */
export interface LabelingJobStoppingConditions {
  /**
   * @schema LabelingJobStoppingConditions#MaxHumanLabeledObjectCount
   */
  readonly maxHumanLabeledObjectCount?: number;

  /**
   * @schema LabelingJobStoppingConditions#MaxPercentageOfInputDatasetLabeled
   */
  readonly maxPercentageOfInputDatasetLabeled?: number;

}

/**
 * @schema LabelingJobAlgorithmsConfig
 */
export interface LabelingJobAlgorithmsConfig {
  /**
   * @schema LabelingJobAlgorithmsConfig#LabelingJobAlgorithmSpecificationArn
   */
  readonly labelingJobAlgorithmSpecificationArn: string;

  /**
   * @schema LabelingJobAlgorithmsConfig#InitialActiveLearningModelArn
   */
  readonly initialActiveLearningModelArn?: string;

  /**
   * @schema LabelingJobAlgorithmsConfig#LabelingJobResourceConfig
   */
  readonly labelingJobResourceConfig?: LabelingJobResourceConfig;

}

/**
 * @schema HumanTaskConfig
 */
export interface HumanTaskConfig {
  /**
   * @schema HumanTaskConfig#WorkteamArn
   */
  readonly workteamArn: string;

  /**
   * @schema HumanTaskConfig#UiConfig
   */
  readonly uiConfig: UiConfig;

  /**
   * @schema HumanTaskConfig#PreHumanTaskLambdaArn
   */
  readonly preHumanTaskLambdaArn: string;

  /**
   * @schema HumanTaskConfig#TaskKeywords
   */
  readonly taskKeywords?: string[];

  /**
   * @schema HumanTaskConfig#TaskTitle
   */
  readonly taskTitle: string;

  /**
   * @schema HumanTaskConfig#TaskDescription
   */
  readonly taskDescription: string;

  /**
   * @schema HumanTaskConfig#NumberOfHumanWorkersPerDataObject
   */
  readonly numberOfHumanWorkersPerDataObject: number;

  /**
   * @schema HumanTaskConfig#TaskTimeLimitInSeconds
   */
  readonly taskTimeLimitInSeconds: number;

  /**
   * @schema HumanTaskConfig#TaskAvailabilityLifetimeInSeconds
   */
  readonly taskAvailabilityLifetimeInSeconds?: number;

  /**
   * @schema HumanTaskConfig#MaxConcurrentTaskCount
   */
  readonly maxConcurrentTaskCount?: number;

  /**
   * @schema HumanTaskConfig#AnnotationConsolidationConfig
   */
  readonly annotationConsolidationConfig: AnnotationConsolidationConfig;

  /**
   * @schema HumanTaskConfig#PublicWorkforceTaskPrice
   */
  readonly publicWorkforceTaskPrice?: PublicWorkforceTaskPrice;

}

/**
 * @schema ContainerDefinition
 */
export interface ContainerDefinition {
  /**
   * @schema ContainerDefinition#ContainerHostname
   */
  readonly containerHostname?: string;

  /**
   * @schema ContainerDefinition#Image
   */
  readonly image?: string;

  /**
   * @schema ContainerDefinition#ImageConfig
   */
  readonly imageConfig?: ImageConfig;

  /**
   * @schema ContainerDefinition#Mode
   */
  readonly mode?: string;

  /**
   * @schema ContainerDefinition#ModelDataUrl
   */
  readonly modelDataUrl?: string;

  /**
   * @schema ContainerDefinition#Environment
   */
  readonly environment?: { [key: string]: string };

  /**
   * @schema ContainerDefinition#ModelPackageName
   */
  readonly modelPackageName?: string;

}

/**
 * @schema VpcConfig
 */
export interface VpcConfig {
  /**
   * @schema VpcConfig#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

  /**
   * @schema VpcConfig#Subnets
   */
  readonly subnets: string[];

}

/**
 * @schema ModelPackageValidationSpecification
 */
export interface ModelPackageValidationSpecification {
  /**
   * @schema ModelPackageValidationSpecification#ValidationRole
   */
  readonly validationRole: string;

  /**
   * @schema ModelPackageValidationSpecification#ValidationProfiles
   */
  readonly validationProfiles: ModelPackageValidationProfile[];

}

/**
 * @schema SourceAlgorithmSpecification
 */
export interface SourceAlgorithmSpecification {
  /**
   * @schema SourceAlgorithmSpecification#SourceAlgorithms
   */
  readonly sourceAlgorithms: SourceAlgorithm[];

}

/**
 * @schema MonitoringScheduleConfig
 */
export interface MonitoringScheduleConfig {
  /**
   * @schema MonitoringScheduleConfig#ScheduleConfig
   */
  readonly scheduleConfig?: ScheduleConfig;

  /**
   * @schema MonitoringScheduleConfig#MonitoringJobDefinition
   */
  readonly monitoringJobDefinition: MonitoringJobDefinition;

}

/**
 * @schema NotebookInstanceLifecycleHook
 */
export interface NotebookInstanceLifecycleHook {
  /**
   * @schema NotebookInstanceLifecycleHook#Content
   */
  readonly content?: string;

}

/**
 * @schema ProcessingInput
 */
export interface ProcessingInput {
  /**
   * @schema ProcessingInput#InputName
   */
  readonly inputName: string;

  /**
   * @schema ProcessingInput#S3Input
   */
  readonly s3Input: ProcessingS3Input;

}

/**
 * @schema ProcessingOutputConfig
 */
export interface ProcessingOutputConfig {
  /**
   * @schema ProcessingOutputConfig#Outputs
   */
  readonly outputs: ProcessingOutput[];

  /**
   * @schema ProcessingOutputConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema ProcessingResources
 */
export interface ProcessingResources {
  /**
   * @schema ProcessingResources#ClusterConfig
   */
  readonly clusterConfig: ProcessingClusterConfig;

}

/**
 * @schema ProcessingStoppingCondition
 */
export interface ProcessingStoppingCondition {
  /**
   * @schema ProcessingStoppingCondition#MaxRuntimeInSeconds
   */
  readonly maxRuntimeInSeconds: number;

}

/**
 * @schema AppSpecification
 */
export interface AppSpecification {
  /**
   * @schema AppSpecification#ImageUri
   */
  readonly imageUri: string;

  /**
   * @schema AppSpecification#ContainerEntrypoint
   */
  readonly containerEntrypoint?: string[];

  /**
   * @schema AppSpecification#ContainerArguments
   */
  readonly containerArguments?: string[];

}

/**
 * @schema NetworkConfig
 */
export interface NetworkConfig {
  /**
   * @schema NetworkConfig#EnableInterContainerTrafficEncryption
   */
  readonly enableInterContainerTrafficEncryption?: boolean;

  /**
   * @schema NetworkConfig#EnableNetworkIsolation
   */
  readonly enableNetworkIsolation?: boolean;

  /**
   * @schema NetworkConfig#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

}

/**
 * @schema ExperimentConfig
 */
export interface ExperimentConfig {
  /**
   * @schema ExperimentConfig#ExperimentName
   */
  readonly experimentName?: string;

  /**
   * @schema ExperimentConfig#TrialName
   */
  readonly trialName?: string;

  /**
   * @schema ExperimentConfig#TrialComponentDisplayName
   */
  readonly trialComponentDisplayName?: string;

}

/**
 * @schema AlgorithmSpecification
 */
export interface AlgorithmSpecification {
  /**
   * @schema AlgorithmSpecification#TrainingImage
   */
  readonly trainingImage?: string;

  /**
   * @schema AlgorithmSpecification#AlgorithmName
   */
  readonly algorithmName?: string;

  /**
   * @schema AlgorithmSpecification#TrainingInputMode
   */
  readonly trainingInputMode: string;

  /**
   * @schema AlgorithmSpecification#MetricDefinitions
   */
  readonly metricDefinitions?: MetricDefinition[];

  /**
   * @schema AlgorithmSpecification#EnableSageMakerMetricsTimeSeries
   */
  readonly enableSageMakerMetricsTimeSeries?: boolean;

}

/**
 * @schema Channel
 */
export interface Channel {
  /**
   * @schema Channel#ChannelName
   */
  readonly channelName: string;

  /**
   * @schema Channel#DataSource
   */
  readonly dataSource: DataSource;

  /**
   * @schema Channel#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema Channel#CompressionType
   */
  readonly compressionType?: string;

  /**
   * @schema Channel#RecordWrapperType
   */
  readonly recordWrapperType?: string;

  /**
   * @schema Channel#InputMode
   */
  readonly inputMode?: string;

  /**
   * @schema Channel#ShuffleConfig
   */
  readonly shuffleConfig?: ShuffleConfig;

}

/**
 * @schema OutputDataConfig
 */
export interface OutputDataConfig {
  /**
   * @schema OutputDataConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

  /**
   * @schema OutputDataConfig#S3OutputPath
   */
  readonly s3OutputPath: string;

}

/**
 * @schema ResourceConfig
 */
export interface ResourceConfig {
  /**
   * @schema ResourceConfig#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema ResourceConfig#InstanceCount
   */
  readonly instanceCount: number;

  /**
   * @schema ResourceConfig#VolumeSizeInGB
   */
  readonly volumeSizeInGb: number;

  /**
   * @schema ResourceConfig#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

}

/**
 * @schema CheckpointConfig
 */
export interface CheckpointConfig {
  /**
   * @schema CheckpointConfig#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema CheckpointConfig#LocalPath
   */
  readonly localPath?: string;

}

/**
 * @schema DebugHookConfig
 */
export interface DebugHookConfig {
  /**
   * @schema DebugHookConfig#LocalPath
   */
  readonly localPath?: string;

  /**
   * @schema DebugHookConfig#S3OutputPath
   */
  readonly s3OutputPath: string;

  /**
   * @schema DebugHookConfig#HookParameters
   */
  readonly hookParameters?: { [key: string]: string };

  /**
   * @schema DebugHookConfig#CollectionConfigurations
   */
  readonly collectionConfigurations?: CollectionConfiguration[];

}

/**
 * @schema DebugRuleConfiguration
 */
export interface DebugRuleConfiguration {
  /**
   * @schema DebugRuleConfiguration#RuleConfigurationName
   */
  readonly ruleConfigurationName: string;

  /**
   * @schema DebugRuleConfiguration#LocalPath
   */
  readonly localPath?: string;

  /**
   * @schema DebugRuleConfiguration#S3OutputPath
   */
  readonly s3OutputPath?: string;

  /**
   * @schema DebugRuleConfiguration#RuleEvaluatorImage
   */
  readonly ruleEvaluatorImage: string;

  /**
   * @schema DebugRuleConfiguration#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema DebugRuleConfiguration#VolumeSizeInGB
   */
  readonly volumeSizeInGb?: number;

  /**
   * @schema DebugRuleConfiguration#RuleParameters
   */
  readonly ruleParameters?: { [key: string]: string };

}

/**
 * @schema TensorBoardOutputConfig
 */
export interface TensorBoardOutputConfig {
  /**
   * @schema TensorBoardOutputConfig#LocalPath
   */
  readonly localPath?: string;

  /**
   * @schema TensorBoardOutputConfig#S3OutputPath
   */
  readonly s3OutputPath: string;

}

/**
 * @schema ModelClientConfig
 */
export interface ModelClientConfig {
  /**
   * @schema ModelClientConfig#InvocationsTimeoutInSeconds
   */
  readonly invocationsTimeoutInSeconds?: number;

  /**
   * @schema ModelClientConfig#InvocationsMaxRetries
   */
  readonly invocationsMaxRetries?: number;

}

/**
 * @schema TransformInput
 */
export interface TransformInput {
  /**
   * @schema TransformInput#DataSource
   */
  readonly dataSource: TransformDataSource;

  /**
   * @schema TransformInput#ContentType
   */
  readonly contentType?: string;

  /**
   * @schema TransformInput#CompressionType
   */
  readonly compressionType?: string;

  /**
   * @schema TransformInput#SplitType
   */
  readonly splitType?: string;

}

/**
 * @schema TransformOutput
 */
export interface TransformOutput {
  /**
   * @schema TransformOutput#S3OutputPath
   */
  readonly s3OutputPath: string;

  /**
   * @schema TransformOutput#Accept
   */
  readonly accept?: string;

  /**
   * @schema TransformOutput#AssembleWith
   */
  readonly assembleWith?: string;

  /**
   * @schema TransformOutput#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema TransformResources
 */
export interface TransformResources {
  /**
   * @schema TransformResources#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema TransformResources#InstanceCount
   */
  readonly instanceCount: number;

  /**
   * @schema TransformResources#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

}

/**
 * @schema DataProcessing
 */
export interface DataProcessing {
  /**
   * @schema DataProcessing#InputFilter
   */
  readonly inputFilter?: string;

  /**
   * @schema DataProcessing#OutputFilter
   */
  readonly outputFilter?: string;

  /**
   * @schema DataProcessing#JoinSource
   */
  readonly joinSource?: string;

}

/**
 * @schema TrialComponentStatus
 */
export interface TrialComponentStatus {
  /**
   * @schema TrialComponentStatus#PrimaryStatus
   */
  readonly primaryStatus?: string;

  /**
   * @schema TrialComponentStatus#Message
   */
  readonly message?: string;

}

/**
 * @schema TrialComponentParameterValue
 */
export interface TrialComponentParameterValue {
  /**
   * @schema TrialComponentParameterValue#StringValue
   */
  readonly stringValue?: string;

  /**
   * @schema TrialComponentParameterValue#NumberValue
   */
  readonly numberValue?: number;

}

/**
 * @schema TrialComponentArtifact
 */
export interface TrialComponentArtifact {
  /**
   * @schema TrialComponentArtifact#MediaType
   */
  readonly mediaType?: string;

  /**
   * @schema TrialComponentArtifact#Value
   */
  readonly value: string;

}

/**
 * @schema CognitoConfig
 */
export interface CognitoConfig {
  /**
   * @schema CognitoConfig#UserPool
   */
  readonly userPool: string;

  /**
   * @schema CognitoConfig#ClientId
   */
  readonly clientId: string;

}

/**
 * @schema OidcConfig
 */
export interface OidcConfig {
  /**
   * @schema OidcConfig#ClientId
   */
  readonly clientId: string;

  /**
   * @schema OidcConfig#ClientSecret
   */
  readonly clientSecret: string;

  /**
   * @schema OidcConfig#Issuer
   */
  readonly issuer: string;

  /**
   * @schema OidcConfig#AuthorizationEndpoint
   */
  readonly authorizationEndpoint: string;

  /**
   * @schema OidcConfig#TokenEndpoint
   */
  readonly tokenEndpoint: string;

  /**
   * @schema OidcConfig#UserInfoEndpoint
   */
  readonly userInfoEndpoint: string;

  /**
   * @schema OidcConfig#LogoutEndpoint
   */
  readonly logoutEndpoint: string;

  /**
   * @schema OidcConfig#JwksUri
   */
  readonly jwksUri: string;

}

/**
 * @schema SourceIpConfig
 */
export interface SourceIpConfig {
  /**
   * @schema SourceIpConfig#Cidrs
   */
  readonly cidrs: string[];

}

/**
 * @schema MemberDefinition
 */
export interface MemberDefinition {
  /**
   * @schema MemberDefinition#CognitoMemberDefinition
   */
  readonly cognitoMemberDefinition?: CognitoMemberDefinition;

  /**
   * @schema MemberDefinition#OidcMemberDefinition
   */
  readonly oidcMemberDefinition?: OidcMemberDefinition;

}

/**
 * @schema NotificationConfiguration
 */
export interface NotificationConfiguration {
  /**
   * @schema NotificationConfiguration#NotificationTopicArn
   */
  readonly notificationTopicArn?: string;

}

/**
 * @schema RetentionPolicy
 */
export interface RetentionPolicy {
  /**
   * @schema RetentionPolicy#HomeEfsFileSystem
   */
  readonly homeEfsFileSystem?: string;

}

/**
 * @schema AlgorithmStatusDetails
 */
export interface AlgorithmStatusDetails {
  /**
   * @schema AlgorithmStatusDetails#ValidationStatuses
   */
  readonly validationStatuses?: AlgorithmStatusItem[];

  /**
   * @schema AlgorithmStatusDetails#ImageScanStatuses
   */
  readonly imageScanStatuses?: AlgorithmStatusItem[];

}

/**
 * @schema AutoMlCandidate
 */
export interface AutoMlCandidate {
  /**
   * @schema AutoMlCandidate#CandidateName
   */
  readonly candidateName: string;

  /**
   * @schema AutoMlCandidate#FinalAutoMLJobObjectiveMetric
   */
  readonly finalAutoMlJobObjectiveMetric?: FinalAutoMlJobObjectiveMetric;

  /**
   * @schema AutoMlCandidate#ObjectiveStatus
   */
  readonly objectiveStatus: string;

  /**
   * @schema AutoMlCandidate#CandidateSteps
   */
  readonly candidateSteps: AutoMlCandidateStep[];

  /**
   * @schema AutoMlCandidate#CandidateStatus
   */
  readonly candidateStatus: string;

  /**
   * @schema AutoMlCandidate#InferenceContainers
   */
  readonly inferenceContainers?: AutoMlContainerDefinition[];

  /**
   * @schema AutoMlCandidate#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema AutoMlCandidate#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema AutoMlCandidate#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema AutoMlCandidate#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema AutoMlJobArtifacts
 */
export interface AutoMlJobArtifacts {
  /**
   * @schema AutoMlJobArtifacts#CandidateDefinitionNotebookLocation
   */
  readonly candidateDefinitionNotebookLocation?: string;

  /**
   * @schema AutoMlJobArtifacts#DataExplorationNotebookLocation
   */
  readonly dataExplorationNotebookLocation?: string;

}

/**
 * @schema ResolvedAttributes
 */
export interface ResolvedAttributes {
  /**
   * @schema ResolvedAttributes#AutoMLJobObjective
   */
  readonly autoMlJobObjective?: AutoMlJobObjective;

  /**
   * @schema ResolvedAttributes#ProblemType
   */
  readonly problemType?: string;

  /**
   * @schema ResolvedAttributes#CompletionCriteria
   */
  readonly completionCriteria?: AutoMlJobCompletionCriteria;

}

/**
 * @schema ModelArtifacts
 */
export interface ModelArtifacts {
  /**
   * @schema ModelArtifacts#S3ModelArtifacts
   */
  readonly s3ModelArtifacts: string;

}

/**
 * @schema ProductionVariantSummary
 */
export interface ProductionVariantSummary {
  /**
   * @schema ProductionVariantSummary#VariantName
   */
  readonly variantName: string;

  /**
   * @schema ProductionVariantSummary#DeployedImages
   */
  readonly deployedImages?: DeployedImage[];

  /**
   * @schema ProductionVariantSummary#CurrentWeight
   */
  readonly currentWeight?: number;

  /**
   * @schema ProductionVariantSummary#DesiredWeight
   */
  readonly desiredWeight?: number;

  /**
   * @schema ProductionVariantSummary#CurrentInstanceCount
   */
  readonly currentInstanceCount?: number;

  /**
   * @schema ProductionVariantSummary#DesiredInstanceCount
   */
  readonly desiredInstanceCount?: number;

}

/**
 * @schema DataCaptureConfigSummary
 */
export interface DataCaptureConfigSummary {
  /**
   * @schema DataCaptureConfigSummary#EnableCapture
   */
  readonly enableCapture: boolean;

  /**
   * @schema DataCaptureConfigSummary#CaptureStatus
   */
  readonly captureStatus: string;

  /**
   * @schema DataCaptureConfigSummary#CurrentSamplingPercentage
   */
  readonly currentSamplingPercentage: number;

  /**
   * @schema DataCaptureConfigSummary#DestinationS3Uri
   */
  readonly destinationS3Uri: string;

  /**
   * @schema DataCaptureConfigSummary#KmsKeyId
   */
  readonly kmsKeyId: string;

}

/**
 * @schema ExperimentSource
 */
export interface ExperimentSource {
  /**
   * @schema ExperimentSource#SourceArn
   */
  readonly sourceArn: string;

  /**
   * @schema ExperimentSource#SourceType
   */
  readonly sourceType?: string;

}

/**
 * @schema UserContext
 */
export interface UserContext {
  /**
   * @schema UserContext#UserProfileArn
   */
  readonly userProfileArn?: string;

  /**
   * @schema UserContext#UserProfileName
   */
  readonly userProfileName?: string;

  /**
   * @schema UserContext#DomainId
   */
  readonly domainId?: string;

}

/**
 * @schema UiTemplateInfo
 */
export interface UiTemplateInfo {
  /**
   * @schema UiTemplateInfo#Url
   */
  readonly url?: string;

  /**
   * @schema UiTemplateInfo#ContentSha256
   */
  readonly contentSha256?: string;

}

/**
 * @schema TrainingJobStatusCounters
 */
export interface TrainingJobStatusCounters {
  /**
   * @schema TrainingJobStatusCounters#Completed
   */
  readonly completed?: number;

  /**
   * @schema TrainingJobStatusCounters#InProgress
   */
  readonly inProgress?: number;

  /**
   * @schema TrainingJobStatusCounters#RetryableError
   */
  readonly retryableError?: number;

  /**
   * @schema TrainingJobStatusCounters#NonRetryableError
   */
  readonly nonRetryableError?: number;

  /**
   * @schema TrainingJobStatusCounters#Stopped
   */
  readonly stopped?: number;

}

/**
 * @schema ObjectiveStatusCounters
 */
export interface ObjectiveStatusCounters {
  /**
   * @schema ObjectiveStatusCounters#Succeeded
   */
  readonly succeeded?: number;

  /**
   * @schema ObjectiveStatusCounters#Pending
   */
  readonly pending?: number;

  /**
   * @schema ObjectiveStatusCounters#Failed
   */
  readonly failed?: number;

}

/**
 * @schema HyperParameterTrainingJobSummary
 */
export interface HyperParameterTrainingJobSummary {
  /**
   * @schema HyperParameterTrainingJobSummary#TrainingJobDefinitionName
   */
  readonly trainingJobDefinitionName?: string;

  /**
   * @schema HyperParameterTrainingJobSummary#TrainingJobName
   */
  readonly trainingJobName: string;

  /**
   * @schema HyperParameterTrainingJobSummary#TrainingJobArn
   */
  readonly trainingJobArn: string;

  /**
   * @schema HyperParameterTrainingJobSummary#TuningJobName
   */
  readonly tuningJobName?: string;

  /**
   * @schema HyperParameterTrainingJobSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema HyperParameterTrainingJobSummary#TrainingStartTime
   */
  readonly trainingStartTime?: string;

  /**
   * @schema HyperParameterTrainingJobSummary#TrainingEndTime
   */
  readonly trainingEndTime?: string;

  /**
   * @schema HyperParameterTrainingJobSummary#TrainingJobStatus
   */
  readonly trainingJobStatus: string;

  /**
   * @schema HyperParameterTrainingJobSummary#TunedHyperParameters
   */
  readonly tunedHyperParameters: { [key: string]: string };

  /**
   * @schema HyperParameterTrainingJobSummary#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema HyperParameterTrainingJobSummary#FinalHyperParameterTuningJobObjectiveMetric
   */
  readonly finalHyperParameterTuningJobObjectiveMetric?: FinalHyperParameterTuningJobObjectiveMetric;

  /**
   * @schema HyperParameterTrainingJobSummary#ObjectiveStatus
   */
  readonly objectiveStatus?: string;

}

/**
 * @schema LabelCounters
 */
export interface LabelCounters {
  /**
   * @schema LabelCounters#TotalLabeled
   */
  readonly totalLabeled?: number;

  /**
   * @schema LabelCounters#HumanLabeled
   */
  readonly humanLabeled?: number;

  /**
   * @schema LabelCounters#MachineLabeled
   */
  readonly machineLabeled?: number;

  /**
   * @schema LabelCounters#FailedNonRetryableError
   */
  readonly failedNonRetryableError?: number;

  /**
   * @schema LabelCounters#Unlabeled
   */
  readonly unlabeled?: number;

}

/**
 * @schema LabelingJobOutput
 */
export interface LabelingJobOutput {
  /**
   * @schema LabelingJobOutput#OutputDatasetS3Uri
   */
  readonly outputDatasetS3Uri: string;

  /**
   * @schema LabelingJobOutput#FinalActiveLearningModelArn
   */
  readonly finalActiveLearningModelArn?: string;

}

/**
 * @schema ModelPackageStatusDetails
 */
export interface ModelPackageStatusDetails {
  /**
   * @schema ModelPackageStatusDetails#ValidationStatuses
   */
  readonly validationStatuses: ModelPackageStatusItem[];

  /**
   * @schema ModelPackageStatusDetails#ImageScanStatuses
   */
  readonly imageScanStatuses?: ModelPackageStatusItem[];

}

/**
 * @schema MonitoringExecutionSummary
 */
export interface MonitoringExecutionSummary {
  /**
   * @schema MonitoringExecutionSummary#MonitoringScheduleName
   */
  readonly monitoringScheduleName: string;

  /**
   * @schema MonitoringExecutionSummary#ScheduledTime
   */
  readonly scheduledTime: string;

  /**
   * @schema MonitoringExecutionSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema MonitoringExecutionSummary#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema MonitoringExecutionSummary#MonitoringExecutionStatus
   */
  readonly monitoringExecutionStatus: string;

  /**
   * @schema MonitoringExecutionSummary#ProcessingJobArn
   */
  readonly processingJobArn?: string;

  /**
   * @schema MonitoringExecutionSummary#EndpointName
   */
  readonly endpointName?: string;

  /**
   * @schema MonitoringExecutionSummary#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema SubscribedWorkteam
 */
export interface SubscribedWorkteam {
  /**
   * @schema SubscribedWorkteam#WorkteamArn
   */
  readonly workteamArn: string;

  /**
   * @schema SubscribedWorkteam#MarketplaceTitle
   */
  readonly marketplaceTitle?: string;

  /**
   * @schema SubscribedWorkteam#SellerName
   */
  readonly sellerName?: string;

  /**
   * @schema SubscribedWorkteam#MarketplaceDescription
   */
  readonly marketplaceDescription?: string;

  /**
   * @schema SubscribedWorkteam#ListingId
   */
  readonly listingId?: string;

}

/**
 * @schema SecondaryStatusTransition
 */
export interface SecondaryStatusTransition {
  /**
   * @schema SecondaryStatusTransition#Status
   */
  readonly status: string;

  /**
   * @schema SecondaryStatusTransition#StartTime
   */
  readonly startTime: string;

  /**
   * @schema SecondaryStatusTransition#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema SecondaryStatusTransition#StatusMessage
   */
  readonly statusMessage?: string;

}

/**
 * @schema MetricData
 */
export interface MetricData {
  /**
   * @schema MetricData#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema MetricData#Value
   */
  readonly value?: number;

  /**
   * @schema MetricData#Timestamp
   */
  readonly timestamp?: string;

}

/**
 * @schema DebugRuleEvaluationStatus
 */
export interface DebugRuleEvaluationStatus {
  /**
   * @schema DebugRuleEvaluationStatus#RuleConfigurationName
   */
  readonly ruleConfigurationName?: string;

  /**
   * @schema DebugRuleEvaluationStatus#RuleEvaluationJobArn
   */
  readonly ruleEvaluationJobArn?: string;

  /**
   * @schema DebugRuleEvaluationStatus#RuleEvaluationStatus
   */
  readonly ruleEvaluationStatus?: string;

  /**
   * @schema DebugRuleEvaluationStatus#StatusDetails
   */
  readonly statusDetails?: string;

  /**
   * @schema DebugRuleEvaluationStatus#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * @schema TrialSource
 */
export interface TrialSource {
  /**
   * @schema TrialSource#SourceArn
   */
  readonly sourceArn: string;

  /**
   * @schema TrialSource#SourceType
   */
  readonly sourceType?: string;

}

/**
 * @schema TrialComponentSource
 */
export interface TrialComponentSource {
  /**
   * @schema TrialComponentSource#SourceArn
   */
  readonly sourceArn: string;

  /**
   * @schema TrialComponentSource#SourceType
   */
  readonly sourceType?: string;

}

/**
 * @schema TrialComponentMetricSummary
 */
export interface TrialComponentMetricSummary {
  /**
   * @schema TrialComponentMetricSummary#MetricName
   */
  readonly metricName?: string;

  /**
   * @schema TrialComponentMetricSummary#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema TrialComponentMetricSummary#TimeStamp
   */
  readonly timeStamp?: string;

  /**
   * @schema TrialComponentMetricSummary#Max
   */
  readonly max?: number;

  /**
   * @schema TrialComponentMetricSummary#Min
   */
  readonly min?: number;

  /**
   * @schema TrialComponentMetricSummary#Last
   */
  readonly last?: number;

  /**
   * @schema TrialComponentMetricSummary#Count
   */
  readonly count?: number;

  /**
   * @schema TrialComponentMetricSummary#Avg
   */
  readonly avg?: number;

  /**
   * @schema TrialComponentMetricSummary#StdDev
   */
  readonly stdDev?: number;

}

/**
 * @schema Workforce
 */
export interface Workforce {
  /**
   * @schema Workforce#WorkforceName
   */
  readonly workforceName: string;

  /**
   * @schema Workforce#WorkforceArn
   */
  readonly workforceArn: string;

  /**
   * @schema Workforce#LastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema Workforce#SourceIpConfig
   */
  readonly sourceIpConfig?: SourceIpConfig;

  /**
   * @schema Workforce#SubDomain
   */
  readonly subDomain?: string;

  /**
   * @schema Workforce#CognitoConfig
   */
  readonly cognitoConfig?: CognitoConfig;

  /**
   * @schema Workforce#OidcConfig
   */
  readonly oidcConfig?: OidcConfigForResponse;

  /**
   * @schema Workforce#CreateDate
   */
  readonly createDate?: string;

}

/**
 * @schema Workteam
 */
export interface Workteam {
  /**
   * @schema Workteam#WorkteamName
   */
  readonly workteamName: string;

  /**
   * @schema Workteam#MemberDefinitions
   */
  readonly memberDefinitions: MemberDefinition[];

  /**
   * @schema Workteam#WorkteamArn
   */
  readonly workteamArn: string;

  /**
   * @schema Workteam#WorkforceArn
   */
  readonly workforceArn?: string;

  /**
   * @schema Workteam#ProductListingIds
   */
  readonly productListingIds?: string[];

  /**
   * @schema Workteam#Description
   */
  readonly description: string;

  /**
   * @schema Workteam#SubDomain
   */
  readonly subDomain?: string;

  /**
   * @schema Workteam#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema Workteam#LastUpdatedDate
   */
  readonly lastUpdatedDate?: string;

  /**
   * @schema Workteam#NotificationConfiguration
   */
  readonly notificationConfiguration?: NotificationConfiguration;

}

/**
 * @schema SuggestionQuery
 */
export interface SuggestionQuery {
  /**
   * @schema SuggestionQuery#PropertyNameQuery
   */
  readonly propertyNameQuery?: PropertyNameQuery;

}

/**
 * @schema PropertyNameSuggestion
 */
export interface PropertyNameSuggestion {
  /**
   * @schema PropertyNameSuggestion#PropertyName
   */
  readonly propertyName?: string;

}

/**
 * @schema AlgorithmSummary
 */
export interface AlgorithmSummary {
  /**
   * @schema AlgorithmSummary#AlgorithmName
   */
  readonly algorithmName: string;

  /**
   * @schema AlgorithmSummary#AlgorithmArn
   */
  readonly algorithmArn: string;

  /**
   * @schema AlgorithmSummary#AlgorithmDescription
   */
  readonly algorithmDescription?: string;

  /**
   * @schema AlgorithmSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema AlgorithmSummary#AlgorithmStatus
   */
  readonly algorithmStatus: string;

}

/**
 * @schema AppImageConfigDetails
 */
export interface AppImageConfigDetails {
  /**
   * @schema AppImageConfigDetails#AppImageConfigArn
   */
  readonly appImageConfigArn?: string;

  /**
   * @schema AppImageConfigDetails#AppImageConfigName
   */
  readonly appImageConfigName?: string;

  /**
   * @schema AppImageConfigDetails#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema AppImageConfigDetails#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema AppImageConfigDetails#KernelGatewayImageConfig
   */
  readonly kernelGatewayImageConfig?: KernelGatewayImageConfig;

}

/**
 * @schema AppDetails
 */
export interface AppDetails {
  /**
   * @schema AppDetails#DomainId
   */
  readonly domainId?: string;

  /**
   * @schema AppDetails#UserProfileName
   */
  readonly userProfileName?: string;

  /**
   * @schema AppDetails#AppType
   */
  readonly appType?: string;

  /**
   * @schema AppDetails#AppName
   */
  readonly appName?: string;

  /**
   * @schema AppDetails#Status
   */
  readonly status?: string;

  /**
   * @schema AppDetails#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema AutoMlJobSummary
 */
export interface AutoMlJobSummary {
  /**
   * @schema AutoMlJobSummary#AutoMLJobName
   */
  readonly autoMlJobName: string;

  /**
   * @schema AutoMlJobSummary#AutoMLJobArn
   */
  readonly autoMlJobArn: string;

  /**
   * @schema AutoMlJobSummary#AutoMLJobStatus
   */
  readonly autoMlJobStatus: string;

  /**
   * @schema AutoMlJobSummary#AutoMLJobSecondaryStatus
   */
  readonly autoMlJobSecondaryStatus: string;

  /**
   * @schema AutoMlJobSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema AutoMlJobSummary#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema AutoMlJobSummary#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema AutoMlJobSummary#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema CodeRepositorySummary
 */
export interface CodeRepositorySummary {
  /**
   * @schema CodeRepositorySummary#CodeRepositoryName
   */
  readonly codeRepositoryName: string;

  /**
   * @schema CodeRepositorySummary#CodeRepositoryArn
   */
  readonly codeRepositoryArn: string;

  /**
   * @schema CodeRepositorySummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema CodeRepositorySummary#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema CodeRepositorySummary#GitConfig
   */
  readonly gitConfig?: GitConfig;

}

/**
 * @schema CompilationJobSummary
 */
export interface CompilationJobSummary {
  /**
   * @schema CompilationJobSummary#CompilationJobName
   */
  readonly compilationJobName: string;

  /**
   * @schema CompilationJobSummary#CompilationJobArn
   */
  readonly compilationJobArn: string;

  /**
   * @schema CompilationJobSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema CompilationJobSummary#CompilationStartTime
   */
  readonly compilationStartTime?: string;

  /**
   * @schema CompilationJobSummary#CompilationEndTime
   */
  readonly compilationEndTime?: string;

  /**
   * @schema CompilationJobSummary#CompilationTargetDevice
   */
  readonly compilationTargetDevice?: string;

  /**
   * @schema CompilationJobSummary#CompilationTargetPlatformOs
   */
  readonly compilationTargetPlatformOs?: string;

  /**
   * @schema CompilationJobSummary#CompilationTargetPlatformArch
   */
  readonly compilationTargetPlatformArch?: string;

  /**
   * @schema CompilationJobSummary#CompilationTargetPlatformAccelerator
   */
  readonly compilationTargetPlatformAccelerator?: string;

  /**
   * @schema CompilationJobSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema CompilationJobSummary#CompilationJobStatus
   */
  readonly compilationJobStatus: string;

}

/**
 * @schema DomainDetails
 */
export interface DomainDetails {
  /**
   * @schema DomainDetails#DomainArn
   */
  readonly domainArn?: string;

  /**
   * @schema DomainDetails#DomainId
   */
  readonly domainId?: string;

  /**
   * @schema DomainDetails#DomainName
   */
  readonly domainName?: string;

  /**
   * @schema DomainDetails#Status
   */
  readonly status?: string;

  /**
   * @schema DomainDetails#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DomainDetails#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema DomainDetails#Url
   */
  readonly url?: string;

}

/**
 * @schema EndpointConfigSummary
 */
export interface EndpointConfigSummary {
  /**
   * @schema EndpointConfigSummary#EndpointConfigName
   */
  readonly endpointConfigName: string;

  /**
   * @schema EndpointConfigSummary#EndpointConfigArn
   */
  readonly endpointConfigArn: string;

  /**
   * @schema EndpointConfigSummary#CreationTime
   */
  readonly creationTime: string;

}

/**
 * @schema EndpointSummary
 */
export interface EndpointSummary {
  /**
   * @schema EndpointSummary#EndpointName
   */
  readonly endpointName: string;

  /**
   * @schema EndpointSummary#EndpointArn
   */
  readonly endpointArn: string;

  /**
   * @schema EndpointSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema EndpointSummary#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema EndpointSummary#EndpointStatus
   */
  readonly endpointStatus: string;

}

/**
 * @schema ExperimentSummary
 */
export interface ExperimentSummary {
  /**
   * @schema ExperimentSummary#ExperimentArn
   */
  readonly experimentArn?: string;

  /**
   * @schema ExperimentSummary#ExperimentName
   */
  readonly experimentName?: string;

  /**
   * @schema ExperimentSummary#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema ExperimentSummary#ExperimentSource
   */
  readonly experimentSource?: ExperimentSource;

  /**
   * @schema ExperimentSummary#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ExperimentSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * @schema FlowDefinitionSummary
 */
export interface FlowDefinitionSummary {
  /**
   * @schema FlowDefinitionSummary#FlowDefinitionName
   */
  readonly flowDefinitionName: string;

  /**
   * @schema FlowDefinitionSummary#FlowDefinitionArn
   */
  readonly flowDefinitionArn: string;

  /**
   * @schema FlowDefinitionSummary#FlowDefinitionStatus
   */
  readonly flowDefinitionStatus: string;

  /**
   * @schema FlowDefinitionSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema FlowDefinitionSummary#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema HumanTaskUiSummary
 */
export interface HumanTaskUiSummary {
  /**
   * @schema HumanTaskUiSummary#HumanTaskUiName
   */
  readonly humanTaskUiName: string;

  /**
   * @schema HumanTaskUiSummary#HumanTaskUiArn
   */
  readonly humanTaskUiArn: string;

  /**
   * @schema HumanTaskUiSummary#CreationTime
   */
  readonly creationTime: string;

}

/**
 * @schema HyperParameterTuningJobSummary
 */
export interface HyperParameterTuningJobSummary {
  /**
   * @schema HyperParameterTuningJobSummary#HyperParameterTuningJobName
   */
  readonly hyperParameterTuningJobName: string;

  /**
   * @schema HyperParameterTuningJobSummary#HyperParameterTuningJobArn
   */
  readonly hyperParameterTuningJobArn: string;

  /**
   * @schema HyperParameterTuningJobSummary#HyperParameterTuningJobStatus
   */
  readonly hyperParameterTuningJobStatus: string;

  /**
   * @schema HyperParameterTuningJobSummary#Strategy
   */
  readonly strategy: string;

  /**
   * @schema HyperParameterTuningJobSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema HyperParameterTuningJobSummary#HyperParameterTuningEndTime
   */
  readonly hyperParameterTuningEndTime?: string;

  /**
   * @schema HyperParameterTuningJobSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema HyperParameterTuningJobSummary#TrainingJobStatusCounters
   */
  readonly trainingJobStatusCounters: TrainingJobStatusCounters;

  /**
   * @schema HyperParameterTuningJobSummary#ObjectiveStatusCounters
   */
  readonly objectiveStatusCounters: ObjectiveStatusCounters;

  /**
   * @schema HyperParameterTuningJobSummary#ResourceLimits
   */
  readonly resourceLimits?: ResourceLimits;

}

/**
 * @schema ImageVersion
 */
export interface ImageVersion {
  /**
   * @schema ImageVersion#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema ImageVersion#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema ImageVersion#ImageArn
   */
  readonly imageArn: string;

  /**
   * @schema ImageVersion#ImageVersionArn
   */
  readonly imageVersionArn: string;

  /**
   * @schema ImageVersion#ImageVersionStatus
   */
  readonly imageVersionStatus: string;

  /**
   * @schema ImageVersion#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema ImageVersion#Version
   */
  readonly version: number;

}

/**
 * @schema Image
 */
export interface Image {
  /**
   * @schema Image#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema Image#Description
   */
  readonly description?: string;

  /**
   * @schema Image#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema Image#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema Image#ImageArn
   */
  readonly imageArn: string;

  /**
   * @schema Image#ImageName
   */
  readonly imageName: string;

  /**
   * @schema Image#ImageStatus
   */
  readonly imageStatus: string;

  /**
   * @schema Image#LastModifiedTime
   */
  readonly lastModifiedTime: string;

}

/**
 * @schema LabelingJobSummary
 */
export interface LabelingJobSummary {
  /**
   * @schema LabelingJobSummary#LabelingJobName
   */
  readonly labelingJobName: string;

  /**
   * @schema LabelingJobSummary#LabelingJobArn
   */
  readonly labelingJobArn: string;

  /**
   * @schema LabelingJobSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema LabelingJobSummary#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema LabelingJobSummary#LabelingJobStatus
   */
  readonly labelingJobStatus: string;

  /**
   * @schema LabelingJobSummary#LabelCounters
   */
  readonly labelCounters: LabelCounters;

  /**
   * @schema LabelingJobSummary#WorkteamArn
   */
  readonly workteamArn: string;

  /**
   * @schema LabelingJobSummary#PreHumanTaskLambdaArn
   */
  readonly preHumanTaskLambdaArn: string;

  /**
   * @schema LabelingJobSummary#AnnotationConsolidationLambdaArn
   */
  readonly annotationConsolidationLambdaArn?: string;

  /**
   * @schema LabelingJobSummary#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema LabelingJobSummary#LabelingJobOutput
   */
  readonly labelingJobOutput?: LabelingJobOutput;

  /**
   * @schema LabelingJobSummary#InputConfig
   */
  readonly inputConfig?: LabelingJobInputConfig;

}

/**
 * @schema LabelingJobForWorkteamSummary
 */
export interface LabelingJobForWorkteamSummary {
  /**
   * @schema LabelingJobForWorkteamSummary#LabelingJobName
   */
  readonly labelingJobName?: string;

  /**
   * @schema LabelingJobForWorkteamSummary#JobReferenceCode
   */
  readonly jobReferenceCode: string;

  /**
   * @schema LabelingJobForWorkteamSummary#WorkRequesterAccountId
   */
  readonly workRequesterAccountId: string;

  /**
   * @schema LabelingJobForWorkteamSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema LabelingJobForWorkteamSummary#LabelCounters
   */
  readonly labelCounters?: LabelCountersForWorkteam;

  /**
   * @schema LabelingJobForWorkteamSummary#NumberOfHumanWorkersPerDataObject
   */
  readonly numberOfHumanWorkersPerDataObject?: number;

}

/**
 * @schema ModelPackageSummary
 */
export interface ModelPackageSummary {
  /**
   * @schema ModelPackageSummary#ModelPackageName
   */
  readonly modelPackageName: string;

  /**
   * @schema ModelPackageSummary#ModelPackageArn
   */
  readonly modelPackageArn: string;

  /**
   * @schema ModelPackageSummary#ModelPackageDescription
   */
  readonly modelPackageDescription?: string;

  /**
   * @schema ModelPackageSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema ModelPackageSummary#ModelPackageStatus
   */
  readonly modelPackageStatus: string;

}

/**
 * @schema ModelSummary
 */
export interface ModelSummary {
  /**
   * @schema ModelSummary#ModelName
   */
  readonly modelName: string;

  /**
   * @schema ModelSummary#ModelArn
   */
  readonly modelArn: string;

  /**
   * @schema ModelSummary#CreationTime
   */
  readonly creationTime: string;

}

/**
 * @schema MonitoringScheduleSummary
 */
export interface MonitoringScheduleSummary {
  /**
   * @schema MonitoringScheduleSummary#MonitoringScheduleName
   */
  readonly monitoringScheduleName: string;

  /**
   * @schema MonitoringScheduleSummary#MonitoringScheduleArn
   */
  readonly monitoringScheduleArn: string;

  /**
   * @schema MonitoringScheduleSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema MonitoringScheduleSummary#LastModifiedTime
   */
  readonly lastModifiedTime: string;

  /**
   * @schema MonitoringScheduleSummary#MonitoringScheduleStatus
   */
  readonly monitoringScheduleStatus: string;

  /**
   * @schema MonitoringScheduleSummary#EndpointName
   */
  readonly endpointName?: string;

}

/**
 * @schema NotebookInstanceLifecycleConfigSummary
 */
export interface NotebookInstanceLifecycleConfigSummary {
  /**
   * @schema NotebookInstanceLifecycleConfigSummary#NotebookInstanceLifecycleConfigName
   */
  readonly notebookInstanceLifecycleConfigName: string;

  /**
   * @schema NotebookInstanceLifecycleConfigSummary#NotebookInstanceLifecycleConfigArn
   */
  readonly notebookInstanceLifecycleConfigArn: string;

  /**
   * @schema NotebookInstanceLifecycleConfigSummary#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema NotebookInstanceLifecycleConfigSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * @schema NotebookInstanceSummary
 */
export interface NotebookInstanceSummary {
  /**
   * @schema NotebookInstanceSummary#NotebookInstanceName
   */
  readonly notebookInstanceName: string;

  /**
   * @schema NotebookInstanceSummary#NotebookInstanceArn
   */
  readonly notebookInstanceArn: string;

  /**
   * @schema NotebookInstanceSummary#NotebookInstanceStatus
   */
  readonly notebookInstanceStatus?: string;

  /**
   * @schema NotebookInstanceSummary#Url
   */
  readonly url?: string;

  /**
   * @schema NotebookInstanceSummary#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema NotebookInstanceSummary#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema NotebookInstanceSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema NotebookInstanceSummary#NotebookInstanceLifecycleConfigName
   */
  readonly notebookInstanceLifecycleConfigName?: string;

  /**
   * @schema NotebookInstanceSummary#DefaultCodeRepository
   */
  readonly defaultCodeRepository?: string;

  /**
   * @schema NotebookInstanceSummary#AdditionalCodeRepositories
   */
  readonly additionalCodeRepositories?: string[];

}

/**
 * @schema ProcessingJobSummary
 */
export interface ProcessingJobSummary {
  /**
   * @schema ProcessingJobSummary#ProcessingJobName
   */
  readonly processingJobName: string;

  /**
   * @schema ProcessingJobSummary#ProcessingJobArn
   */
  readonly processingJobArn: string;

  /**
   * @schema ProcessingJobSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema ProcessingJobSummary#ProcessingEndTime
   */
  readonly processingEndTime?: string;

  /**
   * @schema ProcessingJobSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema ProcessingJobSummary#ProcessingJobStatus
   */
  readonly processingJobStatus: string;

  /**
   * @schema ProcessingJobSummary#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema ProcessingJobSummary#ExitMessage
   */
  readonly exitMessage?: string;

}

/**
 * @schema TrainingJobSummary
 */
export interface TrainingJobSummary {
  /**
   * @schema TrainingJobSummary#TrainingJobName
   */
  readonly trainingJobName: string;

  /**
   * @schema TrainingJobSummary#TrainingJobArn
   */
  readonly trainingJobArn: string;

  /**
   * @schema TrainingJobSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema TrainingJobSummary#TrainingEndTime
   */
  readonly trainingEndTime?: string;

  /**
   * @schema TrainingJobSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema TrainingJobSummary#TrainingJobStatus
   */
  readonly trainingJobStatus: string;

}

/**
 * @schema TransformJobSummary
 */
export interface TransformJobSummary {
  /**
   * @schema TransformJobSummary#TransformJobName
   */
  readonly transformJobName: string;

  /**
   * @schema TransformJobSummary#TransformJobArn
   */
  readonly transformJobArn: string;

  /**
   * @schema TransformJobSummary#CreationTime
   */
  readonly creationTime: string;

  /**
   * @schema TransformJobSummary#TransformEndTime
   */
  readonly transformEndTime?: string;

  /**
   * @schema TransformJobSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema TransformJobSummary#TransformJobStatus
   */
  readonly transformJobStatus: string;

  /**
   * @schema TransformJobSummary#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema TrialComponentSummary
 */
export interface TrialComponentSummary {
  /**
   * @schema TrialComponentSummary#TrialComponentName
   */
  readonly trialComponentName?: string;

  /**
   * @schema TrialComponentSummary#TrialComponentArn
   */
  readonly trialComponentArn?: string;

  /**
   * @schema TrialComponentSummary#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema TrialComponentSummary#TrialComponentSource
   */
  readonly trialComponentSource?: TrialComponentSource;

  /**
   * @schema TrialComponentSummary#Status
   */
  readonly status?: TrialComponentStatus;

  /**
   * @schema TrialComponentSummary#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema TrialComponentSummary#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema TrialComponentSummary#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema TrialComponentSummary#CreatedBy
   */
  readonly createdBy?: UserContext;

  /**
   * @schema TrialComponentSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema TrialComponentSummary#LastModifiedBy
   */
  readonly lastModifiedBy?: UserContext;

}

/**
 * @schema TrialSummary
 */
export interface TrialSummary {
  /**
   * @schema TrialSummary#TrialArn
   */
  readonly trialArn?: string;

  /**
   * @schema TrialSummary#TrialName
   */
  readonly trialName?: string;

  /**
   * @schema TrialSummary#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema TrialSummary#TrialSource
   */
  readonly trialSource?: TrialSource;

  /**
   * @schema TrialSummary#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema TrialSummary#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * @schema UserProfileDetails
 */
export interface UserProfileDetails {
  /**
   * @schema UserProfileDetails#DomainId
   */
  readonly domainId?: string;

  /**
   * @schema UserProfileDetails#UserProfileName
   */
  readonly userProfileName?: string;

  /**
   * @schema UserProfileDetails#Status
   */
  readonly status?: string;

  /**
   * @schema UserProfileDetails#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema UserProfileDetails#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

}

/**
 * @schema RenderableTask
 */
export interface RenderableTask {
  /**
   * @schema RenderableTask#Input
   */
  readonly input: string;

}

/**
 * @schema RenderingError
 */
export interface RenderingError {
  /**
   * @schema RenderingError#Code
   */
  readonly code: string;

  /**
   * @schema RenderingError#Message
   */
  readonly message: string;

}

/**
 * @schema SearchExpression
 */
export interface SearchExpression {
  /**
   * @schema SearchExpression#Filters
   */
  readonly filters?: Filter[];

  /**
   * @schema SearchExpression#NestedFilters
   */
  readonly nestedFilters?: NestedFilters[];

  /**
   * @schema SearchExpression#SubExpressions
   */
  readonly subExpressions?: SearchExpression[];

  /**
   * @schema SearchExpression#Operator
   */
  readonly operator?: string;

}

/**
 * @schema SearchRecord
 */
export interface SearchRecord {
  /**
   * @schema SearchRecord#TrainingJob
   */
  readonly trainingJob?: TrainingJob;

  /**
   * @schema SearchRecord#Experiment
   */
  readonly experiment?: Experiment;

  /**
   * @schema SearchRecord#Trial
   */
  readonly trial?: Trial;

  /**
   * @schema SearchRecord#TrialComponent
   */
  readonly trialComponent?: TrialComponent;

}

/**
 * @schema GitConfigForUpdate
 */
export interface GitConfigForUpdate {
  /**
   * @schema GitConfigForUpdate#SecretArn
   */
  readonly secretArn?: string;

}

/**
 * @schema VariantProperty
 */
export interface VariantProperty {
  /**
   * @schema VariantProperty#VariantPropertyType
   */
  readonly variantPropertyType: string;

}

/**
 * @schema DesiredWeightAndCapacity
 */
export interface DesiredWeightAndCapacity {
  /**
   * @schema DesiredWeightAndCapacity#VariantName
   */
  readonly variantName: string;

  /**
   * @schema DesiredWeightAndCapacity#DesiredWeight
   */
  readonly desiredWeight?: number;

  /**
   * @schema DesiredWeightAndCapacity#DesiredInstanceCount
   */
  readonly desiredInstanceCount?: number;

}

/**
 * @schema HyperParameterSpecification
 */
export interface HyperParameterSpecification {
  /**
   * @schema HyperParameterSpecification#Name
   */
  readonly name: string;

  /**
   * @schema HyperParameterSpecification#Description
   */
  readonly description?: string;

  /**
   * @schema HyperParameterSpecification#Type
   */
  readonly type: string;

  /**
   * @schema HyperParameterSpecification#Range
   */
  readonly range?: ParameterRange;

  /**
   * @schema HyperParameterSpecification#IsTunable
   */
  readonly isTunable?: boolean;

  /**
   * @schema HyperParameterSpecification#IsRequired
   */
  readonly isRequired?: boolean;

  /**
   * @schema HyperParameterSpecification#DefaultValue
   */
  readonly defaultValue?: string;

}

/**
 * @schema MetricDefinition
 */
export interface MetricDefinition {
  /**
   * @schema MetricDefinition#Name
   */
  readonly name: string;

  /**
   * @schema MetricDefinition#Regex
   */
  readonly regex: string;

}

/**
 * @schema ChannelSpecification
 */
export interface ChannelSpecification {
  /**
   * @schema ChannelSpecification#Name
   */
  readonly name: string;

  /**
   * @schema ChannelSpecification#Description
   */
  readonly description?: string;

  /**
   * @schema ChannelSpecification#IsRequired
   */
  readonly isRequired?: boolean;

  /**
   * @schema ChannelSpecification#SupportedContentTypes
   */
  readonly supportedContentTypes: string[];

  /**
   * @schema ChannelSpecification#SupportedCompressionTypes
   */
  readonly supportedCompressionTypes?: string[];

  /**
   * @schema ChannelSpecification#SupportedInputModes
   */
  readonly supportedInputModes: string[];

}

/**
 * @schema HyperParameterTuningJobObjective
 */
export interface HyperParameterTuningJobObjective {
  /**
   * @schema HyperParameterTuningJobObjective#Type
   */
  readonly type: string;

  /**
   * @schema HyperParameterTuningJobObjective#MetricName
   */
  readonly metricName: string;

}

/**
 * @schema ModelPackageContainerDefinition
 */
export interface ModelPackageContainerDefinition {
  /**
   * @schema ModelPackageContainerDefinition#ContainerHostname
   */
  readonly containerHostname?: string;

  /**
   * @schema ModelPackageContainerDefinition#Image
   */
  readonly image: string;

  /**
   * @schema ModelPackageContainerDefinition#ImageDigest
   */
  readonly imageDigest?: string;

  /**
   * @schema ModelPackageContainerDefinition#ModelDataUrl
   */
  readonly modelDataUrl?: string;

  /**
   * @schema ModelPackageContainerDefinition#ProductId
   */
  readonly productId?: string;

}

/**
 * @schema AlgorithmValidationProfile
 */
export interface AlgorithmValidationProfile {
  /**
   * @schema AlgorithmValidationProfile#ProfileName
   */
  readonly profileName: string;

  /**
   * @schema AlgorithmValidationProfile#TrainingJobDefinition
   */
  readonly trainingJobDefinition: TrainingJobDefinition;

  /**
   * @schema AlgorithmValidationProfile#TransformJobDefinition
   */
  readonly transformJobDefinition?: TransformJobDefinition;

}

/**
 * @schema KernelSpec
 */
export interface KernelSpec {
  /**
   * @schema KernelSpec#Name
   */
  readonly name: string;

  /**
   * @schema KernelSpec#DisplayName
   */
  readonly displayName?: string;

}

/**
 * @schema FileSystemConfig
 */
export interface FileSystemConfig {
  /**
   * @schema FileSystemConfig#MountPath
   */
  readonly mountPath?: string;

  /**
   * @schema FileSystemConfig#DefaultUid
   */
  readonly defaultUid?: number;

  /**
   * @schema FileSystemConfig#DefaultGid
   */
  readonly defaultGid?: number;

}

/**
 * @schema AutoMlDataSource
 */
export interface AutoMlDataSource {
  /**
   * @schema AutoMlDataSource#S3DataSource
   */
  readonly s3DataSource: AutoMls3DataSource;

}

/**
 * @schema AutoMlJobCompletionCriteria
 */
export interface AutoMlJobCompletionCriteria {
  /**
   * @schema AutoMlJobCompletionCriteria#MaxCandidates
   */
  readonly maxCandidates?: number;

  /**
   * @schema AutoMlJobCompletionCriteria#MaxRuntimePerTrainingJobInSeconds
   */
  readonly maxRuntimePerTrainingJobInSeconds?: number;

  /**
   * @schema AutoMlJobCompletionCriteria#MaxAutoMLJobRuntimeInSeconds
   */
  readonly maxAutoMlJobRuntimeInSeconds?: number;

}

/**
 * @schema AutoMlSecurityConfig
 */
export interface AutoMlSecurityConfig {
  /**
   * @schema AutoMlSecurityConfig#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema AutoMlSecurityConfig#EnableInterContainerTrafficEncryption
   */
  readonly enableInterContainerTrafficEncryption?: boolean;

  /**
   * @schema AutoMlSecurityConfig#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

}

/**
 * @schema TargetPlatform
 */
export interface TargetPlatform {
  /**
   * @schema TargetPlatform#Os
   */
  readonly os: string;

  /**
   * @schema TargetPlatform#Arch
   */
  readonly arch: string;

  /**
   * @schema TargetPlatform#Accelerator
   */
  readonly accelerator?: string;

}

/**
 * @schema SharingSettings
 */
export interface SharingSettings {
  /**
   * @schema SharingSettings#NotebookOutputOption
   */
  readonly notebookOutputOption?: string;

  /**
   * @schema SharingSettings#S3OutputPath
   */
  readonly s3OutputPath?: string;

  /**
   * @schema SharingSettings#S3KmsKeyId
   */
  readonly s3KmsKeyId?: string;

}

/**
 * @schema JupyterServerAppSettings
 */
export interface JupyterServerAppSettings {
  /**
   * @schema JupyterServerAppSettings#DefaultResourceSpec
   */
  readonly defaultResourceSpec?: ResourceSpec;

}

/**
 * @schema KernelGatewayAppSettings
 */
export interface KernelGatewayAppSettings {
  /**
   * @schema KernelGatewayAppSettings#DefaultResourceSpec
   */
  readonly defaultResourceSpec?: ResourceSpec;

  /**
   * @schema KernelGatewayAppSettings#CustomImages
   */
  readonly customImages?: CustomImage[];

}

/**
 * @schema TensorBoardAppSettings
 */
export interface TensorBoardAppSettings {
  /**
   * @schema TensorBoardAppSettings#DefaultResourceSpec
   */
  readonly defaultResourceSpec?: ResourceSpec;

}

/**
 * @schema CaptureOption
 */
export interface CaptureOption {
  /**
   * @schema CaptureOption#CaptureMode
   */
  readonly captureMode: string;

}

/**
 * @schema CaptureContentTypeHeader
 */
export interface CaptureContentTypeHeader {
  /**
   * @schema CaptureContentTypeHeader#CsvContentTypes
   */
  readonly csvContentTypes?: string[];

  /**
   * @schema CaptureContentTypeHeader#JsonContentTypes
   */
  readonly jsonContentTypes?: string[];

}

/**
 * @schema HumanLoopActivationConditionsConfig
 */
export interface HumanLoopActivationConditionsConfig {
  /**
   * @schema HumanLoopActivationConditionsConfig#HumanLoopActivationConditions
   */
  readonly humanLoopActivationConditions: string;

}

/**
 * @schema PublicWorkforceTaskPrice
 */
export interface PublicWorkforceTaskPrice {
  /**
   * @schema PublicWorkforceTaskPrice#AmountInUsd
   */
  readonly amountInUsd?: Usd;

}

/**
 * @schema ResourceLimits
 */
export interface ResourceLimits {
  /**
   * @schema ResourceLimits#MaxNumberOfTrainingJobs
   */
  readonly maxNumberOfTrainingJobs: number;

  /**
   * @schema ResourceLimits#MaxParallelTrainingJobs
   */
  readonly maxParallelTrainingJobs: number;

}

/**
 * @schema ParameterRanges
 */
export interface ParameterRanges {
  /**
   * @schema ParameterRanges#IntegerParameterRanges
   */
  readonly integerParameterRanges?: IntegerParameterRange[];

  /**
   * @schema ParameterRanges#ContinuousParameterRanges
   */
  readonly continuousParameterRanges?: ContinuousParameterRange[];

  /**
   * @schema ParameterRanges#CategoricalParameterRanges
   */
  readonly categoricalParameterRanges?: CategoricalParameterRange[];

}

/**
 * @schema TuningJobCompletionCriteria
 */
export interface TuningJobCompletionCriteria {
  /**
   * @schema TuningJobCompletionCriteria#TargetObjectiveMetricValue
   */
  readonly targetObjectiveMetricValue: number;

}

/**
 * @schema HyperParameterAlgorithmSpecification
 */
export interface HyperParameterAlgorithmSpecification {
  /**
   * @schema HyperParameterAlgorithmSpecification#TrainingImage
   */
  readonly trainingImage?: string;

  /**
   * @schema HyperParameterAlgorithmSpecification#TrainingInputMode
   */
  readonly trainingInputMode: string;

  /**
   * @schema HyperParameterAlgorithmSpecification#AlgorithmName
   */
  readonly algorithmName?: string;

  /**
   * @schema HyperParameterAlgorithmSpecification#MetricDefinitions
   */
  readonly metricDefinitions?: MetricDefinition[];

}

/**
 * @schema ParentHyperParameterTuningJob
 */
export interface ParentHyperParameterTuningJob {
  /**
   * @schema ParentHyperParameterTuningJob#HyperParameterTuningJobName
   */
  readonly hyperParameterTuningJobName?: string;

}

/**
 * @schema LabelingJobDataSource
 */
export interface LabelingJobDataSource {
  /**
   * @schema LabelingJobDataSource#S3DataSource
   */
  readonly s3DataSource?: LabelingJobS3DataSource;

  /**
   * @schema LabelingJobDataSource#SnsDataSource
   */
  readonly snsDataSource?: LabelingJobSnsDataSource;

}

/**
 * @schema LabelingJobDataAttributes
 */
export interface LabelingJobDataAttributes {
  /**
   * @schema LabelingJobDataAttributes#ContentClassifiers
   */
  readonly contentClassifiers?: string[];

}

/**
 * @schema LabelingJobResourceConfig
 */
export interface LabelingJobResourceConfig {
  /**
   * @schema LabelingJobResourceConfig#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

}

/**
 * @schema UiConfig
 */
export interface UiConfig {
  /**
   * @schema UiConfig#UiTemplateS3Uri
   */
  readonly uiTemplateS3Uri?: string;

  /**
   * @schema UiConfig#HumanTaskUiArn
   */
  readonly humanTaskUiArn?: string;

}

/**
 * @schema AnnotationConsolidationConfig
 */
export interface AnnotationConsolidationConfig {
  /**
   * @schema AnnotationConsolidationConfig#AnnotationConsolidationLambdaArn
   */
  readonly annotationConsolidationLambdaArn: string;

}

/**
 * @schema ImageConfig
 */
export interface ImageConfig {
  /**
   * @schema ImageConfig#RepositoryAccessMode
   */
  readonly repositoryAccessMode: string;

}

/**
 * @schema ModelPackageValidationProfile
 */
export interface ModelPackageValidationProfile {
  /**
   * @schema ModelPackageValidationProfile#ProfileName
   */
  readonly profileName: string;

  /**
   * @schema ModelPackageValidationProfile#TransformJobDefinition
   */
  readonly transformJobDefinition: TransformJobDefinition;

}

/**
 * @schema SourceAlgorithm
 */
export interface SourceAlgorithm {
  /**
   * @schema SourceAlgorithm#ModelDataUrl
   */
  readonly modelDataUrl?: string;

  /**
   * @schema SourceAlgorithm#AlgorithmName
   */
  readonly algorithmName: string;

}

/**
 * @schema ScheduleConfig
 */
export interface ScheduleConfig {
  /**
   * @schema ScheduleConfig#ScheduleExpression
   */
  readonly scheduleExpression: string;

}

/**
 * @schema MonitoringJobDefinition
 */
export interface MonitoringJobDefinition {
  /**
   * @schema MonitoringJobDefinition#BaselineConfig
   */
  readonly baselineConfig?: MonitoringBaselineConfig;

  /**
   * @schema MonitoringJobDefinition#MonitoringInputs
   */
  readonly monitoringInputs: MonitoringInput[];

  /**
   * @schema MonitoringJobDefinition#MonitoringOutputConfig
   */
  readonly monitoringOutputConfig: MonitoringOutputConfig;

  /**
   * @schema MonitoringJobDefinition#MonitoringResources
   */
  readonly monitoringResources: MonitoringResources;

  /**
   * @schema MonitoringJobDefinition#MonitoringAppSpecification
   */
  readonly monitoringAppSpecification: MonitoringAppSpecification;

  /**
   * @schema MonitoringJobDefinition#StoppingCondition
   */
  readonly stoppingCondition?: MonitoringStoppingCondition;

  /**
   * @schema MonitoringJobDefinition#Environment
   */
  readonly environment?: { [key: string]: string };

  /**
   * @schema MonitoringJobDefinition#NetworkConfig
   */
  readonly networkConfig?: NetworkConfig;

  /**
   * @schema MonitoringJobDefinition#RoleArn
   */
  readonly roleArn: string;

}

/**
 * @schema ProcessingS3Input
 */
export interface ProcessingS3Input {
  /**
   * @schema ProcessingS3Input#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema ProcessingS3Input#LocalPath
   */
  readonly localPath: string;

  /**
   * @schema ProcessingS3Input#S3DataType
   */
  readonly s3DataType: string;

  /**
   * @schema ProcessingS3Input#S3InputMode
   */
  readonly s3InputMode: string;

  /**
   * @schema ProcessingS3Input#S3DataDistributionType
   */
  readonly s3DataDistributionType?: string;

  /**
   * @schema ProcessingS3Input#S3CompressionType
   */
  readonly s3CompressionType?: string;

}

/**
 * @schema ProcessingOutput
 */
export interface ProcessingOutput {
  /**
   * @schema ProcessingOutput#OutputName
   */
  readonly outputName: string;

  /**
   * @schema ProcessingOutput#S3Output
   */
  readonly s3Output: ProcessingS3Output;

}

/**
 * @schema ProcessingClusterConfig
 */
export interface ProcessingClusterConfig {
  /**
   * @schema ProcessingClusterConfig#InstanceCount
   */
  readonly instanceCount: number;

  /**
   * @schema ProcessingClusterConfig#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema ProcessingClusterConfig#VolumeSizeInGB
   */
  readonly volumeSizeInGb: number;

  /**
   * @schema ProcessingClusterConfig#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

}

/**
 * @schema DataSource
 */
export interface DataSource {
  /**
   * @schema DataSource#S3DataSource
   */
  readonly s3DataSource?: S3DataSource;

  /**
   * @schema DataSource#FileSystemDataSource
   */
  readonly fileSystemDataSource?: FileSystemDataSource;

}

/**
 * @schema ShuffleConfig
 */
export interface ShuffleConfig {
  /**
   * @schema ShuffleConfig#Seed
   */
  readonly seed: number;

}

/**
 * @schema CollectionConfiguration
 */
export interface CollectionConfiguration {
  /**
   * @schema CollectionConfiguration#CollectionName
   */
  readonly collectionName?: string;

  /**
   * @schema CollectionConfiguration#CollectionParameters
   */
  readonly collectionParameters?: { [key: string]: string };

}

/**
 * @schema TransformDataSource
 */
export interface TransformDataSource {
  /**
   * @schema TransformDataSource#S3DataSource
   */
  readonly s3DataSource: TransformS3DataSource;

}

/**
 * @schema CognitoMemberDefinition
 */
export interface CognitoMemberDefinition {
  /**
   * @schema CognitoMemberDefinition#UserPool
   */
  readonly userPool: string;

  /**
   * @schema CognitoMemberDefinition#UserGroup
   */
  readonly userGroup: string;

  /**
   * @schema CognitoMemberDefinition#ClientId
   */
  readonly clientId: string;

}

/**
 * @schema OidcMemberDefinition
 */
export interface OidcMemberDefinition {
  /**
   * @schema OidcMemberDefinition#Groups
   */
  readonly groups: string[];

}

/**
 * @schema AlgorithmStatusItem
 */
export interface AlgorithmStatusItem {
  /**
   * @schema AlgorithmStatusItem#Name
   */
  readonly name: string;

  /**
   * @schema AlgorithmStatusItem#Status
   */
  readonly status: string;

  /**
   * @schema AlgorithmStatusItem#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema FinalAutoMlJobObjectiveMetric
 */
export interface FinalAutoMlJobObjectiveMetric {
  /**
   * @schema FinalAutoMlJobObjectiveMetric#Type
   */
  readonly type?: string;

  /**
   * @schema FinalAutoMlJobObjectiveMetric#MetricName
   */
  readonly metricName: string;

  /**
   * @schema FinalAutoMlJobObjectiveMetric#Value
   */
  readonly value: number;

}

/**
 * @schema AutoMlCandidateStep
 */
export interface AutoMlCandidateStep {
  /**
   * @schema AutoMlCandidateStep#CandidateStepType
   */
  readonly candidateStepType: string;

  /**
   * @schema AutoMlCandidateStep#CandidateStepArn
   */
  readonly candidateStepArn: string;

  /**
   * @schema AutoMlCandidateStep#CandidateStepName
   */
  readonly candidateStepName: string;

}

/**
 * @schema AutoMlContainerDefinition
 */
export interface AutoMlContainerDefinition {
  /**
   * @schema AutoMlContainerDefinition#Image
   */
  readonly image: string;

  /**
   * @schema AutoMlContainerDefinition#ModelDataUrl
   */
  readonly modelDataUrl: string;

  /**
   * @schema AutoMlContainerDefinition#Environment
   */
  readonly environment?: { [key: string]: string };

}

/**
 * @schema DeployedImage
 */
export interface DeployedImage {
  /**
   * @schema DeployedImage#SpecifiedImage
   */
  readonly specifiedImage?: string;

  /**
   * @schema DeployedImage#ResolvedImage
   */
  readonly resolvedImage?: string;

  /**
   * @schema DeployedImage#ResolutionTime
   */
  readonly resolutionTime?: string;

}

/**
 * @schema FinalHyperParameterTuningJobObjectiveMetric
 */
export interface FinalHyperParameterTuningJobObjectiveMetric {
  /**
   * @schema FinalHyperParameterTuningJobObjectiveMetric#Type
   */
  readonly type?: string;

  /**
   * @schema FinalHyperParameterTuningJobObjectiveMetric#MetricName
   */
  readonly metricName: string;

  /**
   * @schema FinalHyperParameterTuningJobObjectiveMetric#Value
   */
  readonly value: number;

}

/**
 * @schema ModelPackageStatusItem
 */
export interface ModelPackageStatusItem {
  /**
   * @schema ModelPackageStatusItem#Name
   */
  readonly name: string;

  /**
   * @schema ModelPackageStatusItem#Status
   */
  readonly status: string;

  /**
   * @schema ModelPackageStatusItem#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema OidcConfigForResponse
 */
export interface OidcConfigForResponse {
  /**
   * @schema OidcConfigForResponse#ClientId
   */
  readonly clientId?: string;

  /**
   * @schema OidcConfigForResponse#Issuer
   */
  readonly issuer?: string;

  /**
   * @schema OidcConfigForResponse#AuthorizationEndpoint
   */
  readonly authorizationEndpoint?: string;

  /**
   * @schema OidcConfigForResponse#TokenEndpoint
   */
  readonly tokenEndpoint?: string;

  /**
   * @schema OidcConfigForResponse#UserInfoEndpoint
   */
  readonly userInfoEndpoint?: string;

  /**
   * @schema OidcConfigForResponse#LogoutEndpoint
   */
  readonly logoutEndpoint?: string;

  /**
   * @schema OidcConfigForResponse#JwksUri
   */
  readonly jwksUri?: string;

}

/**
 * @schema PropertyNameQuery
 */
export interface PropertyNameQuery {
  /**
   * @schema PropertyNameQuery#PropertyNameHint
   */
  readonly propertyNameHint: string;

}

/**
 * @schema LabelCountersForWorkteam
 */
export interface LabelCountersForWorkteam {
  /**
   * @schema LabelCountersForWorkteam#HumanLabeled
   */
  readonly humanLabeled?: number;

  /**
   * @schema LabelCountersForWorkteam#PendingHuman
   */
  readonly pendingHuman?: number;

  /**
   * @schema LabelCountersForWorkteam#Total
   */
  readonly total?: number;

}

/**
 * @schema Filter
 */
export interface Filter {
  /**
   * @schema Filter#Name
   */
  readonly name: string;

  /**
   * @schema Filter#Operator
   */
  readonly operator?: string;

  /**
   * @schema Filter#Value
   */
  readonly value?: string;

}

/**
 * @schema NestedFilters
 */
export interface NestedFilters {
  /**
   * @schema NestedFilters#NestedPropertyName
   */
  readonly nestedPropertyName: string;

  /**
   * @schema NestedFilters#Filters
   */
  readonly filters: Filter[];

}

/**
 * @schema TrainingJob
 */
export interface TrainingJob {
  /**
   * @schema TrainingJob#TrainingJobName
   */
  readonly trainingJobName?: string;

  /**
   * @schema TrainingJob#TrainingJobArn
   */
  readonly trainingJobArn?: string;

  /**
   * @schema TrainingJob#TuningJobArn
   */
  readonly tuningJobArn?: string;

  /**
   * @schema TrainingJob#LabelingJobArn
   */
  readonly labelingJobArn?: string;

  /**
   * @schema TrainingJob#AutoMLJobArn
   */
  readonly autoMlJobArn?: string;

  /**
   * @schema TrainingJob#ModelArtifacts
   */
  readonly modelArtifacts?: ModelArtifacts;

  /**
   * @schema TrainingJob#TrainingJobStatus
   */
  readonly trainingJobStatus?: string;

  /**
   * @schema TrainingJob#SecondaryStatus
   */
  readonly secondaryStatus?: string;

  /**
   * @schema TrainingJob#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema TrainingJob#HyperParameters
   */
  readonly hyperParameters?: { [key: string]: string };

  /**
   * @schema TrainingJob#AlgorithmSpecification
   */
  readonly algorithmSpecification?: AlgorithmSpecification;

  /**
   * @schema TrainingJob#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema TrainingJob#InputDataConfig
   */
  readonly inputDataConfig?: Channel[];

  /**
   * @schema TrainingJob#OutputDataConfig
   */
  readonly outputDataConfig?: OutputDataConfig;

  /**
   * @schema TrainingJob#ResourceConfig
   */
  readonly resourceConfig?: ResourceConfig;

  /**
   * @schema TrainingJob#VpcConfig
   */
  readonly vpcConfig?: VpcConfig;

  /**
   * @schema TrainingJob#StoppingCondition
   */
  readonly stoppingCondition?: StoppingCondition;

  /**
   * @schema TrainingJob#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema TrainingJob#TrainingStartTime
   */
  readonly trainingStartTime?: string;

  /**
   * @schema TrainingJob#TrainingEndTime
   */
  readonly trainingEndTime?: string;

  /**
   * @schema TrainingJob#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema TrainingJob#SecondaryStatusTransitions
   */
  readonly secondaryStatusTransitions?: SecondaryStatusTransition[];

  /**
   * @schema TrainingJob#FinalMetricDataList
   */
  readonly finalMetricDataList?: MetricData[];

  /**
   * @schema TrainingJob#EnableNetworkIsolation
   */
  readonly enableNetworkIsolation?: boolean;

  /**
   * @schema TrainingJob#EnableInterContainerTrafficEncryption
   */
  readonly enableInterContainerTrafficEncryption?: boolean;

  /**
   * @schema TrainingJob#EnableManagedSpotTraining
   */
  readonly enableManagedSpotTraining?: boolean;

  /**
   * @schema TrainingJob#CheckpointConfig
   */
  readonly checkpointConfig?: CheckpointConfig;

  /**
   * @schema TrainingJob#TrainingTimeInSeconds
   */
  readonly trainingTimeInSeconds?: number;

  /**
   * @schema TrainingJob#BillableTimeInSeconds
   */
  readonly billableTimeInSeconds?: number;

  /**
   * @schema TrainingJob#DebugHookConfig
   */
  readonly debugHookConfig?: DebugHookConfig;

  /**
   * @schema TrainingJob#ExperimentConfig
   */
  readonly experimentConfig?: ExperimentConfig;

  /**
   * @schema TrainingJob#DebugRuleConfigurations
   */
  readonly debugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * @schema TrainingJob#TensorBoardOutputConfig
   */
  readonly tensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * @schema TrainingJob#DebugRuleEvaluationStatuses
   */
  readonly debugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[];

  /**
   * @schema TrainingJob#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema Experiment
 */
export interface Experiment {
  /**
   * @schema Experiment#ExperimentName
   */
  readonly experimentName?: string;

  /**
   * @schema Experiment#ExperimentArn
   */
  readonly experimentArn?: string;

  /**
   * @schema Experiment#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema Experiment#Source
   */
  readonly source?: ExperimentSource;

  /**
   * @schema Experiment#Description
   */
  readonly description?: string;

  /**
   * @schema Experiment#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Experiment#CreatedBy
   */
  readonly createdBy?: UserContext;

  /**
   * @schema Experiment#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema Experiment#LastModifiedBy
   */
  readonly lastModifiedBy?: UserContext;

  /**
   * @schema Experiment#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema Trial
 */
export interface Trial {
  /**
   * @schema Trial#TrialName
   */
  readonly trialName?: string;

  /**
   * @schema Trial#TrialArn
   */
  readonly trialArn?: string;

  /**
   * @schema Trial#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema Trial#ExperimentName
   */
  readonly experimentName?: string;

  /**
   * @schema Trial#Source
   */
  readonly source?: TrialSource;

  /**
   * @schema Trial#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Trial#CreatedBy
   */
  readonly createdBy?: UserContext;

  /**
   * @schema Trial#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema Trial#LastModifiedBy
   */
  readonly lastModifiedBy?: UserContext;

  /**
   * @schema Trial#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema Trial#TrialComponentSummaries
   */
  readonly trialComponentSummaries?: TrialComponentSimpleSummary[];

}

/**
 * @schema TrialComponent
 */
export interface TrialComponent {
  /**
   * @schema TrialComponent#TrialComponentName
   */
  readonly trialComponentName?: string;

  /**
   * @schema TrialComponent#DisplayName
   */
  readonly displayName?: string;

  /**
   * @schema TrialComponent#TrialComponentArn
   */
  readonly trialComponentArn?: string;

  /**
   * @schema TrialComponent#Source
   */
  readonly source?: TrialComponentSource;

  /**
   * @schema TrialComponent#Status
   */
  readonly status?: TrialComponentStatus;

  /**
   * @schema TrialComponent#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema TrialComponent#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema TrialComponent#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema TrialComponent#CreatedBy
   */
  readonly createdBy?: UserContext;

  /**
   * @schema TrialComponent#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema TrialComponent#LastModifiedBy
   */
  readonly lastModifiedBy?: UserContext;

  /**
   * @schema TrialComponent#Parameters
   */
  readonly parameters?: { [key: string]: TrialComponentParameterValue };

  /**
   * @schema TrialComponent#InputArtifacts
   */
  readonly inputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * @schema TrialComponent#OutputArtifacts
   */
  readonly outputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * @schema TrialComponent#Metrics
   */
  readonly metrics?: TrialComponentMetricSummary[];

  /**
   * @schema TrialComponent#SourceDetail
   */
  readonly sourceDetail?: TrialComponentSourceDetail;

  /**
   * @schema TrialComponent#Tags
   */
  readonly tags?: Tag[];

  /**
   * @schema TrialComponent#Parents
   */
  readonly parents?: Parent[];

}

/**
 * @schema ParameterRange
 */
export interface ParameterRange {
  /**
   * @schema ParameterRange#IntegerParameterRangeSpecification
   */
  readonly integerParameterRangeSpecification?: IntegerParameterRangeSpecification;

  /**
   * @schema ParameterRange#ContinuousParameterRangeSpecification
   */
  readonly continuousParameterRangeSpecification?: ContinuousParameterRangeSpecification;

  /**
   * @schema ParameterRange#CategoricalParameterRangeSpecification
   */
  readonly categoricalParameterRangeSpecification?: CategoricalParameterRangeSpecification;

}

/**
 * @schema TrainingJobDefinition
 */
export interface TrainingJobDefinition {
  /**
   * @schema TrainingJobDefinition#TrainingInputMode
   */
  readonly trainingInputMode: string;

  /**
   * @schema TrainingJobDefinition#HyperParameters
   */
  readonly hyperParameters?: { [key: string]: string };

  /**
   * @schema TrainingJobDefinition#InputDataConfig
   */
  readonly inputDataConfig: Channel[];

  /**
   * @schema TrainingJobDefinition#OutputDataConfig
   */
  readonly outputDataConfig: OutputDataConfig;

  /**
   * @schema TrainingJobDefinition#ResourceConfig
   */
  readonly resourceConfig: ResourceConfig;

  /**
   * @schema TrainingJobDefinition#StoppingCondition
   */
  readonly stoppingCondition: StoppingCondition;

}

/**
 * @schema TransformJobDefinition
 */
export interface TransformJobDefinition {
  /**
   * @schema TransformJobDefinition#MaxConcurrentTransforms
   */
  readonly maxConcurrentTransforms?: number;

  /**
   * @schema TransformJobDefinition#MaxPayloadInMB
   */
  readonly maxPayloadInMb?: number;

  /**
   * @schema TransformJobDefinition#BatchStrategy
   */
  readonly batchStrategy?: string;

  /**
   * @schema TransformJobDefinition#Environment
   */
  readonly environment?: { [key: string]: string };

  /**
   * @schema TransformJobDefinition#TransformInput
   */
  readonly transformInput: TransformInput;

  /**
   * @schema TransformJobDefinition#TransformOutput
   */
  readonly transformOutput: TransformOutput;

  /**
   * @schema TransformJobDefinition#TransformResources
   */
  readonly transformResources: TransformResources;

}

/**
 * @schema AutoMls3DataSource
 */
export interface AutoMls3DataSource {
  /**
   * @schema AutoMls3DataSource#S3DataType
   */
  readonly s3DataType: string;

  /**
   * @schema AutoMls3DataSource#S3Uri
   */
  readonly s3Uri: string;

}

/**
 * @schema CustomImage
 */
export interface CustomImage {
  /**
   * @schema CustomImage#ImageName
   */
  readonly imageName: string;

  /**
   * @schema CustomImage#ImageVersionNumber
   */
  readonly imageVersionNumber?: number;

  /**
   * @schema CustomImage#AppImageConfigName
   */
  readonly appImageConfigName: string;

}

/**
 * @schema Usd
 */
export interface Usd {
  /**
   * @schema Usd#Dollars
   */
  readonly dollars?: number;

  /**
   * @schema Usd#Cents
   */
  readonly cents?: number;

  /**
   * @schema Usd#TenthFractionsOfACent
   */
  readonly tenthFractionsOfACent?: number;

}

/**
 * @schema IntegerParameterRange
 */
export interface IntegerParameterRange {
  /**
   * @schema IntegerParameterRange#Name
   */
  readonly name: string;

  /**
   * @schema IntegerParameterRange#MinValue
   */
  readonly minValue: string;

  /**
   * @schema IntegerParameterRange#MaxValue
   */
  readonly maxValue: string;

  /**
   * @schema IntegerParameterRange#ScalingType
   */
  readonly scalingType?: string;

}

/**
 * @schema ContinuousParameterRange
 */
export interface ContinuousParameterRange {
  /**
   * @schema ContinuousParameterRange#Name
   */
  readonly name: string;

  /**
   * @schema ContinuousParameterRange#MinValue
   */
  readonly minValue: string;

  /**
   * @schema ContinuousParameterRange#MaxValue
   */
  readonly maxValue: string;

  /**
   * @schema ContinuousParameterRange#ScalingType
   */
  readonly scalingType?: string;

}

/**
 * @schema CategoricalParameterRange
 */
export interface CategoricalParameterRange {
  /**
   * @schema CategoricalParameterRange#Name
   */
  readonly name: string;

  /**
   * @schema CategoricalParameterRange#Values
   */
  readonly values: string[];

}

/**
 * @schema LabelingJobS3DataSource
 */
export interface LabelingJobS3DataSource {
  /**
   * @schema LabelingJobS3DataSource#ManifestS3Uri
   */
  readonly manifestS3Uri: string;

}

/**
 * @schema LabelingJobSnsDataSource
 */
export interface LabelingJobSnsDataSource {
  /**
   * @schema LabelingJobSnsDataSource#SnsTopicArn
   */
  readonly snsTopicArn: string;

}

/**
 * @schema MonitoringBaselineConfig
 */
export interface MonitoringBaselineConfig {
  /**
   * @schema MonitoringBaselineConfig#ConstraintsResource
   */
  readonly constraintsResource?: MonitoringConstraintsResource;

  /**
   * @schema MonitoringBaselineConfig#StatisticsResource
   */
  readonly statisticsResource?: MonitoringStatisticsResource;

}

/**
 * @schema MonitoringInput
 */
export interface MonitoringInput {
  /**
   * @schema MonitoringInput#EndpointInput
   */
  readonly endpointInput: EndpointInput;

}

/**
 * @schema MonitoringOutputConfig
 */
export interface MonitoringOutputConfig {
  /**
   * @schema MonitoringOutputConfig#MonitoringOutputs
   */
  readonly monitoringOutputs: MonitoringOutput[];

  /**
   * @schema MonitoringOutputConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema MonitoringResources
 */
export interface MonitoringResources {
  /**
   * @schema MonitoringResources#ClusterConfig
   */
  readonly clusterConfig: MonitoringClusterConfig;

}

/**
 * @schema MonitoringAppSpecification
 */
export interface MonitoringAppSpecification {
  /**
   * @schema MonitoringAppSpecification#ImageUri
   */
  readonly imageUri: string;

  /**
   * @schema MonitoringAppSpecification#ContainerEntrypoint
   */
  readonly containerEntrypoint?: string[];

  /**
   * @schema MonitoringAppSpecification#ContainerArguments
   */
  readonly containerArguments?: string[];

  /**
   * @schema MonitoringAppSpecification#RecordPreprocessorSourceUri
   */
  readonly recordPreprocessorSourceUri?: string;

  /**
   * @schema MonitoringAppSpecification#PostAnalyticsProcessorSourceUri
   */
  readonly postAnalyticsProcessorSourceUri?: string;

}

/**
 * @schema MonitoringStoppingCondition
 */
export interface MonitoringStoppingCondition {
  /**
   * @schema MonitoringStoppingCondition#MaxRuntimeInSeconds
   */
  readonly maxRuntimeInSeconds: number;

}

/**
 * @schema ProcessingS3Output
 */
export interface ProcessingS3Output {
  /**
   * @schema ProcessingS3Output#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema ProcessingS3Output#LocalPath
   */
  readonly localPath: string;

  /**
   * @schema ProcessingS3Output#S3UploadMode
   */
  readonly s3UploadMode: string;

}

/**
 * @schema S3DataSource
 */
export interface S3DataSource {
  /**
   * @schema S3DataSource#S3DataType
   */
  readonly s3DataType: string;

  /**
   * @schema S3DataSource#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema S3DataSource#S3DataDistributionType
   */
  readonly s3DataDistributionType?: string;

  /**
   * @schema S3DataSource#AttributeNames
   */
  readonly attributeNames?: string[];

}

/**
 * @schema FileSystemDataSource
 */
export interface FileSystemDataSource {
  /**
   * @schema FileSystemDataSource#FileSystemId
   */
  readonly fileSystemId: string;

  /**
   * @schema FileSystemDataSource#FileSystemAccessMode
   */
  readonly fileSystemAccessMode: string;

  /**
   * @schema FileSystemDataSource#FileSystemType
   */
  readonly fileSystemType: string;

  /**
   * @schema FileSystemDataSource#DirectoryPath
   */
  readonly directoryPath: string;

}

/**
 * @schema TransformS3DataSource
 */
export interface TransformS3DataSource {
  /**
   * @schema TransformS3DataSource#S3DataType
   */
  readonly s3DataType: string;

  /**
   * @schema TransformS3DataSource#S3Uri
   */
  readonly s3Uri: string;

}

/**
 * @schema TrialComponentSimpleSummary
 */
export interface TrialComponentSimpleSummary {
  /**
   * @schema TrialComponentSimpleSummary#TrialComponentName
   */
  readonly trialComponentName?: string;

  /**
   * @schema TrialComponentSimpleSummary#TrialComponentArn
   */
  readonly trialComponentArn?: string;

  /**
   * @schema TrialComponentSimpleSummary#TrialComponentSource
   */
  readonly trialComponentSource?: TrialComponentSource;

  /**
   * @schema TrialComponentSimpleSummary#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema TrialComponentSimpleSummary#CreatedBy
   */
  readonly createdBy?: UserContext;

}

/**
 * @schema TrialComponentSourceDetail
 */
export interface TrialComponentSourceDetail {
  /**
   * @schema TrialComponentSourceDetail#SourceArn
   */
  readonly sourceArn?: string;

  /**
   * @schema TrialComponentSourceDetail#TrainingJob
   */
  readonly trainingJob?: TrainingJob;

  /**
   * @schema TrialComponentSourceDetail#ProcessingJob
   */
  readonly processingJob?: ProcessingJob;

  /**
   * @schema TrialComponentSourceDetail#TransformJob
   */
  readonly transformJob?: TransformJob;

}

/**
 * @schema Parent
 */
export interface Parent {
  /**
   * @schema Parent#TrialName
   */
  readonly trialName?: string;

  /**
   * @schema Parent#ExperimentName
   */
  readonly experimentName?: string;

}

/**
 * @schema IntegerParameterRangeSpecification
 */
export interface IntegerParameterRangeSpecification {
  /**
   * @schema IntegerParameterRangeSpecification#MinValue
   */
  readonly minValue: string;

  /**
   * @schema IntegerParameterRangeSpecification#MaxValue
   */
  readonly maxValue: string;

}

/**
 * @schema ContinuousParameterRangeSpecification
 */
export interface ContinuousParameterRangeSpecification {
  /**
   * @schema ContinuousParameterRangeSpecification#MinValue
   */
  readonly minValue: string;

  /**
   * @schema ContinuousParameterRangeSpecification#MaxValue
   */
  readonly maxValue: string;

}

/**
 * @schema CategoricalParameterRangeSpecification
 */
export interface CategoricalParameterRangeSpecification {
  /**
   * @schema CategoricalParameterRangeSpecification#Values
   */
  readonly values: string[];

}

/**
 * @schema MonitoringConstraintsResource
 */
export interface MonitoringConstraintsResource {
  /**
   * @schema MonitoringConstraintsResource#S3Uri
   */
  readonly s3Uri?: string;

}

/**
 * @schema MonitoringStatisticsResource
 */
export interface MonitoringStatisticsResource {
  /**
   * @schema MonitoringStatisticsResource#S3Uri
   */
  readonly s3Uri?: string;

}

/**
 * @schema EndpointInput
 */
export interface EndpointInput {
  /**
   * @schema EndpointInput#EndpointName
   */
  readonly endpointName: string;

  /**
   * @schema EndpointInput#LocalPath
   */
  readonly localPath: string;

  /**
   * @schema EndpointInput#S3InputMode
   */
  readonly s3InputMode?: string;

  /**
   * @schema EndpointInput#S3DataDistributionType
   */
  readonly s3DataDistributionType?: string;

}

/**
 * @schema MonitoringOutput
 */
export interface MonitoringOutput {
  /**
   * @schema MonitoringOutput#S3Output
   */
  readonly s3Output: MonitoringS3Output;

}

/**
 * @schema MonitoringClusterConfig
 */
export interface MonitoringClusterConfig {
  /**
   * @schema MonitoringClusterConfig#InstanceCount
   */
  readonly instanceCount: number;

  /**
   * @schema MonitoringClusterConfig#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema MonitoringClusterConfig#VolumeSizeInGB
   */
  readonly volumeSizeInGb: number;

  /**
   * @schema MonitoringClusterConfig#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

}

/**
 * @schema ProcessingJob
 */
export interface ProcessingJob {
  /**
   * @schema ProcessingJob#ProcessingInputs
   */
  readonly processingInputs?: ProcessingInput[];

  /**
   * @schema ProcessingJob#ProcessingOutputConfig
   */
  readonly processingOutputConfig?: ProcessingOutputConfig;

  /**
   * @schema ProcessingJob#ProcessingJobName
   */
  readonly processingJobName?: string;

  /**
   * @schema ProcessingJob#ProcessingResources
   */
  readonly processingResources?: ProcessingResources;

  /**
   * @schema ProcessingJob#StoppingCondition
   */
  readonly stoppingCondition?: ProcessingStoppingCondition;

  /**
   * @schema ProcessingJob#AppSpecification
   */
  readonly appSpecification?: AppSpecification;

  /**
   * @schema ProcessingJob#Environment
   */
  readonly environment?: { [key: string]: string };

  /**
   * @schema ProcessingJob#NetworkConfig
   */
  readonly networkConfig?: NetworkConfig;

  /**
   * @schema ProcessingJob#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema ProcessingJob#ExperimentConfig
   */
  readonly experimentConfig?: ExperimentConfig;

  /**
   * @schema ProcessingJob#ProcessingJobArn
   */
  readonly processingJobArn?: string;

  /**
   * @schema ProcessingJob#ProcessingJobStatus
   */
  readonly processingJobStatus?: string;

  /**
   * @schema ProcessingJob#ExitMessage
   */
  readonly exitMessage?: string;

  /**
   * @schema ProcessingJob#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema ProcessingJob#ProcessingEndTime
   */
  readonly processingEndTime?: string;

  /**
   * @schema ProcessingJob#ProcessingStartTime
   */
  readonly processingStartTime?: string;

  /**
   * @schema ProcessingJob#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema ProcessingJob#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ProcessingJob#MonitoringScheduleArn
   */
  readonly monitoringScheduleArn?: string;

  /**
   * @schema ProcessingJob#AutoMLJobArn
   */
  readonly autoMlJobArn?: string;

  /**
   * @schema ProcessingJob#TrainingJobArn
   */
  readonly trainingJobArn?: string;

  /**
   * @schema ProcessingJob#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema TransformJob
 */
export interface TransformJob {
  /**
   * @schema TransformJob#TransformJobName
   */
  readonly transformJobName?: string;

  /**
   * @schema TransformJob#TransformJobArn
   */
  readonly transformJobArn?: string;

  /**
   * @schema TransformJob#TransformJobStatus
   */
  readonly transformJobStatus?: string;

  /**
   * @schema TransformJob#FailureReason
   */
  readonly failureReason?: string;

  /**
   * @schema TransformJob#ModelName
   */
  readonly modelName?: string;

  /**
   * @schema TransformJob#MaxConcurrentTransforms
   */
  readonly maxConcurrentTransforms?: number;

  /**
   * @schema TransformJob#ModelClientConfig
   */
  readonly modelClientConfig?: ModelClientConfig;

  /**
   * @schema TransformJob#MaxPayloadInMB
   */
  readonly maxPayloadInMb?: number;

  /**
   * @schema TransformJob#BatchStrategy
   */
  readonly batchStrategy?: string;

  /**
   * @schema TransformJob#Environment
   */
  readonly environment?: { [key: string]: string };

  /**
   * @schema TransformJob#TransformInput
   */
  readonly transformInput?: TransformInput;

  /**
   * @schema TransformJob#TransformOutput
   */
  readonly transformOutput?: TransformOutput;

  /**
   * @schema TransformJob#TransformResources
   */
  readonly transformResources?: TransformResources;

  /**
   * @schema TransformJob#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema TransformJob#TransformStartTime
   */
  readonly transformStartTime?: string;

  /**
   * @schema TransformJob#TransformEndTime
   */
  readonly transformEndTime?: string;

  /**
   * @schema TransformJob#LabelingJobArn
   */
  readonly labelingJobArn?: string;

  /**
   * @schema TransformJob#AutoMLJobArn
   */
  readonly autoMlJobArn?: string;

  /**
   * @schema TransformJob#DataProcessing
   */
  readonly dataProcessing?: DataProcessing;

  /**
   * @schema TransformJob#ExperimentConfig
   */
  readonly experimentConfig?: ExperimentConfig;

  /**
   * @schema TransformJob#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema MonitoringS3Output
 */
export interface MonitoringS3Output {
  /**
   * @schema MonitoringS3Output#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema MonitoringS3Output#LocalPath
   */
  readonly localPath: string;

  /**
   * @schema MonitoringS3Output#S3UploadMode
   */
  readonly s3UploadMode?: string;

}
