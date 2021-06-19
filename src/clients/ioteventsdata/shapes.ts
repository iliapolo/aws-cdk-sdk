/**
 * @schema IoTEventsDataBatchPutMessageRequest
 */
export interface IoTEventsDataBatchPutMessageRequest {
  /**
   * @schema IoTEventsDataBatchPutMessageRequest#messages
   */
  readonly messages: IoTEventsDataMessage[];

}

/**
 * @schema IoTEventsDataBatchPutMessageResponse
 */
export interface IoTEventsDataBatchPutMessageResponse {
  /**
   * @schema IoTEventsDataBatchPutMessageResponse#BatchPutMessageErrorEntries
   */
  readonly batchPutMessageErrorEntries?: IoTEventsDataBatchPutMessageErrorEntry[];

}

/**
 * @schema IoTEventsDataBatchUpdateDetectorRequest
 */
export interface IoTEventsDataBatchUpdateDetectorRequest {
  /**
   * @schema IoTEventsDataBatchUpdateDetectorRequest#detectors
   */
  readonly detectors: IoTEventsDataUpdateDetectorRequest[];

}

/**
 * @schema IoTEventsDataBatchUpdateDetectorResponse
 */
export interface IoTEventsDataBatchUpdateDetectorResponse {
  /**
   * @schema IoTEventsDataBatchUpdateDetectorResponse#batchUpdateDetectorErrorEntries
   */
  readonly batchUpdateDetectorErrorEntries?: IoTEventsDataBatchUpdateDetectorErrorEntry[];

}

/**
 * @schema IoTEventsDataDescribeDetectorRequest
 */
export interface IoTEventsDataDescribeDetectorRequest {
  /**
   * @schema IoTEventsDataDescribeDetectorRequest#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema IoTEventsDataDescribeDetectorRequest#keyValue
   */
  readonly keyValue?: string;

}

/**
 * @schema IoTEventsDataDescribeDetectorResponse
 */
export interface IoTEventsDataDescribeDetectorResponse {
  /**
   * @schema IoTEventsDataDescribeDetectorResponse#detector
   */
  readonly detector?: IoTEventsDataDetector;

}

/**
 * @schema IoTEventsDataListDetectorsRequest
 */
export interface IoTEventsDataListDetectorsRequest {
  /**
   * @schema IoTEventsDataListDetectorsRequest#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema IoTEventsDataListDetectorsRequest#stateName
   */
  readonly stateName?: string;

  /**
   * @schema IoTEventsDataListDetectorsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema IoTEventsDataListDetectorsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema IoTEventsDataListDetectorsResponse
 */
export interface IoTEventsDataListDetectorsResponse {
  /**
   * @schema IoTEventsDataListDetectorsResponse#detectorSummaries
   */
  readonly detectorSummaries?: IoTEventsDataDetectorSummary[];

  /**
   * @schema IoTEventsDataListDetectorsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema IoTEventsDataMessage
 */
export interface IoTEventsDataMessage {
  /**
   * @schema IoTEventsDataMessage#messageId
   */
  readonly messageId: string;

  /**
   * @schema IoTEventsDataMessage#inputName
   */
  readonly inputName: string;

  /**
   * @schema IoTEventsDataMessage#payload
   */
  readonly payload: any;

}

/**
 * @schema IoTEventsDataBatchPutMessageErrorEntry
 */
export interface IoTEventsDataBatchPutMessageErrorEntry {
  /**
   * @schema IoTEventsDataBatchPutMessageErrorEntry#messageId
   */
  readonly messageId?: string;

  /**
   * @schema IoTEventsDataBatchPutMessageErrorEntry#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema IoTEventsDataBatchPutMessageErrorEntry#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema IoTEventsDataUpdateDetectorRequest
 */
export interface IoTEventsDataUpdateDetectorRequest {
  /**
   * @schema IoTEventsDataUpdateDetectorRequest#messageId
   */
  readonly messageId: string;

  /**
   * @schema IoTEventsDataUpdateDetectorRequest#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema IoTEventsDataUpdateDetectorRequest#keyValue
   */
  readonly keyValue?: string;

  /**
   * @schema IoTEventsDataUpdateDetectorRequest#state
   */
  readonly state: IoTEventsDataDetectorStateDefinition;

}

/**
 * @schema IoTEventsDataBatchUpdateDetectorErrorEntry
 */
export interface IoTEventsDataBatchUpdateDetectorErrorEntry {
  /**
   * @schema IoTEventsDataBatchUpdateDetectorErrorEntry#messageId
   */
  readonly messageId?: string;

  /**
   * @schema IoTEventsDataBatchUpdateDetectorErrorEntry#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema IoTEventsDataBatchUpdateDetectorErrorEntry#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema IoTEventsDataDetector
 */
export interface IoTEventsDataDetector {
  /**
   * @schema IoTEventsDataDetector#detectorModelName
   */
  readonly detectorModelName?: string;

  /**
   * @schema IoTEventsDataDetector#keyValue
   */
  readonly keyValue?: string;

  /**
   * @schema IoTEventsDataDetector#detectorModelVersion
   */
  readonly detectorModelVersion?: string;

  /**
   * @schema IoTEventsDataDetector#state
   */
  readonly state?: IoTEventsDataDetectorState;

  /**
   * @schema IoTEventsDataDetector#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTEventsDataDetector#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * @schema IoTEventsDataDetectorSummary
 */
export interface IoTEventsDataDetectorSummary {
  /**
   * @schema IoTEventsDataDetectorSummary#detectorModelName
   */
  readonly detectorModelName?: string;

  /**
   * @schema IoTEventsDataDetectorSummary#keyValue
   */
  readonly keyValue?: string;

  /**
   * @schema IoTEventsDataDetectorSummary#detectorModelVersion
   */
  readonly detectorModelVersion?: string;

  /**
   * @schema IoTEventsDataDetectorSummary#state
   */
  readonly state?: IoTEventsDataDetectorStateSummary;

  /**
   * @schema IoTEventsDataDetectorSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema IoTEventsDataDetectorSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * @schema IoTEventsDataDetectorStateDefinition
 */
export interface IoTEventsDataDetectorStateDefinition {
  /**
   * @schema IoTEventsDataDetectorStateDefinition#stateName
   */
  readonly stateName: string;

  /**
   * @schema IoTEventsDataDetectorStateDefinition#variables
   */
  readonly variables: IoTEventsDataVariableDefinition[];

  /**
   * @schema IoTEventsDataDetectorStateDefinition#timers
   */
  readonly timers: IoTEventsDataTimerDefinition[];

}

/**
 * @schema IoTEventsDataDetectorState
 */
export interface IoTEventsDataDetectorState {
  /**
   * @schema IoTEventsDataDetectorState#stateName
   */
  readonly stateName: string;

  /**
   * @schema IoTEventsDataDetectorState#variables
   */
  readonly variables: IoTEventsDataVariable[];

  /**
   * @schema IoTEventsDataDetectorState#timers
   */
  readonly timers: IoTEventsDataTimer[];

}

/**
 * @schema IoTEventsDataDetectorStateSummary
 */
export interface IoTEventsDataDetectorStateSummary {
  /**
   * @schema IoTEventsDataDetectorStateSummary#stateName
   */
  readonly stateName?: string;

}

/**
 * @schema IoTEventsDataVariableDefinition
 */
export interface IoTEventsDataVariableDefinition {
  /**
   * @schema IoTEventsDataVariableDefinition#name
   */
  readonly name: string;

  /**
   * @schema IoTEventsDataVariableDefinition#value
   */
  readonly value: string;

}

/**
 * @schema IoTEventsDataTimerDefinition
 */
export interface IoTEventsDataTimerDefinition {
  /**
   * @schema IoTEventsDataTimerDefinition#name
   */
  readonly name: string;

  /**
   * @schema IoTEventsDataTimerDefinition#seconds
   */
  readonly seconds: number;

}

/**
 * @schema IoTEventsDataVariable
 */
export interface IoTEventsDataVariable {
  /**
   * @schema IoTEventsDataVariable#name
   */
  readonly name: string;

  /**
   * @schema IoTEventsDataVariable#value
   */
  readonly value: string;

}

/**
 * @schema IoTEventsDataTimer
 */
export interface IoTEventsDataTimer {
  /**
   * @schema IoTEventsDataTimer#name
   */
  readonly name: string;

  /**
   * @schema IoTEventsDataTimer#timestamp
   */
  readonly timestamp: string;

}
