/**
 * @schema BatchPutMessageRequest
 */
export interface BatchPutMessageRequest {
  /**
   * @schema BatchPutMessageRequest#messages
   */
  readonly messages: Message[];

}

/**
 * @schema BatchPutMessageResponse
 */
export interface BatchPutMessageResponse {
  /**
   * @schema BatchPutMessageResponse#BatchPutMessageErrorEntries
   */
  readonly batchPutMessageErrorEntries?: BatchPutMessageErrorEntry[];

}

/**
 * @schema BatchUpdateDetectorRequest
 */
export interface BatchUpdateDetectorRequest {
  /**
   * @schema BatchUpdateDetectorRequest#detectors
   */
  readonly detectors: UpdateDetectorRequest[];

}

/**
 * @schema BatchUpdateDetectorResponse
 */
export interface BatchUpdateDetectorResponse {
  /**
   * @schema BatchUpdateDetectorResponse#batchUpdateDetectorErrorEntries
   */
  readonly batchUpdateDetectorErrorEntries?: BatchUpdateDetectorErrorEntry[];

}

/**
 * @schema DescribeDetectorRequest
 */
export interface DescribeDetectorRequest {
  /**
   * @schema DescribeDetectorRequest#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema DescribeDetectorRequest#keyValue
   */
  readonly keyValue?: string;

}

/**
 * @schema DescribeDetectorResponse
 */
export interface DescribeDetectorResponse {
  /**
   * @schema DescribeDetectorResponse#detector
   */
  readonly detector?: Detector;

}

/**
 * @schema ListDetectorsRequest
 */
export interface ListDetectorsRequest {
  /**
   * @schema ListDetectorsRequest#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema ListDetectorsRequest#stateName
   */
  readonly stateName?: string;

  /**
   * @schema ListDetectorsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDetectorsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDetectorsResponse
 */
export interface ListDetectorsResponse {
  /**
   * @schema ListDetectorsResponse#detectorSummaries
   */
  readonly detectorSummaries?: DetectorSummary[];

  /**
   * @schema ListDetectorsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema Message
 */
export interface Message {
  /**
   * @schema Message#messageId
   */
  readonly messageId: string;

  /**
   * @schema Message#inputName
   */
  readonly inputName: string;

  /**
   * @schema Message#payload
   */
  readonly payload: any;

}

/**
 * @schema BatchPutMessageErrorEntry
 */
export interface BatchPutMessageErrorEntry {
  /**
   * @schema BatchPutMessageErrorEntry#messageId
   */
  readonly messageId?: string;

  /**
   * @schema BatchPutMessageErrorEntry#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema BatchPutMessageErrorEntry#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema UpdateDetectorRequest
 */
export interface UpdateDetectorRequest {
  /**
   * @schema UpdateDetectorRequest#messageId
   */
  readonly messageId: string;

  /**
   * @schema UpdateDetectorRequest#detectorModelName
   */
  readonly detectorModelName: string;

  /**
   * @schema UpdateDetectorRequest#keyValue
   */
  readonly keyValue?: string;

  /**
   * @schema UpdateDetectorRequest#state
   */
  readonly state: DetectorStateDefinition;

}

/**
 * @schema BatchUpdateDetectorErrorEntry
 */
export interface BatchUpdateDetectorErrorEntry {
  /**
   * @schema BatchUpdateDetectorErrorEntry#messageId
   */
  readonly messageId?: string;

  /**
   * @schema BatchUpdateDetectorErrorEntry#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema BatchUpdateDetectorErrorEntry#errorMessage
   */
  readonly errorMessage?: string;

}

/**
 * @schema Detector
 */
export interface Detector {
  /**
   * @schema Detector#detectorModelName
   */
  readonly detectorModelName?: string;

  /**
   * @schema Detector#keyValue
   */
  readonly keyValue?: string;

  /**
   * @schema Detector#detectorModelVersion
   */
  readonly detectorModelVersion?: string;

  /**
   * @schema Detector#state
   */
  readonly state?: DetectorState;

  /**
   * @schema Detector#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema Detector#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * @schema DetectorSummary
 */
export interface DetectorSummary {
  /**
   * @schema DetectorSummary#detectorModelName
   */
  readonly detectorModelName?: string;

  /**
   * @schema DetectorSummary#keyValue
   */
  readonly keyValue?: string;

  /**
   * @schema DetectorSummary#detectorModelVersion
   */
  readonly detectorModelVersion?: string;

  /**
   * @schema DetectorSummary#state
   */
  readonly state?: DetectorStateSummary;

  /**
   * @schema DetectorSummary#creationTime
   */
  readonly creationTime?: string;

  /**
   * @schema DetectorSummary#lastUpdateTime
   */
  readonly lastUpdateTime?: string;

}

/**
 * @schema DetectorStateDefinition
 */
export interface DetectorStateDefinition {
  /**
   * @schema DetectorStateDefinition#stateName
   */
  readonly stateName: string;

  /**
   * @schema DetectorStateDefinition#variables
   */
  readonly variables: VariableDefinition[];

  /**
   * @schema DetectorStateDefinition#timers
   */
  readonly timers: TimerDefinition[];

}

/**
 * @schema DetectorState
 */
export interface DetectorState {
  /**
   * @schema DetectorState#stateName
   */
  readonly stateName: string;

  /**
   * @schema DetectorState#variables
   */
  readonly variables: Variable[];

  /**
   * @schema DetectorState#timers
   */
  readonly timers: Timer[];

}

/**
 * @schema DetectorStateSummary
 */
export interface DetectorStateSummary {
  /**
   * @schema DetectorStateSummary#stateName
   */
  readonly stateName?: string;

}

/**
 * @schema VariableDefinition
 */
export interface VariableDefinition {
  /**
   * @schema VariableDefinition#name
   */
  readonly name: string;

  /**
   * @schema VariableDefinition#value
   */
  readonly value: string;

}

/**
 * @schema TimerDefinition
 */
export interface TimerDefinition {
  /**
   * @schema TimerDefinition#name
   */
  readonly name: string;

  /**
   * @schema TimerDefinition#seconds
   */
  readonly seconds: number;

}

/**
 * @schema Variable
 */
export interface Variable {
  /**
   * @schema Variable#name
   */
  readonly name: string;

  /**
   * @schema Variable#value
   */
  readonly value: string;

}

/**
 * @schema Timer
 */
export interface Timer {
  /**
   * @schema Timer#name
   */
  readonly name: string;

  /**
   * @schema Timer#timestamp
   */
  readonly timestamp: string;

}
