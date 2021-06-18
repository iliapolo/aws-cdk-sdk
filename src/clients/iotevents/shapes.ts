/**
 * @schema IoTEventsCreateDetectorModelRequest
 */
export interface IoTEventsCreateDetectorModelRequest {
  /**
   * @schema IoTEventsCreateDetectorModelRequest#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema IoTEventsCreateDetectorModelRequest#detectorModelDefinition
   */
  readonly detectorModelDefinition: IoTEventsDetectorModelDefinition;

  /**
   * @schema IoTEventsCreateDetectorModelRequest#detectorModelDescription
   */
  readonly detectorModelDescription?: string;

  /**
   * @schema IoTEventsCreateDetectorModelRequest#key
   */
  readonly key?: string;

  /**
   * @schema IoTEventsCreateDetectorModelRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IoTEventsCreateDetectorModelRequest#tags
   */
  readonly tags?: IoTEventsTag[];

  /**
   * @schema IoTEventsCreateDetectorModelRequest#evaluationMethod
   */
  readonly evaluationMethod?: string;

}

/**
 * @schema IoTEventsCreateDetectorModelResponse
 */
export interface IoTEventsCreateDetectorModelResponse {
  /**
   * @schema IoTEventsCreateDetectorModelResponse#detectorModelConfiguration
   */
  readonly detectorModelConfiguration?: IoTEventsDetectorModelConfiguration;

}

/**
 * @schema IoTEventsCreateInputRequest
 */
export interface IoTEventsCreateInputRequest {
  /**
   * @schema IoTEventsCreateInputRequest#inputName
   */
  readonly inputName: string;

  /**
   * @schema IoTEventsCreateInputRequest#inputDescription
   */
  readonly inputDescription?: string;

  /**
   * @schema IoTEventsCreateInputRequest#inputDefinition
   */
  readonly inputDefinition: IoTEventsInputDefinition;

  /**
   * @schema IoTEventsCreateInputRequest#tags
   */
  readonly tags?: IoTEventsTag[];

}

/**
 * @schema IoTEventsCreateInputResponse
 */
export interface IoTEventsCreateInputResponse {
  /**
   * @schema IoTEventsCreateInputResponse#inputConfiguration
   */
  readonly inputConfiguration?: IoTEventsInputConfiguration;

}

/**
 * @schema IoTEventsDeleteDetectorModelRequest
 */
export interface IoTEventsDeleteDetectorModelRequest {
  /**
   * @schema IoTEventsDeleteDetectorModelRequest#detectorModelName
   */
  readonly detectorModelName: string;

}

/**
 * @schema IoTEventsDeleteDetectorModelResponse
 */
export interface IoTEventsDeleteDetectorModelResponse {
}

/**
 * @schema IoTEventsDeleteInputRequest
 */
export interface IoTEventsDeleteInputRequest {
  /**
   * @schema IoTEventsDeleteInputRequest#inputName
   */
  readonly inputName: string;

}

/**
 * @schema IoTEventsDeleteInputResponse
 */
export interface IoTEventsDeleteInputResponse {
}

/**
 * @schema IoTEventsDescribeDetectorModelRequest
 */
export interface IoTEventsDescribeDetectorModelRequest {
  /**
   * @schema IoTEventsDescribeDetectorModelRequest#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema IoTEventsDescribeDetectorModelRequest#detectorModelVersion
   */
  readonly detectorModelVersion?: string;

}

/**
 * @schema IoTEventsDescribeDetectorModelResponse
 */
export interface IoTEventsDescribeDetectorModelResponse {
  /**
   * @schema IoTEventsDescribeDetectorModelResponse#detectorModel
   */
  readonly detectorModel?: IoTEventsDetectorModel;

}

/**
 * @schema IoTEventsDescribeInputRequest
 */
export interface IoTEventsDescribeInputRequest {
  /**
   * @schema IoTEventsDescribeInputRequest#inputName
   */
  readonly inputName: string;

}

/**
 * @schema IoTEventsDescribeInputResponse
 */
export interface IoTEventsDescribeInputResponse {
  /**
   * @schema IoTEventsDescribeInputResponse#input
   */
  readonly input?: IoTEventsInput;

}

/**
 * @schema IoTEventsDescribeLoggingOptionsRequest
 */
export interface IoTEventsDescribeLoggingOptionsRequest {
}

/**
 * @schema IoTEventsDescribeLoggingOptionsResponse
 */
export interface IoTEventsDescribeLoggingOptionsResponse {
  /**
   * @schema IoTEventsDescribeLoggingOptionsResponse#loggingOptions
   */
  readonly loggingOptions?: IoTEventsLoggingOptions;

}

/**
 * @schema IoTEventsListDetectorModelVersionsRequest
 */
export interface IoTEventsListDetectorModelVersionsRequest {
  /**
   * @schema IoTEventsListDetectorModelVersionsRequest#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema IoTEventsListDetectorModelVersionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTEventsListDetectorModelVersionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTEventsListDetectorModelVersionsResponse
 */
export interface IoTEventsListDetectorModelVersionsResponse {
  /**
   * @schema IoTEventsListDetectorModelVersionsResponse#detectorModelVersionSummaries
   */
  readonly detectorModelVersionSummaries?: IoTEventsDetectorModelVersionSummary[];

  /**
   * @schema IoTEventsListDetectorModelVersionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTEventsListDetectorModelsRequest
 */
export interface IoTEventsListDetectorModelsRequest {
  /**
   * @schema IoTEventsListDetectorModelsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTEventsListDetectorModelsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTEventsListDetectorModelsResponse
 */
export interface IoTEventsListDetectorModelsResponse {
  /**
   * @schema IoTEventsListDetectorModelsResponse#detectorModelSummaries
   */
  readonly detectorModelSummaries?: IoTEventsDetectorModelSummary[];

  /**
   * @schema IoTEventsListDetectorModelsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTEventsListInputsRequest
 */
export interface IoTEventsListInputsRequest {
  /**
   * @schema IoTEventsListInputsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTEventsListInputsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTEventsListInputsResponse
 */
export interface IoTEventsListInputsResponse {
  /**
   * @schema IoTEventsListInputsResponse#inputSummaries
   */
  readonly inputSummaries?: IoTEventsInputSummary[];

  /**
   * @schema IoTEventsListInputsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTEventsListTagsForResourceRequest
 */
export interface IoTEventsListTagsForResourceRequest {
  /**
   * @schema IoTEventsListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema IoTEventsListTagsForResourceResponse
 */
export interface IoTEventsListTagsForResourceResponse {
  /**
   * @schema IoTEventsListTagsForResourceResponse#tags
   */
  readonly tags?: IoTEventsTag[];

}

/**
 * @schema IoTEventsPutLoggingOptionsRequest
 */
export interface IoTEventsPutLoggingOptionsRequest {
  /**
   * @schema IoTEventsPutLoggingOptionsRequest#loggingOptions
   */
  readonly loggingOptions: IoTEventsLoggingOptions;

}

/**
 * @schema IoTEventsTagResourceRequest
 */
export interface IoTEventsTagResourceRequest {
  /**
   * @schema IoTEventsTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTEventsTagResourceRequest#tags
   */
  readonly tags: IoTEventsTag[];

}

/**
 * @schema IoTEventsTagResourceResponse
 */
export interface IoTEventsTagResourceResponse {
}

/**
 * @schema IoTEventsUntagResourceRequest
 */
export interface IoTEventsUntagResourceRequest {
  /**
   * @schema IoTEventsUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema IoTEventsUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema IoTEventsUntagResourceResponse
 */
export interface IoTEventsUntagResourceResponse {
}

/**
 * @schema IoTEventsUpdateDetectorModelRequest
 */
export interface IoTEventsUpdateDetectorModelRequest {
  /**
   * @schema IoTEventsUpdateDetectorModelRequest#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema IoTEventsUpdateDetectorModelRequest#detectorModelDefinition
   */
  readonly detectorModelDefinition: IoTEventsDetectorModelDefinition;

  /**
   * @schema IoTEventsUpdateDetectorModelRequest#detectorModelDescription
   */
  readonly detectorModelDescription?: string;

  /**
   * @schema IoTEventsUpdateDetectorModelRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IoTEventsUpdateDetectorModelRequest#evaluationMethod
   */
  readonly evaluationMethod?: string;

}

/**
 * @schema IoTEventsUpdateDetectorModelResponse
 */
export interface IoTEventsUpdateDetectorModelResponse {
  /**
   * @schema IoTEventsUpdateDetectorModelResponse#detectorModelConfiguration
   */
  readonly detectorModelConfiguration?: IoTEventsDetectorModelConfiguration;

}

/**
 * @schema IoTEventsUpdateInputRequest
 */
export interface IoTEventsUpdateInputRequest {
  /**
   * @schema IoTEventsUpdateInputRequest#inputName
   */
  readonly inputName: string;

  /**
   * @schema IoTEventsUpdateInputRequest#inputDescription
   */
  readonly inputDescription?: string;

  /**
   * @schema IoTEventsUpdateInputRequest#inputDefinition
   */
  readonly inputDefinition: IoTEventsInputDefinition;

}

/**
 * @schema IoTEventsUpdateInputResponse
 */
export interface IoTEventsUpdateInputResponse {
  /**
   * @schema IoTEventsUpdateInputResponse#inputConfiguration
   */
  readonly inputConfiguration?: IoTEventsInputConfiguration;

}

/**
 * @schema IoTEventsDetectorModelDefinition
 */
export interface IoTEventsDetectorModelDefinition {
  /**
   * @schema IoTEventsDetectorModelDefinition#states
   */
  readonly states: IoTEventsState[];

  /**
   * @schema IoTEventsDetectorModelDefinition#initialStateName
   */
  readonly initialStateName: string;

}

/**
 * @schema IoTEventsTag
 */
export interface IoTEventsTag {
  /**
   * @schema IoTEventsTag#key
   */
  readonly key: string;

  /**
   * @schema IoTEventsTag#value
   */
  readonly value: string;

}

/**
 * @schema IoTEventsDetectorModelConfiguration
 */
export interface IoTEventsDetectorModelConfiguration {
  /**
   * @schema IoTEventsDetectorModelConfiguration#detectorModelName
   */
  readonly detectorModelName?: string;

  /**
   * @schema IoTEventsDetectorModelConfiguration#detectorModelVersion
   */
  readonly detectorModelVersion?: string;

  /**
   * @schema IoTEventsDetectorModelConfiguration#detectorModelDescription
   */
  readonly detectorModelDescription?: string;

  /**
   * @schema IoTEventsDetectorModelConfiguration#detectorModelArn
   */
  readonly detectorModelArn?: string;

  /**
   * @schema IoTEventsDetectorModelConfiguration#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IoTEventsDetectorModelConfiguration#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTEventsDetectorModelConfiguration#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTEventsDetectorModelConfiguration#status
   */
  readonly status?: string;

  /**
   * @schema IoTEventsDetectorModelConfiguration#key
   */
  readonly key?: string;

  /**
   * @schema IoTEventsDetectorModelConfiguration#evaluationMethod
   */
  readonly evaluationMethod?: string;

}

/**
 * @schema IoTEventsInputDefinition
 */
export interface IoTEventsInputDefinition {
  /**
   * @schema IoTEventsInputDefinition#attributes
   */
  readonly attributes: IoTEventsAttribute[];

}

/**
 * @schema IoTEventsInputConfiguration
 */
export interface IoTEventsInputConfiguration {
  /**
   * @schema IoTEventsInputConfiguration#inputName
   */
  readonly inputName: string;

  /**
   * @schema IoTEventsInputConfiguration#inputDescription
   */
  readonly inputDescription?: string;

  /**
   * @schema IoTEventsInputConfiguration#inputArn
   */
  readonly inputArn: string;

  /**
   * @schema IoTEventsInputConfiguration#creationTime
   */
  readonly creationTime: string;

  /**
   * @schema IoTEventsInputConfiguration#lastUpdateTime
   */
  readonly lastUpdateTime: string;

  /**
   * @schema IoTEventsInputConfiguration#status
   */
  readonly status: string;

}

/**
 * @schema IoTEventsDetectorModel
 */
export interface IoTEventsDetectorModel {
  /**
   * @schema IoTEventsDetectorModel#detectorModelDefinition
   */
  readonly detectorModelDefinition?: IoTEventsDetectorModelDefinition;

  /**
   * @schema IoTEventsDetectorModel#detectorModelConfiguration
   */
  readonly detectorModelConfiguration?: IoTEventsDetectorModelConfiguration;

}

/**
 * @schema IoTEventsInput
 */
export interface IoTEventsInput {
  /**
   * @schema IoTEventsInput#inputConfiguration
   */
  readonly inputConfiguration?: IoTEventsInputConfiguration;

  /**
   * @schema IoTEventsInput#inputDefinition
   */
  readonly inputDefinition?: IoTEventsInputDefinition;

}

/**
 * @schema IoTEventsLoggingOptions
 */
export interface IoTEventsLoggingOptions {
  /**
   * @schema IoTEventsLoggingOptions#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema IoTEventsLoggingOptions#level
   */
  readonly level: string;

  /**
   * @schema IoTEventsLoggingOptions#enabled
   */
  readonly enabled: boolean;

  /**
   * @schema IoTEventsLoggingOptions#detectorDebugOptions
   */
  readonly detectorDebugOptions?: IoTEventsDetectorDebugOption[];

}

/**
 * @schema IoTEventsDetectorModelVersionSummary
 */
export interface IoTEventsDetectorModelVersionSummary {
  /**
   * @schema IoTEventsDetectorModelVersionSummary#detectorModelName
   */
  readonly detectorModelName?: string;

  /**
   * @schema IoTEventsDetectorModelVersionSummary#detectorModelVersion
   */
  readonly detectorModelVersion?: string;

  /**
   * @schema IoTEventsDetectorModelVersionSummary#detectorModelArn
   */
  readonly detectorModelArn?: string;

  /**
   * @schema IoTEventsDetectorModelVersionSummary#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema IoTEventsDetectorModelVersionSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTEventsDetectorModelVersionSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTEventsDetectorModelVersionSummary#status
   */
  readonly status?: string;

  /**
   * @schema IoTEventsDetectorModelVersionSummary#evaluationMethod
   */
  readonly evaluationMethod?: string;

}

/**
 * @schema IoTEventsDetectorModelSummary
 */
export interface IoTEventsDetectorModelSummary {
  /**
   * @schema IoTEventsDetectorModelSummary#detectorModelName
   */
  readonly detectorModelName?: string;

  /**
   * @schema IoTEventsDetectorModelSummary#detectorModelDescription
   */
  readonly detectorModelDescription?: string;

  /**
   * @schema IoTEventsDetectorModelSummary#creationTime
   */
  readonly creationTime?: string;

}

/**
 * @schema IoTEventsInputSummary
 */
export interface IoTEventsInputSummary {
  /**
   * @schema IoTEventsInputSummary#inputName
   */
  readonly inputName?: string;

  /**
   * @schema IoTEventsInputSummary#inputDescription
   */
  readonly inputDescription?: string;

  /**
   * @schema IoTEventsInputSummary#inputArn
   */
  readonly inputArn?: string;

  /**
   * @schema IoTEventsInputSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTEventsInputSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

  /**
   * @schema IoTEventsInputSummary#status
   */
  readonly status?: string;

}

/**
 * @schema IoTEventsState
 */
export interface IoTEventsState {
  /**
   * @schema IoTEventsState#stateName
   */
  readonly stateName: string;

  /**
   * @schema IoTEventsState#onInput
   */
  readonly onInput?: IoTEventsOnInputLifecycle;

  /**
   * @schema IoTEventsState#onEnter
   */
  readonly onEnter?: IoTEventsOnEnterLifecycle;

  /**
   * @schema IoTEventsState#onExit
   */
  readonly onExit?: IoTEventsOnExitLifecycle;

}

/**
 * @schema IoTEventsAttribute
 */
export interface IoTEventsAttribute {
  /**
   * @schema IoTEventsAttribute#jsonPath
   */
  readonly jsonPath: string;

}

/**
 * @schema IoTEventsDetectorDebugOption
 */
export interface IoTEventsDetectorDebugOption {
  /**
   * @schema IoTEventsDetectorDebugOption#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema IoTEventsDetectorDebugOption#keyValue
   */
  readonly keyValue?: string;

}

/**
 * @schema IoTEventsOnInputLifecycle
 */
export interface IoTEventsOnInputLifecycle {
  /**
   * @schema IoTEventsOnInputLifecycle#events
   */
  readonly events?: IoTEventsEvent[];

  /**
   * @schema IoTEventsOnInputLifecycle#transitionEvents
   */
  readonly transitionEvents?: IoTEventsTransitionEvent[];

}

/**
 * @schema IoTEventsOnEnterLifecycle
 */
export interface IoTEventsOnEnterLifecycle {
  /**
   * @schema IoTEventsOnEnterLifecycle#events
   */
  readonly events?: IoTEventsEvent[];

}

/**
 * @schema IoTEventsOnExitLifecycle
 */
export interface IoTEventsOnExitLifecycle {
  /**
   * @schema IoTEventsOnExitLifecycle#events
   */
  readonly events?: IoTEventsEvent[];

}

/**
 * @schema IoTEventsEvent
 */
export interface IoTEventsEvent {
  /**
   * @schema IoTEventsEvent#eventName
   */
  readonly eventName: string;

  /**
   * @schema IoTEventsEvent#condition
   */
  readonly condition?: string;

  /**
   * @schema IoTEventsEvent#actions
   */
  readonly actions?: IoTEventsAction[];

}

/**
 * @schema IoTEventsTransitionEvent
 */
export interface IoTEventsTransitionEvent {
  /**
   * @schema IoTEventsTransitionEvent#eventName
   */
  readonly eventName: string;

  /**
   * @schema IoTEventsTransitionEvent#condition
   */
  readonly condition: string;

  /**
   * @schema IoTEventsTransitionEvent#actions
   */
  readonly actions?: IoTEventsAction[];

  /**
   * @schema IoTEventsTransitionEvent#nextState
   */
  readonly nextState: string;

}

/**
 * @schema IoTEventsAction
 */
export interface IoTEventsAction {
  /**
   * @schema IoTEventsAction#setVariable
   */
  readonly setVariable?: IoTEventsSetVariableAction;

  /**
   * @schema IoTEventsAction#sns
   */
  readonly sns?: IoTEventsSnsTopicPublishAction;

  /**
   * @schema IoTEventsAction#iotTopicPublish
   */
  readonly iotTopicPublish?: IoTEventsIotTopicPublishAction;

  /**
   * @schema IoTEventsAction#setTimer
   */
  readonly setTimer?: IoTEventsSetTimerAction;

  /**
   * @schema IoTEventsAction#clearTimer
   */
  readonly clearTimer?: IoTEventsClearTimerAction;

  /**
   * @schema IoTEventsAction#resetTimer
   */
  readonly resetTimer?: IoTEventsResetTimerAction;

  /**
   * @schema IoTEventsAction#lambda
   */
  readonly lambda?: IoTEventsLambdaAction;

  /**
   * @schema IoTEventsAction#iotEvents
   */
  readonly iotEvents?: IoTEventsIotEventsAction;

  /**
   * @schema IoTEventsAction#sqs
   */
  readonly sqs?: IoTEventsSqsAction;

  /**
   * @schema IoTEventsAction#firehose
   */
  readonly firehose?: IoTEventsFirehoseAction;

  /**
   * @schema IoTEventsAction#dynamoDB
   */
  readonly dynamoDB?: IoTEventsDynamoDbAction;

  /**
   * @schema IoTEventsAction#dynamoDBv2
   */
  readonly dynamoDBv2?: IoTEventsDynamoDBv2Action;

  /**
   * @schema IoTEventsAction#iotSiteWise
   */
  readonly iotSiteWise?: IoTEventsIotSiteWiseAction;

}

/**
 * @schema IoTEventsSetVariableAction
 */
export interface IoTEventsSetVariableAction {
  /**
   * @schema IoTEventsSetVariableAction#variableName
   */
  readonly variableName: string;

  /**
   * @schema IoTEventsSetVariableAction#value
   */
  readonly value: string;

}

/**
 * @schema IoTEventsSnsTopicPublishAction
 */
export interface IoTEventsSnsTopicPublishAction {
  /**
   * @schema IoTEventsSnsTopicPublishAction#targetArn
   */
  readonly targetArn: string;

  /**
   * @schema IoTEventsSnsTopicPublishAction#payload
   */
  readonly payload?: IoTEventsPayload;

}

/**
 * @schema IoTEventsIotTopicPublishAction
 */
export interface IoTEventsIotTopicPublishAction {
  /**
   * @schema IoTEventsIotTopicPublishAction#mqttTopic
   */
  readonly mqttTopic: string;

  /**
   * @schema IoTEventsIotTopicPublishAction#payload
   */
  readonly payload?: IoTEventsPayload;

}

/**
 * @schema IoTEventsSetTimerAction
 */
export interface IoTEventsSetTimerAction {
  /**
   * @schema IoTEventsSetTimerAction#timerName
   */
  readonly timerName: string;

  /**
   * @schema IoTEventsSetTimerAction#seconds
   */
  readonly seconds?: number;

  /**
   * @schema IoTEventsSetTimerAction#durationExpression
   */
  readonly durationExpression?: string;

}

/**
 * @schema IoTEventsClearTimerAction
 */
export interface IoTEventsClearTimerAction {
  /**
   * @schema IoTEventsClearTimerAction#timerName
   */
  readonly timerName: string;

}

/**
 * @schema IoTEventsResetTimerAction
 */
export interface IoTEventsResetTimerAction {
  /**
   * @schema IoTEventsResetTimerAction#timerName
   */
  readonly timerName: string;

}

/**
 * @schema IoTEventsLambdaAction
 */
export interface IoTEventsLambdaAction {
  /**
   * @schema IoTEventsLambdaAction#functionArn
   */
  readonly functionArn: string;

  /**
   * @schema IoTEventsLambdaAction#payload
   */
  readonly payload?: IoTEventsPayload;

}

/**
 * @schema IoTEventsIotEventsAction
 */
export interface IoTEventsIotEventsAction {
  /**
   * @schema IoTEventsIotEventsAction#inputName
   */
  readonly inputName: string;

  /**
   * @schema IoTEventsIotEventsAction#payload
   */
  readonly payload?: IoTEventsPayload;

}

/**
 * @schema IoTEventsSqsAction
 */
export interface IoTEventsSqsAction {
  /**
   * @schema IoTEventsSqsAction#queueUrl
   */
  readonly queueUrl: string;

  /**
   * @schema IoTEventsSqsAction#useBase64
   */
  readonly useBase64?: boolean;

  /**
   * @schema IoTEventsSqsAction#payload
   */
  readonly payload?: IoTEventsPayload;

}

/**
 * @schema IoTEventsFirehoseAction
 */
export interface IoTEventsFirehoseAction {
  /**
   * @schema IoTEventsFirehoseAction#deliveryStreamName
   */
  readonly deliveryStreamName: string;

  /**
   * @schema IoTEventsFirehoseAction#separator
   */
  readonly separator?: string;

  /**
   * @schema IoTEventsFirehoseAction#payload
   */
  readonly payload?: IoTEventsPayload;

}

/**
 * @schema IoTEventsDynamoDbAction
 */
export interface IoTEventsDynamoDbAction {
  /**
   * @schema IoTEventsDynamoDbAction#hashKeyType
   */
  readonly hashKeyType?: string;

  /**
   * @schema IoTEventsDynamoDbAction#hashKeyField
   */
  readonly hashKeyField: string;

  /**
   * @schema IoTEventsDynamoDbAction#hashKeyValue
   */
  readonly hashKeyValue: string;

  /**
   * @schema IoTEventsDynamoDbAction#rangeKeyType
   */
  readonly rangeKeyType?: string;

  /**
   * @schema IoTEventsDynamoDbAction#rangeKeyField
   */
  readonly rangeKeyField?: string;

  /**
   * @schema IoTEventsDynamoDbAction#rangeKeyValue
   */
  readonly rangeKeyValue?: string;

  /**
   * @schema IoTEventsDynamoDbAction#operation
   */
  readonly operation?: string;

  /**
   * @schema IoTEventsDynamoDbAction#payloadField
   */
  readonly payloadField?: string;

  /**
   * @schema IoTEventsDynamoDbAction#tableName
   */
  readonly tableName: string;

  /**
   * @schema IoTEventsDynamoDbAction#payload
   */
  readonly payload?: IoTEventsPayload;

}

/**
 * @schema IoTEventsDynamoDBv2Action
 */
export interface IoTEventsDynamoDBv2Action {
  /**
   * @schema IoTEventsDynamoDBv2Action#tableName
   */
  readonly tableName: string;

  /**
   * @schema IoTEventsDynamoDBv2Action#payload
   */
  readonly payload?: IoTEventsPayload;

}

/**
 * @schema IoTEventsIotSiteWiseAction
 */
export interface IoTEventsIotSiteWiseAction {
  /**
   * @schema IoTEventsIotSiteWiseAction#entryId
   */
  readonly entryId?: string;

  /**
   * @schema IoTEventsIotSiteWiseAction#assetId
   */
  readonly assetId?: string;

  /**
   * @schema IoTEventsIotSiteWiseAction#propertyId
   */
  readonly propertyId?: string;

  /**
   * @schema IoTEventsIotSiteWiseAction#propertyAlias
   */
  readonly propertyAlias?: string;

  /**
   * @schema IoTEventsIotSiteWiseAction#propertyValue
   */
  readonly propertyValue: IoTEventsAssetPropertyValue;

}

/**
 * @schema IoTEventsPayload
 */
export interface IoTEventsPayload {
  /**
   * @schema IoTEventsPayload#contentExpression
   */
  readonly contentExpression: string;

  /**
   * @schema IoTEventsPayload#type
   */
  readonly type: string;

}

/**
 * @schema IoTEventsAssetPropertyValue
 */
export interface IoTEventsAssetPropertyValue {
  /**
   * @schema IoTEventsAssetPropertyValue#value
   */
  readonly value: IoTEventsAssetPropertyVariant;

  /**
   * @schema IoTEventsAssetPropertyValue#timestamp
   */
  readonly timestamp?: IoTEventsAssetPropertyTimestamp;

  /**
   * @schema IoTEventsAssetPropertyValue#quality
   */
  readonly quality?: string;

}

/**
 * @schema IoTEventsAssetPropertyVariant
 */
export interface IoTEventsAssetPropertyVariant {
  /**
   * @schema IoTEventsAssetPropertyVariant#stringValue
   */
  readonly stringValue?: string;

  /**
   * @schema IoTEventsAssetPropertyVariant#integerValue
   */
  readonly integerValue?: string;

  /**
   * @schema IoTEventsAssetPropertyVariant#doubleValue
   */
  readonly doubleValue?: string;

  /**
   * @schema IoTEventsAssetPropertyVariant#booleanValue
   */
  readonly booleanValue?: string;

}

/**
 * @schema IoTEventsAssetPropertyTimestamp
 */
export interface IoTEventsAssetPropertyTimestamp {
  /**
   * @schema IoTEventsAssetPropertyTimestamp#timeInSeconds
   */
  readonly timeInSeconds: string;

  /**
   * @schema IoTEventsAssetPropertyTimestamp#offsetInNanos
   */
  readonly offsetInNanos?: string;

}
