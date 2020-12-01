/**
 * @schema CreateDetectorModelRequest
 */
export interface CreateDetectorModelRequest {
  /**
   * @schema CreateDetectorModelRequest#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema CreateDetectorModelRequest#detectorModelDefinition
   */
  readonly detectorModelDefinition: DetectorModelDefinition;

  /**
   * @schema CreateDetectorModelRequest#detectorModelDescription
   */
  readonly detectorModelDescription?: string;

  /**
   * @schema CreateDetectorModelRequest#key
   */
  readonly key?: string;

  /**
   * @schema CreateDetectorModelRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateDetectorModelRequest#tags
   */
  readonly tags?: Tag[];

  /**
   * @schema CreateDetectorModelRequest#evaluationMethod
   */
  readonly evaluationMethod?: string;

}

/**
 * @schema CreateDetectorModelResponse
 */
export interface CreateDetectorModelResponse {
  /**
   * @schema CreateDetectorModelResponse#detectorModelConfiguration
   */
  readonly detectorModelConfiguration?: DetectorModelConfiguration;

}

/**
 * @schema CreateInputRequest
 */
export interface CreateInputRequest {
  /**
   * @schema CreateInputRequest#inputName
   */
  readonly inputName: string;

  /**
   * @schema CreateInputRequest#inputDescription
   */
  readonly inputDescription?: string;

  /**
   * @schema CreateInputRequest#inputDefinition
   */
  readonly inputDefinition: InputDefinition;

  /**
   * @schema CreateInputRequest#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema CreateInputResponse
 */
export interface CreateInputResponse {
  /**
   * @schema CreateInputResponse#inputConfiguration
   */
  readonly inputConfiguration?: InputConfiguration;

}

/**
 * @schema DeleteDetectorModelRequest
 */
export interface DeleteDetectorModelRequest {
  /**
   * @schema DeleteDetectorModelRequest#detectorModelName
   */
  readonly detectorModelName: string;

}

/**
 * @schema DeleteDetectorModelResponse
 */
export interface DeleteDetectorModelResponse {
}

/**
 * @schema DeleteInputRequest
 */
export interface DeleteInputRequest {
  /**
   * @schema DeleteInputRequest#inputName
   */
  readonly inputName: string;

}

/**
 * @schema DeleteInputResponse
 */
export interface DeleteInputResponse {
}

/**
 * @schema DescribeDetectorModelRequest
 */
export interface DescribeDetectorModelRequest {
  /**
   * @schema DescribeDetectorModelRequest#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema DescribeDetectorModelRequest#detectorModelVersion
   */
  readonly detectorModelVersion?: string;

}

/**
 * @schema DescribeDetectorModelResponse
 */
export interface DescribeDetectorModelResponse {
  /**
   * @schema DescribeDetectorModelResponse#detectorModel
   */
  readonly detectorModel?: DetectorModel;

}

/**
 * @schema DescribeInputRequest
 */
export interface DescribeInputRequest {
  /**
   * @schema DescribeInputRequest#inputName
   */
  readonly inputName: string;

}

/**
 * @schema DescribeInputResponse
 */
export interface DescribeInputResponse {
  /**
   * @schema DescribeInputResponse#input
   */
  readonly input?: Input;

}

/**
 * @schema DescribeLoggingOptionsRequest
 */
export interface DescribeLoggingOptionsRequest {
}

/**
 * @schema DescribeLoggingOptionsResponse
 */
export interface DescribeLoggingOptionsResponse {
  /**
   * @schema DescribeLoggingOptionsResponse#loggingOptions
   */
  readonly loggingOptions?: LoggingOptions;

}

/**
 * @schema ListDetectorModelVersionsRequest
 */
export interface ListDetectorModelVersionsRequest {
  /**
   * @schema ListDetectorModelVersionsRequest#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema ListDetectorModelVersionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDetectorModelVersionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDetectorModelVersionsResponse
 */
export interface ListDetectorModelVersionsResponse {
  /**
   * @schema ListDetectorModelVersionsResponse#detectorModelVersionSummaries
   */
  readonly detectorModelVersionSummaries?: DetectorModelVersionSummary[];

  /**
   * @schema ListDetectorModelVersionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDetectorModelsRequest
 */
export interface ListDetectorModelsRequest {
  /**
   * @schema ListDetectorModelsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDetectorModelsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDetectorModelsResponse
 */
export interface ListDetectorModelsResponse {
  /**
   * @schema ListDetectorModelsResponse#detectorModelSummaries
   */
  readonly detectorModelSummaries?: DetectorModelSummary[];

  /**
   * @schema ListDetectorModelsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListInputsRequest
 */
export interface ListInputsRequest {
  /**
   * @schema ListInputsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListInputsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListInputsResponse
 */
export interface ListInputsResponse {
  /**
   * @schema ListInputsResponse#inputSummaries
   */
  readonly inputSummaries?: InputSummary[];

  /**
   * @schema ListInputsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema PutLoggingOptionsRequest
 */
export interface PutLoggingOptionsRequest {
  /**
   * @schema PutLoggingOptionsRequest#loggingOptions
   */
  readonly loggingOptions: LoggingOptions;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#tags
   */
  readonly tags: Tag[];

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateDetectorModelRequest
 */
export interface UpdateDetectorModelRequest {
  /**
   * @schema UpdateDetectorModelRequest#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema UpdateDetectorModelRequest#detectorModelDefinition
   */
  readonly detectorModelDefinition: DetectorModelDefinition;

  /**
   * @schema UpdateDetectorModelRequest#detectorModelDescription
   */
  readonly detectorModelDescription?: string;

  /**
   * @schema UpdateDetectorModelRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema UpdateDetectorModelRequest#evaluationMethod
   */
  readonly evaluationMethod?: string;

}

/**
 * @schema UpdateDetectorModelResponse
 */
export interface UpdateDetectorModelResponse {
  /**
   * @schema UpdateDetectorModelResponse#detectorModelConfiguration
   */
  readonly detectorModelConfiguration?: DetectorModelConfiguration;

}

/**
 * @schema UpdateInputRequest
 */
export interface UpdateInputRequest {
  /**
   * @schema UpdateInputRequest#inputName
   */
  readonly inputName: string;

  /**
   * @schema UpdateInputRequest#inputDescription
   */
  readonly inputDescription?: string;

  /**
   * @schema UpdateInputRequest#inputDefinition
   */
  readonly inputDefinition: InputDefinition;

}

/**
 * @schema UpdateInputResponse
 */
export interface UpdateInputResponse {
  /**
   * @schema UpdateInputResponse#inputConfiguration
   */
  readonly inputConfiguration?: InputConfiguration;

}

/**
 * @schema DetectorModelDefinition
 */
export interface DetectorModelDefinition {
  /**
   * @schema DetectorModelDefinition#states
   */
  readonly states: State[];

  /**
   * @schema DetectorModelDefinition#initialStateName
   */
  readonly initialStateName: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#key
   */
  readonly key: string;

  /**
   * @schema Tag#value
   */
  readonly value: string;

}

/**
 * @schema DetectorModelConfiguration
 */
export interface DetectorModelConfiguration {
  /**
   * @schema DetectorModelConfiguration#detectorModelName
   */
  readonly detectorModelName?: string;

  /**
   * @schema DetectorModelConfiguration#detectorModelVersion
   */
  readonly detectorModelVersion?: string;

  /**
   * @schema DetectorModelConfiguration#detectorModelDescription
   */
  readonly detectorModelDescription?: string;

  /**
   * @schema DetectorModelConfiguration#detectorModelArn
   */
  readonly detectorModelArn?: string;

  /**
   * @schema DetectorModelConfiguration#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DetectorModelConfiguration#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DetectorModelConfiguration#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema DetectorModelConfiguration#status
   */
  readonly status?: string;

  /**
   * @schema DetectorModelConfiguration#key
   */
  readonly key?: string;

  /**
   * @schema DetectorModelConfiguration#evaluationMethod
   */
  readonly evaluationMethod?: string;

}

/**
 * @schema InputDefinition
 */
export interface InputDefinition {
  /**
   * @schema InputDefinition#attributes
   */
  readonly attributes: Attribute[];

}

/**
 * @schema InputConfiguration
 */
export interface InputConfiguration {
  /**
   * @schema InputConfiguration#inputName
   */
  readonly inputName: string;

  /**
   * @schema InputConfiguration#inputDescription
   */
  readonly inputDescription?: string;

  /**
   * @schema InputConfiguration#inputArn
   */
  readonly inputArn: string;

  /**
   * @schema InputConfiguration#creationTime
   */
  readonly creationTime: string;

  /**
   * @schema InputConfiguration#lastUpdateTime
   */
  readonly lastUpdateTime: string;

  /**
   * @schema InputConfiguration#status
   */
  readonly status: string;

}

/**
 * @schema DetectorModel
 */
export interface DetectorModel {
  /**
   * @schema DetectorModel#detectorModelDefinition
   */
  readonly detectorModelDefinition?: DetectorModelDefinition;

  /**
   * @schema DetectorModel#detectorModelConfiguration
   */
  readonly detectorModelConfiguration?: DetectorModelConfiguration;

}

/**
 * @schema Input
 */
export interface Input {
  /**
   * @schema Input#inputConfiguration
   */
  readonly inputConfiguration?: InputConfiguration;

  /**
   * @schema Input#inputDefinition
   */
  readonly inputDefinition?: InputDefinition;

}

/**
 * @schema LoggingOptions
 */
export interface LoggingOptions {
  /**
   * @schema LoggingOptions#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema LoggingOptions#level
   */
  readonly level: string;

  /**
   * @schema LoggingOptions#enabled
   */
  readonly enabled: boolean;

  /**
   * @schema LoggingOptions#detectorDebugOptions
   */
  readonly detectorDebugOptions?: DetectorDebugOption[];

}

/**
 * @schema DetectorModelVersionSummary
 */
export interface DetectorModelVersionSummary {
  /**
   * @schema DetectorModelVersionSummary#detectorModelName
   */
  readonly detectorModelName?: string;

  /**
   * @schema DetectorModelVersionSummary#detectorModelVersion
   */
  readonly detectorModelVersion?: string;

  /**
   * @schema DetectorModelVersionSummary#detectorModelArn
   */
  readonly detectorModelArn?: string;

  /**
   * @schema DetectorModelVersionSummary#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DetectorModelVersionSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DetectorModelVersionSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema DetectorModelVersionSummary#status
   */
  readonly status?: string;

  /**
   * @schema DetectorModelVersionSummary#evaluationMethod
   */
  readonly evaluationMethod?: string;

}

/**
 * @schema DetectorModelSummary
 */
export interface DetectorModelSummary {
  /**
   * @schema DetectorModelSummary#detectorModelName
   */
  readonly detectorModelName?: string;

  /**
   * @schema DetectorModelSummary#detectorModelDescription
   */
  readonly detectorModelDescription?: string;

  /**
   * @schema DetectorModelSummary#creationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema InputSummary
 */
export interface InputSummary {
  /**
   * @schema InputSummary#inputName
   */
  readonly inputName?: string;

  /**
   * @schema InputSummary#inputDescription
   */
  readonly inputDescription?: string;

  /**
   * @schema InputSummary#inputArn
   */
  readonly inputArn?: string;

  /**
   * @schema InputSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema InputSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema InputSummary#status
   */
  readonly status?: string;

}

/**
 * @schema State
 */
export interface State {
  /**
   * @schema State#stateName
   */
  readonly stateName: string;

  /**
   * @schema State#onInput
   */
  readonly onInput?: OnInputLifecycle;

  /**
   * @schema State#onEnter
   */
  readonly onEnter?: OnEnterLifecycle;

  /**
   * @schema State#onExit
   */
  readonly onExit?: OnExitLifecycle;

}

/**
 * @schema Attribute
 */
export interface Attribute {
  /**
   * @schema Attribute#jsonPath
   */
  readonly jsonPath: string;

}

/**
 * @schema DetectorDebugOption
 */
export interface DetectorDebugOption {
  /**
   * @schema DetectorDebugOption#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema DetectorDebugOption#keyValue
   */
  readonly keyValue?: string;

}

/**
 * @schema OnInputLifecycle
 */
export interface OnInputLifecycle {
  /**
   * @schema OnInputLifecycle#events
   */
  readonly events?: Event[];

  /**
   * @schema OnInputLifecycle#transitionEvents
   */
  readonly transitionEvents?: TransitionEvent[];

}

/**
 * @schema OnEnterLifecycle
 */
export interface OnEnterLifecycle {
  /**
   * @schema OnEnterLifecycle#events
   */
  readonly events?: Event[];

}

/**
 * @schema OnExitLifecycle
 */
export interface OnExitLifecycle {
  /**
   * @schema OnExitLifecycle#events
   */
  readonly events?: Event[];

}

/**
 * @schema Event
 */
export interface Event {
  /**
   * @schema Event#eventName
   */
  readonly eventName: string;

  /**
   * @schema Event#condition
   */
  readonly condition?: string;

  /**
   * @schema Event#actions
   */
  readonly actions?: Action[];

}

/**
 * @schema TransitionEvent
 */
export interface TransitionEvent {
  /**
   * @schema TransitionEvent#eventName
   */
  readonly eventName: string;

  /**
   * @schema TransitionEvent#condition
   */
  readonly condition: string;

  /**
   * @schema TransitionEvent#actions
   */
  readonly actions?: Action[];

  /**
   * @schema TransitionEvent#nextState
   */
  readonly nextState: string;

}

/**
 * @schema Action
 */
export interface Action {
  /**
   * @schema Action#setVariable
   */
  readonly setVariable?: SetVariableAction;

  /**
   * @schema Action#sns
   */
  readonly sns?: SnsTopicPublishAction;

  /**
   * @schema Action#iotTopicPublish
   */
  readonly iotTopicPublish?: IotTopicPublishAction;

  /**
   * @schema Action#setTimer
   */
  readonly setTimer?: SetTimerAction;

  /**
   * @schema Action#clearTimer
   */
  readonly clearTimer?: ClearTimerAction;

  /**
   * @schema Action#resetTimer
   */
  readonly resetTimer?: ResetTimerAction;

  /**
   * @schema Action#lambda
   */
  readonly lambda?: LambdaAction;

  /**
   * @schema Action#iotEvents
   */
  readonly iotEvents?: IotEventsAction;

  /**
   * @schema Action#sqs
   */
  readonly sqs?: SqsAction;

  /**
   * @schema Action#firehose
   */
  readonly firehose?: FirehoseAction;

  /**
   * @schema Action#dynamoDB
   */
  readonly dynamoDB?: DynamoDbAction;

  /**
   * @schema Action#dynamoDBv2
   */
  readonly dynamoDBv2?: DynamoDBv2Action;

  /**
   * @schema Action#iotSiteWise
   */
  readonly iotSiteWise?: IotSiteWiseAction;

}

/**
 * @schema SetVariableAction
 */
export interface SetVariableAction {
  /**
   * @schema SetVariableAction#variableName
   */
  readonly variableName: string;

  /**
   * @schema SetVariableAction#value
   */
  readonly value: string;

}

/**
 * @schema SnsTopicPublishAction
 */
export interface SnsTopicPublishAction {
  /**
   * @schema SnsTopicPublishAction#targetArn
   */
  readonly targetArn: string;

  /**
   * @schema SnsTopicPublishAction#payload
   */
  readonly payload?: Payload;

}

/**
 * @schema IotTopicPublishAction
 */
export interface IotTopicPublishAction {
  /**
   * @schema IotTopicPublishAction#mqttTopic
   */
  readonly mqttTopic: string;

  /**
   * @schema IotTopicPublishAction#payload
   */
  readonly payload?: Payload;

}

/**
 * @schema SetTimerAction
 */
export interface SetTimerAction {
  /**
   * @schema SetTimerAction#timerName
   */
  readonly timerName: string;

  /**
   * @schema SetTimerAction#seconds
   */
  readonly seconds?: number;

  /**
   * @schema SetTimerAction#durationExpression
   */
  readonly durationExpression?: string;

}

/**
 * @schema ClearTimerAction
 */
export interface ClearTimerAction {
  /**
   * @schema ClearTimerAction#timerName
   */
  readonly timerName: string;

}

/**
 * @schema ResetTimerAction
 */
export interface ResetTimerAction {
  /**
   * @schema ResetTimerAction#timerName
   */
  readonly timerName: string;

}

/**
 * @schema LambdaAction
 */
export interface LambdaAction {
  /**
   * @schema LambdaAction#functionArn
   */
  readonly functionArn: string;

  /**
   * @schema LambdaAction#payload
   */
  readonly payload?: Payload;

}

/**
 * @schema IotEventsAction
 */
export interface IotEventsAction {
  /**
   * @schema IotEventsAction#inputName
   */
  readonly inputName: string;

  /**
   * @schema IotEventsAction#payload
   */
  readonly payload?: Payload;

}

/**
 * @schema SqsAction
 */
export interface SqsAction {
  /**
   * @schema SqsAction#queueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema SqsAction#useBase64
   */
  readonly useBase64?: boolean;

  /**
   * @schema SqsAction#payload
   */
  readonly payload?: Payload;

}

/**
 * @schema FirehoseAction
 */
export interface FirehoseAction {
  /**
   * @schema FirehoseAction#deliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema FirehoseAction#separator
   */
  readonly separator?: string;

  /**
   * @schema FirehoseAction#payload
   */
  readonly payload?: Payload;

}

/**
 * @schema DynamoDbAction
 */
export interface DynamoDbAction {
  /**
   * @schema DynamoDbAction#hashKeyType
   */
  readonly hashKeyType?: string;

  /**
   * @schema DynamoDbAction#hashKeyField
   */
  readonly hashKeyField: string;

  /**
   * @schema DynamoDbAction#hashKeyValue
   */
  readonly hashKeyValue: string;

  /**
   * @schema DynamoDbAction#rangeKeyType
   */
  readonly rangeKeyType?: string;

  /**
   * @schema DynamoDbAction#rangeKeyField
   */
  readonly rangeKeyField?: string;

  /**
   * @schema DynamoDbAction#rangeKeyValue
   */
  readonly rangeKeyValue?: string;

  /**
   * @schema DynamoDbAction#operation
   */
  readonly operation?: string;

  /**
   * @schema DynamoDbAction#payloadField
   */
  readonly payloadField?: string;

  /**
   * @schema DynamoDbAction#tableName
   */
  readonly tableName: string;

  /**
   * @schema DynamoDbAction#payload
   */
  readonly payload?: Payload;

}

/**
 * @schema DynamoDBv2Action
 */
export interface DynamoDBv2Action {
  /**
   * @schema DynamoDBv2Action#tableName
   */
  readonly tableName: string;

  /**
   * @schema DynamoDBv2Action#payload
   */
  readonly payload?: Payload;

}

/**
 * @schema IotSiteWiseAction
 */
export interface IotSiteWiseAction {
  /**
   * @schema IotSiteWiseAction#entryId
   */
  readonly entryId?: string;

  /**
   * @schema IotSiteWiseAction#assetId
   */
  readonly assetId?: string;

  /**
   * @schema IotSiteWiseAction#propertyId
   */
  readonly propertyId?: string;

  /**
   * @schema IotSiteWiseAction#propertyAlias
   */
  readonly propertyAlias?: string;

  /**
   * @schema IotSiteWiseAction#propertyValue
   */
  readonly propertyValue: AssetPropertyValue;

}

/**
 * @schema Payload
 */
export interface Payload {
  /**
   * @schema Payload#contentExpression
   */
  readonly contentExpression: string;

  /**
   * @schema Payload#type
   */
  readonly type: string;

}

/**
 * @schema AssetPropertyValue
 */
export interface AssetPropertyValue {
  /**
   * @schema AssetPropertyValue#value
   */
  readonly value: AssetPropertyVariant;

  /**
   * @schema AssetPropertyValue#timestamp
   */
  readonly timestamp?: AssetPropertyTimestamp;

  /**
   * @schema AssetPropertyValue#quality
   */
  readonly quality?: string;

}

/**
 * @schema AssetPropertyVariant
 */
export interface AssetPropertyVariant {
  /**
   * @schema AssetPropertyVariant#stringValue
   */
  readonly stringValue?: string;

  /**
   * @schema AssetPropertyVariant#integerValue
   */
  readonly integerValue?: string;

  /**
   * @schema AssetPropertyVariant#doubleValue
   */
  readonly doubleValue?: string;

  /**
   * @schema AssetPropertyVariant#booleanValue
   */
  readonly booleanValue?: string;

}

/**
 * @schema AssetPropertyTimestamp
 */
export interface AssetPropertyTimestamp {
  /**
   * @schema AssetPropertyTimestamp#timeInSeconds
   */
  readonly timeInSeconds: string;

  /**
   * @schema AssetPropertyTimestamp#offsetInNanos
   */
  readonly offsetInNanos?: string;

}
